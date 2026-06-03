import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import FeaturedProducts from '@/components/FeaturedProducts'

export default function BrandPageView() {
  return (
    <main>
      <SiteHeader />
      <section className="brand-hero">
        <div className="section-wrap brand-hero-grid">
          <div className="brand-mark">E</div>
          <div>
            <p className="section-eyebrow">Verified Maker</p>
            <h1>Earth Roots</h1>
            <p>Single-ingredient oils and natural care rituals focused on clear product information and reviewed packaging.</p>
            <div className="brand-meta"><span>Kerala, India</span><span>Approved Maker</span><span>12 live products</span></div>
          </div>
        </div>
      </section>
      <section className="section-wrap brand-story-section"><h2>Maker story</h2><p>Earth Roots is part of the BEEMUN maker program. Product pages show only items that have passed product-level review.</p></section>
      <section className="section-wrap"><div className="three-grid"><div className="info-card"><h3>Ingredients</h3><p>Product ingredient details are reviewed before listing.</p></div><div className="info-card"><h3>Packaging</h3><p>Packaging details are reviewed before listing.</p></div><div className="info-card"><h3>Products</h3><p>Live products carry BEEMUN review signals.</p></div></div></section>
      <section className="section-wrap"><p className="section-eyebrow">Products</p><h2 className="section-title">Products from this maker</h2><FeaturedProducts /></section>
      <SiteFooter />
    </main>
  )
}
