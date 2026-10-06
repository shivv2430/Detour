import { motion } from 'framer-motion'

export default function Navbar({ onReset }) {
  return (
    <nav className="w-full py-6 px-8 flex items-center justify-between z-20 absolute top-0 left-0 bg-transparent">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2 cursor-pointer"
        onClick={onReset}
      >
        <div className="text-2xl">🌿</div>
        <span className="font-serif text-2xl text-forest tracking-wide">Detour</span>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden md:flex items-center gap-8 text-forest/70 font-medium"
      >
        <button onClick={onReset} className="hover:text-forest transition-colors">Home</button>
        <a href="#" className="hover:text-forest transition-colors">Philosophy</a>
        <a href="#" className="hover:text-forest transition-colors">Open Source</a>
        <button className="bg-forest text-earth px-5 py-2 rounded-full hover:bg-forest/90 transition-all">
          Get Started
        </button>
      </motion.div>
    </nav>
  )
}
