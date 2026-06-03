import SiteHeader from '@/components/SiteHeader'
import HeroSection from '@/components/HeroSection'
import TrustStrip from '@/components/TrustStrip'
import CategoryGrid from '@/components/CategoryGrid'
import FeaturedProducts from '@/components/FeaturedProducts'
import ZpsExplainer from '@/components/ZpsExplainer'
import SellerCTA from '@/components/SellerCTA'
import SiteFooter from '@/components/SiteFooter'

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <TrustStrip />
      <CategoryGrid />
      <FeaturedProducts />
      <ZpsExplainer />
      <SellerCTA />
      <SiteFooter />
    </main>
  )
}
