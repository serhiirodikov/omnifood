import { MainSectionTitle } from "../../components/MainSectionTitle";
import { sectionMainTitle } from "../../data/constants";
import { PriceBox } from "./PriceBox";

export const PricingSection = () => {
  const { description, subTitle } = sectionMainTitle.pricingSection;
  return (
    <section className="section-pricing">
      <MainSectionTitle sectionName={subTitle} description={description} />
      <PriceBox />
    </section>
  );
};
