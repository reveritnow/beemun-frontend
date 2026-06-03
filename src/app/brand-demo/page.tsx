import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import FeaturedProducts from '@/components/FeaturedProducts'

const trustCards = [
  ['Approved Maker', 'Accepted into BEEMUN’s curated seller program.'],
  ['12 Live Products', 'Only product-level ZPS approved items appear publicly.'],
  ['Kerala, India', 'Maker location is shown for transparency.'],
  ['Reviewed Per Product', 'Every product still goes through individual review.']
]

const categories = ['Oils & Butters', 'Skincare', 'Hair Care']
const relatedMakers = ['Forest Pure', 'Bee Botanics', 'Clay & Leaf']

export default function BrandDemoPage() {
  return (
    <main>
      <SiteHeader />

      <section className="brand-hero">
        <div className="section-wrap">
          <div className="breadcrumb">Home → Makers → Earth Roots</div>
          <div className="brand-hero-grid">
            <div className="brand-mark">E</div>
            <div>
              <p className="section-eyebrow">Verified Maker</p>
              <h1>Earth Roots</h1>
              <p>Single-ingredient oils and simple natural care rituals focused on transparency, plastic-free packaging, and purity.</p>
              <div className="brand-meta"><span>Kerala, India</span><span>Approved Maker</span><span>12 live products</span></div>
              <div className="hero-actions"><a className="btn-primary" href="#products">Shop Products</a><a className="btn-secondary" href="#story">Read Maker Story</a></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <p className="section-eyebrow">Trust summary</p>
        <h2 className="section-title">Why this maker is on BEEMUN</h2>
        <div className="four-grid">
          {trustCards.map(([title, copy]) => <div className="info-card" key={title}><h3>{title}</h3><p>{copy}</p></div>)}
        </div>
      </section>

      <section className="section-wrap brand-story-section" id="story">
        <p className="section-eyebrow">Maker story</p>
        <h2 className="section-title">A slower way to make everyday care</h2>
        <p>Earth Roots focuses on slow sourcing, simple formulations, and clear packaging choices. BEEMUN highlights makers like this so customers can understand who made the product and what they stand for.</p>
        <p>Seller approval does not automatically approve every future product. Every product from Earth Roots still needs its own ingredient, packaging, and evidence review before going live.</p>
      </section>

      <section className="section-wrap">
        <p className="section-eyebrow">Transparency approach</p>
        <h2 className="section-title">How this maker works with BEEMUN</h2>
        <div className="three-grid">
          <div className="info-card"><h3>Ingredient approach</h3><p>Simple disclosed ingredients with no hidden blends or vague fragrance systems.</p></div>
          <div className="info-card"><h3>Packaging approach</h3><p>Glass, paper, metal, and plastic-free shipping choices are reviewed at product level.</p></div>
          <div className="info-card"><h3>Claims approach</h3><p>Product copy is reviewed so customers get clear and careful product information.</p></div>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-wrap">
          <p className="section-eyebrow">BEEMUN review relationship</p>
          <h2 className="section-title">Approved maker, product-level ZPS</h2>
          <p className="section-copy">Earth Roots is accepted into BEEMUN’s seller program. Products shown below have passed product-level ZPS review before becoming visible to customers.</p>
          <div className="three-grid">
            <div className="process-card"><span>1</span><h3>Seller accepted</h3><p>BEEMUN reviews brand fit, transparency, and packaging readiness.</p></div>
            <div className="process-card"><span>2</span><h3>Products submitted</h3><p>Each product includes ingredients, packaging, variants, and evidence.</p></div>
            <div className="process-card"><span>3</span><h3>ZPS approved</h3><p>Only approved products appear publicly with BEEMUN trust signals.</p></div>
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <p className="section-eyebrow">Category coverage</p>
        <h2 className="section-title">What Earth Roots makes</h2>
        <div className="pill-grid">{categories.map((item) => <a className="ingredient-pill" href="/category-demo" key={item}>{item}</a>)}</div>
      </section>

      <section className="section-wrap" id="products">
        <p className="section-eyebrow">Live ZPS products</p>
        <h2 className="section-title">Products from this maker</h2>
        <FeaturedProducts />
      </section>

      <section className="featured-section">
        <div className="section-wrap">
          <p className="section-eyebrow">Claims & documents</p>
          <h2 className="section-title">What is verified and what is declared</h2>
          <div className="three-grid">
            <div className="info-card"><h3>BEEMUN Verified</h3><p>ZPS 100 applies to approved products visible on BEEMUN.</p></div>
            <div className="info-card"><h3>Seller Declared</h3><p>Claims like handmade or small-batch may be seller-declared unless marked otherwise.</p></div>
            <div className="info-card"><h3>Third-party Supported</h3><p>Documents can support claims, but they remain separate from BEEMUN’s ZPS review.</p></div>
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <p className="section-eyebrow">More makers</p>
        <h2 className="section-title">Related makers</h2>
        <div className="three-grid">
          {relatedMakers.map((maker) => <article className="maker-card" key={maker}><div className="maker-logo">{maker[0]}</div><h3>{maker}</h3><p>Explore more BEEMUN makers with live ZPS-reviewed products.</p><a href="/brand-demo">View maker</a></article>)}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
