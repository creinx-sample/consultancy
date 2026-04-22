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
      <div className="bg-[var(--color-primary)] py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-secondary)]/10 rounded-full blur-[80px]" />
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
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-3 rounded-full mb-10"
          >
            <Award className="w-6 h-6 text-[var(--color-secondary)]" />
            <span className="text-white text-sm font-black tracking-[0.2em] uppercase">UGC Approved • 2025</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white mb-8 font-serif uppercase tracking-tighter"
          >
            Top Private <br /><span className="text-[var(--color-secondary)]">Universities</span> In TN
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-xl md:text-2xl max-w-3xl mx-auto font-medium"
          >
            Explore diverse course options with elite placement records and global exposure in Tamil Nadu's leading private institutions.
          </motion.p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-[72px] z-40 bg-white/90 backdrop-blur-lg border-b border-slate-200 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-4 justify-center"
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
                  className={`flex items-center gap-3 px-8 py-3 rounded-2xl text-xs font-black transition-all uppercase tracking-widest ${
                    activeCategory === cat.category
                      ? 'bg-[var(--color-primary)] text-[var(--color-secondary)] shadow-2xl shadow-indigo-200 border-2 border-[var(--color-secondary)]'
                      : 'bg-white text-slate-500 border border-slate-100 hover:border-[var(--color-secondary)]/30 hover:text-[var(--color-primary)]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {cat.category}
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Category Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <motion.div
          key={activeCategory + "desc"}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-10 md:p-16 rounded-[4rem] border-l-[16px] border-[var(--color-secondary)] shadow-2xl shadow-slate-100 mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-secondary)]/5 rounded-full -mr-16 -mt-16" />
          <h2 className="text-3xl md:text-5xl font-black text-[var(--color-primary)] mb-6 font-serif uppercase tracking-tighter">{activeCategory} Category</h2>
          <p className="text-slate-500 font-medium text-xl leading-relaxed max-w-4xl">{activeData.description}</p>
          <div className="mt-8 inline-flex items-center gap-3 bg-indigo-50 text-[var(--color-primary)] px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest">
            <CheckCircle className="w-5 h-5 text-[var(--color-secondary)]" />
            Highly Preferred for {activeCategory}
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          key={activeCategory + "grid"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24"
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
                whileHover={{ y: -12 }}
                className="group bg-white rounded-[3.5rem] border border-slate-50 shadow-2xl shadow-slate-200/50 hover:shadow-indigo-100 transition-all duration-500 relative overflow-hidden h-full flex flex-col"
              >
                {college.images && college.images[0] && (
                  <div className="w-full h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/80 via-transparent to-transparent z-10" />
                    <img 
                      src={college.images[0]} 
                      alt={college.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute bottom-6 left-8 z-20 flex items-center gap-2 text-white font-black text-sm tracking-widest uppercase">
                      <MapPin className="w-5 h-5 text-[var(--color-secondary)]" />
                      {college.location}
                    </div>
                  </div>
                )}
                
                <Link 
                  to={college.id ? `/college/${college.id}` : '#'} 
                  className="p-10 block h-full flex flex-col relative"
                >
                  <div className="flex-grow flex flex-col h-full">
                    <h3 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-6 group-hover:text-[var(--color-secondary)] transition-colors font-serif leading-tight uppercase tracking-tighter">
                      {college.name}
                    </h3>
                    
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 mb-8 flex-grow transition-all group-hover:bg-[var(--color-primary)]/5 group-hover:border-indigo-100">
                      <p className="text-slate-600 font-bold leading-relaxed italic text-sm md:text-lg line-clamp-2">
                        {college.features ? `"${college.features}"` : `Key Programs: ${college.courses?.join(', ')}`}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-auto">
                      <div className="flex items-center gap-3 text-[var(--color-primary)] bg-[var(--color-secondary)]/20 px-4 py-2 rounded-xl transition-all group-hover:bg-[var(--color-secondary)] group-hover:text-[var(--color-primary)]">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-black text-[10px] tracking-widest uppercase">Admission Open</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 group-hover:text-[var(--color-secondary)] transition-colors ml-auto">
                        <GraduationCap className="w-5 h-5" />
                        <span className="font-black text-[10px] uppercase tracking-[0.2em]">{activeCategory}</span>
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
          className="mt-24 bg-[var(--color-primary)] rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-secondary)]/10 rounded-full blur-[120px] -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-[80px] -ml-24 -mb-24" />
          
          <h2 className="text-4xl md:text-7xl font-black mb-10 font-serif leading-tight uppercase tracking-tighter">Secure Your Future <br />With <span className="text-[var(--color-secondary)]">Expert</span> Guidance</h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-16 font-medium leading-relaxed italic">
            Our specialized counselors provide elite strategic guidance for {activeCategory} admissions. Define your legacy today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="bg-[var(--color-secondary)] hover:bg-white text-[var(--color-primary)] px-12 py-6 rounded-2xl font-black text-xl shadow-2xl transition-all uppercase tracking-[0.2em] active:scale-95">
              Consult Now
            </Link>
            <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 px-12 py-6 rounded-2xl font-black text-xl transition-all uppercase tracking-[0.2em]">
              Guidelines
            </button>
          </div>
        </motion.div>
      </div>

      <LeadForm />
    </motion.div>

      <LeadForm />
    </motion.div>
  );
};

export default TamilNaduColleges;

