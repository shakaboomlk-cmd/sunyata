import { motion } from 'framer-motion';
import { useState } from 'react';

const suggestions = ["Synaesthesia", "Synaesthetic experiences", "Synaesthetic perception"];

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="relative w-full max-w-md mt-8"
    >
      <div className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full overflow-hidden shadow-xl">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          placeholder="Search synaesthesia..."
          className="w-full px-6 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none"
        />
        <button className="px-6 py-4 bg-brand-accent text-brand-dark hover:bg-yellow-300 transition-colors">
          <i className="fas fa-search"></i>
        </button>
      </div>
      {showSuggestions && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-0 right-0 mt-2 bg-brand-dark/90 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden z-20"
        >
          {suggestions.map((item, i) => (
            <div
              key={i}
              className="px-6 py-3 hover:bg-brand-accent/10 cursor-pointer text-gray-300 hover:text-brand-accent transition"
              onMouseDown={() => setQuery(item)}
            >
              {item}
            </div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
