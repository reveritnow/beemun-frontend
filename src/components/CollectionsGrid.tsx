const collections = [
  { name: 'Founder Favorites', slug: 'skincare' },
  { name: 'New Arrivals', slug: 'hair-care' },
  { name: 'Seasonal Picks', slug: 'oils-and-butters' },
  { name: 'Gift Collection', slug: 'herbal-powders-and-botanicals' },
]

export default function CollectionsGrid() {
  return (
    <section>
      <div className="section-wrap">
        <p className="section-eyebrow">Collections</p>
        <h2 className="section-title">Curated collections</h2>
        <div className="four-grid">
          {collections.map((item) => (
            <a className="collection-card" href={`/category/${item.slug}`} key={item.name}>
              <div className="card-image" />
              <h3>{item.name}</h3>
              <p>Hand-picked products selected around a specific theme.</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
