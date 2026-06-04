import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default function AdminOrdersView() {
  return (
    <main>
      <SiteHeader />
      <section className="section-wrap dashboard-page">
        <div className="breadcrumb">Home → Admin → Orders</div>
        <p className="section-eyebrow">Order operations</p>
        <h1>Admin Orders</h1>
        <p className="section-copy">View customer orders, seller fulfillment units, delivery status, and payment notes.</p>
        <div className="dashboard-grid"><div className="dashboard-panel"><h3>Today</h3><p>12</p></div><div className="dashboard-panel"><h3>Open</h3><p>8</p></div><div className="dashboard-panel"><h3>Delivery Notes</h3><p>3</p></div><div className="dashboard-panel"><h3>Payment Notes</h3><p>1</p></div></div>
        <section className="product-info-section"><h2>Order list</h2><div className="dashboard-table"><div className="dashboard-row"><strong>BEE-10021</strong><span>Paid</span><span>Partially shipped</span><a href="#">Open</a></div><div className="dashboard-row"><strong>BEE-10020</strong><span>Paid</span><span>Preparing</span><a href="#">Open</a></div></div></section>
      </section>
      <SiteFooter />
    </main>
  )
}
