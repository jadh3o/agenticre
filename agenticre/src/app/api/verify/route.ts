import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { signAccessToken } from '@/lib/auth'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  const { session_id } = (await req.json().catch(() => ({}))) as { session_id?: string }
  if (!session_id) return NextResponse.json({ error: 'Missing session_id' }, { status: 400 })

  const session = await stripe.checkout.sessions.retrieve(session_id)
  if (session.payment_status !== 'paid') {
    return NextResponse.json({ error: 'Not paid' }, { status: 402 })
  }

  const email = session.customer_details?.email ?? null
  const token = signAccessToken({ paid: true, email, session_id })

  const res = NextResponse.json({ ok: true })
  res.cookies.set({
    name: 'agenticre_access',
    value: token,
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 365 * 10,
  })
  return res
}
