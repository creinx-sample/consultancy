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
    { q: "What degrees are available in Russia?", a: "In Russia, popular programs include MBBS (General Medicine), Aerospace Engineering (at MAI), and Computer Science/IT." },
    { q: "How to apply for TN Universities?", a: "You can apply through our portal! Just click 'Enroll Now' or contact us. We help with TNEA counseling and direct management seats." },
    { q: "Is Georgia safe for medical students?", a: "Yes, Georgia is ranked as one of the safest countries in Europe for international students, with world-class medical universities like SEU and Caucasus International." },
    { q: "What are the eligibility criteria for MBBS abroad?", a: "Typically, you need 50% in PCB (Physics, Chemistry, Biology) in your 12th grade and a valid NEET qualification score." }
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
    await new Promise(resolve => setTimeout(resolve, 1000));

    let botResponse = "I'm sorry, I couldn't find information on that. Would you like to speak with a human counselor?";
    
    // Simple matching logic
    const lowerMsg = messageContent.toLowerCase();
    if (lowerMsg.includes('russia')) botResponse = "Study in Russia is highly affordable. Top universities like Kazan Federal and Moscow Aviation Institute (MAI) offer great programs for international students.";
    else if (lowerMsg.includes('georgia')) botResponse = "Georgia offers high-quality Medical programs. Universities like Tbilisi State and Caucasus International are fully recognized.";
    else if (lowerMsg.includes('fee') || lowerMsg.includes('cost')) botResponse = "Fees vary by country and program. Russian MBBS usually starts at 4-5 Lakhs per year. Contact us for a detailed fee structure!";
    else if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) botResponse = "Hello! Looking for admission details or university counseling?";
    else if (lowerMsg.includes('contact')) botResponse = "You can call us at +91 95973 71949 or visit our Salem office.";

    setMessages([...newMessages, { role: 'bot', content: botResponse }]);
    setIsTyping(false);
  };

  return (
    <>
      {/* Floating Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 bg-[var(--color-primary)] text-[var(--color-secondary)] p-4 rounded-full shadow-[0_10px_40px_rgba(30,27,75,0.3)] border-2 border-[var(--color-secondary)] hover:scale-110 active:scale-95 transition-all group overflow-hidden"
      >
        <div className="absolute inset-0 bg-[var(--color-secondary)]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        <MessageSquare className="w-7 h-7 relative z-10" />
        <span className="absolute right-full mr-4 bg-[var(--color-primary)] text-[var(--color-secondary)] text-[10px] py-2 px-6 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap font-black border border-[var(--color-secondary)]/30 uppercase tracking-[0.2em] translate-x-4 group-hover:translate-x-0">
          Ask AI Counselor
        </span>
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] h-[600px] bg-white rounded-[3rem] shadow-[0_30px_100px_rgba(30,27,75,0.4)] border border-slate-100 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-[var(--color-primary)] p-8 text-white flex justify-between items-center relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-secondary)]/10 rounded-full -mr-16 -mt-16 blur-2xl" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 rotate-3 shadow-lg">
                  <Bot className="w-7 h-7 text-[var(--color-secondary)]" />
                </div>
                <div>
                  <h3 className="font-black text-sm uppercase tracking-[0.2em] text-[var(--color-secondary)]">TNAEC Support</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
                    <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.1em]">Intelligence Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:rotate-90 transition-transform p-2 bg-white/5 rounded-xl hover:bg-white/10"
              >
                <X className="w-6 h-6 text-white/70" />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-8 space-y-6 bg-slate-50/30"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === 'bot' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] p-5 rounded-[2rem] text-sm font-bold leading-relaxed ${
                    msg.role === 'bot' 
                      ? 'bg-white shadow-sm border border-slate-100 text-[var(--color-primary)] rounded-tl-none' 
                      : 'bg-[var(--color-primary)] text-white rounded-tr-none shadow-xl shadow-indigo-100'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-5 rounded-[2rem] rounded-tl-none shadow-sm flex gap-1.5 border border-slate-50">
                    <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full animate-bounce" />
                  </div>
                </div>
              )}
            </div>

            {/* Quick Suggestions */}
            <div className="p-4 bg-white border-t border-slate-100 overflow-x-auto whitespace-nowrap scrollbar-hide">
              <div className="flex gap-2">
                {faqs.map((faq, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(faq.q)}
                    className="px-5 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-wider text-slate-500 hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] hover:border-[var(--color-primary)] transition-all flex items-center gap-2 shadow-sm"
                  >
                    {faq.q}
                    <ChevronRight className="w-3 h-3 text-[var(--color-secondary)]" />
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
                  className="w-full pl-6 pr-16 py-5 bg-slate-50 rounded-2xl border border-slate-100 focus:border-[var(--color-secondary)] focus:ring-4 focus:ring-[var(--color-secondary)]/10 transition-all font-black text-sm text-[var(--color-primary)] placeholder:text-slate-300 shadow-inner"
                />
                <button
                  onClick={() => handleSend(input)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-[var(--color-primary)] text-[var(--color-secondary)] rounded-xl flex items-center justify-center hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-all shadow-lg active:scale-95"
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
