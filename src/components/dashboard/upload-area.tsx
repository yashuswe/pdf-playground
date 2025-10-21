import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Upload, FileText, Loader2 } from "lucide-react";
import { uploadFile } from "@/lib/api";
import { toast } from "sonner";

interface UploadAreaProps {
  onFileUpload: (files: File[]) => void;
  className?: string;
}

export function UploadArea({ onFileUpload, className }: UploadAreaProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files).filter(
      (file) => file.type === "application/pdf"
    );

    if (files.length > 0) {
      await handleUpload(files);
    }
  }, []);

  const handleFileInput = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      if (files.length > 0) {
        await handleUpload(files);
      }
    },
    []
  );

  const handleUpload = async (files: File[]) => {
    setIsUploading(true);
    const uploadedFiles: File[] = [];

    try {
      for (const file of files) {
        try {
          await uploadFile(file);
          uploadedFiles.push(file);
          toast.success(`${file.name} uploaded successfully`);
        } catch (error: any) {
          toast.error(`Failed to upload ${file.name}: ${error.message}`);
        }
      }

      if (uploadedFiles.length > 0) {
        onFileUpload(uploadedFiles);
      }
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div
          className={cn(
            "border-2 border-dashed rounded-lg p-8 text-center transition-colors",
            isDragOver
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/25 hover:border-muted-foreground/50",
            className
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full bg-primary/10 p-4">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h3>Upload PDF Files</h3>
              <p className="text-muted-foreground">
                Drag and drop your PDF files here, or click to browse
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild disabled={isUploading}>
                <label htmlFor="file-upload" className="cursor-pointer">
                  {isUploading ? (
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <FileText className="h-4 w-4 mr-2" />
                  )}
                  {isUploading ? "Uploading..." : "Choose Files"}
                </label>
              </Button>
              <input
                id="file-upload"
                type="file"
                accept=".pdf"
                multiple
                className="hidden"
                onChange={handleFileInput}
                disabled={isUploading}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Supports PDF files up to 50MB each
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
