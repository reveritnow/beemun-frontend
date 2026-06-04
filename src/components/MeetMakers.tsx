const makers = [
  { name: 'Earth Roots', slug: 'earth-roots', location: 'Kerala', text: 'Single-ingredient oils and simple natural care rituals.' },
  { name: 'Petal & Soil', slug: 'petal-and-soil', location: 'Jaipur', text: 'Small batch balms, butters, and botanical blends.' },
  { name: 'Root Rituals', slug: 'root-rituals', location: 'Himachal', text: 'Herbal powders and plant-led daily care essentials.' },
]

export default function MeetMakers() {
  return (
    <section id="makers">
      <div className="section-wrap">
        <p className="section-eyebrow">Meet the makers</p>
        <h2 className="section-title">Small brands. Serious transparency.</h2>
        <p className="section-copy">BEEMUN partners with natural brands, artisans, and purity-first makers.</p>
        <div className="three-grid">
          {makers.map((maker) => (
            <article className="maker-card" key={maker.name}>
              <div className="maker-logo">{maker.name.charAt(0)}</div>
              <h3>{maker.name}</h3>
              <p className="muted">{maker.location}</p>
              <p>{maker.text}</p>
              <a href={`/brand/${maker.slug}`}>View brand</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
