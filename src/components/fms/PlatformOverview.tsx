export default function PlatformOverview() {
  return (
    <section aria-labelledby="platform-overview-heading" className="py-28 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Headline */}
        <header className="mb-16 text-left">
          <h2 id="platform-overview-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white">
            Everyday superpowers.{" "}
            <span className="text-gray-500">
              Callisto is light enough for daily routines but powerful enough for big plans.
            </span>
          </h2>
        </header>

        {/* Two main side-by-side containers */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {/* Left container - Blue theme */}
          <div className="space-y-6">
            <div className="min-h-[120px]">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                See exactly what you need
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Browse through a clear, simple file display without clutter or useless details.
              </p>
            </div>
            
            {/* Image container with blue glow */}
            <div className="relative">
              <div className="absolute -inset-8 bg-blue-500/30 blur-3xl rounded-3xl" aria-hidden="true" />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-blue-500/40 rounded-3xl" aria-hidden="true" />
              
              <div className="relative rounded-3xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm h-[450px] overflow-hidden shadow-2xl">
                <img 
                  src="/demo-ui-placeholder.png" 
                  alt="Tasks and notes demo interface"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Right container - Purple theme */}
          <div className="space-y-6">
            <div className="min-h-[120px]">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Everything in it’s right place
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Create folders, collections, or smart groups so your growing library stays structured.
              </p>
            </div>
            
            {/* Image container with purple glow */}
            <div className="relative">
              <div className="absolute -inset-8 bg-purple-500/30 blur-3xl rounded-3xl" aria-hidden="true" />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-purple-500/40 rounded-3xl" aria-hidden="true" />
              
              <div className="relative rounded-3xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm h-[450px] overflow-hidden shadow-2xl">
                <img 
                  src="/demo-ui-placeholder.png" 
                  alt="Nested lists and subtasks demo interface"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

        {/* Three smaller feature cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 - Quick add (Red theme) */}
          <div className="space-y-4">
            <div className="min-h-[140px]">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                See more, click less
              </h3>
              <p className="text-base text-gray-400 leading-relaxed">
                Preview images, PDFs, or videos directly in the platform and take actions without leaving the page.
              </p>
            </div>
            
            {/* Small image with red glow */}
            <div className="relative">
              <div className="absolute -inset-4 bg-red-500/20 blur-2xl rounded-2xl" aria-hidden="true" />
              
              <div className="relative rounded-2xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm h-[280px] overflow-hidden shadow-xl">
                <img 
                  src="/demo-ui-placeholder.png" 
                  alt="Quick add feature demo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Card 2 - Recurring tasks (Blue theme) */}
          <div className="space-y-4">
            <div className="min-h-[140px]">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Frictionless file management
              </h3>
              <p className="text-base text-gray-400 leading-relaxed">
                Upload and organize assets in seconds with an intuitive drag-and-drop interface.
              </p>
            </div>
            
            {/* Small image with blue glow */}
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/20 blur-2xl rounded-2xl" aria-hidden="true" />
              
              <div className="relative rounded-2xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm h-[280px] overflow-hidden shadow-xl">
                <img 
                  src="/demo-ui-placeholder.png" 
                  alt="Recurring tasks feature demo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Card 3 - Widgets (Purple theme) */}
          <div className="space-y-4">
            <div className="min-h-[140px]">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                The right access for the right people
              </h3>
              <p className="text-base text-gray-400 leading-relaxed">
                Invite team members with controlled permissions so everyone has the access they need.
              </p>
            </div>
            
            {/* Small image with purple glow */}
            <div className="relative">
              <div className="absolute -inset-4 bg-purple-500/20 blur-2xl rounded-2xl" aria-hidden="true" />
              
              <div className="relative rounded-2xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm h-[280px] overflow-hidden shadow-xl">
                <img 
                  src="/demo-ui-placeholder.png" 
                  alt="Widgets feature demo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}