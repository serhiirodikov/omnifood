export const HowItWorksItem = ({ image, step, description, heading }) => {
  return (
    <div className="container grid grid--2--cols grid--center-v test2">
      <div className="step-text-box">
        <p className="step-number">{step}</p>
        <h3 className="heading-tertiary">{heading} </h3>
        <p className="step-description">{description}</p>
      </div>
      <div className="step-img-box">
        <img
          className="step-image"
          src={image}
          alt="iPhone app
            preferences selection screen"
        />
      </div>
    </div>
  );
};
