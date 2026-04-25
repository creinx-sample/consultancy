import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle, GraduationCap, Stethoscope, Cpu, Globe, Award, ArrowLeft } from 'lucide-react';
import { countriesData } from '../data/collegesData';
import LeadForm from '../components/home/LeadForm';

const RussiaColleges = () => {
  const russiaData = countriesData.find(c => c.country === "Russia");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-primary py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-[80px]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="absolute top-0 left-0 -ml-10">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-white/70 hover:text-white font-bold transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full mb-8"
          >
            <Globe className="w-5 h-5 text-secondary" />
            <span className="text-white text-sm font-bold tracking-widest uppercase">Global Excellence • Russia</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-extrabold text-white mb-8 font-serif leading-tight"
          >
            Top Universities in <span className="text-secondary">Russia</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Secure your future in Russia's most prestigious government universities recognized by NMC, WHO, and global accreditation bodies.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Why Russia Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          <div className="lg:col-span-1">
            <h2 className="text-secondary font-bold tracking-widest text-sm uppercase mb-4">The Ideal Destination</h2>
            <h3 className="text-4xl font-black text-primary font-serif mb-6 leading-tight">Why Study MBBS in Russia?</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              Russia has consistently remained the top choice for Indian medical students for over three decades, offering a perfect blend of high-quality education and global career opportunities.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: "NMC & WHO Approved", desc: "All featured universities are recognized by international bodies, ensuring your degree is valid globally." },
              { title: "English Medium", desc: "Complete 6-year MBBS program taught in English specifically for international students." },
              { title: "No Entrance Exams", desc: "Direct admission based on 12th marks and NEET qualification. No additional entrance hurdles." },
              { title: "Clinical Training", desc: "Exceptional hands-on clinical exposure in major state-owned government hospitals." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-7 rounded-3xl shadow-sm border border-slate-100 flex gap-5 group hover:border-secondary/30 transition-all">
                <CheckCircle className="w-6 h-6 text-secondary shrink-0" />
                <div>
                  <h4 className="text-primary font-bold mb-1 uppercase tracking-tighter text-sm">{item.title}</h4>
                  <p className="text-slate-500 text-xs font-semibold leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Medical Section */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                <Stethoscope className="w-10 h-10 text-secondary" />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-primary font-serif uppercase tracking-tight">Medical Universities</h2>
                <p className="text-slate-500 font-bold tracking-widest text-sm uppercase mt-1">NMC Listed | High FMGE Passing Rate</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {russiaData.medicalUniversities.map((univ, i) => {
              const isObject = typeof univ === 'object';
              const name = isObject ? univ.name : univ;
              const id = isObject ? univ.id : null;

              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-secondary/20 transition-all group overflow-hidden"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={univ.images?.[0] || 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80'} 
                      alt={name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 font-serif"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                    <div className="absolute bottom-6 left-8 right-8">
                      <div className="flex items-center gap-2 text-white/80 text-xs font-black uppercase tracking-[0.2em] mb-2">
                        <MapPin className="w-3.5 h-3.5 text-secondary" />
                        {univ.location}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-white font-serif leading-tight">
                        {name}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-10">
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Duration</p>
                        <p className="text-sm font-black text-primary">6 Years</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Medium</p>
                        <p className="text-sm font-black text-primary">English</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-10">
                      {univ.highlights?.slice(0, 3).map((h, idx) => (
                        <div key={idx} className="flex gap-3 items-start">
                          <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                          <span className="text-sm font-bold text-slate-600 leading-tight">{h}</span>
                        </div>
                      ))}
                    </div>

                    <Link 
                      to={id ? `/college/${id}` : '#'} 
                      className="w-full bg-primary text-secondary py-5 rounded-2xl font-black text-center block border-2 border-secondary hover:bg-secondary hover:text-primary transition-all shadow-xl hover:shadow-indigo-200 uppercase tracking-widest text-xs"
                    >
                      View Campus & Details →
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Engineering Section */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Cpu className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-primary font-serif uppercase tracking-tight">Engineering Universities</h2>
              <p className="text-slate-500 font-bold tracking-widest text-sm uppercase mt-1">Technological Excellence | Global Recognition</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {russiaData.engineeringUniversities.map((univ, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all group flex gap-6 items-start"
              >
                {typeof univ === 'object' && univ.images && univ.images[0] ? (
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-slate-100 shadow-sm relative group-hover:shadow-md transition-shadow">
                    <img src={univ.images[0]} alt={univ.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-slate-50 text-secondary rounded-2xl flex items-center justify-center font-black text-xl border border-slate-100 group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    {i + 1}
                  </div>
                )}
                <div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-800 mb-4 font-serif leading-tight group-hover:text-secondary transition-colors">{typeof univ === 'object' ? univ.name : univ}</h3>
                  <div className="flex flex-wrap gap-4">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                      <CheckCircle className="w-4 h-4 text-secondary" /> Industrial Connect
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                      <CheckCircle className="w-4 h-4 text-secondary" /> Research Driven
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-20 bg-gradient-to-br from-primary to-[#0f172a] rounded-[4rem] text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="relative z-10">
            <Award className="w-20 h-20 text-secondary mx-auto mb-8 animate-bounce" />
            <h2 className="text-3xl md:text-6xl font-black mb-8 font-serif leading-tight">Start Your Global Career Today</h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-medium">
              Join 5000+ Indian students who have realized their dreams in Russia. Get complete support from documents to departure.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-secondary hover:bg-[#ca8a04] text-primary px-12 py-5 rounded-full font-black text-xl shadow-xl hover:scale-105 transition-all uppercase tracking-widest">
                Get Free Counseling
              </button>
              <button className="bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-white/20 text-white px-12 py-5 rounded-full font-black text-xl shadow-xl hover:scale-105 transition-all uppercase tracking-widest">
                Download Brochure
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <LeadForm />
    </div>
  );
};

export default RussiaColleges;
