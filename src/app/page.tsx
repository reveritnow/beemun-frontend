import HeroSection from '@/components/HeroSection'
import TrustStrip from '@/components/TrustStrip'
import CategoryGrid from '@/components/CategoryGrid'
import FeaturedProducts from '@/components/FeaturedProducts'
import SellerCTA from '@/components/SellerCTA'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustStrip />
      <CategoryGrid />
      <FeaturedProducts />
      <SellerCTA />
    </main>
  )
}
