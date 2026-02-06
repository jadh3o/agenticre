import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-background px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
          Built for Colorado Home Sellers
        </p>
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl md:leading-tight">
          Sell Your Colorado Home in 90 Days with AI-Powered Tools
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          The Seller AI Playbook gives you pricing prompts, listing descriptions,
          paperwork guides, and a curated vendor network — everything you need to
          keep more equity when you sell.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/pricing"
            className="inline-flex items-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get Lifetime Access — $99
          </Link>
          <Link
            href="https://api.leadconnectorhq.com/widget/bookings/ai-demo-jonathandickey"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg border border-border px-8 py-4 text-base font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Book a Free Call
          </Link>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          One-time payment. No subscriptions. Lifetime updates included.
        </p>
      </div>
    </section>
  );
}
