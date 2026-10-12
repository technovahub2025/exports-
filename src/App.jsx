import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';

import Home from './components/home/Home.jsx';
import ECatalogue from './components/pages/ECatalogue.jsx';
import OurProducts from './components/pages/OurProducts.jsx';
import ProductCategoryPage from './components/pages/ProductCategoryPage.jsx';
import ProductPage from './components/pages/ProductPage.jsx';
import Certificates from './components/pages/Certificates.jsx';
import PaymentTerms from './components/pages/PaymentTerms.jsx';
import FAQ from './components/pages/FAQ.jsx';
import ContactUs from './components/pages/ContactUs.jsx';

function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (hash) return;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [pathname, search, hash]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about-us/"
          element={<Navigate to="/#about-company" replace />}
        />

        <Route path="/our-products/" element={<OurProducts />} />
        <Route path="/products/:category/" element={<ProductCategoryPage />} />

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
        <Route path="/handicraft-01/" element={<ProductPage />} />
        <Route path="/handicraft-02/" element={<ProductPage />} />
        <Route path="/handicraft-03/" element={<ProductPage />} />
        <Route path="/handicraft-04/" element={<ProductPage />} />
        <Route path="/handicraft-05/" element={<ProductPage />} />
        <Route path="/handicraft-06/" element={<ProductPage />} />
        <Route path="/handicraft-07/" element={<ProductPage />} />
        <Route path="/handicraft-08/" element={<ProductPage />} />
        <Route path="/handicraft-09/" element={<ProductPage />} />
        <Route path="/handicraft-10/" element={<ProductPage />} />
        <Route path="/handicraft-11/" element={<ProductPage />} />
        <Route path="/handicraft-12/" element={<ProductPage />} />
        <Route path="/handicraft-13/" element={<ProductPage />} />
        <Route path="/handicraft-14/" element={<ProductPage />} />
        <Route path="/handicraft-15/" element={<ProductPage />} />
        <Route path="/handicraft-16/" element={<ProductPage />} />

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

