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
import {
  RefreshCw,
  Upload,
  Download,
  FileText,
  File,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { toast } from "sonner";

interface ConversionJob {
  id: string;
  fileName: string;
  fromFormat: string;
  toFormat: string;
  status: "pending" | "processing" | "completed" | "failed";
  progress: number;
}

export function FileConverter() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fromFormat, setFromFormat] = useState<string>("");
  const [toFormat, setToFormat] = useState<string>("pdf");
  const [conversionJobs, setConversionJobs] = useState<ConversionJob[]>([]);

  const supportedFormats = [
    { value: "pdf", label: "PDF", icon: FileText },
    { value: "doc", label: "Word Document (.doc)", icon: File },
    { value: "docx", label: "Word Document (.docx)", icon: File },
    { value: "txt", label: "Text File (.txt)", icon: File },
    { value: "rtf", label: "Rich Text Format (.rtf)", icon: File },
  ];

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);

      // Auto-detect format based on file extension
      const extension = file.name.split(".").pop()?.toLowerCase();
      const detectedFormat = supportedFormats.find(
        (format) => format.value === extension,
      );
      if (detectedFormat) {
        setFromFormat(detectedFormat.value);
      }
    }
  };

  const handleStartConversion = () => {
    if (!selectedFile || !fromFormat || !toFormat) {
      toast.error("Please select a file and conversion formats");
      return;
    }

    if (fromFormat === toFormat) {
      toast.error("Source and target formats cannot be the same");
      return;
    }

    const job: ConversionJob = {
      id: `job-${Date.now()}`,
      fileName: selectedFile.name,
      fromFormat,
      toFormat,
      status: "processing",
      progress: 0,
    };

    setConversionJobs((prev) => [job, ...prev]);
    toast.success("Conversion started");

    // Simulate conversion progress
    const interval = setInterval(() => {
      setConversionJobs((prev) =>
        prev.map((j) => {
          if (j.id === job.id) {
            const newProgress = Math.min(j.progress + Math.random() * 30, 100);
            const isComplete = newProgress >= 100;

            return {
              ...j,
              progress: newProgress,
              status: isComplete ? "completed" : "processing",
            };
          }
          return j;
        }),
      );
    }, 1000);

    // Complete after 3-5 seconds
    setTimeout(
      () => {
        clearInterval(interval);
        setConversionJobs((prev) =>
          prev.map((j) =>
            j.id === job.id ? { ...j, status: "completed", progress: 100 } : j,
          ),
        );
        toast.success("File converted successfully");
      },
      Math.random() * 2000 + 3000,
    );
  };

  const getStatusIcon = (status: ConversionJob["status"]) => {
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

  const getStatusBadge = (status: ConversionJob["status"]) => {
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

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl mb-2">File Converter</h1>
        <p className="text-muted-foreground">
          Convert between different document formats
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Convert File</CardTitle>
          <CardDescription>
            Upload a file and select the target format for conversion
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="file-upload">Select File</Label>
            <div className="flex items-center gap-4">
              <Input
                id="file-upload"
                type="file"
                accept=".pdf,.doc,.docx,.txt,.rtf"
                onChange={handleFileSelect}
                className="flex-1"
              />
              {selectedFile && (
                <Badge variant="outline">{selectedFile.name}</Badge>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>From Format</Label>
              <Select value={fromFormat} onValueChange={setFromFormat}>
                <SelectTrigger>
                  <SelectValue placeholder="Select source format" />
                </SelectTrigger>
                <SelectContent>
                  {supportedFormats.map((format) => (
                    <SelectItem key={format.value} value={format.value}>
                      <div className="flex items-center gap-2">
                        <format.icon className="h-4 w-4" />
                        {format.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>To Format</Label>
              <Select value={toFormat} onValueChange={setToFormat}>
                <SelectTrigger>
                  <SelectValue placeholder="Select target format" />
                </SelectTrigger>
                <SelectContent>
                  {supportedFormats.map((format) => (
                    <SelectItem key={format.value} value={format.value}>
                      <div className="flex items-center gap-2">
                        <format.icon className="h-4 w-4" />
                        {format.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            onClick={handleStartConversion}
            disabled={
              !selectedFile ||
              !fromFormat ||
              !toFormat ||
              fromFormat === toFormat
            }
            className="w-full"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Start Conversion
          </Button>
        </CardContent>
      </Card>

      {conversionJobs.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Conversion History</CardTitle>
            <CardDescription>
              Track your file conversion progress
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {conversionJobs.map((job) => (
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

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span>{job.fromFormat.toUpperCase()}</span>
                      <span>→</span>
                      <span>{job.toFormat.toUpperCase()}</span>
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
