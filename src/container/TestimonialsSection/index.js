import { Testimonials } from "../../components/TestimonialsSection/Testimonials";
import { Gallery } from "../../components/TestimonialsSection/Gallery";

export const TestimonialsSection = ({ refs, value }) => {
  return (
    <section
      ref={value === "testimonials" ? refs : null}
      className="section-testimonials"
    >
      <Testimonials />
      <Gallery />
    </section>
  );
};
