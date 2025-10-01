export default function RoiPricing() {
  return (
    <section aria-labelledby="roi-pricing-heading" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <header className="mb-10">
          <h2 id="roi-pricing-heading" className="text-3xl font-semibold tracking-tight text-gray-900">ROI &amp; Pricing Advantage</h2>
        </header>
        <article className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-medium mb-2 text-gray-900">One-time fee</h3>
            <p className="text-gray-600">Simple placeholder comparison and ROI highlights.</p>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-medium mb-2 text-gray-900">vs Monthly</h3>
            <p className="text-gray-600">Placeholder for estimated monthly costs and totals.</p>
          </div>
        </article>
      </div>
    </section>
  );
}


