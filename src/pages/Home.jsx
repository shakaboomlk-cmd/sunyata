import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import ContactSection from '../components/ContactSection';
import SearchBar from '../components/SearchBar';
import TabSection from '../components/TabSection';
import TextBox from '../components/TextBox';
import IconHeader from '../components/IconHeader';
import ContinueButton from '../components/ContinueButton';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Home() {
  useEffect(() => {
    if (window.location.hash === '#contact') {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const posts = [
    { id: 1, title: "The Emptiness Between Thoughts", excerpt: "We often mistake the thoughts in our mind for reality. But between every thought, there is a space of silence—that is where pure awareness exists. You are the sky, not the clouds.", category: "Daily Insight", color: "gold" },
    { id: 2, title: "The Present Moment", excerpt: "The past is just a memory. The future is just an expectation. Only this moment truly exists. Bring your full attention here to escape the illusion of time.", category: "Meditation", color: "blue" }
  ];

  return (
    <>
      <Navbar />
      
      {/* HERO SECTION with Synaesthesia branding */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20"
               style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=1600')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark/95"></div>

        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 text-center max-w-4xl mx-auto px-4 flex flex-col items-center mt-12">
          <IconHeader />
          <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight tracking-tight drop-shadow-2xl">
            The Mind Of <span className="text-gradient">Synaesthesia</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-300 text-lg md:text-xl max-w-2xl mt-4 leading-relaxed font-light">
            <span className="font-serif italic text-brand-accent mr-2">Where senses intertwine.</span> <br className="md:hidden" />
            Explore the cross-sensory integration that shapes perception.
          </motion.p>
          <SearchBar />
          <motion.div variants={fadeInUp} className="mt-16 text-gray-400 flex flex-col items-center gap-2 animate-bounce cursor-pointer" onClick={() => document.getElementById('about').scrollIntoView()}>
            <span className="text-xs uppercase tracking-widest">Scroll Down</span>
            <i className="fa-solid fa-chevron-down text-brand-accent"></i>
          </motion.div>
        </motion.div>
      </section>

      {/* TABBED CONTENT SECTION */}
      <section id="about" className="relative py-24 bg-brand-dark/95">
        <div className="max-w-6xl mx-auto px-6">
          <TabSection />
        </div>
      </section>

      {/* TEXT BOXES SECTION */}
      <section className="relative py-24" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?w=1600')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-3xl font-serif text-center text-white mb-12">
            Understanding Synaesthesia
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            <TextBox
              title="What is Synaesthesia?"
              text="Synaesthesia is a unique perceptual experience that involves the blending of sensory modalities, such as sight, sound, touch, taste, and smell. It is not a single condition but rather a spectrum of experiences that can vary greatly from person to person. Synaesthesia is often described as a cross-sensory integration where different senses interact and influence each other."
            />
            <TextBox
              title="Neurological Basis"
              text="Synaesthesia is believed to be caused by abnormal brain activity in certain areas of the brain. These areas are responsible for processing sensory information and integrating it with other sensory inputs. Neuroimaging studies show increased connectivity between sensory regions in synaesthetes."
            />
          </div>
          <div className="flex justify-center mt-12">
            <ContinueButton />
          </div>
        </div>
      </section>

      {/* SUNYATA PHILOSOPHY SECTION (blended) */}
      <section className="relative py-40" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507652313519-d4e917fbe7b6?w=1600')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-brand-dark/90"></div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.i variants={fadeInUp} className="fa-solid fa-yin-yang text-4xl text-brand-accent mb-6 opacity-80"></motion.i>
          <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold mb-8 text-white">Our Philosophy</motion.h3>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 leading-loose font-light">
            <span className="text-brand-accent font-serif italic text-3xl">"</span>
            Every breath is a new beginning.
            <span className="text-brand-accent font-serif italic text-3xl">"</span>
            <br/><br/>
            Escaping the noise of the world, we guide you to discover the depths of your own mind. This is not just a page, but a sanctuary for your spiritual awakening.
          </motion.p>
        </motion.div>
      </section>

      {/* TEACHINGS SECTION */}
      <section id="teachings" className="relative py-40 bg-brand-dark">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <span className="text-brand-accent tracking-widest uppercase text-sm font-bold mb-2 block">Insights</span>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">Latest Teachings</h3>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
            {posts.map(post => (
              <ArticleCard key={post.id} {...post} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONNECT SECTION */}
      <ContactSection />

      <Footer />
    </>
  );
}
