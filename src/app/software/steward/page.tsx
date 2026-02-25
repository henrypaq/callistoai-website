'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function StewardPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-violet-600 font-semibold">Steward</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-dm-serif)', lineHeight: '1.1' }}>
                Automate the work that slows you down
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Steward handles repetitive tasks so your team can focus on what matters. From data entry to complex workflows, let AI do the heavy lifting.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/book-demo"
                  className="inline-flex items-center justify-center px-6 py-3 bg-violet-600 text-white font-semibold rounded-full hover:bg-violet-700 transition-colors"
                >
                  Request a Demo
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-colors"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/gradients/Dreamy Blends_003.png"
                  alt="Steward Dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-dm-serif)' }}>
              Built for efficiency
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Steward learns your workflows and automates them with precision, saving hours every week.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Workflow Automation</h3>
              <p className="text-gray-600">
                Create automated workflows that handle repetitive tasks across all your tools and platforms.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Learning</h3>
              <p className="text-gray-600">
                Steward learns from your patterns and suggests new automations to save even more time.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>
              <p className="text-gray-600">
                Bank-grade encryption and compliance certifications keep your data safe and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-dm-serif)' }}>
              Automate anything
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From simple tasks to complex multi-step processes, Steward handles it all.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-2xl p-8 hover:border-violet-200 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Entry & Processing</h3>
              <p className="text-gray-600 mb-4">
                Automatically extract, transform, and load data between systems without manual intervention.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Invoice processing
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Form submissions
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Report generation
                </li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-2xl p-8 hover:border-violet-200 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Communications</h3>
              <p className="text-gray-600 mb-4">
                Automate personalized responses and follow-ups to keep customers engaged.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Email sequences
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Support ticket routing
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Appointment scheduling
                </li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-2xl p-8 hover:border-violet-200 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Team Coordination</h3>
              <p className="text-gray-600 mb-4">
                Keep your team in sync with automated notifications and task assignments.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Task delegation
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Status updates
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Meeting scheduling
                </li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-2xl p-8 hover:border-violet-200 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance & Auditing</h3>
              <p className="text-gray-600 mb-4">
                Maintain compliance with automated documentation and audit trails.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Document versioning
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Activity logging
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Compliance reports
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-violet-600">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-white mb-2">85%</p>
              <p className="text-violet-200">Reduction in manual tasks</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-white mb-2">12hrs</p>
              <p className="text-violet-200">Saved per employee weekly</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-white mb-2">99.9%</p>
              <p className="text-violet-200">Automation accuracy</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-dm-serif)' }}>
            Ready to automate your workflows?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join hundreds of teams already saving time with Steward.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/book-demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-violet-600 text-white font-semibold rounded-full hover:bg-violet-700 transition-colors"
            >
              Request a Demo
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
