import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import {
  Highlighter,
  Underline,
  Strikethrough,
  Type,
  MessageSquare,
  Palette,
  PenTool,
  Calendar,
  Eye,
  EyeOff,
  FileImage,
  Hash,
  Settings,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { SignatureToolbar } from "./signature-toolbar";

interface SignatureData {
  id: string;
  type: "full-name" | "initials";
  text: string;
  style: string;
  createdAt: string;
}

interface AnnotationToolbarProps {
  selectedAnnotation: string | null;
  onAnnotationSelect: (tool: string | null) => void;
  signatures?: SignatureData[];
  onSignatureCreate?: (signature: SignatureData) => void;
  onWatermarkOpen?: () => void;
  onPageNumbersOpen?: () => void;
  onPageManagementOpen?: () => void;
}

export function AnnotationToolbar({
  selectedAnnotation,
  onAnnotationSelect,
  signatures = [],
  onSignatureCreate = () => {},
  onWatermarkOpen = () => {},
  onPageNumbersOpen = () => {},
  onPageManagementOpen = () => {},
}: AnnotationToolbarProps) {
  const annotationTools = [
    {
      id: "highlight",
      label: "Highlight",
      icon: Highlighter,
      color: "bg-yellow-200",
    },
    {
      id: "underline",
      label: "Underline",
      icon: Underline,
      color: "border-b-2 border-blue-500",
    },
    {
      id: "strikethrough",
      label: "Strikethrough",
      icon: Strikethrough,
      color: "line-through text-red-500",
    },
    {
      id: "redact",
      label: "Redact",
      icon: EyeOff,
      color: "bg-black",
    },
  ];

  const highlightColors = [
    { name: "Yellow", class: "bg-yellow-200", color: "#fef08a" },
    { name: "Green", class: "bg-green-200", color: "#bbf7d0" },
    { name: "Blue", class: "bg-blue-200", color: "#bfdbfe" },
    { name: "Pink", class: "bg-pink-200", color: "#fbcfe8" },
    { name: "Purple", class: "bg-purple-200", color: "#e9d5ff" },
  ];

  return (
    <>
      <div className="border-b p-3 bg-muted/30">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {annotationTools.map((tool) => (
              <Button
                key={tool.id}
                variant={selectedAnnotation === tool.id ? "default" : "ghost"}
                size="sm"
                onClick={() =>
                  onAnnotationSelect(
                    selectedAnnotation === tool.id ? null : tool.id
                  )
                }
                className="h-8"
              >
                <tool.icon className="h-4 w-4 mr-1" />
                {tool.label}
              </Button>
            ))}
          </div>

          <Separator orientation="vertical" className="h-6" />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8">
                <Palette className="h-4 w-4 mr-1" />
                Colors
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <div className="p-2">
                <p className="text-xs font-medium mb-2">Highlight Colors</p>
                <div className="grid grid-cols-5 gap-1">
                  {highlightColors.map((color) => (
                    <button
                      key={color.name}
                      className="w-6 h-6 rounded border-2 border-gray-300 hover:border-gray-500"
                      style={{ backgroundColor: color.color }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant={selectedAnnotation === "text" ? "default" : "ghost"}
            size="sm"
            className="h-8"
            onClick={() =>
              onAnnotationSelect(selectedAnnotation === "text" ? null : "text")
            }
          >
            <Type className="h-4 w-4 mr-1" />
            Text
          </Button>

          <Button
            variant={selectedAnnotation === "comment" ? "default" : "ghost"}
            size="sm"
            className="h-8"
            onClick={() =>
              onAnnotationSelect(
                selectedAnnotation === "comment" ? null : "comment"
              )
            }
          >
            <MessageSquare className="h-4 w-4 mr-1" />
            Comment
          </Button>

          <Separator orientation="vertical" className="h-6" />

          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="h-8"
              onClick={onWatermarkOpen}
            >
              <FileImage className="h-4 w-4 mr-1" />
              Watermark
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="h-8"
              onClick={onPageNumbersOpen}
            >
              <Hash className="h-4 w-4 mr-1" />
              Page Numbers
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="h-8"
              onClick={onPageManagementOpen}
            >
              <Settings className="h-4 w-4 mr-1" />
              Pages
            </Button>
          </div>

          <Separator orientation="vertical" className="h-6" />

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Badge variant="outline">3 annotations</Badge>
            {selectedAnnotation && (
              <span>
                {annotationTools.find((t) => t.id === selectedAnnotation)
                  ?.label || selectedAnnotation}{" "}
                tool active
              </span>
            )}
          </div>
        </div>
      </div>

      <SignatureToolbar
        selectedTool={selectedAnnotation}
        onToolSelect={onAnnotationSelect}
        onSignatureCreate={onSignatureCreate}
        signatures={signatures}
      />
    </>
  );
}
