import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ArrowLeft, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-primary py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[60px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="max-w-7xl mx-auto px-4 mb-8 text-left">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-white/70 hover:text-white font-bold transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white mb-6 font-serif leading-tight"
          >
            GET IN <span className="text-secondary">TOUCH</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Have questions about admissions or choosing the right university? Our experts are here to guide you.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Quick Contact Cards */}
          <div className="lg:col-span-1 space-y-6">
            {[
              { 
                icon: MapPin, 
                title: "Headquarters", 
                detail: "4B, Ramakrishna Puram Main Road, Karur", 
                subDetail: "Opposite Stationary Shop",
                color: "bg-indigo-50", 
                iconColor: "text-primary" 
              },
              { 
                icon: Phone, 
                title: "Call Us", 
                detail: "+91 95973 71949", 
                subDetail: "+91 95247 12976",
                color: "bg-amber-50", 
                iconColor: "text-secondary" 
              },
              { 
                icon: Mail, 
                title: "Email Us", 
                detail: "uniquetours.packager@gmail.com", 
                color: "bg-emerald-50", 
                iconColor: "text-secondary" 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`${item.color} p-8 rounded-[2rem] border border-white/50 shadow-xl shadow-slate-200/50 flex items-start gap-6 group hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`p-4 rounded-2xl bg-white shadow-sm transition-transform group-hover:scale-110`}>
                  <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-800 mb-2 font-serif">{item.title}</h4>
                  <p className="text-slate-600 font-bold leading-tight">{item.detail}</p>
                  {item.subDetail && <p className="text-slate-400 text-xs font-bold mt-1 uppercase tracking-wider">{item.subDetail}</p>}
                </div>
              </motion.div>
            ))}
            
            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <h4 className="text-xl font-black text-slate-800 mb-6 font-serif tracking-tight">Our Branches</h4>
              <div className="grid grid-cols-2 gap-4">
                {['Karur', 'Trichy', 'Namakkal', 'Coimbatore'].map((branch) => (
                  <div key={branch} className="flex items-center gap-2 text-slate-600 font-bold">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-sm uppercase tracking-wide">{branch}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 h-full"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-12 text-center md:text-left">
                      <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 font-serif leading-tight">Send a <span className="text-primary">Message</span></h2>
                      <p className="text-slate-500 font-bold text-lg">Leave us a message and we'll get back to you within 24 hours.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-black text-slate-700 uppercase tracking-widest px-1">Full Name</label>
                          <input 
                            required
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-bold"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-black text-slate-700 uppercase tracking-widest px-1">Email Address</label>
                          <input 
                            required
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-bold"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-black text-slate-700 uppercase tracking-widest px-1">Phone Number</label>
                          <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-bold"
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-black text-slate-700 uppercase tracking-widest px-1">Interested Category</label>
                          <select 
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-bold"
                          >
                            <option value="">Select a program</option>
                            <option value="TN Engineering">TN Engineering</option>
                            <option value="Study in Russia">Study in Russia</option>
                            <option value="Study in Georgia">Study in Georgia</option>
                            <option value="Medical/Allied Health">Medical/Allied Health</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-black text-slate-700 uppercase tracking-widest px-1">Your Message</label>
                        <textarea 
                          required
                          rows="4"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-bold resize-none"
                          placeholder="Tell us about your academic goals..."
                        />
                      </div>

                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-white py-6 rounded-[2rem] font-bold text-lg hover:bg-secondary transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3 group disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <span className="uppercase tracking-[0.2em] text-sm">Send Inquiry Now</span>
                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 mb-4 font-serif">Message Sent!</h2>
                    <p className="text-slate-600 font-bold mb-10 text-xl max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out. One of our counselors will contact you shortly.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary font-black underline decoration-4 decoration-secondary underline-offset-8 uppercase tracking-widest text-sm"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="w-full h-[500px] bg-white p-4 rounded-[3rem] shadow-2xl border border-white relative overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15668.618625624177!2d78.0772221!3d10.9638889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2f038f116675%3A0x63045b34c2668579!2sKarur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1714050000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Karur Office Location"
            className="rounded-[2.5rem]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
