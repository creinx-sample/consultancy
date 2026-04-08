import { CheckCircle2, Award, Users, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const points = [
    {
      title: "10+ Years of Experience",
      description: "Successfully guiding students through complex admission pathways since our inception."
    },
    {
      title: "5000+ Placed Students",
      description: "A strong alumni network studying in top medical and engineering colleges worldwide."
    },
    {
      title: "100% Transparency",
      description: "No hidden fees, no false promises. Just clear, honest, and reliable guidance."
    },
    {
      title: "Global Recognition",
      description: "We work with top-tier universities recognized by WHO, NMC, and AICTE."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[#FF5733] font-bold tracking-widest text-sm uppercase mb-2">Why Choose Us</h2>
            <h3 className="text-4xl font-extrabold text-[#15803d] mb-6 leading-tight">
              A Legacy of Trust <br/> in Education.
            </h3>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
              Join thousands of students and parents who have trusted EduGateway for their academic and career journeys. We don't just find you a college; we find you the right fit.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {points.map((point, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-[#FF5733]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#15803d] mb-1">{point.title}</h4>
                    <p className="text-slate-500 text-sm font-medium">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Visual/Image Area */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-[#15803d]/5 rounded-3xl -rotate-6 transform scale-105 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop" 
              alt="Our Team" 
              className="rounded-3xl shadow-2xl relative z-10 w-full h-[500px] object-cover border-8 border-white"
            />
            
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl z-20 hidden md:block border-l-8 border-[#FF5733]">
              <div className="flex items-center gap-4">
                < Award className="w-10 h-10 text-[#15803d]" />
                <div>
                  <p className="text-[#15803d] font-extrabold text-2xl uppercase tracking-tighter italic">Top Rated</p>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Consultancy in TN</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
