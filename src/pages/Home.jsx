import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import Reviews from '../components/home/Reviews';
import GlobalPartners from '../components/home/GlobalPartners';
import WhyChooseUs from '../components/home/WhyChooseUs';
import LeadForm from '../components/home/LeadForm';

const Home = () => {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Use a small timeout to ensure everything is rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'auto' });
        }, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <ServicesSection />
      <GlobalPartners />
      <WhyChooseUs />
      <Reviews />
      <LeadForm />
    </div>
  );
};

export default Home;
