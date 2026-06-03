export default function ProductGallery() {
  return (
    <div className="space-y-4">
      <div className="aspect-square rounded-[32px] bg-gradient-to-br from-[#d8c7a1] via-[#f3ead4] to-[#aebd94]" />
      <div className="grid grid-cols-4 gap-3">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="aspect-square rounded-2xl border border-[#e2d5bb] bg-[#fffaf0]" />
        ))}
      </div>
    </div>
  )
}
