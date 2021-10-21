export const MainSectionTitle = ({
  sectionName,
  description,
  center = false,
}) => {
  return (
    <div className={`container ${center ? "center" : null}`}>
      <span className="subheading">{sectionName}</span>
      <h2 className="heading-secondary">{description}</h2>
    </div>
  );
};
