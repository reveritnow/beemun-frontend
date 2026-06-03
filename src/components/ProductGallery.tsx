export default function ProductGallery() {
  return (
    <div className="product-gallery">
      <div className="product-main-image" />
      <div className="product-thumbs">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="product-thumb" />
        ))}
      </div>
    </div>
  )
}
