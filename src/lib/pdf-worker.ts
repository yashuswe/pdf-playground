import * as pdfjsLib from "pdfjs-dist";

// Configure PDF.js worker once globally
let isConfigured = false;

export function configurePDFWorker() {
  if (typeof window !== "undefined" && !isConfigured) {
    try {
      // @ts-ignore - GlobalWorkerOptions exists on the default export
      const { GlobalWorkerOptions } = pdfjsLib as any;
      if (GlobalWorkerOptions) {
        // Use the local worker file served from public folder
        GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

        isConfigured = true;
        console.log("PDF.js worker configured with local worker");
      }
    } catch (error) {
      console.error("Failed to configure PDF.js worker:", error);

      // Complete fallback - disable worker entirely
      try {
        const { GlobalWorkerOptions } = pdfjsLib as any;
        if (GlobalWorkerOptions) {
          GlobalWorkerOptions.workerSrc = false;
          console.log("PDF.js worker disabled, using synchronous rendering");
        }
      } catch (fallbackError) {
        console.error("Complete fallback failed:", fallbackError);
      }
    }
  }
}

export { pdfjsLib };
