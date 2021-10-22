import { cookingTips } from "../../data/constants";

export const CookingTips = () => {
  return (
    <div className="container grid grid--4--cols">
      {cookingTips.map(({ description, icon, title }, index) => {
        return (
          <div key={index} className="feature">
            <div className="icon-box">{icon}</div>
            <p className="feature-title">{title}</p>
            <p className="feature-description">{description}</p>
          </div>
        );
      })}
    </div>
  );
};
