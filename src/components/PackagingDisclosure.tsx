export default function PackagingDisclosure() {
  return (
    <section className="rounded-3xl border border-[#e2d5bb] bg-[#fffaf0] p-6">
      <h2 className="text-2xl font-semibold text-[#1f2a1f]">Packaging Disclosure</h2>
      <div className="mt-6 overflow-hidden rounded-2xl border border-[#e2d5bb]">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#f6efdf]">
            <tr>
              <th className="p-4">Component</th>
              <th className="p-4">Material</th>
              <th className="p-4">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-[#e2d5bb]">
              <td className="p-4">Bottle</td>
              <td className="p-4">Glass</td>
              <td className="p-4">Primary container</td>
            </tr>
            <tr className="border-t border-[#e2d5bb]">
              <td className="p-4">Label</td>
              <td className="p-4">Paper</td>
              <td className="p-4">Plastic-free label</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
