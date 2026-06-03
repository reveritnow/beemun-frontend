import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

const products = [
  { name: 'Cold Pressed Coconut Oil', status: 'Live', zps: 'Approved' },
  { name: 'Rose Face Balm', status: 'In Review', zps: 'Pending' },
  { name: 'Hibiscus Hair Powder', status: 'Changes Requested', zps: 'Pending' },
]

export default function SellerDemoPage() {
  return (
    <main>
      <SiteHeader />
      <section className="dashboard-page section-wrap">
        <p className="section-eyebrow">Seller dashboard</p>
        <h1>Earth Roots Seller Hub</h1>
        <div className="dashboard-grid">
          <article className="info-card"><h3>Total Products</h3><p>12</p></article>
          <article className="info-card"><h3>Live Products</h3><p>8</p></article>
          <article className="info-card"><h3>In Review</h3><p>3</p></article>
          <article className="info-card"><h3>New Orders</h3><p>5</p></article>
        </div>
        <div className="dashboard-panel">
          <div className="catalog-header"><h2>Products</h2><a className="btn-primary" href="#add-product">Add Product</a></div>
          <div className="dashboard-table">
            {products.map((product) => (
              <div className="dashboard-row" key={product.name}>
                <strong>{product.name}</strong><span>{product.status}</span><span>{product.zps}</span><a href="#notes">View notes</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
