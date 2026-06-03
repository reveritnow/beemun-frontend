import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import FeaturedProducts from '@/components/FeaturedProducts'

export default function BrandDemoPage() {
  return (
    <main>
      <SiteHeader />
      <section className="brand-hero section-wrap">
        <div className="maker-logo">E</div>
        <h1>Earth Roots</h1>
        <p>Single-ingredient oils and simple natural care rituals focused on transparency and purity.</p>
      </section>
      <section className="section-wrap">
        <div className="three-grid">
          <div className="info-card"><h3>Location</h3><p>Kerala, India</p></div>
          <div className="info-card"><h3>ZPS Status</h3><p>Approved Maker</p></div>
          <div className="info-card"><h3>Products</h3><p>12 live products</p></div>
        </div>
      </section>
      <FeaturedProducts />
      <SiteFooter />
    </main>
  )
}
