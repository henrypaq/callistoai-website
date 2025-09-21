import { HeroSection } from '@/components/ui/hero-section-1'
import { Testimonial } from '@/components/ui/testimonial'

export default function FileManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      
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
