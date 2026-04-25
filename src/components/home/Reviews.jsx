import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Rajesh Kumar",
    location: "Karur",
    text: "TNAEC provided exceptional guidance for my son's MBBS admission. The process was smooth and the counselors were very professional. Highly recommended!",
    rating: 5,
    date: "2 months ago"
  },
  {
    name: "Sowmya Devi",
    location: "Trichy",
    text: "The best education consultancy in the region. They helped me secure a seat in a top engineering college in Tamil Nadu. Their knowledge about colleges is vast.",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Prakash Raj",
    location: "Coimbatore",
    text: "Excellent support for overseas education. I am now studying in Georgia, all thanks to the TNAEC team. They handled everything from documents to visa.",
    rating: 5,
    date: "3 months ago"
  },
  {
    name: "Meena Sankaran",
    location: "Namakkal",
    text: "Very transparent and reliable. They don't make false promises. The career counseling session was very helpful for my daughter.",
    rating: 4,
    date: "4 months ago"
  }
];

const Reviews = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary/5 text-primary text-xs font-black tracking-widest mb-6 border border-primary/10 uppercase"
          >
            <Star className="w-4 h-4 fill-primary" />
            Google My Business Reviews
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-slate-900 font-serif leading-tight"
          >
            What Our <span className="text-primary">Students Say</span>
          </motion.h2>
          <p className="mt-6 text-slate-500 font-bold text-lg max-w-2xl mx-auto">
            Trusted by thousands of families for our transparent and expert education consultancy services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-white hover:-translate-y-2 transition-all duration-500 group relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-50 opacity-[0.1] group-hover:text-primary group-hover:opacity-[0.05] transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star 
                    key={index} 
                    className={`w-4 h-4 ${index < review.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} 
                  />
                ))}
              </div>

              <p className="text-slate-600 font-medium leading-relaxed mb-8 italic">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center font-black text-primary text-xl font-serif">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-slate-900 font-black text-sm uppercase tracking-wider">{review.name}</h4>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{review.location} • {review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="https://www.google.com/search?q=TNAEC+Karur+reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-slate-700 font-black text-sm border-2 border-slate-100 hover:border-primary hover:text-primary transition-all shadow-lg uppercase tracking-widest"
          >
            View More on Google
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" alt="Google" className="h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
