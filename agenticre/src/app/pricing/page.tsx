import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing — Colorado Seller AI Playbook",
  description:
    "Get lifetime access to the Colorado Seller AI Playbook for $99. Includes AI pricing prompts, listing description generators, paperwork guides, and a curated vendor network.",
  openGraph: {
    title: "Pricing — Colorado Seller AI Playbook | 90 Day Agent",
    description:
      "Get lifetime access to the Colorado Seller AI Playbook for $99. AI-powered tools to sell your Colorado home smarter.",
    url: "https://90dayagent.com/pricing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — Colorado Seller AI Playbook",
    description:
      "Get lifetime access for $99. AI pricing prompts, listing generators, and a curated Colorado vendor network.",
  },
  alternates: {
    canonical: "https://90dayagent.com/pricing",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
