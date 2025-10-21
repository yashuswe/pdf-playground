import { useState } from "react";
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
import { Progress } from "../ui/progress";
import { Slider } from "../ui/slider";
import {
  Minimize2,
  Upload,
  Download,
  FileText,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  Info,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { toast } from "sonner";

interface CompressionJob {
  id: string;
  fileName: string;
  originalSize: string;
  compressedSize: string;
  compressionRatio: number;
  quality: string;
  status: "pending" | "processing" | "completed" | "failed";
  progress: number;
}

export function PDFCompressor() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [compressionLevel, setCompressionLevel] = useState<string>("medium");
  const [customQuality, setCustomQuality] = useState([75]);
  const [compressionJobs, setCompressionJobs] = useState<CompressionJob[]>([]);

  const compressionLevels = [
    {
      value: "low",
      label: "Low Compression",
      description: "Best quality, larger file size",
      quality: 85,
    },
    {
      value: "medium",
      label: "Medium Compression",
      description: "Balanced quality and size",
      quality: 65,
    },
    {
      value: "high",
      label: "High Compression",
      description: "Smaller file size, reduced quality",
      quality: 45,
    },
    {
      value: "custom",
      label: "Custom",
      description: "Set your own compression level",
      quality: customQuality[0],
    },
  ];

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const calculateCompressedSize = (
    originalSize: number,
    quality: number
  ): number => {
    // Simulate compression ratio based on quality
    const compressionRatio = (100 - quality) / 100;
    return Math.max(
      originalSize * (0.3 + compressionRatio * 0.5),
      originalSize * 0.1
    );
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type !== "application/pdf") {
        toast.error("Please select a PDF file");
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleStartCompression = () => {
    if (!selectedFile) {
      toast.error("Please select a PDF file");
      return;
    }

    const selectedLevel = compressionLevels.find(
      (level) => level.value === compressionLevel
    );
    const quality = selectedLevel?.quality || 75;

    const originalSize = selectedFile.size;
    const compressedSize = calculateCompressedSize(originalSize, quality);
    const ratio = ((originalSize - compressedSize) / originalSize) * 100;

    const job: CompressionJob = {
      id: `job-${Date.now()}`,
      fileName: selectedFile.name,
      originalSize: formatFileSize(originalSize),
      compressedSize: formatFileSize(compressedSize),
      compressionRatio: Math.round(ratio),
      quality: `${quality}%`,
      status: "processing",
      progress: 0,
    };

    setCompressionJobs((prev) => [job, ...prev]);
    toast.success("Compression started");

    // Simulate compression progress
    const interval = setInterval(() => {
      setCompressionJobs((prev) =>
        prev.map((j) => {
          if (j.id === job.id) {
            const newProgress = Math.min(j.progress + Math.random() * 25, 100);
            const isComplete = newProgress >= 100;

            return {
              ...j,
              progress: newProgress,
              status: isComplete ? "completed" : "processing",
            };
          }
          return j;
        })
      );
    }, 800);

    // Complete after 2-4 seconds
    setTimeout(
      () => {
        clearInterval(interval);
        setCompressionJobs((prev) =>
          prev.map((j) =>
            j.id === job.id ? { ...j, status: "completed", progress: 100 } : j
          )
        );
        toast.success("PDF compressed successfully");
      },
      Math.random() * 2000 + 2000
    );
  };

  const getStatusIcon = (status: CompressionJob["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "failed":
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      case "processing":
        return <RefreshCw className="h-4 w-4 text-blue-600 animate-spin" />;
      default:
        return <RefreshCw className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: CompressionJob["status"]) => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Completed
          </Badge>
        );
      case "failed":
        return <Badge variant="destructive">Failed</Badge>;
      case "processing":
        return <Badge className="bg-blue-100 text-blue-800">Processing</Badge>;
      default:
        return <Badge variant="outline">Pending</Badge>;
    }
  };

  const currentLevel = compressionLevels.find(
    (level) => level.value === compressionLevel
  );
  const previewQuality =
    compressionLevel === "custom"
      ? customQuality[0]
      : currentLevel?.quality || 75;
  const previewCompressedSize = selectedFile
    ? formatFileSize(calculateCompressedSize(selectedFile.size, previewQuality))
    : null;
  const previewRatio = selectedFile
    ? Math.round(
        ((selectedFile.size -
          calculateCompressedSize(selectedFile.size, previewQuality)) /
          selectedFile.size) *
          100
      )
    : 0;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl mb-2">PDF Compressor</h1>
        <p className="text-muted-foreground">
          Reduce PDF file size while maintaining quality
        </p>
        <Badge variant="outline" className="mt-2">
          Demo Mode - Backend integration coming soon
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Compress PDF</CardTitle>
          <CardDescription>
            Upload a PDF file and choose your compression settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="pdf-upload">Select PDF File</Label>
            <div className="flex items-center gap-4">
              <Input
                id="pdf-upload"
                type="file"
                accept=".pdf"
                onChange={handleFileSelect}
                className="flex-1"
              />
              {selectedFile && (
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <Badge variant="outline">
                    {formatFileSize(selectedFile.size)}
                  </Badge>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <Label>Compression Level</Label>
            <Select
              value={compressionLevel}
              onValueChange={setCompressionLevel}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {compressionLevels.map((level) => (
                  <SelectItem key={level.value} value={level.value}>
                    <div>
                      <div className="font-medium">{level.label}</div>
                      <div className="text-xs text-muted-foreground">
                        {level.description}
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {compressionLevel === "custom" && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Quality: {customQuality[0]}%</Label>
                  <div className="text-xs text-muted-foreground">
                    Higher = Better Quality
                  </div>
                </div>
                <Slider
                  value={customQuality}
                  onValueChange={setCustomQuality}
                  max={95}
                  min={10}
                  step={5}
                  className="w-full"
                />
              </div>
            )}
          </div>

          {selectedFile && (
            <Card className="bg-muted/30">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Info className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">Compression Preview</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Original Size</div>
                      <div className="font-medium">
                        {formatFileSize(selectedFile.size)}
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">
                        Estimated Size
                      </div>
                      <div className="font-medium text-green-600">
                        {previewCompressedSize}
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">
                        Size Reduction
                      </div>
                      <div className="font-medium text-blue-600">
                        ~{previewRatio}%
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <Button
            onClick={handleStartCompression}
            disabled={!selectedFile}
            className="w-full"
          >
            <Minimize2 className="h-4 w-4 mr-2" />
            Compress PDF
          </Button>
        </CardContent>
      </Card>

      {compressionJobs.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Compression History</CardTitle>
            <CardDescription>
              Track your PDF compression progress
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {compressionJobs.map((job) => (
                <div
                  key={job.id}
                  className="flex items-center gap-4 p-4 border rounded-lg"
                >
                  <div className="flex-shrink-0">
                    {getStatusIcon(job.status)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <p className="truncate">{job.fileName}</p>
                      {getStatusBadge(job.status)}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span>
                        {job.originalSize} → {job.compressedSize}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {job.compressionRatio}% smaller
                      </Badge>
                      <span>Quality: {job.quality}</span>
                    </div>

                    {job.status === "processing" && (
                      <Progress value={job.progress} className="h-2" />
                    )}
                  </div>

                  {job.status === "completed" && (
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
