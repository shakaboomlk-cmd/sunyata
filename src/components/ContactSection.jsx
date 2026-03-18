import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactSection() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for connecting! We will be in touch soon.');
  };

  return (
    <section id="contact" className="relative py-40" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1499209974431-9c6d7b5b5e5e?w=1600')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"></div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl mx-auto px-6 text-center"
      >
        <i className="fa-solid fa-envelope text-4xl text-brand-accent mb-6 opacity-80"></i>
        <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-white">Connect with Us</h3>
        <p className="text-gray-300 mb-12 text-lg">Receive daily insights and teachings directly in your inbox.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition"
          />
          <textarea
            placeholder="Your Message (optional)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition"
          ></textarea>
          <button
            type="submit"
            className="px-10 py-4 bg-brand-accent text-brand-dark rounded-full font-bold text-sm hover:bg-yellow-300 hover:shadow-[0_0_15px_rgba(251,191,36,0.5)] transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
