import { useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "../ui/dialog";

interface PageNumberData {
  position:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  format: "number" | "roman" | "letter" | "custom";
  prefix: string;
  suffix: string;
  startNumber: number;
  fontSize: number;
  showOnFirstPage: boolean;
}

interface PageNumbersDialogProps {
  open: boolean;
  onClose: () => void;
  onApply: (pageNumbers: PageNumberData) => void;
}

export function PageNumbersDialog({
  open,
  onClose,
  onApply,
}: PageNumbersDialogProps) {
  const [position, setPosition] =
    useState<PageNumberData["position"]>("bottom-center");
  const [format, setFormat] = useState<PageNumberData["format"]>("number");
  const [prefix, setPrefix] = useState("");
  const [suffix, setSuffix] = useState("");
  const [startNumber, setStartNumber] = useState(1);
  const [fontSize, setFontSize] = useState(12);
  const [showOnFirstPage, setShowOnFirstPage] = useState(true);

  const handleApply = () => {
    const pageNumberData: PageNumberData = {
      position,
      format,
      prefix,
      suffix,
      startNumber,
      fontSize,
      showOnFirstPage,
    };
    onApply(pageNumberData);
    onClose();
  };

  const positionOptions = [
    { value: "top-left", label: "Top Left" },
    { value: "top-center", label: "Top Center" },
    { value: "top-right", label: "Top Right" },
    { value: "bottom-left", label: "Bottom Left" },
    { value: "bottom-center", label: "Bottom Center" },
    { value: "bottom-right", label: "Bottom Right" },
  ];

  const formatOptions = [
    { value: "number", label: "1, 2, 3, ..." },
    { value: "roman", label: "I, II, III, ..." },
    { value: "letter", label: "A, B, C, ..." },
    { value: "custom", label: "Custom Format" },
  ];

  const getPreview = () => {
    let pageNum = "";
    switch (format) {
      case "number":
        pageNum = startNumber.toString();
        break;
      case "roman":
        pageNum = toRoman(startNumber);
        break;
      case "letter":
        pageNum = String.fromCharCode(64 + startNumber); // A=65
        break;
      case "custom":
        pageNum = "{page}";
        break;
    }
    return `${prefix}${pageNum}${suffix}`;
  };

  const toRoman = (num: number): string => {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const literals = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];
    let result = "";
    for (let i = 0; i < values.length; i++) {
      while (num >= values[i]) {
        result += literals[i];
        num -= values[i];
      }
    }
    return result;
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Page Numbers</DialogTitle>
          <DialogDescription>
            Add customizable page numbers to your document with various formats
            and positioning options.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Position</Label>
            <Select
              value={position}
              onValueChange={(value) =>
                setPosition(value as PageNumberData["position"])
              }
            >
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
            <Label>Number Format</Label>
            <Select
              value={format}
              onValueChange={(value) =>
                setFormat(value as PageNumberData["format"])
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {formatOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label htmlFor="prefix">Prefix</Label>
              <Input
                id="prefix"
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                placeholder="Page "
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="suffix">Suffix</Label>
              <Input
                id="suffix"
                value={suffix}
                onChange={(e) => setSuffix(e.target.value)}
                placeholder=" of {total}"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label htmlFor="start-number">Start Number</Label>
              <Input
                id="start-number"
                type="number"
                value={startNumber}
                onChange={(e) => setStartNumber(parseInt(e.target.value) || 1)}
                min={1}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="font-size">Font Size</Label>
              <Input
                id="font-size"
                type="number"
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value) || 12)}
                min={8}
                max={24}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="show-first-page"
              checked={showOnFirstPage}
              onCheckedChange={(checked) =>
                setShowOnFirstPage(checked as boolean)
              }
            />
            <Label htmlFor="show-first-page">Show on first page</Label>
          </div>

          <div className="p-3 bg-muted rounded-md">
            <Label className="text-sm">Preview:</Label>
            <div className="mt-1 text-lg" style={{ fontSize: `${fontSize}px` }}>
              {getPreview()}
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleApply}>Apply Page Numbers</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
