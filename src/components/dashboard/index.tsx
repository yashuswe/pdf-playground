import { useState } from "react";
import { UploadArea } from "./upload-area";
import { RecentFiles, PDFFile } from "./recent-files";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  FileText,
  Highlighter,
  Download,
  Users,
  Clock,
  TrendingUp,
} from "lucide-react";

interface DashboardProps {
  user: { name: string; email: string };
  files: PDFFile[];
  onFileUpload: (files: File[]) => void;
  onOpenFile: (file: PDFFile) => void;
  onOpenEditor: (file: PDFFile) => void;
  onDeleteFile: (fileId: string) => void;
}

export function Dashboard({
  user,
  files,
  onFileUpload,
  onOpenFile,
  onOpenEditor,
  onDeleteFile,
}: DashboardProps) {
  const stats = [
    {
      title: "Total Documents",
      value: files.length,
      icon: FileText,
      description: "PDF files uploaded",
    },
    {
      title: "Annotations",
      value: files.reduce((acc, file) => acc + (file.annotations || 0), 0),
      icon: Highlighter,
      description: "Total annotations made",
    },
    {
      title: "Storage Used",
      value: "2.4 GB",
      icon: Download,
      description: "of 10 GB available",
    },
    {
      title: "Active Time",
      value: "24h",
      icon: Clock,
      description: "this week",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1>Welcome back, {user.name.split(" ")[0]}!</h1>
          <p className="text-muted-foreground">
            Manage your PDF documents with powerful editing and annotation tools
          </p>
        </div>
        <Badge variant="outline" className="self-start md:self-center">
          <TrendingUp className="h-3 w-3 mr-1" />
          Free Plan
        </Badge>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="glass-card floating-animation">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button
              variant="outline"
              className="h-auto p-4 flex flex-col gap-2"
            >
              <FileText className="h-8 w-8" />
              <span>Create New PDF</span>
            </Button>
            <Button
              variant="outline"
              className="h-auto p-4 flex flex-col gap-2"
            >
              <Users className="h-8 w-8" />
              <span>Share Documents</span>
            </Button>
            <Button
              variant="outline"
              className="h-auto p-4 flex flex-col gap-2"
            >
              <Download className="h-8 w-8" />
              <span>Bulk Download</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Upload Area */}
      <UploadArea onFileUpload={onFileUpload} />

      {/* Recent Files */}
      <RecentFiles
        files={files}
        onOpenFile={onOpenFile}
        onOpenEditor={onOpenEditor}
        onDeleteFile={onDeleteFile}
      />
    </div>
  );
}
