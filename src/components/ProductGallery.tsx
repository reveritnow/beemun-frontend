const thumbs = ['Product', 'Packaging', 'Label', 'Ingredient']

export default function ProductGallery() {
  return (
    <div className="product-gallery product-gallery-v2">
      <div className="product-photo-frame">
        <div className="product-photo-card">
          <div className="product-photo-badge">Main product photo</div>
          <div className="product-photo-object">
            <span>Earth Roots</span>
            <strong>Cold Pressed Coconut Oil</strong>
            <small>ZPS 100</small>
          </div>
        </div>
      </div>
      <div className="product-thumbs product-thumbs-v2">
        {thumbs.map((item) => (
          <button key={item} className="product-thumb product-thumb-v2">{item}</button>
        ))}
      </div>
    </div>
  )
}
