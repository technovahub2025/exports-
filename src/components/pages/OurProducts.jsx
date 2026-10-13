import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { products } from '../../data/productData.js';
import { routerPath as withBasePath } from '../../utils/basePath.js';
import './OurProducts.css';

const categorySections = [
  { name: 'Spices', products: products.filter((product) => product.category === 'Spices') },
  { name: 'Powders', products: products.filter((product) => product.category === 'Powders') },
  { name: 'Coconut', products: products.filter((product) => product.category === 'Coconut') },
  { name: 'Handicrafts', products: products.filter((product) => product.category === 'Handicrafts') }
];

function OurProducts() {
  const [activeCategory, setActiveCategory] = useState('All Products');

  const filteredCategorySections =
    activeCategory === 'All Products'
      ? categorySections
      : categorySections.filter(
          (category) => category.name === activeCategory
        );

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
            <Link to={withBasePath('/')}>Home</Link>
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
            food, handicraft and coconut-based products.
          </p>

        </div>
      </section>

      <section className="product-range-overview">
        <div className="product-range-overview__heading">
          <p>EXPLORE OUR RANGE</p>
          <h2>Browse Product Categories</h2>
        </div>

        <div className="product-range-overview__grid">
          {[
            { name: 'Turmeric', path: '/products/turmeric/' },
            { name: 'Chilli', path: '/products/chilli/' },
            { name: 'Pure Spices', path: '/products/pure-spices/' },
            { name: 'Blended Spices', path: '/products/blended-spices/' },
            { name: 'Seasonings', path: '/products/seasonings/' },
            { name: 'Marination Mixes', path: '/products/marination-mixes/' },
            { name: 'Culinary Paste', path: '/products/culinary-paste/' },
            { name: 'Chutney Powder', path: '/products/chutney-powder/' }
          ].map((category) => (
            <Link
              key={category.path}
              to={withBasePath(category.path)}
              className="product-range-overview__card"
            >
              <span>{category.name}</span>
              <span aria-hidden="true">?</span>
            </Link>
          ))}
        </div>
      </section>
      <div className="our-products-filters">
        {[
          'All Products',
          'Spices',
          'Powders',
          'Coconut',
          'Handicrafts'
        ].map((category) => (
          <button
            key={category}
            type="button"
            className={`our-products-filter ${
              activeCategory === category
                ? 'our-products-filter--active'
                : ''
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <section className="our-products-grid-section">

        {filteredCategorySections.map((category) => (
          <div
            className="our-products-category-section"
            key={category.name}
          >

            <div className="our-products-category-heading">
              <h2>{category.name}</h2>
            </div>

            <div className="our-products-grid">

              {category.products.map((product, index) => (
                <article
                  className="our-product-card"
                  key={product.path}
                  style={{
                    '--card-delay': `${index * 0.12}s`,
                  }}
                >
                  <Link
                    to={withBasePath(product.path)}
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
                      to={withBasePath(product.path)}
                      className="our-product-card__button"
                    >
                      View Product
                      <FaArrowUpRightFromSquare />
                    </Link>

                  </div>
                </article>
              ))}

            </div>

          </div>
        ))}

      </section>

    </main>
  );
}

export default OurProducts;






