import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vault — Colorado Seller AI Playbook",
  description:
    "Access your AI-powered pricing prompts, listing description generators, paperwork guides, and curated Colorado vendor network.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function VaultPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Colorado Seller AI Vault
          </h1>
          <p className="mt-3 text-muted-foreground">
            {"You've got lifetime access. Copy/paste the prompts, use the pricing checklist, and tap the vendor list when you need it."}
          </p>

          <div className="mt-10 grid gap-6">
            <section className="rounded-2xl border border-border bg-background p-8">
              <h2 className="text-xl font-semibold text-foreground">
                A) Vendor List (Colorado)
              </h2>
              <ul className="mt-3 list-disc pl-5 text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">Photography:</span>{" "}
                  (add preferred vendor + booking link)
                </li>
                <li>
                  <span className="font-semibold text-foreground">Title:</span>{" "}
                  Grayson Houston — Old Glory
                </li>
                <li>
                  <span className="font-semibold text-foreground">Title:</span>{" "}
                  Principal Title
                </li>
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">
                {"If you want, I'll turn this into a one-click \"book now\" directory."}
              </p>
            </section>

            <section className="rounded-2xl border border-border bg-background p-8">
              <h2 className="text-xl font-semibold text-foreground">
                B) AI Pricing Tools (Prompt Pack)
              </h2>
              <p className="mt-3 text-muted-foreground">
                Coming next: a Colorado-first pricing prompt pack + a simple
                checklist of what to collect before you price.
              </p>
            </section>

            <section className="rounded-2xl border border-border bg-background p-8">
              <h2 className="text-xl font-semibold text-foreground">
                C) AI Listing Descriptions
              </h2>
              <p className="mt-3 text-muted-foreground">
                {"Coming next: prompts for 5 listing styles + \"features → benefits\" converter + sample outputs."}
              </p>
            </section>

            <section className="rounded-2xl border border-border bg-background p-8">
              <h2 className="text-xl font-semibold text-foreground">
                D) Paperwork Prompts (Not Legal Advice)
              </h2>
              <p className="mt-3 text-muted-foreground">
                Coming next: prompts that explain form sections in plain English
                + questions to ask your title company/agent/attorney.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Buyer-agent commission is negotiable and depends on the offer
                terms.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
