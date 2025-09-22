import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  FileText,
  Settings,
  LogOut,
  User,
  Moon,
  Sun,
  Home,
  Folder,
} from "lucide-react";

type AppView = "auth" | "homepage" | "dashboard" | "pdf-viewer" | "pdf-editor";

interface HeaderProps {
  user: { name: string; email: string };
  onLogout: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onNavigate?: (view: AppView) => void;
  currentView?: AppView;
}

export function Header({
  user,
  onLogout,
  darkMode,
  onToggleDarkMode,
  onNavigate,
  currentView,
}: HeaderProps) {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-semibold">PDF Editor</h1>
            </div>

            {onNavigate && (
              <nav className="flex items-center gap-2">
                <Button
                  variant={currentView === "homepage" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onNavigate("homepage")}
                >
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Button>
                <Button
                  variant={currentView === "dashboard" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onNavigate("dashboard")}
                >
                  <Folder className="h-4 w-4 mr-2" />
                  Files
                </Button>
              </nav>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={onToggleDarkMode}>
              {darkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <div className="flex flex-col space-y-1 p-2">
                  <p className="text-sm font-medium leading-none">
                    {user.name}
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user.email}
                  </p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
