import { useEffect, useRef, useState } from 'react';
import './StatsSection.css';

const stats = [
  {
    value: 10,
    suffix: '+',
    label: 'Years Experience',
    type: 'person'
  },
  {
    value: 1500,
    suffix: '+',
    label: 'Happy Customers',
    type: 'customers'
  },
  {
    value: 15,
    suffix: '+',
    label: 'Export Countries',
    type: 'globe'
  },
  {
    value: 10,
    suffix: '+',
    label: 'Organic Products',
    type: 'box'
  }
];

function StatIcon({ type }) {
  if (type === 'person') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="16" r="11" />
        <path d="M15 52c1-12 7-19 17-19s16 7 17 19H15Z" />
        <path d="M26 34l6 10 6-10" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M29 44v8M35 44v8" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
    );
  }

  if (type === 'customers') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="18" r="9" />
        <circle cx="13" cy="27" r="7" />
        <circle cx="51" cy="27" r="7" />
        <path d="M17 52c1-10 6-16 15-16s14 6 15 16H17Z" />
        <path d="M2 51c1-7 4-11 10-11 5 0 8 4 9 11" />
        <path d="M43 51c1-7 4-11 9-11 6 0 9 4 10 11" />
      </svg>
    );
  }

  if (type === 'globe') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M10 32h44" fill="none" stroke="currentColor" strokeWidth="4" />
        <path
          d="M32 10c7 7 10 14 10 22s-3 15-10 22c-7-7-10-14-10-22s3-15 10-22Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="M8 22 32 8l24 14-24 14L8 22Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M8 22v21l24 14 24-14V22"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M32 36v21M8 22l24 14 24-14M20 15l24 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StatsSection() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.25
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 1800;
    const startTime = performance.now();

    let animationFrame;

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setCounts(
        stats.map((stat) =>
          Math.floor(stat.value * easedProgress)
        )
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCounts(stats.map((stat) => stat.value));
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [started]);

  const formatValue = (value, index) => {
    if (index === 1) {
      if (value >= 1500) return '1.5K';
      return value.toLocaleString();
    }

    return value.toString();
  };

  return (
    <section
      ref={sectionRef}
      className={`stats-section ${
        started ? 'stats-section--visible' : ''
      }`}
    >
      <div className="stats-section__overlay" />

      <div className="stats-section__container">
        <div className="stats-section__grid">

          {stats.map((stat, index) => (
            <div
              className="stats-section__card"
              key={stat.label}
              style={{
                '--stat-delay': `${index * 0.15}s`
              }}
            >
              <div className="stats-section__icon">
                <StatIcon type={stat.type} />
              </div>

              <div className="stats-section__content">
                <div className="stats-section__number">
                  {formatValue(counts[index], index)}
                  {stat.suffix}
                </div>

                <div className="stats-section__label">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default StatsSection;



