import { useState, useRef } from "react";
import Link from "next/link";
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
      route: "/tools/signature",
    },
    {
      id: "compress",
      title: "Compress PDF",
      description: "Reduce file size while maintaining quality",
      icon: Minimize2,
      color: "bg-green-500 text-white",
      action: "Compress",
      route: "/tools/compress",
    },
    {
      id: "convert",
      title: "Convert Files",
      description: "Convert Word to PDF and other formats",
      icon: RefreshCw,
      color: "bg-purple-500 text-white",
      action: "Convert",
      route: "/tools/convert",
    },
    {
      id: "split",
      title: "Split PDF",
      description: "Split PDF into multiple files",
      icon: Scissors,
      color: "bg-orange-500 text-white",
      action: "Split",
      route: "/tools/split",
    },
    {
      id: "merge",
      title: "Join PDFs",
      description: "Combine multiple PDFs into one",
      icon: Combine,
      color: "bg-pink-500 text-white",
      action: "Join",
      route: "/tools/merge",
    },
    {
      id: "watermark",
      title: "Add Watermark",
      description: "Protect your documents with watermarks",
      icon: Droplets,
      color: "bg-cyan-500 text-white",
      action: "Watermark",
      route: "/tools/watermark",
    },
  ];

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
            <h1 className="text-3xl tracking-tight sm:text-4xl mb-2">
              <span className="gradient-text">The Fast, Modern PDF Editor</span>
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground mb-4">
              Edit, convert, and compress PDFs with an intuitive, blazing-fast
              experience.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Upload & Primary Feature */}
            <div className="lg:col-span-2 space-y-4">
              {/* Quick Upload Area */}
              <div className="mb-4">
                <UploadArea onFileUpload={onFileUpload} compact={true} />
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
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                  {secondaryFeatures.map((feature) => (
                    <Link key={feature.id} href={feature.route}>
                      <Card className="glass-card hover:shadow-md transition-all duration-300 cursor-pointer floating-animation">
                        <CardHeader className="pb-1 pt-2">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <div
                                className={`p-1 rounded-lg ${feature.color}`}
                              >
                                <feature.icon className="h-3 w-3" />
                              </div>
                              <div className="flex-1">
                                <CardTitle className="text-xs font-medium">
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
                            <CardDescription className="text-xs leading-tight line-clamp-2">
                              {feature.description}
                            </CardDescription>
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full mt-1 text-xs h-7"
                            >
                              {feature.action}
                            </Button>
                          </div>
                        </CardHeader>
                      </Card>
                    </Link>
                  ))}
                </div>

                {/* Pro Teaser */}
                <Card className="glass-card border-dashed gradient-border">
                  <CardHeader className="py-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-sm">Go Pro</CardTitle>
                        <CardDescription className="text-xs">
                          Batch processing, brand watermarking, and priority
                          export speeds.
                        </CardDescription>
                      </div>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="gradient-button"
                      >
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
              <Card className="glass-card">
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
              <Card className="glass-card">
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
                <Card className="glass-card">
                  <CardHeader className="pb-3 pt-4 px-3 sm:px-6">
                    <div className="flex items-center justify-between mb-2 gap-2">
                      <CardTitle className="text-sm sm:text-base">
                        Continue Working
                      </CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs p-1 h-auto"
                      >
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
                          <div className="p-1 bg-red-100 rounded flex-shrink-0">
                            <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-red-600" />
                          </div>
                          <div className="flex-1 min-w-0 overflow-hidden">
                            <p
                              className="text-xs sm:text-sm truncate font-medium"
                              title={file.name}
                            >
                              {file.name}
                            </p>
                            <div className="flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground flex-wrap">
                              <span className="truncate max-w-[80px] sm:max-w-none">
                                {file.size}
                              </span>
                              {file?.annotations && file.annotations > 0 && (
                                <>
                                  <span className="hidden sm:inline">•</span>
                                  <Badge
                                    variant="secondary"
                                    className="text-[10px] sm:text-xs py-0 px-1 h-auto"
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
