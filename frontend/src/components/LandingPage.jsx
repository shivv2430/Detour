import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function LandingPage({ onStart, onSurprise }) {
  return (
    <div className="flex-grow flex flex-col items-center justify-center px-4 w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center w-full"
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight text-forest mb-6 leading-[0.9]">
          Got time? <br />
          <span className="italic">Go somewhere.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-forest/70 font-sans max-w-lg mx-auto mb-12">
          Tell me how you're feeling. <br />
          I'll figure out what you should do outside.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onStart}
            className="group flex items-center gap-3 bg-forest text-earth px-10 py-5 rounded-full text-xl font-medium shadow-2xl hover:shadow-forest/50 hover:bg-forest/90 transition-all hover:-translate-y-1 active:scale-95"
          >
            Let's figure it out
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={onSurprise}
            className="group flex items-center gap-2 bg-white/40 backdrop-blur-md border border-white/50 shadow-xl text-forest px-10 py-5 rounded-full text-xl font-medium hover:bg-white/60 transition-all hover:-translate-y-1 active:scale-95"
          >
            <Sparkles className="w-5 h-5" />
            Surprise me
          </button>
        </div>
      </motion.div>

      {/* Marquee effect for aesthetic */}
      <div className="absolute bottom-10 left-0 w-full overflow-hidden opacity-10 pointer-events-none">
        <div className="text-marquee font-serif text-8xl">
          DETOUR &middot; DETOUR &middot; DETOUR &middot; DETOUR &middot; DETOUR &middot; DETOUR &middot;
        </div>
      </div>
    </div>
  )
}
