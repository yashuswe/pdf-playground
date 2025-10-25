import { useState, useEffect } from "react";
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
import { Droplets, Download, FileText, Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
  listFiles,
  signPDF,
  downloadFileWithWorkaround,
  FileMetadata,
} from "@/lib/api";

type WatermarkPosition = "center" | "diagonal" | "top" | "bottom" | "custom";

interface WatermarkResult {
  file_id: string;
  filename: string;
}

export function PDFWatermark() {
  const [files, setFiles] = useState<FileMetadata[]>([]);
  const [selectedFileId, setSelectedFileId] = useState<string>("");
  const [watermarkText, setWatermarkText] = useState("CONFIDENTIAL");
  const [position, setPosition] = useState<WatermarkPosition>("center");
  const [fontSize, setFontSize] = useState(48);
  const [opacity, setOpacity] = useState(0.3);
  const [applyToAllPages, setApplyToAllPages] = useState(true);
  const [customPage, setCustomPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [watermarkResult, setWatermarkResult] =
    useState<WatermarkResult | null>(null);

  useEffect(() => {
    loadFiles();
  }, []);

  const loadFiles = async () => {
    try {
      setIsFetching(true);
      const fileList = await listFiles();
      setFiles(fileList);
      if (fileList.length > 0) {
        setSelectedFileId(fileList[0].file_id);
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      toast.error(`Failed to load files: ${message}`);
    } finally {
      setIsFetching(false);
    }
  };

  const selectedFile = files.find((f) => f.file_id === selectedFileId);

  const handleDownloadWatermarkedFile = async () => {
    if (!watermarkResult) return;

    try {
      toast.info("Downloading watermarked file...");
      const blob = await downloadFileWithWorkaround(
        watermarkResult.file_id,
        watermarkResult.filename
      );

      // Create download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = watermarkResult.filename || "watermarked-document.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      toast.success("File downloaded successfully!");
    } catch (error: any) {
      console.error("Download failed:", error);
      toast.error(`Download failed: ${error.message}`);
    }
  };

  const getPositionCoordinates = (pos: WatermarkPosition) => {
    // Standard PDF page is typically 612 x 792 points (8.5 x 11 inches)
    const positions = {
      center: { x: 200, y: 400 },
      diagonal: { x: 150, y: 450 },
      top: { x: 200, y: 100 },
      bottom: { x: 200, y: 700 },
      custom: { x: 200, y: 400 },
    };
    return positions[pos];
  };

  const handleAddWatermark = async () => {
    if (!selectedFileId) {
      toast.error("Please select a file");
      return;
    }

    if (!watermarkText.trim()) {
      toast.error("Please enter watermark text");
      return;
    }

    setIsLoading(true);
    try {
      const coords = getPositionCoordinates(position);

      // Calculate gray color based on opacity (0-1 scale for backend)
      // Higher opacity = darker watermark, lower opacity = lighter watermark
      const grayValue = 1 - opacity;

      if (applyToAllPages && selectedFile) {
        // Add watermark to all pages
        let lastResult: WatermarkResult | null = null;
        let currentFileId = selectedFileId;

        for (let page = 1; page <= selectedFile.page_count; page++) {
          lastResult = (await signPDF({
            file_id: currentFileId,
            page_num: page,
            x: coords.x,
            y: coords.y,
            text: watermarkText,
            font_size: fontSize,
            color: [grayValue, grayValue, grayValue],
          })) as WatermarkResult;

          // Use the new file_id for subsequent pages
          if (page < selectedFile.page_count && lastResult) {
            currentFileId = lastResult.file_id;
          }
        }

        setWatermarkResult(lastResult);
        toast.success(
          `Watermark added to all ${selectedFile.page_count} pages`
        );
      } else {
        // Add watermark to single page
        const result = (await signPDF({
          file_id: selectedFileId,
          page_num: customPage,
          x: coords.x,
          y: coords.y,
          text: watermarkText,
          font_size: fontSize,
          color: [grayValue, grayValue, grayValue],
        })) as WatermarkResult;

        setWatermarkResult(result);
        toast.success(`Watermark added to page ${customPage}`);
      }

      // Refresh file list
      await loadFiles();
    } catch (error: unknown) {
      console.error("Watermark error:", error);
      let message = "Unknown error occurred";

      if (error instanceof Error) {
        message = error.message;
      } else if (typeof error === "object" && error !== null) {
        // Handle API error objects from ApiClient
        const errorObj = error as any;
        if (errorObj.message) {
          message = errorObj.message;
        } else if (errorObj.details && errorObj.details.detail) {
          message = errorObj.details.detail;
        } else if (errorObj.details && errorObj.details.message) {
          message = errorObj.details.message;
        } else {
          message = `API Error (Status: ${errorObj.status || "unknown"})`;
        }
      } else {
        message = String(error);
      }

      toast.error(`Failed to add watermark: ${message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const watermarkPresets = [
    "CONFIDENTIAL",
    "DRAFT",
    "SAMPLE",
    "COPY",
    "DO NOT COPY",
    "FOR REVIEW",
  ];

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
        <h1 className="text-3xl mb-2">Add Watermark to PDF</h1>
        <p className="text-muted-foreground">
          Add a text watermark to your PDF document
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Select PDF</CardTitle>
          <CardDescription>
            Choose the PDF file where you want to add the watermark
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
                <Badge variant="outline">{selectedFile.page_count} pages</Badge>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Watermark Text</CardTitle>
          <CardDescription>
            Enter the text you want to use as a watermark
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="watermark-text">Watermark Text</Label>
            <Input
              id="watermark-text"
              value={watermarkText}
              onChange={(e) => setWatermarkText(e.target.value)}
              placeholder="Enter watermark text"
            />
          </div>

          <div className="space-y-2">
            <Label>Quick Presets</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {watermarkPresets.map((preset) => (
                <Button
                  key={preset}
                  variant="outline"
                  size="sm"
                  onClick={() => setWatermarkText(preset)}
                >
                  {preset}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Watermark Settings</CardTitle>
          <CardDescription>
            Customize the appearance of your watermark
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="position">Position</Label>
            <select
              id="position"
              className="w-full p-2 border rounded-md"
              value={position}
              onChange={(e) => setPosition(e.target.value as WatermarkPosition)}
            >
              <option value="center">Center</option>
              <option value="diagonal">Diagonal</option>
              <option value="top">Top</option>
              <option value="bottom">Bottom</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="font-size">Font Size: {fontSize}pt</Label>
            <input
              id="font-size"
              type="range"
              min={12}
              max={72}
              value={fontSize}
              onChange={(e) => setFontSize(parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="opacity">
              Opacity: {Math.round(opacity * 100)}%
            </Label>
            <input
              id="opacity"
              type="range"
              min={0}
              max={1}
              step={0.1}
              value={opacity}
              onChange={(e) => setOpacity(parseFloat(e.target.value))}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              Note: Opacity is simulated using gray color tones
            </p>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="apply-all"
              checked={applyToAllPages}
              onChange={(e) => setApplyToAllPages(e.target.checked)}
              className="w-4 h-4"
            />
            <Label htmlFor="apply-all" className="cursor-pointer">
              Apply watermark to all pages
            </Label>
          </div>

          {!applyToAllPages && (
            <div className="space-y-2">
              <Label htmlFor="custom-page">Specific Page</Label>
              <Input
                id="custom-page"
                type="number"
                min={1}
                max={selectedFile?.page_count || 1}
                value={customPage}
                onChange={(e) => setCustomPage(parseInt(e.target.value) || 1)}
              />
            </div>
          )}

          <div className="p-4 border rounded-md bg-muted/50">
            <p className="text-sm font-medium mb-2">Preview Settings</p>
            <p className="text-xs text-muted-foreground">
              Text: "{watermarkText}"
            </p>
            <p className="text-xs text-muted-foreground">
              Position: {position} | Size: {fontSize}pt | Opacity:{" "}
              {Math.round(opacity * 100)}%
            </p>
            <p className="text-xs text-muted-foreground">
              Apply to: {applyToAllPages ? "All pages" : `Page ${customPage}`}
            </p>
          </div>

          <Button
            onClick={handleAddWatermark}
            disabled={!selectedFileId || !watermarkText.trim() || isLoading}
            className="w-full"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Droplets className="h-4 w-4 mr-2" />
            )}
            {isLoading ? "Adding Watermark..." : "Add Watermark"}
          </Button>
        </CardContent>
      </Card>

      {watermarkResult && (
        <Card>
          <CardHeader>
            <CardTitle>Watermark Added</CardTitle>
            <CardDescription>
              Your watermark has been added successfully
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-3 border rounded-md">
              <div>
                <p className="font-medium">{watermarkResult.filename}</p>
                <p className="text-sm text-muted-foreground">
                  Watermark: "{watermarkText}"
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadWatermarkedFile}
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
