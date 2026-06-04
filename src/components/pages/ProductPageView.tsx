import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import ProductGallery from '@/components/ProductGallery'
import ZpsTrustCard from '@/components/ZpsTrustCard'
import IngredientDisclosure from '@/components/IngredientDisclosure'
import PackagingDisclosure from '@/components/PackagingDisclosure'
import BrandStoryCard from '@/components/BrandStoryCard'
import FeaturedProducts from '@/components/FeaturedProducts'

const specs = [
  ['Category', 'Oils & Butters'],
  ['Maker', 'Earth Roots'],
  ['Origin', 'Kerala, India'],
  ['Variants', '100ml, 250ml, 500ml'],
  ['Dispatch', 'Ships from maker'],
  ['Review Status', 'ZPS 100 listed'],
]

const faqs = [
  ['Is this product plastic-free?', 'The product page shows packaging disclosure and BEEMUN review notes before purchase.'],
  ['Who ships this product?', 'The product ships directly from the maker and tracking appears inside your BEEMUN order.'],
  ['Can I see the full ingredients?', 'Yes. Ingredient information is shown clearly before checkout.'],
  ['Can I return this product?', 'Return requests can be raised from the order detail page for damaged, wrong, missing, or eligible issue cases.'],
]

const highlights = [
  ['Full ingredient view', 'Ingredient details are visible before checkout, not hidden after purchase.'],
  ['Packaging clarity', 'Product and shipping packaging notes are shown for customer confidence.'],
  ['Maker visibility', 'The maker profile is connected so customers know who made the product.'],
]

export default function ProductPageView() {
  return (
    <main>
      <SiteHeader />
      <section className="product-page">
        <div className="breadcrumb">Home → Skincare → Oils → Cold Pressed Coconut Oil</div>
        <div className="product-layout">
          <ProductGallery />
          <aside className="product-panel">
            <span className="badge">ZPS 100</span>
            <p className="section-eyebrow">Earth Roots</p>
            <h1>Cold Pressed Coconut Oil</h1>
            <p>A single-ingredient oil reviewed for ingredient disclosure, packaging transparency, and purity-first product presentation.</p>
            <div className="product-price">₹349</div>
            <p className="stock-note">In stock • Ships from maker • Tracking inside BEEMUN</p>

            <section className="product-info-section">
              <h2>Choose size</h2>
              <div className="variant-row"><button>100ml</button><button>250ml</button><button>500ml</button></div>
            </section>

            <section className="product-info-section">
              <h2>Quantity</h2>
              <div className="variant-row"><button>-</button><button>1</button><button>+</button></div>
            </section>

            <div className="hero-actions"><a className="btn-primary" href="/cart">Add to Cart</a><a className="btn-secondary" href="/checkout">Buy Now</a></div>
            <a className="btn-secondary" href="/brand/earth-roots">View Maker</a>

            <div className="dashboard-table">
              <div className="dashboard-row"><strong>Delivery</strong><span>Ships after maker confirmation</span></div>
              <div className="dashboard-row"><strong>Tracking</strong><span>Available inside your BEEMUN account</span></div>
              <div className="dashboard-row"><strong>Support</strong><span>Order help connected to your order page</span></div>
            </div>
            <ZpsTrustCard />
          </aside>
        </div>

        <section className="product-info-section"><p className="section-eyebrow">Why customers can trust this listing</p><h2>Clear before you buy</h2><div className="three-grid">{highlights.map(([title, text]) => <div className="info-card" key={title}><h3>{title}</h3><p>{text}</p></div>)}</div></section>

        <section className="product-info-section"><p className="section-eyebrow">Purity summary</p><h2>Why this product is on BEEMUN</h2><div className="three-grid"><div className="info-card"><h3>Single ingredient</h3><p>The product is presented with a clear and simple ingredient profile.</p></div><div className="info-card"><h3>Packaging reviewed</h3><p>Product and shipping packaging details are part of the review flow.</p></div><div className="info-card"><h3>Transparent maker</h3><p>Brand story and maker details are shown before purchase.</p></div></div></section>

        <div className="product-detail-grid"><IngredientDisclosure /><PackagingDisclosure /></div>

        <section className="product-info-section"><p className="section-eyebrow">Details</p><h2>Product specifications</h2><div className="three-grid">{specs.map(([label, value]) => <div className="info-card" key={label}><h3>{label}</h3><p>{value}</p></div>)}</div></section>

        <section className="product-info-section"><p className="section-eyebrow">Usage</p><h2>How to use</h2><p>Apply a small amount to clean skin or hair as part of your daily care ritual. Store in a cool, dry place away from direct sunlight.</p></section>

        <section className="product-info-section"><p className="section-eyebrow">Delivery and support</p><h2>Shipping, tracking, and returns</h2><div className="three-grid"><div className="info-card"><h3>Ships from maker</h3><p>The maker packs and dispatches the product after order confirmation.</p></div><div className="info-card"><h3>Tracking in account</h3><p>Courier details appear inside your BEEMUN order page when available.</p></div><div className="info-card"><h3>Return request</h3><p>Customers can raise eligible order concerns from the order detail page.</p></div></div></section>

        <section className="product-info-section"><p className="section-eyebrow">Customer confidence</p><h2>Reviews and ratings</h2><div className="three-grid"><div className="info-card"><h3>Verified purchase reviews</h3><p>Reviews should come from customers who completed an order.</p></div><div className="info-card"><h3>Product experience</h3><p>Customers can share texture, packaging, delivery, and usage feedback.</p></div><div className="info-card"><h3>Review moderation</h3><p>BEEMUN can moderate spam, abuse, or irrelevant review content.</p></div></div></section>

        <section className="product-info-section"><h2>Maker story</h2><BrandStoryCard /></section>

        <section className="product-info-section"><p className="section-eyebrow">Questions</p><h2>Product FAQs</h2><div className="dashboard-table">{faqs.map(([question, answer]) => <div className="dashboard-row" key={question}><strong>{question}</strong><span>{answer}</span></div>)}</div></section>
      </section>
      <FeaturedProducts />
      <SiteFooter />
    </main>
  )
}
