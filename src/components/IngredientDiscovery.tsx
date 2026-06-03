const ingredients = ['Neem', 'Rose', 'Coconut', 'Hibiscus', 'Beeswax', 'Amla']

export default function IngredientDiscovery() {
  return (
    <section>
      <div className="section-wrap">
        <p className="section-eyebrow">Ingredient discovery</p>
        <h2 className="section-title">Explore by ingredient</h2>
        <p className="section-copy">Discover products through the ingredients they are built around.</p>
        <div className="pill-grid">
          {ingredients.map((ingredient) => (
            <a className="ingredient-pill" href="#ingredients" key={ingredient}>{ingredient}</a>
          ))}
        </div>
      </div>
    </section>
  )
}
