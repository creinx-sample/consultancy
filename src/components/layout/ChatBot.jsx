import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, ChevronRight } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', content: "Hi! I'm your TNAEC Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  const faqs = [
    { q: "MBBS in Russia Fees?", a: "Fees are flexible and vary by university. Please connect with our Senior Counselor for a personalized fee structure and tailored payment options." },
    { q: "TN Engineering Admission?", a: "We provide expert guidance for TNEA counseling and direct management seats in Top 50 NIRF ranked private universities in Tamil Nadu." },
    { q: "Georgia for Indian Students?", a: "Georgia is exceptionally safe and offers world-class medical education at universities like SEU and Caucasus International, recognized by WHO and NMC." },
    { q: "Documents needed for Russia?", a: "You primarily need your 10th & 12th Marksheets, Passport, NEET Scorecard, and 10 Photographs. We handle all translation and visa processes!" },
    { q: "How to contact Counselor?", a: "You can reach us at +91 95973 71949 or click the 'Talk to Human Expert' button below to message us on WhatsApp!" }
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (messageContent) => {
    if (!messageContent.trim()) return;

    const newMessages = [...messages, { role: 'user', content: messageContent }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking
    await new Promise(resolve => setTimeout(resolve, 800));

    let botResponse = "I'm the TNAEC Intelligence Assistant! I couldn't find specific details on that. Would you like to connect with our Senior Counselor directly?";
    
    const lowerMsg = messageContent.toLowerCase();
    
    if (lowerMsg.includes('fee') || lowerMsg.includes('cost') || lowerMsg.includes('price')) {
      botResponse = "Fees and scholarship options vary significantly based on your academic profile and choice of institution. Please contact our consultant at +91 95973 71949 for the exact fee details and tailored financial plans.";
    } else if (lowerMsg.includes('russia') || lowerMsg.includes('mipt') || lowerMsg.includes('mai')) {
      botResponse = "Russia is a global hub for Engineering (MIPT/MAI) and Medicine. Government universities offer high-end research labs and global recognition. For current fee details, please connect with our expert team.";
    } else if (lowerMsg.includes('georgia')) {
      botResponse = "Georgia is a top pick for European-style medical education. Universities like SEU offer modern clinical training and safe campuses. Contact us for the latest admission and fee updates.";
    } else if (lowerMsg.includes('tn') || lowerMsg.includes('tamil nadu') || lowerMsg.includes('engineering')) {
      botResponse = "We help students secure seats in premier TN private universities. For management seat fees and counseling guidance, please speak with our consultant directly.";
    } else if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
      botResponse = "Hello! I'm the TNAEC Intelligence Assistant. Are you looking for MBBS abroad or Engineering in Tamil Nadu today?";
    } else if (lowerMsg.includes('contact') || lowerMsg.includes('number') || lowerMsg.includes('office')) {
      botResponse = "You can reach our expert team at +91 95973 71949 or visit our headquarters in Karur for a detailed counseling session.";
    }

    setMessages([...newMessages, { role: 'bot', content: botResponse }]);
    setIsTyping(false);
  };

  const connectToWhatsApp = () => {
    const msg = encodeURIComponent("Hi, I was talking to the TNAEC Assistant and I need more details about admissions.");
    window.open(`https://wa.me/919597371949?text=${msg}`, '_blank');
  };

  return (
    <>
      {/* Floating Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 bg-primary text-secondary p-4 rounded-full shadow-[0_15px_45px_rgba(30,27,75,0.4)] border-2 border-secondary hover:scale-110 active:scale-95 transition-all group overflow-hidden"
      >
        <div className="absolute inset-0 bg-secondary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        <MessageSquare className="w-8 h-8 relative z-10" />
        <span className="absolute right-full mr-4 bg-primary text-secondary text-[10px] py-2 px-6 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap font-black border border-secondary/30 uppercase tracking-[0.2em] translate-x-4 group-hover:translate-x-0">
          Intelligent Counselor
        </span>
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-50 w-[400px] h-[650px] bg-white rounded-[3.5rem] shadow-[0_40px_120px_rgba(30,27,75,0.5)] border border-slate-100 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary p-8 text-white flex justify-between items-center relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full -mr-16 -mt-16 blur-2xl" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 rotate-3 shadow-lg group">
                  <Bot className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="font-black text-[12px] uppercase tracking-[0.25em] text-secondary">TNAEC Support</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
                    <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.1em]">Expert Intelligence Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:rotate-90 transition-transform p-3 bg-white/5 rounded-2xl hover:bg-white/10"
              >
                <X className="w-6 h-6 text-white/70" />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-8 space-y-6 bg-slate-50/30 scroll-smooth"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] p-6 rounded-[2.5rem] text-[13px] font-bold leading-relaxed ${
                    msg.role === 'bot' 
                      ? 'bg-white shadow-xl border border-slate-100 text-primary rounded-tl-none' 
                      : 'bg-primary text-white rounded-tr-none shadow-2xl shadow-indigo-100/50'
                  }`}>
                    {msg.content}
                    {msg.role === 'bot' && msg.content.includes('WhatsApp') && (
                      <button 
                        onClick={connectToWhatsApp}
                        className="mt-4 w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition-colors uppercase text-[10px] font-black"
                      >
                        Talk to Human Expert
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-6 rounded-[2.5rem] rounded-tl-none shadow-md flex gap-2 border border-slate-50">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-2 h-2 bg-secondary rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" />
                  </div>
                </div>
              )}
            </div>

            {/* Quick Suggestions */}
            <div className="p-6 bg-white border-t border-slate-100 overflow-x-auto whitespace-nowrap no-scrollbar">
              <div className="flex gap-3">
                {faqs.map((faq, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(faq.q)}
                    className="px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] text-[11px] font-black uppercase tracking-wider text-slate-600 hover:bg-primary hover:text-secondary hover:border-secondary transition-all flex items-center gap-2 shadow-sm"
                  >
                    {faq.q}
                    <ChevronRight className="w-4 h-4 text-secondary" />
                  </button>
                ))}
              </div>
            </div>

            {/* Input Footer */}
            <div className="p-8 bg-white border-t border-slate-100">
              <div className="relative group">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
                  placeholder="Type your inquiry..."
                  className="w-full pl-6 pr-16 py-5 bg-slate-50 rounded-2xl border border-slate-100 focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all font-black text-sm text-primary placeholder:text-slate-300 shadow-inner"
                />
                <button
                  onClick={() => handleSend(input)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary text-secondary rounded-xl flex items-center justify-center hover:bg-secondary hover:text-primary transition-all shadow-lg active:scale-95"
                >
                  <Send className="w-6 h-6" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
