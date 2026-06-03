import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default function SellerDashboardView() {
  return (
    <main>
      <SiteHeader />
      <section className="section-wrap dashboard-page">
        <div className="breadcrumb">Home → Seller Dashboard</div>
        <p className="section-eyebrow">Maker portal</p>
        <h1>Seller Dashboard</h1>
        <p className="section-copy">Manage products, review status, orders, tracking, payouts, and seller updates.</p>
        <div className="dashboard-grid"><div className="dashboard-panel"><h3>Live Products</h3><p>10</p></div><div className="dashboard-panel"><h3>Under Review</h3><p>2</p></div><div className="dashboard-panel"><h3>New Orders</h3><p>3</p></div><div className="dashboard-panel"><h3>Pending Payout</h3><p>₹8,420</p></div></div>
        <section className="product-info-section"><h2>Action needed</h2><div className="three-grid"><div className="info-card"><h3>Product note</h3><p>One product needs packaging clarification.</p></div><div className="info-card"><h3>Tracking</h3><p>One order needs courier details.</p></div><div className="info-card"><h3>Profile</h3><p>Complete maker story and images.</p></div></div></section>
        <section className="product-info-section"><h2>Product status</h2><div className="dashboard-table"><div className="dashboard-row"><strong>Coconut Oil</strong><span>Live</span><span>ZPS 100</span><a href="/seller/products/new">Add Product</a></div><div className="dashboard-row"><strong>Herbal Powder</strong><span>Needs changes</span><span>Packaging note</span><a href="#">View</a></div></div></section>
      </section>
      <SiteFooter />
    </main>
  )
}
