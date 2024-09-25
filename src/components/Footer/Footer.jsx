import React from 'react';
import './footer.css';
// Import social media icons (assuming you have an icon library like FontAwesome)
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const quickLinks01 = [
  {
    path: '#',
    display: 'IT Services',
  },
  {
    path: '#',
    display: 'Marketing',
  },
  {
    path: '#',
    display: 'Analytics',
  },
];

const footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <hr />
        <div className="footer__wrapper">
          <div className="footer__logo">
            <h2>AppJingle Solutions</h2>
            <p className="description">Boost your business with our IT solutions</p>
            <p className="small_text description">
              At AppJingle, we use our experience and commitment to provide great service and real value to our clients.
            </p>
          </div>

          <div className="footer__quick-links">
            <h3 className="quick__links-title">Solutions</h3>
            <ul className="quick__links">
              {quickLinks01.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Section */}
          <div className="footer__location">
            <h3 className="location__title">Location</h3>
            <p>Ward No.4, AppJingle St, Near Hassan Bhatti School, Nankana City, Pakistan</p>
            <p>Email: info@appjingle.com</p>
            
          </div>

          {/* Social Media Icons */}
          <div className="footer__social-media">
            <h3 className="social__media-title">Follow Us</h3>
            <div className="social__media-icons">
              <a href="https://facebook.com">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com">
                <FaTwitter />
              </a>
             
              <a href="https://linkedin.com">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* <hr className="footer-divider" /> */}

        <p className="copyright">
          Copyright {year} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default footer;
