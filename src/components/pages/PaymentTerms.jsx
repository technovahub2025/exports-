import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaGlobe,
  FaTruck,
  FaDollarSign,
  FaArrowRightLong,
} from 'react-icons/fa6';
import './PaymentTerms.css';

const paymentMethods = [
  '100% TT',
  '100% ADVANCE',
  '100% IRRVOCABLE CONFIRMED LC',
  'ONSITE LC',
  '50% ADVANCE 50% IRRVOCABLE CONFIRMED LC',
  'TRANSFER LC',
];

const incoTerms = [
  'Contract Period : 3 Months, 6 Months, 1 Years , 3 Years Available',
  'No Price Fixation',
  'MOQ - Minimum Order Quantity Available',
  'Standard Packing : 5 KG,10 KG Available and at the Impoters Discretion',
  'Stand by Brand Available',
  'Third Party Inspection Availbale',
  'QC - Quality Control Available',
];

function PaymentTerms() {
  useEffect(() => {
    const elements = document.querySelectorAll(
  '.payment-experience, ' +
  '.payment-content, ' +
  '.inco-image, ' +
  '.inco-content'
);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('payment-animate--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="payment-page">

      {/* HERO */}
      <section className="payment-hero">
        <div className="payment-hero__overlay" />

        <div className="payment-hero__content">
          <h1>Payment Terms</h1>

          <div className="payment-hero__breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Payment Terms</span>
          </div>
        </div>
      </section>

      {/* INTRO + PAYMENT TERMS */}
      <section className="payment-main">
        <div className="payment-main__inner">

          <div className="payment-main__top">

            <div className="payment-experience payment-animate">
              <img
                src="/assets/images/payment.png"
                alt="Shipping and global trade"
              />

              <div className="payment-experience__badge">
                <h2>
                  We have <span>10+</span> years of Experience
                </h2>
              </div>
            </div>

            <div className="payment-content">

              <div className="payment-eyebrow payment-animate">
                <FaTruck />
                <span>Payment Terms</span>
              </div>

              <h2 className="payment-content__title payment-animate">
                Your Brand Exports
              </h2>

              <div className="payment-methods">
                {paymentMethods.map((method, index) => (
                  <div
                    className="payment-method payment-animate"
                    style={{ '--payment-delay': `${index * 0.08}s` }}
                    key={method}
                  >
                    <span className="payment-method__icon">
                      <FaDollarSign />
                    </span>

                    <span>{method}</span>
                  </div>
                ))}
              </div>

              <p className="payment-description payment-animate">
                Trust forms the pillar of our operations. As a leading
                exporter committed to trustworthiness, we place the utmost
                importance on integrity, transparency, and consistency in every
                business interaction. As trust is paramount for{' '}
                <strong>Your Brand Exporters</strong>, our credibility can be
                verified across India. Additionally, we furnish requisite
                certificates and deliver a visual experience of our products
                based on your specific requirements. We offer video content
                that showcases the excellence and features of each item in our
                inventory. In order to mitigate any risks associated with
                payment defaults, we offer Five preferred payment terms (varies
                by product).
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* INCO TERMS */}
      <section className="inco-section">
        <div className="inco-section__inner">

          <div className="inco-image payment-animate">
            <img
              src="/assets/images/Payment-Terms.png"
              alt="Payment Terms"
            />
          </div>

          <div className="inco-content">

            <div className="payment-eyebrow payment-animate">
              <FaGlobe />
              <span>INCO Terms</span>
            </div>

            <h2 className="inco-title payment-animate">
              INCO Terms
            </h2>

            <div className="inco-list">
              {incoTerms.map((term, index) => (
                <div
                  className="inco-item payment-animate"
                  style={{ '--payment-delay': `${index * 0.08}s` }}
                  key={term}
                >
                  <FaArrowRightLong />
                  <span>{term}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default PaymentTerms;





