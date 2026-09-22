import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const products = [
  ['Onion', '/onion/'],
  ['Onion Powder', '/onion-powder/'],
  ['Dehydrated Onion', '/dehydrated-onion/'],
  ['Garlic', '/garlic/'],
  ['Garlic Powder', '/garlic-powder/'],
  ['Dehydrated Garlic', '/dehydrated-garlic/'],
];

function Footer() {
  useEffect(() => {
    const footerItems = document.querySelectorAll(
      '.zaza-footer__company, .zaza-footer__column'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('zaza-footer__item--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    footerItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="zaza-footer">

      <div className="zaza-footer__container">

        <div className="zaza-footer__grid">

          {/* Company */}
          <div
            className="zaza-footer__company"
            style={{ '--footer-delay': '0s' }}
          >
            <img
              src="/assets/images/Zaza-Exports-Logo.png"
              alt="XYZ Exports"
              className="zaza-footer__logo"
            />

            <p>
              Trusted export company delivering quality products worldwide.
              Committed to excellence, timely delivery, and customer
              satisfaction. Your reliable partner in global trade solutions.
            </p>

            <div className="zaza-footer__social">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="X"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>


          {/* Products */}
          <div
            className="zaza-footer__column"
            style={{ '--footer-delay': '0.06s' }}
          >
            <h3>Our Products</h3>

            <ul>
              {products.map(([name, path]) => (
                <li key={path}>
                  <Link to={path}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Quick Links */}
          <div
            className="zaza-footer__column"
            style={{ '--footer-delay': '0.18s' }}
          >
            <h3>Quick Links</h3>

            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us/">About Us</Link></li>
              <li><Link to="/our-products/">Our Products</Link></li>
              <li><Link to="/certificates/">Certificates</Link></li>
              <li><Link to="/payment-terms/">Payment Terms</Link></li>
              <li><Link to="/faq/">FAQ</Link></li>
              <li><Link to="/contact-us/">Contact Us</Link></li>
            </ul>
          </div>


          {/* Contact */}
          <div
            className="zaza-footer__column zaza-footer__contact"
            style={{ '--footer-delay': '0.18s' }}
          >
            <h3>Contact Us</h3>

            <p>
              123 Business Avenue, Industrial Area, Chennai, Tamil Nadu, India - 600001.

            </p>

            <a href="mailto:info@zazaexports.com">
              info@xyzexports.com
            </a>

            <a href="https://zazaexports.com/" target="_blank" rel="noreferrer">
              xyzexports.com
            </a>
          </div>

        </div>

      </div>


      <div className="zaza-footer__bottom">
        <div className="zaza-footer__bottom-container">
          <p>
            © 2018 - 2026 XYZ Exports. All Rights Reserved.
          </p>

          <p>
  Designed by{" "}
  <a
    href="https://technovahub.in/"
    target="_blank"
    rel="noopener noreferrer"
  >
    TechnovaHub
  </a>
</p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;







