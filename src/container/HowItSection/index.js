import { HowItWorksBox } from "../../components/HowItSection/HowItWorksBox";
import { MainSectionTitle } from "../../components/MainSectionTitle";
import { sectionMainTitle } from "../../data/constants";

export const HowItSection = () => {
  const { subTitle, description } = sectionMainTitle.howItSection;

  return (
    <section className="section-how">
      <MainSectionTitle sectionName={subTitle} description={description} />
      <HowItWorksBox />
    </section>
  );
};
