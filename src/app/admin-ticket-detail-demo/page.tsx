import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default function AdminTicketDetailDemoPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section-wrap dashboard-page">
        <div className="breadcrumb">Home → Admin → Support → Ticket</div>
        <p className="section-eyebrow">Support workspace</p>
        <h1>Ticket SUP-1001</h1>
        <div className="dashboard-grid"><div className="dashboard-panel"><h3>Priority</h3><p>High</p></div><div className="dashboard-panel"><h3>Status</h3><p>Waiting Seller</p></div><div className="dashboard-panel"><h3>Category</h3><p>Damaged Item</p></div><div className="dashboard-panel"><h3>Linked Order</h3><p>BEE-10021</p></div></div>
        <section className="product-info-section"><h2>Ticket tools</h2><div className="three-grid"><div className="info-card"><h3>Customer thread</h3><p>Customer-visible messages and attachments.</p></div><div className="info-card"><h3>Seller request</h3><p>Request packaging or fulfillment evidence.</p></div><div className="info-card"><h3>Internal notes</h3><p>Private admin notes never visible to customers.</p></div></div></section>
      </section>
      <SiteFooter />
    </main>
  )
}
