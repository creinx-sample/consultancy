import { motion } from 'framer-motion';
import ServicesSection from '../components/home/ServicesSection';
import LeadForm from '../components/home/LeadForm';

const Services = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      
      {/* Header */}
      <div className="bg-[#15803d] py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5733]/10 rounded-full blur-[80px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-serif"
          >
            Our Services & Streams
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto font-medium"
          >
            Comprehensive guidance across various educational domains to help you land your dream college globally.
          </motion.p>
        </div>
      </div>

      <ServicesSection />

      {/* Detailed Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-10 rounded-3xl bg-[#15803d]/5 border-2 border-dashed border-[#15803d]/20 shadow-sm relative overflow-hidden">
            <h3 className="text-3xl font-extrabold text-[#15803d] mb-6 font-serif uppercase tracking-tight">Our Admission Journey</h3>
            <ul className="space-y-6">
              {[
                { step: '1', title: 'Personalized Counseling', desc: 'Expert analysis of your 12th marks, interests, and budget.' },
                { step: '2', title: 'Course & College Selection', desc: 'Shortlisting top institutions based on your profile.' },
                { step: '3', title: 'Documentation & Visa', desc: 'Complete support for applications, transcripts, and visa processing.' },
                { step: '4', title: 'Pre-Departure Guidance', desc: 'Orientation for travel, accommodation, and life abroad.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-6 items-start">
                  <span className="w-10 h-10 flex-shrink-0 bg-[#FF5733] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-2 border-white">{item.step}</span>
                  <div>
                    <h4 className="text-[#15803d] font-bold text-lg mb-1 tracking-tight">{item.title}</h4>
                    <p className="text-slate-600 text-sm font-medium">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-10 rounded-3xl bg-[#FF5733]/5 border-2 border-dashed border-[#FF5733]/20 shadow-sm flex flex-col justify-center">
            <h3 className="text-3xl font-extrabold text-[#FF5733] mb-6 font-serif uppercase tracking-tight">Direct Admissions</h3>
            <p className="text-[#15803d] leading-relaxed text-lg font-bold mb-6">
              We specialize in securing management quota and direct admissions into top-tier Engineering, Arts, and Science colleges in Tamil Nadu and India.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium">
              Apart from merit-based counseling, we provide guidance on institutional processes, ensuring full transparency in fees and seat allocation. Our expertise helps you secure a seat in the stream you are most passionate about, even in competitive scenarios.
            </p>
          </div>
        </div>
      </div>

      <LeadForm />
    </div>
  );
};

export default Services;
