import omnifoodLogo from "../../images/omnifood-logo.png";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export const HeaderNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const media = useMediaQuery({ query: "(max-width: 944px)" });

  const getContent = () => {
    return (
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a href="/">How it works</a>
          </li>
          <li>
            <a href="/">Meals</a>
          </li>
          <li>
            <a href="/">Testimonials</a>
          </li>
          <li>
            <a href="/">Pricing</a>
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
