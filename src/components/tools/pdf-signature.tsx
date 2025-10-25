import { useState, useEffect, useRef, useCallback } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Slider } from "../ui/slider";
import {
  PenTool,
  Download,
  FileText,
  Loader2,
  Settings,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  MousePointer,
} from "lucide-react";
import { toast } from "sonner";
import {
  listFiles,
  signPDF,
  getDownloadUrl,
  downloadFileWithWorkaround,
  FileMetadata,
} from "@/lib/api";
import { loadPDFWithFallback, configurePDFWorker, pdfjsLib } from "@/lib/pdf-worker";

export function PDFSignature() {
  const [files, setFiles] = useState<FileMetadata[]>([]);
  const [selectedFileId, setSelectedFileId] = useState<string>("");
  const [pageNum, setPageNum] = useState(1);
  const [signatureText, setSignatureText] = useState("");
  const [xPosition, setXPosition] = useState(100);
  const [yPosition, setYPosition] = useState(700);
  const [fontSize, setFontSize] = useState(14);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [signResult, setSignResult] = useState<any>(null);

  // Visual signature states
  const [activeTab, setActiveTab] = useState("manual");
  const [pdfLoading, setPdfLoading] = useState(false);
  const [pdfDocument, setPdfDocument] = useState<any>(null);
  const [clickPosition, setClickPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [previewSignature, setPreviewSignature] = useState(false);
  const [signatureFont, setSignatureFont] = useState("Arial");
  const [signatureColor, setSignatureColor] = useState("#000000");
  const [signatureStyle, setSignatureStyle] = useState("normal");
  const [stepSize, setStepSize] = useState(10);
  const [isMoving, setIsMoving] = useState(false);
  const [moveInterval, setMoveInterval] = useState<NodeJS.Timeout | null>(null);
  const [currentRenderTask, setCurrentRenderTask] = useState<any>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const signaturePreviewRef = useRef<HTMLDivElement>(null);

  // Initialize PDF worker on component mount
  useEffect(() => {
    configurePDFWorker();
    loadFiles();
  }, []);

  // Load PDF when file is selected in visual mode
  useEffect(() => {
    if (activeTab === "visual" && selectedFileId) {
      console.log("Loading PDF for visual mode, file ID:", selectedFileId);
      loadPDF();
    }
  }, [selectedFileId, activeTab]);

  // Re-render PDF when canvas becomes available
  useEffect(() => {
    if (pdfDocument && canvasRef.current && activeTab === "visual") {
      console.log("Canvas is now available, re-rendering PDF");
      renderPDFPage(pdfDocument, pageNum);
    }
  }, [pdfDocument, activeTab, pageNum]);

  // Navigate to specific page
  const goToPage = useCallback(
    async (newPageNum: number) => {
      if (!pdfDocument || newPageNum < 1 || newPageNum > pdfDocument.numPages) {
        return;
      }

      setPageNum(newPageNum);
      // Clear click position when changing pages
      setClickPosition(null);
      setPreviewSignature(false);

      // Re-render the new page
      await renderPDFPage(pdfDocument, newPageNum);
    },
    [pdfDocument]
  );

  // Load PDF document
  const loadPDF = async () => {
    if (!selectedFileId) {
      toast.error("No file selected");
      return;
    }

    setPdfLoading(true);
    setPdfDocument(null);
    
    try {
      const pdfUrl = getDownloadUrl(selectedFileId);
      console.log("Loading PDF from:", pdfUrl);

      const pdf = await loadPDFWithFallback(pdfUrl) as any;
      setPdfDocument(pdf);

      // Render the PDF page
      setTimeout(async () => {
        await renderPDFPage(pdf, pageNum);
      }, 100);
    } catch (error: any) {
      console.error("PDF loading error:", error);
      toast.error(`Failed to load PDF: ${error.message}`);
    } finally {
      setPdfLoading(false);
    }
  };

  // Render PDF page to canvas
  const renderPDFPage = useCallback(
    async (pdf: any, pageNumber: number) => {
      if (!canvasRef.current) {
        console.log("Canvas not ready, waiting...");
        setTimeout(() => renderPDFPage(pdf, pageNumber), 100);
        return;
      }

      try {
        const page = await pdf.getPage(pageNumber);
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        if (!context) return;

        // Calculate scale to fit container
        const containerWidth = 800;
        const viewport = page.getViewport({ scale: 1.0 });
        const scale = Math.min(1.0, containerWidth / viewport.width);
        const scaledViewport = page.getViewport({ scale });

        // Set canvas dimensions
        canvas.height = scaledViewport.height;
        canvas.width = scaledViewport.width;

        // Clear and render
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        const renderContext = {
          canvasContext: context,
          viewport: scaledViewport,
        };

        await page.render(renderContext).promise;
        console.log("✅ PDF page rendered");
      } catch (error: any) {
        console.error("Error rendering PDF:", error);
        toast.error(`Failed to render PDF: ${error.message}`);
      }
    },
    []
  );

  // Handle canvas click for signature placement
  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setClickPosition({ x, y });
    setXPosition(Math.round(x));
    setYPosition(Math.round(y));
    setPreviewSignature(true);

    // Update signature preview position
    updateSignaturePreview(x, y);

    toast.success(`Position set to (${Math.round(x)}, ${Math.round(y)})`);
  };

  // Move signature position
  const moveSignature = (direction: "up" | "down" | "left" | "right") => {
    if (!clickPosition) return;

    let newX = clickPosition.x;
    let newY = clickPosition.y;

    switch (direction) {
      case "up": newY = Math.max(0, newY - stepSize); break;
      case "down": newY = newY + stepSize; break;
      case "left": newX = Math.max(0, newX - stepSize); break;
      case "right": newX = newX + stepSize; break;
    }

    setClickPosition({ x: newX, y: newY });
    setXPosition(Math.round(newX));
    setYPosition(Math.round(newY));
  };

  // Start continuous movement
  const startMoving = (direction: "up" | "down" | "left" | "right") => {
    console.log(`Starting movement: ${direction}`);
    if (moveInterval) {
      clearInterval(moveInterval);
    }

    setIsMoving(true);
    // Move immediately first
    moveSignature(direction);

    // Then continue moving
    const interval = setInterval(() => {
      console.log(`Moving ${direction} continuously`);
      moveSignature(direction);
    }, 100); // Move every 100ms for smooth movement

    setMoveInterval(interval);
  };

  // Stop continuous movement
  const stopMoving = () => {
    console.log("Stopping movement");
    if (moveInterval) {
      clearInterval(moveInterval);
      setMoveInterval(null);
    }
    setIsMoving(false);
  };

  // Update signature preview position
  const updateSignaturePreview = (x: number, y: number) => {
    if (signaturePreviewRef.current) {
      signaturePreviewRef.current.style.left = `${x}px`;
      signaturePreviewRef.current.style.top = `${y}px`;
    }
  };

  // Keyboard shortcuts for arrow controls and page navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (activeTab !== "visual") return;

      // Page navigation shortcuts (Ctrl/Cmd + arrow keys)
      if (event.ctrlKey || event.metaKey) {
        switch (event.key) {
          case "ArrowLeft":
            event.preventDefault();
            if (pageNum > 1) goToPage(pageNum - 1);
            break;
          case "ArrowRight":
            event.preventDefault();
            if (pdfDocument && pageNum < pdfDocument.numPages)
              goToPage(pageNum + 1);
            break;
        }
        return;
      }

      // Signature movement shortcuts (only when position is set)
      if (!clickPosition) return;

      switch (event.key) {
        case "ArrowUp":
          event.preventDefault();
          moveSignature("up");
          break;
        case "ArrowDown":
          event.preventDefault();
          moveSignature("down");
          break;
        case "ArrowLeft":
          event.preventDefault();
          moveSignature("left");
          break;
        case "ArrowRight":
          event.preventDefault();
          moveSignature("right");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      // Cleanup move interval on unmount
      if (moveInterval) {
        clearInterval(moveInterval);
      }
      // Cleanup render task on unmount
      if (currentRenderTask) {
        currentRenderTask.cancel();
      }
    };
  }, [
    clickPosition,
    stepSize,
    activeTab,
    moveInterval,
    pageNum,
    pdfDocument,
    goToPage,
  ]);

  const loadFiles = async () => {
    try {
      setIsFetching(true);
      const fileList = await listFiles();
      setFiles(fileList);
      if (fileList.length > 0) {
        setSelectedFileId(fileList[0].file_id);
      }
    } catch (error: any) {
      toast.error(`Failed to load files: ${error.message}`);
    } finally {
      setIsFetching(false);
    }
  };

  const selectedFile = files.find((f) => f.file_id === selectedFileId);

  const handleSign = async () => {
    if (!selectedFileId) {
      toast.error("Please select a file");
      return;
    }

    if (!signatureText.trim()) {
      toast.error("Please enter signature text");
      return;
    }

    const maxPages = selectedFile?.page_count || 0;
    if (pageNum < 1 || pageNum > maxPages) {
      toast.error(`Page number must be between 1 and ${maxPages}`);
      return;
    }

    // For visual mode, ensure position is set
    if (activeTab === "visual" && !clickPosition) {
      toast.error("Please click on the PDF to set signature position");
      return;
    }

    setIsLoading(true);
    try {
      // Convert hex color to RGB
      const hexToRgb = (hex: string): [number, number, number] => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
          ? ([
              parseInt(result[1], 16),
              parseInt(result[2], 16),
              parseInt(result[3], 16),
            ] as [number, number, number])
          : [0, 0, 0];
      };

      const result = await signPDF({
        file_id: selectedFileId,
        page_num: pageNum,
        x: xPosition,
        y: yPosition,
        text: signatureText,
        font_size: fontSize,
        color: hexToRgb(signatureColor),
      });

      setSignResult(result);
      toast.success("Signature added successfully");

      // Refresh file list
      await loadFiles();
    } catch (error: any) {
      toast.error(`Failed to add signature: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Position presets for common signature locations
  const positionPresets = [
    { name: "Top Left", x: 50, y: 50 },
    { name: "Top Right", x: 450, y: 50 },
    { name: "Bottom Left", x: 50, y: 750 },
    { name: "Bottom Right", x: 450, y: 750 },
    { name: "Center", x: 250, y: 400 },
  ];

  const applyPreset = (preset: (typeof positionPresets)[0]) => {
    setXPosition(preset.x);
    setYPosition(preset.y);
    toast.success(`Position set to ${preset.name}`);
  };

  if (isFetching) {
    return (
      <div className="max-w-4xl mx-auto p-6 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl mb-2">Add Signature to PDF</h1>
        <p className="text-muted-foreground">
          Add a text-based signature to your PDF document
        </p>
        <Badge variant="outline" className="mt-2">
          {activeTab === "visual" ? "Visual Placement" : "Manual Coordinates"}
        </Badge>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="manual">Manual Coordinates</TabsTrigger>
          <TabsTrigger value="visual">Visual Placement</TabsTrigger>
        </TabsList>

        <TabsContent value="manual" className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="gradient-text">Select PDF and Page</CardTitle>
              <CardDescription>
                Choose the PDF file and page where you want to add the signature
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="file-select">Select File</Label>
                {files.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    No files available. Please upload a PDF first.
                  </p>
                ) : (
                  <select
                    id="file-select"
                    className="w-full p-2 border rounded-md"
                    value={selectedFileId}
                    onChange={(e) => setSelectedFileId(e.target.value)}
                  >
                    {files.map((file) => (
                      <option key={file.file_id} value={file.file_id}>
                        {file.filename} ({file.page_count} pages)
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {selectedFile && (
                <div className="p-3 bg-muted rounded-md">
                  <div className="flex items-center gap-2 text-sm">
                    <FileText className="h-4 w-4" />
                    <span className="font-medium">{selectedFile.filename}</span>
                    <Badge variant="outline">
                      {selectedFile.page_count} pages
                    </Badge>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="page-num">Page Number</Label>
                <Input
                  id="page-num"
                  type="number"
                  min={1}
                  max={selectedFile?.page_count || 1}
                  value={pageNum}
                  onChange={(e) => setPageNum(parseInt(e.target.value) || 1)}
                  placeholder="1"
                />
                <p className="text-xs text-muted-foreground">
                  Enter the page number where you want to add the signature
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Signature Details</CardTitle>
              <CardDescription>
                Configure your signature text and appearance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signature-text">Signature Text</Label>
                <Input
                  id="signature-text"
                  value={signatureText}
                  onChange={(e) => setSignatureText(e.target.value)}
                  placeholder="Enter your name or signature text"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="font-size">Font Size</Label>
                <Input
                  id="font-size"
                  type="number"
                  min={8}
                  max={72}
                  value={fontSize}
                  onChange={(e) => setFontSize(parseInt(e.target.value) || 14)}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Position</CardTitle>
              <CardDescription>
                Set the position where the signature will appear (coordinates in
                points)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="x-position">X Position</Label>
                  <Input
                    id="x-position"
                    type="number"
                    min={0}
                    max={600}
                    value={xPosition}
                    onChange={(e) =>
                      setXPosition(parseInt(e.target.value) || 0)
                    }
                  />
                  <p className="text-xs text-muted-foreground">
                    Horizontal position from left
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="y-position">Y Position</Label>
                  <Input
                    id="y-position"
                    type="number"
                    min={0}
                    max={800}
                    value={yPosition}
                    onChange={(e) =>
                      setYPosition(parseInt(e.target.value) || 0)
                    }
                  />
                  <p className="text-xs text-muted-foreground">
                    Vertical position from top
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Quick Position Presets</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {positionPresets.map((preset) => (
                    <Button
                      key={preset.name}
                      variant="outline"
                      size="sm"
                      onClick={() => applyPreset(preset)}
                    >
                      {preset.name}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="p-4 border rounded-md bg-muted/50">
                <p className="text-sm font-medium mb-2">Preview Position</p>
                <p className="text-xs text-muted-foreground">
                  Signature will appear at ({xPosition}, {yPosition}) on page{" "}
                  {pageNum}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Note: Please ensure the position is in a blank space to avoid
                  overlapping with existing content.
                </p>
              </div>

              <Button
                onClick={handleSign}
                disabled={!selectedFileId || !signatureText.trim() || isLoading}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Adding Signature...
                  </>
                ) : (
                  <>
                    <PenTool className="h-4 w-4 mr-2" />
                    Add Signature
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visual" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Select PDF and Page</CardTitle>
              <CardDescription>
                Choose the PDF file and page where you want to add the signature
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="file-select-visual">Select File</Label>
                {files.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    No files available. Please upload a PDF first.
                  </p>
                ) : (
                  <select
                    id="file-select-visual"
                    className="w-full p-2 border rounded-md"
                    value={selectedFileId}
                    onChange={(e) => setSelectedFileId(e.target.value)}
                  >
                    {files.map((file) => (
                      <option key={file.file_id} value={file.file_id}>
                        {file.filename} ({file.page_count} pages)
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {selectedFile && (
                <div className="p-3 bg-muted rounded-md">
                  <div className="flex items-center gap-2 text-sm">
                    <FileText className="h-4 w-4" />
                    <span className="font-medium">{selectedFile.filename}</span>
                    <Badge variant="outline">
                      {selectedFile.page_count} pages
                    </Badge>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="page-num-visual">Page Number</Label>
                <Input
                  id="page-num-visual"
                  type="number"
                  min={1}
                  max={selectedFile?.page_count || 1}
                  value={pageNum}
                  onChange={(e) => setPageNum(parseInt(e.target.value) || 1)}
                  placeholder="1"
                />
                <p className="text-xs text-muted-foreground">
                  Enter the page number where you want to add the signature
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Signature Details</CardTitle>
              <CardDescription>
                Configure your signature text and appearance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signature-text-visual">Signature Text</Label>
                <Input
                  id="signature-text-visual"
                  value={signatureText}
                  onChange={(e) => setSignatureText(e.target.value)}
                  placeholder="Enter your name or signature text"
                />
              </div>

              <div className="flex items-center gap-4">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="font-size-visual">Font Size</Label>
                  <Input
                    id="font-size-visual"
                    type="number"
                    min={8}
                    max={72}
                    value={fontSize}
                    onChange={(e) =>
                      setFontSize(parseInt(e.target.value) || 14)
                    }
                  />
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Settings className="h-4 w-4 mr-2" />
                      Customize
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Signature Customization</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Font Family</Label>
                        <select
                          className="w-full p-2 border rounded-md"
                          value={signatureFont}
                          onChange={(e) => setSignatureFont(e.target.value)}
                        >
                          <option value="Arial">Arial</option>
                          <option value="Times New Roman">
                            Times New Roman
                          </option>
                          <option value="Courier New">Courier New</option>
                          <option value="Georgia">Georgia</option>
                          <option value="Verdana">Verdana</option>
                          <option value="Helvetica">Helvetica</option>
                          <option value="Comic Sans MS">Comic Sans MS</option>
                          <option value="Impact">Impact</option>
                          <option value="Trebuchet MS">Trebuchet MS</option>
                          <option value="Palatino">Palatino</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label>Font Style</Label>
                        <select
                          className="w-full p-2 border rounded-md"
                          value={signatureStyle}
                          onChange={(e) => setSignatureStyle(e.target.value)}
                        >
                          <option value="normal">Normal</option>
                          <option value="bold">Bold</option>
                          <option value="italic">Italic</option>
                          <option value="bold italic">Bold Italic</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label>Font Size</Label>
                        <Slider
                          value={[fontSize]}
                          onValueChange={(value) => setFontSize(value[0])}
                          min={8}
                          max={72}
                          step={1}
                          className="w-full"
                        />
                        <p className="text-xs text-muted-foreground">
                          {fontSize}px
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label>Color</Label>
                        <div className="flex gap-2">
                          <input
                            type="color"
                            value={signatureColor}
                            onChange={(e) => setSignatureColor(e.target.value)}
                            className="w-12 h-10 border rounded"
                          />
                          <Input
                            value={signatureColor}
                            onChange={(e) => setSignatureColor(e.target.value)}
                            placeholder="#000000"
                          />
                        </div>
                      </div>

                      <div className="p-3 border rounded-md bg-muted/50">
                        <p className="text-sm font-medium mb-2">Preview</p>
                        <div
                          style={{
                            fontFamily: signatureFont,
                            fontSize: `${fontSize}px`,
                            fontWeight: signatureStyle.includes("bold")
                              ? "bold"
                              : "normal",
                            fontStyle: signatureStyle.includes("italic")
                              ? "italic"
                              : "normal",
                            color: signatureColor,
                          }}
                        >
                          {signatureText || "Your signature will appear here"}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Visual Placement</CardTitle>
              <CardDescription>
                Click on the PDF to place your signature, then use arrow
                controls to fine-tune the position
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {pdfLoading ? (
                <div className="flex items-center justify-center p-20">
                  <div className="text-center">
                    <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
                    <p>Loading PDF...</p>
                    <Button 
                      onClick={() => {
                        setPdfLoading(false);
                        setPdfDocument(null);
                      }}
                      variant="outline" 
                      size="sm" 
                      className="mt-4"
                    >
                      Cancel Loading
                    </Button>
                  </div>
                </div>
              ) : pdfDocument ? (
                <div className="space-y-4">
                  {/* Page Navigation Controls */}
                  {pdfDocument.numPages > 1 && (
                    <Card className="glass-card">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg gradient-text">
                          Page Navigation
                        </CardTitle>
                        <CardDescription>
                          Navigate between pages to place signatures on
                          different pages
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => goToPage(pageNum - 1)}
                              disabled={pageNum <= 1}
                            >
                              ← Previous
                            </Button>
                            <span className="text-sm font-medium">
                              Page {pageNum} of {pdfDocument.numPages}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => goToPage(pageNum + 1)}
                              disabled={pageNum >= pdfDocument.numPages}
                            >
                              Next →
                            </Button>
                          </div>

                          <div className="flex items-center gap-2">
                            <Label htmlFor="page-jump" className="text-sm">
                              Go to page:
                            </Label>
                            <Input
                              id="page-jump"
                              type="number"
                              min={1}
                              max={pdfDocument.numPages}
                              value={pageNum}
                              onChange={(e) => {
                                const newPage = parseInt(e.target.value);
                                if (
                                  newPage >= 1 &&
                                  newPage <= pdfDocument.numPages
                                ) {
                                  goToPage(newPage);
                                }
                              }}
                              className="w-20"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  <div className="border rounded-md overflow-hidden relative">
                    <canvas
                      ref={canvasRef}
                      className="w-full h-auto cursor-crosshair"
                      onClick={handleCanvasClick}
                    />

                    {/* Signature Preview Overlay */}
                    {clickPosition && signatureText && (
                      <div
                        ref={signaturePreviewRef}
                        className="absolute pointer-events-none z-10"
                        style={{
                          left: `${clickPosition.x}px`,
                          top: `${clickPosition.y}px`,
                          fontFamily: signatureFont,
                          fontSize: `${fontSize}px`,
                          fontWeight: signatureStyle.includes("bold")
                            ? "bold"
                            : "normal",
                          fontStyle: signatureStyle.includes("italic")
                            ? "italic"
                            : "normal",
                          color: signatureColor,
                          textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                          border: "2px dashed #3b82f6",
                          backgroundColor: "rgba(59, 130, 246, 0.1)",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {signatureText}
                      </div>
                    )}
                  </div>

                  {clickPosition && (
                    <div className="p-4 border rounded-md bg-blue-50">
                      <div className="flex items-center gap-2 mb-3">
                        <MousePointer className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-900">
                          Position Set
                        </span>
                      </div>
                      <p className="text-sm text-blue-700">
                        Signature will be placed at (
                        {Math.round(clickPosition.x)},{" "}
                        {Math.round(clickPosition.y)}) on page {pageNum}
                      </p>
                    </div>
                  )}

                  {clickPosition && (
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg gradient-text">
                          Adjust Position
                        </CardTitle>
                        <CardDescription>
                          Use arrow controls or keyboard arrows to fine-tune the
                          position
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label>Step Size: {stepSize}px</Label>
                          <Slider
                            value={[stepSize]}
                            onValueChange={(value) => setStepSize(value[0])}
                            min={1}
                            max={100}
                            step={1}
                            className="w-full"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onMouseDown={(e) => {
                              e.preventDefault();
                              startMoving("up");
                            }}
                            onMouseUp={stopMoving}
                            onMouseLeave={stopMoving}
                            onTouchStart={(e) => {
                              e.preventDefault();
                              startMoving("up");
                            }}
                            onTouchEnd={stopMoving}
                            className="flex items-center gap-2 px-3 py-2 text-sm border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md select-none"
                          >
                            <ArrowUp className="h-4 w-4" />
                            Up
                          </button>
                          <button
                            type="button"
                            onMouseDown={(e) => {
                              e.preventDefault();
                              startMoving("down");
                            }}
                            onMouseUp={stopMoving}
                            onMouseLeave={stopMoving}
                            onTouchStart={(e) => {
                              e.preventDefault();
                              startMoving("down");
                            }}
                            onTouchEnd={stopMoving}
                            className="flex items-center gap-2 px-3 py-2 text-sm border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md select-none"
                          >
                            <ArrowDown className="h-4 w-4" />
                            Down
                          </button>
                          <button
                            type="button"
                            onMouseDown={(e) => {
                              e.preventDefault();
                              startMoving("left");
                            }}
                            onMouseUp={stopMoving}
                            onMouseLeave={stopMoving}
                            onTouchStart={(e) => {
                              e.preventDefault();
                              startMoving("left");
                            }}
                            onTouchEnd={stopMoving}
                            className="flex items-center gap-2 px-3 py-2 text-sm border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md select-none"
                          >
                            <ArrowLeft className="h-4 w-4" />
                            Left
                          </button>
                          <button
                            type="button"
                            onMouseDown={(e) => {
                              e.preventDefault();
                              startMoving("right");
                            }}
                            onMouseUp={stopMoving}
                            onMouseLeave={stopMoving}
                            onTouchStart={(e) => {
                              e.preventDefault();
                              startMoving("right");
                            }}
                            onTouchEnd={stopMoving}
                            className="flex items-center gap-2 px-3 py-2 text-sm border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md select-none"
                          >
                            <ArrowRight className="h-4 w-4" />
                            Right
                          </button>
                        </div>

                        <p className="text-xs text-muted-foreground">
                          Current position: ({Math.round(clickPosition.x)},{" "}
                          {Math.round(clickPosition.y)}) on page {pageNum} •
                          {isMoving
                            ? "Moving..."
                            : "Use keyboard arrows for quick movement"}
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  <Button
                    onClick={handleSign}
                    disabled={
                      !selectedFileId ||
                      !signatureText.trim() ||
                      !clickPosition ||
                      isLoading
                    }
                    className="w-full"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Adding Signature...
                      </>
                    ) : (
                      <>
                        <PenTool className="h-4 w-4 mr-2" />
                        Add Signature
                      </>
                    )}
                  </Button>
                </div>
              ) : (
                <div className="text-center p-8">
                  <p className="text-muted-foreground mb-4">PDF not loaded</p>
                  <div className="space-y-4">
                    <div className="flex gap-2 justify-center">
                      <Button onClick={loadPDF} variant="outline" className="cta-secondary cta-sm">
                        Load PDF
                      </Button>
                      <Button
                        onClick={() => {
                          pdfjsLib.GlobalWorkerOptions.workerSrc =
                            "/pdf.worker.min.js";
                          loadPDF();
                        }}
                        variant="outline"
                      >
                        Try Local Worker
                      </Button>
                      <Button
                        onClick={() => {
                          pdfjsLib.GlobalWorkerOptions.workerSrc = "";
                          loadPDF();
                        }}
                        variant="outline"
                      >
                        Try No Worker
                      </Button>
                    </div>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <p>
                        If PDF doesn't load, try different worker options above
                      </p>
                      <p>Make sure you have uploaded a PDF file first</p>
                      <p>Selected file: {selectedFile?.filename || "None"}</p>
                      <p>
                        Current worker:{" "}
                        {pdfjsLib.GlobalWorkerOptions.workerSrc || "None"}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {signResult && (
        <Card>
          <CardHeader>
            <CardTitle>Signature Added</CardTitle>
            <CardDescription>
              Your signature has been added successfully
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-3 border rounded-md">
              <div>
                <p className="font-medium">{signResult.filename}</p>
                <p className="text-sm text-muted-foreground">
                  Signature added to page {pageNum}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={async () => {
                  try {
                    setIsLoading(true);
                    const blob = await downloadFileWithWorkaround(
                      signResult.file_id,
                      signResult.filename
                    );

                    // Create download link
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = signResult.filename;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    window.URL.revokeObjectURL(url);

                    toast.success("Download started successfully");
                  } catch (error: any) {
                    console.error("Download failed:", error);
                    toast.error(`Download failed: ${error.message}`);
                  } finally {
                    setIsLoading(false);
                  }
                }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
