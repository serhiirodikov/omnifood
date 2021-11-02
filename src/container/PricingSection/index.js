import { MainSectionTitle } from "../../components/MainSectionTitle";
import { sectionMainTitle } from "../../data/constants";
import { PriceBox } from "./PriceBox";

export const PricingSection = ({ refs, value }) => {
  const { description, subTitle } = sectionMainTitle.pricingSection;
  return (
    <section
      ref={value === "pricing" ? refs : null}
      className="section-pricing"
    >
      <MainSectionTitle sectionName={subTitle} description={description} />
      <PriceBox />
    </section>
  );
};
