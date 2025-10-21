import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Badge } from "../ui/badge";
import {
  Save,
  Download,
  Edit3,
  Type,
  ChevronLeft,
  ChevronRight,
  FileText,
  Loader2,
  Trash2,
  Plus,
} from "lucide-react";
import { PDFFile } from "../dashboard/recent-files";
import { configurePDFWorker, pdfjsLib } from "../../lib/pdf-worker";
import { toast } from "sonner";

interface ExtractedPage {
  pageNumber: number;
  text: string;
  editableText: string;
  isEditing: boolean;
  originalText: string;
}

interface PDFEditorProps {
  file: PDFFile;
  onClose: () => void;
  onSwitchToViewer?: () => void;
}

export function PDFEditor({ file, onClose, onSwitchToViewer }: PDFEditorProps) {
  const [pages, setPages] = useState<ExtractedPage[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isExtracting, setIsExtracting] = useState(false);
  const [pdfDoc, setPdfDoc] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [hasChanges, setHasChanges] = useState(false);

  // Configure PDF.js worker
  useEffect(() => {
    configurePDFWorker();
  }, []);

  // Load PDF document or check for pre-extracted text
  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        setIsLoading(true);

        // Check if text was already extracted from PDFTron
        const preExtractedText = localStorage.getItem(
          `extracted-text-${file.id}`
        );
        if (preExtractedText) {
          // Parse the pre-extracted text into pages
          const pageTexts = preExtractedText.split(/=== Page \d+ ===\n\n/);
          pageTexts.shift(); // Remove empty first element

          const extractedPages: ExtractedPage[] = pageTexts.map(
            (pageText, index) => ({
              pageNumber: index + 1,
              text: pageText.trim(),
              editableText: pageText.trim(),
              originalText: pageText.trim(),
              isEditing: false,
            })
          );

          setPages(extractedPages);
          setTotalPages(extractedPages.length);
          setIsLoading(false);
          toast.success(
            `Loaded pre-extracted text from ${extractedPages.length} pages`
          );
          return;
        }

        // Fallback to PDF.js extraction
        const url =
          file.id === "sample"
            ? "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"
            : undefined;
        if (!url) {
          setIsLoading(false);
          return;
        }

        const loadingTask = (pdfjsLib as any).getDocument({
          url,
          useWorkerFetch: false,
          isEvalSupported: false,
          useSystemFonts: true,
        });
        const doc = await loadingTask.promise;
        if (cancelled) return;

        setPdfDoc(doc);
        setTotalPages(doc.numPages);
        setIsLoading(false);
      } catch (err) {
        console.error("Failed to load PDF", err);
        toast.error("Failed to load PDF document");
        setIsLoading(false);
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [file.id]);

  // Extract text from all pages with better formatting
  const extractAllText = async () => {
    if (!pdfDoc) return;

    setIsExtracting(true);
    const extractedPages: ExtractedPage[] = [];

    try {
      for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
        const page = await pdfDoc.getPage(pageNum);
        const textContent = await page.getTextContent();
        const viewport = page.getViewport({ scale: 1.0 });

        // Group text items by approximate lines based on Y position
        const textItems: any[] = textContent.items.filter(
          (item: any) => "str" in item
        );

        // Sort by Y position (descending) and then X position (ascending)
        textItems.sort((a, b) => {
          const yDiff = b.transform[5] - a.transform[5]; // Y coordinate
          if (Math.abs(yDiff) > 5) return yDiff > 0 ? 1 : -1; // Different lines
          return a.transform[4] - b.transform[4]; // Same line, sort by X
        });

        // Group into lines and add proper spacing
        const lines: string[] = [];
        let currentLine = "";
        let lastY = -1;
        let lastX = -1;

        for (const item of textItems) {
          const x = item.transform[4];
          const y = item.transform[5];
          const text = item.str;

          // Check if this is a new line
          if (lastY !== -1 && Math.abs(y - lastY) > 5) {
            if (currentLine.trim()) {
              lines.push(currentLine.trim());
            }
            currentLine = text;
          } else {
            // Same line - add spacing if there's a gap
            if (lastX !== -1 && x - lastX > item.width * 2) {
              currentLine += "  " + text;
            } else if (currentLine) {
              currentLine += text;
            } else {
              currentLine = text;
            }
          }

          lastY = y;
          lastX = x + item.width;
        }

        // Add the last line
        if (currentLine.trim()) {
          lines.push(currentLine.trim());
        }

        // Join lines with proper paragraph breaks
        let formattedText = lines.join("\n");

        // Add extra line breaks for paragraphs (heuristic: lines with significant spacing)
        formattedText = formattedText.replace(/\n(?=\S)/g, "\n\n");

        // Clean up excessive line breaks
        formattedText = formattedText.replace(/\n{3,}/g, "\n\n");

        extractedPages.push({
          pageNumber: pageNum,
          text: formattedText,
          editableText: formattedText,
          originalText: formattedText,
          isEditing: false,
        });
      }

      setPages(extractedPages);
      toast.success(`Extracted text from ${extractedPages.length} pages`);
    } catch (error) {
      console.error("Error extracting text:", error);
      toast.error("Failed to extract text from PDF");
    } finally {
      setIsExtracting(false);
    }
  };

  const handlePageTextChange = (pageNumber: number, newText: string) => {
    setPages((prev) =>
      prev.map((page) =>
        page.pageNumber === pageNumber
          ? { ...page, editableText: newText }
          : page
      )
    );
    setHasChanges(true);
  };

  const togglePageEditing = (pageNumber: number) => {
    setPages((prev) =>
      prev.map((page) =>
        page.pageNumber === pageNumber
          ? { ...page, isEditing: !page.isEditing }
          : page
      )
    );
  };

  const savePageChanges = (pageNumber: number) => {
    setPages((prev) =>
      prev.map((page) =>
        page.pageNumber === pageNumber
          ? { ...page, text: page.editableText, isEditing: false }
          : page
      )
    );
    toast.success(`Page ${pageNumber} saved`);
  };

  const resetPageText = (pageNumber: number) => {
    setPages((prev) =>
      prev.map((page) =>
        page.pageNumber === pageNumber
          ? {
              ...page,
              editableText: page.originalText,
              text: page.originalText,
            }
          : page
      )
    );
    toast.success(`Page ${pageNumber} reset to original`);
  };

  const addNewPage = () => {
    const newPageNumber = pages.length + 1;
    const newPage: ExtractedPage = {
      pageNumber: newPageNumber,
      text: "",
      editableText: "",
      originalText: "",
      isEditing: true,
    };
    setPages((prev) => [...prev, newPage]);
    setCurrentPage(newPageNumber);
    setTotalPages((prev) => prev + 1);
    setHasChanges(true);
    toast.success("New page added");
  };

  const deletePage = (pageNumber: number) => {
    if (pages.length <= 1) {
      toast.error("Cannot delete the last page");
      return;
    }

    setPages((prev) => {
      const filtered = prev.filter((page) => page.pageNumber !== pageNumber);
      // Renumber pages
      return filtered.map((page, index) => ({
        ...page,
        pageNumber: index + 1,
      }));
    });

    setTotalPages((prev) => prev - 1);
    if (currentPage > pages.length - 1) {
      setCurrentPage(pages.length - 1);
    }
    setHasChanges(true);
    toast.success("Page deleted");
  };

  const saveAllChanges = () => {
    // Create a downloadable text file with all pages
    const allText = pages
      .map((page) => `=== Page ${page.pageNumber} ===\n\n${page.text}\n\n`)
      .join("");

    const blob = new Blob([allText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${file.name.replace(".pdf", "")}_edited.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setHasChanges(false);
    toast.success("Document saved as text file");
  };

  const exportAsJSON = () => {
    const exportData = {
      originalFile: file.name,
      exportDate: new Date().toISOString(),
      pages: pages.map((page) => ({
        pageNumber: page.pageNumber,
        originalText: page.originalText,
        editedText: page.text,
        hasChanges: page.text !== page.originalText,
      })),
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${file.name.replace(".pdf", "")}_data.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast.success("Document data exported as JSON");
  };

  const exportAsMarkdown = () => {
    const markdown = pages
      .map((page) => {
        const pageHeader = `# Page ${page.pageNumber}\n\n`;
        const content = page.text.replace(/\n\n+/g, "\n\n"); // Ensure proper paragraph breaks
        return pageHeader + content + "\n\n---\n\n";
      })
      .join("");

    const finalMarkdown = `# ${file.name}\n\n*Extracted on ${new Date().toLocaleDateString()}*\n\n${markdown}`;

    const blob = new Blob([finalMarkdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${file.name.replace(".pdf", "")}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast.success("Document exported as Markdown");
  };

  const exportAsHTML = () => {
    const htmlContent = pages
      .map((page) => {
        const pageContent = page.text
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/\n\n/g, "</p><p>")
          .replace(/\n/g, "<br>");

        return `
        <div class="page">
          <h2>Page ${page.pageNumber}</h2>
          <p>${pageContent}</p>
        </div>
      `;
      })
      .join("");

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${file.name}</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; }
        h1 { color: #333; border-bottom: 2px solid #333; }
        h2 { color: #666; margin-top: 2em; }
        .page { margin-bottom: 3em; padding-bottom: 2em; border-bottom: 1px solid #eee; }
        .meta { color: #999; font-style: italic; margin-bottom: 2em; }
        p { margin-bottom: 1em; }
    </style>
</head>
<body>
    <h1>${file.name}</h1>
    <div class="meta">Extracted on ${new Date().toLocaleDateString()}</div>
    ${htmlContent}
</body>
</html>`;

    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${file.name.replace(".pdf", "")}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast.success("Document exported as HTML");
  };

  const currentPageData = pages.find((page) => page.pageNumber === currentPage);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Loading PDF document...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col">
      {/* Header */}
      <div className="border-b p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={onClose}>
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          {onSwitchToViewer && (
            <Button variant="outline" size="sm" onClick={onSwitchToViewer}>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to PDF Viewer
            </Button>
          )}
          <div>
            <h2 className="font-semibold flex items-center gap-2">
              <FileText className="h-5 w-5" />
              {file.name} - Text Editor
            </h2>
            <p className="text-sm text-muted-foreground">{file.size}</p>
          </div>
          {hasChanges && <Badge variant="secondary">Unsaved Changes</Badge>}
        </div>

        <div className="flex items-center gap-2">
          {pages.length === 0 && (
            <Button onClick={extractAllText} disabled={isExtracting}>
              {isExtracting ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Type className="h-4 w-4 mr-2" />
              )}
              {isExtracting ? "Extracting..." : "Extract Text"}
            </Button>
          )}

          {pages.length > 0 && (
            <>
              <Button variant="outline" size="sm" onClick={addNewPage}>
                <Plus className="h-4 w-4 mr-2" />
                New Page
              </Button>
              <Button variant="outline" size="sm" onClick={exportAsMarkdown}>
                <Download className="h-4 w-4 mr-2" />
                Markdown
              </Button>
              <Button variant="outline" size="sm" onClick={exportAsHTML}>
                <Download className="h-4 w-4 mr-2" />
                HTML
              </Button>
              <Button variant="outline" size="sm" onClick={exportAsJSON}>
                <Download className="h-4 w-4 mr-2" />
                JSON
              </Button>
              <Button onClick={saveAllChanges} disabled={!hasChanges}>
                <Save className="h-4 w-4 mr-2" />
                Save as Text
              </Button>
            </>
          )}
        </div>
      </div>

      {pages.length === 0 ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md">
            <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">Extract PDF Text</h3>
            <p className="text-muted-foreground mb-4">
              Click "Extract Text" to convert your PDF pages into editable text
              format.
            </p>
            <Button onClick={extractAllText} disabled={isExtracting}>
              {isExtracting ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Type className="h-4 w-4 mr-2" />
              )}
              {isExtracting ? "Extracting..." : "Extract Text from PDF"}
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col">
          {/* Page Navigation */}
          <div className="border-b p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  value={currentPage}
                  onChange={(e) => {
                    const page = parseInt(e.target.value);
                    if (page >= 1 && page <= totalPages) {
                      setCurrentPage(page);
                    }
                  }}
                  className="w-16 text-center"
                  min={1}
                  max={totalPages}
                />
                <span className="text-sm text-muted-foreground">
                  of {totalPages}
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {currentPageData && (
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => resetPageText(currentPageData.pageNumber)}
                >
                  Reset
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => deletePage(currentPageData.pageNumber)}
                  disabled={pages.length <= 1}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => togglePageEditing(currentPageData.pageNumber)}
                >
                  <Edit3 className="h-4 w-4 mr-2" />
                  {currentPageData.isEditing ? "View" : "Edit"}
                </Button>
                {currentPageData.isEditing && (
                  <Button
                    size="sm"
                    onClick={() => savePageChanges(currentPageData.pageNumber)}
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Page
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Page Content */}
          <div className="flex-1 overflow-auto p-6">
            {currentPageData ? (
              <Card className="max-w-4xl mx-auto">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">
                      Page {currentPageData.pageNumber}
                    </h3>
                    {currentPageData.text !== currentPageData.originalText && (
                      <Badge variant="secondary">Modified</Badge>
                    )}
                  </div>

                  {currentPageData.isEditing ? (
                    <Textarea
                      value={currentPageData.editableText}
                      onChange={(e) =>
                        handlePageTextChange(
                          currentPageData.pageNumber,
                          e.target.value
                        )
                      }
                      className="min-h-96 font-mono text-sm"
                      placeholder="Enter your text content..."
                    />
                  ) : (
                    <div className="min-h-96 p-4 border rounded-md bg-muted/30">
                      <pre className="whitespace-pre-wrap font-mono text-sm">
                        {currentPageData.text ||
                          "This page is empty. Click 'Edit' to add content."}
                      </pre>
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <div className="text-center">
                <p className="text-muted-foreground">Page not found</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
