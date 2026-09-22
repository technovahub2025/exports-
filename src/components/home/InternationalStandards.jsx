import { useEffect } from 'react';
import './InternationalStandards.css';

const standards = [
  {
    name: 'European Standards',
    type: 'europe'
  },
  {
    name: 'Gulf Standards',
    type: 'gulf'
  },
  {
    name: 'Asian Standards',
    type: 'asia'
  },
  {
    name: 'Middle-East Standards',
    type: 'middleeast'
  }
];

function WorldIcon({ className = '' }) {
  return (
    <svg
      className={`world-icon ${className}`}
      viewBox="0 0 64 64"
      aria-hidden="true"
    >
      <circle
        cx="32"
        cy="32"
        r="27"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M5 32h54M32 5c8 8 12 17 12 27s-4 19-12 27c-8-8-12-17-12-27S24 13 32 5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
}

function StandardIcon() {
  return (
    <img
      className="standard-globe-icon"
      src="/assets/images/world-globe.svg"
      alt=""
      aria-hidden="true"
    />
  );
}
function InternationalStandards() {
  useEffect(() => {
    const section = document.querySelector('.international-standards');
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section
            .querySelectorAll('.international-standards__logo')
            .forEach((el) =>
              el.classList.add('international-standards--visible')
            );

          section
            .querySelectorAll('.international-standards__eyebrow')
            .forEach((el) =>
              el.classList.add('international-standards--visible')
            );

          section
            .querySelectorAll('.international-standards__top h2')
            .forEach((el) =>
              el.classList.add('international-standards--visible')
            );

          section
            .querySelectorAll('.international-standards__card')
            .forEach((el) =>
              el.classList.add('international-standards--visible')
            );

          observer.unobserve(section);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -80px 0px'
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="international-standards">
      <div className="international-standards__container">

        <div className="international-standards__top">

          <div className="international-standards__logo">
            <img
              src="/assets/images/SGS-Logo.png"
              alt="SGS"
            />
          </div>

          <div className="international-standards__eyebrow">
            <WorldIcon />
            <span>International Standards</span>
          </div>

          <h2>We Provide International Standards</h2>

        </div>

        <div className="international-standards__grid">

          {standards.map((standard, index) => (
            <div
              className={`international-standards__card ${
                index === 0
                  ? 'international-standards__card--active'
                  : ''
              }`}
              style={{
                '--standard-delay': `${index * 0.12}s`
              }}
              key={standard.name}
            >

              <div className="international-standards__icon">
                <StandardIcon type={standard.type} />
              </div>

              <h3>{standard.name}</h3>

              <span className="international-standards__line" />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default InternationalStandards;







