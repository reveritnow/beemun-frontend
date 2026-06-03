import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

const orders = [
  ['BEE-10021', 'Paid', 'Partially shipped', '2 sellers', 'Open'],
  ['BEE-10020', 'Paid', 'Missing tracking', '1 seller', 'Review'],
  ['BEE-10018', 'Refund review', 'Waiting customer', '1 seller', 'Support']
]

const sellerOrders = [
  ['SO-2101', 'Earth Roots', 'New', 'Tracking needed'],
  ['SO-2102', 'Bee Botanics', 'Shipped', 'Tracking added'],
  ['SO-2099', 'Forest Pure', 'Delivered', 'Payout hold check']
]

export default function AdminOrdersDemoPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section-wrap dashboard-page">
        <div className="breadcrumb">Home → Admin → Orders</div>
        <p className="section-eyebrow">Order operations</p>
        <h1>Admin Orders</h1>
        <p className="section-copy">Admin sees parent customer orders and seller-level fulfillment units. Customers see one BEEMUN order while sellers see only their own SellerOrders.</p>

        <div className="dashboard-grid">
          <div className="dashboard-panel"><h3>Orders Today</h3><p>12</p></div>
          <div className="dashboard-panel"><h3>Missing Tracking</h3><p>3</p></div>
          <div className="dashboard-panel"><h3>Return Review</h3><p>2</p></div>
          <div className="dashboard-panel"><h3>Payout Holds</h3><p>1</p></div>
        </div>

        <section className="product-info-section">
          <div className="catalog-header"><div><p className="section-eyebrow">Parent orders</p><h2>Customer-facing orders</h2></div><span>One BEEMUN order per checkout</span></div>
          <div className="dashboard-table">
            {orders.map(([id, payment, status, sellers, action]) => <div className="dashboard-row" key={id}><strong>{id}</strong><span>{payment}</span><span>{status} · {sellers}</span><a href="#">{action}</a></div>)}
          </div>
        </section>

        <section className="product-info-section">
          <div className="catalog-header"><div><p className="section-eyebrow">SellerOrders</p><h2>Seller fulfillment units</h2></div><span>Split after verified payment</span></div>
          <div className="dashboard-table">
            {sellerOrders.map(([id, seller, status, note]) => <div className="dashboard-row" key={id}><strong>{id}</strong><span>{seller}</span><span>{status}</span><a href="#">{note}</a></div>)}
          </div>
        </section>

        <section className="product-info-section">
          <p className="section-eyebrow">Order detail modules</p>
          <h2>What admin needs on every order</h2>
          <div className="three-grid">
            <div className="info-card"><h3>Payment summary</h3><p>Gateway status, payment verification, refund records, and customer total.</p></div>
            <div className="info-card"><h3>Shipment cards</h3><p>Each SellerOrder has courier, tracking, shipped date, delivery state, and issue flags.</p></div>
            <div className="info-card"><h3>Support links</h3><p>Order issues, returns, refunds, and payout holds should be connected.</p></div>
          </div>
        </section>
      </section>
      <SiteFooter />
    </main>
  )
}
