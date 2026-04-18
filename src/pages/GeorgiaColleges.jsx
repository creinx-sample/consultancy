import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, CheckCircle, GraduationCap, Stethoscope, Globe, Cpu } from 'lucide-react';
import { countriesData } from '../data/collegesData';

const GeorgiaColleges = () => {
  const georgiaData = countriesData.find(c => c.country === "Georgia");

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-[#15803d] py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF5733]/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-[80px]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="mb-8">
            <Link 
              to="/countries" 
              className="inline-flex items-center gap-2 text-white/70 hover:text-white font-bold transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to MBBS Abroad
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full mb-8"
          >
            <Globe className="w-5 h-5 text-[#FF5733]" />
            <span className="text-white text-sm font-bold tracking-widest uppercase">The Bridge to Europe • Georgia</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-extrabold text-white mb-8 font-serif leading-tight"
          >
            Top Universities in <span className="text-[#FF5733]">Georgia</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Experience European education standards in one of the safest and most student-friendly nations in the world.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Why Georgia Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          <div className="lg:col-span-1">
            <h2 className="text-[#FF5733] font-bold tracking-widest text-sm uppercase mb-4">European Excellence</h2>
            <h3 className="text-4xl font-black text-[#15803d] font-serif mb-6 leading-tight">Why Choose Georgia?</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              Georgia is rapidly becoming the most preferred destination for Indian students due to its high FMGE passing rate and safe, European lifestyle.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: "NMC & WHO Recognized", desc: "Degrees are globally valid and recognized for medical practice in India." },
              { title: "No IELTS/TOEFL", desc: "Admissions based on 12th marks and NEET qualification. No language exams needed." },
              { title: "Safe & Cultural", desc: "Known as one of the safest countries globally with a rich, vibrant culture." },
              { title: "European Standards", desc: "Curriculum aligned with European educational systems ensuring global career growth." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-7 rounded-3xl shadow-sm border border-slate-100 flex gap-5 group hover:border-[#FF5733]/30 transition-all">
                <CheckCircle className="w-6 h-6 text-[#FF5733] shrink-0" />
                <div>
                  <h4 className="text-[#15803d] font-bold mb-1 uppercase tracking-tighter text-sm">{item.title}</h4>
                  <p className="text-slate-500 text-xs font-semibold leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Universities Section */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#FF5733]/10 rounded-2xl flex items-center justify-center">
                <Stethoscope className="w-10 h-10 text-[#FF5733]" />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-[#15803d] font-serif uppercase tracking-tight">Medical Universities</h2>
                <p className="text-slate-500 font-bold tracking-widest text-sm uppercase mt-1">International Standard • English Medium</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {georgiaData.medicalUniversities.map((univ, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-[#FF5733]/20 transition-all group overflow-hidden"
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={univ.images?.[0] || 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80'} 
                    alt={univ.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 font-serif"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-6 left-8 right-8">
                    <div className="flex items-center gap-2 text-white/80 text-xs font-black uppercase tracking-[0.2em] mb-2">
                      <MapPin className="w-3.5 h-3.5 text-[#FF5733]" />
                      {univ.location}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white font-serif leading-tight">
                      {univ.name}
                    </h3>
                  </div>
                </div>
                
                <div className="p-10">
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Duration</p>
                      <p className="text-sm font-black text-[#15803d]">6 Years</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Medium</p>
                      <p className="text-sm font-black text-[#15803d]">English</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-10">
                    {univ.highlights?.slice(0, 3).map((h, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <CheckCircle className="w-4 h-4 text-[#FF5733] shrink-0 mt-0.5" />
                        <span className="text-sm font-bold text-slate-600 leading-tight">{h}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to={`/college/${univ.id}`} 
                    className="w-full bg-[#15803d] text-white py-5 rounded-2xl font-black text-center block hover:bg-[#14532d] transition-all shadow-xl hover:shadow-emerald-200 uppercase tracking-widest text-xs"
                  >
                    View Details & Fees →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 md:p-20 bg-gradient-to-br from-[#15803d] to-[#14532d] rounded-[4rem] text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight font-serif uppercase tracking-tight">Start Your European Medical Journey Today</h2>
            <p className="text-white/80 text-xl font-medium mb-10 leading-relaxed">
              Admissions for 2024 intake are now open. Get personalized guidance for Georgia's most prestigious universities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="bg-[#FF5733] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl hover:bg-[#e64a19] transition-all">Apply Now</Link>
              <a href="https://wa.me/91XXXXXXXXXX" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-white/20 transition-all">WhatsApp Us</a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GeorgiaColleges;
