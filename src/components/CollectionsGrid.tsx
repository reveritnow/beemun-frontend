const collections = [
  'Founder Favorites',
  'New Arrivals',
  'Seasonal Picks',
  'Gift Collection',
]

export default function CollectionsGrid() {
  return (
    <section>
      <div className="section-wrap">
        <p className="section-eyebrow">Collections</p>
        <h2 className="section-title">Curated collections</h2>
        <div className="four-grid">
          {collections.map((item) => (
            <article className="collection-card" key={item}>
              <div className="card-image" />
              <h3>{item}</h3>
              <p>Hand-picked products selected around a specific theme.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
