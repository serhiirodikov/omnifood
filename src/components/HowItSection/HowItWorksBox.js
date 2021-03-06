import { HowItWorksItem } from "./HowItWorksItem";
import { howItData } from "../../data/constants";

export const HowItWorksBox = () => {
  return (
    <div className="how-it-box">
      {howItData.map(({ step, image, heading, description }, index) => (
        <HowItWorksItem
          key={index}
          step={step}
          image={image}
          heading={heading}
          description={description}
        />
      ))}
    </div>
  );
};
