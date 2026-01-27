import crypto from 'crypto'

function getJwtSecret(): string {
  const jwtSecret = process.env.JWT_SECRET
  if (!jwtSecret) throw new Error('Missing JWT_SECRET')
  return jwtSecret
}

// Minimal signed token (not a full JWT spec) for MVP.
// payload is JSON, base64url, signed with HMAC SHA256.
export function signAccessToken(payload: Record<string, unknown>, ttlSeconds = 60 * 60 * 24 * 365 * 10) {
  const now = Math.floor(Date.now() / 1000)
  const body = {
    ...payload,
    iat: now,
    exp: now + ttlSeconds,
  }
  const data = Buffer.from(JSON.stringify(body)).toString('base64url')
  const sig = crypto.createHmac('sha256', getJwtSecret()).update(data).digest('base64url')

  return `${data}.${sig}`
}

export function verifyAccessToken(token: string): null | Record<string, unknown> {
  const [data, sig] = token.split('.')
  if (!data || !sig) return null
  const expected = crypto.createHmac('sha256', getJwtSecret()).update(data).digest('base64url')
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null
  const body = JSON.parse(Buffer.from(data, 'base64url').toString('utf8'))
  const now = Math.floor(Date.now() / 1000)
  if (typeof body?.exp !== 'number' || body.exp < now) return null
  return body
}
