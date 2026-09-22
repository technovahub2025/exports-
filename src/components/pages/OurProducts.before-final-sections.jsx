import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { products } from '../../data/productData.js';
import './OurProducts.css';

const categories = ['All', 'Spices', 'Powders', 'Coconut', 'Handcrafts'];

function OurProducts() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') {
      return products;
    }

    return products.filter(
      (product) => product.category === activeCategory
    );
  }, [activeCategory]);

  useEffect(() => {
    const cards = document.querySelectorAll('.our-product-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('our-product-card--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [activeCategory]);

  return (
    <main className="our-products-page">

      <section className="our-products-hero">
        <div className="our-products-hero__overlay"></div>

        <div className="our-products-hero__content">
          <div className="our-products-eyebrow">
            <FaGlobe />
            <span>What We Provide</span>
          </div>

          <h1>Our Popular Products</h1>

          <div className="our-products-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Our Products</span>
          </div>
        </div>
      </section>

      <section className="our-products-intro">
        <div className="our-products-intro__inner">

          <div className="our-products-intro__eyebrow">
            <FaGlobe />
            <span>Our Products</span>
          </div>

          <h2>
            Quality Products for
            <span> Global Markets</span>
          </h2>

          <p>
            We provide high-quality products carefully selected to meet
            international standards. Explore our wide range of agricultural,
            food, handicraft and furniture products.
          </p>

        </div>
      </section>

      <section className="our-products-grid-section">

        <div className="our-products-categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`our-products-category ${
                activeCategory === category
                  ? 'our-products-category--active'
                  : ''
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="our-products-grid">

          {filteredProducts.map((product, index) => (
            <article
              className="our-product-card"
              key={product.path}
              style={{
                '--card-delay': `${index * 0.12}s`,
              }}
            >
              <Link
                to={product.path}
                className="our-product-card__image"
              >
                <img
                  src={product.image}
                  alt={product.name}
                />

                <div className="our-product-card__view">
                  <FaArrowUpRightFromSquare />
                </div>
              </Link>

              <div className="our-product-card__content">

                <h3>{product.name}</h3>

                {product.hsn && (
                  <span className="our-product-card__hsn">
                    HSN: {product.hsn}
                  </span>
                )}

                <p>{product.description}</p>

                <Link
                  to={product.path}
                  className="our-product-card__button"
                >
                  View Product
                  <FaArrowUpRightFromSquare />
                </Link>

              </div>
            </article>
          ))}

        </div>

      </section>

    </main>
  );
}

export default OurProducts;
