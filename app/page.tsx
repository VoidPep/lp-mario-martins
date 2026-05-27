import {
  Navigation,
  HeroSection,
  SocialProofSection,
  ServicesSection,
  HowItWorksSection,
  AboutSection,
  TestimonialSection,
  ContactSection,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <SocialProofSection />
        <ServicesSection />
        <HowItWorksSection />
        <AboutSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
