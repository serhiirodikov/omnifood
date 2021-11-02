import omnifoodLogo from "../../images/omnifood-logo.png";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export const HeaderNavigation = ({ handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const media = useMediaQuery({ query: "(max-width: 944px)" });

  const getContent = () => {
    return (
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a
              href="/"
              name="howItWorks"
              onClick={(e) => handleClick(e, setIsOpen)}
            >
              How it works
            </a>
          </li>
          <li>
            <a name="meals" onClick={(e) => handleClick(e, setIsOpen)} href="/">
              Meals
            </a>
          </li>
          <li>
            <a
              name="testimonials"
              onClick={(e) => handleClick(e, setIsOpen)}
              href="/"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              name="pricing"
              onClick={(e) => handleClick(e, setIsOpen)}
              href="/"
            >
              Pricing
            </a>
          </li>
          <li>
            <button className="btn btn--full padding-sm">Try for free</button>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <header className={`header ${isOpen ? "nav-open" : ""}`}>
      <a href="/">
        <img className="logo" alt="Omnifood logo" src={omnifoodLogo} />
      </a>
      {getContent()}
      {media && (
        <button className="test" onClick={() => setIsOpen(!isOpen)}>
          <div className={`menu-btn ${isOpen ? "open" : ""}`}>
            <div className="menu-btn-burger" />
          </div>
        </button>
      )}
    </header>
  );
};
