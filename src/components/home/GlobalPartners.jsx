import { motion } from 'framer-motion';
import { ExternalLink, GraduationCap, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GlobalPartners = () => {
  const topRussiaColleges = [
    { name: "I.M Sechenov First Moscow State Medical University", type: "Medical" },
    { name: "Moscow Institute of Physics and Technology (MIPT)", type: "Engineering" },
    { name: "Kazan State Medical University", type: "Medical" },
    { name: "Moscow State Aviation Institute (MAI)", type: "Engineering" }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-secondary font-bold tracking-widest text-sm uppercase mb-3 flex items-center gap-2">
              <Globe className="w-4 h-4" /> Global Academic Excellence
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Featured Universities in Russia</h3>
            <p className="text-slate-600 text-lg font-medium">
              We are proud partners of Russia's most prestigious government institutions, offering world-class infrastructure and globally recognized degrees.
            </p>
          </div>
          <Link 
            to="/russia-colleges" 
            className="group flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary transition-all shadow-lg shrink-0"
          >
            Explore All Russian Universities
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topRussiaColleges.map((college, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden"
            >
              <Link to={`/college/${encodeURIComponent(college.name)}`} className="absolute inset-0 z-10" aria-label={`View details for ${college.name}`} />
              <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-4 leading-tight group-hover:text-primary transition-colors">
                {college.name}
              </h4>
              <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-secondary text-[10px] font-black uppercase tracking-widest relative z-20">
                {college.type}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPartners;
