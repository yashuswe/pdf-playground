import * as pdfjsLib from "pdfjs-dist";

// Configure PDF.js worker once globally
let isConfigured = false;

export function configurePDFWorker() {
  if (typeof window !== "undefined" && !isConfigured) {
    try {
      const { GlobalWorkerOptions } = pdfjsLib;
      if (GlobalWorkerOptions) {
        // Use CDN worker that matches the installed pdfjs-dist version
        // This ensures the API and Worker versions are in sync
        GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs`;

        isConfigured = true;
        console.warn("PDF.js worker configured with CDN worker v4.10.38");
      }
    } catch (error) {
      console.error("Failed to configure PDF.js worker:", error);

      // Complete fallback - worker will be disabled automatically
      console.warn("PDF.js worker could not be configured, will use fallback");
    }
  }
}

export { pdfjsLib };
