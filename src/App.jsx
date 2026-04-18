import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import CollegeDetail from './pages/CollegeDetail';
import Founder from './pages/Founder';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50 relative">
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
            <Route path="/founder" element={<Founder />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
