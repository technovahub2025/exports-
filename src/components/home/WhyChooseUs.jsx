import { useEffect, useRef } from 'react';
import {
  FaHeadset,
  FaCrown,
  FaTruckFast,
  FaTags
} from 'react-icons/fa6';
import './WhyChooseUs.css';

const features = [
  {
    icon: FaHeadset,
    title: '24/7 Hours Support',
    text: '24/7 dedicated support for seamless global trade and customer satisfaction anytime, anywhere.'
  },
  {
    icon: FaCrown,
    title: 'Premium Products',
    text: 'Discover our premium export products crafted for quality, trusted globally, delivered seamlessly.'
  },
  {
    icon: FaTruckFast,
    title: 'Fast & Efficient Delivery',
    text: 'Fast and efficient delivery ensuring timely shipments and customer satisfaction every time.'
  },
  {
    icon: FaTags,
    title: 'Affordable Price',
    text: 'Affordable export solutions with quality assurance, timely delivery, and competitive global pricing.'
  }
];

function WhyChooseUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const animatedElements = section.querySelectorAll(
      '.why-choose-us__eyebrow, ' +
      '.why-choose-us__heading h2, ' +
      '.why-choose-us__image-wrap, ' +
      '.why-choose-us__card'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('why-choose-us--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -70px 0px'
      }
    );

    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="why-choose-us">
      <div className="why-choose-us__container">

        <div className="why-choose-us__left">

          <div className="why-choose-us__heading">
            <div className="why-choose-us__eyebrow">              <FaTruckFast />              <span>Why Choose Us</span>
            </div>

            <h2>
              XYZ Exports
            </h2>
          </div>

          <div className="why-choose-us__image-wrap">
            <img
              src="/assets/images/Why-Choose-Us.png"
              alt="XYZ Exports cargo ship"
            />
          </div>

        </div>

        <div className="why-choose-us__features">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="why-choose-us__card"
                style={{ '--feature-delay': `${index * 180}ms` }}
              >
                <div className="why-choose-us__icon">
                  <Icon />
                </div>

                <div className="why-choose-us__card-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;




