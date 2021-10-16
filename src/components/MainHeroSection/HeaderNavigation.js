import omnifoodLogo from "../../images/omnifood-logo.png";

export const HeaderNavigation = () => {
  return (
    <header className="header">
      <a href="/">
        <img className="logo" alt="Omnifood logo" src={omnifoodLogo} />
      </a>
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
    </header>
  );
};
