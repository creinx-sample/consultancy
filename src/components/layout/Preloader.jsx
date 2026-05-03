import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 2.5,
        filter: "blur(20px)",
        transition: { 
          duration: 1.2, 
          ease: "easeInOut"
        }
      }}
      className="fixed inset-0 z-[100] bg-slate-50 flex items-center justify-center overflow-hidden"
    >
      <div className="relative flex flex-col items-center scale-75 sm:scale-90 md:scale-100">
        {/* Book Container */}
        <div className="perspective-1000 w-56 h-72 relative group">
          {/* Internal Glow Effect */}
          <motion.div 
            animate={{ 
              opacity: [0, 0.5, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-secondary/30 blur-[100px] rounded-full"
          />

          {/* Spine */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-[#8b0000] rounded-l-lg z-30 shadow-inner border-r border-black/10" />
          
          {/* Back Cover */}
          <div className="absolute inset-0 bg-primary rounded-xl border-2 border-primary shadow-2xl" />
          
          {/* Pages Stack (Ultra Rapid Fanning Effect) */}
          {[...Array(24)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ rotateY: 0, x: 0 }}
              animate={{ 
                rotateY: -130 - (i * 2.5),
                x: i * 0.2,
                z: -i
              }}
              transition={{ 
                duration: 1.5, 
                delay: 0.03 * i,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 0.1,
                ease: "easeInOut"
              }}
              style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
              className="absolute inset-2 bg-white rounded-r-lg shadow-sm border-l border-slate-200 z-10 flex flex-col p-4 gap-2 overflow-hidden"
            >
               <div className="h-1 bg-slate-100 rounded-full w-full opacity-30" />
               <div className="h-1 bg-slate-50 rounded-full w-4/5 opacity-30" />
            </motion.div>
          ))}

          {/* Front Cover */}
          <motion.div
            initial={{ rotateY: 0 }}
            animate={{ rotateY: -180 }}
            transition={{ 
              duration: 2.2, 
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.5
            }}
            style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
            className="absolute inset-0 bg-primary rounded-r-xl shadow-[20px_0_40px_rgba(0,0,0,0.4)] border-2 border-secondary z-40 flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] opacity-30" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-1 bg-secondary/50 mb-6 rounded-full" />
              <div className="text-secondary font-black text-3xl tracking-[0.3em] font-serif mb-2 drop-shadow-lg">TNAEC</div>
              <div className="text-secondary/60 text-[10px] font-black uppercase tracking-[0.5em] mb-8">Consultancy</div>
              <div className="px-6 py-2 border-2 border-secondary/20 rounded-full backdrop-blur-sm">
                 <span className="text-secondary text-[9px] font-black uppercase tracking-widest">Global Admissions</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Loading Message */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <p className="text-primary font-black tracking-[0.5em] text-[10px] uppercase">Opening the gateway to your future</p>
          <div className="w-48 h-1 bg-slate-100 rounded-full overflow-hidden relative">
            <motion.div 
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-secondary to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
