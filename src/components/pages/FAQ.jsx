import { useEffect, useState } from 'react';
import { FaGlobe, FaPlus, FaMinus } from 'react-icons/fa6';
import './FAQ.css';

const faqs = [
  {
    question: 'What types of products does XYZ Exports deal with?',
    answer: 'XYZ Exports specializes in a wide range of export products including agricultural commodities, spices, garments, handicrafts, and processed foods, depending on client needs and market demand.'
  },
  {
    question: 'Are your products certified for international standards?',
    answer: 'Yes, all our export products comply with relevant international quality standards and certifications, ensuring safety, hygiene, and authenticity.'
  },
  {
    question: 'Can I request custom packaging or labeling for export?',
    answer: 'Absolutely. We offer custom packaging, private labeling, and branding options tailored to the importer’s requirements.'
  },
  {
    question: 'What is the minimum order quantity (MOQ) for exports?',
    answer: 'MOQ varies based on the product category. Please contact our team for specific product-related MOQ details.'
  },
  {
    question: 'Which countries does XYZ Exports supply to?',
    answer: 'We currently export to several countries across the Middle East, Europe, Africa, and Southeast Asia, and are open to exploring new markets.'
  },
  {
    question: 'How do I place a bulk export order with XYZ Exports?',
    answer: 'You can contact us through our website or email. Our export manager will guide you through the ordering, documentation, and shipping process.'
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll('.faq-animate');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('faq-animate--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <main className="faq-page">
      <section className="faq-page__hero">
        <div className="faq-page__hero-overlay" />

        <div className="faq-page__hero-content">
          <div className="faq-page__eyebrow">
            <FaGlobe />
            <span>FAQ</span>
          </div>

          <h1>Frequently Asked Question</h1>

          <div className="faq-page__breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>FAQ</span>
          </div>
        </div>
      </section>

      <section className="faq-content">
        <div className="faq-container">

          <div className="faq-heading faq-animate">
            <div className="faq-heading__label">
              <FaGlobe />
              <span>FAQ</span>
            </div>

            <h2>Frequently Asked Question</h2>

            <p>
              Find answers to common questions about our export products,
              including quality, packaging, shipping process, and international
              delivery timelines.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  className={`faq-item ${
                    isOpen ? 'faq-item--open' : ''
                  }`}
                  style={{ '--faq-delay': `${index * 0.08}s` }}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="faq-item__question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>

                    <span className="faq-item__icon">
                      {isOpen ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-item__answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </main>
  );
}

export default FAQ;




