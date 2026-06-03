import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default function SellerDashboardDemoPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section-wrap">
        <h1>Seller Dashboard</h1>
        <div className="four-grid">
          <div className="info-card"><h3>Products</h3><p>12</p></div>
          <div className="info-card"><h3>Orders</h3><p>58</p></div>
          <div className="info-card"><h3>Pending Reviews</h3><p>2</p></div>
          <div className="info-card"><h3>ZPS Approved</h3><p>10</p></div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
