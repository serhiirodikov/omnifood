import { MealsBox } from "../../components/MealsBox";
import { MainSectionTitle } from "../../components/MainSectionTitle";
import { sectionMainTitle } from "../../data/constants";

export const MealSection = () => {
  const { subTitle, description } = sectionMainTitle.mealsSection;

  return (
    <section className="section-meals">
      <MainSectionTitle
        sectionName={subTitle}
        description={description}
        center
      />
      <MealsBox />
      <div className="container all-recipes">
        <a href="/" className="link">
          See all recipes
        </a>
      </div>
    </section>
  );
};
