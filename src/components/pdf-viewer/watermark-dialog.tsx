import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Slider } from "../ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "../ui/dialog";

interface WatermarkData {
  type: "text" | "image";
  content: string;
  opacity: number;
  position:
    | "center"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
  rotation: number;
  fontSize?: number;
  color?: string;
}

interface WatermarkDialogProps {
  open: boolean;
  onClose: () => void;
  onApply: (watermark: WatermarkData) => void;
}

export function WatermarkDialog({
  open,
  onClose,
  onApply,
}: WatermarkDialogProps) {
  const [watermarkType, setWatermarkType] = useState<"text" | "image">("text");
  const [text, setText] = useState("CONFIDENTIAL");
  const [opacity, setOpacity] = useState([30]);
  const [position, setPosition] = useState("center");
  const [rotation, setRotation] = useState([0]);
  const [fontSize, setFontSize] = useState([48]);
  const [color, setColor] = useState("#000000");

  const handleApply = () => {
    const watermarkData: WatermarkData = {
      type: watermarkType,
      content: text,
      opacity: opacity[0],
      position: position as WatermarkData["position"],
      rotation: rotation[0],
      fontSize: fontSize[0],
      color,
    };
    onApply(watermarkData);
    onClose();
  };

  const positionOptions = [
    { value: "center", label: "Center" },
    { value: "top-left", label: "Top Left" },
    { value: "top-right", label: "Top Right" },
    { value: "bottom-left", label: "Bottom Left" },
    { value: "bottom-right", label: "Bottom Right" },
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Watermark</DialogTitle>
          <DialogDescription>
            Add a text or image watermark to all pages of your document with
            customizable opacity and positioning.
          </DialogDescription>
        </DialogHeader>

        <Tabs
          value={watermarkType}
          onValueChange={(value) => setWatermarkType(value as "text" | "image")}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="text">Text Watermark</TabsTrigger>
            <TabsTrigger value="image">Image Watermark</TabsTrigger>
          </TabsList>

          <TabsContent value="text" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="watermark-text">Watermark Text</Label>
              <Input
                id="watermark-text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter watermark text"
              />
            </div>

            <div className="space-y-2">
              <Label>Font Size: {fontSize[0]}px</Label>
              <Slider
                value={fontSize}
                onValueChange={setFontSize}
                max={100}
                min={12}
                step={1}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="watermark-color">Text Color</Label>
              <div className="flex gap-2">
                <Input
                  id="watermark-color"
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
          </TabsContent>

          <TabsContent value="image" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="watermark-image">Upload Image</Label>
              <Input
                id="watermark-image"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    setText(e.target.files[0].name);
                  }
                }}
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Position</Label>
            <Select value={position} onValueChange={setPosition}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {positionOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Opacity: {opacity[0]}%</Label>
            <Slider
              value={opacity}
              onValueChange={setOpacity}
              max={100}
              min={5}
              step={5}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label>Rotation: {rotation[0]}°</Label>
            <Slider
              value={rotation}
              onValueChange={setRotation}
              max={360}
              min={-360}
              step={15}
              className="w-full"
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleApply}>Apply Watermark</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
