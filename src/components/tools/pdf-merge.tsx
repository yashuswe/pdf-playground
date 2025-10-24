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
  Combine,
  Download,
  FileText,
  Trash2,
  Loader2,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { toast } from "sonner";
import {
  listFiles,
  mergePDFs,
  getDownloadUrl,
  downloadFileWithWorkaround,
  FileMetadata,
} from "@/lib/api";

export function PDFMerge() {
  const [files, setFiles] = useState<FileMetadata[]>([]);
  const [selectedFileIds, setSelectedFileIds] = useState<string[]>([]);
  const [outputName, setOutputName] = useState("merged_document");
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [mergeResult, setMergeResult] = useState<any>(null);

  useEffect(() => {
    loadFiles();
  }, []);

  const loadFiles = async () => {
    try {
      setIsFetching(true);
      const fileList = await listFiles();
      setFiles(fileList);
    } catch (error: any) {
      toast.error(`Failed to load files: ${error.message}`);
    } finally {
      setIsFetching(false);
    }
  };

  const addFile = (fileId: string) => {
    if (!selectedFileIds.includes(fileId)) {
      setSelectedFileIds([...selectedFileIds, fileId]);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFileIds(selectedFileIds.filter((_, i) => i !== index));
  };

  const moveFileUp = (index: number) => {
    if (index > 0) {
      const newIds = [...selectedFileIds];
      [newIds[index - 1], newIds[index]] = [newIds[index], newIds[index - 1]];
      setSelectedFileIds(newIds);
    }
  };

  const moveFileDown = (index: number) => {
    if (index < selectedFileIds.length - 1) {
      const newIds = [...selectedFileIds];
      [newIds[index], newIds[index + 1]] = [newIds[index + 1], newIds[index]];
      setSelectedFileIds(newIds);
    }
  };

  const getFileById = (fileId: string) => {
    return files.find((f) => f.file_id === fileId);
  };

  const availableFiles = files.filter(
    (f) => !selectedFileIds.includes(f.file_id)
  );

  const handleMerge = async () => {
    if (selectedFileIds.length < 2) {
      toast.error("Please select at least 2 files to merge");
      return;
    }

    if (!outputName.trim()) {
      toast.error("Please provide an output name");
      return;
    }

    setIsLoading(true);
    try {
      const result = await mergePDFs({
        file_ids: selectedFileIds,
        output_name: outputName,
      });

      setMergeResult(result);
      toast.success(`Successfully merged ${result.source_files} files`);

      // Refresh file list
      await loadFiles();
    } catch (error: any) {
      toast.error(`Failed to merge PDFs: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadMergedFile = async () => {
    if (!mergeResult) return;

    try {
      toast.info("Downloading merged file...");
      console.log(
        `Attempting to download merged file: ${mergeResult.file_id} (${mergeResult.filename})`
      );

      const blob = await downloadFileWithWorkaround(
        mergeResult.file_id,
        mergeResult.filename
      );

      // Create download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = mergeResult.filename || "merged-document.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      toast.success("File downloaded successfully!");
    } catch (error: any) {
      console.error("Download failed:", error);
      const errorMessage =
        error.message || error.toString() || "Unknown error occurred";
      toast.error(`Download failed: ${errorMessage}`);
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
        <h1 className="text-3xl mb-2">Merge PDFs</h1>
        <p className="text-muted-foreground">
          Combine multiple PDF documents into a single file
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Available Files */}
        <Card>
          <CardHeader>
            <CardTitle>Available Files</CardTitle>
            <CardDescription>Click to add files to merge</CardDescription>
          </CardHeader>
          <CardContent>
            {availableFiles.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-4">
                {files.length === 0
                  ? "No files available. Please upload PDFs first."
                  : "All files have been added to merge list."}
              </p>
            ) : (
              <div className="space-y-2">
                {availableFiles.map((file) => (
                  <div
                    key={file.file_id}
                    className="flex items-center justify-between p-3 border rounded-md hover:bg-muted cursor-pointer"
                    onClick={() => addFile(file.file_id)}
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">{file.filename}</p>
                        <p className="text-xs text-muted-foreground">
                          {file.page_count} pages
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Selected Files */}
        <Card>
          <CardHeader>
            <CardTitle>Files to Merge</CardTitle>
            <CardDescription>
              Order matters - reorder files using arrows
            </CardDescription>
          </CardHeader>
          <CardContent>
            {selectedFileIds.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-4">
                No files selected. Add files from the left panel.
              </p>
            ) : (
              <div className="space-y-2">
                {selectedFileIds.map((fileId, index) => {
                  const file = getFileById(fileId);
                  if (!file) return null;

                  return (
                    <div
                      key={fileId}
                      className="flex items-center gap-2 p-3 border rounded-md"
                    >
                      <Badge variant="outline">{index + 1}</Badge>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{file.filename}</p>
                        <p className="text-xs text-muted-foreground">
                          {file.page_count} pages
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => moveFileUp(index)}
                          disabled={index === 0}
                        >
                          <ArrowUp className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => moveFileDown(index)}
                          disabled={index === selectedFileIds.length - 1}
                        >
                          <ArrowDown className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Merge Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="output-name">Output Filename</Label>
            <Input
              id="output-name"
              value={outputName}
              onChange={(e) => setOutputName(e.target.value)}
              placeholder="merged_document"
            />
          </div>

          <Button
            onClick={handleMerge}
            disabled={selectedFileIds.length < 2 || isLoading}
            className="w-full"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Combine className="h-4 w-4 mr-2" />
            )}
            {isLoading ? "Merging..." : `Merge ${selectedFileIds.length} PDFs`}
          </Button>
        </CardContent>
      </Card>

      {mergeResult && (
        <Card>
          <CardHeader>
            <CardTitle>Merge Complete</CardTitle>
            <CardDescription>
              Your PDFs have been merged successfully
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-3 border rounded-md">
              <div>
                <p className="font-medium">{mergeResult.filename}</p>
                <p className="text-sm text-muted-foreground">
                  {mergeResult.page_count} total pages from{" "}
                  {mergeResult.source_files} files
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadMergedFile}
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
