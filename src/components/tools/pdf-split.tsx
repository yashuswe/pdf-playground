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
import {
  Scissors,
  Download,
  FileText,
  Plus,
  Trash2,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { listFiles, splitPDF, getDownloadUrl, FileMetadata } from "@/lib/api";

interface PageRange {
  start: number;
  end: number;
  name: string;
}

export function PDFSplit() {
  const [files, setFiles] = useState<FileMetadata[]>([]);
  const [selectedFileId, setSelectedFileId] = useState<string>("");
  const [pageRanges, setPageRanges] = useState<PageRange[]>([
    { start: 1, end: 1, name: "part1" },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [splitResults, setSplitResults] = useState<any[]>([]);

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

  const addPageRange = () => {
    const lastRange = pageRanges[pageRanges.length - 1];
    const newStart = lastRange ? lastRange.end + 1 : 1;
    setPageRanges([
      ...pageRanges,
      { start: newStart, end: newStart, name: `part${pageRanges.length + 1}` },
    ]);
  };

  const removePageRange = (index: number) => {
    if (pageRanges.length > 1) {
      setPageRanges(pageRanges.filter((_, i) => i !== index));
    }
  };

  const updatePageRange = (
    index: number,
    field: keyof PageRange,
    value: string | number
  ) => {
    const newRanges = [...pageRanges];
    newRanges[index] = { ...newRanges[index], [field]: value };
    setPageRanges(newRanges);
  };

  const handleSplit = async () => {
    if (!selectedFileId) {
      toast.error("Please select a file to split");
      return;
    }

    // Validate page ranges
    const maxPages = selectedFile?.page_count || 0;
    for (const range of pageRanges) {
      if (range.start < 1 || range.end > maxPages || range.start > range.end) {
        toast.error(
          `Invalid page range: ${range.start}-${range.end}. File has ${maxPages} pages.`
        );
        return;
      }
    }

    setIsLoading(true);
    try {
      const result = await splitPDF({
        file_id: selectedFileId,
        page_ranges: pageRanges.map((r) => ({ start: r.start, end: r.end })),
        output_names: pageRanges.map((r) => r.name),
      });

      setSplitResults(result.split_files);
      toast.success(`PDF split into ${result.split_files.length} files`);

      // Refresh file list
      await loadFiles();
    } catch (error: any) {
      toast.error(`Failed to split PDF: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
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
        <h1 className="text-3xl mb-2">Split PDF</h1>
        <p className="text-muted-foreground">
          Split a PDF document into multiple files by page ranges
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Select PDF to Split</CardTitle>
          <CardDescription>
            Choose a PDF file and define page ranges for splitting
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

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Page Ranges</Label>
              <Button
                variant="outline"
                size="sm"
                onClick={addPageRange}
                disabled={!selectedFileId}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Range
              </Button>
            </div>

            {pageRanges.map((range, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 border rounded-md"
              >
                <div className="flex-1 grid grid-cols-3 gap-2">
                  <div className="space-y-1">
                    <Label className="text-xs">Start Page</Label>
                    <Input
                      type="number"
                      min={1}
                      max={selectedFile?.page_count || 999}
                      value={isNaN(range.start) ? "" : range.start}
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        updatePageRange(
                          index,
                          "start",
                          isNaN(value) ? 1 : value
                        );
                      }}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">End Page</Label>
                    <Input
                      type="number"
                      min={1}
                      max={selectedFile?.page_count || 999}
                      value={isNaN(range.end) ? "" : range.end}
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        updatePageRange(index, "end", isNaN(value) ? 1 : value);
                      }}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Name</Label>
                    <Input
                      type="text"
                      value={range.name}
                      onChange={(e) =>
                        updatePageRange(index, "name", e.target.value)
                      }
                    />
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removePageRange(index)}
                  disabled={pageRanges.length === 1}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          <Button
            onClick={handleSplit}
            disabled={!selectedFileId || isLoading}
            className="w-full"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Scissors className="h-4 w-4 mr-2" />
            )}
            {isLoading ? "Splitting..." : "Split PDF"}
          </Button>
        </CardContent>
      </Card>

      {splitResults.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Split Results</CardTitle>
            <CardDescription>
              Your PDF has been split successfully
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {splitResults.map((result, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-md"
                >
                  <div>
                    <p className="font-medium">{result.filename}</p>
                    <p className="text-sm text-muted-foreground">
                      Pages {result.page_range.start}-{result.page_range.end} (
                      {result.page_count} pages)
                    </p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={getDownloadUrl(result.file_id)}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
