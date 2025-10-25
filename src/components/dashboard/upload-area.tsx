import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import {
  Upload,
  FileText,
  Loader2,
  Cloud,
  Sparkles,
  Zap,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { uploadFile } from "@/lib/api";
import { toast } from "sonner";

interface UploadAreaProps {
  onFileUpload: (files: File[]) => void;
  className?: string;
  compact?: boolean;
}

export function UploadArea({
  onFileUpload,
  className,
  compact = false,
}: UploadAreaProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [uploadErrors, setUploadErrors] = useState<string[]>([]);

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
    setUploadProgress(0);
    setUploadedFiles([]);
    setUploadErrors([]);
    const uploadedFiles: File[] = [];

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        try {
          await uploadFile(file);
          uploadedFiles.push(file);
          setUploadedFiles((prev) => [...prev, file.name]);
          toast.success(`${file.name} uploaded successfully`);
        } catch (error: any) {
          setUploadErrors((prev) => [...prev, file.name]);
          toast.error(`Failed to upload ${file.name}: ${error.message}`);
        }
        setUploadProgress(((i + 1) / files.length) * 100);
      }

      if (uploadedFiles.length > 0) {
        onFileUpload(uploadedFiles);
      }
    } finally {
      setIsUploading(false);
      // Reset progress after a delay
      setTimeout(() => {
        setUploadProgress(0);
        setUploadedFiles([]);
        setUploadErrors([]);
      }, 3000);
    }
  };

  return (
    <Card className="glass-card overflow-hidden">
      <CardContent className="p-0">
        {/* Header with gradient background */}
        <div
          className={cn(
            "relative bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border-b",
            compact ? "p-4" : "p-6"
          )}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
              <Cloud className="h-5 w-5 text-white" />
            </div>
            <h3
              className={cn(
                "font-semibold gradient-text",
                compact ? "text-base" : "text-lg"
              )}
            >
              Upload PDF Files
            </h3>
            <Sparkles className="h-4 w-4 text-purple-500 animate-pulse" />
          </div>
          <p className="text-sm text-muted-foreground">
            Drag and drop your PDF files or click to browse
          </p>
        </div>

        {/* Main upload area */}
        <div className={cn(compact ? "p-4" : "p-6")}>
          <div
            className={cn(
              "relative border-2 border-dashed rounded-xl text-center transition-all duration-300 group",
              compact ? "p-4" : "p-8",
              isDragOver
                ? "border-blue-400 bg-blue-50/50 scale-[1.02] shadow-lg"
                : "border-gray-300 hover:border-blue-300 hover:bg-blue-50/30",
              isUploading && "pointer-events-none opacity-75",
              className
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Upload icon with animation */}
            <div
              className={cn(
                "relative flex flex-col items-center",
                compact ? "gap-3" : "gap-6"
              )}
            >
              <div className="relative">
                <div
                  className={cn(
                    "rounded-full transition-all duration-300",
                    compact ? "p-4" : "p-6",
                    isDragOver
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-110 shadow-lg"
                      : "bg-gradient-to-r from-gray-100 to-gray-200 group-hover:from-blue-100 group-hover:to-purple-100"
                  )}
                >
                  {isUploading ? (
                    <Loader2
                      className={cn(
                        "text-white animate-spin",
                        compact ? "h-6 w-6" : "h-8 w-8"
                      )}
                    />
                  ) : (
                    <Upload
                      className={cn(
                        "transition-colors duration-300",
                        compact ? "h-6 w-6" : "h-8 w-8",
                        isDragOver
                          ? "text-white"
                          : "text-gray-500 group-hover:text-blue-500"
                      )}
                    />
                  )}
                </div>

                {/* Floating particles animation */}
                {!isUploading && (
                  <>
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400 rounded-full animate-ping" />
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  </>
                )}
              </div>

              {/* Upload text */}
              <div className="space-y-2">
                <h4 className="text-lg font-medium text-gray-900">
                  {isUploading ? "Uploading Files..." : "Drop your PDFs here"}
                </h4>
                <p className="text-sm text-gray-600">
                  {isUploading
                    ? "Please wait while we process your files"
                    : "Drag and drop PDF files or click to browse"}
                </p>
              </div>

              {/* Upload button */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  disabled={isUploading}
                  className={cn(
                    "cta-primary cta-md cta-with-icon transition-all duration-300",
                    isUploading && "cta-loading opacity-50 cursor-not-allowed"
                  )}
                >
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer flex items-center gap-2"
                  >
                    {!isUploading && <FileText className="h-4 w-4 cta-icon" />}
                    {isUploading ? "Uploading..." : "Choose Files"}
                  </label>
                </Button>
              </div>

              {/* File info */}
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <FileText className="h-3 w-3" />
                  PDF only
                </div>
                <div className="flex items-center gap-1">
                  <Cloud className="h-3 w-3" />
                  Up to 50MB
                </div>
              </div>

              {/* Progress bar */}
              {isUploading && (
                <div className="w-full max-w-xs">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Uploading...</span>
                    <span>{Math.round(uploadProgress)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Upload results */}
              {(uploadedFiles.length > 0 || uploadErrors.length > 0) && (
                <div className="w-full max-w-md space-y-2">
                  {uploadedFiles.map((filename, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-green-600 bg-green-50 p-2 rounded-lg"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="truncate">{filename}</span>
                    </div>
                  ))}
                  {uploadErrors.map((filename, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-2 rounded-lg"
                    >
                      <AlertCircle className="h-4 w-4" />
                      <span className="truncate">{filename}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Hidden file input */}
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
        </div>
      </CardContent>
    </Card>
  );
}
