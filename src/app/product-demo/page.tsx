import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import ProductGallery from '@/components/ProductGallery'
import ZpsTrustCard from '@/components/ZpsTrustCard'
import IngredientDisclosure from '@/components/IngredientDisclosure'
import PackagingDisclosure from '@/components/PackagingDisclosure'
import BrandStoryCard from '@/components/BrandStoryCard'
import FeaturedProducts from '@/components/FeaturedProducts'

export default function ProductDemoPage() {
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
            <p>A single-ingredient coconut oil reviewed for full ingredient disclosure and plastic-free packaging.</p>
            <div className="product-price">₹349</div>
            <p className="stock-note">In stock • Ships directly from the maker</p>
            <div className="variant-row"><button>100ml</button><button>250ml</button><button>500ml</button></div>
            <a className="btn-primary" href="/cart-demo">Add to Cart</a>
            <ZpsTrustCard />
          </aside>
        </div>
        <div className="product-detail-grid"><IngredientDisclosure /><PackagingDisclosure /></div>
        <section className="product-info-section"><h2>Why this product passed ZPS</h2><ul><li>No synthetic fragrance</li><li>No synthetic preservatives</li><li>Full ingredient disclosure provided</li><li>Plastic-free packaging evidence accepted</li></ul></section>
        <section className="product-info-section"><h2>How to use</h2><p>Apply a small amount to clean skin or hair as part of your daily care ritual. Store in a cool, dry place.</p></section>
        <section className="product-info-section"><h2>Certifications & claims</h2><p><strong>BEEMUN Verified:</strong> ZPS 100. Other claims are seller-declared or supported by third-party documents.</p></section>
        <BrandStoryCard />
        <section className="product-info-section"><h2>Shipping & returns</h2><p>Ships directly from the maker. Return requests are reviewed for damaged, wrong, missing, or defective products.</p></section>
      </section>
      <FeaturedProducts />
      <SiteFooter />
    </main>
  )
}
