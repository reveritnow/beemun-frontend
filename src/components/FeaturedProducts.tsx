const products = [
  { name: 'Cold Pressed Coconut Oil', brand: 'Earth Roots', price: '₹349', note: 'Single-ingredient oil' },
  { name: 'Rose Face Balm', brand: 'Petal & Soil', price: '₹599', note: 'Glass jar packaging' },
  { name: 'Hibiscus Hair Powder', brand: 'Root Rituals', price: '₹249', note: 'Full ingredient disclosure' },
]

export default function FeaturedProducts() {
  return (
    <section className="featured-section">
      <div className="section-wrap">
        <p className="section-eyebrow">Featured products</p>
        <h2 className="section-title">ZPS 100 products, curated first</h2>
        <div className="product-grid">
          {products.map((product) => (
            <article key={product.name} className="product-card">
              <div className="card-image" />
              <span className="badge">ZPS 100</span>
              <h3>{product.name}</h3>
              <p>by {product.brand}</p>
              <p>{product.note}</p>
              <strong>{product.price}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
