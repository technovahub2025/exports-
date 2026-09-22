import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './PopularProducts.css';

const products = [
  {
    name: 'Onion',
    image: '/assets/images/Onion.png',
    path: '/onion/'
  },
  {
    name: 'Onion Powder',
    image: '/assets/images/Dehydrated-Onion-Powder.png',
    path: '/onion-powder/'
  },
  {
    name: 'Dehydrated Onion',
    image: '/assets/images/Dehydrated-Minced-Onion.png',
    path: '/dehydrated-onion/'
  },
];

function PopularProducts() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const rows = section.querySelectorAll('.popular-products__row');

    if (!rows.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('popular-products__row--visible');
          }
        });
      },
      {
        threshold: 0.18
      }
    );

    rows.forEach((row) => observer.observe(row));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="popular-products">
      <div className="popular-products__container">

        <div className="popular-products__heading">
          <div className="popular-products__eyebrow">
            <span>✦</span>
            Popular Products
          </div>

          <h2>Our Popular Products</h2>

          <p>
            Explore our range of quality products prepared for global
            markets.
          </p>
        </div>

        <div className="popular-products__grid">

          {Array.from(
            { length: Math.ceil(products.length / 3) },
            (_, rowIndex) => {
              const rowProducts = products.slice(
                rowIndex * 3,
                rowIndex * 3 + 3
              );

              return (
                <div
                  className="popular-products__row"
                  key={`row-${rowIndex}`}
                >
                  {rowProducts.map((product) => (
                    <div
                      className="popular-products__card"
                      key={product.path}
                    >
                      <Link
                        to={product.path}
                        className="popular-products__image-link"
                      >
                        <div className="popular-products__image">
                          <img
                            src={product.image}
                            alt={product.name}
                          />
                        </div>
                      </Link>

                      <div className="popular-products__content">
                        <h3>{product.name}</h3>

                        <Link
                          to={product.path}
                          className="popular-products__button"
                        >
                          View Product <span>→</span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              );
            }
          )}

        </div>

      </div>
    </section>
  );
}

export default PopularProducts;



