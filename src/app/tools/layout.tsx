"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Toaster } from "@/components/ui/sonner";
import type { HeaderAppView } from "@/types/app";

interface User {
  name: string;
  email: string;
}

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Load user from localStorage
    const savedUser = localStorage.getItem("pdf-editor-user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      // Set guest user if no user found
      setUser({ name: "Guest", email: "guest@example.com" });
    }

    // Load dark mode preference
    const savedDarkMode = localStorage.getItem("pdf-editor-darkmode");
    if (savedDarkMode === "true") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save preference
    localStorage.setItem("pdf-editor-darkmode", darkMode.toString());
  }, [darkMode]);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("pdf-editor-user");
    window.location.href = "/";
  };

  const handleNavigate = (view: HeaderAppView) => {
    // Navigate to the appropriate route
    const routeMap: Record<string, string> = {
      homepage: "/",
      dashboard: "/dashboard",
    };

    const route = routeMap[view as string];
    if (route) {
      window.location.href = route;
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header
        user={user}
        onLogout={handleLogout}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        onNavigate={handleNavigate}
        currentView="homepage"
      />
      {children}
      <Toaster />
    </div>
  );
}
