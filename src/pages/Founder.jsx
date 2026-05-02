import { motion } from 'framer-motion';
import { Quote, Award, Target, Heart, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Founder = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-primary py-32 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-white/70 hover:text-white font-bold transition-colors group mb-12"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-3 rounded-full mb-10"
          >
            <Award className="w-6 h-6 text-secondary" />
            <span className="text-white text-sm font-black tracking-[0.2em] uppercase">The Visionary Leader</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white mb-8 font-serif leading-tight uppercase tracking-tighter"
          >
            MESSAGE FROM <br /><span className="text-secondary">THE FOUNDER</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed italic"
          >
            "Empowering the next generation of healthcare and engineering professionals through ethical guidance and world-class opportunities."
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl shadow-slate-200 border border-slate-100 relative"
            >
              <Quote className="absolute top-12 left-12 w-20 h-20 text-primary opacity-5" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black text-primary mb-10 font-serif leading-tight">Bridging <span className="text-secondary">Dreams</span> & <span className="text-secondary">Reality</span></h2>
                <div className="space-y-6 text-slate-600 font-medium text-lg leading-loose">
                  <p>
                    With over a decade of experience in international education consultancy, I have witnessed first-hand the challenges students face when pursuing professional degrees abroad. My mission was born from a simple realization: every student deserves transparent, ethical, and high-quality guidance to navigate the global academic landscape.
                  </p>
                  <p>
                    At our consultancy, we don't just process applications; we build futures. We rigorously vet every university in Russia, Georgia, and India to ensure they meet the highest clinical and academic standards. Our focus remains on the long-term success of our students—not just getting them into a college, but ensuring they emerge as competent professionals ready for the global market.
                  </p>
                  <p>
                    Your trust is our most valuable asset. Whether you are aiming for an MBBS in Russia or a premier Engineering seat in Tamil Nadu, we are here to support you at every single step of the journey.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  icon: Target, 
                  title: "Our Mission", 
                  desc: "To be the most trusted education bridge for students seeking global medical and engineering careers." 
                },
                { 
                  icon: Heart, 
                  title: "Ethical Core", 
                  desc: "Completely transparent admission process with zero hidden costs and dedicated student support." 
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all"
                >
                  <item.icon className="w-12 h-12 text-secondary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-black text-primary mb-4 uppercase tracking-tighter font-serif">{item.title}</h3>
                  <p className="text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary p-12 rounded-[3.5rem] text-white shadow-2xl shadow-indigo-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
              <h3 className="text-2xl font-black mb-10 uppercase tracking-widest border-b border-white/20 pb-6 text-secondary">Track Record</h3>
              <div className="space-y-8">
                {[
                  { label: "Students Guided", value: "2500+" },
                  { label: "Success Rate", value: "100%" },
                  { label: "Global Partners", value: "50+" },
                  { label: "Years of Trust", value: "10+" }
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                    <p className="text-5xl font-black text-white tracking-tighter">{stat.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-lg"
            >
              <h3 className="text-xl font-black text-primary mb-8 uppercase tracking-widest border-b border-slate-100 pb-4">Core Values</h3>
              <div className="space-y-4">
                {["Transparency", "Personalized Mentoriship", "Post-Admission Support", "Global Network"].map((v, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-slate-700 font-bold">{v}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
