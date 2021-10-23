import omnifoodLogo from "../../images/omnifood-logo.png";
import { Facebook, Instagram, Twitter } from "../../icons";
import { footerDetails } from "../../data/constants";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <a href="/" className="footer-logo">
            <img className="logo" alt="Omnifood logo" src={omnifoodLogo} />
          </a>
          <ul className="logo-list">
            <li>
              <a href="/">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="/">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="/">
                <Twitter />
              </a>
            </li>
          </ul>
          <p className="copyright">
            Copyright © 2027 by Omnifood, Inc. All rights reserved.
          </p>
        </div>
        <div className="contact-col">
          <p className="footer-heading">Contact us</p>
          <address className="contact">
            <p className="footer-address">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a href="/" className="footer-link">
                415-201-6370
              </a>
              <br />
              <a href="/" className="footer-link">
                hello@omnifood.com
              </a>
            </p>
          </address>
        </div>
        {footerDetails.map((item, index) => (
          <div key={index} className="footer-details">
            <p className="footer-heading">{item.title}</p>
            <ul>
              {item.details.map((detail, index) => (
                <li key={index}>
                  <a className="footer-link" href="/">
                    {detail}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};
