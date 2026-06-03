import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

const reviewRows = [
  ['Seller Applications', '4 new', '2 need more info', 'Open queue'],
  ['Product Review', '7 submitted', '3 changes requested', 'Review products'],
  ['ZPS Checks', '5 pending', '2 re-review', 'Open ZPS queue']
]

const opsRows = [
  ['Orders', '12 today', '3 missing tracking', 'View orders'],
  ['Returns', '2 open', '1 waiting seller', 'Review returns'],
  ['Support', '6 open', '1 urgent', 'Open support']
]

export default function AdminDashboardDemoPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section-wrap dashboard-page">
        <div className="breadcrumb">Home → Admin</div>
        <p className="section-eyebrow">BEEMUN operations</p>
        <h1>Admin Dashboard</h1>
        <p className="section-copy">The admin dashboard shows what needs review, what affects customers, what blocks sellers, and what may impact BEEMUN trust.</p>

        <section className="product-info-section">
          <h2>Critical alerts</h2>
          <div className="three-grid">
            <div className="info-card"><h3>Tracking missing</h3><p>3 paid seller orders need tracking after expected dispatch time.</p></div>
            <div className="info-card"><h3>ZPS re-review</h3><p>2 products need review after packaging or ingredient updates.</p></div>
            <div className="info-card"><h3>Payment check</h3><p>1 payment verification issue needs finance review.</p></div>
          </div>
        </section>

        <div className="dashboard-grid">
          <div className="dashboard-panel"><h3>Seller Applications</h3><p>4</p></div>
          <div className="dashboard-panel"><h3>Products Awaiting Review</h3><p>7</p></div>
          <div className="dashboard-panel"><h3>Orders Today</h3><p>12</p></div>
          <div className="dashboard-panel"><h3>Open Support</h3><p>6</p></div>
        </div>

        <section className="product-info-section">
          <div className="catalog-header"><div><p className="section-eyebrow">Trust queues</p><h2>Review work</h2></div><span>Seller and product quality gates</span></div>
          <div className="dashboard-table">
            {reviewRows.map(([area, count, status, action]) => (
              <div className="dashboard-row" key={area}><strong>{area}</strong><span>{count}</span><span>{status}</span><a href="#">{action}</a></div>
            ))}
          </div>
        </section>

        <section className="product-info-section">
          <div className="catalog-header"><div><p className="section-eyebrow">Operations</p><h2>Customer and seller operations</h2></div><span>Orders, support, returns</span></div>
          <div className="dashboard-table">
            {opsRows.map(([area, count, status, action]) => (
              <div className="dashboard-row" key={area}><strong>{area}</strong><span>{count}</span><span>{status}</span><a href="#">{action}</a></div>
            ))}
          </div>
        </section>

        <section className="product-info-section">
          <p className="section-eyebrow">Finance and content</p>
          <h2>Admin snapshots</h2>
          <div className="three-grid">
            <div className="info-card"><h3>Pending payouts</h3><p>₹24,800 eligible after delivery and hold checks.</p></div>
            <div className="info-card"><h3>CMS tasks</h3><p>Homepage and category content can be managed without code.</p></div>
            <div className="info-card"><h3>Recent activity</h3><p>Audit feed should show approvals, publishes, payouts, and role changes.</p></div>
          </div>
        </section>
      </section>
      <SiteFooter />
    </main>
  )
}
