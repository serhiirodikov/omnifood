import customerPhoto1 from "../../images/customers/customer-1.jpg";
import customerPhoto2 from "../../images/customers/customer-2.jpg";
import customerPhoto3 from "../../images/customers/customer-3.jpg";
import customerPhoto4 from "../../images/customers/customer-4.jpg";
import customerPhoto5 from "../../images/customers/customer-5.jpg";
import customerPhoto6 from "../../images/customers/customer-6.jpg";
import hero from "../../images/hero.webp";

export const HeaderHeroSection = () => {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1>A healthy meal delivered to your door, every single day</h1>
          <p className="hero-description">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <button className="btn btn--full margin-right-sm">
            Start eating well
          </button>
          <button className="btn btn--outline">Learn more</button>
          <div className="delivered-meals">
            <div className="delivered-imgs">
              <img src={customerPhoto1} alt="customer photo1" />
              <img src={customerPhoto2} alt="customer photo2" />
              <img src={customerPhoto3} alt="customer photo3" />
              <img src={customerPhoto4} alt="customer photo4" />
              <img src={customerPhoto5} alt="customer photo5" />
              <img src={customerPhoto6} alt="customer photo6" />
            </div>
            <p className="delivered-text">
              <span>250,000+</span> meals delivered last year!
            </p>
          </div>
        </div>
        <div className="hero-img-box">
          <img
            alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            src={hero}
          />
        </div>
      </div>
    </section>
  );
};
