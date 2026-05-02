import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import LeadForm from '../components/home/LeadForm';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      
      {/* Header */}
      <div className="bg-primary py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[80px]" />
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
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-serif"
          >
            About TNAEC
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed"
          >
            A trusted education consultant in Karur, Tamil Nadu, dedicated to helping students secure admissions in top-tier global institutions since 2014.
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-secondary font-bold tracking-widest text-sm uppercase mb-2">Our Mission</h2>
            <h3 className="text-4xl font-extrabold text-primary mb-6 leading-tight">
              Empowering the Next Generation of Professionals.
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed font-medium">
              TNAEC was founded with a single mission: to provide honest and transparent career guidance to students after their 12th standard. We specialized in MBBS abroad and premier Indian engineering colleges to bridge the gap between dreams and reality.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed font-medium">
              Over the last decade, we have helped over 5,000 students from across Tamil Nadu and South India find their perfect academic path. Our commitment remains to your success and transparency.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['WHO/NMC Recognized', 'Low Fee Structure', 'Direct University Admission', 'Karur Office Support', 'Student Visa Guidance', 'Hostel & Mess Facilities'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="text-primary font-bold text-sm tracking-wide uppercase">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative p-4">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl rotate-3 transform scale-105 z-0 border border-slate-200"></div>
              <img 
                src="https://images.unsplash.com/photo-1541178735423-4f9c3d5ff65a?q=80&w=2670&auto=format&fit=crop" 
                alt="Students in Library" 
                className="rounded-3xl shadow-xl relative z-10 w-full h-auto object-cover border-4 border-white"
              />
            </div>
          </div>
          
        </div>
      </div>

      <LeadForm />
    </div>
  );
};

export default About;
