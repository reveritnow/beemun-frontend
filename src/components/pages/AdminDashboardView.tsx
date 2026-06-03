import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default function AdminDashboardView() {
  return (
    <main>
      <SiteHeader />
      <section className="section-wrap dashboard-page">
        <div className="breadcrumb">Home → Admin</div>
        <p className="section-eyebrow">BEEMUN operations</p>
        <h1>Admin Dashboard</h1>
        <p className="section-copy">Review sellers, products, orders, support, payouts, and CMS tasks from one place.</p>
        <div className="dashboard-grid"><div className="dashboard-panel"><h3>Seller Applications</h3><p>4</p></div><div className="dashboard-panel"><h3>Products Awaiting Review</h3><p>7</p></div><div className="dashboard-panel"><h3>Orders Today</h3><p>12</p></div><div className="dashboard-panel"><h3>Open Support</h3><p>6</p></div></div>
        <section className="product-info-section"><h2>Admin queues</h2><div className="three-grid"><div className="info-card"><h3>Seller review</h3><p>Check applications and approve seller access.</p></div><div className="info-card"><h3>Product review</h3><p>Check product data and ZPS readiness.</p></div><div className="info-card"><h3>Operations</h3><p>Review orders, support, content, and finance tasks.</p></div></div></section>
      </section>
      <SiteFooter />
    </main>
  )
}
