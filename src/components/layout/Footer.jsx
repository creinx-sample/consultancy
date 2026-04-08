import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 text-slate-800 pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-[#FF5733]" />
              <span className="text-2xl font-bold tracking-tight text-[#15803d]">EduGateway</span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mt-4">
              Your trusted partner for 12th admission guidance. We provide premium counseling to guide students into top-tier MBBS, Engineering, Arts, Science, and Agricultural colleges.
            </p>
            <div className="flex space-x-4 pt-2">
              <span className="text-slate-500 font-bold text-sm hover:text-[#15803d] transition-colors cursor-pointer uppercase tracking-tighter">FB</span>
              <span className="text-slate-500 font-bold text-sm hover:text-[#FF5733] transition-colors cursor-pointer uppercase tracking-tighter">IG</span>
              <span className="text-slate-500 font-bold text-sm hover:text-red-600 transition-colors cursor-pointer uppercase tracking-tighter">YT</span>
              <span className="text-slate-500 font-bold text-sm hover:text-[#15803d] transition-colors cursor-pointer uppercase tracking-tighter">IN</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#15803d]">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-600 hover:text-[#FF5733] transition-colors text-sm font-semibold">About Us</Link></li>
              <li><Link to="/services" className="text-slate-600 hover:text-[#FF5733] transition-colors text-sm font-semibold">Our Services</Link></li>
              <li><Link to="/countries" className="text-slate-600 hover:text-[#FF5733] transition-colors text-sm font-semibold">Study Abroad</Link></li>
              <li><Link to="/contact" className="text-slate-600 hover:text-[#FF5733] transition-colors text-sm font-semibold">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#15803d]">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-slate-600 text-sm font-semibold">MBBS Abroad Admissions</li>
              <li className="text-slate-600 text-sm font-semibold">Engineering Colleges (India)</li>
              <li className="text-slate-600 text-sm font-semibold">Arts & Science Admissions</li>
              <li className="text-slate-600 text-sm font-semibold">Agricultural Colleges</li>
              <li className="text-slate-600 text-sm font-semibold">Career Counseling</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#15803d]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#FF5733] flex-shrink-0 mt-0.5" />
                <span className="text-slate-600 text-sm font-semibold">2nd Floor, Fairlands, Salem, Tamil Nadu, India - 636016</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#FF5733] flex-shrink-0" />
                <span className="text-slate-600 text-sm font-semibold">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#FF5733] flex-shrink-0" />
                <span className="text-slate-600 text-sm font-semibold">info@edugateway.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 text-center md:flex md:justify-between md:text-left">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} EduGateway Consultancy. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="#" className="text-slate-500 hover:text-[#15803d] text-sm transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-slate-500 hover:text-[#15803d] text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
