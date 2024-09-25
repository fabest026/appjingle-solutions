import React from 'react';
import '../../styles/contact.css';

const ContactUs = () => {
  return (
    <div className="contact-us-section" id="contact"> {/* Add id here */}
      <div className="contact-us-content">
        <h6 className="subtitle">Contact Us</h6>
        <h2>Let's Talk About Everything!</h2>
        <p className="description">
          We are here to answer any questions you may have. Reach out to us and we'll respond as soon as we can.
        </p>
      </div>

      <div className="contact-us-form">
        <form>
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            className="form-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            className="form-input"
            required
          />
          <textarea
            name="message"
            placeholder="Write Message *"
            className="form-textarea"
            required
          ></textarea>
          <button type="submit" className="primary__btn">
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
