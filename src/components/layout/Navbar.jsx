import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Owner', path: '/founder' },
    { name: 'Services', path: '/services' },
  ];

  const collegeLinks = [
    { name: 'Study Abroad (MBBS)', path: '/countries' },
    { name: 'TN Universities', path: '/tn-colleges' },
    { name: 'Study in Russia', path: '/russia-colleges' },
    { name: 'Study in Georgia', path: '/georgia-colleges' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-[#FF5733] p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className={`text-xl md:text-2xl font-black tracking-tighter ${isScrolled ? 'text-[#15803d]' : 'text-[#15803d]'}`}>TNAEC</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-black uppercase tracking-widest hover:text-[#FF5733] transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#FF5733] after:transition-all hover:after:w-full ${
                  location.pathname === link.path ? 'text-[#FF5733] after:w-full' : 'text-slate-700'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-[#FF5733] transition-all ${
                  collegeLinks.some(l => l.path === location.pathname) ? 'text-[#FF5733]' : 'text-slate-700'
                }`}
              >
                Top Programs
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 py-6 overflow-hidden"
                  >
                    {collegeLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="block px-8 py-3.5 text-xs font-black uppercase tracking-wider text-slate-600 hover:bg-slate-50 hover:text-[#15803d] transition-all"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact"
              className={`text-xs font-black uppercase tracking-widest hover:text-[#FF5733] transition-all ${
                location.pathname === '/contact' ? 'text-[#FF5733]' : 'text-slate-700'
              }`}
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="bg-[#15803d] text-white px-8 py-3.5 rounded-2xl font-black hover:bg-[#166534] transition-all shadow-[0_10px_20px_rgba(21,128,61,0.2)] hover:shadow-[0_15px_30px_rgba(21,128,61,0.3)] hover:-translate-y-0.5 uppercase text-[10px] tracking-[0.2em]"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-[#15803d] transition-colors"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-50 overflow-hidden"
          >
            <div className="px-6 pt-8 pb-12 space-y-2">
              {mainLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all ${
                    location.pathname === link.path ? 'bg-slate-50 text-[#FF5733]' : 'text-slate-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-8 mt-6 border-t border-slate-50">
                <span className="px-4 text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-6 block">Our Global Programs</span>
                {collegeLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-4 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all ${
                      location.pathname === link.path ? 'bg-slate-50 text-[#FF5733]' : 'text-slate-700'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="pt-8">
                <Link
                  to="/contact"
                  className="block text-center bg-[#15803d] text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-emerald-100"
                >
                  Apply Selection 2024
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

