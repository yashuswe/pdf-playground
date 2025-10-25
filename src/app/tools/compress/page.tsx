"use client";

import { PDFCompressor } from "@/components/tools/pdf-compressor";

export default function CompressPage() {
  return (
    <div className="min-h-screen">
      <PDFCompressor />
    </div>
  );
}
