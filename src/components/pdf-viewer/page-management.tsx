import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import {
  Plus,
  Trash2,
  Copy,
  Move,
  Split,
  Merge,
  RotateCw,
  Download,
  Upload,
  GripVertical,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "../ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

interface PageData {
  id: string;
  pageNumber: number;
  thumbnail?: string;
  rotationAngle: number;
}

interface PageManagementProps {
  pages: PageData[];
  currentPage: number;
  onPageSelect: (pageNumber: number) => void;
  onPagesReorder: (newOrder: PageData[]) => void;
  onPageAdd: (position: number) => void;
  onPageDelete: (pageNumber: number) => void;
  onPageRotate: (pageNumber: number, angle: number) => void;
  onPageDuplicate: (pageNumber: number) => void;
  onDocumentSplit: (pageNumber: number) => void;
  onDocumentMerge: (file: File) => void;
}

export function PageManagement({
  pages,
  currentPage,
  onPageSelect,
  onPagesReorder,
  onPageAdd,
  onPageDelete,
  onPageRotate,
  onPageDuplicate,
  onDocumentSplit,
  onDocumentMerge,
}: PageManagementProps) {
  const [draggedPage, setDraggedPage] = useState<PageData | null>(null);
  const [dropTarget, setDropTarget] = useState<number | null>(null);
  const [selectedPages, setSelectedPages] = useState<number[]>([]);
  const [showAddPageDialog, setShowAddPageDialog] = useState(false);
  const [newPagePosition, setNewPagePosition] = useState(1);

  const handleDragStart = (page: PageData) => {
    setDraggedPage(page);
  };

  const handleDragOver = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    setDropTarget(targetIndex);
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    if (!draggedPage) return;

    const newPages = [...pages];
    const draggedIndex = pages.findIndex((p) => p.id === draggedPage.id);

    // Remove dragged page
    const [removed] = newPages.splice(draggedIndex, 1);

    // Insert at new position
    newPages.splice(targetIndex, 0, removed);

    // Update page numbers
    const reorderedPages = newPages.map((page, index) => ({
      ...page,
      pageNumber: index + 1,
    }));

    onPagesReorder(reorderedPages);
    setDraggedPage(null);
    setDropTarget(null);
  };

  const handlePageSelect = (pageNumber: number, multiSelect = false) => {
    if (multiSelect) {
      if (selectedPages.includes(pageNumber)) {
        setSelectedPages((prev) => prev.filter((p) => p !== pageNumber));
      } else {
        setSelectedPages((prev) => [...prev, pageNumber]);
      }
    } else {
      setSelectedPages([pageNumber]);
      onPageSelect(pageNumber);
    }
  };

  const handleBulkDelete = () => {
    selectedPages.forEach((pageNumber) => {
      onPageDelete(pageNumber);
    });
    setSelectedPages([]);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      onDocumentMerge(file);
    }
  };

  const renderPageThumbnail = (page: PageData) => (
    <div
      key={page.id}
      className={`relative group cursor-pointer border-2 rounded-lg p-2 transition-all ${
        currentPage === page.pageNumber
          ? "border-primary bg-primary/5"
          : selectedPages.includes(page.pageNumber)
            ? "border-primary/50 bg-primary/10"
            : "border-border hover:border-primary/30"
      }`}
      draggable
      onDragStart={() => handleDragStart(page)}
      onDragOver={(e) => handleDragOver(e, page.pageNumber - 1)}
      onDrop={(e) => handleDrop(e, page.pageNumber - 1)}
      onClick={(e) => handlePageSelect(page.pageNumber, e.ctrlKey || e.metaKey)}
    >
      <div
        className="w-20 h-28 bg-white border rounded shadow-sm flex items-center justify-center relative overflow-hidden"
        style={{ transform: `rotate(${page.rotationAngle}deg)` }}
      >
        {page.thumbnail ? (
          <img
            src={page.thumbnail}
            alt={`Page ${page.pageNumber}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-xs text-muted-foreground text-center p-2">
            Page {page.pageNumber}
          </div>
        )}

        {/* Drag handle */}
        <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <GripVertical className="h-3 w-3 text-muted-foreground" />
        </div>
      </div>

      <div className="text-center mt-1">
        <Badge variant="outline" className="text-xs">
          {page.pageNumber}
        </Badge>
      </div>

      {/* Page actions */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-1">
        <Button
          size="sm"
          variant="secondary"
          className="h-6 w-6 p-0"
          onClick={(e) => {
            e.stopPropagation();
            onPageRotate(page.pageNumber, page.rotationAngle + 90);
          }}
        >
          <RotateCw className="h-3 w-3" />
        </Button>
        <Button
          size="sm"
          variant="secondary"
          className="h-6 w-6 p-0"
          onClick={(e) => {
            e.stopPropagation();
            onPageDuplicate(page.pageNumber);
          }}
        >
          <Copy className="h-3 w-3" />
        </Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              size="sm"
              variant="destructive"
              className="h-6 w-6 p-0"
              onClick={(e) => e.stopPropagation()}
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Page</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete page {page.pageNumber}? This
                action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => onPageDelete(page.pageNumber)}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );

  return (
    <Card className="w-80 h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Page Management</CardTitle>
        <div className="flex items-center gap-2">
          <Badge variant="outline">{pages.length} pages</Badge>
          {selectedPages.length > 0 && (
            <Badge variant="secondary">{selectedPages.length} selected</Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Page Actions */}
        <div className="space-y-2">
          <Dialog open={showAddPageDialog} onOpenChange={setShowAddPageDialog}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add Page
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Page</DialogTitle>
                <DialogDescription>
                  Insert a new blank page at the specified position in your
                  document.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="page-position">Insert at position</Label>
                  <Input
                    id="page-position"
                    type="number"
                    value={newPagePosition}
                    onChange={(e) =>
                      setNewPagePosition(parseInt(e.target.value) || 1)
                    }
                    min={1}
                    max={pages.length + 1}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setShowAddPageDialog(false)}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    onPageAdd(newPagePosition);
                    setShowAddPageDialog(false);
                  }}
                >
                  Add Page
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onDocumentSplit(currentPage)}
            >
              <Split className="h-4 w-4 mr-1" />
              Split
            </Button>
            <Button variant="outline" size="sm" asChild>
              <label htmlFor="merge-file" className="cursor-pointer">
                <Merge className="h-4 w-4 mr-1" />
                Merge
                <input
                  id="merge-file"
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </label>
            </Button>
          </div>

          {selectedPages.length > 0 && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" size="sm" className="w-full">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Selected ({selectedPages.length})
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Selected Pages</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to delete {selectedPages.length}{" "}
                    selected page(s)? This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleBulkDelete}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    Delete Pages
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>

        <Separator />

        {/* Page Thumbnails */}
        <div className="space-y-2 max-h-96 overflow-y-auto">
          <div className="grid grid-cols-3 gap-2">
            {pages.map((page) => renderPageThumbnail(page))}
          </div>

          {dropTarget !== null && (
            <div className="h-1 bg-primary rounded-full transition-all" />
          )}
        </div>
      </CardContent>
    </Card>
  );
}
