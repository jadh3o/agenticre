import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://90dayagent.com";
const SITE_NAME = "90 Day Agent";
const SITE_DESCRIPTION =
  "Sell your Colorado home in 90 days with AI-powered pricing, listing prompts, and a curated vendor network. The $99 Seller AI Playbook gives you lifetime access to everything you need to price right, write a great listing, and keep more equity.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "90 Day Agent — Sell Your Colorado Home with AI-Powered Tools",
    template: "%s | 90 Day Agent",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "sell home Colorado",
    "Colorado home seller",
    "AI real estate tools",
    "FSBO Colorado",
    "home pricing AI",
    "listing description AI",
    "sell my house fast Colorado",
    "Colorado real estate",
    "seller AI playbook",
    "90 day agent",
    "home selling tools",
    "Colorado FSBO",
    "real estate AI prompts",
    "home equity",
    "sell house without agent Colorado",
  ],
  authors: [{ name: "90 Day Agent", url: SITE_URL }],
  creator: "90 Day Agent",
  publisher: "90 Day Agent",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "90 Day Agent — Sell Your Colorado Home with AI-Powered Tools",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "90 Day Agent — AI-Powered Home Selling Tools for Colorado",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "90 Day Agent — Sell Your Colorado Home with AI-Powered Tools",
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`],
    creator: "@90dayagent",
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "Real Estate",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "90 Day Agent",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: SITE_DESCRIPTION,
    areaServed: {
      "@type": "State",
      name: "Colorado",
      sameAs: "https://en.wikipedia.org/wiki/Colorado",
    },
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Colorado Seller AI Playbook",
    description:
      "Lifetime access to AI-powered pricing prompts, listing description generators, paperwork guides, and a curated Colorado vendor network for home sellers.",
    brand: {
      "@type": "Brand",
      name: "90 Day Agent",
    },
    offers: {
      "@type": "Offer",
      price: "99.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/pricing`,
      priceValidUntil: "2027-12-31",
      seller: {
        "@type": "Organization",
        name: "90 Day Agent",
      },
    },
    category: "Real Estate Tools",
    audience: {
      "@type": "Audience",
      audienceType: "Home Sellers",
      geographicArea: {
        "@type": "State",
        name: "Colorado",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the 90 Day Agent Seller AI Playbook?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Seller AI Playbook is a $99 one-time purchase that gives you lifetime access to AI-powered pricing tools, listing description prompts, paperwork guides, and a curated Colorado vendor network to help you sell your home and keep more equity.",
        },
      },
      {
        "@type": "Question",
        name: "Is this only for Colorado home sellers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the playbook is specifically built for Colorado home sellers with Colorado-specific vendor lists, pricing data, and market insights.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a real estate agent to use this?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The playbook is designed for sellers who want to take control of their home sale, whether going FSBO or working alongside an agent. It helps you make informed decisions with AI-powered tools.",
        },
      },
      {
        "@type": "Question",
        name: "What do I get with lifetime access?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You get AI pricing prompts, listing description generators, paperwork explainers, a curated Colorado vendor list (photographers, title companies, etc.), and all future updates to the playbook.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
