export default function VaultPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Colorado Seller AI Vault</h1>
        <p className="mt-3 text-slate-600">
          You’ve got lifetime access. Copy/paste the prompts, use the pricing checklist, and tap the vendor list when you need it.
        </p>

        <div className="mt-10 grid gap-6">
          <section className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold">A) Vendor list (Colorado)</h2>
            <ul className="mt-3 list-disc pl-5 text-slate-700">
              <li><span className="font-semibold">Photography:</span> (add preferred vendor + booking link)</li>
              <li><span className="font-semibold">Title:</span> Grayson Houston — Old Glory</li>
              <li><span className="font-semibold">Title:</span> Principal Title</li>
            </ul>
            <p className="mt-3 text-sm text-slate-600">If you want, I’ll turn this into a one-click “book now” directory.</p>
          </section>

          <section className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold">B) AI pricing tools (prompt pack)</h2>
            <p className="mt-3 text-slate-700">Coming next: a Colorado-first pricing prompt pack + a simple checklist of what to collect before you price.</p>
          </section>

          <section className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold">C) AI listing descriptions</h2>
            <p className="mt-3 text-slate-700">Coming next: prompts for 5 listing styles + “features → benefits” converter + sample outputs.</p>
          </section>

          <section className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold">D) Paperwork prompts (not legal advice)</h2>
            <p className="mt-3 text-slate-700">Coming next: prompts that explain form sections in plain English + questions to ask your title company/agent/attorney.</p>
            <p className="mt-3 text-sm text-slate-600">Buyer-agent commission is negotiable and depends on the offer terms.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
