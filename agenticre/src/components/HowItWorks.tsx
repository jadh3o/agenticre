import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Get Lifetime Access",
    description:
      "Pay once ($99) and unlock the full Seller AI Playbook instantly. No subscriptions, no hidden fees.",
  },
  {
    number: "02",
    title: "Use the AI Prompts",
    description:
      "Copy and paste prompts into ChatGPT, Claude, or your preferred AI. Get pricing analysis, listing copy, and paperwork guidance in minutes.",
  },
  {
    number: "03",
    title: "Sell with Confidence",
    description:
      "Price your home right, write a compelling listing, hire trusted vendors, and close the deal — all while keeping more of your equity.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-secondary px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Simple Process
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How It Works
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center md:text-left">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-xl font-bold text-accent-foreground">
                {step.number}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get Lifetime Access — $99
          </Link>
        </div>
      </div>
    </section>
  );
}
