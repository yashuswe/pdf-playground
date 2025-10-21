import { useState, useRef } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import {
  FileText,
  Upload,
  Zap,
  Minimize2,
  RefreshCw,
  ArrowRight,
  Star,
  Clock,
  Users,
  Scissors,
  Combine,
  PenTool,
  Droplets,
} from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { UploadArea } from "./dashboard/upload-area";
import { PDFFile } from "./dashboard/recent-files";
import { toast } from "sonner";

interface User {
  name: string;
  email: string;
}

interface HomepageProps {
  user: User;
  onFileUpload: (files: File[]) => void;
  onOpenFile: (file: PDFFile) => void;
  onOpenEditor: (file: PDFFile) => void;
  files: PDFFile[];
  onNavigateToTool?: (tool: string) => void;
}

export function Homepage({
  user,
  onFileUpload,
  onOpenFile,
  onOpenEditor,
  files,
  onNavigateToTool,
}: HomepageProps) {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleQuickUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFiles = Array.from(event.target.files || []);
    if (selectedFiles.length > 0) {
      // Import the upload API
      const { uploadFile } = await import("../lib/api");

      for (const file of selectedFiles) {
        try {
          await uploadFile(file);
          toast.success(`${file.name} uploaded successfully`);
        } catch (error: any) {
          toast.error(`Failed to upload ${file.name}: ${error.message}`);
        }
      }

      onFileUpload(selectedFiles);
    }
  };

  // Deprecated: PDF editing experience
  // const primaryFeatures = [
  //   {
  //     id: "edit",
  //     title: "Edit PDF",
  //     description: "Add text, signatures, dates and annotations to your PDFs",
  //     icon: FileText,
  //     color: "bg-primary text-primary-foreground",
  //     action: "Start Editing",
  //   },
  // ];

  const secondaryFeatures = [
    {
      id: "signature",
      title: "Add Signature",
      description: "Sign PDFs with text signatures",
      icon: PenTool,
      color: "bg-blue-500 text-white",
      action: "Sign PDF",
      badge: "Limited",
    },
    {
      id: "compress",
      title: "Compress PDF",
      description: "Reduce file size while maintaining quality",
      icon: Minimize2,
      color: "bg-green-500 text-white",
      action: "Compress",
    },
    {
      id: "convert",
      title: "Convert Files",
      description: "Convert Word to PDF and other formats",
      icon: RefreshCw,
      color: "bg-purple-500 text-white",
      action: "Convert",
    },
    {
      id: "split",
      title: "Split PDF",
      description: "Split PDF into multiple files",
      icon: Scissors,
      color: "bg-orange-500 text-white",
      action: "Split",
    },
    {
      id: "merge",
      title: "Join PDFs",
      description: "Combine multiple PDFs into one",
      icon: Combine,
      color: "bg-pink-500 text-white",
      action: "Join",
    },
    {
      id: "watermark",
      title: "Add Watermark",
      description: "Protect your documents with watermarks",
      icon: Droplets,
      color: "bg-cyan-500 text-white",
      action: "Watermark",
    },
  ];

  const handleFeatureClick = (featureId: string) => {
    if (onNavigateToTool) {
      onNavigateToTool(featureId);
    }
  };

  const stats = [
    { label: "Files Processed", value: "2.4K+", icon: FileText },
    { label: "Time Saved", value: "150hrs", icon: Clock },
    { label: "Happy Users", value: "500+", icon: Users },
  ];

  const recentFiles = files.slice(0, 3);

  const handleOpenSample = () => {
    const sample = {
      id: "sample",
      name: "Sample_Long_Document.pdf",
      size: "--",
      lastModified: new Date().toISOString().split("T")[0],
      annotations: 0,
    } as PDFFile;
    onOpenFile(sample);
  };

  return (
    <div className="h-screen bg-background overflow-hidden">
      {/* Compact Hero and Main Content */}
      <div className="relative h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="relative h-full max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          {/* SaaS Hero */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground mb-3 bg-background/60 backdrop-blur">
              <Star className="h-3.5 w-3.5 text-primary" />
              Rated 4.9/5 by 500+ users
            </div>
            <h1 className="text-3xl tracking-tight sm:text-4xl mb-2">
              The Fast, Modern PDF Editor
              <span className="block text-primary">Built for Indian SMEs</span>
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground mb-4">
              Edit, convert, and compress PDFs with an intuitive, blazing-fast
              experience.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Button size="sm" onClick={handleQuickUpload}>
                Upload PDF <Upload className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleOpenSample}>
                Open Sample PDF
              </Button>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-240px)]">
            {/* Left Column - Upload & Primary Feature */}
            <div className="lg:col-span-2 space-y-4">
              {/* Quick Upload Area */}
              <div className="mb-4">
                <UploadArea
                  onFileUpload={onFileUpload}
                  className="border-2 border-dashed border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors h-32"
                />
                <div className="text-center mt-2">
                  <p className="text-sm text-muted-foreground">
                    Or{" "}
                    <button
                      onClick={handleQuickUpload}
                      className="text-primary hover:underline"
                    >
                      browse files
                    </button>
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
              </div>

              {/* All Features Combined */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg">PDF Tools</h2>
                  <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="inline-flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5 text-green-600" /> No
                      watermarks
                    </div>
                    <span>•</span>
                    <div className="inline-flex items-center gap-1">
                      <Zap className="h-3.5 w-3.5 text-primary" /> Works
                      offline*
                    </div>
                  </div>
                </div>

                {/* PDF Tools - All Features */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {secondaryFeatures.map((feature) => (
                    <Card
                      key={feature.id}
                      className="hover:shadow-md transition-all duration-300 cursor-pointer"
                      onClick={() => handleFeatureClick(feature.id)}
                    >
                      <CardHeader className="pb-3 pt-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div
                              className={`p-1.5 rounded-lg ${feature.color}`}
                            >
                              <feature.icon className="h-4 w-4" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-sm">
                                {feature.title}
                              </CardTitle>
                              {feature.badge && (
                                <Badge
                                  variant="outline"
                                  className="text-xs mt-1"
                                >
                                  {feature.badge}
                                </Badge>
                              )}
                            </div>
                          </div>
                          <CardDescription className="text-xs">
                            {feature.description}
                          </CardDescription>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full mt-2"
                          >
                            {feature.action}
                          </Button>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>

                {/* Pro Teaser */}
                <Card className="border-dashed">
                  <CardHeader className="py-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-sm">Go Pro</CardTitle>
                        <CardDescription className="text-xs">
                          Batch processing, brand watermarking, and priority
                          export speeds.
                        </CardDescription>
                      </div>
                      <Button size="sm" variant="secondary">
                        Upgrade
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>

            {/* Right Column - Stats & Recent Files */}
            <div className="space-y-4">
              {/* Onboarding Checklist */}
              <Card>
                <CardHeader className="pb-3 pt-4">
                  <CardTitle className="text-base mb-2">Get Started</CardTitle>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Upload your first PDF
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Add a signature or text
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Export and share with one click
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Compact Stats */}
              <Card>
                <CardHeader className="pb-3 pt-4">
                  <CardTitle className="text-base mb-2">
                    Your Progress
                  </CardTitle>
                  <div className="space-y-3">
                    {stats.map((stat, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="p-1.5 bg-primary/10 rounded-lg">
                          <stat.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="text-lg">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardHeader>
              </Card>

              {/* Recent Files */}
              {recentFiles.length > 0 && (
                <Card>
                  <CardHeader className="pb-3 pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-base">
                        Continue Working
                      </CardTitle>
                      <Button variant="ghost" size="sm" className="text-xs p-1">
                        View All
                      </Button>
                    </div>

                    <div className="space-y-2">
                      {recentFiles.map((file) => (
                        <div
                          key={file.id}
                          className="flex items-start gap-2 p-2 rounded-lg hover:bg-accent cursor-pointer transition-colors"
                          onClick={() => onOpenFile(file)}
                        >
                          <div className="p-1 bg-red-100 rounded">
                            <FileText className="h-3 w-3 text-red-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm truncate">{file.name}</p>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <span>{file.size}</span>
                              {file?.annotations && file.annotations > 0 && (
                                <>
                                  <span>•</span>
                                  <Badge
                                    variant="secondary"
                                    className="text-xs py-0 px-1"
                                  >
                                    {file.annotations}
                                  </Badge>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardHeader>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
