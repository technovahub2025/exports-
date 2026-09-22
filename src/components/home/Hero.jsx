import { useEffect, useState } from 'react';
import './Hero.css';
import { FaWhatsapp } from 'react-icons/fa';

const slides = [
  {
    image: '/assets/images/aeroplane.png',
    className: 'hero__slide-image hero__slide-image--plane',
  },
  {
    image: '/assets/images/container1.png',
    className: 'hero__slide-image hero__slide-image--container',
  },
];

const products = [
  'Onion',
  'Onion Powder',
  'Red Chilli',
  'Red Chilli Powder',
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">

      <div className="hero__slides">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`hero__slide ${
              index === currentSlide ? 'hero__slide--active' : ''
            }`}
          >
            <img
              src={slide.image}
              alt=""
              className={slide.className}
            />
          </div>
        ))}
      </div>

      <div className="hero__overlay" />

      <div className="hero__container">

        <div className="hero__left">

          <div className="hero__welcome">
            <span className="hero__truck">✦</span>
            <span>Welcome to XYZ Exports</span>
          </div>

          <h1>
            Connecting <span>Markets</span>
            <br />
            Across The Globe
          </h1>

          <p className="hero__description">
            XYZ Exports bridges international trade, delivering quality
            products and connecting global markets with trust and efficiency.
          </p>

          <div className="hero__bottom">

            <a href="/contact-us/" className="hero__contact-button">
              <span>Contact Us</span>
              <span>↗</span>
            </a>

            <a href="tel:919790340841" className="hero__phone">
              <span className="hero__phone-icon">☎</span>

              <span className="hero__phone-text">
                <span>Call us any time</span>
                <strong>+91 97903 40841</strong>
              </span>
            </a>

          </div>
        </div>

        <div className="hero__right">

          <div className="hero__form-heading">
            <h2>Request Estimate</h2>
          </div>

          <div className="hero__form-body">
            <form
              className="hero__form"
              onSubmit={(event) => event.preventDefault()}
            >

              <input
                type="text"
                placeholder="Name"
              />

              <div className="hero__form-row">
                <input
                  type="email"
                  placeholder="Email"
                  required
                />

                <input
                  type="tel"
                  placeholder="Mobile"
                  required
                />
              </div>

              <div className="hero__form-row">
                <input
                  type="text"
                  placeholder="Country"
                  required
                />

                <input
                  type="text"
                  placeholder="City"
                  required
                />
              </div>

              <select defaultValue="Onion" required>
                {products.map((product) => (
                  <option key={product} value={product}>
                    {product}
                  </option>
                ))}
              </select>

              <textarea
                rows="4"
                placeholder="Message"
              />

              <button type="submit">
                Submit
              </button>

            </form>
          </div>

        </div>
      </div>

      <a
        href="https://wa.me/919790340841"
        className="hero__whatsapp"
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp />
      </a>

      <div className="hero__decoration" />

    </section>
  );
}

export default Hero;







