import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Award, 
  BookOpen, 
  Users, 
  Building2, 
  CheckCircle2, 
  ArrowLeft, 
  Star,
  Globe,
  Camera,
  GraduationCap
} from 'lucide-react';
import { tnUniversitiesData, countriesData } from '../data/collegesData';
import LeadForm from '../components/home/LeadForm';

const CollegeDetail = () => {
  const { collegeId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [collegeId]);

  const scrollToForm = () => {
    const formElement = document.getElementById('admission-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Find college in TN data or Countries data
  let college = null;
  
  // Search in TN Universities Data
  tnUniversitiesData.forEach(cat => {
    const found = cat.colleges.find(c => c.id === collegeId);
    if (found) college = found;
  });

  // Search in Russia/Countries data if not found
  if (!college) {
    countriesData.forEach(country => {
      const found = country.medicalUniversities.find(u => typeof u === 'object' && u.id === collegeId);
      if (found) college = found;
    });
  }

  if (!college) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h2 className="text-3xl font-bold text-slate-800">College Not Found</h2>
        <Link to="/" className="text-[#15803d] mt-4 inline-block font-bold underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 pt-10">
        <Link 
          to={-1} 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-[#15803d] font-bold transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Listing
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-2 text-[#FF5733] font-bold text-sm mb-4 uppercase tracking-[0.2em]">
                <Award className="w-5 h-5" />
                Premier Institution
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 font-serif leading-tight">
                {college.name}
              </h1>
              <div className="flex items-center gap-3 text-slate-600 mb-8 bg-slate-50 p-4 rounded-2xl w-fit">
                <MapPin className="w-5 h-5 text-[#15803d]" />
                <span className="font-bold text-lg">{college.location || "International Campus"}</span>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-10">
                {college.highlights?.slice(0, 3).map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-2 rounded-xl text-sm font-bold border border-emerald-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    {highlight}
                  </div>
                ))}
              </div>

              <motion.button 
                onClick={scrollToForm}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#15803d] text-white px-10 py-5 rounded-full font-black text-lg shadow-xl shadow-emerald-200 uppercase tracking-widest"
              >
                Apply for Admission
              </motion.button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src={college.images?.[0] || 'https://images.unsplash.com/photo-1562774053-701939374585?q=80'} 
                  alt={college.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#FF5733]/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#15803d]/10 rounded-full blur-3xl" />
              
              {/* Floating Batch */}
              {college.images && college.images.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                  transition={{ 
                    opacity: { duration: 0.5 },
                    scale: { duration: 0.5 },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" } 
                  }}
                  className="absolute -bottom-6 right-10 bg-white shadow-2xl z-20 overflow-hidden rounded-2xl border-4 border-white"
                >
                  <img src={college.images[0]} alt="Campus View" className="w-48 h-32 object-cover" />
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Info */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* About Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-[#15803d]" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 font-serif underline decoration-[#FF5733] decoration-4 underline-offset-8">
                    About Institution
                  </h2>
                </div>
                <p className="text-slate-600 text-xl leading-relaxed font-medium">
                  {college.about || "This prestigious institution is renowned for its academic excellence and contribution to global research. With a rich history of nurturing talent, it provides a perfect environment for students to achieve their academic goals."}
                </p>
              </motion.div>

              {/* Infrastructure Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-[#15803d]" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 font-serif underline decoration-[#FF5733] decoration-4 underline-offset-8">
                    World-Class Infrastructure
                  </h2>
                </div>
                <p className="text-slate-600 text-xl leading-relaxed font-medium mb-10">
                  {college.infrastructure || "The campus features state-of-the-art laboratories, modern smart classrooms, and extensive research centers. Every facility is designed to support both academic rigor and creative innovation."}
                </p>
                
                {/* Secondary Images Gallery (If Valid Additional Real Images Exist) */}
                {college.images && college.images.length > 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {college.images.slice(1).map((img, i) => (
                      <div key={i} className="aspect-video rounded-3xl overflow-hidden shadow-lg border-4 border-white group">
                        <img 
                          src={img} 
                          alt={`${college.name} Campus Facility`} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Courses Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-[#15803d]" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 font-serif underline decoration-[#FF5733] decoration-4 underline-offset-8">
                    Popular Courses
                  </h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {(college.courses || ["Engineering", "Medicine", "Arts", "Science", "Law", "Management"]).map((course, i) => (
                    <div 
                      key={i}
                      className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100 text-slate-700 font-bold hover:border-[#15803d] hover:text-[#15803d] transition-all cursor-default"
                    >
                      {course}
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* Sidebar / Highlights */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                
                {/* Highlights Card */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100"
                >
                  <h3 className="text-2xl font-black text-slate-800 mb-8 font-serif leading-tight">
                    Key Institutional <span className="text-[#15803d]">Highlights</span>
                  </h3>
                  <div className="space-y-6">
                    {(college.highlights || ["Accredited by NAAC", "Top Placement Records", "Global Exchange Programs", "Advanced Research Labs"]).map((h, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        </div>
                        <span className="text-slate-600 font-bold leading-tight">{h}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10 pt-10 border-t border-slate-100">
                    <button 
                      onClick={scrollToForm}
                      className="w-full bg-[#FF5733] text-white py-5 rounded-3xl font-black text-lg shadow-xl shadow-orange-100 hover:bg-[#e64a19] transition-all uppercase tracking-widest"
                    >
                      Request Prospectus
                    </button>
                  </div>
                </motion.div>

                {/* Info Note */}
                <div className="bg-[#15803d] p-8 rounded-[2.5rem] text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold mb-4">Direct Admission Support</h4>
                    <p className="text-white/80 font-medium mb-6">
                      Get guaranteed guidance for the entire admission process from document collection to scholarship assistance.
                    </p>
                    <Link to="/contact" className="font-black underline decoration-[#FF5733] decoration-2 underline-offset-4">
                      Chat with Counselor
                    </Link>
                  </div>
                  {/* Decorative */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-10 -mt-10" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="admission-form" className="py-20">
        <LeadForm />
      </section>

    </div>
  );
};

export default CollegeDetail;
