import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default function SellerApplicationDemoPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section-wrap dashboard-page">
        <div className="breadcrumb">Home → Partner With BEEMUN</div>
        <p className="section-eyebrow">Seller application</p>
        <h1>Apply to become a BEEMUN maker</h1>
        <p className="section-copy">BEEMUN is a curated marketplace. Makers apply first, then approved sellers can submit products for ZPS review.</p>
        <div className="dashboard-grid">
          <div className="dashboard-panel"><h3>Step 1</h3><p>Brand details</p></div>
          <div className="dashboard-panel"><h3>Step 2</h3><p>Categories</p></div>
          <div className="dashboard-panel"><h3>Step 3</h3><p>Transparency</p></div>
          <div className="dashboard-panel"><h3>Step 4</h3><p>Packaging readiness</p></div>
        </div>
        <section className="product-info-section"><h2>Application sections</h2><div className="three-grid"><div className="info-card"><h3>Brand & founder</h3><p>Brand name, founder name, city, website, Instagram, and short maker story.</p></div><div className="info-card"><h3>Product fit</h3><p>Requested launch categories and current product range.</p></div><div className="info-card"><h3>Files</h3><p>Product, ingredient, and packaging photos to help BEEMUN review fit.</p></div></div></section>
        <section className="product-info-section"><h2>Before you apply</h2><ul><li>You should be willing to disclose complete ingredients per product.</li><li>You should understand that shipping packaging also matters.</li><li>Seller approval does not automatically approve products.</li><li>Products go live only after BEEMUN ZPS review and publishing.</li></ul><a className="btn-primary" href="/admin-seller-review-demo">Submit Application Demo</a></section>
      </section>
      <SiteFooter />
    </main>
  )
}
