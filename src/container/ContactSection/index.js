import { useState } from "react";

export const ContactSection = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <section className="section-cta">
      <div className="container">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="heading-secondary">Get your first meal for free!</h2>
            <p className="cta-text">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>
            <form action="#" className="cta-form">
              <div>
                <label htmlFor="full-name">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="John Smith"
                  required
                />
              </div>
              <div>
                <label htmlFor="email-address">Email address</label>
                <input
                  id="email-address"
                  type="text"
                  placeholder="@me.address"
                  required
                />
              </div>
              <div>
                <label htmlFor="select-where">
                  Where did you hear from us?
                </label>
                <select onChange={handleChange} value={value} id="select-where">
                  <option value="">Please choose one option:</option>
                  <option value="friends">Friends and family</option>
                  <option value="youtube">YouTube video</option>
                  <option value="podcast">Podcast</option>
                  <option value="ad">Facebook ad</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <button className="btn btn--form">Sign up now</button>
            </form>
          </div>
          <div className="cta-img-box" />
        </div>
      </div>
    </section>
  );
};
