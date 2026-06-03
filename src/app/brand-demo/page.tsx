import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import FeaturedProducts from '@/components/FeaturedProducts'

export default function BrandDemoPage() {
  return (
    <main>
      <SiteHeader />
      <section className="brand-hero">
        <div className="section-wrap brand-hero-grid">
          <div className="brand-mark">E</div>
          <div>
            <p className="section-eyebrow">Verified Maker</p>
            <h1>Earth Roots</h1>
            <p>Single-ingredient oils and simple natural care rituals focused on transparency, plastic-free packaging, and purity.</p>
            <div className="brand-meta"><span>Kerala, India</span><span>ZPS Approved Maker</span><span>12 live products</span></div>
          </div>
        </div>
      </section>
      <section className="section-wrap brand-story-section">
        <h2>Maker story</h2>
        <p>Earth Roots focuses on slow sourcing, simple formulations, and clear packaging choices. BEEMUN highlights makers like this so customers can understand who made the product and why it passed our trust standard.</p>
      </section>
      <section className="section-wrap">
        <div className="three-grid">
          <div className="info-card"><h3>Ingredient approach</h3><p>Simple, disclosed ingredients with no hidden blends.</p></div>
          <div className="info-card"><h3>Packaging approach</h3><p>Glass, paper, and plastic-free material choices.</p></div>
          <div className="info-card"><h3>BEEMUN status</h3><p>Products are reviewed before going live.</p></div>
        </div>
      </section>
      <FeaturedProducts />
      <SiteFooter />
    </main>
  )
}
