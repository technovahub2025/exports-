import { useEffect } from 'react';
import {
  FaGlobe,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaArrowRight
} from 'react-icons/fa6';
import './ContactUs.css';

const contactInfo = [
  {
    icon: FaLocationDot,
    title: 'Our Address',
    content: '123 Business Avenue, Industrial Area, Chennai, Tamil Nadu, India - 600001.'
  },
  {
    icon: FaPhone,
    title: 'Phone',
    content: '+91 9876543210',
    href: 'tel:+919790340841'
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    content: 'info@xyzexports.com',
    href: 'mailto:info@zazaexports.com'
  },
  {
    icon: FaClock,
    title: 'Working Hours',
    content: 'Mon - Sat : 09.00 am - 06.00 pm'
  }
];

function ContactUs() {
  useEffect(() => {
    const elements = document.querySelectorAll('.contact-animate');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('contact-animate--visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="contact-page">
      <section className="contact-page__hero">
        <div className="contact-page__hero-overlay" />
        <div className="contact-page__hero-content">
          <div className="contact-page__eyebrow">
            <FaGlobe />
            <span>Contact</span>
          </div>
          <h1>Get in touch with us</h1>
          <div className="contact-page__breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Contact Us</span>
          </div>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-intro contact-animate">
            <div className="contact-intro__label">
              <FaGlobe />
              <span>Contact</span>
            </div>
            <h2>Get in touch with us</h2>
            <p>
              Get in touch with us today for inquiries, support, or
              collaborations. We’re here to assist you with quick, reliable,
              and friendly service.
            </p>
          </div>

          <div className="contact-layout">
            <div className="contact-info">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    className="contact-info__card contact-animate"
                    style={{ '--contact-delay': `${index * 0.08}s` }}
                    key={`${item.title}-${item.content}`}
                  >
                    <div className="contact-info__icon">
                      <Icon />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      {item.href ? (
                        <a href={item.href}>{item.content}</a>
                      ) : (
                        <p>{item.content}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="contact-form-card contact-animate">
              <div className="contact-form-card__heading">
                <span>Active & Ready to use Contact Form!</span>
                <h2>Send Us a Message</h2>
              </div>

              <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
                <div className="contact-form__grid">
                  <label>
                    <span>Name</span>
                    <input type="text" name="name" placeholder="Your Name" />
                  </label>

                  <label>
                    <span>Email</span>
                    <input type="email" name="email" placeholder="Your Email" />
                  </label>

                  <label>
                    <span>Mobile</span>
                    <input type="tel" name="mobile" placeholder="Mobile Number" />
                  </label>

                  <label>
                    <span>Country</span>
                    <input type="text" name="country" placeholder="Country" />
                  </label>

                  <label>
                    <span>City</span>
                    <input type="text" name="city" placeholder="City" />
                  </label>

                  <label>
                    <span>Products</span>
                    <select name="product" defaultValue="">
                      <option value="" disabled>Select Product</option>
                      <option>Onion</option>
                      <option>Onion Powder</option>
                      <option>Red Chilli</option>
                      <option>Red Chilli Powder</option>
                    </select>
                  </label>
                </div>

                <label>
                  <span>Message</span>
                  <textarea name="message" rows="6" placeholder="Your Message" />
                </label>

                <button type="submit">
                  Submit
                  <FaArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactUs;



