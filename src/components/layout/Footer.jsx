import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary)] text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-secondary)]/5 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand & About */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-[var(--color-secondary)] p-2 rounded-xl rotate-3 group-hover:rotate-0 transition-transform">
                <GraduationCap className="h-8 w-8 text-[var(--color-primary)]" />
              </div>
              <span className="text-3xl font-black tracking-tighter text-white font-serif">TNAEC</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed font-medium">
              Transforming educational aspirations into global success. We provide elite admission guidance for premier institutions in India and abroad.
            </p>
            <div className="flex space-x-6 pt-4">
              {['FB', 'IG', 'YT', 'IN'].map((social) => (
                <span key={social} className="text-white/40 font-black text-xs hover:text-[var(--color-secondary)] transition-colors cursor-pointer tracking-widest uppercase">{social}</span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-black mb-8 text-[var(--color-secondary)] uppercase tracking-[0.2em] border-l-4 border-[var(--color-secondary)] pl-4">Explore</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-white/70 hover:text-[var(--color-secondary)] transition-colors text-sm font-bold uppercase tracking-wider">The Mission</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-[var(--color-secondary)] transition-colors text-sm font-bold uppercase tracking-wider">Our Solutions</Link></li>
              <li><Link to="/countries" className="text-white/70 hover:text-[var(--color-secondary)] transition-colors text-sm font-bold uppercase tracking-wider">Global Scope</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-[var(--color-secondary)] transition-colors text-sm font-bold uppercase tracking-wider">Connect Now</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-black mb-8 text-[var(--color-secondary)] uppercase tracking-[0.2em] border-l-4 border-[var(--color-secondary)] pl-4">Verticals</h3>
            <ul className="space-y-4">
              <li className="text-white/70 text-sm font-bold tracking-wide">MBBS International</li>
              <li className="text-white/70 text-sm font-bold tracking-wide">Elite Engineering</li>
              <li className="text-white/70 text-sm font-bold tracking-wide">Arts & Science</li>
              <li className="text-white/70 text-sm font-bold tracking-wide">Agriculture & Tech</li>
              <li className="text-white/70 text-sm font-bold tracking-wide">Strategic Counseling</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-black mb-8 text-[var(--color-secondary)] uppercase tracking-[0.2em] border-l-4 border-[var(--color-secondary)] pl-4">Headquarters</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm font-bold leading-relaxed">2nd Floor, Fairlands, Salem, <br />Tamil Nadu, India - 636016</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-[var(--color-secondary)] flex-shrink-0" />
                <span className="text-white/70 text-lg font-black tracking-tighter hover:text-white transition-colors cursor-pointer">+91 95973 71949</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-[var(--color-secondary)] flex-shrink-0" />
                <span className="text-white/70 text-sm font-bold hover:text-white transition-colors cursor-pointer border-b border-[var(--color-secondary)]/30">info@tnaec.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 text-center md:flex md:justify-between md:text-left">
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} TNAEC | PREMIUM EDUCATION ARCHITECTS.
          </p>
          <div className="mt-6 md:mt-0 space-x-8">
            <Link to="#" className="text-white/40 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors">Privacy Charter</Link>
            <Link to="#" className="text-white/40 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors">Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
    </footer>
  );
};

export default Footer;
