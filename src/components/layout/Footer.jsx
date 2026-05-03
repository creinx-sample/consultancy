import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & About */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-4 group">
              <img 
                src="/images/logo.png" 
                alt="Logo" 
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-white font-serif leading-none">
                  TN ALL EDUCATIONAL
                </span>
                <span className="text-[10px] font-black tracking-[0.3em] text-secondary leading-none mt-1 uppercase">
                  CONSULTANCY
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed font-medium">
              Transforming educational aspirations into global success. We provide elite admission guidance for premier institutions in India and abroad.
            </p>
            <div className="flex space-x-5 pt-2">
              <a href="#" className="text-white/60 hover:text-secondary transition-colors cursor-pointer">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors cursor-pointer">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
 
          {/* Quick Links & Verticals */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h3 className="text-[11px] font-black mb-8 text-secondary uppercase tracking-[0.3em] border-l-4 border-secondary pl-4">Explore</h3>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-white/80 hover:text-secondary transition-colors text-[11px] font-black uppercase tracking-widest">Mission</Link></li>
                <li><Link to="/services" className="text-white/80 hover:text-secondary transition-colors text-[11px] font-black uppercase tracking-widest">Solutions</Link></li>
                <li><Link to="/countries" className="text-white/80 hover:text-secondary transition-colors text-[11px] font-black uppercase tracking-widest">Scope</Link></li>
                <li><Link to="/contact" className="text-white/80 hover:text-secondary transition-colors text-[11px] font-black uppercase tracking-widest">Connect</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] font-black mb-8 text-secondary uppercase tracking-[0.3em] border-l-4 border-secondary pl-4">Verticals</h3>
              <ul className="space-y-4">
                <li><Link to="/russia-colleges" className="text-white/80 hover:text-secondary transition-colors text-[11px] font-black tracking-widest uppercase">MBBS Int.</Link></li>
                <li><Link to="/tn-colleges" className="text-white/80 hover:text-secondary transition-colors text-[11px] font-black tracking-widest uppercase">Engineering</Link></li>
                <li><Link to="/tn-colleges" className="text-white/80 hover:text-secondary transition-colors text-[11px] font-black tracking-widest uppercase">Arts & Science</Link></li>
                <li><Link to="/georgia-colleges" className="text-white/80 hover:text-secondary transition-colors text-[11px] font-black tracking-widest uppercase">Study Georgia</Link></li>
                <li><Link to="/tn-colleges" className="text-white/80 hover:text-secondary transition-colors text-[11px] font-black tracking-widest uppercase">TN All Tech</Link></li>
              </ul>
            </div>
          </div>
 
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-[11px] font-black mb-8 text-secondary uppercase tracking-[0.3em] border-l-4 border-secondary pl-4">Headquarters</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-[12px] font-bold leading-relaxed uppercase tracking-tight">
                  4B, Ramakrishna Puram Main Road,<br />
                  Opposite Stationary Shop, Karur,<br />
                  Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919597371949" className="text-white hover:text-secondary transition-colors text-[14px] font-black tracking-tighter">+91 95973 71949</a>
                  <a href="tel:+919524712976" className="text-white hover:text-secondary transition-colors text-[14px] font-black tracking-tighter">+91 95247 12976</a>
                </div>
              </li>
              <li className="flex items-center space-x-4 pt-2">
                <a 
                  href="https://www.google.com/search?q=TN+ALL+EDUCATIONAL+CONSULTANCY+Karur+reviews" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 hover:bg-secondary hover:text-primary text-secondary text-[10px] font-black uppercase tracking-[0.2em] border border-secondary/30 transition-all group"
                >
                  <Star className="w-3.5 h-3.5 fill-current" />
                  Review us on Google
                </a>
              </li>
            </ul>
          </div>
        </div>
 
        <div className="pt-8 border-t border-white/10 text-center flex flex-col items-center gap-4">
          <a href="https://www.creinx.com/" target="_blank" rel="noopener noreferrer" className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] hover:text-secondary transition-colors">
            DEVELOPED BY CREINX.
          </a>
          <div className="flex space-x-6">
            <Link to="#" className="text-white/20 hover:text-white text-[8px] font-black uppercase tracking-widest transition-colors">Privacy</Link>
            <Link to="#" className="text-white/20 hover:text-white text-[8px] font-black uppercase tracking-widest transition-colors">Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
