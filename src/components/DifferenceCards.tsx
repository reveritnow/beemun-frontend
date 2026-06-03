const cards = [
  { title: 'Ingredient Transparency', text: 'Full ingredient disclosure is required. No hidden blends, vague fragrance systems, or undisclosed additives.' },
  { title: 'Packaging Transparency', text: 'Packaging materials are reviewed, including bottle, cap, label, seal, tape, filler, and shipping material.' },
  { title: 'ZPS 100 Standard', text: 'Only products that pass BEEMUN’s Zero Plastic • Zero Synthetic review can be listed.' },
]

export default function DifferenceCards() {
  return (
    <section>
      <div className="section-wrap">
        <p className="section-eyebrow">What makes BEEMUN different</p>
        <h2 className="section-title">Not just natural. Reviewed for purity.</h2>
        <p className="section-copy">Most marketplaces rely on seller claims. BEEMUN reviews products before they go live.</p>
        <div className="three-grid">
          {cards.map((card) => (
            <article className="info-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
