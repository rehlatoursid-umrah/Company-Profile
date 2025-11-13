import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import PackagesSection from "@/components/packages-section"
import PackageDetailsSection from "@/components/package-details-section"
import TestimonialsSection from "@/components/testimonials-section"
import FounderSection from "@/components/founder-section"
import PesantrenPartnershipSection from "@/components/pesantren-partnership-section"
import TeamSection from "@/components/team-section"
import InfrastructureSection from "@/components/infrastructure-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HeroSection />
      <AboutSection />
      <PackagesSection />
      <PackageDetailsSection />
      <TestimonialsSection />
      <FounderSection />
      <PesantrenPartnershipSection />
      <TeamSection />
      <InfrastructureSection />
      <CTASection />
      <Footer />
    </main>
  )
}
