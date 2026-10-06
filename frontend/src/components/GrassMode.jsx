import { motion } from 'framer-motion'

export default function GrassMode({ mission, onReturn }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="fixed inset-0 bg-[#e8e6e1] z-50 flex flex-col items-center justify-center px-6"
    >
      <div className="text-center max-w-md">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-6xl mb-8"
        >
          🌿
        </motion.div>
        {mission && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mb-12"
          >
            <h3 className="text-3xl font-serif text-forest mb-2">{mission.title}</h3>
            {mission.duration && <p className="text-forest/70 mb-6 font-medium text-lg">{mission.duration}</p>}
            <ul className="text-left space-y-4 text-forest/80 text-lg mb-8 bg-white/30 p-8 rounded-2xl shadow-sm backdrop-blur-sm border border-white/40">
              {mission.steps && mission.steps.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
        
        <p className="text-xl md:text-2xl text-forest/70 mb-16">
          Put your phone away.<br/>
          I'll be here when you get back.
        </p>
        
        <button 
          onClick={onReturn}
          className="text-forest/40 hover:text-forest border-b border-transparent hover:border-forest pb-1 transition-all"
        >
          I'm back.
        </button>
      </div>
    </motion.div>
  )
}
