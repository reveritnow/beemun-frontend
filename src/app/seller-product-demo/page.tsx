import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

const checklist = [
  'Basic product information complete',
  'At least one active variant added',
  'Full ingredient disclosure added',
  'Packaging components disclosed',
  'Evidence images or documents uploaded',
  'Claims reviewed before submission'
]

export default function SellerProductDemoPage() {
  return (
    <main>
      <SiteHeader />

      <section className="section-wrap dashboard-page">
        <div className="breadcrumb">Home → Seller Dashboard → Add Product</div>
        <p className="section-eyebrow">Seller product submission</p>
        <h1>Add Product for ZPS Review</h1>
        <p className="section-copy">Sellers can create drafts and submit products for BEEMUN review. Products cannot go live until BEEMUN approves ZPS and publishes them.</p>

        <div className="dashboard-grid">
          <div className="dashboard-panel"><h3>Draft</h3><p>Save anytime</p></div>
          <div className="dashboard-panel"><h3>Review</h3><p>BEEMUN checks product details</p></div>
          <div className="dashboard-panel"><h3>ZPS</h3><p>Ingredient and packaging review</p></div>
          <div className="dashboard-panel"><h3>Publish</h3><p>Admin controlled</p></div>
        </div>

        <section className="product-info-section">
          <p className="section-eyebrow">Step 1</p>
          <h2>Product basics</h2>
          <div className="three-grid">
            <div className="info-card"><h3>Product name</h3><p>Clear customer-facing product name.</p></div>
            <div className="info-card"><h3>Category</h3><p>Select the most accurate BEEMUN category and subcategory.</p></div>
            <div className="info-card"><h3>Description</h3><p>Explain the product simply without overclaiming.</p></div>
          </div>
        </section>

        <section className="product-info-section">
          <p className="section-eyebrow">Step 2</p>
          <h2>Variants, price & stock</h2>
          <div className="dashboard-table">
            <div className="dashboard-row"><strong>100ml</strong><span>₹349</span><span>24 in stock</span><a href="#">Edit</a></div>
            <div className="dashboard-row"><strong>250ml</strong><span>₹699</span><span>12 in stock</span><a href="#">Edit</a></div>
            <div className="dashboard-row"><strong>500ml</strong><span>₹1199</span><span>6 in stock</span><a href="#">Edit</a></div>
          </div>
        </section>

        <section className="product-info-section">
          <p className="section-eyebrow">Step 3</p>
          <h2>Ingredient disclosure</h2>
          <p>Every ingredient should be disclosed clearly. Hidden blends, vague fragrance systems, and incomplete ingredient lists should be avoided.</p>
          <div className="three-grid">
            <div className="info-card"><h3>Ingredient name</h3><p>Cocos nucifera oil</p></div>
            <div className="info-card"><h3>Purpose</h3><p>Skin and hair care oil.</p></div>
            <div className="info-card"><h3>Source</h3><p>Cold pressed coconut.</p></div>
          </div>
        </section>

        <section className="product-info-section">
          <p className="section-eyebrow">Step 4</p>
          <h2>Packaging disclosure</h2>
          <div className="three-grid">
            <div className="info-card"><h3>Container</h3><p>Glass bottle.</p></div>
            <div className="info-card"><h3>Cap / seal</h3><p>Metal cap and paper label.</p></div>
            <div className="info-card"><h3>Shipping</h3><p>Cardboard box and paper filler.</p></div>
          </div>
        </section>

        <section className="product-info-section">
          <p className="section-eyebrow">Step 5</p>
          <h2>Evidence uploads</h2>
          <div className="three-grid">
            <div className="info-card"><h3>Product photos</h3><p>Front, back, label, and pack shots.</p></div>
            <div className="info-card"><h3>Packaging photos</h3><p>Show container, label, seal, and shipping materials.</p></div>
            <div className="info-card"><h3>Documents</h3><p>Upload supporting documents if making third-party supported claims.</p></div>
          </div>
        </section>

        <section className="product-info-section">
          <p className="section-eyebrow">Step 6</p>
          <h2>Claims & review notes</h2>
          <p>Seller-declared claims should be separated from BEEMUN verified ZPS status. Product copy should stay careful, transparent, and customer-friendly.</p>
        </section>

        <section className="product-info-section">
          <p className="section-eyebrow">Before submission</p>
          <h2>Review checklist</h2>
          <ul>{checklist.map((item) => <li key={item}>{item}</li>)}</ul>
          <div className="hero-actions"><a className="btn-secondary" href="/seller-dashboard-demo">Save Draft</a><a className="btn-primary" href="/seller-dashboard-demo">Submit for Review</a></div>
        </section>
      </section>

      <SiteFooter />
    </main>
  )
}
