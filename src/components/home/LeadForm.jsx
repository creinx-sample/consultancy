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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -mr-64 -mt-64" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="w-full lg:w-1/2 text-center lg:text-left pt-2 lg:pt-8">
            <h2 className="text-secondary font-black tracking-[0.2em] text-sm uppercase mb-4">Book Free Counseling</h2>
            <h3 className="text-4xl md:text-7xl font-black text-primary mb-8 leading-tight font-serif uppercase tracking-tighter">
              Fill The <br /><span className="text-secondary">Enrollment</span> Form
            </h3>
            <p className="text-slate-500 text-lg md:text-xl mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Join thousands of students who have entrusted their dreams to us. Fill out your details below and our expert counselors will analyze your profile and category to suggest the best institutions.
            </p>
            
            <div className="bg-slate-50 p-8 rounded-[2rem] border-l-[12px] border-primary shadow-2xl shadow-indigo-100 max-w-md mx-auto lg:mx-0 mb-8 lg:mb-0 relative group overflow-hidden transition-all hover:bg-white">
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150" />
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg rotate-3 group-hover:rotate-0 transition-transform">
                  <User className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-left">
                  <p className="text-primary font-black text-2xl uppercase tracking-tighter font-serif">Expert Analysis</p>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Profile Evaluated by Top Counselors</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl shadow-indigo-100 border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary" />
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2 px-1">Full Name</label>
                  <input 
                    required 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-5 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all bg-slate-50 font-bold text-slate-700 placeholder:text-slate-300 shadow-inner"
                    placeholder="Enter student name"
                  />
                </div>

                <div className="flex gap-6">
                  <div className="w-1/2 group">
                    <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2 px-1">Age</label>
                    <input 
                      required 
                      type="number" 
                      name="age" 
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full px-6 py-5 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-secondary transition-all bg-slate-50 font-bold text-slate-700 shadow-inner"
                      placeholder="e.g. 18"
                    />
                  </div>
                  <div className="w-1/2 group">
                    <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2 px-1">Gender</label>
                    <select 
                      required 
                      name="gender" 
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-6 py-5 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-secondary transition-all bg-slate-50 font-bold text-slate-700 shadow-inner cursor-pointer"
                    >
                      <option value="" disabled>Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-1/2 group">
                    <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2 px-1">10th Percentage</label>
                    <input 
                      required 
                      type="text" 
                      name="tenthPercent" 
                      value={formData.tenthPercent}
                      onChange={handleChange}
                      className="w-full px-6 py-5 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-secondary transition-all bg-slate-50 font-bold text-slate-700 shadow-inner"
                      placeholder="e.g. 95%"
                    />
                  </div>
                  <div className="w-1/2 group">
                    <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2 px-1">12th Percentage</label>
                    <input 
                      required 
                      type="text" 
                      name="twelfthPercent" 
                      value={formData.twelfthPercent}
                      onChange={handleChange}
                      className="w-full px-6 py-5 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-secondary transition-all bg-slate-50 font-bold text-slate-700 shadow-inner"
                      placeholder="e.g. 98%"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2 px-1">Board of Education</label>
                  <select 
                    required 
                    name="board" 
                    value={formData.board}
                    onChange={handleChange}
                    className="w-full px-6 py-5 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-secondary transition-all bg-slate-50 font-bold text-slate-700 shadow-inner cursor-pointer"
                  >
                    <option value="" disabled>Select Board</option>
                    <option value="CBSE">CBSE</option>
                    <option value="ICSE">ICSE</option>
                    <option value="State Board">State Board</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-1/2 group">
                    <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2 px-1">Community / Caste</label>
                    <select 
                      required 
                      name="caste" 
                      value={formData.caste}
                      onChange={handleChange}
                      className="w-full px-6 py-5 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-secondary transition-all bg-slate-50 font-bold text-slate-700 shadow-inner cursor-pointer"
                    >
                      <option value="" disabled>Select Option</option>
                      <option value="General (OC)">General (OC)</option>
                      <option value="BC">BC</option>
                      <option value="MBC">MBC</option>
                      <option value="SC/ST">SC/ST</option>
                    </select>
                  </div>
                  <div className="w-full sm:w-1/2 group">
                    <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2 px-1">First Graduate?</label>
                    <select 
                      required 
                      name="firstGraduate" 
                      value={formData.firstGraduate}
                      onChange={handleChange}
                      className="w-full px-6 py-5 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-secondary transition-all bg-slate-50 font-bold text-slate-700 shadow-inner cursor-pointer"
                    >
                      <option value="" disabled>Select Option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2 px-1">Desired Stream / College</label>
                  <input 
                    required 
                    type="text" 
                    name="stream" 
                    value={formData.stream}
                    onChange={handleChange}
                    className="w-full px-6 py-5 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-secondary transition-all bg-slate-50 font-bold text-slate-700 shadow-inner"
                    placeholder="e.g. MBBS Abroad or Eng. in Chennai"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full flex items-center justify-center gap-3 bg-primary text-secondary border-2 border-secondary font-black py-6 rounded-2xl shadow-xl hover:bg-secondary hover:text-primary transition-all group mt-8 uppercase tracking-[0.2em] text-lg active:scale-95"
                >
                   Enroll Support Now
                  <Send className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
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
