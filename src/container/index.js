import { MainHeroSection } from "./MainHeroSection";
import { HowItSection } from "./HowItSection";
import { FeaturedSection } from "../components/FeaturedSection";
import { MealSection } from "./MealSection";

export const OmniFoodMainPage = () => {
  return (
    <>
      <MainHeroSection />
      <FeaturedSection />
      <HowItSection />
      <MealSection />
    </>
  );
};
