import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ArticlePage() {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow max-w-3xl mx-auto px-6 w-full pt-32 pb-20">
        <Link to="/" className="text-brand-accent text-sm font-bold uppercase tracking-widest hover:text-white transition-colors mb-8 inline-flex items-center gap-2">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
        
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-6 bg-brand-accent/20 text-brand-accent inline-block">
            Daily Insight
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold leading-tight text-white drop-shadow-lg">
            The Emptiness Between Thoughts
          </h1>
          <div className="mt-6 flex items-center justify-center text-sm text-gray-400 font-medium space-x-4">
            <span>By Sunyata Editor</span>
            <span className="text-brand-accent">•</span>
            <span>March 19, 2026</span>
          </div>
        </motion.header>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full mb-12 overflow-hidden rounded-2xl shadow-2xl shadow-black/50 border border-white/5"
        >
          <img 
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop" 
            alt="Starry Night Meditation" 
            className="w-full aspect-video object-cover"
          />
        </motion.div>

        {/* Article Content with Tailwind Typography */}
        <motion.article 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="prose prose-lg prose-invert prose-yellow font-serif text-gray-300 leading-relaxed mx-auto"
        >
          <p className="lead text-xl text-gray-200">
            We often mistake the chaotic stream of thoughts in our mind for absolute reality. But if you observe closely, you are not the thoughts; you are the space in which they appear.
          </p>
          <p>
            Sit silently for just a few minutes. Try not to stop your thoughts, but simply watch them as if they were clouds passing through the sky. You will eventually notice a brief gap—a sliver of silence—before the next thought arrives.
          </p>
          <h2>The Silence is You</h2>
          <p>
            That silence is your true nature. It is unburdened by the past and completely free from the anxieties of the future. By learning to rest in that gap, you cultivate a profound sense of inner peace.
          </p>
          <blockquote>
            "You are the sky. Everything else is just the weather."
          </blockquote>
          <p>
            Take this practice into your daily life:
          </p>
          <ul>
            <li>Pause for one conscious breath before reacting to a stressful situation.</li>
            <li>Observe the sensation of the breath entering and leaving your body.</li>
            <li>Acknowledge your thoughts without judging them, and gently return to the present moment.</li>
          </ul>
        </motion.article>
      </main>

      <Footer />
    </div>
  );
}
