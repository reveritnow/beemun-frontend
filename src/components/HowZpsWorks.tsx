const steps = [
  { title: 'Seller applies', text: 'Purity-first makers apply to join BEEMUN.' },
  { title: 'Product is submitted', text: 'Sellers disclose ingredients, packaging, variants, images, and proof.' },
  { title: 'BEEMUN reviews', text: 'Ingredients, packaging, documents, and photos are checked.' },
  { title: 'Product goes live', text: 'Only approved ZPS 100 products become visible to customers.' },
]

export default function HowZpsWorks() {
  return (
    <section className="how-section">
      <div className="section-wrap">
        <p className="section-eyebrow">How it works</p>
        <h2 className="section-title">Every product goes through a trust-first review</h2>
        <div className="process-grid">
          {steps.map((step, index) => (
            <article className="process-card" key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
