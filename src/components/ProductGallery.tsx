const thumbs = ['Main', 'Pack', 'Texture', 'Label']

export default function ProductGallery() {
  return (
    <div className="product-gallery">
      <div className="product-main-image">
        <div className="product-jar-visual">
          <span>BEEMUN</span>
          <strong>Cold Pressed<br />Coconut Oil</strong>
          <small>Earth Roots · ZPS 100</small>
        </div>
      </div>
      <div className="product-thumbs">
        {thumbs.map((item) => (
          <button key={item} className="product-thumb">{item}</button>
        ))}
      </div>
    </div>
  )
}
