import { Sidebar } from "./Sidebar";
import {ReactNode} from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};