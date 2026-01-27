import { NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'

export const runtime = 'nodejs'

export async function POST() {
  const appUrl = process.env.APP_URL
  const priceUsd = Number(process.env.PLAYBOOK_PRICE_USD ?? '99')
  const productName = process.env.PLAYBOOK_PRODUCT_NAME ?? 'Seller AI Playbook (Lifetime)'

  if (!appUrl) {
    return NextResponse.json({ error: 'Missing APP_URL' }, { status: 500 })
  }

  let stripe
  try {
    stripe = getStripe()
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : String(e) },
      { status: 500 }
    )
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: { name: productName },
          unit_amount: Math.round(priceUsd * 100),
        },
        quantity: 1,
      },
    ],
    allow_promotion_codes: true,
    success_url: `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${appUrl}/pricing`,
  })

  return NextResponse.json({ url: session.url })
}
