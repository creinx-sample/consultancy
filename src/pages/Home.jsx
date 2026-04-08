import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import GlobalPartners from '../components/home/GlobalPartners';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import LeadForm from '../components/home/LeadForm';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <ServicesSection />
      <GlobalPartners />
      <WhyChooseUs />
      <Testimonials />
      <LeadForm />
    </div>
  );
};

export default Home;
