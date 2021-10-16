import { MainHeroSection } from "./MainHeroSection";
import { HowItSection } from "./HowItSection";
import { FeaturedSection } from "../components/FeaturedSection";

export const OmniFoodMainPage = () => {
  return (
    <>
      <MainHeroSection />;
      <FeaturedSection />
      <HowItSection />
    </>
  );
};
