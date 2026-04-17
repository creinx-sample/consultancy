import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, MapPin, CheckCircle, GraduationCap, Cpu, Book, Stethoscope, Leaf, Scale, Globe } from 'lucide-react';
import { tnUniversitiesData } from '../data/collegesData';
import LeadForm from '../components/home/LeadForm';
import { ArrowLeft } from 'lucide-react';

const TamilNaduColleges = () => {
  const [activeCategory, setActiveCategory] = useState(tnUniversitiesData[0].category);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeData = tnUniversitiesData.find(cat => cat.category === activeCategory);

  const iconMap = {
    Cpu: Cpu,
    Book: Book,
    Stethoscope: Stethoscope,
    Leaf: Leaf,
    Scale: Scale,
    Award: Award
  };

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-slate-50"
    >
      {/* Header */}
      <div className="bg-[#15803d] py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5733]/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
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
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-3 justify-center"
          >
            {tnUniversitiesData.map((cat) => {
              const Icon = iconMap[cat.icon] || Globe;
              return (
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  key={cat.category}
                  onClick={() => setActiveCategory(cat.category)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-colors ${
                    activeCategory === cat.category
                      ? 'bg-[#15803d] text-white shadow-lg shadow-[#15803d]/30'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.category}
                </motion.button>
              );
            })}
          </motion.div>
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

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          key={activeCategory + "grid"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
        >
          <AnimatePresence mode="popLayout">
            {activeData.colleges.map((college, i) => (
              <motion.div 
                key={college.id || college.name}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl border border-slate-100 ring-1 ring-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-[#15803d]/10 transition-all duration-300 relative overflow-hidden h-full flex flex-col"
              >
                {college.images && college.images[0] && (
                  <div className="w-full h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <img 
                      src={college.images[0]} 
                      alt={college.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 text-white/90 text-sm font-bold tracking-wider uppercase">
                      <MapPin className="w-4 h-4 text-[#FF5733]" />
                      {college.location}
                    </div>
                  </div>
                )}
                
                <Link 
                  to={college.id ? `/college/${college.id}` : '#'} 
                  className="p-8 block h-full flex flex-col relative"
                >
                  <div className="flex-grow flex flex-col h-full">
                    <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 group-hover:text-[#15803d] transition-colors font-serif leading-tight">
                      {college.name}
                    </h3>
                    
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 mb-6 flex-grow transition-colors group-hover:bg-[#15803d]/5">
                      <p className="text-slate-600 font-medium leading-relaxed italic text-sm md:text-base">
                        "{college.features}"
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-auto">
                      <div className="flex items-center gap-2 text-[#15803d] bg-emerald-50 px-3 py-1 rounded-md transition-colors group-hover:bg-[#15803d] group-hover:text-white">
                        <CheckCircle className="w-4 h-4" />
                        <span className="font-bold text-xs">Admission Open</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 group-hover:text-[#FF5733] transition-colors ml-auto">
                        <GraduationCap className="w-4 h-4" />
                        <span className="font-bold text-xs uppercase tracking-widest">{activeCategory}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

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
    </motion.div>
  );
};

export default TamilNaduColleges;

