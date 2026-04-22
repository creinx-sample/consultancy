import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ServicesSection from '../components/home/ServicesSection';
import LeadForm from '../components/home/LeadForm';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-secondary)]/10 rounded-full blur-[80px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="absolute top-0 left-0 -ml-10">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-white/70 hover:text-white font-bold transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back
            </Link>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white mb-6 font-serif uppercase tracking-tighter"
          >
            OUR <span className="text-[var(--color-secondary)]">SERVICES</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-lg md:text-2xl max-w-3xl mx-auto font-medium"
          >
            Comprehensive guidance across various educational domains to help you land your dream college globally.
          </motion.p>
        </div>
      </div>

      <ServicesSection />

      {/* Detailed Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-12 rounded-[3rem] bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 relative overflow-hidden transition-all hover:border-[var(--color-primary)]/20">
            <h3 className="text-3xl font-black text-[var(--color-primary)] mb-10 font-serif uppercase tracking-tight">Our Admission Journey</h3>
            <ul className="space-y-8">
              {[
                { step: '1', title: 'Personalized Counseling', desc: 'Expert analysis of your 12th marks, interests, and budget.' },
                { step: '2', title: 'Course & College Selection', desc: 'Shortlisting top institutions based on your profile.' },
                { step: '3', title: 'Documentation & Visa', desc: 'Complete support for applications, transcripts, and visa processing.' },
                { step: '4', title: 'Pre-Departure Guidance', desc: 'Orientation for travel, accommodation, and life abroad.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-6 items-start">
                  <span className="w-12 h-12 flex-shrink-0 bg-[var(--color-secondary)] text-[var(--color-primary)] rounded-2xl flex items-center justify-center font-black text-xl shadow-lg border-2 border-white rotate-3">{item.step}</span>
                  <div>
                    <h4 className="text-[var(--color-primary)] font-black text-xl mb-1 tracking-tight font-serif">{item.title}</h4>
                    <p className="text-slate-500 text-sm font-bold leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-12 rounded-[3rem] bg-[var(--color-primary)] border border-indigo-900 shadow-2xl shadow-indigo-100 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10" />
            <h3 className="text-3xl font-black text-[var(--color-secondary)] mb-8 font-serif uppercase tracking-tight underline underline-offset-8 decoration-4">Direct Admissions</h3>
            <p className="text-white leading-relaxed text-xl font-bold mb-8 italic">
              "We specialize in securing management quota and direct admissions into top-tier Engineering, Arts, and Science colleges in Tamil Nadu and India."
            </p>
            <p className="text-white/70 leading-relaxed font-bold text-lg">
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
