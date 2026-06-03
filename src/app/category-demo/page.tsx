import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import FeaturedProducts from '@/components/FeaturedProducts'

const subcategories = ['Face Oils', 'Ubtans & Masks', 'Hydrosols', 'Lip Care', 'Cleansers', 'Serums']
const filters = ['Neem', 'Rose', 'Coconut', 'Aloe', 'Full Disclosure', 'In Stock']
const ingredients = ['Rose', 'Neem', 'Multani Mitti', 'Aloe', 'Turmeric', 'Coconut']
const makers = [
  { name: 'Earth Roots', place: 'Kerala', note: 'Single-ingredient oils and plastic-free packaging.' },
  { name: 'Forest Pure', place: 'Himachal', note: 'Herbal powders with full ingredient disclosure.' },
  { name: 'Bee Botanics', place: 'Maharashtra', note: 'Small-batch balms and natural care rituals.' }
]

export default function CategoryDemoPage() {
  return (
    <main>
      <SiteHeader />

      <section className="listing-hero">
        <div className="section-wrap">
          <div className="breadcrumb">Home → Categories → Skincare</div>
          <div className="listing-hero-grid">
            <div>
              <p className="section-eyebrow">Category</p>
              <h1>Skincare</h1>
              <p>Pure skin essentials reviewed for zero plastic, zero synthetic purity, packaging transparency, and full ingredient disclosure.</p>
              <div className="filter-row">
                {subcategories.map((item) => <button key={item}>{item}</button>)}
              </div>
            </div>
            <div className="listing-trust-box">
              <strong>ZPS 100 category promise</strong>
              <p>Every visible product in this category must pass BEEMUN ingredient and packaging review before listing.</p>
              <div className="pill-grid">
                <span className="ingredient-pill">Zero Plastic</span>
                <span className="ingredient-pill">Zero Synthetic</span>
                <span className="ingredient-pill">Full Disclosure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="catalog-layout section-wrap">
        <aside className="filter-panel">
          <h3>Refine Skincare</h3>
          <p className="muted">ZPS 100 is always on.</p>
          {filters.map((item) => <button key={item}>{item}</button>)}
        </aside>
        <div>
          <div className="catalog-header">
            <div>
              <p className="section-eyebrow">ZPS 100 products</p>
              <h2>Curated Skincare</h2>
            </div>
            <span>24 products · Sort: Featured</span>
          </div>
          <FeaturedProducts />
        </div>
      </section>

      <section className="section-wrap">
        <p className="section-eyebrow">What BEEMUN checks</p>
        <h2 className="section-title">Skincare reviewed beyond the label</h2>
        <p className="section-copy">For skincare, BEEMUN reviews ingredient disclosure, synthetic fragrance risk, artificial colour risk, packaging components, seller evidence, and claim safety before a product appears publicly.</p>
        <div className="three-grid">
          <div className="info-card"><h3>Ingredient clarity</h3><p>No hidden blends, vague fragrance systems, or incomplete ingredient lists.</p></div>
          <div className="info-card"><h3>Packaging review</h3><p>Containers, labels, seals, fillers, and shipping materials are reviewed.</p></div>
          <div className="info-card"><h3>Claim safety</h3><p>Product copy should support natural care rituals without unsupported medical claims.</p></div>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-wrap">
          <p className="section-eyebrow">Ingredient discovery</p>
          <h2 className="section-title">Browse skincare by ingredient</h2>
          <div className="pill-grid">
            {ingredients.map((item) => <a className="ingredient-pill" href="#" key={item}>{item}</a>)}
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <p className="section-eyebrow">Featured makers</p>
        <h2 className="section-title">Makers in this category</h2>
        <div className="three-grid">
          {makers.map((maker) => (
            <article className="maker-card" key={maker.name}>
              <div className="maker-logo">{maker.name[0]}</div>
              <h3>{maker.name}</h3>
              <p className="muted">{maker.place}, India</p>
              <p>{maker.note}</p>
              <a href="/brand-demo">View maker</a>
            </article>
          ))}
        </div>
      </section>

      <section className="featured-section">
        <div className="section-wrap">
          <p className="section-eyebrow">Continue exploring</p>
          <h2 className="section-title">Related categories</h2>
          <div className="three-grid">
            <a className="category-card" href="#"><h3>Oils & Butters</h3><p>Single-ingredient oils and plant butters.</p></a>
            <a className="category-card" href="#"><h3>Herbal Powders</h3><p>Botanical powders for skin and hair rituals.</p></a>
            <a className="category-card" href="#"><h3>Body Care</h3><p>Soap bars, body oils, scrubs, and bath care.</p></a>
          </div>
        </div>
      </section>

      <section>
        <div className="seller-cta">
          <p className="section-eyebrow">For makers</p>
          <h2>Make products that belong here?</h2>
          <p>If your products are aligned with Zero Plastic, Zero Synthetic, and full transparency, apply to become a BEEMUN seller.</p>
          <a className="btn-primary" href="/seller-demo">Partner With BEEMUN</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
