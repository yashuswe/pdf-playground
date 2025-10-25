import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LoginForm } from "./auth/login-form";
import { SignupForm } from "./auth/signup-form";
import { Dashboard } from "./dashboard";
import { Homepage } from "./homepage";
import { PDFViewer } from "./pdf-viewer/pdf-viewer";
import { FileConverter } from "./tools/file-converter";
import { PDFCompressor } from "./tools/pdf-compressor";
import { PDFSplit } from "./tools/pdf-split";
import { PDFMerge } from "./tools/pdf-merge";
import { PDFSignature } from "./tools/pdf-signature";
import { PDFWatermark } from "./tools/pdf-watermark";
import { Header } from "./layout/header";
import { PDFFile } from "./dashboard/recent-files";
import { Toaster } from "./ui/sonner";
import { toast } from "sonner";
import { configurePDFWorker } from "../lib/pdf-worker";
import type { AppView, HeaderAppView } from "../types/app";
import { listFiles } from "../lib/api/file-management";

interface User {
  name: string;
  email: string;
}

type AuthMode = "login" | "signup";

export default function App() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>({
    name: "Guest",
    email: "guest@example.com",
  });
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const [currentView, setCurrentView] = useState<AppView>("homepage");
  const [selectedFile, setSelectedFile] = useState<PDFFile | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [files, setFiles] = useState<PDFFile[]>([]);
  const [isLoadingFiles, setIsLoadingFiles] = useState(false);

  // Load files from backend
  const loadFilesFromBackend = async () => {
    setIsLoadingFiles(true);
    try {
      const fileList = await listFiles();
      // Sort by creation date (most recent first)
      const sortedFiles = fileList.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
      const mappedFiles: PDFFile[] = sortedFiles.map((file) => ({
        id: file.file_id,
        name: file.filename,
        size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
        lastModified: new Date(file.created_at).toISOString().split("T")[0],
        annotations: 0, // Backend doesn't track annotations yet
      }));
      setFiles(mappedFiles);
    } catch (error: any) {
      console.error("Failed to load files from backend:", error);
      // Silently fail to not disrupt the user experience
      // The continue working section will just show empty
    } finally {
      setIsLoadingFiles(false);
    }
  };

  useEffect(() => {
    // Configure PDF.js worker first
    configurePDFWorker();

    // If a user was previously saved, restore it; otherwise keep Guest
    const savedUser = localStorage.getItem("pdf-editor-user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setCurrentView("homepage");
    }

    // Load files from backend
    loadFilesFromBackend();
  }, []);

  useEffect(() => {
    // Apply dark mode
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleLogin = (email: string, password: string) => {
    // Mock authentication
    const mockUser = { name: "John Doe", email };
    setUser(mockUser);
    localStorage.setItem("pdf-editor-user", JSON.stringify(mockUser));
    setCurrentView("homepage");
    toast.success("Welcome back!");
  };

  const handleSignup = (email: string, password: string, name: string) => {
    // Mock registration
    const newUser = { name, email };
    setUser(newUser);
    localStorage.setItem("pdf-editor-user", JSON.stringify(newUser));
    setCurrentView("homepage");
    toast.success("Account created successfully!");
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("pdf-editor-user");
    setCurrentView("auth");
    setSelectedFile(null);
    toast.success("Logged out successfully");
  };

  const handleFileUpload = async (uploadedFiles: File[]) => {
    // Files are uploaded to backend by the upload component
    // We just need to refresh the file list after upload
    // Add a small delay to ensure backend has processed the upload
    setTimeout(() => {
      loadFilesFromBackend();
    }, 500);
  };

  const handleOpenFile = (file: PDFFile) => {
    setSelectedFile(file);
    setCurrentView("pdf-viewer");
  };

  const handleCloseViewer = () => {
    setSelectedFile(null);
    setCurrentView("homepage");
  };

  const handleDeleteFile = (fileId: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== fileId));
    toast.success("File deleted successfully");
  };

  const handleNavigateToView = (view: AppView) => {
    setCurrentView(view);
  };

  const handleNavigateToTool = (tool: string) => {
    const toolRoutes: Record<string, string> = {
      convert: "/tools/convert",
      compress: "/tools/compress",
      split: "/tools/split",
      merge: "/tools/merge",
      signature: "/tools/signature",
      watermark: "/tools/watermark",
    };

    const route = toolRoutes[tool];
    if (route) {
      router.push(route);
    }
  };

  if (currentView === "auth") {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5 p-4">
          <div className="w-full max-w-md">
            {authMode === "login" ? (
              <LoginForm
                onLogin={handleLogin}
                onSwitchToSignup={() => setAuthMode("signup")}
              />
            ) : (
              <SignupForm
                onSignup={handleSignup}
                onSwitchToLogin={() => setAuthMode("login")}
              />
            )}
          </div>
        </div>
        <Toaster />
      </>
    );
  }

  if (currentView === "pdf-viewer" && selectedFile) {
    return (
      <>
        <PDFViewer
          file={selectedFile}
          onClose={handleCloseViewer}
          onSwitchToEditor={undefined}
        />
        <Toaster />
      </>
    );
  }

  if (currentView === "homepage") {
    return (
      <>
        <div className="min-h-screen">
          <Header
            user={user!}
            onLogout={handleLogout}
            darkMode={darkMode}
            onToggleDarkMode={() => setDarkMode(!darkMode)}
            onNavigate={handleNavigateToView}
            currentView={currentView as HeaderAppView}
          />
          <Homepage
            user={user!}
            files={files}
            onFileUpload={handleFileUpload}
            onOpenFile={handleOpenFile}
            onOpenEditor={handleOpenFile}
          />
        </div>
        <Toaster />
      </>
    );
  }

  if (currentView === "convert") {
    return (
      <>
        <div className="min-h-screen">
          <Header
            user={user!}
            onLogout={handleLogout}
            darkMode={darkMode}
            onToggleDarkMode={() => setDarkMode(!darkMode)}
            onNavigate={handleNavigateToView}
            currentView={currentView as HeaderAppView}
          />
          <FileConverter />
        </div>
        <Toaster />
      </>
    );
  }

  if (currentView === "compress") {
    return (
      <>
        <div className="min-h-screen">
          <Header
            user={user!}
            onLogout={handleLogout}
            darkMode={darkMode}
            onToggleDarkMode={() => setDarkMode(!darkMode)}
            onNavigate={handleNavigateToView}
            currentView={currentView as HeaderAppView}
          />
          <PDFCompressor />
        </div>
        <Toaster />
      </>
    );
  }

  if (currentView === "split") {
    return (
      <>
        <div className="min-h-screen">
          <Header
            user={user!}
            onLogout={handleLogout}
            darkMode={darkMode}
            onToggleDarkMode={() => setDarkMode(!darkMode)}
            onNavigate={handleNavigateToView}
            currentView={currentView as HeaderAppView}
          />
          <PDFSplit />
        </div>
        <Toaster />
      </>
    );
  }

  if (currentView === "merge") {
    return (
      <>
        <div className="min-h-screen">
          <Header
            user={user!}
            onLogout={handleLogout}
            darkMode={darkMode}
            onToggleDarkMode={() => setDarkMode(!darkMode)}
            onNavigate={handleNavigateToView}
            currentView={currentView as HeaderAppView}
          />
          <PDFMerge />
        </div>
        <Toaster />
      </>
    );
  }

  if (currentView === "signature") {
    return (
      <>
        <div className="min-h-screen">
          <Header
            user={user!}
            onLogout={handleLogout}
            darkMode={darkMode}
            onToggleDarkMode={() => setDarkMode(!darkMode)}
            onNavigate={handleNavigateToView}
            currentView={currentView as HeaderAppView}
          />
          <PDFSignature />
        </div>
        <Toaster />
      </>
    );
  }

  if (currentView === "watermark") {
    return (
      <>
        <div className="min-h-screen">
          <Header
            user={user!}
            onLogout={handleLogout}
            darkMode={darkMode}
            onToggleDarkMode={() => setDarkMode(!darkMode)}
            onNavigate={handleNavigateToView}
            currentView={currentView as HeaderAppView}
          />
          <PDFWatermark />
        </div>
        <Toaster />
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen">
        <Header
          user={user!}
          onLogout={handleLogout}
          darkMode={darkMode}
          onToggleDarkMode={() => setDarkMode(!darkMode)}
          onNavigate={handleNavigateToView}
          currentView={currentView}
        />
        <Dashboard
          user={user!}
          files={files}
          onFileUpload={handleFileUpload}
          onOpenFile={handleOpenFile}
          onOpenEditor={handleOpenFile}
          onDeleteFile={handleDeleteFile}
        />
      </div>
      <Toaster />
    </>
  );
}
