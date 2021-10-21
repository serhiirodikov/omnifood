import { MealItem } from "./MealItem";
import { meals, worksWithAnyDiet } from "../data/constants";
import { CheckMark } from "../icons";

export const MealsBox = () => {
  return (
    <div className="container grid grid--3--cols margin-bottom-md">
      {meals.map((item, index) => (
        <MealItem
          key={index}
          image={item.image}
          title={item.title}
          tags={item.tags}
          calories={item.calories}
          nutriScore={item.nutriScore}
          rating={item.rating}
        />
      ))}
      <div className="diets">
        <h3 className="heading-tertiary">Works with any diet:</h3>
        <ul className="list">
          {worksWithAnyDiet.map((item, index) => (
            <li key={index}>
              <CheckMark />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
