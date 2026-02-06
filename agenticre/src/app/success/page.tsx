import type { Metadata } from "next";
import SuccessClient from "./SuccessClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Welcome — You're In",
  robots: { index: false, follow: false },
};

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        <div className="mx-auto max-w-2xl px-6 py-16">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {"You're in."}
          </h1>
          <SuccessClient sessionId={session_id ?? null} />
        </div>
      </main>
      <Footer />
    </>
  );
}
