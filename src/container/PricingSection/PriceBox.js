import { PriceCard } from "../../components/PricingSection/PriceCard";
import { prices } from "../../data/constants";
import { CookingTips } from "../../components/PricingSection/CookingTips";

export const PriceBox = () => {
  return (
    <>
      <div className="container grid grid--2--cols margin-bottom-md">
        {prices.map((item, index) => (
          <PriceCard key={index} data={item} complete={item.complete} />
        ))}
      </div>
      <div className="container grid margin-bottom-xl">
        <aside className="plan-detail">
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </aside>
      </div>
      <CookingTips />
    </>
  );
};
