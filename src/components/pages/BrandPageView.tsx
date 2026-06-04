import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

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
            <p>Simple natural care products with clear product information.</p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
