export default function Features() {
  const features = [
    {
      title: "All of your files,",
      highlight: "instantly organized",
      description: "Skip the manual sorting. AI automatically tags every asset with smart, accurate descriptors, organizing your catalog in seconds so you can focus on the work that matters.",
      accentColor: "from-red-500 to-orange-500",
      boxColor: "bg-red-500/20",
      textColor: "text-red-400",
    },
    {
      title: "Keep your team",
      highlight: "up to date",
      description: "Centralize product reviews, team notes, and vendor feedback directly on your files. Comments keep your team aligned, eliminating messy communication threads.",
      accentColor: "from-purple-500 to-blue-500",
      boxColor: "bg-purple-500/20",
      textColor: "text-purple-400",
    },
    {
      title: "Find that one asset",
      highlight: "in seconds",
      description: "Power search quickly cuts through massive file libraries. Filter by tags, comments, or custom fields so you can stop spending hours searching for files.",
      accentColor: "from-cyan-500 to-blue-500",
      boxColor: "bg-cyan-500/20",
      textColor: "text-cyan-400",
    },
  ];

  return (
    <section aria-labelledby="features-heading" className="pt-8 pb-32 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="space-y-32">
          {features.map((feature, idx) => (
            <article
              key={idx}
              className={`grid gap-16 lg:grid-cols-2 items-center ${
                idx % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Text content */}
              <div className={idx % 2 === 1 ? "lg:col-start-2" : ""}>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
                  {feature.title}{" "}
                  <span className={feature.textColor}>
                    {feature.highlight}
                  </span>
                </h3>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Image with colored box background */}
              <div className={`relative ${idx % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                {/* Colored box layer behind image */}
                <div
                  className={`absolute -inset-8 ${feature.boxColor} rounded-3xl blur-2xl`}
                  aria-hidden="true"
                />
                <div
                  className={`absolute -bottom-8 -right-8 w-64 h-64 ${feature.boxColor} rounded-3xl`}
                  aria-hidden="true"
                />
                
                {/* Image placeholder */}
                <div className="relative rounded-2xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm h-[400px] overflow-hidden shadow-2xl">
                  <img 
                    src="/demo-ui-placeholder.png" 
                    alt={`${feature.title} ${feature.highlight} feature demo`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient overlay on image */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.accentColor} opacity-10`}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}