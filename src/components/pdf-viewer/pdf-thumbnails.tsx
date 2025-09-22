import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";

interface PDFThumbnailsProps {
  totalPages: number;
  currentPage: number;
  onPageSelect: (page: number) => void;
}

export function PDFThumbnails({
  totalPages,
  currentPage,
  onPageSelect,
}: PDFThumbnailsProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="h-full flex flex-col">
      <div className="p-3 border-b">
        <h3 className="font-medium text-sm">Pages</h3>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-2">
          {pages.map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "ghost"}
              className="w-full h-auto p-2 flex flex-col gap-2"
              onClick={() => onPageSelect(page)}
            >
              {/* Mock thumbnail */}
              <div className="w-full aspect-[8.5/11] bg-white border rounded shadow-sm flex items-center justify-center text-xs text-muted-foreground">
                <div className="text-center">
                  <div className="w-8 h-1 bg-gray-300 mx-auto mb-1" />
                  <div className="w-6 h-1 bg-gray-300 mx-auto mb-1" />
                  <div className="w-10 h-1 bg-gray-300 mx-auto" />
                </div>
              </div>
              <span className="text-xs">{page}</span>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
