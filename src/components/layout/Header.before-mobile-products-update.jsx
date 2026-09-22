import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const productItems = [
  { name: 'Onion', path: '/onion/' },
  { name: 'Onion Powder', path: '/onion-powder/' },
  { name: 'Red Chilli', path: '/red-chilli/' },
  { name: 'Red Chilli Powder', path: '/red-chilli-powder/' },
  { name: 'Turmeric', path: '/turmeric/' },
  { name: 'Turmeric Powder', path: '/turmeric-powder/' },
  { name: 'Turmeric Finger', path: '/turmeric-finger/' },
  { name: 'Coconut', path: '/coconut/' },
  { name: 'Coco Coir', path: '/coco-coir/' },
  { name: 'Coco Peat Blocks', path: '/coco-peat-blocks/' },
  { name: 'Handicrafts', path: '/handicrafts/' }
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [handicraftsOpen, setHandicraftsOpen] = useState(false);
  const [woodenOpen, setWoodenOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setProductsOpen(false);
    setHandicraftsOpen(false);
    setWoodenOpen(false);
  };

  const goToAboutCompany = () => {
  if (window.location.pathname === '/') {
    document.getElementById('about-company')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    return;
  }

  window.location.href = '/#about-company';
};

  return (
    <header className="zaza-header">
      <div className="zaza-header__container">

        {/* Logo */}
        <div className="zaza-header__logo">
          <Link to="/" onClick={closeMobile}>
            <img
              src="/assets/images/Zaza-Exports-Logo.png"
              alt="XYZ Exports"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="zaza-header__nav">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `zaza-nav__link ${isActive ? 'active' : ''}`
            }
          >
            Home
          </NavLink>

          <button
            type="button"
            className="zaza-nav__link zaza-nav__about-button"
            onClick={goToAboutCompany}
          >
            About Us
          </button>

          {/* Products */}
          <div className="zaza-nav__products">

            <NavLink
              to="/our-products/"
              className={({ isActive }) =>
                `zaza-nav__link ${isActive ? 'active' : ''}`
              }
            >
              Our Products
              <span className="zaza-nav__arrow">▼</span>
            </NavLink>

            <div className="zaza-dropdown">

              {productItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="zaza-dropdown__item"
                >
                  {item.name}
                </NavLink>
              ))}

              {/* Handicrafts */}
              <div className="zaza-dropdown__nested">

                <div className="zaza-dropdown__item zaza-dropdown__parent">
                  <span>Handicrafts</span>
                  <span>›</span>
                </div>

                <div className="zaza-dropdown zaza-dropdown--nested">

                  {/* Wooden Products */}
                  <div className="zaza-dropdown__nested">

                    <div className="zaza-dropdown__item zaza-dropdown__parent">
                      <span>Wooden Products</span>
                      <span>›</span>
                    </div>

                    <div className="zaza-dropdown zaza-dropdown--nested zaza-dropdown--wooden">

                      <NavLink
                        to="/wooden-handicrafts/"
                        className="zaza-dropdown__item"
                      >
                        Wooden Handicrafts
                      </NavLink>

                      <NavLink
                        to="/wooden-furnitures/"
                        className="zaza-dropdown__item"
                      >
                        Wooden Furnitures
                      </NavLink>

                      <NavLink
                        to="/bamboo-furnitures/"
                        className="zaza-dropdown__item"
                      >
                        Bamboo Furnitures
                      </NavLink>

                    </div>
                  </div>

                  <NavLink
                    to="/jute-handicrafts/"
                    className="zaza-dropdown__item"
                  >
                    Jute Handicrafts
                  </NavLink>

                </div>
              </div>

            </div>
          </div>

          <NavLink to="/certificates/" className="zaza-nav__link">
            Certificates
          </NavLink>

          <NavLink to="/payment-terms/" className="zaza-nav__link">
            Payment Terms
          </NavLink>

          <NavLink to="/faq/" className="zaza-nav__link">
            FAQ
          </NavLink>

          <NavLink to="/contact-us/" className="zaza-nav__link">
            Contact Us
          </NavLink>

        </nav>

        {/* Catalogue */}
        <div className="zaza-header__cta">
          <Link
            to="/e-catalogue/"
            className="zaza-header__catalogue"
          >
            E-Catalogue
            <span>&#8599;</span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="zaza-header__mobile-toggle"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          &#9776;
        </button>

      </div>

      {/* Mobile menu */}
      <div
        className={`zaza-mobile-menu ${
          mobileOpen ? 'zaza-mobile-menu--open' : ''
        }`}
      >

        <div className="zaza-mobile-menu__header">

          <Link to="/" onClick={closeMobile}>
            <img
              src="/assets/images/Zaza-Exports-Logo.png"
              alt="XYZ Exports"
            />
          </Link>

          <button
            type="button"
            className="zaza-mobile-menu__close"
            onClick={closeMobile}
            aria-label="Close menu"
          >
            ×
          </button>

        </div>

        <nav className="zaza-mobile-menu__nav">

          <NavLink
            to="/"
            end
            onClick={closeMobile}
            className="zaza-mobile-link"
          >
            Home
          </NavLink>

          <button
            type="button"
            onClick={goToAboutCompany}
            className="zaza-mobile-link zaza-mobile-link--button"
          >
            About Us
          </button>

          <button
            type="button"
            onClick={() => setProductsOpen(!productsOpen)}
            className="zaza-mobile-link zaza-mobile-link--button"
          >
            <span>Our Products</span>
            <span>{productsOpen ? '▲' : '▼'}</span>
          </button>

          {productsOpen && (
            <div className="zaza-mobile-submenu">

              {productItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMobile}
                  className="zaza-mobile-sublink"
                >
                  {item.name}
                </NavLink>
              ))}

              <button
                type="button"
                onClick={() => setHandicraftsOpen(!handicraftsOpen)}
                className="zaza-mobile-sublink zaza-mobile-sublink--button"
              >
                <span>Handicrafts</span>
                <span>{handicraftsOpen ? '▲' : '▼'}</span>
              </button>

              {handicraftsOpen && (
                <div className="zaza-mobile-nested">

                  <button
                    type="button"
                    onClick={() => setWoodenOpen(!woodenOpen)}
                    className="zaza-mobile-sublink zaza-mobile-sublink--button"
                  >
                    <span>Wooden Products</span>
                    <span>{woodenOpen ? '▲' : '▼'}</span>
                  </button>

                  {woodenOpen && (
                    <div className="zaza-mobile-nested">

                      <NavLink
                        to="/wooden-handicrafts/"
                        onClick={closeMobile}
                        className="zaza-mobile-sublink"
                      >
                        Wooden Handicrafts
                      </NavLink>

                      <NavLink
                        to="/wooden-furnitures/"
                        onClick={closeMobile}
                        className="zaza-mobile-sublink"
                      >
                        Wooden Furnitures
                      </NavLink>

                      <NavLink
                        to="/bamboo-furnitures/"
                        onClick={closeMobile}
                        className="zaza-mobile-sublink"
                      >
                        Bamboo Furnitures
                      </NavLink>

                    </div>
                  )}

                  <NavLink
                    to="/jute-handicrafts/"
                    onClick={closeMobile}
                    className="zaza-mobile-sublink"
                  >
                    Jute Handicrafts
                  </NavLink>

                </div>
              )}

            </div>
          )}

          <NavLink
            to="/certificates/"
            onClick={closeMobile}
            className="zaza-mobile-link"
          >
            Certificates
          </NavLink>

          <NavLink
            to="/payment-terms/"
            onClick={closeMobile}
            className="zaza-mobile-link"
          >
            Payment Terms
          </NavLink>

          <NavLink
            to="/faq/"
            onClick={closeMobile}
            className="zaza-mobile-link"
          >
            FAQ
          </NavLink>

          <NavLink
            to="/contact-us/"
            onClick={closeMobile}
            className="zaza-mobile-link"
          >
            Contact Us
          </NavLink>

          <NavLink
            to="/e-catalogue/"
            onClick={closeMobile}
            className="zaza-mobile-link"
          >
            E-Catalogue
          </NavLink>

        </nav>
      </div>
    </header>
  );
}

export default Header;















