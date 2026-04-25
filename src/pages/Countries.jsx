import { Link } from 'react-router-dom';
import { MapPin, CheckCircle, GraduationCap, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import { countriesData } from '../data/collegesData';
import LeadForm from '../components/home/LeadForm';

const Countries = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="bg-primary py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[80px]" />
        <div className="absolute -left-10 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl saturate-150" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white mb-6 font-serif uppercase tracking-tighter"
          >
            Study <span className="text-secondary">MBBS</span> Abroad
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-lg md:text-2xl max-w-3xl mx-auto font-medium"
          >
            Explore top medical destinations offering high-quality European education at affordable costs.
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
              className="bg-white rounded-[4rem] p-10 md:p-16 shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-12 hover:shadow-indigo-100/50 transition-all group overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/5 rounded-bl-[100px] border-l border-b border-secondary/10" />
              
              <div className="flex flex-col sm:flex-row items-center gap-12 relative z-10">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-[12px] border-slate-50 flex-shrink-0 shadow-inner group-hover:border-secondary/20 transition-all duration-500">
                  <img 
                    src={dest.image} 
                    alt={dest.country} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-6 font-serif flex items-center justify-center sm:justify-start gap-4 pr-1">
                    <span className="text-secondary"><MapPin className="w-8 h-8 md:w-10 md:h-10" /></span>
                    {dest.country}
                  </h3>
                  <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                    {dest.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-xl">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-primary font-black text-[10px] tracking-widest uppercase">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Specific Universities Preview */}
              <div className="bg-slate-50/80 rounded-[3rem] p-8 md:p-12 border border-slate-100 relative z-10">
                <h4 className="flex items-center gap-3 text-primary font-black text-xl mb-10 uppercase tracking-widest border-b border-slate-200 pb-6 font-serif">
                  <GraduationCap className="text-secondary w-8 h-8" />
                  Premier Institutions
                </h4>
                
                {dest.medicalUniversities && (
                  <div className="mb-10">
                    <h5 className="flex items-center gap-2 text-slate-400 font-black text-xs mb-6 uppercase tracking-[0.2em]">
                      <Stethoscope className="w-5 h-5 text-secondary" />
                      Leading Medical Hubs
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {dest.medicalUniversities.slice(0, 4).map((univ, idx) => (
                        <Link 
                          key={idx} 
                          to={`/college/${univ.id}`}
                          className="flex gap-4 items-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all group/univ"
                        >
                          {typeof univ === 'object' && univ.images && univ.images[0] ? (
                            <img src={univ.images[0]} alt={univ.name} className="w-14 h-14 rounded-xl object-cover shrink-0" />
                          ) : (
                            <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center font-black text-secondary group-hover/univ:bg-secondary group-hover/univ:text-primary transition-colors">{idx + 1}</div>
                          )}
                          <span className="text-slate-800 text-sm font-black leading-tight group-hover/univ:text-primary transition-colors">{univ.name || univ}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <Link 
                  to={dest.country === "Russia" ? "/russia-colleges" : dest.country === "Georgia" ? "/georgia-colleges" : "#"}
                  className="w-full bg-primary text-secondary py-5 rounded-3xl font-black text-center block border-2 border-secondary hover:bg-secondary hover:text-primary transition-all shadow-xl hover:shadow-indigo-200 uppercase tracking-[0.2em] text-sm"
                >
                  Explore All {dest.country} Universities →
                </Link>
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

