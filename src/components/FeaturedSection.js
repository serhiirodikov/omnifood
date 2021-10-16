import { logos } from "../data/constants";

export const FeaturedSection = () => {
  return (
    <section className="featured-section">
      <div className="container">
        <h2 className="heading-featured-in">AS FEATURED IN</h2>
        <div className="logos">
          {logos.map(({ image }, index) => (
            <img key={index} src={image} alt="logo" />
          ))}
        </div>
      </div>
    </section>
  );
};
