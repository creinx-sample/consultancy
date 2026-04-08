import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle, GraduationCap, Stethoscope, Cpu, Globe, Award } from 'lucide-react';
import { countriesData } from '../data/collegesData';
import LeadForm from '../components/home/LeadForm';

const RussiaColleges = () => {
  const russiaData = countriesData.find(c => c.country === "Russia");

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-[#15803d] py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF5733]/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-[80px]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full mb-8"
          >
            <Globe className="w-5 h-5 text-[#FF5733]" />
            <span className="text-white text-sm font-bold tracking-widest uppercase">Global Excellence • Russia</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-extrabold text-white mb-8 font-serif leading-tight"
          >
            Top Universities in <span className="text-[#FF5733]">Russia</span>
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
        
        {/* Medical Section */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-[#FF5733]/10 rounded-2xl flex items-center justify-center">
              <Stethoscope className="w-10 h-10 text-[#FF5733]" />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-[#15803d] font-serif uppercase tracking-tight">Medical Universities</h2>
              <p className="text-slate-500 font-bold tracking-widest text-sm uppercase mt-1">MBBS | 6-Year Program | English Medium</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {russiaData.medicalUniversities.map((univ, i) => {
              const isObject = typeof univ === 'object';
              const name = isObject ? univ.name : univ;
              const id = isObject ? univ.id : null;

              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-[#FF5733]/20 transition-all group overflow-hidden"
                >
                  <Link 
                    to={id ? `/college/${id}` : '#'} 
                    className="p-8 block h-full flex gap-6 items-start"
                  >
                    <div className="w-12 h-12 bg-slate-50 text-[#15803d] rounded-xl flex items-center justify-center font-black text-xl border border-slate-100 group-hover:bg-[#FF5733] group-hover:text-white transition-colors shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-extrabold text-slate-800 mb-4 font-serif leading-tight group-hover:text-[#15803d] transition-colors">
                        {name}
                      </h3>
                      <div className="flex flex-wrap gap-4">
                        <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                          <CheckCircle className="w-4 h-4 text-[#15803d]" /> NMC Approved
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                          <CheckCircle className="w-4 h-4 text-[#15803d]" /> WHO Listed
                        </span>
                        {isObject && (
                          <span className="flex items-center gap-1.5 text-[10px] font-black text-[#FF5733] uppercase tracking-widest">
                            Learn More →
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Engineering Section */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-[#15803d]/10 rounded-2xl flex items-center justify-center">
              <Cpu className="w-10 h-10 text-[#15803d]" />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-[#15803d] font-serif uppercase tracking-tight">Engineering Universities</h2>
              <p className="text-slate-500 font-bold tracking-widest text-sm uppercase mt-1">Technological Excellence | Global Recognition</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {russiaData.engineeringUniversities.map((univ, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-[#15803d]/20 transition-all group flex gap-6 items-start"
              >
                <div className="w-12 h-12 bg-slate-50 text-[#FF5733] rounded-xl flex items-center justify-center font-black text-xl border border-slate-100 group-hover:bg-[#15803d] group-hover:text-white transition-colors shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-800 mb-4 font-serif leading-tight group-hover:text-[#FF5733] transition-colors">{univ}</h3>
                  <div className="flex flex-wrap gap-4">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                      <CheckCircle className="w-4 h-4 text-[#FF5733]" /> Industrial Connect
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                      <CheckCircle className="w-4 h-4 text-[#FF5733]" /> Research Driven
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
          className="mt-32 p-12 md:p-20 bg-gradient-to-br from-[#15803d] to-[#14532d] rounded-[4rem] text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="relative z-10">
            <Award className="w-20 h-20 text-[#FF5733] mx-auto mb-8 animate-bounce" />
            <h2 className="text-3xl md:text-6xl font-black mb-8 font-serif leading-tight">Start Your Global Career Today</h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-medium">
              Join 5000+ Indian students who have realized their dreams in Russia. Get complete support from documents to departure.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-[#FF5733] hover:bg-[#e64a19] text-white px-12 py-5 rounded-full font-black text-xl shadow-xl hover:scale-105 transition-all uppercase tracking-widest">
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
