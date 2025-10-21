import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import {
  ArrowUpDown,
  Download,
  FileText,
  Loader2,
  ArrowUp,
  ArrowDown,
  RotateCcw,
} from "lucide-react";
import { toast } from "sonner";
import {
  listFiles,
  reorderPages,
  getDownloadUrl,
  getPDFInfo,
  FileMetadata,
} from "@/lib/api";

export function PDFReorder() {
  const [files, setFiles] = useState<FileMetadata[]>([]);
  const [selectedFileId, setSelectedFileId] = useState<string>("");
  const [pageOrder, setPageOrder] = useState<number[]>([]);
  const [originalOrder, setOriginalOrder] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [reorderResult, setReorderResult] = useState<any>(null);

  useEffect(() => {
    loadFiles();
  }, []);

  useEffect(() => {
    if (selectedFileId) {
      const file = files.find((f) => f.file_id === selectedFileId);
      if (file) {
        const order = Array.from({ length: file.page_count }, (_, i) => i + 1);
        setPageOrder(order);
        setOriginalOrder(order);
      }
    }
  }, [selectedFileId, files]);

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

  const movePageUp = (index: number) => {
    if (index > 0) {
      const newOrder = [...pageOrder];
      [newOrder[index - 1], newOrder[index]] = [
        newOrder[index],
        newOrder[index - 1],
      ];
      setPageOrder(newOrder);
    }
  };

  const movePageDown = (index: number) => {
    if (index < pageOrder.length - 1) {
      const newOrder = [...pageOrder];
      [newOrder[index], newOrder[index + 1]] = [
        newOrder[index + 1],
        newOrder[index],
      ];
      setPageOrder(newOrder);
    }
  };

  const resetOrder = () => {
    setPageOrder([...originalOrder]);
    toast.success("Page order reset to original");
  };

  const reverseOrder = () => {
    setPageOrder([...pageOrder].reverse());
    toast.success("Page order reversed");
  };

  const hasChanges =
    JSON.stringify(pageOrder) !== JSON.stringify(originalOrder);

  const handleReorder = async () => {
    if (!selectedFileId) {
      toast.error("Please select a file");
      return;
    }

    if (!hasChanges) {
      toast.error("No changes made to page order");
      return;
    }

    setIsLoading(true);
    try {
      const result = await reorderPages({
        file_id: selectedFileId,
        page_order: pageOrder,
      });

      setReorderResult(result);
      toast.success("Pages reordered successfully");

      // Refresh file list
      await loadFiles();
    } catch (error: any) {
      toast.error(`Failed to reorder pages: ${error.message}`);
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
        <h1 className="text-3xl mb-2">Reorder PDF Pages</h1>
        <p className="text-muted-foreground">
          Rearrange the pages in your PDF document
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Select PDF to Reorder</CardTitle>
          <CardDescription>
            Choose a PDF file and arrange its pages in the desired order
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
                {hasChanges && <Badge variant="secondary">Modified</Badge>}
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={reverseOrder}
              disabled={!selectedFileId}
            >
              <ArrowUpDown className="h-4 w-4 mr-2" />
              Reverse Order
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={resetOrder}
              disabled={!hasChanges}
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {selectedFile && pageOrder.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Page Order</CardTitle>
            <CardDescription>
              Use arrows to reorder pages. The order shown here will be the new
              page order in the output PDF.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {pageOrder.map((pageNum, index) => (
                <div
                  key={`${pageNum}-${index}`}
                  className="flex items-center gap-2 p-3 border rounded-md"
                >
                  <Badge variant="outline" className="min-w-12 justify-center">
                    {index + 1}
                  </Badge>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Page {pageNum}</p>
                    {pageNum !== originalOrder[index] && (
                      <p className="text-xs text-muted-foreground">
                        Originally page {originalOrder[index]}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => movePageUp(index)}
                      disabled={index === 0}
                    >
                      <ArrowUp className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => movePageDown(index)}
                      disabled={index === pageOrder.length - 1}
                    >
                      <ArrowDown className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={handleReorder}
              disabled={!hasChanges || isLoading}
              className="w-full mt-4"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <ArrowUpDown className="h-4 w-4 mr-2" />
              )}
              {isLoading ? "Reordering..." : "Apply New Page Order"}
            </Button>
          </CardContent>
        </Card>
      )}

      {reorderResult && (
        <Card>
          <CardHeader>
            <CardTitle>Reorder Complete</CardTitle>
            <CardDescription>
              Your PDF pages have been reordered successfully
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-3 border rounded-md">
              <div>
                <p className="font-medium">{reorderResult.filename}</p>
                <p className="text-sm text-muted-foreground">
                  {reorderResult.new_page_count} pages in new order
                </p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a
                  href={getDownloadUrl(reorderResult.file_id)}
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
