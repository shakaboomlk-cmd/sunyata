import { motion } from 'framer-motion';

export default function IconHeader() {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="relative mb-8"
    >
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-brand-accent/40 animate-spin-slow scale-110"></div>
      <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-brand-accent/20 to-brand-accent/5 flex items-center justify-center">
        <i className="fa-regular fa-face-smile text-5xl text-brand-accent"></i>
        <div className="absolute -inset-4 rounded-full border border-brand-accent/20 animate-pulse-slow"></div>
        <div className="absolute -inset-8 rounded-full border border-brand-accent/10 animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </motion.div>
  );
}
