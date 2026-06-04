import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default function AdminSupportView() {
  return (
    <main>
      <SiteHeader />
      <section className="section-wrap dashboard-page">
        <div className="breadcrumb">Home → Admin → Help</div>
        <p className="section-eyebrow">Help queue</p>
        <h1>Admin Help</h1>
        <p className="section-copy">A simple admin area for help requests and message follow up.</p>
        <div className="dashboard-grid"><div className="dashboard-panel"><h3>Open</h3><p>6</p></div><div className="dashboard-panel"><h3>Priority</h3><p>1</p></div><div className="dashboard-panel"><h3>Waiting</h3><p>2</p></div><div className="dashboard-panel"><h3>Done Today</h3><p>4</p></div></div>
        <section className="product-info-section"><h2>List</h2><div className="dashboard-table"><div className="dashboard-row"><strong>HLP-1001</strong><span>Order</span><span>Open</span><a href="#">View</a></div><div className="dashboard-row"><strong>HLP-1002</strong><span>Product</span><span>Waiting</span><a href="#">View</a></div></div></section>
      </section>
      <SiteFooter />
    </main>
  )
}
