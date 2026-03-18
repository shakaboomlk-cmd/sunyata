import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const tabs = [
  "The Mind Of Synaesthesia",
  "Synaesthesia and the Brain",
  "Synaesthesia and the Mind",
  "Synaesthesia and the Environment",
  "Synaesthesia and the Body",
  "Synaesthesia and the Future"
];

const contentMap = {
  "The Mind Of Synaesthesia": "Synaesthesia is a perceptual phenomenon where stimulation of one sensory pathway leads to involuntary experiences in another. It reveals the interconnectedness of our senses.",
  "Synaesthesia and the Brain": "Neuroimaging shows increased connectivity between sensory cortices in synaesthetes. The brain's cross-wiring gives rise to unique perceptual blends.",
  "Synaesthesia and the Mind": "Synaesthesia challenges our understanding of consciousness. It suggests that perception is not modular but a fluid, integrative process.",
  "Synaesthesia and the Environment": "Environmental factors may influence synaesthetic experiences. Some synaesthetes report that their perceptions change with surroundings.",
  "Synaesthesia and the Body": "Embodied cognition plays a role. For example, some feel sounds as tactile sensations on their skin, linking auditory and somatosensory systems.",
  "Synaesthesia and the Future": "Research into synaesthesia could lead to new therapies for sensory processing disorders and inspire brain-computer interfaces."
};

export default function TabSection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === tab
                ? 'bg-brand-accent text-brand-dark shadow-lg'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="glass-card p-8 rounded-2xl text-center max-w-2xl mx-auto"
        >
          <p className="text-gray-200 text-lg leading-relaxed">{contentMap[activeTab]}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
