const products = [
  {
    name: 'Cold Pressed Coconut Oil',
    brand: 'Earth Roots',
    price: '₹349',
    note: 'Single-ingredient oil',
  },
  {
    name: 'Rose Face Balm',
    brand: 'Petal & Soil',
    price: '₹599',
    note: 'Glass jar packaging',
  },
  {
    name: 'Hibiscus Hair Powder',
    brand: 'Root Rituals',
    price: '₹249',
    note: 'Full ingredient disclosure',
  },
]

export default function FeaturedProducts() {
  return (
    <section className="bg-[#f6efdF] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6f7f58]">Featured products</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1f2a1f] md:text-4xl">ZPS 100 products, curated first</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[#5f6b55]">
            Product cards will later connect to the BEEMUN catalog API. For now these placeholders define the premium storefront feel.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="overflow-hidden rounded-3xl border border-[#e2d5bb] bg-[#fffaf0] shadow-sm">
              <div className="h-64 bg-gradient-to-br from-[#ddd0ad] via-[#efe5c9] to-[#b9c6a3]" />
              <div className="p-6">
                <div className="mb-4 inline-flex rounded-full bg-[#e7efd9] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#4d6138]">ZPS 100</div>
                <h3 className="text-xl font-semibold text-[#1f2a1f]">{product.name}</h3>
                <p className="mt-2 text-sm text-[#6d765f]">by {product.brand}</p>
                <p className="mt-4 text-sm leading-6 text-[#5f6b55]">{product.note}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-lg font-semibold text-[#1f2a1f]">{product.price}</span>
                  <span className="text-sm font-semibold text-[#4d6138]">View product</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
