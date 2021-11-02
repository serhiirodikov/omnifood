import { MainHeroSection } from "./MainHeroSection";
import { HowItSection } from "./HowItSection";
import { FeaturedSection } from "../components/FeaturedSection";
import { MealSection } from "./MealSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { PricingSection } from "./PricingSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const OmniFoodMainPage = () => {
  const ref = useRef();
  const [value, setValue] = useState("");
  const media = useMediaQuery({ query: "(max-width: 944px)" });

  const handleClick = (e, setIsOpen) => {
    e.preventDefault();
    if (media) setIsOpen(false);

    setValue(e.currentTarget.name);
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [value]);

  useEffect(() => {
    const sectionHeroEl = document.querySelector(".section-hero");
    const obs = new IntersectionObserver(
      (entries) => {
        const ent = entries[0];

        if (ent.isIntersecting === false) {
          document.body.classList.add("sticky");
        } else {
          document.body.classList.remove("sticky");
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-80px",
      }
    );

    obs.observe(sectionHeroEl);
    return () => obs.disconnect();
  }, []);
  return (
    <>
      <MainHeroSection handleClick={handleClick} />
      <FeaturedSection />
      <HowItSection refs={ref} value={value} />
      <MealSection refs={ref} value={value} />
      <TestimonialsSection refs={ref} value={value} />
      <PricingSection refs={ref} value={value} />
      <ContactSection />
      <Footer />
    </>
  );
};
