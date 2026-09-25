import type { ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar";

export function DocsShell({ children }: { children: ReactNode }) {
  return (
    <div className="atmosphere flex min-h-screen flex-col md:flex-row">
      <Sidebar />
      <main className="min-w-0 flex-1 px-5 py-8 md:px-10 md:py-12 lg:px-14">
        {children}
      </main>
    </div>
  );
}
