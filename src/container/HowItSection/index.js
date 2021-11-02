import { HowItWorksBox } from "../../components/HowItSection/HowItWorksBox";
import { MainSectionTitle } from "../../components/MainSectionTitle";
import { sectionMainTitle } from "../../data/constants";

export const HowItSection = ({ refs, value }) => {
  const { subTitle, description } = sectionMainTitle.howItSection;

  return (
    <section ref={value === "howItWorks" ? refs : null} className="section-how">
      <MainSectionTitle sectionName={subTitle} description={description} />
      <HowItWorksBox />
    </section>
  );
};
