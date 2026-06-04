const thumbs = ['Bottle', 'Front', 'Texture', 'Label']

export default function ProductGallery() {
  return (
    <div className="product-gallery">
      <div className="product-main-image">
        <div className="product-scene">
          <div className="product-coconut product-coconut-one" />
          <div className="product-coconut product-coconut-two" />
          <div className="product-bottle">
            <div className="product-bottle-cap" />
            <div className="product-bottle-label">
              <span>BEEMUN</span>
              <strong>Cold Pressed<br />Coconut Oil</strong>
              <small>Earth Roots · ZPS 100</small>
            </div>
          </div>
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
