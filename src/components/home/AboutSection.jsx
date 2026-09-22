import { useEffect, useRef } from 'react';
import './AboutSection.css';

function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('about-section--visible');
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.2
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    sectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section
      ref={sectionRef}
      id="about-company"
      className="about-section"
    >
      <div className="about-section__container">

        <div className="about-section__images">

          <div className="about-section__main-image-wrap">
            <img
              className="about-section__main-image"
              src="/assets/images/newAbout.png"
              alt="XYZ Exports global shipping"
            />
          </div>

          <div className="about-section__secondary-image-wrap">
            <img
              className="about-section__secondary-image"
              src="/assets/images/about2.png"
              alt="XYZ Exports products"
            />
          </div>

          <div className="about-section__experience">
            <span>We have</span>
            <strong>10+</strong>
            <span>years of</span>
            <span>Experience</span>
          </div>

        </div>

        <div className="about-section__content">

          <div className="about-section__eyebrow">
            <span className="about-section__eyebrow-icon">&#9635;</span>
            About Company
          </div>

          <h2>XYZ Exports</h2>

          <p className="about-section__description">
            <strong>XYZ Exports</strong> is a trusted name in the export
            industry, proudly serving global markets for over <strong>10
            years</strong>. We specialize in bulk exports with a minimum
            order quantity of <strong>1000 MT</strong> throughout the year,
            ensuring consistent supply and reliability. Our peak season runs
            from <strong>May to September</strong>, while we maintain steady
            operations from <strong>October to April</strong> during the
            unseasonal period. With deep market insights and a flexible
            approach, we adapt to fluctuating global demands with precision.
            At XYZ Exports, we are committed to quality, timely delivery and
            building lasting business relationships worldwide.
          </p>

          <div className="about-section__features">

            <div className="about-section__feature">
              <div className="about-section__feature-icon">
                $
              </div>

              <h3>Affordable Pricing</h3>
            </div>

            <div className="about-section__feature">
              <div className="about-section__feature-icon about-section__feature-icon--clock">
                ◷
              </div>

              <h3>On-Time Deliveries</h3>
            </div>

          </div>

          <button
            type="button"
            onClick={scrollToAbout}
            className="about-section__button"
          >
            Read More
            <span>→</span>
          </button>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;











