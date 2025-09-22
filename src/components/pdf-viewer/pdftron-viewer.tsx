import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  ChevronLeft,
  Download,
  Edit,
  Settings,
  Grid3x3,
  Save,
} from "lucide-react";
import { PDFFile } from "../dashboard/recent-files";
import { toast } from "sonner";

interface PDFTronViewerProps {
  file: PDFFile;
  onClose: () => void;
  onSwitchToEditor?: () => void;
  onFallback?: () => void;
}

export function PDFTronViewer({
  file,
  onClose,
  onSwitchToEditor,
  onFallback,
}: PDFTronViewerProps) {
  const viewer = useRef<HTMLDivElement>(null);
  const [isViewerReady, setIsViewerReady] = useState(false);
  const [webViewerInstance, setWebViewerInstance] = useState<any>(null);
  const [extractedText, setExtractedText] = useState<string>("");
  const [isExtracting, setIsExtracting] = useState(false);
  const [initError, setInitError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to fallback if PDFTron takes too long
    const fallbackTimer = setTimeout(() => {
      if (!isViewerReady && onFallback) {
        console.warn(
          "PDFTron WebViewer taking too long to load, falling back to basic viewer",
        );
        onFallback();
      }
    }, 5000); // 5 second timeout

    const initializeWebViewer = async () => {
      try {
        // Check if we're in the browser
        if (typeof window === "undefined") {
          console.log(
            "Not in browser environment, skipping PDFTron initialization",
          );
          return;
        }

        console.log("Starting PDFTron WebViewer initialization...");

        // Dynamically import WebViewer to avoid SSR issues
        const WebViewer = (await import("@pdftron/webviewer")).default;
        console.log("WebViewer module loaded successfully");

        console.log("Creating WebViewer instance...");
        const instance = await WebViewer(
          {
            path: "/pdftron",
            // For now, only load sample PDF since we don't have file upload implemented yet
            initialDoc:
              "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",
            enableMeasurement: true,
            enableRedaction: true,
            enableFilePicker: true,
            fullAPI: false, // Set to false for demo license
          },
          viewer.current!,
        );
        console.log("WebViewer instance created successfully");

        setWebViewerInstance(instance);
        setIsViewerReady(true);
        setIsLoading(false);
        clearTimeout(fallbackTimer);

        // Force resize after a small delay to ensure proper display
        setTimeout(() => {
          if (instance.UI && instance.UI.updateContainerSize) {
            instance.UI.updateContainerSize();
          }
        }, 100);

        const { documentViewer, annotationManager } = instance.Core;

        // Wait for document to load
        documentViewer.addEventListener("documentLoaded", async () => {
          const doc = await documentViewer.getDocument();
          console.log("Document loaded successfully:", doc);
          const pageCount = await doc.getPageCount();
          console.log("Page count:", pageCount);

          // Ensure proper sizing after document loads
          setTimeout(() => {
            if (instance.UI) {
              instance.UI.updateContainerSize();
            }
          }, 500);

          toast.success(`PDF loaded successfully (${pageCount} pages)`);
        });

        // Handle document load errors
        documentViewer.addEventListener("documentLoadError", (error: any) => {
          console.error("Document load error:", error);
          toast.error(
            "Failed to load PDF document: " +
              (error?.message || "Unknown error"),
          );
        });

        // Add viewer ready event
        instance.UI.addEventListener("viewerLoaded", () => {
          console.log("PDFTron viewer fully loaded and ready");

          // Ensure container is properly sized
          if (instance.UI) {
            instance.UI.updateContainerSize();
          }
        });
      } catch (error) {
        console.error("Error initializing WebViewer:", error);
        setInitError(error instanceof Error ? error.message : "Unknown error");
        setIsLoading(false);
        toast.error("Failed to initialize PDFTron WebViewer");

        // Fallback initialization without license
        try {
          const WebViewer = (await import("@pdftron/webviewer")).default;
          const instance = await WebViewer(
            {
              path: "/pdftron",
              // For now, only load sample PDF since we don't have file upload implemented yet
              initialDoc:
                "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",
            },
            viewer.current!,
          );
          setWebViewerInstance(instance);
          setIsViewerReady(true);
          setInitError(null);
        } catch (fallbackError) {
          console.error("Fallback initialization failed:", fallbackError);
          setInitError("Complete initialization failure");
          toast.error("Failed to initialize PDF viewer completely");
        }
      }
    };

    if (viewer.current && typeof window !== "undefined") {
      initializeWebViewer();
    }

    // Cleanup
    return () => {
      clearTimeout(fallbackTimer);
      try {
        if (webViewerInstance && webViewerInstance.UI) {
          webViewerInstance.UI.dispose();
        }
      } catch (cleanupError) {
        console.error("Error during cleanup:", cleanupError);
      }
    };
  }, [file]);

  const extractTextFromPDF = async () => {
    if (!webViewerInstance) {
      toast.error("PDF viewer not ready");
      return;
    }

    setIsExtracting(true);
    try {
      const { documentViewer, CoreControls } = webViewerInstance.Core;
      const doc = await documentViewer.getDocument();
      const pageCount = await doc.getPageCount();
      let fullText = "";

      console.log(`Starting text extraction from ${pageCount} pages...`);

      // Load the PDF.js text extraction functionality
      await documentViewer.getPageSearchResults(1, ""); // Initialize text layer

      // Extract text from each page
      for (let pageNumber = 1; pageNumber <= pageCount; pageNumber++) {
        try {
          console.log(`Extracting text from page ${pageNumber}...`);

          // Wait for page to be loaded
          await documentViewer.loadPage(pageNumber);

          // Use PDFTron's text extraction
          const textPositions = await documentViewer.getPageText(pageNumber);

          if (textPositions && textPositions.length > 0) {
            // Extract text content from text positions
            const pageText = textPositions
              .map((item: any) => {
                if (typeof item === "string") {
                  return item;
                } else if (item && item.text) {
                  return item.text;
                } else if (item && item.str) {
                  return item.str;
                }
                return "";
              })
              .join(" ");

            fullText += `=== Page ${pageNumber} ===\n\n${pageText.trim()}\n\n`;
          } else {
            console.warn(`No text found on page ${pageNumber}`);
            fullText += `=== Page ${pageNumber} ===\n\n[No extractable text found on this page]\n\n`;
          }
        } catch (pageError) {
          console.error(
            `Error extracting text from page ${pageNumber}:`,
            pageError,
          );
          fullText += `=== Page ${pageNumber} ===\n\n[Error extracting text from this page]\n\n`;
        }
      }

      if (
        !fullText.trim() ||
        (fullText.includes("[Error extracting text") &&
          !fullText.match(/[a-zA-Z0-9]/))
      ) {
        throw new Error("No readable text could be extracted from the PDF");
      }

      setExtractedText(fullText);
      console.log("Text extraction completed, total length:", fullText.length);

      // Save extracted text to localStorage for editor
      localStorage.setItem(`extracted-text-${file.id}`, fullText);

      toast.success(`Text extracted from ${pageCount} pages`);

      if (onSwitchToEditor) {
        onSwitchToEditor();
      }
    } catch (error) {
      console.error("Error extracting text:", error);

      // Fallback to basic PDF.js extraction if PDFTron fails
      console.log("Attempting fallback text extraction...");

      try {
        await extractTextFallback();
      } catch (fallbackError) {
        console.error("Fallback extraction also failed:", fallbackError);
        toast.error(
          `Failed to extract text from PDF: ${error instanceof Error ? error.message : "Unknown error"}`,
        );
      }
    } finally {
      setIsExtracting(false);
    }
  };

  // Fallback text extraction using PDF.js
  const extractTextFallback = async () => {
    console.log("Using PDF.js fallback for text extraction...");

    // Import PDF.js dynamically
    const pdfjsLib = await import("pdfjs-dist");

    // Configure worker
    if (typeof window !== "undefined") {
      const workerOptions = (pdfjsLib as any).GlobalWorkerOptions;
      if (workerOptions) {
        workerOptions.workerSrc = "/pdf.worker.min.js";
      }
    }

    const loadingTask = (pdfjsLib as any).getDocument({
      url: "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",
      useWorkerFetch: false,
    });

    const pdfDoc = await loadingTask.promise;
    let fullText = "";

    for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
      const page = await pdfDoc.getPage(pageNum);
      const textContent = await page.getTextContent();

      const pageText = textContent.items
        .filter((item: any) => "str" in item)
        .map((item: any) => item.str)
        .join(" ");

      fullText += `=== Page ${pageNum} ===\n\n${pageText}\n\n`;
    }

    setExtractedText(fullText);
    localStorage.setItem(`extracted-text-${file.id}`, fullText);

    toast.success(
      `Text extracted using fallback method from ${pdfDoc.numPages} pages`,
    );

    if (onSwitchToEditor) {
      onSwitchToEditor();
    }
  };

  const downloadPDF = async () => {
    if (!webViewerInstance) {
      toast.error("PDF viewer not ready");
      return;
    }

    try {
      const { documentViewer } = webViewerInstance.Core;
      const doc = await documentViewer.getDocument();
      const data = await doc.getFileData({});
      const blob = new Blob([data], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast.success("PDF downloaded successfully");
    } catch (error) {
      console.error("Error downloading PDF:", error);
      toast.error("Failed to download PDF");
    }
  };

  const saveAnnotations = async () => {
    if (!webViewerInstance) {
      toast.error("PDF viewer not ready");
      return;
    }

    try {
      const { documentViewer, annotationManager } = webViewerInstance.Core;
      const doc = await documentViewer.getDocument();
      const xfdfString = await annotationManager.exportAnnotations();

      // Save with annotations
      const data = await doc.getFileData({
        xfdfString: xfdfString,
      });

      const blob = new Blob([data], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = file.name.replace(".pdf", "_annotated.pdf");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast.success("PDF with annotations saved successfully");
    } catch (error) {
      console.error("Error saving annotations:", error);
      toast.error("Failed to save annotations");
    }
  };

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col h-screen w-screen">
      {/* Header */}
      <div className="border-b p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={onClose}>
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <div>
            <h2 className="font-semibold">{file.name}</h2>
            <p className="text-sm text-muted-foreground">{file.size}</p>
          </div>
          {isViewerReady && (
            <Badge variant="secondary">PDFTron WebViewer</Badge>
          )}
        </div>

        <div className="flex items-center gap-2">
          {onSwitchToEditor && (
            <Button
              variant="outline"
              size="sm"
              onClick={extractTextFromPDF}
              disabled={!isViewerReady || isExtracting}
            >
              <Edit className="h-4 w-4 mr-2" />
              {isExtracting ? "Extracting..." : "Edit Text"}
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={saveAnnotations}
            disabled={!isViewerReady}
          >
            <Save className="h-4 w-4 mr-2" />
            Save Annotations
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={downloadPDF}
            disabled={!isViewerReady}
          >
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* PDFTron WebViewer Container */}
      <div
        className="flex-1 relative bg-gray-100"
        style={{ height: "calc(100vh - 80px)" }}
      >
        <div
          ref={viewer}
          className="w-full h-full absolute inset-0"
          style={{
            minHeight: "600px",
          }}
        />

        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/90">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p>Loading PDFTron WebViewer...</p>
            </div>
          </div>
        )}

        {initError && !isViewerReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/90">
            <div className="text-center max-w-md">
              <div className="text-red-500 text-6xl mb-4">⚠️</div>
              <h3 className="text-lg font-semibold mb-2">
                PDFTron WebViewer Failed
              </h3>
              <p className="text-muted-foreground mb-4">
                Could not initialize PDFTron WebViewer. This might be due to
                licensing or resource loading issues.
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Error: {initError}
              </p>
              <div className="flex gap-2 justify-center">
                {onFallback && (
                  <Button onClick={onFallback} variant="outline">
                    Use Basic Viewer
                  </Button>
                )}
                <Button onClick={() => window.location.reload()}>
                  Try Again
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
