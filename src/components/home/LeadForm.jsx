import { useState } from 'react';
import { Send, User } from 'lucide-react';
import { motion } from 'framer-motion';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    firstGraduate: '',
    stream: '',
    caste: '',
    tenthPercent: '',
    twelfthPercent: '',
    board: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `
*New Admission Enquiry*
----------------------
*Name*: ${formData.name}
*Age*: ${formData.age}
*Gender*: ${formData.gender}
*Caste*: ${formData.caste}
*10th %*: ${formData.tenthPercent}
*12th %*: ${formData.twelfthPercent}
*Board*: ${formData.board}
*First Graduate*: ${formData.firstGraduate}
*Stream/College Wanted*: ${formData.stream}
----------------------
`;

    const encodedMessage = encodeURIComponent(message.trim());
    const phoneNumber = "919597371949"; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="counseling">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-[#FF5733] font-bold tracking-widest text-sm uppercase mb-2">Book Free Counseling</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#15803d] mb-6 leading-tight">
              Fill The <span className="text-[#FF5733]">Enrollment Form</span>
            </h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Join thousands of students who have entrusted their dreams to us. Fill out your details below and our expert counselors will analyze your profile and category to suggest the best institutions.
            </p>
            
            <div className="bg-slate-50 p-8 rounded-2xl border-l-[12px] border-[#15803d] shadow-md max-w-md mx-auto lg:mx-0 mb-8 lg:mb-0">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-[#15803d]/10 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-[#15803d]" />
                </div>
                <div className="text-left font-serif">
                  <p className="text-[#15803d] font-extrabold text-2xl uppercase tracking-tighter">Expert Analysis</p>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Profile Evaluated by Top Counselors</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 relative"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-[#15803d] uppercase tracking-wider mb-2">Full Name</label>
                  <input 
                    required 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FF5733] focus:border-transparent transition-all bg-slate-50 font-medium"
                    placeholder="Enter your student name"
                  />
                </div>

                <div className="flex gap-5">
                  <div className="w-1/2">
                    <label className="block text-sm font-bold text-[#15803d] uppercase tracking-wider mb-2">Age</label>
                    <input 
                      required 
                      type="number" 
                      name="age" 
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FF5733] transition-all bg-slate-50 font-medium"
                      placeholder="E.g. 18"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm font-bold text-[#15803d] uppercase tracking-wider mb-2">Gender</label>
                    <select 
                      required 
                      name="gender" 
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FF5733] transition-all bg-slate-50 font-medium"
                    >
                      <option value="" disabled>Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-1/2">
                    <label className="block text-sm font-bold text-[#15803d] uppercase tracking-wider mb-2">10th Percentage</label>
                    <input 
                      required 
                      type="text" 
                      name="tenthPercent" 
                      value={formData.tenthPercent}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FF5733] transition-all bg-slate-50 font-medium"
                      placeholder="E.g. 95%"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm font-bold text-[#15803d] uppercase tracking-wider mb-2">12th Percentage</label>
                    <input 
                      required 
                      type="text" 
                      name="twelfthPercent" 
                      value={formData.twelfthPercent}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FF5733] transition-all bg-slate-50 font-medium"
                      placeholder="E.g. 98%"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#15803d] uppercase tracking-wider mb-2">Board of Education</label>
                  <select 
                    required 
                    name="board" 
                    value={formData.board}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FF5733] transition-all bg-slate-50 font-medium"
                  >
                    <option value="" disabled>Select Board</option>
                    <option value="CBSE">CBSE</option>
                    <option value="ICSE">ICSE</option>
                    <option value="State Board">State Board</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="w-full sm:w-1/2">
                    <label className="block text-sm font-bold text-[#15803d] uppercase tracking-wider mb-2">Community / Caste</label>
                    <select 
                      required 
                      name="caste" 
                      value={formData.caste}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FF5733] transition-all bg-slate-50 font-medium"
                    >
                      <option value="" disabled>Select Option</option>
                      <option value="General (OC)">General (OC)</option>
                      <option value="BC">BC</option>
                      <option value="MBC">MBC</option>
                      <option value="SC/ST">SC/ST</option>
                    </select>
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label className="block text-sm font-bold text-[#15803d] uppercase tracking-wider mb-2">First Graduate?</label>
                    <select 
                      required 
                      name="firstGraduate" 
                      value={formData.firstGraduate}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FF5733] transition-all bg-slate-50 font-medium"
                    >
                      <option value="" disabled>Select Option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#15803d] uppercase tracking-wider mb-2">Desired Stream / College</label>
                  <input 
                    required 
                    type="text" 
                    name="stream" 
                    value={formData.stream}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FF5733] transition-all bg-slate-50 font-medium"
                    placeholder="E.g. MBBS Abroad or Eng. in Chennai"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full flex items-center justify-center gap-2 bg-[#FF5733] text-white font-bold py-5 rounded-md shadow-lg hover:bg-[#E64A19] transition-all group mt-6 uppercase tracking-widest text-lg"
                >
                   Enroll Support Now
                  <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
