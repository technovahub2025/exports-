import { Link } from 'react-router-dom';
import './NeedServices.css';

function NeedServices() {
  return (
    <section className="need-services">
      <div className="need-services__overlay"></div>

      <div className="need-services__container">
        <div className="need-services__content">
          <span className="need-services__eyebrow">
            Need Our Services?
          </span>

          <h2>
            Reliable Export Solutions
            <br />
            Tailored for Global Trade Success
          </h2>

          <p>
            Reliable export solutions tailored for global trade success.
            Contact us!
          </p>

          <Link to="/contact-us/" className="need-services__button">
            Contact us
            <span>?</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NeedServices;



