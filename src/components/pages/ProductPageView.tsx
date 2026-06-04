import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import ProductGallery from '@/components/ProductGallery'
import IngredientDisclosure from '@/components/IngredientDisclosure'
import PackagingDisclosure from '@/components/PackagingDisclosure'
import BrandStoryCard from '@/components/BrandStoryCard'
import FeaturedProducts from '@/components/FeaturedProducts'

const specs = [
  ['Category', 'Oils & Butters'],
  ['Maker', 'Earth Roots'],
  ['Origin', 'Kerala, India'],
  ['Size options', '100ml, 250ml, 500ml'],
  ['Dispatch', 'Ships from maker'],
  ['Review', 'ZPS 100 listed'],
]

const trust = [
  ['Zero Plastic', 'Packaging details reviewed before listing.'],
  ['Zero Synthetic', 'No synthetic fragrance, colour, or hidden additive.'],
  ['Full Disclosure', 'Ingredients and packaging are visible before checkout.'],
]

const passed = [
  ['Single ingredient', 'Presented with one clear ingredient profile.'],
  ['Packaging reviewed', 'Primary and shipping packaging notes are disclosed.'],
  ['Maker visible', 'Brand story and maker details are connected.'],
]

const faqs = [
  ['Is this product plastic-free?', 'BEEMUN shows packaging disclosure and review notes before purchase.'],
  ['Who ships this product?', 'The product ships directly from the maker and tracking appears inside your BEEMUN order.'],
  ['Can I see the full ingredients?', 'Yes. Ingredient information is shown clearly before checkout.'],
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
            <p>A single-ingredient coconut oil reviewed for ingredient clarity, packaging transparency, and BEEMUN trust standards.</p>
            <div className="product-price">₹349</div>
            <p className="stock-note">In stock • Ships from maker • Tracking inside BEEMUN</p>
            <section className="product-info-section">
              <h2>Choose size</h2>
              <div className="variant-row"><button>100ml</button><button>250ml</button><button>500ml</button></div>
            </section>
            <section className="product-info-section">
              <h2>Quantity</h2>
              <div className="variant-row quantity-row"><button>-</button><button>1</button><button>+</button></div>
            </section>
            <div className="product-actions"><a className="btn-primary" href="/cart">Add to Cart</a><a className="btn-secondary" href="/checkout">Buy Now</a></div>
            <a className="product-maker-link" href="/brand/earth-roots">View Maker</a>
          </aside>
        </div>

        <section className="product-info-section"><p className="section-eyebrow">BEEMUN trust</p><h2>Clear before you buy</h2><div className="three-grid">{trust.map(([title, text]) => <div className="info-card" key={title}><h3>{title}</h3><p>{text}</p></div>)}</div></section>
        <section className="product-info-section"><p className="section-eyebrow">Purity snapshot</p><h2>Why this product passed ZPS</h2><div className="three-grid">{passed.map(([title, text]) => <div className="info-card" key={title}><h3>{title}</h3><p>{text}</p></div>)}</div></section>
        <div className="product-detail-grid"><IngredientDisclosure /><PackagingDisclosure /></div>
        <section className="product-info-section"><p className="section-eyebrow">Details</p><h2>Product specifications</h2><div className="three-grid">{specs.map(([label, value]) => <div className="info-card" key={label}><h3>{label}</h3><p>{value}</p></div>)}</div></section>
        <section className="product-info-section"><p className="section-eyebrow">How to use</p><h2>Simple daily care</h2><p>Use a small amount on clean skin or hair. Store in a cool, dry place away from direct sunlight.</p></section>
        <section className="product-info-section"><p className="section-eyebrow">Maker story</p><h2>About Earth Roots</h2><BrandStoryCard /></section>
        <section className="product-info-section"><p className="section-eyebrow">Questions</p><h2>Product FAQs</h2><div className="dashboard-table">{faqs.map(([question, answer]) => <div className="dashboard-row" key={question}><strong>{question}</strong><span>{answer}</span></div>)}</div></section>
      </section>
      <FeaturedProducts />
      <SiteFooter />
    </main>
  )
}
