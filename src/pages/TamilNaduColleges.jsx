import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, MapPin, CheckCircle, GraduationCap, Cpu, Book, Stethoscope, Leaf, Scale, Globe } from 'lucide-react';
import { tnUniversitiesData } from '../data/collegesData';
import LeadForm from '../components/home/LeadForm';

const TamilNaduColleges = () => {
  const [activeCategory, setActiveCategory] = useState(tnUniversitiesData[0].category);

  const activeData = tnUniversitiesData.find(cat => cat.category === activeCategory);

  const iconMap = {
    Cpu: Cpu,
    Book: Book,
    Stethoscope: Stethoscope,
    Leaf: Leaf,
    Scale: Scale,
    Award: Award
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-[#15803d] py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5733]/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6"
          >
            <Award className="w-5 h-5 text-[#FF5733]" />
            <span className="text-white text-sm font-bold tracking-wider uppercase">UGC Approved • 2025</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-serif"
          >
            Top Private Universities in <span className="text-[#FF5733]">Tamil Nadu</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto font-medium"
          >
            Explore diverse course options with high placement rates and global exposure in Tamil Nadu's leading private institutions.
          </motion.p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-lg border-b border-slate-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {tnUniversitiesData.map((cat) => {
              const Icon = iconMap[cat.icon] || Globe;
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(cat.category)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat.category
                      ? 'bg-[#15803d] text-white shadow-lg'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.category}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Category Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <motion.div
          key={activeCategory + "desc"}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-[2rem] border-l-8 border-[#FF5733] shadow-sm mb-12"
        >
          <h2 className="text-2xl font-black text-slate-800 mb-2">{activeCategory} Category</h2>
          <p className="text-slate-500 font-medium text-lg leading-relaxed">{activeData.description}</p>
          <div className="mt-4 inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-lg text-sm font-bold">
            <CheckCircle className="w-4 h-4" />
            Highly Preferred for {activeCategory}
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <AnimatePresence mode="wait">
            {activeData.colleges.map((college, i) => (
              <motion.div 
                key={college.name + activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden h-full flex flex-col"
              >
                <Link 
                  to={college.id ? `/college/${college.id}` : '#'} 
                  className="p-8 block h-full flex flex-col relative"
                >
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#15803d]/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                  
                  <div className="flex flex-col md:flex-row gap-6 items-start relative z-10 h-full">
                    <div className="w-16 h-16 bg-[#15803d] text-white rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg shadow-[#15803d]/20 shrink-0">
                      {i + 1}
                    </div>
                    
                    <div className="flex-grow flex flex-col h-full">
                      <div className="flex items-center gap-2 text-[#FF5733] font-bold text-sm mb-2 uppercase tracking-widest">
                        <MapPin className="w-4 h-4" />
                        {college.location}
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 group-hover:text-[#15803d] transition-colors font-serif leading-tight">
                        {college.name}
                      </h3>
                      
                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 mb-6 flex-grow">
                        <p className="text-slate-600 font-medium leading-relaxed italic text-sm md:text-base">
                          "{college.features}"
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-4 mt-auto">
                        <div className="flex items-center gap-2 text-[#15803d] bg-emerald-50 px-3 py-1 rounded-md">
                          <CheckCircle className="w-4 h-4" />
                          <span className="font-bold text-xs">Admission Open</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 group-hover:text-[#FF5733] transition-colors ml-auto">
                          <GraduationCap className="w-4 h-4" />
                          <span className="font-bold text-xs uppercase tracking-widest">{activeCategory} Specialist</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-[#15803d] to-[#166534] rounded-[3rem] p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5733]/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-[60px]" />
          
          <h2 className="text-3xl md:text-5xl font-black mb-6 font-serif">Secure Your Future with Expert Guidance</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            Our counselors specialize in {activeCategory} admissions. Get personalized advice on scholarships, eligibility, and course selection today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#FF5733] hover:bg-[#e64a19] text-white px-10 py-4 rounded-full font-black text-lg shadow-xl hover:scale-105 transition-all uppercase tracking-widest">
              Consult Now
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/20 px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-all uppercase tracking-widest">
              Download Guidelines
            </button>
          </div>
        </motion.div>
      </div>

      <LeadForm />
    </div>
  );
};

export default TamilNaduColleges;

