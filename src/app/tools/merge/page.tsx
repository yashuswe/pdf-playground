"use client";

import { PDFMerge } from "@/components/tools/pdf-merge";

export default function MergePage() {
  return (
    <div className="min-h-screen">
      <PDFMerge />
    </div>
  );
}
