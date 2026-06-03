import ProductGallery from '@/components/ProductGallery'
import ZpsTrustCard from '@/components/ZpsTrustCard'
import IngredientDisclosure from '@/components/IngredientDisclosure'
import PackagingDisclosure from '@/components/PackagingDisclosure'
import BrandStoryCard from '@/components/BrandStoryCard'

export default function ProductDemoPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-10 lg:grid-cols-2">
        <ProductGallery />

        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-[#6f7f58]">Earth Roots</p>
          <h1 className="text-4xl font-semibold text-[#1f2a1f]">Cold Pressed Coconut Oil</h1>
          <p className="text-[#5f6b55]">
            A single-ingredient coconut oil reviewed for full ingredient disclosure and plastic-free packaging.
          </p>
          <div className="text-3xl font-semibold text-[#1f2a1f]">₹349</div>
          <button className="rounded-full bg-[#31452b] px-8 py-4 text-white">Add to Cart</button>
          <ZpsTrustCard />
        </div>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <IngredientDisclosure />
        <PackagingDisclosure />
      </div>

      <div className="mt-6">
        <BrandStoryCard />
      </div>
    </main>
  )
}
