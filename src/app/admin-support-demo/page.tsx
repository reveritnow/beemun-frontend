import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default function AdminSupportDemoPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section-wrap dashboard-page">
        <div className="breadcrumb">Home → Admin → Support</div>
        <p className="section-eyebrow">Customer and seller support</p>
        <h1>Support Queue</h1>
        <p className="section-copy">Support protects customers, sellers, and BEEMUN trust through structured ticket handling.</p>

        <div className="dashboard-grid">
          <div className="dashboard-panel"><h3>Open Tickets</h3><p>6</p></div>
          <div className="dashboard-panel"><h3>Urgent</h3><p>1</p></div>
          <div className="dashboard-panel"><h3>Waiting Seller</h3><p>2</p></div>
          <div className="dashboard-panel"><h3>Resolved Today</h3><p>4</p></div>
        </div>

        <section className="product-info-section">
          <h2>Ticket categories</h2>
          <div className="three-grid">
            <div className="info-card"><h3>Order Issues</h3><p>Missing, wrong, damaged, delayed, or tracking concerns.</p></div>
            <div className="info-card"><h3>Product Reports</h3><p>Ingredient, packaging, disclosure, or ZPS concerns.</p></div>
            <div className="info-card"><h3>Seller Support</h3><p>Product submissions, payouts, fulfillment, and dashboard help.</p></div>
          </div>
        </section>
      </section>
      <SiteFooter />
    </main>
  )
}
