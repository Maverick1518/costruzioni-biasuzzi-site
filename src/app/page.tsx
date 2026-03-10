import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import StrengthsSection from "@/components/sections/StrengthsSection";
import ContactCta from "@/components/sections/ContactCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <StrengthsSection />
      <ContactCta />
    </>
  );
}
