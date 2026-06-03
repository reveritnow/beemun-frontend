import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default function OrderDetailDemoPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section-wrap dashboard-page">
        <div className="breadcrumb">Home → Account → Order BEE-10021</div>
        <p className="section-eyebrow">Customer order detail</p>
        <h1>Order BEE-10021</h1>
        <div className="dashboard-grid"><div className="dashboard-panel"><h3>Payment</h3><p>Paid</p></div><div className="dashboard-panel"><h3>Status</h3><p>Partially Shipped</p></div><div className="dashboard-panel"><h3>Shipments</h3><p>2</p></div><div className="dashboard-panel"><h3>Total</h3><p>₹948</p></div></div>
        <section className="product-info-section"><h2>Shipment cards</h2><div className="three-grid"><div className="info-card"><h3>Earth Roots</h3><p>Shipped • Tracking available</p></div><div className="info-card"><h3>Bee Botanics</h3><p>Preparing shipment</p></div><div className="info-card"><h3>Need help?</h3><p>Open support or request return from this order.</p></div></div></section>
      </section>
      <SiteFooter />
    </main>
  )
}
