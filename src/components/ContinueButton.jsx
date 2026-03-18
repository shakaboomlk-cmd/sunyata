import { motion } from 'framer-motion';

export default function ContinueButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative px-10 py-5 bg-gradient-to-r from-brand-accent to-yellow-400 text-brand-dark rounded-full font-bold text-lg shadow-2xl overflow-hidden"
    >
      <span className="relative z-10 flex items-center gap-3">
        Continue with IDx <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
      </span>
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
    </motion.button>
  );
}
