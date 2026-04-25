import { Link } from 'react-router-dom';
import { ChevronRight, Globe, Building2, BookOpen, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-[95vh] flex items-center justify-center bg-white overflow-hidden pt-20">
      
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(var(--color-primary) 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 pt-10 pb-20">
        
        {/* Text Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.1 }
            }
          }}
          className="w-full lg:w-1/2 text-center lg:text-left space-y-10"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}>
            <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-primary/5 text-primary text-xs font-black tracking-[0.3em] mb-8 border border-primary/10 uppercase">
              <Globe className="w-4 h-4 text-secondary" />
              Expert Education Consultancy
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-primary leading-[1.1] tracking-tighter font-serif">
              Lead Your <br/>
              <span className="text-secondary relative">
                Academic Journey
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>
            
            <p className="mt-8 text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Join 5,000+ students who secured admissions in elite MBBS and Engineering universities across <span className="text-primary font-black underline decoration-secondary decoration-4">India, Russia, and Georgia</span>.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
          >
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-12 py-6 rounded-3xl bg-primary text-white font-black text-sm hover:scale-105 transition-all shadow-[0_20px_50px_rgba(30,27,75,0.2)] flex items-center justify-center gap-3 group uppercase tracking-[0.2em]"
            >
              Enroll Now
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            
            <a 
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-12 py-6 rounded-3xl bg-white text-primary font-black text-sm border-2 border-primary/10 hover:border-primary hover:bg-slate-50 transition-all shadow-xl flex items-center justify-center uppercase tracking-[0.2em]"
            >
              Explore Programs
            </a>
          </motion.div>

          <motion.div 
            className="flex items-center justify-center lg:justify-start gap-12 pt-12 border-t border-slate-100 mt-12"
            variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "backOut" } } }}
          >
            <div className="flex flex-col items-start translate-y-0 hover:-translate-y-1 transition-transform duration-300">
              <span className="text-5xl font-black text-primary tracking-tighter">10+</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold mt-1">Years Legacy</span>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="flex flex-col items-start translate-y-0 hover:-translate-y-1 transition-transform duration-300">
              <span className="text-5xl font-black text-primary tracking-tighter">5K+</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold mt-1">Success Stories</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual Content */}
        <motion.div 
          className="w-full lg:w-1/2 relative hidden lg:block"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, type: "spring", stiffness: 100 }}
        >
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] z-0"></div>
            
            <div className="relative z-10 p-4 bg-white rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] border border-slate-50 rotate-3 transform hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670" 
                alt="Students Collaboration" 
                className="w-full h-[550px] object-cover rounded-[3rem]"
              />
              
              {/* Floating Element */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 bottom-20 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <span className="block text-xs font-black text-slate-400 uppercase tracking-widest">Global Partners</span>
                    <span className="text-xl font-black text-primary">120+ Universities</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
