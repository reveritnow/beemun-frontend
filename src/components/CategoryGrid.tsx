const categories = [
  {
    name: 'Skincare',
    description: 'Pure skin essentials with full ingredient transparency.',
  },
  {
    name: 'Hair Care',
    description: 'Natural oils, powders, and care rituals for hair and scalp.',
  },
  {
    name: 'Oils & Butters',
    description: 'Single-ingredient oils and butters reviewed for purity.',
  },
  {
    name: 'Herbal Powders & Botanicals',
    description: 'Plant-based powders, clays, and botanicals for daily rituals.',
  },
]

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex flex-col gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6f7f58]">Shop by category</p>
        <h2 className="text-3xl font-semibold tracking-tight text-[#1f2a1f] md:text-4xl">Start with curated ZPS 100 categories</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <article key={category.name} className="rounded-3xl border border-[#e5dcc8] bg-[#fffaf0] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-6 h-28 rounded-2xl bg-gradient-to-br from-[#e9ddbd] to-[#c8d1b0]" />
            <h3 className="mb-3 text-xl font-semibold text-[#1f2a1f]">{category.name}</h3>
            <p className="text-sm leading-6 text-[#5f6b55]">{category.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
