import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default function AccountPageView() {
  return (
    <main>
      <SiteHeader />
      <section className="section-wrap dashboard-page">
        <div className="breadcrumb">Home → Account</div>
        <p className="section-eyebrow">Customer account</p>
        <h1>My BEEMUN</h1>
        <p className="section-copy">A simple account area for orders, delivery updates, addresses, saved products, and reviews.</p>
        <div className="dashboard-grid"><div className="dashboard-panel"><h3>Active Orders</h3><p>1</p></div><div className="dashboard-panel"><h3>Delivered</h3><p>1</p></div><div className="dashboard-panel"><h3>Saved Products</h3><p>4</p></div><div className="dashboard-panel"><h3>Messages</h3><p>0 open</p></div></div>
        <section className="product-info-section"><h2>Recent order</h2><div className="cart-item"><div><strong>Order BEE-10021</strong><p>Partially shipped · delivery details appear here</p></div><span>₹948</span></div></section>
        <section className="product-info-section"><h2>Account shortcuts</h2><div className="three-grid"><div className="info-card"><h3>Addresses</h3><p>Manage delivery addresses.</p></div><div className="info-card"><h3>Saved products</h3><p>Revisit products later.</p></div><div className="info-card"><h3>Reviews</h3><p>Review delivered purchases.</p></div></div></section>
      </section>
      <SiteFooter />
    </main>
  )
}
