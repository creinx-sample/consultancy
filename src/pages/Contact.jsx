import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Globe, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="bg-[#15803d] py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5733]/10 rounded-full blur-[80px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="absolute top-0 left-0 -ml-10">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-white/70 hover:text-white font-bold transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back
            </Link>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-serif"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto font-medium"
          >
            We are here to answer your questions and guide you towards the right path. Visit our office in Salem or reach out online.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-[#15803d] font-bold tracking-widest text-sm uppercase mb-4">Contact Information</h2>
              <h3 className="text-4xl font-extrabold text-slate-900 mb-8 font-serif uppercase tracking-tight">Reach Out To Us</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4 p-8 bg-slate-50 rounded-3xl border border-slate-100 items-center text-center">
                <div className="bg-[#15803d]/10 p-4 rounded-full">
                  <MapPin className="w-8 h-8 text-[#15803d]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#15803d] mb-2 uppercase tracking-tighter">Our Office</h4>
                  <p className="text-slate-600 text-sm font-medium">2nd Floor, Fairlands,<br/>Salem, Tamil Nadu, 636016</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 p-8 bg-slate-50 rounded-3xl border border-slate-100 items-center text-center">
                <div className="bg-[#FF5733]/10 p-4 rounded-full">
                  <Phone className="w-8 h-8 text-[#FF5733]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#15803d] mb-2 uppercase tracking-tighter">Call Us</h4>
                  <p className="text-slate-600 text-sm font-medium">+91 95973 71949</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 p-8 bg-slate-50 rounded-3xl border border-slate-100 items-center text-center">
                <div className="bg-green-100 p-4 rounded-full">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#15803d] mb-2 uppercase tracking-tighter">Email Us</h4>
                  <p className="text-slate-600 text-sm font-medium">info@tnaec.in</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 p-8 bg-slate-50 rounded-3xl border border-slate-100 items-center text-center">
                <div className="bg-amber-100 p-4 rounded-full">
                  <Clock className="w-8 h-8 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#15803d] mb-2 uppercase tracking-tighter">Working Hours</h4>
                  <p className="text-slate-600 text-sm font-medium">Mon - Sat: 10AM - 7PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#FF5733]/5 rounded-[40px] rotate-2 transform scale-105 z-0 border border-slate-200"></div>
            <div className="w-full h-[400px] md:h-[600px] bg-slate-200 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white relative z-10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31263.15545524675!2d78.14!3d11.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf0380d603aeb%3A0xf69c73792c3065b7!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v16200000" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Salem Office Location"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
