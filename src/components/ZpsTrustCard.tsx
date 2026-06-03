export default function ZpsTrustCard() {
  const checks = [
    'Zero Plastic',
    'Zero Synthetic',
    'Full Ingredient Disclosure',
    'Packaging Reviewed',
    'BEEMUN Approved',
  ]

  return (
    <div className="rounded-3xl border border-[#d9ccb1] bg-[#f8f2e7] p-6">
      <h3 className="text-xl font-semibold text-[#1f2a1f]">ZPS 100 Verified</h3>
      <div className="mt-4 space-y-3">
        {checks.map((check) => (
          <p key={check} className="text-sm text-[#4f5d45]">✓ {check}</p>
        ))}
      </div>
    </div>
  )
}
