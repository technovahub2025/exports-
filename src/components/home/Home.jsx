import { useEffect } from 'react';
import Hero from './Hero.jsx';
import AboutSection from './AboutSection.jsx';
import PopularProducts from './PopularProducts.jsx';
import StatsSection from './StatsSection.jsx';
import InternationalStandards from './InternationalStandards.jsx';
import WhyChooseUs from './WhyChooseUs.jsx';
import ServicesCTA from './ServicesCTA.jsx';
import Testimonials from './Testimonials.jsx';

function Home() {
  useEffect(() => {
    if (window.location.hash === '#about-company') {
      const timer = setTimeout(() => {
        document.getElementById('about-company')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);
  return (
    <main>
      <Hero />
      <AboutSection />
      <PopularProducts />
      <StatsSection />
      <InternationalStandards />
      <WhyChooseUs />
      <ServicesCTA />
      <Testimonials />
    </main>
  );
}

export default Home;




