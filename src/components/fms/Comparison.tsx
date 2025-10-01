export default function Comparison() {
  const features = [
    "One-time pricing, no subscriptions",
    "AI-powered auto-tagging for instant organization",
    "Fully customizable setup & branding",
    "Premium, white-glove onboarding & support",
    "Unlimited storage & users included",
    "Seamless integrations with e-commerce & tools",
  ];

  return (
    <section aria-labelledby="comparison-heading" className="py-28 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Headline */}
        <header className="mb-16 text-center">
          <h2 id="comparison-heading" className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Why Callisto is the no brainer choice in file management
          </h2>
        </header>

        {/* Table without outer container, styled to blend with dark */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="pb-6 text-left"></th>
                <th className="pb-6 text-center px-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-pacifico)' }}>Callisto</div>
                  </div>
                </th>
                <th className="pb-6 text-center px-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-2xl font-bold text-white" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: '600' }}>
                      Frame.io
                    </div>
                  </div>
                </th>
                <th className="pb-6 text-center px-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Brush Script MT, cursive', fontWeight: '400' }}>
                      Air
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx} className="border-b border-gray-800">
                  <td className="py-6 pr-8">
                    <span className="text-lg text-white font-medium">{feature}</span>
                  </td>
                  <td className="py-6 text-center">
                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {/* Glowing effect */}
                        <div className="absolute inset-0 w-8 h-8 rounded-full bg-green-500 opacity-30 blur-sm"></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 text-center">
                    <div className="flex justify-center">
                      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 text-center">
                    <div className="flex justify-center">
                      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}