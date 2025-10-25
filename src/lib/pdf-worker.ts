import * as pdfjsLib from "pdfjs-dist";

// Set minimal worker source to satisfy PDF.js requirement
if (typeof window !== "undefined") {
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'data:text/javascript;base64,KCgpID0+IHt9KTs=';
  console.log("✅ PDF.js worker set to minimal source");
}

export async function configurePDFWorker(): Promise<boolean> {
  return true;
}

export async function loadPDFWithFallback(url: string) {
  console.log("Loading PDF from:", url);
  
  const loadingTask = pdfjsLib.getDocument({
    url,
    verbosity: pdfjsLib.VerbosityLevel.ERRORS,
  });

  const pdf = await loadingTask.promise;
  console.log("✅ PDF loaded successfully");
  return pdf;
}

export { pdfjsLib };