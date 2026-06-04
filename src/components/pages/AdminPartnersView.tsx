import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default function AdminPartnersView() {
  return (
    <main>
      <SiteHeader />
      <section className="section-wrap dashboard-page">
        <div className="breadcrumb">Home → Admin → Partners</div>
        <p className="section-eyebrow">Partner area</p>
        <h1>Partner Area</h1>
        <p className="section-copy">Simple admin page for partner entries and status.</p>
        <div className="dashboard-grid"><div className="dashboard-panel"><h3>New</h3><p>4</p></div><div className="dashboard-panel"><h3>Waiting</h3><p>2</p></div><div className="dashboard-panel"><h3>Done</h3><p>8</p></div><div className="dashboard-panel"><h3>Notes</h3><p>1</p></div></div>
      </section>
      <SiteFooter />
    </main>
  )
}
