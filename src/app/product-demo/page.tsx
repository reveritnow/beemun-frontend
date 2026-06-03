import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import ProductGallery from '@/components/ProductGallery'
import ZpsTrustCard from '@/components/ZpsTrustCard'
import IngredientDisclosure from '@/components/IngredientDisclosure'
import PackagingDisclosure from '@/components/PackagingDisclosure'
import BrandStoryCard from '@/components/BrandStoryCard'
import FeaturedProducts from '@/components/FeaturedProducts'

const trustPoints = ['Zero Plastic', 'Zero Synthetic', 'Full Disclosure', 'Packaging Reviewed']
const reviewChecks = ['No synthetic fragrance', 'No synthetic preservatives', 'Single ingredient disclosed', 'Plastic-free packaging evidence accepted']
const specs = [
  ['Category', 'Oils & Butters'],
  ['Maker', 'Earth Roots'],
  ['Origin', 'Kerala, India'],
  ['Variants', '100ml, 250ml, 500ml'],
  ['Dispatch', 'Ships directly from maker'],
  ['Review status', 'ZPS 100 approved']
]

export default function ProductDemoPage() {
  return (
    <main>
      <SiteHeader />
      <section className="product-page">
        <div className="breadcrumb">Home → Skincare → Oils & Butters → Cold Pressed Coconut Oil</div>

        <div className="product-layout">
          <ProductGallery />
          <aside className="product-panel">
            <span className="badge">ZPS 100</span>
            <p className="section-eyebrow">Earth Roots</p>
            <h1>Cold Pressed Coconut Oil</h1>
            <p>A single-ingredient coconut oil reviewed for full ingredient disclosure, zero synthetic additives, and plastic-free packaging.</p>
            <div className="product-price">₹349</div>
            <p className="stock-note">In stock • Ships directly from the maker • Tracking inside BEEMUN</p>
            <div className="variant-row"><button>100ml</button><button>250ml</button><button>500ml</button></div>
            <a className="btn-primary" href="/cart-demo">Add to Cart</a>
            <a className="btn-secondary" href="/brand-demo" style={{ marginLeft: 12 }}>View Maker</a>
            <ZpsTrustCard />
          </aside>
        </div>

        <section className="product-info-section">
          <p className="section-eyebrow">Purity snapshot</p>
          <h2>What BEEMUN verified before listing</h2>
          <div className="four-grid">
            {trustPoints.map((point) => <div className="info-card" key={point}><h3>{point}</h3><p>This product carries the BEEMUN review signal for this requirement.</p></div>)}
          </div>
        </section>

        <div className="product-detail-grid"><IngredientDisclosure /><PackagingDisclosure /></div>

        <section className="product-info-section">
          <p className="section-eyebrow">ZPS review summary</p>
          <h2>Why this product passed ZPS</h2>
          <ul>{reviewChecks.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className="product-info-section">
          <p className="section-eyebrow">Product details</p>
          <h2>Specifications</h2>
          <div className="three-grid">
            {specs.map(([label, value]) => <div className="info-card" key={label}><h3>{label}</h3><p>{value}</p></div>)}
          </div>
        </section>

        <section className="product-info-section">
          <h2>How to use</h2>
          <p>Apply a small amount to clean skin or hair as part of your daily care ritual. Store in a cool, dry place away from direct sunlight.</p>
        </section>

        <section className="product-info-section">
          <h2>Certifications & claims</h2>
          <p><strong>BEEMUN Verified:</strong> ZPS 100. Other claims are seller-declared or supported by third-party documents and should not be read as BEEMUN certification unless clearly marked.</p>
        </section>

        <BrandStoryCard />

        <section className="product-info-section">
          <h2>Shipping, tracking & returns</h2>
          <p>Ships directly from the maker. Once the maker adds courier details, tracking appears inside your BEEMUN order page. Return requests are reviewed for damaged, wrong, missing, or defective products.</p>
        </section>

        <section className="product-info-section">
          <p className="section-eyebrow">Customer confidence</p>
          <h2>Reviews will be verified-purchase only</h2>
          <p>BEEMUN reviews should come from customers who actually purchased the product. Reviews are moderated before public display.</p>
          <div className="three-grid">
            <div className="info-card"><h3>Verified purchase</h3><p>Only customers with delivered orders can review.</p></div>
            <div className="info-card"><h3>Moderated</h3><p>Reviews are checked before appearing publicly.</p></div>
            <div className="info-card"><h3>Product-linked</h3><p>Reviews stay connected to the exact product ordered.</p></div>
          </div>
        </section>

        <section className="product-info-section">
          <p className="section-eyebrow">Need help choosing?</p>
          <h2>Product questions</h2>
          <p>For v1, customer questions should go through BEEMUN support or moderation instead of direct customer-seller chat.</p>
        </section>
      </section>
      <FeaturedProducts />
      <SiteFooter />
    </main>
  )
}
