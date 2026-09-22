import { useEffect } from 'react';
import { FaGlobe, FaArrowUpRightFromSquare, FaFileLines } from 'react-icons/fa6';
import './Certificates.css';

function Certificates() {
  useEffect(() => {
    const elements = document.querySelectorAll('.certificate-animate');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('certificate-animate--visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="certificates-page">
      <section className="certificates-page__hero">
        <div className="certificates-page__hero-overlay" />
        <div className="certificates-page__hero-content">
          <div className="certificates-page__eyebrow">
            <FaGlobe />
            <span>XYZ Exports</span>
          </div>
          <h1>Certificates</h1>
          <div className="certificates-page__breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Certificates</span>
          </div>
        </div>
      </section>

      <section className="certificates-content">
        <div className="certificates-container">
          <div className="certificates-heading certificate-animate">
            <div className="certificates-heading__label">
              <FaFileLines />
              <span>Our Certificate</span>
            </div>
            <h2>Our Certificate</h2>
          </div>        </div>      </section>
    </main>
  );
}

export default Certificates;





