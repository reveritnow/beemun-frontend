const ingredients = [
  { name: 'Coconut Oil', purpose: 'Moisturising base', source: 'Coconut' },
]

export default function IngredientDisclosure() {
  return (
    <section className="rounded-3xl border border-[#e2d5bb] bg-[#fffaf0] p-6">
      <h2 className="text-2xl font-semibold text-[#1f2a1f]">Full Ingredient Disclosure</h2>
      <p className="mt-3 text-sm leading-6 text-[#5f6b55]">
        BEEMUN does not allow hidden proprietary blends, vague fragrance systems, or undisclosed additives.
      </p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-[#e2d5bb]">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#f6efdf] text-[#4f5d45]">
            <tr>
              <th className="p-4">Ingredient</th>
              <th className="p-4">Purpose</th>
              <th className="p-4">Source</th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((ingredient) => (
              <tr key={ingredient.name} className="border-t border-[#e2d5bb] text-[#5f6b55]">
                <td className="p-4 font-medium text-[#1f2a1f]">{ingredient.name}</td>
                <td className="p-4">{ingredient.purpose}</td>
                <td className="p-4">{ingredient.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
