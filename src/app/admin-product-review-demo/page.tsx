import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

const checks = [
  ['Basic info', 'Complete', 'Product title, category, images, and description are present.'],
  ['Variants', 'Complete', 'At least one active variant has price and stock.'],
  ['Ingredients', 'Reviewing', 'Ingredient disclosure is ready for ZPS review.'],
  ['Packaging', 'Needs check', 'Shipping material evidence needs reviewer decision.']
]

const ingredients = [
  ['Coconut Oil', 'Pass', 'Single ingredient with clear source and purpose.'],
  ['Fragrance', 'Not used', 'Seller states no added fragrance system.'],
  ['Preservative', 'Not used', 'No synthetic preservative declared.']
]

const packaging = [
  ['Bottle', 'Glass', 'Pass'],
  ['Cap', 'Metal', 'Pass'],
  ['Label', 'Paper', 'Pass'],
  ['Shipping filler', 'Paper', 'Needs evidence']
]

export default function AdminProductReviewDemoPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section-wrap dashboard-page">
        <div className="breadcrumb">Home → Admin → Product Review</div>
        <p className="section-eyebrow">Admin product review</p>
        <h1>ZPS Review Workspace</h1>
        <p className="section-copy">Admins review product content, variants, ingredients, packaging, evidence, and claims before approving ZPS 100 or publishing a product.</p>

        <div className="dashboard-grid">
          <div className="dashboard-panel"><h3>Product</h3><p>Cold Pressed Coconut Oil</p></div>
          <div className="dashboard-panel"><h3>Seller</h3><p>Earth Roots</p></div>
          <div className="dashboard-panel"><h3>Status</h3><p>Under Review</p></div>
          <div className="dashboard-panel"><h3>ZPS</h3><p>Pending Decision</p></div>
        </div>

        <section className="product-info-section">
          <div className="catalog-header"><div><p className="section-eyebrow">Completeness</p><h2>Product readiness checklist</h2></div><span>Publish stays locked until approved</span></div>
          <div className="dashboard-table">
            {checks.map(([area, status, note]) => <div className="dashboard-row" key={area}><strong>{area}</strong><span>{status}</span><span>{note}</span><a href="#">Open</a></div>)}
          </div>
        </section>

        <section className="product-info-section">
          <p className="section-eyebrow">Ingredient review</p>
          <h2>Disclosure checks</h2>
          <div className="dashboard-table">
            {ingredients.map(([name, status, note]) => <div className="dashboard-row" key={name}><strong>{name}</strong><span>{status}</span><span>{note}</span><a href="#">Note</a></div>)}
          </div>
        </section>

        <section className="product-info-section">
          <p className="section-eyebrow">Packaging review</p>
          <h2>Packaging component checks</h2>
          <div className="dashboard-table">
            {packaging.map(([part, material, status]) => <div className="dashboard-row" key={part}><strong>{part}</strong><span>{material}</span><span>{status}</span><a href="#">Review</a></div>)}
          </div>
        </section>

        <section className="product-info-section">
          <p className="section-eyebrow">Evidence & claims</p>
          <h2>Review supporting proof</h2>
          <div className="three-grid">
            <div className="info-card"><h3>Product photos</h3><p>Front, label, and pack images accepted for public preview.</p></div>
            <div className="info-card"><h3>Packaging evidence</h3><p>Shipping filler proof needs one more image before final pass.</p></div>
            <div className="info-card"><h3>Claims review</h3><p>Copy should remain clear, careful, and free of unsupported guarantees.</p></div>
          </div>
        </section>

        <section className="product-info-section">
          <p className="section-eyebrow">Decision panel</p>
          <h2>Admin actions</h2>
          <div className="three-grid">
            <div className="info-card"><h3>Request changes</h3><p>Send seller-visible notes for missing evidence or unclear disclosure.</p></div>
            <div className="info-card"><h3>Approve ZPS 100</h3><p>Allowed only after required ingredient, packaging, and evidence checks pass.</p></div>
            <div className="info-card"><h3>Publish product</h3><p>Product appears publicly only after ZPS approval and admin publish.</p></div>
          </div>
          <div className="hero-actions"><a className="btn-secondary" href="#">Request Changes</a><a className="btn-secondary" href="#">Reject</a><a className="btn-primary" href="#">Approve ZPS</a></div>
        </section>

        <section className="product-info-section">
          <p className="section-eyebrow">Audit trail</p>
          <h2>Review history</h2>
          <p>Every important decision should create audit history: review started, note added, changes requested, ZPS approved, product published, or product disabled.</p>
        </section>
      </section>
      <SiteFooter />
    </main>
  )
}
