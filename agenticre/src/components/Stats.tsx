export default function Stats() {
  const stats = [
    { value: "$99", label: "One-time price" },
    { value: "4", label: "AI prompt packs" },
    { value: "Lifetime", label: "Access included" },
    { value: "Colorado", label: "Market focused" },
  ];

  return (
    <section className="border-y border-border bg-secondary px-6 py-16">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {stat.value}
            </div>
            <div className="mt-2 text-sm font-medium text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
