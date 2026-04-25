import { Star, Quote, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Arjun M.",
      course: "MBBS, Georgia",
      image: "https://i.pravatar.cc/150?img=11",
      feedback: "I was extremely confused after my NEET results. TNAEC guided me through the entire process and helped me secure a seat in Georgia. Their transparency and step-by-step assistance are unmatched."
    },
    {
      name: "Sneha K.",
      course: "B.E. Computer Science, Chennai",
      image: "https://i.pravatar.cc/150?img=5",
      feedback: "Getting into a top Engineering college seemed impossible, but they made it happen. They analyzed my scores and suggested the best colleges. I couldn't be happier with my career path."
    },
    {
      name: "Rahul T.",
      course: "B.Sc Agriculture, Coimbatore",
      image: "https://i.pravatar.cc/150?img=12",
      feedback: "The counseling was eye-opening. They didn't just push me towards random courses. They understood my passion for Agriculture and found the perfect college for me. Highly recommended!"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-secondary font-bold tracking-widest text-sm uppercase mb-2">Student Stories</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">What Our Students Say</h3>
          <p className="text-slate-600 text-lg font-medium">
            Hear from students and parents who have successfully transformed their career aspirations into reality with our expert guidance.
          </p>
        </div>

        {/* Video Testimonials Section - simplified version */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          <div className="relative h-72 bg-slate-900 rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
            <img 
               src="https://images.unsplash.com/photo-1510531704581-5b2870972060?q=80&w=2670&auto=format&fit=crop" 
               alt="Video Thumbnail 1" 
               className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:scale-110 transition-transform cursor-pointer" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-bold uppercase tracking-widest">MBBS Abroad Success Story</p>
              <p className="text-xs opacity-80 font-medium">Recorded Live Interview</p>
            </div>
          </div>
          <div className="relative h-72 bg-slate-900 rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
            <img 
               src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop" 
               alt="Video Thumbnail 2" 
               className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:scale-110 transition-transform cursor-pointer" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-bold uppercase tracking-widest">Parent Feedback - Engineering Admission</p>
              <p className="text-xs opacity-80 font-medium">Salem, Tamil Nadu</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-2xl relative border border-slate-100 hover:shadow-lg transition-all"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-secondary/10" />
              <div className="flex text-[#FFC107] mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-8 italic text-sm leading-relaxed font-medium relative z-10">
                "{testimonial.feedback}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-secondary"
                />
                <div>
                  <h4 className="font-bold text-primary text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 font-bold">{testimonial.course}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
