import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-primary px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
          Ready to Sell Your Colorado Home?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-primary-foreground/80">
          Join Colorado sellers who are using AI to price smarter, list better,
          and keep more of their hard-earned equity.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/pricing"
            className="inline-flex items-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Get Lifetime Access — $99
          </Link>
          <Link
            href="https://api.leadconnectorhq.com/widget/bookings/ai-demo-jonathandickey"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg border border-primary-foreground/30 px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Book a Free Call
          </Link>
        </div>
      </div>
    </section>
  );
}
