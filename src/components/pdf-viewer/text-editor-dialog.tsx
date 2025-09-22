import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Slider } from "../ui/slider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "../ui/dialog";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";
import { Toggle } from "../ui/toggle";

interface TextData {
  id: string;
  content: string;
  fontSize: number;
  fontFamily: string;
  color: string;
  isBold: boolean;
  isItalic: boolean;
  isUnderlined: boolean;
  alignment: "left" | "center" | "right";
  x: number;
  y: number;
  width: number;
  height: number;
}

interface TextEditorDialogProps {
  open: boolean;
  onClose: () => void;
  textData?: TextData | null;
  onSave: (textData: Omit<TextData, "id" | "x" | "y">) => void;
  onDelete?: () => void;
}

export function TextEditorDialog({
  open,
  onClose,
  textData,
  onSave,
  onDelete,
}: TextEditorDialogProps) {
  const [content, setContent] = useState("");
  const [fontSize, setFontSize] = useState([16]);
  const [fontFamily, setFontFamily] = useState("Arial");
  const [color, setColor] = useState("#000000");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderlined, setIsUnderlined] = useState(false);
  const [alignment, setAlignment] = useState<"left" | "center" | "right">(
    "left",
  );
  const [width, setWidth] = useState([200]);
  const [height, setHeight] = useState([100]);

  useEffect(() => {
    if (textData) {
      setContent(textData.content);
      setFontSize([textData.fontSize]);
      setFontFamily(textData.fontFamily);
      setColor(textData.color);
      setIsBold(textData.isBold);
      setIsItalic(textData.isItalic);
      setIsUnderlined(textData.isUnderlined);
      setAlignment(textData.alignment);
      setWidth([textData.width]);
      setHeight([textData.height]);
    } else {
      // Reset to defaults for new text
      setContent("");
      setFontSize([16]);
      setFontFamily("Arial");
      setColor("#000000");
      setIsBold(false);
      setIsItalic(false);
      setIsUnderlined(false);
      setAlignment("left");
      setWidth([200]);
      setHeight([100]);
    }
  }, [textData, open]);

  const handleSave = () => {
    if (!content.trim()) return;

    const newTextData = {
      content,
      fontSize: fontSize[0],
      fontFamily,
      color,
      isBold,
      isItalic,
      isUnderlined,
      alignment,
      width: width[0],
      height: height[0],
    };

    onSave(newTextData);
    onClose();
  };

  const fontFamilies = [
    "Arial",
    "Helvetica",
    "Times New Roman",
    "Georgia",
    "Verdana",
    "Courier New",
    "Comic Sans MS",
    "Impact",
    "Trebuchet MS",
    "Palatino",
  ];

  const getPreviewStyle = (): React.CSSProperties => ({
    fontSize: `${fontSize[0]}px`,
    fontFamily,
    color,
    fontWeight: isBold ? "bold" : "normal",
    fontStyle: isItalic ? "italic" : "normal",
    textDecoration: isUnderlined ? "underline" : "none",
    textAlign: alignment,
    width: `${width[0]}px`,
    height: `${height[0]}px`,
    border: "1px dashed #ccc",
    padding: "8px",
    borderRadius: "4px",
    backgroundColor: "#f9f9f9",
    overflow: "auto",
    resize: "none",
  });

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{textData ? "Edit Text" : "Add Text"}</DialogTitle>
          <DialogDescription>
            {textData
              ? "Modify the text properties and content."
              : "Create a new text element with custom formatting and positioning."}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-6">
          {/* Text Content */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="text-content">Text Content</Label>
              <Textarea
                id="text-content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter your text here..."
                className="min-h-[120px]"
              />
            </div>

            {/* Font Settings */}
            <div className="space-y-3">
              <div className="space-y-2">
                <Label>Font Family</Label>
                <Select value={fontFamily} onValueChange={setFontFamily}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {fontFamilies.map((font) => (
                      <SelectItem
                        key={font}
                        value={font}
                        style={{ fontFamily: font }}
                      >
                        {font}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Font Size: {fontSize[0]}px</Label>
                <Slider
                  value={fontSize}
                  onValueChange={setFontSize}
                  max={72}
                  min={8}
                  step={1}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="text-color">Text Color</Label>
                <div className="flex gap-2">
                  <Input
                    id="text-color"
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-16 h-10"
                  />
                  <Input
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder="#000000"
                    className="flex-1"
                  />
                </div>
              </div>
            </div>

            {/* Text Formatting */}
            <div className="space-y-2">
              <Label>Text Formatting</Label>
              <div className="flex gap-1">
                <Toggle pressed={isBold} onPressedChange={setIsBold}>
                  <Bold className="h-4 w-4" />
                </Toggle>
                <Toggle pressed={isItalic} onPressedChange={setIsItalic}>
                  <Italic className="h-4 w-4" />
                </Toggle>
                <Toggle
                  pressed={isUnderlined}
                  onPressedChange={setIsUnderlined}
                >
                  <Underline className="h-4 w-4" />
                </Toggle>
              </div>
            </div>

            {/* Text Alignment */}
            <div className="space-y-2">
              <Label>Text Alignment</Label>
              <div className="flex gap-1">
                <Toggle
                  pressed={alignment === "left"}
                  onPressedChange={() => setAlignment("left")}
                >
                  <AlignLeft className="h-4 w-4" />
                </Toggle>
                <Toggle
                  pressed={alignment === "center"}
                  onPressedChange={() => setAlignment("center")}
                >
                  <AlignCenter className="h-4 w-4" />
                </Toggle>
                <Toggle
                  pressed={alignment === "right"}
                  onPressedChange={() => setAlignment("right")}
                >
                  <AlignRight className="h-4 w-4" />
                </Toggle>
              </div>
            </div>

            {/* Text Box Dimensions */}
            <div className="space-y-3">
              <div className="space-y-2">
                <Label>Width: {width[0]}px</Label>
                <Slider
                  value={width}
                  onValueChange={setWidth}
                  max={500}
                  min={100}
                  step={10}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label>Height: {height[0]}px</Label>
                <Slider
                  value={height}
                  onValueChange={setHeight}
                  max={300}
                  min={50}
                  step={10}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Preview</Label>
              <div style={getPreviewStyle()} className="whitespace-pre-wrap">
                {content || "Preview text will appear here..."}
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <div className="flex justify-between w-full">
            <div>
              {textData && onDelete && (
                <Button variant="destructive" onClick={onDelete}>
                  Delete Text
                </Button>
              )}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={handleSave} disabled={!content.trim()}>
                {textData ? "Update" : "Add"} Text
              </Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
