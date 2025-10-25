"use client";

import { PDFWatermark } from "@/components/tools/pdf-watermark";

export default function WatermarkPage() {
  return (
    <div className="min-h-screen">
      <PDFWatermark />
    </div>
  );
}
