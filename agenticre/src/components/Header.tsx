"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
          90 Day Agent
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            How It Works
          </Link>
          <Link href="#faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            FAQ
          </Link>
          <Link
            href="/pricing"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get Access
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-border px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link href="#features" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-muted-foreground">
              Features
            </Link>
            <Link href="#how-it-works" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-muted-foreground">
              How It Works
            </Link>
            <Link href="#faq" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-muted-foreground">
              FAQ
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Get Access
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
