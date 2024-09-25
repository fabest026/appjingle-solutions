import React from 'react';
import './footer.css';
// Import social media icons (assuming you have an icon library like FontAwesome)
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import appjingle_logo from '../../images/appjingle.png';

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
            <img src={appjingle_logo} alt="appjingle logo" />
            {/* <p className="description">Boost your business with our IT solutions</p>
            <p className="small_text description">
              At AppJingle, we use our experience and commitment to provide great service and real value to our clients.
            </p> */}
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
            <p>AppJingle St, Near Hassan Bhatti School, Nankana Sahib, Punjab, Pakistan</p>
            <p>Email: info@appjingle.com</p>

          </div>

          {/* Social Media Icons */}
          <div className="footer__social-media">
            <h3 className="social__media-title">Follow Us</h3>
            <div className="social__media-icons">
              <a href="https://web.facebook.com/appjingle">
                <FaFacebookF />
              </a>
              <a href="https://x.com/appjingle?fbclid=IwY2xjawFhTUpleHRuA2FlbQIxMAABHWDH_gejHAzQZ6FRqSNZaWfrgFtogTY8s0VgPutzCOPzDE8__9MtEq6soQ_aem_UbehL9XIhaCH1cS_Vvn57Q">
                <FaTwitter />
              </a>

              <a href="https://www.linkedin.com/company/appjingle-services/">
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
