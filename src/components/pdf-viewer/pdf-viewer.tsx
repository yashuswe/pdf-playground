import { useState, useRef } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import {
  ZoomIn,
  ZoomOut,
  RotateCw,
  Download,
  Search,
  ChevronLeft,
  ChevronRight,
  Maximize,
  Grid3x3,
  Settings,
  Edit,
  Trash2,
} from "lucide-react";
import { AnnotationToolbar } from "./annotation-toolbar";
import { PDFThumbnails } from "./pdf-thumbnails";
import { WatermarkDialog } from "./watermark-dialog";
import { PageNumbersDialog } from "./page-numbers-dialog";
import { PageManagement } from "./page-management";
import { TextEditorDialog } from "./text-editor-dialog";
import { PDFFile } from "../dashboard/recent-files";
import { toast } from "sonner";

interface SignatureData {
  id: string;
  type: "full-name" | "initials";
  text: string;
  style: string;
  createdAt: string;
}

interface PlacedElement {
  id: string;
  type: "signature" | "date" | "text" | "redaction" | "comment";
  x: number;
  y: number;
  page: number;
  content: string;
  style?: string;
  width?: number;
  height?: number;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  isBold?: boolean;
  isItalic?: boolean;
  isUnderlined?: boolean;
  alignment?: "left" | "center" | "right";
}

type TextDialogData = {
  content: string;
  fontSize: number;
  fontFamily: string;
  color: string;
  isBold: boolean;
  isItalic: boolean;
  isUnderlined: boolean;
  alignment: "left" | "center" | "right";
  width: number;
  height: number;
};

interface WatermarkData {
  type: "text" | "image";
  content: string;
  opacity: number;
  position:
    | "center"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
  rotation: number;
  fontSize?: number;
  color?: string;
}

interface PageNumberData {
  position:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  format: "number" | "roman" | "letter" | "custom";
  prefix: string;
  suffix: string;
  startNumber: number;
  fontSize: number;
  showOnFirstPage: boolean;
}

interface PageData {
  id: string;
  pageNumber: number;
  thumbnail?: string;
  rotationAngle: number;
}

interface PDFViewerProps {
  file: PDFFile;
  onClose: () => void;
  onSwitchToEditor?: () => void;
}

export function PDFViewer({ file, onClose }: PDFViewerProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(12); // Mock total pages
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [selectedAnnotation, setSelectedAnnotation] = useState<string | null>(
    null,
  );
  const [signatures, setSignatures] = useState<SignatureData[]>([]);
  const [placedElements, setPlacedElements] = useState<PlacedElement[]>([]);
  const [showWatermarkDialog, setShowWatermarkDialog] = useState(false);
  const [showPageNumbersDialog, setShowPageNumbersDialog] = useState(false);
  const [showPageManagement, setShowPageManagement] = useState(false);
  const [showTextEditor, setShowTextEditor] = useState(false);
  const [editingText, setEditingText] = useState<PlacedElement | null>(null);
  const [watermark, setWatermark] = useState<WatermarkData | null>(null);
  const [pageNumbers, setPageNumbers] = useState<PageNumberData | null>(null);
  const [pages, setPages] = useState<PageData[]>(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: `page-${i + 1}`,
      pageNumber: i + 1,
      rotationAngle: 0,
    })),
  );
  const viewerRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 25, 300));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 25, 25));
  const handleRotate = () => setRotation((prev) => (prev + 90) % 360);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSignatureCreate = (signature: SignatureData) => {
    setSignatures((prev) => [...prev, signature]);
  };

  const handlePageClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!selectedAnnotation) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (selectedAnnotation === "date") {
      const dateElement: PlacedElement = {
        id: `date-${Date.now()}`,
        type: "date",
        x,
        y,
        page: currentPage,
        content: new Date().toLocaleDateString("en-IN", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      };
      setPlacedElements((prev) => [...prev, dateElement]);
      setSelectedAnnotation(null);
    } else if (selectedAnnotation === "text") {
      setEditingText(null);
      setShowTextEditor(true);
      // Temporarily store click position for new text
      (window as any).tempTextPosition = { x, y };
    } else if (selectedAnnotation === "redact") {
      const redactionElement: PlacedElement = {
        id: `redact-${Date.now()}`,
        type: "redaction",
        x,
        y,
        page: currentPage,
        content: "",
        width: 100,
        height: 20,
        color: "#000000",
      };
      setPlacedElements((prev) => [...prev, redactionElement]);
      setSelectedAnnotation(null);
    } else if (selectedAnnotation === "comment") {
      const commentElement: PlacedElement = {
        id: `comment-${Date.now()}`,
        type: "comment",
        x,
        y,
        page: currentPage,
        content: "New comment",
        color: "#fbbf24",
      };
      setPlacedElements((prev) => [...prev, commentElement]);
      setSelectedAnnotation(null);
    } else if (selectedAnnotation.startsWith("signature-")) {
      const signatureId = selectedAnnotation.replace("signature-", "");
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
        setSelectedAnnotation(null);
      }
    }
  };

  const getCurrentPageElements = () => {
    return placedElements.filter((element) => element.page === currentPage);
  };

  const getSignatureStyles = (style: string) => {
    const styleMap: Record<string, React.CSSProperties> = {
      cursive: { fontFamily: "cursive", fontStyle: "italic" },
      serif: { fontFamily: "serif" },
      "sans-serif": { fontFamily: "sans-serif" },
      script: { fontFamily: "fantasy" },
    };
    return styleMap[style] || {};
  };

  const handleWatermarkApply = (watermarkData: WatermarkData) => {
    setWatermark(watermarkData);
    toast.success("Watermark applied to all pages");
  };

  const handlePageNumbersApply = (pageNumberData: PageNumberData) => {
    setPageNumbers(pageNumberData);
    toast.success("Page numbers added to document");
  };

  const handleTextSave = (textData: Omit<TextDialogData, "id" | "x" | "y">) => {
    if (editingText) {
      // Update existing text
      setPlacedElements((prev) =>
        prev.map((el) =>
          el.id === editingText.id ? { ...el, ...textData } : el,
        ),
      );
      toast.success("Text updated");
    } else {
      // Add new text at clicked position
      const position = (window as any).tempTextPosition || { x: 100, y: 100 };
      const newTextElement: PlacedElement = {
        id: `text-${Date.now()}`,
        type: "text",
        x: position.x,
        y: position.y,
        page: currentPage,
        ...textData,
      };
      setPlacedElements((prev) => [...prev, newTextElement]);
      toast.success("Text added");
      delete (window as any).tempTextPosition;
    }
    setEditingText(null);
    setSelectedAnnotation(null);
  };

  const handleTextDelete = () => {
    if (editingText) {
      setPlacedElements((prev) =>
        prev.filter((el) => el.id !== editingText.id),
      );
      toast.success("Text deleted");
      setEditingText(null);
    }
  };

  const handleElementEdit = (element: PlacedElement) => {
    if (element.type === "text") {
      setEditingText(element);
      setShowTextEditor(true);
    }
  };

  const handleElementDelete = (elementId: string) => {
    setPlacedElements((prev) => prev.filter((el) => el.id !== elementId));
    toast.success("Element deleted");
  };

  const mapPlacedElementToTextData = (element: PlacedElement) => {
    return {
      id: element.id,
      content: element.content || "",
      fontSize: element.fontSize ?? 16,
      fontFamily: element.fontFamily ?? "Arial",
      color: element.color ?? "#000000",
      isBold: element.isBold ?? false,
      isItalic: element.isItalic ?? false,
      isUnderlined: element.isUnderlined ?? false,
      alignment: element.alignment ?? "left",
      x: element.x,
      y: element.y,
      width: element.width ?? 200,
      height: element.height ?? 100,
    };
  };

  const formatPageNumber = (pageNum: number): string => {
    if (!pageNumbers) return "";

    let formattedNum = "";
    switch (pageNumbers.format) {
      case "number":
        formattedNum = (pageNumbers.startNumber + pageNum - 1).toString();
        break;
      case "roman":
        formattedNum = toRoman(pageNumbers.startNumber + pageNum - 1);
        break;
      case "letter":
        formattedNum = String.fromCharCode(
          64 + pageNumbers.startNumber + pageNum - 1,
        );
        break;
      case "custom":
        formattedNum = pageNum.toString();
        break;
    }

    return `${pageNumbers.prefix}${formattedNum}${pageNumbers.suffix}`;
  };

  const toRoman = (num: number): string => {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const literals = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];
    let result = "";
    for (let i = 0; i < values.length; i++) {
      while (num >= values[i]) {
        result += literals[i];
        num -= values[i];
      }
    }
    return result;
  };

  const getWatermarkPosition = (): Partial<React.CSSProperties> & {
    transform?: string;
  } => {
    if (!watermark)
      return {} as Partial<React.CSSProperties> & { transform?: string };

    const positions = {
      center: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
      "top-left": { top: "10%", left: "10%" },
      "top-right": { top: "10%", right: "10%" },
      "bottom-left": { bottom: "10%", left: "10%" },
      "bottom-right": { bottom: "10%", right: "10%" },
    };

    return positions[watermark.position] as Partial<React.CSSProperties> & {
      transform?: string;
    };
  };

  const getPageNumberPosition = () => {
    if (!pageNumbers) return {};

    const positions = {
      "top-left": { top: "20px", left: "20px" },
      "top-center": { top: "20px", left: "50%", transform: "translateX(-50%)" },
      "top-right": { top: "20px", right: "20px" },
      "bottom-left": { bottom: "20px", left: "20px" },
      "bottom-center": {
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
      },
      "bottom-right": { bottom: "20px", right: "20px" },
    };

    return positions[pageNumbers.position];
  };

  // Mock PDF content - in real implementation, this would render actual PDF
  const renderPDFPage = () => (
    <div
      className={`bg-white shadow-lg mx-auto relative ${selectedAnnotation ? "cursor-crosshair" : "cursor-default"}`}
      style={{
        width: `${8.5 * (zoom / 100)}in`,
        height: `${11 * (zoom / 100)}in`,
        transform: `rotate(${rotation}deg)`,
        maxWidth: "100%",
      }}
      onClick={handlePageClick}
    >
      <div className="p-8 h-full flex flex-col">
        <div className="border-b pb-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Sample PDF Document
          </h1>
          <p className="text-gray-600 mt-2">
            Page {currentPage} of {totalPages}
          </p>
        </div>

        <div className="flex-1 space-y-4 text-gray-800">
          <p>
            This is a sample PDF document for demonstration purposes. In a real
            implementation, this would display the actual PDF content using a
            PDF rendering library.
          </p>

          <p>
            The PDF viewer includes features like zoom, rotation, search, and
            annotation tools. Users can highlight text, add underlines and
            strikethroughs, signatures, and dates.
          </p>

          <p className="bg-yellow-200 p-2 rounded">
            This text has been highlighted with an annotation.
          </p>

          <p>
            <span className="underline">
              This text has an underline annotation.
            </span>
          </p>

          <p>
            <span className="line-through">
              This text has a strikethrough annotation.
            </span>
          </p>

          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-semibold mb-2">Sample Content</h3>
            <p>Additional content would appear here in a real PDF document.</p>
            <br />
            <p>
              Click anywhere on the document to place signatures or dates when
              the respective tools are selected.
            </p>
          </div>

          <div className="h-20">{/* Space for signatures */}</div>
        </div>
      </div>

      {/* Watermark */}
      {watermark && (
        <div
          className="absolute pointer-events-none"
          style={{
            ...getWatermarkPosition(),
            opacity: watermark.opacity / 100,
            transform: `${getWatermarkPosition().transform || ""} rotate(${watermark.rotation}deg)`,
            fontSize: `${watermark.fontSize || 48}px`,
            color: watermark.color || "#000000",
            fontWeight: "bold",
            userSelect: "none",
            zIndex: 1,
          }}
        >
          {watermark.content}
        </div>
      )}

      {/* Page Numbers */}
      {pageNumbers && (currentPage > 1 || pageNumbers.showOnFirstPage) && (
        <div
          className="absolute pointer-events-none"
          style={{
            ...getPageNumberPosition(),
            fontSize: `${pageNumbers.fontSize}px`,
            color: "#000000",
            zIndex: 2,
          }}
        >
          {formatPageNumber(currentPage)}
        </div>
      )}

      {/* Placed Elements */}
      {getCurrentPageElements().map((element) => (
        <div
          key={element.id}
          className="absolute group cursor-pointer hover:outline hover:outline-2 hover:outline-primary"
          style={{
            left: `${element.x}px`,
            top: `${element.y}px`,
            width: element.width ? `${element.width}px` : "auto",
            height: element.height ? `${element.height}px` : "auto",
            fontSize: element.fontSize ? `${element.fontSize}px` : undefined,
            fontFamily: element.fontFamily || undefined,
            color: element.color || undefined,
            fontWeight: element.isBold ? "bold" : "normal",
            fontStyle: element.isItalic ? "italic" : "normal",
            textDecoration: element.isUnderlined ? "underline" : "none",
            textAlign: element.alignment || "left",
            ...getSignatureStyles(element.style || ""),
          }}
        >
          {element.type === "signature" && (
            <div className="text-xl text-primary border-b border-primary/30 px-2 py-1 bg-white/80 rounded shadow-sm">
              {element.content}
            </div>
          )}
          {element.type === "date" && (
            <div className="text-sm text-gray-700 bg-white/90 px-2 py-1 rounded shadow-sm border">
              {element.content}
            </div>
          )}
          {element.type === "text" && (
            <div
              className="bg-white/90 px-2 py-1 rounded shadow-sm border whitespace-pre-wrap"
              style={{
                minWidth: "100px",
                minHeight: "30px",
              }}
            >
              {element.content}
            </div>
          )}
          {element.type === "redaction" && (
            <div
              className="bg-black"
              style={{
                width: `${element.width || 100}px`,
                height: `${element.height || 20}px`,
              }}
            />
          )}
          {element.type === "comment" && (
            <div className="bg-yellow-300 border border-yellow-400 px-2 py-1 rounded shadow-sm max-w-48">
              <div className="text-xs font-medium text-yellow-800">
                {element.content}
              </div>
            </div>
          )}

          {/* Element controls */}
          <div className="absolute -top-8 left-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white border rounded shadow-sm p-1 flex gap-1">
            {(element.type === "text" || element.type === "comment") && (
              <Button
                size="sm"
                variant="ghost"
                className="h-6 w-6 p-0"
                onClick={() => handleElementEdit(element)}
              >
                <Edit className="h-3 w-3" />
              </Button>
            )}
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
          <Button variant="outline" size="sm">
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
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowPageManagement(!showPageManagement)}
          >
            <Settings className="h-4 w-4 mr-2" />
            Page Management
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
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search in document..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
            </div>
          </div>

          {/* Annotation Toolbar */}
          <AnnotationToolbar
            selectedAnnotation={selectedAnnotation}
            onAnnotationSelect={setSelectedAnnotation}
            signatures={signatures}
            onSignatureCreate={handleSignatureCreate}
            onWatermarkOpen={() => setShowWatermarkDialog(true)}
            onPageNumbersOpen={() => setShowPageNumbersDialog(true)}
            onPageManagementOpen={() =>
              setShowPageManagement(!showPageManagement)
            }
          />

          {/* PDF Content */}
          <div ref={viewerRef} className="flex-1 overflow-auto bg-gray-100 p-8">
            {renderPDFPage()}
          </div>
        </div>

        {/* Page Management Sidebar */}
        {showPageManagement && (
          <div className="border-l bg-muted/30">
            <PageManagement
              pages={pages}
              currentPage={currentPage}
              onPageSelect={setCurrentPage}
              onPagesReorder={setPages}
              onPageAdd={(position) => {
                const newPage: PageData = {
                  id: `page-${Date.now()}`,
                  pageNumber: position,
                  rotationAngle: 0,
                };
                const newPages = [...pages];
                newPages.splice(position - 1, 0, newPage);
                // Renumber pages
                const renumbered = newPages.map((page, index) => ({
                  ...page,
                  pageNumber: index + 1,
                }));
                setPages(renumbered);
                toast.success("Page added");
              }}
              onPageDelete={(pageNumber) => {
                const newPages = pages.filter(
                  (p) => p.pageNumber !== pageNumber,
                );
                // Renumber pages
                const renumbered = newPages.map((page, index) => ({
                  ...page,
                  pageNumber: index + 1,
                }));
                setPages(renumbered);
                toast.success("Page deleted");
              }}
              onPageRotate={(pageNumber, angle) => {
                setPages((prev) =>
                  prev.map((p) =>
                    p.pageNumber === pageNumber
                      ? { ...p, rotationAngle: angle % 360 }
                      : p,
                  ),
                );
                toast.success("Page rotated");
              }}
              onPageDuplicate={(pageNumber) => {
                const pageToClone = pages.find(
                  (p) => p.pageNumber === pageNumber,
                );
                if (pageToClone) {
                  const newPage: PageData = {
                    id: `page-${Date.now()}`,
                    pageNumber: pageNumber + 1,
                    rotationAngle: pageToClone.rotationAngle,
                  };
                  const newPages = [...pages];
                  newPages.splice(pageNumber, 0, newPage);
                  // Renumber pages
                  const renumbered = newPages.map((page, index) => ({
                    ...page,
                    pageNumber: index + 1,
                  }));
                  setPages(renumbered);
                  toast.success("Page duplicated");
                }
              }}
              onDocumentSplit={(pageNumber) => {
                toast.success(`Document split at page ${pageNumber}`);
              }}
              onDocumentMerge={(file) => {
                toast.success(`Merged ${file.name} with current document`);
              }}
            />
          </div>
        )}
      </div>

      {/* Dialogs */}
      <WatermarkDialog
        open={showWatermarkDialog}
        onClose={() => setShowWatermarkDialog(false)}
        onApply={handleWatermarkApply}
      />

      <PageNumbersDialog
        open={showPageNumbersDialog}
        onClose={() => setShowPageNumbersDialog(false)}
        onApply={handlePageNumbersApply}
      />

      <TextEditorDialog
        open={showTextEditor}
        onClose={() => {
          setShowTextEditor(false);
          setEditingText(null);
        }}
        textData={editingText ? mapPlacedElementToTextData(editingText) : null}
        onSave={handleTextSave}
        onDelete={editingText ? handleTextDelete : undefined}
      />
    </div>
  );
}
