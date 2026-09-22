import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ServicesCTA.css';

function ServicesCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('services-cta--visible');
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="services-cta">

      <div className="services-cta__image">
        <img
          src="/assets/images/services-truck.jpg"
          alt="Onion export"
        />
      </div>

      <div className="services-cta__content">

        <h3>Need Our Services?</h3>

        <p>
          Reliable export solutions tailored for global trade success.
          Contact us!
        </p>

        <Link
          to="/contact-us/"
          className="services-cta__button"
        >
          Contact us
          <span>↗</span>
        </Link>

      </div>

    </section>
  );
}

export default ServicesCTA;



