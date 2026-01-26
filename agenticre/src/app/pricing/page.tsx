'use client'

import { useState } from 'react'

async function startCheckout() {
  const res = await fetch('/api/checkout', { method: 'POST' })
  const data = (await res.json()) as { url?: string; error?: string }
  if (data.url) window.location.href = data.url
  else throw new Error(data.error ?? 'Checkout failed')
}

export default function PricingPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Colorado Seller AI Playbook</h1>
        <p className="mt-3 text-slate-600">
          Lifetime access. Built for Colorado home sellers who want to price right, write a great listing, and keep more equity.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 p-6">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="text-lg font-medium">$99 one-time</div>
              <div className="mt-1 text-sm text-slate-600">Includes vendor list + pricing prompts + listing prompts + paperwork prompts.</div>
            </div>
            <button
              disabled={loading}
              onClick={async () => {
                setError(null)
                setLoading(true)
                try {
                  await startCheckout()
                } catch (e) {
                  setError(e instanceof Error ? e.message : String(e))
                  setLoading(false)
                }
              }}
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-50"
            >
              {loading ? 'Redirecting…' : 'Get lifetime access'}
            </button>
          </div>

          <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
            Buyer-agent commission is negotiable and depends on the offer terms.
          </div>

          {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}
        </div>

        <div className="mt-10 text-sm text-slate-600">
          Prefer to talk first?{' '}
          <a
            className="font-semibold text-slate-900 underline"
            href="https://api.leadconnectorhq.com/widget/bookings/ai-demo-jonathandickey"
            target="_blank"
            rel="noreferrer"
          >
            Book time here.
          </a>
        </div>
      </div>
    </main>
  )
}
