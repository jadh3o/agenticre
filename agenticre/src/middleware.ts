import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Edge runtime: keep this check simple (no Node crypto).
  // Full validation happens in server routes after checkout.
  if (pathname.startsWith('/vault')) {
    const token = req.cookies.get('agenticre_access')?.value
    if (!token) {
      const url = req.nextUrl.clone()
      url.pathname = '/pricing'
      url.searchParams.set('locked', '1')
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/vault/:path*'],
}
