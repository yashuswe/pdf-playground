import { useState, useRef } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { PenTool, Type, Calendar, Trash2, Check, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface SignatureData {
  id: string;
  type: "full-name" | "initials";
  text: string;
  style: string;
  createdAt: string;
}

interface SignatureToolbarProps {
  selectedTool: string | null;
  onToolSelect: (tool: string | null) => void;
  onSignatureCreate: (signature: SignatureData) => void;
  signatures: SignatureData[];
}

export function SignatureToolbar({
  selectedTool,
  onToolSelect,
  onSignatureCreate,
  signatures,
}: SignatureToolbarProps) {
  const [isCreating, setIsCreating] = useState(false);
  const [signatureType, setSignatureType] = useState<"full-name" | "initials">(
    "full-name",
  );
  const [fullName, setFullName] = useState("");
  const [signatureStyle, setSignatureStyle] = useState("cursive");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const signatureStyles = [
    { value: "cursive", label: "Cursive", font: "cursive" },
    { value: "serif", label: "Serif", font: "serif" },
    { value: "sans-serif", label: "Sans Serif", font: "sans-serif" },
    { value: "script", label: "Script", font: "fantasy" },
  ];

  const generateSignatureText = () => {
    if (signatureType === "full-name") {
      return fullName;
    } else {
      // Generate initials from full name
      return fullName
        .split(" ")
        .map((name) => name.charAt(0).toUpperCase())
        .join("");
    }
  };

  const handleCreateSignature = () => {
    if (!fullName.trim()) return;

    const signature: SignatureData = {
      id: `sig-${Date.now()}`,
      type: signatureType,
      text: generateSignatureText(),
      style: signatureStyle,
      createdAt: new Date().toISOString(),
    };

    onSignatureCreate(signature);
    setIsCreating(false);
    setFullName("");
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const renderSignaturePreview = () => {
    if (!fullName.trim()) return null;

    const text = generateSignatureText();
    const style = signatureStyles.find((s) => s.value === signatureStyle);

    return (
      <div className="border rounded-lg p-4 bg-background">
        <Label className="text-xs text-muted-foreground mb-2 block">
          Preview
        </Label>
        <div
          className="text-2xl text-center py-4"
          style={{
            fontFamily: style?.font,
            fontStyle: signatureStyle === "cursive" ? "italic" : "normal",
          }}
        >
          {text}
        </div>
      </div>
    );
  };

  return (
    <div className="border-b p-3 bg-muted/30">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <Dialog open={isCreating} onOpenChange={setIsCreating}>
            <DialogTrigger asChild>
              <Button
                variant={selectedTool === "signature" ? "default" : "ghost"}
                size="sm"
                className="h-8"
              >
                <PenTool className="h-4 w-4 mr-1" />
                Signature
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Create Digital Signature</DialogTitle>
                <DialogDescription>
                  Create a signature using your full name or initials
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Signature Type</Label>
                  <Select
                    value={signatureType}
                    onValueChange={(value: "full-name" | "initials") =>
                      setSignatureType(value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-name">Full Name</SelectItem>
                      <SelectItem value="initials">Initials Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Style</Label>
                  <Select
                    value={signatureStyle}
                    onValueChange={setSignatureStyle}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {signatureStyles.map((style) => (
                        <SelectItem key={style.value} value={style.value}>
                          <span style={{ fontFamily: style.font }}>
                            {style.label}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {renderSignaturePreview()}

                <div className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setIsCreating(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleCreateSignature}
                    disabled={!fullName.trim()}
                  >
                    Create Signature
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Button
            variant={selectedTool === "date" ? "default" : "ghost"}
            size="sm"
            onClick={() =>
              onToolSelect(selectedTool === "date" ? null : "date")
            }
            className="h-8"
          >
            <Calendar className="h-4 w-4 mr-1" />
            Date
          </Button>
        </div>

        <Separator orientation="vertical" className="h-6" />

        {/* Saved Signatures */}
        {signatures.length > 0 && (
          <div className="flex items-center gap-2">
            <Label className="text-xs text-muted-foreground">Saved:</Label>
            <div className="flex gap-1">
              {signatures.slice(0, 3).map((sig) => (
                <Button
                  key={sig.id}
                  variant="outline"
                  size="sm"
                  className="h-8 px-2"
                  onClick={() => onToolSelect(`signature-${sig.id}`)}
                >
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: signatureStyles.find(
                        (s) => s.value === sig.style,
                      )?.font,
                      fontStyle: sig.style === "cursive" ? "italic" : "normal",
                    }}
                  >
                    {sig.text}
                  </span>
                </Button>
              ))}
            </div>
            {signatures.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{signatures.length - 3} more
              </Badge>
            )}
          </div>
        )}

        <Separator orientation="vertical" className="h-6" />

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {selectedTool === "date" && (
            <span>Current date: {getCurrentDate()}</span>
          )}
          {selectedTool === "signature" && <span>Click to add signature</span>}
          {selectedTool?.startsWith("signature-") && (
            <span>Click to place signature</span>
          )}
        </div>
      </div>
    </div>
  );
}
