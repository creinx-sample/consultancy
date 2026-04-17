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
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
  ];

  const collegeLinks = [
    { name: 'Study Abroad (MBBS)', path: '/countries' },
    { name: 'TN Universities', path: '/tn-colleges' },
    { name: 'Study in Russia', path: '/russia-colleges' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-[#FF5733]" />
            <span className={`text-xl md:text-2xl font-bold tracking-tight ${isScrolled ? 'text-[#15803d]' : 'text-[#15803d]'}`}>TNAEC</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold hover:text-[#FF5733] transition-colors ${
                  location.pathname === link.path ? 'text-[#FF5733]' : 'text-slate-700'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                className={`flex items-center gap-1 text-sm font-semibold hover:text-[#FF5733] transition-colors ${
                  collegeLinks.some(l => l.path === location.pathname) ? 'text-[#FF5733]' : 'text-slate-700'
                }`}
              >
                Top Programs
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-slate-100 py-4 overflow-hidden"
                  >
                    {collegeLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="block px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-[#15803d] transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              key="Contact"
              to="/contact"
              className={`text-sm font-semibold hover:text-[#FF5733] transition-colors ${
                location.pathname === '/contact' ? 'text-[#FF5733]' : 'text-slate-700'
              }`}
            >
              Contact Us
            </Link>

            <Link
              to="/contact"
              className="bg-[#15803d] text-white px-6 py-2.5 rounded-md font-bold hover:bg-[#166534] transition-all shadow-md uppercase text-sm tracking-wider"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#15803d]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100"
          >
            <div className="px-4 pt-4 pb-8 space-y-1">
              {mainLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-3 rounded-md text-base font-bold ${
                    location.pathname === link.path ? 'bg-slate-50 text-[#FF5733]' : 'text-slate-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-slate-100 mt-4">
                <span className="px-3 text-xs font-black uppercase tracking-widest text-slate-400 mb-2 block">Our Programs</span>
                {collegeLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-3 py-3 rounded-md text-base font-bold ${
                      location.pathname === link.path ? 'bg-slate-50 text-[#FF5733]' : 'text-slate-700'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/contact"
                className={`block px-3 py-3 rounded-md text-base font-bold ${
                  location.pathname === '/contact' ? 'bg-slate-50 text-[#FF5733]' : 'text-slate-700'
                }`}
              >
                Contact Us
              </Link>

              <Link
                to="/contact"
                className="block mt-6 text-center bg-[#15803d] text-white px-5 py-4 rounded-md font-bold uppercase tracking-widest"
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

