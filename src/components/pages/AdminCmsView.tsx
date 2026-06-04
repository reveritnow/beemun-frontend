import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default function AdminCmsView() {
  return (
    <main>
      <SiteHeader />
      <section className="section-wrap dashboard-page">
        <div className="breadcrumb">Home → Admin → CMS</div>
        <p className="section-eyebrow">Content area</p>
        <h1>Admin CMS</h1>
        <p className="section-copy">Manage homepage blocks, categories, collections, FAQs, policies, and SEO fields.</p>
        <div className="dashboard-grid"><div className="dashboard-panel"><h3>Homepage</h3><p>Live</p></div><div className="dashboard-panel"><h3>Collections</h3><p>5</p></div><div className="dashboard-panel"><h3>Drafts</h3><p>2</p></div><div className="dashboard-panel"><h3>SEO Notes</h3><p>1</p></div></div>
        <section className="product-info-section"><h2>CMS areas</h2><div className="three-grid"><div className="info-card"><h3>Homepage</h3><p>Hero, categories, products, makers, and calls to action.</p></div><div className="info-card"><h3>Pages</h3><p>About, FAQ, policies, shipping, and return pages.</p></div><div className="info-card"><h3>SEO</h3><p>Metadata and collection descriptions.</p></div></div></section>
      </section>
      <SiteFooter />
    </main>
  )
}
