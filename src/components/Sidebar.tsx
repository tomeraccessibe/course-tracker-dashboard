import { User, BookOpen, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
  return (
    <div className="w-70 h-screen bg-white border-r border-gray-200 p-4">
      <div className="space-y-4">
        <div className="flex items-center space-x-2 px-2 py-3">
          <BookOpen className="w-6 h-6 text-blue-600" />
          <span className="text-lg font-semibold">Accessibility Awareness Training</span>
        </div>
        
        <nav className="space-y-1">
          <a
            href="/"
            className={cn(
              "flex items-center space-x-2 px-2 py-2 rounded-lg",
              "bg-blue-50 text-blue-700 font-medium"
            )}
          >
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </a>
          
          <a
            href="https://juno.com/profile"
            target='_blank'
            className={cn(
              "flex items-center space-x-2 px-2 py-2 rounded-lg",
              "text-gray-700 hover:bg-gray-100 transition-colors"
            )}
          >
            <User className="w-5 h-5" />
            <span>Juno Profile</span>
          </a>
        </nav>
      </div>
    </div>
  );
};