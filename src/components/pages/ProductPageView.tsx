import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import ProductGallery from '@/components/ProductGallery'
import ZpsTrustCard from '@/components/ZpsTrustCard'
import IngredientDisclosure from '@/components/IngredientDisclosure'
import PackagingDisclosure from '@/components/PackagingDisclosure'
import BrandStoryCard from '@/components/BrandStoryCard'
import FeaturedProducts from '@/components/FeaturedProducts'

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
            <p>A single-ingredient oil reviewed for ingredient disclosure and packaging transparency.</p>
            <div className="product-price">₹349</div>
            <p className="stock-note">In stock • Ships from maker • Tracking inside BEEMUN</p>
            <div className="variant-row"><button>100ml</button><button>250ml</button><button>500ml</button></div>
            <a className="btn-primary" href="/cart">Add to Cart</a>
            <ZpsTrustCard />
          </aside>
        </div>
        <div className="product-detail-grid"><IngredientDisclosure /><PackagingDisclosure /></div>
        <section className="product-info-section"><h2>Why this product passed ZPS</h2><ul><li>No synthetic fragrance</li><li>Full ingredient disclosure</li><li>Packaging evidence reviewed</li></ul></section>
        <section className="product-info-section"><h2>Maker story</h2><BrandStoryCard /></section>
      </section>
      <FeaturedProducts />
      <SiteFooter />
    </main>
  )
}
