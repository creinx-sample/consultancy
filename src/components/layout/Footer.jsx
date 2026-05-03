import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

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
              {['FB', 'IG', 'YT', 'IN'].map((social) => (
                <span key={social} className="text-white/40 font-black text-[10px] hover:text-secondary transition-colors cursor-pointer tracking-widest uppercase">{social}</span>
              ))}
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
                  <span className="text-white text-[14px] font-black tracking-tighter">+91 95973 71949</span>
                  <span className="text-white text-[14px] font-black tracking-tighter">+91 95247 12976</span>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-white/80 text-[11px] font-bold border-b border-secondary/30 uppercase tracking-wider">uniquetours.packager@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center md:flex md:justify-between md:text-left">
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} TN ALL EDUCATIONAL CONSULTANCY | PREMIUM EDUCATION ARCHITECTS.
          </p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link to="#" className="text-white/40 hover:text-white text-[9px] font-black uppercase tracking-widest transition-colors">Privacy</Link>
            <Link to="#" className="text-white/40 hover:text-white text-[9px] font-black uppercase tracking-widest transition-colors">Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
