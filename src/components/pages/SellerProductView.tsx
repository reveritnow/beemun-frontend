import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default function SellerProductView() {
  return (
    <main>
      <SiteHeader />
      <section className="section-wrap dashboard-page">
        <div className="breadcrumb">Home → Seller → Add Product</div>
        <p className="section-eyebrow">Product submission</p>
        <h1>Add Product for Review</h1>
        <p className="section-copy">Create a draft, add product details, disclose ingredients and packaging, then submit for BEEMUN review.</p>
        <div className="dashboard-grid"><div className="dashboard-panel"><h3>Draft</h3><p>Save anytime</p></div><div className="dashboard-panel"><h3>Details</h3><p>Basics and variants</p></div><div className="dashboard-panel"><h3>Disclosure</h3><p>Ingredients and packaging</p></div><div className="dashboard-panel"><h3>Review</h3><p>Submit when ready</p></div></div>
        <section className="product-info-section"><h2>Product basics</h2><div className="three-grid"><div className="info-card"><h3>Name</h3><p>Customer-facing product name.</p></div><div className="info-card"><h3>Category</h3><p>Select the right category and subcategory.</p></div><div className="info-card"><h3>Description</h3><p>Clear product copy.</p></div></div></section>
        <section className="product-info-section"><h2>Disclosure</h2><div className="three-grid"><div className="info-card"><h3>Ingredients</h3><p>Add complete ingredient details.</p></div><div className="info-card"><h3>Packaging</h3><p>Add product and shipping packaging details.</p></div><div className="info-card"><h3>Evidence</h3><p>Add images or documents for review.</p></div></div></section>
        <section className="product-info-section"><div className="hero-actions"><a className="btn-secondary" href="/seller/dashboard">Save Draft</a><a className="btn-primary" href="/seller/dashboard">Submit for Review</a></div></section>
      </section>
      <SiteFooter />
    </main>
  )
}
