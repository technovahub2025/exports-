
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BASE_PATH, withBasePath } from '../../utils/basePath.js';
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

    if (
      window.location.pathname === `${BASE_PATH}/` ||
      window.location.pathname === BASE_PATH
    ) {
      document.getElementById('about-company')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      return;
    }

    window.location.href = `${BASE_PATH}/#about-company`;
  };

  const renderCategoryLinks = (categories, mobile = false) =>
    categories.map((category) => (
      <NavLink
        key={category.path}
        to={withBasePath(category.path)}
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
          <Link to={withBasePath('/')} onClick={closeMobile}>
            <img
              src="/assets/images/Zaza-Exports-Logo.png"
              alt="Zaza Exports"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="zaza-header__nav">
          <NavLink
            to={withBasePath('/')}
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
              to={withBasePath('/our-products/')}
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

          <NavLink to={withBasePath('/certificates/')} className="zaza-nav__link">
            Certificates
          </NavLink>

          <NavLink to={withBasePath('/payment-terms/')} className="zaza-nav__link">
            Payment Terms
          </NavLink>

          <NavLink to={withBasePath('/faq/')} className="zaza-nav__link">
            FAQ
          </NavLink>

          <NavLink to={withBasePath('/contact-us/')} className="zaza-nav__link">
            Contact Us
          </NavLink>
        </nav>

        <div className="zaza-header__cta">
          <Link to={withBasePath('/e-catalogue/')} className="zaza-header__catalogue">
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
          <Link to={withBasePath('/')} onClick={closeMobile}>
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
            to={withBasePath('/')}
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
              to={withBasePath('/our-products/')}
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
            to={withBasePath('/certificates/')}
            onClick={closeMobile}
            className="zaza-mobile-link"
          >
            Certificates
          </NavLink>

          <NavLink
            to={withBasePath('/payment-terms/')}
            onClick={closeMobile}
            className="zaza-mobile-link"
          >
            Payment Terms
          </NavLink>

          <NavLink
            to={withBasePath('/faq/')}
            onClick={closeMobile}
            className="zaza-mobile-link"
          >
            FAQ
          </NavLink>

          <NavLink
            to={withBasePath('/contact-us/')}
            onClick={closeMobile}
            className="zaza-mobile-link"
          >
            Contact Us
          </NavLink>

          <NavLink
            to={withBasePath('/e-catalogue/')}
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

