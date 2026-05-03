import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Countries from './pages/Countries';
import Contact from './pages/Contact';
import TamilNaduColleges from './pages/TamilNaduColleges';
import RussiaColleges from './pages/RussiaColleges';
import GeorgiaColleges from './pages/GeorgiaColleges';
import { useState, useEffect } from 'react';
import ChatBot from './components/layout/ChatBot';
import CollegeDetail from './pages/CollegeDetail';
import Preloader from './components/layout/Preloader';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial load delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds for the book animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* Centered Preloader Portal */}
      <AnimatePresence mode="wait">
        {loading && <Preloader key="loader" />}
      </AnimatePresence>

      {/* Main Site Container */}
      <div className={`min-h-screen bg-slate-50 relative ${loading ? 'h-screen overflow-hidden' : ''}`}>
        <AnimatePresence>
          {!loading && (
            <motion.div
              key="site-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 1, 
                ease: "easeOut",
                delay: 0.4
              }}
              className="flex flex-col min-h-screen"
            >
              <Navbar />
              <main className="flex-grow w-full">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/countries" element={<Countries />} />
                  <Route path="/tn-colleges" element={<TamilNaduColleges />} />
                  <Route path="/russia-colleges" element={<RussiaColleges />} />
                  <Route path="/georgia-colleges" element={<GeorgiaColleges />} />
                  <Route path="/college/:collegeId" element={<CollegeDetail />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/founder" element={<Navigate to="/about" replace />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
              <Footer />
              <FloatingWhatsApp />
              <ChatBot />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
