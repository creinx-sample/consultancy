import { Link } from 'react-router-dom';
import { ChevronRight, Globe, Building2, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-white overflow-hidden pt-20">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1523050853064-8504f2f40fd5?q=80&w=2670&auto=format&fit=crop" 
          alt="University Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 pt-10 pb-20">
        
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
          className="w-full lg:w-3/5 text-center lg:text-left space-y-8"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}>
            <span className="inline-block py-1.5 px-4 rounded-md bg-[#15803d]/10 text-[#15803d] text-sm font-bold tracking-wider mb-4 border-l-4 border-[#FF5733]">
              BEST EDUCATION CONSULTANCY
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#15803d] leading-tight tracking-tight">
              Shape Your Future <br/>
              <span className="text-[#FF5733]">
                With Expert Guidance.
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Join thousands of students who have successfully enrolled in top-tier MBBS, Engineering, and Science colleges globally. Your dream career starts here.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
          >
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-10 py-5 rounded-md bg-[#FF5733] text-white font-bold text-lg hover:bg-[#E64A19] transition-all shadow-lg flex items-center justify-center gap-2 group uppercase tracking-widest"
            >
              Enroll Now
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a 
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-10 py-5 rounded-md bg-[#15803d] text-white font-bold text-lg hover:bg-[#166534] transition-all shadow-lg flex items-center justify-center uppercase tracking-widest"
            >
              Our Services
            </a>
          </motion.div>

          <motion.div 
            className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-slate-200 mt-8"
            variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "backOut" } } }}
          >
            <div className="flex flex-col items-start font-serif">
              <span className="text-4xl font-extrabold text-[#15803d]">10+</span>
              <span className="text-xs uppercase tracking-widest text-[#FF5733] font-bold">Years of Excellence</span>
            </div>
            <div className="w-px h-12 bg-slate-300"></div>
            <div className="flex flex-col items-start font-serif">
              <span className="text-4xl font-extrabold text-[#15803d]">5000+</span>
              <span className="text-xs uppercase tracking-widest text-[#FF5733] font-bold">Students Placed</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual/Cards Overlay Content - simplified for this style */}
        <motion.div 
          className="w-full lg:w-2/5 relative h-[500px] hidden md:block"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 100 }}
        >
          <div className="absolute right-0 top-0 w-full h-full bg-[#15803d]/5 rounded-3xl -rotate-6 transform scale-95 border-2 border-dashed border-[#15803d]/20"></div>
          <img 
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2549&auto=format&fit=crop" 
            alt="Students" 
            className="w-full h-full object-cover rounded-3xl shadow-2xl relative z-10 border-4 border-white"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
