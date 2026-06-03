import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import FeaturedProducts from '@/components/FeaturedProducts'

export default function CategoryDemoPage() {
  return (
    <main>
      <SiteHeader />
      <section className="listing-hero">
        <div className="section-wrap listing-hero-grid">
          <div>
            <p className="section-eyebrow">Category</p>
            <h1>Skincare</h1>
            <p>Pure skin essentials with full ingredient transparency, reviewed packaging, and ZPS 100 trust signals.</p>
          </div>
          <div className="listing-trust-box">
            <strong>ZPS 100 category promise</strong>
            <p>Every visible product must pass ingredient and packaging review before listing.</p>
          </div>
        </div>
      </section>
      <section className="catalog-layout section-wrap">
        <aside className="filter-panel">
          <h3>Filters</h3>
          <button>Face Oils</button>
          <button>Balms</button>
          <button>Soaps</button>
          <button>Full Disclosure</button>
        </aside>
        <div>
          <div className="catalog-header"><h2>ZPS 100 Skincare</h2><span>24 products</span></div>
          <FeaturedProducts />
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
