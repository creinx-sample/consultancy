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
        <div className="absolute top-10 left-10 z-20">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white font-black transition-all group py-2 px-4 rounded-xl border border-white/20 hover:border-white/40 bg-white/5"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] uppercase tracking-[0.2em]">Back</span>
          </Link>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[80px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-serif uppercase tracking-tight"
          >
            About TN ALL EDUCATIONAL CONSULTANCY
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-lg md:text-xl max-w-4xl mx-auto font-medium leading-relaxed"
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
            <h3 className="text-4xl font-extrabold text-primary mb-6 leading-tight uppercase font-serif">
              Empowering the Next <br/> Generation Professionals.
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed font-medium">
              TN ALL EDUCATIONAL CONSULTANCY was founded with a single mission: to provide honest and transparent career guidance to students after their 12th standard. We specialized in MBBS abroad and premier Indian engineering colleges to bridge the gap between dreams and reality.
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
              <div className="absolute inset-0 bg-primary/5 rounded-[3rem] rotate-3 transform scale-105 z-0 border-2 border-secondary"></div>
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670" 
                alt="Students Collaboration" 
                className="rounded-[2.5rem] shadow-2xl relative z-10 w-full h-[500px] object-cover border-2 border-secondary"
              />
            </div>
          </div>
          
        </div>
      </div>

      {/* Founder Section */}
      <section className="py-24 bg-white relative overflow-hidden border-t-2 border-slate-100">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-secondary font-bold tracking-widest text-sm uppercase mb-4">The Visionary</h2>
            <h3 className="text-4xl md:text-5xl font-black text-primary mb-8 font-serif uppercase">About the Founder</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-slate-50 border-2 border-secondary p-10 md:p-16 rounded-[3rem] shadow-xl shadow-slate-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-secondary rounded-full"></div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm">Message from the Founder</span>
              </div>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed italic mb-8 font-medium">
                "Empowering the next generation of healthcare and engineering professionals through ethical guidance and world-class opportunities."
              </p>
              <div className="space-y-6 text-slate-500 leading-relaxed font-medium">
                <p>
                   With over a decade of experience in international education consultancy, every student deserves transparent, ethical, and high-quality guidance to navigate the global academic landscape.
                </p>
                <p>
                  Your trust is our most valuable asset. Whether you are aiming for an MBBS in Russia or a premier Engineering seat in Tamil Nadu, we are here to support you at every single step of the journey.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Students Guided", value: "2500+" },
                { label: "Success Rate", value: "100%" },
                { label: "Global Partners", value: "50+" },
                { label: "Years of Trust", value: "10+" }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] border-2 border-secondary shadow-xl group hover:bg-primary transition-all duration-300">
                  <p className="text-primary/60 group-hover:text-white/60 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-4xl font-black text-primary group-hover:text-secondary tracking-tighter">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
