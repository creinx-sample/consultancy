import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
  ];

  const collegeLinks = [
    { name: 'TN Universities', path: '/tn-colleges' },
    { name: 'Study Abroad (MBBS)', path: '/countries' },
    { name: 'Study in Georgia', path: '/georgia-colleges' },
    { name: 'Study in Russia', path: '/russia-colleges' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-primary/60 shadow-[0_8px_32px_rgba(0,0,0,0.1)] py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/images/logo.png" 
              alt="Logo" 
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className={`text-lg md:text-xl font-black tracking-tight leading-none ${isScrolled ? 'text-primary' : 'text-primary'}`}>
                TN ALL EDUCATIONAL
              </span>
              <span className="text-[10px] font-black tracking-[0.2em] text-secondary leading-none mt-1">
                CONSULTANCY
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-black uppercase tracking-widest px-5 py-2.5 border-2 rounded-xl transition-all ${
                  location.pathname === link.path ? 'bg-primary text-secondary border-primary' : 'text-primary border-primary hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
 
            {/* Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest px-5 py-2.5 border-2 border-primary rounded-xl transition-all ${
                  collegeLinks.some(l => l.path === location.pathname) ? 'bg-primary text-secondary' : 'text-primary hover:bg-slate-50'
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
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-2 border-primary py-6 overflow-hidden"
                  >
                    {collegeLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="block px-8 py-3.5 text-xs font-black uppercase tracking-wider text-slate-600 hover:bg-slate-50 hover:text-primary transition-all"
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
              className={`text-xs font-black uppercase tracking-widest px-5 py-2.5 border-2 rounded-xl transition-all ${
                location.pathname === '/contact' ? 'bg-primary text-secondary border-primary' : 'text-primary border-primary hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>

            <button
              onClick={() => {
                if (window.location.pathname === '/') {
                  const element = document.getElementById('counseling');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                } else {
                  // Navigate to home with hash
                  navigate('/#counseling');
                }
              }}
              className="bg-primary text-secondary px-8 py-3.5 rounded-2xl font-black border-2 border-primary hover:bg-secondary hover:text-primary transition-all shadow-[0_10px_20px_rgba(30,27,75,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 uppercase text-[10px] tracking-[0.2em]"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-primary transition-colors"
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
                    location.pathname === link.path ? 'bg-slate-50 text-secondary' : 'text-slate-700'
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
                      location.pathname === link.path ? 'bg-slate-50 text-secondary' : 'text-slate-700'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="pt-8">
                <Link
                  to="/contact"
                  className="block text-center bg-primary text-secondary border-2 border-secondary py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-indigo-100"
                >
                  Join the Next Batch 2026
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

