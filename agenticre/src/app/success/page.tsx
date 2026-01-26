import SuccessClient from './SuccessClient'

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>
}) {
  const { session_id } = await searchParams

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">You’re in.</h1>
        <SuccessClient sessionId={session_id ?? null} />
      </div>
    </main>
  )
}
