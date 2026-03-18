import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function ArticleCard({ id, title, excerpt, category, color }) {
  const glowColor = color === 'blue' ? 'bg-blue-500/10 group-hover:bg-blue-500/20' : 'bg-brand-accent/10 group-hover:bg-brand-accent/20';
  const badgeColor = color === 'blue' ? 'bg-blue-500/20 text-blue-400' : 'bg-brand-accent/20 text-brand-accent';
  const textColor = color === 'blue' ? 'group-hover:text-blue-400' : 'group-hover:text-brand-accent';

  return (
    <motion.div variants={fadeInUp} className="glass-card rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-500 group cursor-pointer relative overflow-hidden">
      <Link to={`/article/${id}`} className="block h-full w-full">
        <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl transition-all duration-500 ${glowColor}`}></div>
        
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-6 ${badgeColor}`}>
          {category}
        </span>
        
        <h4 className={`text-3xl font-serif font-bold text-white mb-4 transition-colors duration-300 ${textColor}`}>
          {title}
        </h4>
        
        <p className="text-gray-400 leading-relaxed mb-8 font-light line-clamp-3">
          {excerpt}
        </p>
        
        <div className={`flex items-center font-medium text-sm gap-2 group-hover:gap-4 transition-all duration-300 ${color === 'blue' ? 'text-blue-400' : 'text-brand-accent'}`}>
          Read More <i className="fas fa-arrow-right"></i>
        </div>
      </Link>
    </motion.div>
  );
}