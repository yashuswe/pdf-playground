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
import { PenTool, Download, FileText, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { listFiles, signPDF, getDownloadUrl, FileMetadata } from "@/lib/api";

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

    setIsLoading(true);
    try {
      const result = await signPDF({
        file_id: selectedFileId,
        page_num: pageNum,
        x: xPosition,
        y: yPosition,
        text: signatureText,
        font_size: fontSize,
        color: [0, 0, 0], // Black color
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
          Limited - Only in blank space
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Select PDF and Page</CardTitle>
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
                <Badge variant="outline">{selectedFile.page_count} pages</Badge>
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
                onChange={(e) => setXPosition(parseInt(e.target.value) || 0)}
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
                onChange={(e) => setYPosition(parseInt(e.target.value) || 0)}
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
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <PenTool className="h-4 w-4 mr-2" />
            )}
            {isLoading ? "Adding Signature..." : "Add Signature"}
          </Button>
        </CardContent>
      </Card>

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
              <Button variant="outline" size="sm" asChild>
                <a
                  href={getDownloadUrl(signResult.file_id)}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
