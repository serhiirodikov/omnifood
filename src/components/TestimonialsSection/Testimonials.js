import { MainSectionTitle } from "../MainSectionTitle";
import { sectionMainTitle, testimonials } from "../../data/constants";
import { Testimonial } from "./Testimonial";

export const Testimonials = () => {
  const { subTitle, description } = sectionMainTitle.testimonialsSection;
  return (
    <div className="testimonials-container">
      <MainSectionTitle sectionName={subTitle} description={description} />
      <div className="testimonials">
        {testimonials.map(({ feedback, name, image }, index) => (
          <Testimonial
            key={index}
            feedback={feedback}
            name={name}
            image={image}
          />
        ))}
      </div>
    </div>
  );
};
