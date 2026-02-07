"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is the 90 Day Agent Seller AI Playbook?",
    answer:
      "The Seller AI Playbook is a $99 one-time purchase that gives you lifetime access to AI-powered pricing tools, listing description prompts, paperwork guides, and a curated Colorado vendor network to help you sell your home and keep more equity.",
  },
  {
    question: "Is this only for Colorado home sellers?",
    answer:
      "Yes, the playbook is specifically built for Colorado home sellers with Colorado-specific vendor lists, pricing data, and market insights.",
  },
  {
    question: "Do I need a real estate agent to use this?",
    answer:
      "No. The playbook is designed for sellers who want to take control of their home sale, whether going FSBO or working alongside an agent. It helps you make informed decisions with AI-powered tools.",
  },
  {
    question: "What do I get with lifetime access?",
    answer:
      "You get AI pricing prompts, listing description generators, paperwork explainers, a curated Colorado vendor list (photographers, title companies, etc.), and all future updates to the playbook.",
  },
  {
    question: "Is buyer-agent commission included in the $99?",
    answer:
      "No. Buyer-agent commission is negotiable and depends on the offer terms. The $99 is for the playbook tools only.",
  },
  {
    question: "Can I talk to someone before buying?",
    answer:
      "Absolutely. You can book a free call to ask questions and see if the playbook is right for your situation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Common Questions
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between text-left"
                aria-expanded={openIndex === index}
              >
                <span className="pr-4 text-lg font-semibold text-foreground">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 text-muted-foreground" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
