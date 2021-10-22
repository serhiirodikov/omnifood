export const Testimonial = ({ feedback, name, image }) => {
  return (
    <figure className="testimonial">
      <img src={image} alt="name" />
      <blockquote>{feedback}</blockquote>
      <p>— {name}</p>
    </figure>
  );
};
