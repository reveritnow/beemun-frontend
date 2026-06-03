import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

const fitChecks = [
  ['Category fit', 'Strong', 'Oils, skincare, and hair care match BEEMUN launch categories.'],
  ['Ingredient transparency', 'Strong', 'Seller agrees to disclose full ingredient lists.'],
  ['Packaging readiness', 'Needs review', 'Product packaging is clear, shipping material needs confirmation.'],
  ['Brand quality', 'Strong', 'Clear maker story and focused product range.']
]

const applicationRows = [
  ['Brand', 'Earth Roots', 'Kerala-based natural care maker', 'View'],
  ['Founder', 'Ananya Rao', 'Primary applicant and maker contact', 'Contact'],
  ['Categories', 'Oils & Butters, Skincare', 'Suitable for launch catalog', 'Review'],
  ['Uploads', '5 files', 'Product, packaging, and catalog images', 'Open']
]

export default function AdminSellerReviewDemoPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section-wrap dashboard-page">
        <div className="breadcrumb">Home → Admin → Seller Applications</div>
        <p className="section-eyebrow">Admin seller review</p>
        <h1>Seller Application Review</h1>
        <p className="section-copy">Admins review brand fit, ingredient transparency, packaging readiness, and seller quality before creating an approved seller account.</p>

        <div className="dashboard-grid">
          <div className="dashboard-panel"><h3>Application</h3><p>New</p></div>
          <div className="dashboard-panel"><h3>Brand</h3><p>Earth Roots</p></div>
          <div className="dashboard-panel"><h3>Requested Categories</h3><p>2</p></div>
          <div className="dashboard-panel"><h3>Decision</h3><p>Pending</p></div>
        </div>

        <section className="product-info-section">
          <div className="catalog-header"><div><p className="section-eyebrow">Application detail</p><h2>Applicant summary</h2></div><span>Seller cannot access dashboard yet</span></div>
          <div className="dashboard-table">
            {applicationRows.map(([label, value, note, action]) => <div className="dashboard-row" key={label}><strong>{label}</strong><span>{value}</span><span>{note}</span><a href="#">{action}</a></div>)}
          </div>
        </section>

        <section className="product-info-section">
          <p className="section-eyebrow">Fit assessment</p>
          <h2>Review readiness</h2>
          <div className="dashboard-table">
            {fitChecks.map(([area, status, note]) => <div className="dashboard-row" key={area}><strong>{area}</strong><span>{status}</span><span>{note}</span><a href="#">Note</a></div>)}
          </div>
        </section>

        <section className="product-info-section">
          <p className="section-eyebrow">Brand and packaging context</p>
          <h2>What admin should check</h2>
          <div className="three-grid">
            <div className="info-card"><h3>Brand story</h3><p>Does the maker story feel credible, focused, and aligned with BEEMUN?</p></div>
            <div className="info-card"><h3>Ingredient promise</h3><p>Is the seller willing to disclose complete ingredients per product?</p></div>
            <div className="info-card"><h3>Packaging readiness</h3><p>Does the seller understand that shipping materials also matter?</p></div>
          </div>
        </section>

        <section className="product-info-section">
          <p className="section-eyebrow">Seller terms</p>
          <h2>Approval setup</h2>
          <div className="three-grid">
            <div className="info-card"><h3>Commission</h3><p>Set seller-specific commission before seller receives real orders.</p></div>
            <div className="info-card"><h3>Founding seller</h3><p>Optional internal flag for early makers and priority onboarding.</p></div>
            <div className="info-card"><h3>Seller profile</h3><p>Approval creates or links a seller user and SellerProfile.</p></div>
          </div>
        </section>

        <section className="product-info-section">
          <p className="section-eyebrow">Decision panel</p>
          <h2>Admin actions</h2>
          <div className="three-grid">
            <div className="info-card"><h3>Request more info</h3><p>Ask for missing packaging, ingredient, or brand details.</p></div>
            <div className="info-card"><h3>Reject application</h3><p>Use when the seller is not suitable for BEEMUN launch scope.</p></div>
            <div className="info-card"><h3>Approve and convert</h3><p>Create seller access only after approval and terms setup.</p></div>
          </div>
          <div className="hero-actions"><a className="btn-secondary" href="#">Request Info</a><a className="btn-secondary" href="#">Reject</a><a className="btn-primary" href="#">Approve Seller</a></div>
        </section>

        <section className="product-info-section">
          <p className="section-eyebrow">Audit trail</p>
          <h2>Review history</h2>
          <p>Every important decision should create history: review started, more information requested, approved, rejected, converted to seller, or seller status changed.</p>
        </section>
      </section>
      <SiteFooter />
    </main>
  )
}
