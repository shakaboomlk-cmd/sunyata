import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glass-nav fixed w-full z-50 top-0 px-6 py-4 shadow-xl text-white"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="https://images.unsplash.com/photo-1593697909689-bccb2f7f1a9b?w=150&h=150&fit=crop" alt="Logo" className="w-12 h-12 rounded-full object-cover border-2 border-brand-accent/50 group-hover:border-brand-accent transition-colors duration-300" />
          <h1 className="font-serif font-bold text-2xl tracking-wide group-hover:text-brand-accent transition-colors duration-300">The Mind Of Sunyata</h1>
        </Link>
        
        <div className="hidden md:flex items-center gap-10 font-medium text-sm tracking-widest uppercase">
          <Link to="/" className={`${isHome ? 'text-brand-accent border-b-2 border-brand-accent pb-1' : 'text-gray-300 hover:text-brand-accent'} transition-all duration-300`}>Home</Link>
          {isHome && (
            <>
              <a href="#about" className="text-gray-300 hover:text-brand-accent hover:-translate-y-0.5 transition-all duration-300">About</a>
              <a href="#teachings" className="text-gray-300 hover:text-brand-accent hover:-translate-y-0.5 transition-all duration-300">Teachings</a>
            </>
          )}
        </div>

        <div className="hidden md:block">
          {/* Connect button now links to #contact */}
          <Link 
            to="/#contact" 
            className="px-8 py-2.5 bg-brand-accent text-brand-dark rounded-full font-bold text-sm hover:bg-yellow-300 hover:shadow-[0_0_15px_rgba(251,191,36,0.5)] transform hover:-translate-y-0.5 transition-all duration-300 inline-block"
          >
            Connect
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}