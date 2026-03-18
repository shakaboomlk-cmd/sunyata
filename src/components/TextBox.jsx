import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function TextBox({ title, text }) {
  return (
    <motion.div variants={fadeInUp} className="glass-card p-8 rounded-2xl h-full">
      <h4 className="text-2xl font-serif font-bold text-brand-accent mb-4">{title}</h4>
      <p className="text-gray-300 leading-relaxed">{text}</p>
    </motion.div>
  );
}
