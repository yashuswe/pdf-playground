declare module "@pdftron/webviewer" {
  interface WebViewerOptions {
    path: string;
    initialDoc?: string;
    enableMeasurement?: boolean;
    enableRedaction?: boolean;
    enableFilePicker?: boolean;
    fullAPI?: boolean;
    licenseKey?: string;
  }

  interface WebViewerInstance {
    UI: {
      dispose(): void;
    };
    Core: {
      documentViewer: any;
      annotationManager: any;
      PDFNet: any;
    };
  }

  function WebViewer(
    options: WebViewerOptions,
    element: HTMLElement,
  ): Promise<WebViewerInstance>;

  export default WebViewer;
}
