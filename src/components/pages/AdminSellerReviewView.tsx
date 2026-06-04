import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default function AdminSellerReviewView() {
  return (
    <main>
      <SiteHeader />

      <section className="section-wrap dashboard-page">
        <div className="breadcrumb">Home → Admin → Seller Review</div>

        <p className="section-eyebrow">Seller review</p>
        <h1>Seller Review</h1>
        <p className="section-copy">
          Review seller applications, brand details, product categories, uploaded files, and approval status.
        </p>

        <div className="dashboard-grid">
          <div className="dashboard-panel">
            <h3>Applications</h3>
            <p>4</p>
          </div>
          <div className="dashboard-panel">
            <h3>Pending</h3>
            <p>2</p>
          </div>
          <div className="dashboard-panel">
            <h3>Approved</h3>
            <p>8</p>
          </div>
          <div className="dashboard-panel">
            <h3>Notes</h3>
            <p>1</p>
          </div>
        </div>

        <section className="product-info-section">
          <h2>Application queue</h2>

          <div className="dashboard-table">
            <div className="dashboard-row">
              <strong>SEL-1001</strong>
              <span>Earth Roots</span>
              <span>Pending</span>
              <a href="#">Open</a>
            </div>

            <div className="dashboard-row">
              <strong>SEL-1002</strong>
              <span>Bee Botanics</span>
              <span>Waiting</span>
              <a href="#">Open</a>
            </div>
          </div>
        </section>

        <section className="product-info-section">
          <h2>Review areas</h2>

          <div className="three-grid">
            <div className="info-card">
              <h3>Brand details</h3>
              <p>Check brand name, maker story, city, website, and public profile readiness.</p>
            </div>

            <div className="info-card">
              <h3>Category fit</h3>
              <p>Check whether the seller belongs in BEEMUN launch categories.</p>
            </div>

            <div className="info-card">
              <h3>Approval status</h3>
              <p>Approve, reject, or request more information before seller access is created.</p>
            </div>
          </div>
        </section>
      </section>

      <SiteFooter />
    </main>
  )
}
