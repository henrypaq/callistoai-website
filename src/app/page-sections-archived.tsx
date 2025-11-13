/**
 * ARCHIVED SECTIONS - To be restored later
 * 
 * This file contains sections that have been temporarily removed from the home page.
 * 
 * INSTRUCTIONS TO RESTORE:
 * 1. Copy the relevant section code from this file
 * 2. Paste it into src/app/page.tsx at the appropriate location
 * 3. Make sure to also restore the growthExperienceCards data if restoring the Business Growth section
 * 4. Remove this file once sections are restored
 */

// ============================================================================
// DATA: growthExperienceCards (add this back to the Home component)
// ============================================================================
/*
  const growthExperienceCards = [
    {
      tag: 'Design',
      title: 'Automate whatever slows you down',
      description:
        'Build workflows once, then let Callisto's automation layer handle fulfillment, follow-ups, and hand-offs without the busywork.',
      gradientImage: gradients[0],
    },
    {
      tag: 'Operations',
      title: 'Gain actionable insights from your data',
      description:
        'Connect your data sources and surface the signal faster—so you can move from dashboards to decisions in a single click.',
      gradientImage: gradients[1],
    },
    {
      tag: 'Growth',
      title: 'Transform ideas into tailored platforms',
      description:
        'Prototype, validate, and ship new experiences with a modular AI stack that molds to the way your teams operate.',
      gradientImage: gradients[2],
    },
  ];
*/

// ============================================================================
// SECTION 1: Business Growth - "Turn your vision into an AI-powered operation"
// ============================================================================
// PLACE: After the Social Proof Bar section, before "See What Callisto Can Do"
/*
      {/* 1️⃣ Introducing Callisto - Unified Growth Stack *\/}
      <section className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="section-header text-4xl md:text-5xl font-bold text-gray-900">
                Turn your vision into an AI-powered operation.
            </h2>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {growthExperienceCards.map((card) => (
                <div
                  key={card.title}
                  className="group relative min-h-[520px] rounded-[12px] overflow-hidden shadow-[0_30px_60px_-40px_rgba(15,23,42,0.45)]"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={card.gradientImage}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/30 to-black/85 transition-opacity duration-500 group-hover:from-black/10 group-hover:via-black/40 group-hover:to-black/90" />
                  <div className="relative z-10 flex h-full flex-col justify-end">
                    <div className="p-6 sm:p-8 pb-8 sm:pb-10">
                      <div className="flex items-end justify-between gap-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight flex-1 transition-transform duration-500 group-hover:-translate-y-2">
                          {card.title}
                        </h3>
                        <button
                          aria-label={`Learn more about ${card.title}`}
                          className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition-all duration-500 group-hover:bg-white group-hover:text-gray-900"
                        >
                          <Plus className="h-6 w-6" />
                        </button>
                      </div>
                      <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed opacity-0 translate-y-4 max-h-0 overflow-hidden transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-40">
                        {card.description}
            </p>
          </div>
                  </div>
            </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>
*/

// ============================================================================
// SECTION 2: ROI & Impact - "How Callisto drives growth for businesses"
// ============================================================================
// PLACE: After the Integrations section, before the CTA section
/*
      {/* Divider *\/}
      <div className="h-px bg-gray-100 max-w-6xl mx-auto"></div>

      {/* 4️⃣ ROI & Impact Section - Bento Style *\/}
      <section className="py-32 bg-[#4B2BFF]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="section-header text-4xl md:text-5xl font-bold text-white">
                How Callisto drives growth for businesses
            </h2>
            </div>
          </FadeInSection>
          <FadeInSection delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(160px,auto)]">
              <div className="bg-white rounded-[20px] p-6 relative overflow-hidden md:col-span-2 flex flex-col gap-4 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.35)]">
                <button className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-100 transition-colors" aria-label="Share">
                  <Share2 className="h-4 w-4" />
                </button>
                <div className="relative h-28 w-full overflow-hidden rounded-[16px]">
                  <Image
                    src={gradients[1]}
                    alt="TechCorp transformation"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <Users className="h-12 w-12 text-white" />
                  </div>
          </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">TechCorp & Callisto</p>
                  <h3 className="text-lg font-semibold text-gray-900">Transforming Enterprise Operations</h3>
                  <p className="text-xs font-semibold text-gray-600">TechCorp</p>
                </div>
              </div>

              <div className="bg-white rounded-[20px] p-6 relative flex flex-col gap-4 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.35)]">
                <button className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-100 transition-colors" aria-label="Share">
                  <Share2 className="h-4 w-4" />
                </button>
                <p className="text-sm leading-relaxed text-gray-900">
                  TechCorp's partnership with Callisto has boosted automation, cut response times, improved customer satisfaction, and enabled 24/7 intelligent support.
                </p>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">TechCorp</p>
              </div>

              <div className="bg-white rounded-[20px] p-6 relative flex flex-col justify-between shadow-[0_24px_60px_-32px_rgba(15,23,42,0.35)]">
                <button className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-100 transition-colors" aria-label="Share">
                  <Share2 className="h-4 w-4" />
                </button>
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-gray-900">150K</div>
                  <p className="text-sm text-gray-600 mt-2">Tickets processed in Dec 2024 alone.</p>
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">DataFlow</p>
              </div>

              <div className="bg-white rounded-[20px] p-6 relative flex flex-col gap-4 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.35)] md:col-span-2">
                <button className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-100 transition-colors" aria-label="Share">
                  <Share2 className="h-4 w-4" />
                </button>
                <p className="text-sm leading-relaxed text-gray-900">
                  Callisto's AI is configured to detect sensitive tickets and escalate them to human agents, ensuring empathy and nuanced responses when it matters most.
                </p>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-gray-900">Slashed 87% in overall response time</p>
                  <p className="text-sm text-gray-600">More efficient and automated.</p>
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">InnovateLabs</p>
              </div>

              <div className="bg-white rounded-[20px] p-6 relative flex flex-col justify-between shadow-[0_24px_60px_-32px_rgba(15,23,42,0.35)]">
                <button className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-100 transition-colors" aria-label="Share">
                  <Share2 className="h-4 w-4" />
                </button>
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-gray-900">79%</div>
                  <p className="text-sm text-gray-600 mt-2">Automated of all customer support tickets (and growing).</p>
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">TechCorp</p>
              </div>

              <div className="bg-white rounded-[20px] p-6 relative flex flex-col justify-between shadow-[0_24px_60px_-32px_rgba(15,23,42,0.35)]">
                <button className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-100 transition-colors" aria-label="Share">
                  <Share2 className="h-4 w-4" />
                </button>
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-gray-900">70%</div>
                  <p className="text-sm text-gray-600 mt-2">Automation of a massive volume of customer support tickets.</p>
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">DataFlow</p>
              </div>

              <div className="bg-white rounded-[20px] p-6 relative flex flex-col justify-between shadow-[0_24px_60px_-32px_rgba(15,23,42,0.35)]">
                <button className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-100 transition-colors" aria-label="Share">
                  <Share2 className="h-4 w-4" />
                </button>
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-gray-900">87.5%</div>
                  <p className="text-sm text-gray-600 mt-2">Slashed in First Response Time (FRT).</p>
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">MedMedical</p>
              </div>

              <div className="bg-white rounded-[20px] p-6 relative flex flex-col gap-4 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.35)] md:col-span-2">
                <button className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-100 transition-colors" aria-label="Share">
                  <Share2 className="h-4 w-4" />
                </button>
                <p className="text-sm leading-relaxed text-gray-900">
                  Clove achieved 68% automation, cut first response time from a day to 3 minutes, and gained a 3x ROI in just three months with Callisto.
                </p>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">Clove</p>
              </div>

              <div className="bg-white rounded-[20px] p-6 relative overflow-hidden flex flex-col gap-4 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.35)]">
                <button className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-100 transition-colors z-10" aria-label="Share">
                  <Share2 className="h-4 w-4" />
                </button>
                <div className="relative w-full h-40 rounded-[16px] overflow-hidden">
                  <Image
                    src={gradients[5]}
                    alt="Customer portrait"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 25vw, 100vw"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-gray-900">"Callisto keeps our teams focused on real conversations."</p>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">Yuma AI</p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Divider *\/}
      <div className="h-px bg-gray-100 max-w-6xl mx-auto"></div>
*/

// ============================================================================
// SECTION 3: Industries Section
// ============================================================================
// PLACE: After the ROI section, before the CTA section
/*
      {/* 5️⃣ Customer Stories Section *\/}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                How the world's leading organizations and artists are using Callisto.
          </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Callisto is helping change the way work gets made across all industries. Learn more below.
              </p>
            </div>
          </FadeInSection>

          {/* Industry Filter Buttons *\/}
          <FadeInSection delay={100}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                'AI for Advertising',
                'AI for Visual Effects',
                'AI for Gaming'
              ].map((filter, idx) => (
                <button
                  key={idx}
                  className="px-6 py-3 rounded-lg border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-all duration-200"
                >
                  {filter}
                </button>
              ))}
            </div>
          </FadeInSection>

          {/* Customer Stories Heading *\/}
          <FadeInSection delay={150}>
            <h3 className="text-xl font-semibold text-gray-900 mb-8">Customer Stories</h3>
          </FadeInSection>

          {/* Customer Story Cards *\/}
          <FadeInSection delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'How "TechCorp" Used Callisto to Transform Their Document Management',
                  company: 'TECHCORP',
                  image: (
                    <div className="w-full h-64 rounded-lg relative overflow-hidden">
                      <Image
                        src={gradients[2]}
                        alt="TechCorp story"
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 33vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <FileText className="h-20 w-20 text-white opacity-70" />
                      </div>
                      {/* Logo overlays *\/}
                      <div className="absolute bottom-4 left-4 text-white text-sm font-bold">Callisto</div>
                      <div className="absolute bottom-4 right-4 text-white text-sm font-bold">TECHCORP</div>
                    </div>
                  )
                },
                {
                  title: 'How DataFlow transformed their analytics platform with Callisto',
                  company: 'DATAFLOW',
                  image: (
                    <div className="w-full h-64 rounded-lg relative overflow-hidden">
                      <Image
                        src={gradients[3]}
                        alt="DataFlow story"
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 33vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <TrendingUp className="h-20 w-20 text-white opacity-70" />
                      </div>
                      {/* Logo overlays *\/}
                      <div className="absolute bottom-4 left-4 text-white text-sm font-bold">Callisto</div>
                      <div className="absolute bottom-4 right-4 text-white text-sm font-bold">DATAFLOW</div>
                    </div>
                  )
                },
                {
                  title: 'Behind the Scenes of an InnovateLabs Automation Platform, Powered by Callisto',
                  company: 'INNOVATELABS',
                  image: (
                    <div className="w-full h-64 rounded-lg relative overflow-hidden">
                      <Image
                        src={gradients[4]}
                        alt="InnovateLabs story"
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 33vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Sparkles className="h-20 w-20 text-white opacity-70" />
                      </div>
                      {/* Logo overlays *\/}
                      <div className="absolute bottom-4 left-4 text-white text-sm font-bold">Callisto</div>
                      <div className="absolute bottom-4 right-4 text-white text-sm font-bold">INNOVATELABS</div>
                    </div>
                  )
                }
              ].map((story, idx) => (
                <div key={idx} className="group">
                  {/* Image *\/}
                  <div className="mb-4 overflow-hidden rounded-lg">
                    {story.image}
                  </div>
                  
                  {/* Category Label *\/}
                  <div className="text-sm text-gray-500 mb-2">Customer Stories</div>
                  
                  {/* Title *\/}
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 leading-tight group-hover:text-gray-700 transition-colors">
                    {story.title}
                  </h4>
                  
                  {/* Read More Link *\/}
            <Link
                    href="/customer-stories"
                    className="text-gray-900 underline font-medium hover:text-gray-700 transition-colors inline-block"
            >
                    Read More
            </Link>
            </div>
              ))}
          </div>
          </FadeInSection>
        </div>
      </section>
*/
