import { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import {
  ZoomIn,
  ZoomOut,
  RotateCw,
  Download,
  ChevronLeft,
  ChevronRight,
  Grid3x3,
  Trash2,
} from "lucide-react";
import { PDFThumbnails } from "./pdf-thumbnails";
import { SignatureToolbar } from "./signature-toolbar";
import { PDFFile } from "../dashboard/recent-files";
import { toast } from "sonner";
import { getDownloadUrl, listFiles } from "@/lib/api";
import { configurePDFWorker, pdfjsLib } from "@/lib/pdf-worker";

interface SignatureData {
  id: string;
  type: "full-name" | "initials";
  text: string;
  style: string;
  createdAt: string;
}

interface PlacedElement {
  id: string;
  type: "signature";
  x: number;
  y: number;
  page: number;
  content: string;
  style?: string;
}

interface PDFViewerProps {
  file: PDFFile;
  onClose: () => void;
  onSwitchToEditor?: () => void;
}

export function PDFViewer({ file, onClose }: PDFViewerProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [signatures, setSignatures] = useState<SignatureData[]>([]);
  const [placedElements, setPlacedElements] = useState<PlacedElement[]>([]);
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pdfUrl, setPdfUrl] = useState<string>("");
  const viewerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Load PDF when component mounts
  useEffect(() => {
    configurePDFWorker();
    loadPDF();
  }, [file.id]);

  const loadPDF = async () => {
    try {
      setIsLoading(true);

      // Get the actual backend file ID
      const files = await listFiles();
      const backendFile = files.find(
        (f) => f.filename === file.name || f.file_id === file.id
      );

      if (!backendFile) {
        toast.error("File not found in backend");
        setIsLoading(false);
        return;
      }

      // Get download URL
      const url = getDownloadUrl(backendFile.file_id);
      setPdfUrl(url);

      // Load PDF with PDF.js
      const loadingTask = (pdfjsLib as any).getDocument(url);
      const doc = await loadingTask.promise;

      setPdfDoc(doc);
      setTotalPages(doc.numPages);

      setIsLoading(false);
      toast.success(`PDF loaded: ${doc.numPages} pages`);
    } catch (error: any) {
      console.error("Failed to load PDF:", error);
      toast.error(`Failed to load PDF: ${error.message}`);
      setIsLoading(false);
    }
  };

  // Render current page
  useEffect(() => {
    if (pdfDoc && canvasRef.current) {
      renderPage(currentPage);
    }
  }, [pdfDoc, currentPage, zoom, rotation]);

  const renderPage = async (pageNum: number) => {
    if (!pdfDoc || !canvasRef.current) return;

    try {
      const page = await pdfDoc.getPage(pageNum);
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      const viewport = page.getViewport({
        scale: zoom / 100,
        rotation: rotation,
      });

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context!,
        viewport: viewport,
      };

      await page.render(renderContext).promise;
    } catch (error) {
      console.error("Error rendering page:", error);
    }
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 25, 300));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 25, 25));
  const handleRotate = () => setRotation((prev) => (prev + 90) % 360);

  const handleDownload = () => {
    if (pdfUrl) {
      const a = document.createElement("a");
      a.href = pdfUrl;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      toast.success("PDF downloaded");
    } else {
      toast.error("PDF not loaded yet");
    }
  };

  const handleSignatureCreate = (signature: SignatureData) => {
    setSignatures((prev) => [...prev, signature]);
    toast.success("Signature created! Click on the PDF to place it.");
  };

  const handlePageClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!selectedTool || !selectedTool.startsWith("signature-")) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const signatureId = selectedTool.replace("signature-", "");
    const signature = signatures.find((sig) => sig.id === signatureId);

    if (signature) {
      const signatureElement: PlacedElement = {
        id: `placed-${Date.now()}`,
        type: "signature",
        x,
        y,
        page: currentPage,
        content: signature.text,
        style: signature.style,
      };
      setPlacedElements((prev) => [...prev, signatureElement]);
      setSelectedTool(null);
      toast.success("Signature placed");
    }
  };

  const getCurrentPageElements = () => {
    return placedElements.filter((element) => element.page === currentPage);
  };

  const getSignatureStyles = (style: string): React.CSSProperties => {
    const styleMap: Record<string, React.CSSProperties> = {
      cursive: { fontFamily: "cursive", fontStyle: "italic" },
      serif: { fontFamily: "serif" },
      "sans-serif": { fontFamily: "sans-serif" },
      script: { fontFamily: "fantasy" },
    };
    return styleMap[style] || {};
  };

  const handleElementDelete = (elementId: string) => {
    setPlacedElements((prev) => prev.filter((el) => el.id !== elementId));
    toast.success("Signature removed");
  };

  // Render actual PDF using canvas
  const renderPDFPage = () => (
    <div
      className={`bg-white shadow-lg mx-auto relative ${selectedTool ? "cursor-crosshair" : "cursor-default"}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        maxWidth: "100%",
      }}
      onClick={handlePageClick}
    >
      {isLoading ? (
        <div className="flex items-center justify-center p-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p>Loading PDF...</p>
          </div>
        </div>
      ) : (
        <canvas ref={canvasRef} className="max-w-full h-auto" />
      )}

      {/* Placed Signatures */}
      {getCurrentPageElements().map((element) => (
        <div
          key={element.id}
          className="absolute group"
          style={{
            left: `${element.x}px`,
            top: `${element.y}px`,
          }}
        >
          {element.type === "signature" && (
            <div
              className="text-2xl font-bold text-blue-600 border-2 border-blue-300 bg-blue-50/50 px-4 py-2 rounded"
              style={getSignatureStyles(element.style || "cursive")}
            >
              {element.content}
            </div>
          )}

          {/* Element delete control */}
          <div className="absolute -top-8 left-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white border rounded shadow-sm p-1 flex gap-1">
            <Button
              size="sm"
              variant="ghost"
              className="h-6 w-6 p-0"
              onClick={() => handleElementDelete(element.id)}
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col">
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
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowThumbnails(!showThumbnails)}
          >
            <Grid3x3 className="h-4 w-4 mr-2" />
            {showThumbnails ? "Hide" : "Show"} Thumbnails
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Thumbnails Sidebar */}
        {showThumbnails && (
          <div className="w-48 border-r bg-muted/30">
            <PDFThumbnails
              totalPages={totalPages}
              currentPage={currentPage}
              onPageSelect={setCurrentPage}
            />
          </div>
        )}

        {/* Main Viewer */}
        <div className="flex-1 flex flex-col">
          {/* Toolbar */}
          <div className="border-b p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleZoomOut}>
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Badge variant="outline">{zoom}%</Badge>
              <Button variant="outline" size="sm" onClick={handleZoomIn}>
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={handleRotate}>
                <RotateCw className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  value={currentPage}
                  onChange={(e) => handlePageChange(parseInt(e.target.value))}
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
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="secondary">
                {placedElements.length} signature
                {placedElements.length !== 1 ? "s" : ""} placed
              </Badge>
              {selectedTool && (
                <Badge variant="outline">Click on PDF to place signature</Badge>
              )}
            </div>
          </div>

          {/* Signature Toolbar */}
          <SignatureToolbar
            selectedTool={selectedTool}
            onToolSelect={setSelectedTool}
            onSignatureCreate={handleSignatureCreate}
            signatures={signatures}
          />

          {/* PDF Content */}
          <div ref={viewerRef} className="flex-1 overflow-auto bg-gray-100 p-8">
            {renderPDFPage()}
          </div>
        </div>
      </div>
    </div>
  );
}
