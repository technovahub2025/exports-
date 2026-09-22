import { useEffect, useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    text: 'XYZ Exports has consistently delivered high-quality products on time. Their professionalism and attention to detail make them a reliable global partner. We look forward to a long-term collaboration.',
    image: '/assets/images/avatar-1-150x150.webp',
    name: 'Rajesh Mehta',
    location: 'Mumbai',
  },
  {
    text: "We've worked with many exporters, but XYZ Exports stands out for their transparent communication and top-notch service. Truly impressed by their commitment to excellence.",
    image: '/assets/images/avatar-2-150x150.webp',
    name: 'Merlin',
    location: 'Chennai',
  },
  {
    text: 'XYZ Exports exceeded our expectations with their timely shipments and premium product quality. A trustworthy export company with a global vision.',
    image: '/assets/images/avatar-3-150x150.webp',
    name: 'Mohammed Ali',
    location: 'Bangalore',
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[current];

  return (
    <section className="zaza-testimonials">

      <div className="zaza-testimonials__overlay" />

      <div className="zaza-testimonials__container">

        <div className="zaza-testimonials__heading">
          <div className="zaza-testimonials__eyebrow">
            <span className="zaza-testimonials__eyebrow-icon">▣</span>
            <span>Testimonials</span>
          </div>

          <h2>What Our Customers Are Saying</h2>
        </div>

        <div className="zaza-testimonials__stage">

          {/* Original surrounding decorative images */}
          <img
            className="zaza-testimonials__decor zaza-testimonials__decor--1"
            src="/assets/images/avatar-3.webp"
            alt=""
          />

          <img
            className="zaza-testimonials__decor zaza-testimonials__decor--2"
            src="/assets/images/Testimonials-3.webp"
            alt=""
          />

          <img
            className="zaza-testimonials__decor zaza-testimonials__decor--3"
            src="/assets/images/testimonial-4.webp"
            alt=""
          />

          <img
            className="zaza-testimonials__decor zaza-testimonials__decor--4"
            src="/assets/images/Testimonials-2.webp"
            alt=""
          />

          <img
            className="zaza-testimonials__decor zaza-testimonials__decor--5"
            src="/assets/images/avatar-1.webp"
            alt=""
          />

          <img
            className="zaza-testimonials__decor zaza-testimonials__decor--6"
            src="/assets/images/avatar-2.webp"
            alt=""
          />

          {/* Main testimonial */}
          <div className="zaza-testimonials__quote">
            “
          </div>

          <div className="zaza-testimonials__review">

            <p>{testimonial.text}</p>

            <div className="zaza-testimonials__stars">
              ★ ★ ★ ★ ★
            </div>

            <div className="zaza-testimonials__customer">

              <img
                src={testimonial.image}
                alt={testimonial.name}
              />

              <h3>{testimonial.name}</h3>

              <span>{testimonial.location}</span>

            </div>

          </div>

        </div>

        <div className="zaza-testimonials__dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              className={
                index === current
                  ? 'zaza-testimonials__dot active'
                  : 'zaza-testimonials__dot'
              }
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;



