import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default function AdminOrderDetailDemoPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section-wrap dashboard-page">
        <div className="breadcrumb">Home → Admin → Orders → BEE-10021</div>
        <p className="section-eyebrow">Admin order workspace</p>
        <h1>Order BEE-10021</h1>
        <p className="section-copy">Admin sees payment, SellerOrders, tracking, returns, support, and payout implications from one workspace.</p>
        <div className="three-grid"><div className="info-card"><h3>Payment</h3><p>Verified and recorded.</p></div><div className="info-card"><h3>SellerOrders</h3><p>2 linked fulfillment units.</p></div><div className="info-card"><h3>Support</h3><p>0 open tickets linked.</p></div></div>
      </section>
      <SiteFooter />
    </main>
  )
}
