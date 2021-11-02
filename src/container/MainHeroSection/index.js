import { HeaderNavigation } from "../../components/MainHeroSection/HeaderNavigation";
import { HeaderHeroSection } from "../../components/MainHeroSection/HeaderHeroSection";

export const MainHeroSection = ({ handleClick }) => {
  return (
    <>
      <HeaderNavigation handleClick={handleClick} />
      <HeaderHeroSection />
    </>
  );
};
