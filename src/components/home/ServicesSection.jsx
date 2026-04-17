import { Stethoscope, Cpu, Book, Leaf, GraduationCap, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      title: "MBBS Abroad",
      description: "Secure your affordable medical seat in WHO/NMC recognized universities across Russia, Georgia, Philippines, and Kazakhstan.",
      icon: Stethoscope,
      bg: "bg-emerald-50",
      color: "text-emerald-600",
      path: "/countries"
    },
    {
      title: "Top TN Universities",
      description: "Direct admission guidance for Engineering, Arts, Science, Law, and Pharmacy in Tamil Nadu's top private universities.",
      icon: Cpu,
      bg: "bg-orange-50",
      color: "text-[#FF5733]",
      path: "/tn-colleges"
    },
    {
      title: "Study in Russia",
      description: "Exclusive guidance for prestigious Russian government universities for both Medical and Engineering streams.",
      icon: Globe,
      bg: "bg-blue-50",
      color: "text-blue-600",
      path: "/russia-colleges"
    },
    {
      title: "Arts & Science",
      description: "Explore diverse streams and find the perfect institution to build a strong foundation for your future career.",
      icon: Book,
      bg: "bg-indigo-50",
      color: "text-indigo-600",
      path: "/tn-colleges"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#FF5733] font-bold tracking-widest text-sm uppercase mb-2">Our Key Services</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#15803d] mb-4">Complete Admission Guidance</h3>
          <p className="text-slate-600 text-lg font-medium">
            We simplify the complex admission process, ensuring you secure a seat in the right college and stream based on your profile and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  to={service.path}
                  className="block bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-2xl hover:border-[#15803d]/20 transition-all duration-300 group text-center h-full relative"
                >
                  <div className={`w-16 h-16 rounded-full ${service.bg} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h4 className="text-2xl font-bold text-[#15803d] mb-4">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-[#FF5733] font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

