'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SuccessClient({ sessionId }: { sessionId: string | null }) {
  const router = useRouter()
  const [status, setStatus] = useState<'loading' | 'ok' | 'error'>('loading')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    ;(async () => {
      if (!sessionId) {
        setStatus('error')
        setError('Missing session id')
        return
      }
      const res = await fetch('/api/verify', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setStatus('error')
        setError(data?.error ?? 'Verification failed')
        return
      }
      setStatus('ok')
      router.replace('/vault')
    })()
  }, [sessionId, router])

  return (
    <>
      {status === 'loading' ? <p className="mt-3 text-muted-foreground">Confirming payment...</p> : null}
      {status === 'error' ? <p className="mt-3 text-red-600">{error}</p> : null}
      <p className="mt-6 text-sm text-muted-foreground">
        {"If you're not redirected, open the vault: "}<a className="underline font-semibold text-foreground" href="/vault">/vault</a>
      </p>
    </>
  )
}
