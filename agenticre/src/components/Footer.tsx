import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <Link href="/" className="text-lg font-bold text-foreground">
            90 Day Agent
          </Link>
          <p className="mt-1 text-sm text-muted-foreground">
            AI-powered home selling tools for Colorado.
          </p>
        </div>
        <nav className="flex gap-8" aria-label="Footer navigation">
          <Link href="/pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Pricing
          </Link>
          <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Features
          </Link>
          <Link href="#faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            FAQ
          </Link>
        </nav>
      </div>
      <div className="mx-auto mt-8 max-w-5xl border-t border-border pt-8 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} 90 Day Agent. All rights reserved.
          Buyer-agent commission is negotiable and depends on the offer terms.
        </p>
      </div>
    </footer>
  );
}
