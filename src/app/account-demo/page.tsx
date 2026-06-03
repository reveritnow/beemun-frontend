import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

const orders = [
  { id: 'BEE-10021', date: '12 Jun 2026', status: 'Partially Shipped', total: 948, tracking: '1 of 2 maker shipments shipped' },
  { id: 'BEE-10009', date: '04 Jun 2026', status: 'Delivered', total: 599, tracking: 'Delivered · Review available' }
]

export default function AccountDemoPage() {
  return (
    <main>
      <SiteHeader />

      <section className="section-wrap dashboard-page">
        <div className="breadcrumb">Home → Account</div>
        <p className="section-eyebrow">Customer account</p>
        <h1>My BEEMUN</h1>
        <p className="section-copy">Track your orders, view maker shipments, manage addresses, request help, and review verified purchases from one calm account space.</p>

        <div className="dashboard-grid">
          <div className="dashboard-panel"><h3>Active Orders</h3><p>1</p></div>
          <div className="dashboard-panel"><h3>Delivered</h3><p>1</p></div>
          <div className="dashboard-panel"><h3>Wishlist</h3><p>4 products</p></div>
          <div className="dashboard-panel"><h3>Support</h3><p>No open tickets</p></div>
        </div>

        <section className="product-info-section">
          <div className="catalog-header"><div><p className="section-eyebrow">Orders</p><h2>My Orders</h2></div><span>Guest lookup also supported later</span></div>
          {orders.map((order) => (
            <div className="cart-item" key={order.id}>
              <div>
                <strong>Order {order.id}</strong>
                <p>{order.date} · {order.status} · {order.tracking}</p>
                <div className="variant-row"><button>View Order</button><button>Need Help?</button><button>Request Return</button></div>
              </div>
              <span>₹{order.total}</span>
            </div>
          ))}
        </section>

        <section className="product-info-section">
          <p className="section-eyebrow">Shipment tracking</p>
          <h2>Maker shipment cards</h2>
          <div className="three-grid">
            <div className="info-card"><h3>Earth Roots</h3><p>Cold Pressed Coconut Oil · Shipped · Delhivery tracking will appear here.</p></div>
            <div className="info-card"><h3>Bee Botanics</h3><p>Rose Face Balm · Preparing shipment · tracking not available yet.</p></div>
            <div className="info-card"><h3>BEEMUN support</h3><p>If tracking is delayed, customer support stays inside BEEMUN.</p></div>
          </div>
        </section>

        <section className="product-info-section">
          <p className="section-eyebrow">Account shortcuts</p>
          <h2>Manage your BEEMUN account</h2>
          <div className="three-grid">
            <div className="info-card"><h3>Addresses</h3><p>Add, edit, and choose default delivery addresses for faster checkout.</p></div>
            <div className="info-card"><h3>Wishlist</h3><p>Save ZPS 100 products you want to revisit later.</p></div>
            <div className="info-card"><h3>Verified Reviews</h3><p>Review products after delivery. Reviews are linked to actual orders.</p></div>
          </div>
        </section>

        <section className="product-info-section">
          <p className="section-eyebrow">Guest orders</p>
          <h2>Order lookup for guest checkout</h2>
          <p>Guest customers should access orders using order number plus email or a secure email link. Order number alone should never reveal order details.</p>
        </section>
      </section>

      <SiteFooter />
    </main>
  )
}
