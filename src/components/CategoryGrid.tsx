const categories = [
  { name: 'Skincare', description: 'Pure skin essentials with full ingredient transparency.' },
  { name: 'Hair Care', description: 'Natural oils, powders, and care rituals for hair and scalp.' },
  { name: 'Oils & Butters', description: 'Single-ingredient oils and butters reviewed for purity.' },
  { name: 'Herbal Powders & Botanicals', description: 'Plant-based powders, clays, and botanicals for daily rituals.' },
]

export default function CategoryGrid() {
  return (
    <section id="categories">
      <div className="section-wrap">
        <p className="section-eyebrow">Shop by category</p>
        <h2 className="section-title">Start with curated ZPS 100 categories</h2>
        <div className="category-grid">
          {categories.map((category) => (
            <article key={category.name} className="category-card">
              <div className="card-image" />
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
