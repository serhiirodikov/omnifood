import { gallery } from "../../data/constants";

export const Gallery = () => {
  return (
    <div className="gallery">
      {gallery.map((photo, index) => (
        <figure key={index}>
          <img src={photo} alt={`food number ${index}`} />
        </figure>
      ))}
    </div>
  );
};
