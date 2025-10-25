import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  FileText,
  MoreHorizontal,
  Download,
  Trash2,
  Eye,
  Edit3,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export interface PDFFile {
  id: string;
  name: string;
  size: string;
  lastModified: string;
  thumbnail?: string;
  annotations?: number;
}

interface RecentFilesProps {
  files: PDFFile[];
  onOpenFile: (file: PDFFile) => void;
  onOpenEditor: (file: PDFFile) => void;
  onDeleteFile: (fileId: string) => void;
}

export function RecentFiles({
  files,
  onOpenFile,
  onOpenEditor,
  onDeleteFile,
}: RecentFilesProps) {
  const [selectedFiles, setSelectedFiles] = useState<Set<string>>(new Set());

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "Today";
    if (diffDays === 2) return "Yesterday";
    if (diffDays <= 7) return `${diffDays - 1} days ago`;
    return date.toLocaleDateString();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Files</CardTitle>
      </CardHeader>
      <CardContent>
        {files.length === 0 ? (
          <div className="text-center py-8">
            <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-sm">No files yet</h3>
            <p className="text-sm text-muted-foreground">
              Upload your first PDF to get started
            </p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {files.map((file) => (
              <div
                key={file.id}
                className="group relative overflow-hidden rounded-lg border bg-card p-4 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => onOpenFile(file)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0 overflow-hidden">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <span className="truncate font-medium" title={file.name}>
                        {file.name}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <span>{file.size}</span>
                      <span>{formatDate(file.lastModified)}</span>
                    </div>
                    {file.annotations && file.annotations > 0 && (
                      <Badge variant="secondary" className="mt-2">
                        {file.annotations} annotations
                      </Badge>
                    )}
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenFile(file);
                        }}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View PDF
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenEditor(file);
                        }}
                      >
                        <Edit3 className="h-4 w-4 mr-2" />
                        Text Editor
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={(e) => {
                          e.stopPropagation();
                          onDeleteFile(file.id);
                        }}
                        className="text-destructive"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
