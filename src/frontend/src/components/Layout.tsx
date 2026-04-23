import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      {/* Decorative background dots/shapes */}
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-10 left-4 w-8 h-8 rounded-full bg-primary/10" />
        <div className="absolute top-24 right-6 w-6 h-6 rounded-full bg-secondary/15" />
        <div className="absolute top-48 left-8 w-4 h-4 rounded-full bg-accent/20" />
        <div className="absolute bottom-32 left-6 w-10 h-10 rounded-full bg-secondary/10" />
        <div className="absolute bottom-48 right-4 w-5 h-5 rounded-full bg-primary/10" />
        <div className="absolute top-1/2 right-2 w-7 h-7 rounded-full bg-accent/15" />
        {/* Star shapes */}
        <div className="absolute top-36 left-1/4 text-xl opacity-10 select-none">
          ⭐
        </div>
        <div className="absolute bottom-40 right-1/4 text-2xl opacity-10 select-none">
          ✨
        </div>
        <div className="absolute top-3/4 left-3/4 text-lg opacity-10 select-none">
          🌟
        </div>
      </div>

      {/* Main content wrapper - mobile max-w-md */}
      <main className="relative w-full max-w-md min-h-screen flex flex-col">
        {children}
      </main>
    </div>
  );
}
