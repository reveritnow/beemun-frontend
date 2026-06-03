import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export default function AdminCmsDemoPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section-wrap dashboard-page">
        <div className="breadcrumb">Home → Admin → CMS</div>
        <p className="section-eyebrow">Content management</p>
        <h1>CMS Dashboard</h1>
        <p className="section-copy">Manage homepage content, categories, collections, FAQs, policies, featured products, makers, and SEO without code changes.</p>

        <div className="dashboard-grid">
          <div className="dashboard-panel"><h3>Homepage</h3><p>Published</p></div>
          <div className="dashboard-panel"><h3>Collections</h3><p>5</p></div>
          <div className="dashboard-panel"><h3>Draft Pages</h3><p>2</p></div>
          <div className="dashboard-panel"><h3>SEO Alerts</h3><p>1</p></div>
        </div>

        <section className="product-info-section">
          <h2>CMS Areas</h2>
          <div className="three-grid">
            <div className="info-card"><h3>Homepage</h3><p>Hero, trust sections, categories, featured products, makers, and CTAs.</p></div>
            <div className="info-card"><h3>Content Pages</h3><p>About, ZPS, FAQ, privacy, terms, shipping, and return pages.</p></div>
            <div className="info-card"><h3>Collections & SEO</h3><p>Editorial collections, metadata, and discoverability controls.</p></div>
          </div>
        </section>
      </section>
      <SiteFooter />
    </main>
  )
}
