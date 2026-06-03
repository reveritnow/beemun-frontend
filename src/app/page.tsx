import AnnouncementBar from '@/components/AnnouncementBar'
import SiteHeader from '@/components/SiteHeader'
import HeroSection from '@/components/HeroSection'
import TrustStrip from '@/components/TrustStrip'
import DifferenceCards from '@/components/DifferenceCards'
import CategoryGrid from '@/components/CategoryGrid'
import FeaturedProducts from '@/components/FeaturedProducts'
import HowZpsWorks from '@/components/HowZpsWorks'
import ZpsExplainer from '@/components/ZpsExplainer'
import IngredientDiscovery from '@/components/IngredientDiscovery'
import MeetMakers from '@/components/MeetMakers'
import CollectionsGrid from '@/components/CollectionsGrid'
import SellerCTA from '@/components/SellerCTA'
import SiteFooter from '@/components/SiteFooter'

export default function HomePage() {
  return (
    <main>
      <AnnouncementBar />
      <SiteHeader />
      <HeroSection />
      <TrustStrip />
      <DifferenceCards />
      <CategoryGrid />
      <FeaturedProducts />
      <HowZpsWorks />
      <ZpsExplainer />
      <IngredientDiscovery />
      <MeetMakers />
      <CollectionsGrid />
      <SellerCTA />
      <SiteFooter />
    </main>
  )
}
