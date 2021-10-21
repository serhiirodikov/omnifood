import { Eat, Fire, Star } from "../icons";

export const MealItem = ({
  image,
  tags,
  title,
  calories,
  nutriScore,
  rating,
}) => {
  return (
    <div className="meal-card">
      <img src={image} alt="meal" className="meal-img" />
      <div className="meal-details">
        <div className="meal-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag vegetarian">
              {tag}
            </span>
          ))}
        </div>
        <p className="meal-title">{title}</p>
        <ul className="meals-list">
          <li>
            <Fire />
            <span>
              <strong>{calories}</strong>calories
            </span>
          </li>
          <li>
            <Eat />
            <span>
              NutriScore &reg; <strong>{nutriScore}</strong>
            </span>
          </li>
          <li>
            <Star />
            <span>
              <strong>{rating}</strong> rating (537)
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
