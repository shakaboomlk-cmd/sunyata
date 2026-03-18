import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <>
      <footer className="bg-[#080b14] text-center py-12 border-t border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <img src="https://i.ibb.co/FqsxrPKd/Picsart-26-03-18-15-40-21-615.jpg" alt="Logo" className="w-12 h-12 rounded-full mx-auto mb-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500" />
          <p className="text-gray-500 font-light mb-2">© {new Date().getFullYear()} The Mind Of Sunyata.</p>
          <p className="text-brand-accent/50 font-serif italic">Stay aware. Stay awake.</p>
        </div>
      </footer>

      {/* Advanced Floating WhatsApp Button */}
      <motion.a 
        href="https://wa.me/YOUR_PHONE_NUMBER_HERE" 
        target="_blank" 
        rel="noopener noreferrer" 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="fixed bottom-8 right-8 z-50 group"
      >
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
        <div className="relative bg-gradient-to-tr from-green-600 to-green-400 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-[0_8px_30px_rgba(34,197,94,0.4)] transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300">
          <i className="fab fa-whatsapp"></i>
        </div>
      </motion.a>
    </>
  );
}