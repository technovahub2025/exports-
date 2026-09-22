import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowLeft, FaGlobe } from 'react-icons/fa6';
import { getProductByPath } from '../../data/productData.js';
import './ProductPage.css';

function ProductPage() {
  const location = useLocation();
  const product = getProductByPath(location.pathname);

  useEffect(() => {
    const animatedElements = document.querySelectorAll(
      '.product-details__back, ' +
      '.product-details__image, ' +
      '.product-details__content, ' +
      '.product-details__label, ' +
      '.product-details__content h2, ' +
      '.product-details__hsn, ' +
      '.product-details__description, ' +
      '.product-details__button, ' +
      '.product-section-heading, ' +
      '.product-specification-row, ' +
      '.product-details__bottom'
    );

    // Reset all reveal states for the new product
    animatedElements.forEach((element) => {
      element.classList.remove('product-detail--visible');
    });

    // Wait for React to paint the hidden starting position first.
    const frame1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('product-detail--visible');
                observer.unobserve(entry.target);
              }
            });
          },
          {
            threshold: 0.12,
            rootMargin: '0px 0px -60px 0px',
          }
        );

        animatedElements.forEach((element) => {
          observer.observe(element);
        });
      });
    });

    return () => {
      cancelAnimationFrame(frame1);
    };
  }, [location.pathname]);
  if (!product) {
    return (
      <main className="product-page">
        <section className="product-not-found">
          <h1>Product Not Found</h1>

          <Link to="/our-products/" className="product-back-link">
            <FaArrowLeft />
            Back to Our Products
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="product-page">

      <section className="product-page__hero">
        <div className="product-page__hero-overlay"></div>

        <div className="product-page__hero-content">
          <div className="product-page__eyebrow">
            <FaGlobe />
            <span>Product Details</span>
          </div>

          <h1>{product.name}</h1>

          <div className="product-page__breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/our-products/">Our Products</Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>
        </div>
      </section>

      <section className="product-details">
        <div className="product-details__container">

          <Link
            to="/our-products/"
            className="product-details__back"
          >
            <FaArrowLeft />
            <span>Back to Our Products</span>
          </Link>

          <div className="product-details__main product-details__main--animate">

            <div className="product-details__image">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>

            <div className="product-details__content">

              <span className="product-details__label">
                XYZ Exports
              </span>

              <h2>{product.name}</h2>

              {product.hsn && (
                <div className="product-details__hsn">
                  <strong>HSN Code:</strong>
                  <span>{product.hsn}</span>
                </div>
              )}

              <p className="product-details__description">
                {product.description}
              </p>

              <Link
                to="/contact-us/"
                className="product-details__button"
              >
                Enquire Now
                <span>↗</span>
              </Link>

            </div>

          </div>

          {product.specifications?.length > 0 && (
            <div className="product-specifications">

              <div className="product-section-heading">
                <span>Product Information</span>
                <h2>Specifications</h2>
              </div>

              <div className="product-specifications__table">

                {product.specifications.map((item, index) => (
                  <div
                    className="product-specification-row"
                    key={`${item[0]}-${index}`}
                    style={{
                      '--spec-delay': `${index * 0.08}s`,
                    }}
                  >
                    <div className="product-specification-label">
                      {item[0]}
                    </div>

                    <div className="product-specification-value">
                      {item[1]}
                    </div>
                  </div>
                ))}

              </div>

            </div>
          )}

          <div className="product-details__bottom">

            <Link
              to="/our-products/"
              className="product-details__bottom-link"
            >
              <FaArrowLeft />
              View All Products
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default ProductPage;








