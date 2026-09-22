import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';

import Home from './components/home/Home.jsx';
import ECatalogue from './components/pages/ECatalogue.jsx';
import OurProducts from './components/pages/OurProducts.jsx';
import ProductPage from './components/pages/ProductPage.jsx';
import Certificates from './components/pages/Certificates.jsx';
import PaymentTerms from './components/pages/PaymentTerms.jsx';
import FAQ from './components/pages/FAQ.jsx';
import ContactUs from './components/pages/ContactUs.jsx';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about-us/"
          element={<Navigate to="/#about-company" replace />}
        />

        <Route path="/our-products/" element={<OurProducts />} />

        <Route path="/onion/" element={<ProductPage />} />
        <Route path="/onion-powder/" element={<ProductPage />} />
        <Route path="/red-chilli/" element={<ProductPage />} />
        <Route path="/red-chilli-powder/" element={<ProductPage />} />

        <Route path="/turmeric/" element={<ProductPage />} />
        <Route path="/turmeric-powder/" element={<ProductPage />} />
        <Route path="/turmeric-finger/" element={<ProductPage />} />
        <Route path="/coconut/" element={<ProductPage />} />
        <Route path="/coco-coir/" element={<ProductPage />} />
        <Route path="/coco-peat-blocks/" element={<ProductPage />} />
        <Route path="/handicrafts/" element={<ProductPage />} />

        <Route path="/certificates/" element={<Certificates />} />
        <Route path="/payment-terms/" element={<PaymentTerms />} />
        <Route path="/faq/" element={<FAQ />} />
        <Route path="/contact-us/" element={<ContactUs />} />

        <Route path="/e-catalogue/" element={<ECatalogue />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
