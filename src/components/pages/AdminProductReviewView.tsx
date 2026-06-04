import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default function AdminProductReviewView() {
  return (
    <main>
      <SiteHeader />

      <section className="section-wrap dashboard-page">
        <div className="breadcrumb">Home → Admin → Product Review</div>

        <p className="section-eyebrow">Product review</p>
        <h1>Product Review</h1>
        <p className="section-copy">
          Review product information, variants, ingredients, packaging, uploaded files, and publication readiness.
        </p>

        <div className="dashboard-grid">
          <div className="dashboard-panel">
            <h3>Pending</h3>
            <p>7</p>
          </div>
          <div className="dashboard-panel">
            <h3>Changes Needed</h3>
            <p>3</p>
          </div>
          <div className="dashboard-panel">
            <h3>Approved</h3>
            <p>12</p>
          </div>
          <div className="dashboard-panel">
            <h3>Notes</h3>
            <p>2</p>
          </div>
        </div>

        <section className="product-info-section">
          <h2>Product queue</h2>

          <div className="dashboard-table">
            <div className="dashboard-row">
              <strong>PRD-1001</strong>
              <span>Cold Pressed Coconut Oil</span>
              <span>Pending</span>
              <a href="#">Open</a>
            </div>

            <div className="dashboard-row">
              <strong>PRD-1002</strong>
              <span>Rose Face Balm</span>
              <span>Changes Needed</span>
              <a href="#">Open</a>
            </div>
          </div>
        </section>

        <section className="product-info-section">
          <h2>Review areas</h2>

          <div className="three-grid">
            <div className="info-card">
              <h3>Product details</h3>
              <p>Check product name, category, description, images, variants, price, and stock.</p>
            </div>

            <div className="info-card">
              <h3>Disclosure</h3>
              <p>Check ingredient details, packaging details, and uploaded supporting files.</p>
            </div>

            <div className="info-card">
              <h3>Publish status</h3>
              <p>Approve, reject, or request changes before the product appears publicly.</p>
            </div>
          </div>
        </section>
      </section>

      <SiteFooter />
    </main>
  )
}
