import { Star, Quote, X, Send, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';

const initialReviews = [
  {
    name: "Rajesh Kumar",
    location: "Karur",
    text: "TN ALL EDUCATIONAL CONSULTANCY provided exceptional guidance for my son's MBBS admission. The process was smooth and the counselors were very professional. Highly recommended!",
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
    text: "Excellent support for overseas education. I am now studying in Georgia, all thanks to the TN ALL EDUCATIONAL CONSULTANCY team. They handled everything from documents to visa.",
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, text: '' });
  const [reviewsList, setReviewsList] = useState(initialReviews);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewToAdd = {
      ...newReview,
      location: "Verified User",
      date: "Just now"
    };
    setReviewsList([reviewToAdd, ...reviewsList]);
    setIsModalOpen(false);
    setNewReview({ name: '', rating: 5, text: '' });
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary/5 text-primary text-xs font-black tracking-widest mb-6 border border-primary/10 uppercase"
          >
            <Star className="w-4 h-4 fill-primary" />
            Student Testimonials
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

        <div className="relative">
          {/* Scroll Buttons */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 hidden md:block">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center shadow-xl hover:bg-primary hover:text-secondary transition-all"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 hidden md:block">
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center shadow-xl hover:bg-primary hover:text-secondary transition-all"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-12 pt-4 px-4 snap-x snap-mandatory no-scrollbar scroll-smooth"
          >
            {reviewsList.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-shrink-0 w-full md:w-[450px] snap-center"
              >
                <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border-2 border-primary/20 hover:border-primary transition-all duration-500 group relative flex flex-col h-full min-h-[400px]">
                  <Quote className="absolute top-8 right-10 w-16 h-16 text-slate-50 opacity-[0.1] group-hover:text-primary group-hover:opacity-[0.05] transition-colors" />
                  
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, index) => (
                      <Star 
                        key={index} 
                        className={`w-5 h-5 ${index < review.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} 
                      />
                    ))}
                  </div>

                  <p className="text-slate-700 text-lg md:text-xl font-medium leading-relaxed mb-10 italic flex-grow">
                    "{review.text}"
                  </p>

                  <div className="flex items-center gap-5 pt-8 border-t border-slate-100 mt-auto">
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center font-black text-primary text-2xl font-serif">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-black text-base uppercase tracking-wider">{review.name}</h4>
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{review.location || 'Karur'} • {review.date}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-primary text-secondary font-black text-xs border-2 border-primary hover:bg-secondary hover:text-primary transition-all shadow-xl uppercase tracking-[0.2em] group"
            >
              Write a Review
              <Star className="w-4 h-4 fill-secondary group-hover:fill-primary" />
            </button>
            <a 
              href="https://www.google.com/search?q=TN+ALL+EDUCATIONAL+CONSULTANCY+Karur+reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-primary font-black text-xs border-2 border-primary hover:bg-slate-50 transition-all shadow-lg uppercase tracking-[0.2em]"
            >
              Read More on Google
            </a>
          </div>
        </motion.div>
      </div>

      {/* Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-primary/40 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-xl rounded-[3rem] shadow-2xl overflow-hidden border-2 border-primary/20"
            >
              <div className="bg-primary p-8 text-center relative">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <h3 className="text-2xl font-black text-white font-serif uppercase tracking-tight">Share Your Experience</h3>
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest mt-2">Your feedback inspires us</p>
              </div>

              <form onSubmit={handleSubmit} className="p-10 space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Your Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={newReview.name}
                    onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                    placeholder="Enter your name"
                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-primary outline-none transition-all font-bold text-primary"
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1 block">Your Rating</label>
                  <div className="flex gap-4 justify-center bg-slate-50 py-4 rounded-2xl border-2 border-slate-100">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview({...newReview, rating: star})}
                        className="transition-transform active:scale-90"
                      >
                        <Star className={`w-8 h-8 ${star <= newReview.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Your Message</label>
                  <textarea 
                    required
                    rows="4"
                    value={newReview.text}
                    onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                    placeholder="Tell us about your journey with TN ALL EDUCATIONAL CONSULTANCY..."
                    className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-primary outline-none transition-all font-bold text-primary resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary text-secondary py-5 rounded-2xl font-black border-2 border-primary hover:bg-secondary hover:text-primary transition-all shadow-xl uppercase tracking-[0.2em] flex items-center justify-center gap-3"
                >
                  Submit Review
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Reviews;
