import { useState, useEffect } from "react";
import { LoginForm } from "./auth/login-form";
import { SignupForm } from "./auth/signup-form";
import { Dashboard } from "./dashboard";
import { Homepage } from "./homepage";
import { PDFViewer } from "./pdf-viewer/pdf-viewer";
import { PDFTronViewer } from "./pdf-viewer/pdftron-viewer";
import { PDFEditor } from "./pdf-editor/pdf-editor";
import { FileConverter } from "./tools/file-converter";
import { PDFCompressor } from "./tools/pdf-compressor";
import { Header } from "./layout/header";
import { PDFFile } from "./dashboard/recent-files";
import { Toaster } from "./ui/sonner";
import { toast } from "sonner";
import { configurePDFWorker } from "../lib/pdf-worker";

interface User {
  name: string;
  email: string;
}

type AuthMode = "login" | "signup";
type AppView =
  | "auth"
  | "homepage"
  | "dashboard"
  | "pdf-viewer"
  | "pdf-editor"
  | "convert"
  | "compress";
type HeaderAppView = "auth" | "homepage" | "dashboard" | "pdf-viewer";

export default function App() {
  const [user, setUser] = useState<User | null>({
    name: "Guest",
    email: "guest@example.com",
  });
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const [currentView, setCurrentView] = useState<AppView>("homepage");
  const [selectedFile, setSelectedFile] = useState<PDFFile | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [useFallbackViewer, setUseFallbackViewer] = useState(false);
  const [files, setFiles] = useState<PDFFile[]>([
    {
      id: "sample",
      name: "Sample_PDF_Document.pdf",
      size: "2.4 MB",
      lastModified: "2024-01-15",
      annotations: 5,
    },
    {
      id: "2",
      name: "Financial_Report_Q4.pdf",
      size: "1.8 MB",
      lastModified: "2024-01-14",
      annotations: 2,
    },
    {
      id: "3",
      name: "Meeting_Minutes_Jan.pdf",
      size: "892 KB",
      lastModified: "2024-01-13",
      annotations: 0,
    },
    {
      id: "4",
      name: "User_Manual_v2.pdf",
      size: "5.2 MB",
      lastModified: "2024-01-12",
      annotations: 8,
    },
  ]);

  useEffect(() => {
    // Configure PDF.js worker first
    configurePDFWorker();

    // If a user was previously saved, restore it; otherwise keep Guest
    const savedUser = localStorage.getItem("pdf-editor-user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setCurrentView("homepage");
    }
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

  const handleFileUpload = (uploadedFiles: File[]) => {
    const newFiles: PDFFile[] = uploadedFiles.map((file, index) => ({
      id: `${Date.now()}-${index}`,
      name: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
      lastModified: new Date().toISOString().split("T")[0],
      annotations: 0,
    }));

    setFiles((prev) => [...newFiles, ...prev]);
    toast.success(`${uploadedFiles.length} file(s) uploaded successfully`);
  };

  const handleOpenFile = (file: PDFFile) => {
    setSelectedFile(file);
    setUseFallbackViewer(false); // Reset fallback state for new file
    setCurrentView("pdf-viewer");
  };

  const handleOpenEditor = (file: PDFFile) => {
    setSelectedFile(file);
    setCurrentView("pdf-editor");
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
    if (tool === "convert") {
      setCurrentView("convert");
    } else if (tool === "compress") {
      setCurrentView("compress");
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
        {!useFallbackViewer ? (
          <PDFTronViewer
            file={selectedFile}
            onClose={handleCloseViewer}
            onSwitchToEditor={() => setCurrentView("pdf-editor")}
            onFallback={() => setUseFallbackViewer(true)}
          />
        ) : (
          <PDFViewer
            file={selectedFile}
            onClose={handleCloseViewer}
            onSwitchToEditor={() => setCurrentView("pdf-editor")}
          />
        )}
        <Toaster />
      </>
    );
  }

  if (currentView === "pdf-editor" && selectedFile) {
    return (
      <>
        <PDFEditor
          file={selectedFile}
          onClose={handleCloseViewer}
          onSwitchToViewer={() => setCurrentView("pdf-viewer")}
        />
        <Toaster />
      </>
    );
  }

  if (currentView === "homepage") {
    return (
      <>
        <div className="min-h-screen bg-background">
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
            onOpenEditor={handleOpenEditor}
            onNavigateToTool={handleNavigateToTool}
          />
        </div>
        <Toaster />
      </>
    );
  }

  if (currentView === "convert") {
    return (
      <>
        <div className="min-h-screen bg-background">
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
        <div className="min-h-screen bg-background">
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

  return (
    <>
      <div className="min-h-screen bg-background">
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
          onOpenEditor={handleOpenEditor}
          onDeleteFile={handleDeleteFile}
        />
      </div>
      <Toaster />
    </>
  );
}
