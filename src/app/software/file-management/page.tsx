import { HeroSection } from '@/components/ui/hero-section-1'
import { ProblemSolutionSection } from '@/components/ui/problem-solution-section'
import { Testimonial } from '@/components/ui/testimonial'
import { FeatureShowcase } from '@/components/ui/feature-showcase'
import { Feature108 } from '@/components/ui/shadcnblocks-com-feature108'

export default function FileManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      {/* Problem vs Solution Section */}
      <ProblemSolutionSection />

      {/* Feature Showcase 1 - AI-Powered Organization */}
      <FeatureShowcase
        title="AI-Powered File Organization"
        description="Transform your document chaos into organized, searchable content with our intelligent categorization system that learns from your usage patterns."
        features={[
          "Automatic file categorization using machine learning",
          "Smart tagging and metadata extraction",
          "Intelligent duplicate detection and management",
          "Content-based search across all file types",
          "Custom organization rules and workflows"
        ]}
        imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
        imageAlt="AI-powered file organization interface"
        backgroundColor="bg-white"
      />

      {/* Feature Showcase 2 - Collaboration Tools */}
      <FeatureShowcase
        title="Seamless Team Collaboration"
        description="Enable your team to work together efficiently with real-time collaboration features, version control, and secure sharing capabilities."
        features={[
          "Real-time collaborative editing and commenting",
          "Advanced version control and change tracking",
          "Secure file sharing with granular permissions",
          "Team workspaces and project organization",
          "Integration with popular productivity tools"
        ]}
        imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
        imageAlt="Team collaboration interface"
        backgroundColor="bg-gray-50"
        reverse={true}
      />

      {/* Feature Showcase 3 - Advanced Analytics */}
      <FeatureShowcase
        title="Advanced Analytics & Insights"
        description="Gain valuable insights into your file usage patterns, team productivity, and document lifecycle with comprehensive analytics and reporting."
        features={[
          "Usage analytics and file access patterns",
          "Team productivity metrics and reports",
          "Document lifecycle tracking and optimization",
          "Storage optimization recommendations",
          "Custom dashboards and automated alerts"
        ]}
        imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
        imageAlt="Analytics dashboard interface"
        backgroundColor="bg-white"
      />

      {/* Interactive Feature Tabs Section */}
      <Feature108 />
      
      {/* Testimonial Section */}
      <section className="bg-gray-50">
        <Testimonial
          companyLogo="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=60&fit=crop&crop=center"
          quote="Callisto's File Management System has revolutionized how we organize and access our documents. The AI-powered categorization saves us hours every week"
          highlightedText="Callisto's File Management System"
          authorName="Sarah Johnson"
          authorPosition="CTO, TechCorp"
          authorImage="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
        />
      </section>

      {/* Additional Testimonial */}
      <section className="bg-white">
        <Testimonial
          companyLogo="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=60&fit=crop&crop=center"
          quote="The intelligent search and collaboration features in this file management solution have transformed our team's productivity. Highly recommended!"
          highlightedText="intelligent search and collaboration features"
          authorName="Michael Chen"
          authorPosition="Head of Operations, DataFlow Inc"
          authorImage="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
        />
      </section>
    </div>
  )
}
