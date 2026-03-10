import Hero from "@/components/sections/Hero";
import IntroSection from "@/components/sections/IntroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import QualificationsPreview from "@/components/sections/QualificationsPreview";
import StrengthsSection from "@/components/sections/StrengthsSection";
import ContactCta from "@/components/sections/ContactCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesOverview />
      <QualificationsPreview />
      <StrengthsSection />
      <ContactCta />
    </>
  );
}
