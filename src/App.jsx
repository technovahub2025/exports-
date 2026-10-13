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
import { BASE_PATH, withBasePath } from './utils/basePath.js';

const pageRoutes = [
  { path: '/', element: <Home /> },
  { path: '/our-products/', element: <OurProducts /> },
  { path: '/products/:category/', element: <ProductCategoryPage /> },
  { path: '/onion/', element: <ProductPage /> },
  { path: '/onion-powder/', element: <ProductPage /> },
  { path: '/red-chilli/', element: <ProductPage /> },
  { path: '/red-chilli-powder/', element: <ProductPage /> },
  { path: '/turmeric/', element: <ProductPage /> },
  { path: '/turmeric-powder/', element: <ProductPage /> },
  { path: '/turmeric-finger/', element: <ProductPage /> },
  { path: '/coconut/', element: <ProductPage /> },
  { path: '/coco-coir/', element: <ProductPage /> },
  { path: '/coco-peat-blocks/', element: <ProductPage /> },
  { path: '/handicrafts/', element: <ProductPage /> },
  { path: '/handicraft-01/', element: <ProductPage /> },
  { path: '/handicraft-02/', element: <ProductPage /> },
  { path: '/handicraft-03/', element: <ProductPage /> },
  { path: '/handicraft-04/', element: <ProductPage /> },
  { path: '/handicraft-05/', element: <ProductPage /> },
  { path: '/handicraft-06/', element: <ProductPage /> },
  { path: '/handicraft-07/', element: <ProductPage /> },
  { path: '/handicraft-08/', element: <ProductPage /> },
  { path: '/handicraft-09/', element: <ProductPage /> },
  { path: '/handicraft-10/', element: <ProductPage /> },
  { path: '/handicraft-11/', element: <ProductPage /> },
  { path: '/handicraft-12/', element: <ProductPage /> },
  { path: '/handicraft-13/', element: <ProductPage /> },
  { path: '/handicraft-14/', element: <ProductPage /> },
  { path: '/handicraft-15/', element: <ProductPage /> },
  { path: '/handicraft-16/', element: <ProductPage /> },
  { path: '/certificates/', element: <Certificates /> },
  { path: '/payment-terms/', element: <PaymentTerms /> },
  { path: '/faq/', element: <FAQ /> },
  { path: '/contact-us/', element: <ContactUs /> },
  { path: '/e-catalogue/', element: <ECatalogue /> },
];

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
        {/* Enforce about-us redirect variants */}
        <Route
          path="/about-us"
          element={<Navigate to="/#about-company" replace />}
        />
        <Route
          path="/about-us/"
          element={<Navigate to="/#about-company" replace />}
        />
        <Route
          path={`${BASE_PATH}/about-us`}
          element={<Navigate to={`${BASE_PATH}/#about-company`} replace />}
        />
        <Route
          path={`${BASE_PATH}/about-us/`}
          element={<Navigate to={`${BASE_PATH}/#about-company`} replace />}
        />

        {/* Dynamic Route Generator supporting slash & no-slash fallback */}
        {pageRoutes.flatMap(({ path, element }) => {
          const cleanPath = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
          
          return [
            // Standard Paths
            <Route key={path} path={path} element={element} />,
            <Route key={`${path}-no-slash`} path={cleanPath} element={element} />,
            
            // Base Path Variations
            <Route key={withBasePath(path)} path={withBasePath(path)} element={element} />,
            <Route key={`${withBasePath(path)}-no-slash`} path={withBasePath(cleanPath)} element={element} />
          ];
        })}

        {/* Safe Catch-All targeting base path */}
        <Route path="*" element={<Navigate to={BASE_PATH || "/"} replace />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
