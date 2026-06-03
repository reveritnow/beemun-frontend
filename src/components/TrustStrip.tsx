const trustItems = [
  { title: 'Zero Plastic', text: 'No plastic compromise in product, packaging, or shipping materials.' },
  { title: 'Zero Synthetic', text: 'No artificial fragrance, colors, petrochemicals, or hidden synthetics.' },
  { title: 'Full Disclosure', text: 'Every product must disclose ingredients and packaging.' },
  { title: 'BEEMUN Reviewed', text: 'Products go live only after ZPS review.' },
]

export default function TrustStrip() {
  return (
    <section>
      <div className="trust-strip">
        {trustItems.map((item) => (
          <article className="trust-item" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
