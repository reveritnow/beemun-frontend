import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

const productRows = [
  ['Cold Pressed Coconut Oil', 'Live', 'ZPS 100', 'Update stock'],
  ['Herbal Hair Powder', 'Changes requested', 'Needs packaging note', 'View notes'],
  ['Rose Face Balm', 'Under review', 'Awaiting BEEMUN', 'View status']
]

const orderRows = [
  ['SO-2101', 'New order', '2 items', 'Add tracking'],
  ['SO-2098', 'Processing', '1 item', 'Mark shipped'],
  ['SO-2077', 'Shipped', 'Tracking added', 'View order']
]

export default function SellerDashboardDemoPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section-wrap dashboard-page">
        <div className="breadcrumb">Home → Seller Dashboard</div>
        <p className="section-eyebrow">Approved maker portal</p>
        <h1>Seller Dashboard</h1>
        <p className="section-copy">A calm operating center for product submissions, ZPS review status, seller orders, inventory, tracking, payout visibility, and support.</p>

        <div className="dashboard-grid">
          <div className="dashboard-panel"><h3>Live Products</h3><p>10</p></div>
          <div className="dashboard-panel"><h3>Under Review</h3><p>2</p></div>
          <div className="dashboard-panel"><h3>New Orders</h3><p>3</p></div>
          <div className="dashboard-panel"><h3>Pending Payout</h3><p>₹8,420</p></div>
        </div>

        <section className="product-info-section">
          <p className="section-eyebrow">Action required</p>
          <h2>What needs your attention</h2>
          <div className="three-grid">
            <div className="info-card"><h3>Packaging note needed</h3><p>Herbal Hair Powder needs clearer shipping material disclosure before ZPS approval.</p></div>
            <div className="info-card"><h3>Tracking pending</h3><p>One new seller order needs courier and tracking details after dispatch.</p></div>
            <div className="info-card"><h3>Profile completion</h3><p>Add founder photo and ingredient approach to improve your public maker page.</p></div>
          </div>
        </section>

        <section className="product-info-section">
          <div className="catalog-header"><div><p className="section-eyebrow">Products</p><h2>Product review status</h2></div><a className="btn-secondary" href="/seller-product-demo">Add Product</a></div>
          <div className="dashboard-table">
            {productRows.map(([name, status, zps, action]) => (
              <div className="dashboard-row" key={name}><strong>{name}</strong><span>{status}</span><span>{zps}</span><a href="#">{action}</a></div>
            ))}
          </div>
        </section>

        <section className="product-info-section">
          <div className="catalog-header"><div><p className="section-eyebrow">Fulfillment</p><h2>Orders needing seller action</h2></div><span>Seller sees only own SellerOrders</span></div>
          <div className="dashboard-table">
            {orderRows.map(([id, status, items, action]) => (
              <div className="dashboard-row" key={id}><strong>{id}</strong><span>{status}</span><span>{items}</span><a href="#">{action}</a></div>
            ))}
          </div>
        </section>

        <section className="product-info-section">
          <p className="section-eyebrow">Payouts & support</p>
          <h2>Seller operations</h2>
          <div className="three-grid">
            <div className="info-card"><h3>Payout snapshot</h3><p>Eligible payouts appear after delivery and hold checks. Paid manually in v1.</p></div>
            <div className="info-card"><h3>Notifications</h3><p>Review notes, new orders, payout updates, and support requests appear here.</p></div>
            <div className="info-card"><h3>Guidelines</h3><p>Read ZPS packaging, ingredient disclosure, and product copy rules before submitting.</p></div>
          </div>
        </section>
      </section>
      <SiteFooter />
    </main>
  )
}
