import { MainHeroSection } from "./MainHeroSection";
import { HowItSection } from "./HowItSection";
import { FeaturedSection } from "../components/FeaturedSection";
import { MealSection } from "./MealSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { PricingSection } from "./PricingSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";

export const OmniFoodMainPage = () => {
  return (
    <>
      <MainHeroSection />
      <FeaturedSection />
      <HowItSection />
      <MealSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </>
  );
};
