
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const spiceCategories = [
  { name: 'Turmeric', path: '/products/turmeric/' },
  { name: 'Chilli', path: '/products/chilli/' },
  { name: 'Pure Spices', path: '/products/pure-spices/' },
  { name: 'Blended Spices', path: '/products/blended-spices/' },
  { name: 'Seasonings', path: '/products/seasonings/' },
  { name: 'Marination Mixes', path: '/products/marination-mixes/' },
  { name: 'Culinary Paste', path: '/products/culinary-paste/' },
  { name: 'Chutney Powder', path: '/products/chutney-powder/' }
];

const otherCategories = [
  { name: 'Coconut', path: '/coconut/' },
  { name: 'Handicrafts', path: '/handicrafts/' }
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setProductsOpen(false);
  };

  const goToAboutCompany = () => {
    closeMobile();

    if (window.location.pathname === '/') {
      document.getElementById('about-company')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      return;
    }

    window.location.href = '/#about-company';
  };

  const renderCategoryLinks = (categories, mobile = false) =>
    categories.map((category) => (
      <NavLink
        key={category.path}
        to={category.path}
        onClick={mobile ? closeMobile : undefined}
        className={mobile ? 'zaza-mobile-sublink' : 'zaza-dropdown__item'}
      >
        {category.name}
      </NavLink>
    ));

  return (
    <header className="zaza-header">
      <div className="zaza-header__container">
        <div className="zaza-header__logo">
          <Link to="/" onClick={closeMobile}>
            <img
              src="/assets/images/Zaza-Exports-Logo.png"
              alt="Zaza Exports"
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

          <div className="zaza-nav__products">
            <NavLink
              to="/our-products/"
              className={({ isActive }) =>
                `zaza-nav__link ${isActive ? 'active' : ''}`
              }
            >
              Our Products
              <span className="zaza-nav__arrow">&darr;</span>
            </NavLink>

            <div className="zaza-dropdown">
              {renderCategoryLinks(spiceCategories)}

              <div className="zaza-dropdown__divider" />

              {renderCategoryLinks(otherCategories)}
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

        <div className="zaza-header__cta">
          <Link to="/e-catalogue/" className="zaza-header__catalogue">
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
              alt="Zaza Exports"
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

          <div className="zaza-mobile-link zaza-mobile-link--button">
            <Link
              to="/our-products/"
              onClick={closeMobile}
              className="zaza-mobile-link__text"
            >
              Our Products
            </Link>

            <button
              type="button"
              onClick={() => setProductsOpen(!productsOpen)}
              className="zaza-mobile-link__arrow"
              aria-label="Toggle products menu"
              aria-expanded={productsOpen}
            >
              {productsOpen
                ? String.fromCharCode(8593)
                : String.fromCharCode(8595)}
            </button>
          </div>

          {productsOpen && (
            <div className="zaza-mobile-submenu">
              {renderCategoryLinks(spiceCategories, true)}

              <div className="zaza-dropdown__divider" />

              {renderCategoryLinks(otherCategories, true)}
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
