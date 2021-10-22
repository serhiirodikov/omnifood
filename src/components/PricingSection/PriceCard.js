import { CheckMark, CloseIcon } from "../../icons";

export const PriceCard = ({
  data: { title, list, price, description },
  complete = false,
}) => {
  return (
    <div className={`pricing-plan ${complete ? "complete" : "starter"}`}>
      <header className="plan-header">
        <p className="price-title">{title}</p>
        <p className="plan-price">
          <span>$</span>
          {price}
        </p>
        <p className="plan-text">{description}</p>
      </header>
      <ul className="price-list">
        {list.map((item, index) => (
          <li key={index}>
            {item.available ? <CheckMark /> : <CloseIcon />}
            {item.details}
          </li>
        ))}
      </ul>
      <div className="btn-container">
        <button className="btn btn--full">Start eating well</button>
      </div>
    </div>
  );
};
