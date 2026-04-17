import { MapPin, CheckCircle, GraduationCap, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import { countriesData } from '../data/collegesData';
import LeadForm from '../components/home/LeadForm';

const Countries = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="bg-[#15803d] py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5733]/10 rounded-full blur-[80px]" />
        <div className="absolute -left-10 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl saturate-150" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-serif"
          >
            Study MBBS Abroad
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto font-medium"
          >
            Explore top medical destinations offering high-quality education at affordable costs.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {countriesData.map((dest, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-slate-100 flex flex-col gap-10 hover:shadow-2xl transition-all group overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5733]/5 rounded-bl-[100px] border-l border-b border-[#FF5733]/10" />
              
              <div className="flex flex-col sm:flex-row items-center gap-10">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-[10px] border-slate-50 flex-shrink-0 shadow-inner group-hover:border-[#FF5733]/10 transition-colors">
                  <img 
                    src={dest.image} 
                    alt={dest.country} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-4xl font-extrabold text-[#15803d] mb-4 font-serif flex items-center justify-center sm:justify-start gap-4">
                    <span className="text-[#FF5733]"><MapPin className="w-8 h-8" /></span>
                    {dest.country}
                  </h3>
                  <ul className="space-y-3">
                    {dest.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-center justify-center sm:justify-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#FF5733] flex-shrink-0" />
                        <span className="text-slate-600 font-bold text-xs md:text-sm tracking-wide uppercase">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Specific Universities */}
              <div className="bg-slate-50/50 rounded-3xl p-6 md:p-8 border border-slate-100/80">
                <h4 className="flex items-center gap-2 text-[#15803d] font-black text-lg mb-6 uppercase tracking-widest border-b border-[#15803d]/10 pb-4">
                  <GraduationCap className="text-[#FF5733]" />
                  Top Universities
                </h4>
                
                {dest.medicalUniversities && (
                  <div className="mb-6">
                    <h5 className="flex items-center gap-2 text-slate-700 font-bold text-sm mb-4 uppercase tracking-tighter">
                      <Stethoscope className="w-4 h-4 text-[#15803d]" />
                      Medical Institutions
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {dest.medicalUniversities.map((univ, idx) => (
                        <div key={idx} className="flex gap-3 items-center p-2 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-[#FF5733]/30 transition-all">
                          {typeof univ === 'object' && univ.images && univ.images[0] ? (
                            <img src={univ.images[0]} alt={univ.name} className="w-10 h-10 rounded-lg object-cover shrink-0" />
                          ) : (
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FF5733] shrink-0 ml-2" />
                          )}
                          <span className="text-slate-700 text-sm font-semibold">{univ.name || univ}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {dest.engineeringUniversities && (
                  <div>
                    <h5 className="flex items-center gap-2 text-slate-700 font-bold text-sm mb-4 uppercase tracking-tighter">
                      <GraduationCap className="w-4 h-4 text-[#15803d]" />
                      Engineering Institutions
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {dest.engineeringUniversities.map((univ, idx) => (
                        <div key={idx} className="flex gap-3 items-center p-2 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-[#15803d]/30 transition-all">
                          {typeof univ === 'object' && univ.images && univ.images[0] ? (
                            <img src={univ.images[0]} alt={univ.name} className="w-10 h-10 rounded-lg object-cover shrink-0" />
                          ) : (
                            <div className="w-1.5 h-1.5 rounded-full bg-[#15803d] shrink-0 ml-2" />
                          )}
                          <span className="text-slate-700 text-sm font-semibold">{univ.name || univ}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <LeadForm />
    </div>
  );
};

export default Countries;

