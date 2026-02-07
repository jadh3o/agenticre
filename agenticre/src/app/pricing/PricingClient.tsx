"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

async function startCheckout() {
  const res = await fetch("/api/checkout", { method: "POST" });
  const data = (await res.json()) as { url?: string; error?: string };
  if (data.url) window.location.href = data.url;
  else throw new Error(data.error ?? "Checkout failed");
}

export default function PricingClient() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Simple Pricing
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
            Colorado Seller AI Playbook
          </h1>
          <p className="mt-3 text-muted-foreground">
            Lifetime access. Built for Colorado home sellers who want to price
            right, write a great listing, and keep more equity.
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-background p-8">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-baseline">
              <div>
                <div className="text-3xl font-bold text-foreground">
                  $99{" "}
                  <span className="text-base font-normal text-muted-foreground">
                    one-time
                  </span>
                </div>
                <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                    AI pricing prompt pack
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                    Listing description generator
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                    Paperwork prompts
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                    Curated Colorado vendor list
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                    Lifetime updates included
                  </li>
                </ul>
              </div>
              <button
                disabled={loading}
                onClick={async () => {
                  setError(null);
                  setLoading(true);
                  try {
                    await startCheckout();
                  } catch (e) {
                    setError(e instanceof Error ? e.message : String(e));
                    setLoading(false);
                  }
                }}
                className="w-full rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50 sm:w-auto"
              >
                {loading ? "Redirecting..." : "Get lifetime access"}
              </button>
            </div>

            <div className="mt-6 rounded-xl bg-muted p-4 text-sm text-muted-foreground">
              Buyer-agent commission is negotiable and depends on the offer
              terms.
            </div>

            {error ? (
              <p className="mt-4 text-sm text-red-600">{error}</p>
            ) : null}
          </div>

          <div className="mt-10 text-sm text-muted-foreground">
            Prefer to talk first?{" "}
            <a
              className="font-semibold text-foreground underline"
              href="https://api.leadconnectorhq.com/widget/bookings/ai-demo-jonathandickey"
              target="_blank"
              rel="noreferrer"
            >
              Book time here.
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
