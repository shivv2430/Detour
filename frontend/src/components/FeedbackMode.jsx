import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowUp } from 'lucide-react'

export default function FeedbackMode({ onComplete }) {
  const [step, setStep] = useState(1)
  const [feeling, setFeeling] = useState('')
  const [reflection, setReflection] = useState('')
  const [aiResponse, setAiResponse] = useState('')

  const handleFeeling = (val) => {
    setFeeling(val)
    setStep(2)
  }

  const handleReflectionSubmit = (e) => {
    e.preventDefault()
    if (!reflection.trim()) return
    
    // Simple mock reflection response
    setAiResponse("Funny how the neighborhood doesn't change, but sometimes we finally start looking at it.")
    setStep(3)
  }

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center mt-12">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full"
          >
            <h2 className="font-serif text-5xl text-forest mb-4">Welcome back.</h2>
            <p className="text-xl text-forest/70 mb-12">Did it help?</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { emoji: '😌', label: 'Better' },
                { emoji: '🙂', label: 'A little' },
                { emoji: '😐', label: 'Same' },
                { emoji: '😵', label: 'Somehow worse' }
              ].map(opt => (
                <button
                  key={opt.label}
                  onClick={() => handleFeeling(opt.label)}
                  className="bg-white/60 border border-forest/10 hover:border-forest/30 px-6 py-4 rounded-2xl flex flex-col items-center gap-2 transition-all hover:scale-105"
                >
                  <span className="text-4xl">{opt.emoji}</span>
                  <span className="text-forest font-medium">{opt.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-lg"
          >
            <h2 className="font-serif text-4xl text-forest mb-8">What did you notice?</h2>
            
            <form onSubmit={handleReflectionSubmit} className="relative w-full">
              <input
                type="text"
                value={reflection}
                onChange={(e) => setReflection(e.target.value)}
                placeholder="I noticed..."
                autoFocus
                className="w-full bg-white/60 border border-forest/20 rounded-xl py-4 pl-6 pr-14 text-lg text-forest focus:outline-none focus:ring-2 focus:ring-grass shadow-sm"
              />
              <button 
                type="submit"
                disabled={!reflection.trim()}
                className="absolute right-2 top-2 bottom-2 aspect-square bg-forest text-earth rounded-lg flex items-center justify-center hover:bg-forest/90 disabled:opacity-50 transition-colors"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </form>
            
            <button 
              onClick={() => setStep(3)}
              className="mt-6 text-forest/40 hover:text-forest transition-colors text-sm"
            >
              Skip
            </button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-lg"
          >
            {aiResponse && (
              <div className="bg-white/50 text-forest border border-forest/10 p-6 rounded-2xl shadow-sm text-left mb-12">
                <p className="text-lg leading-relaxed">{aiResponse}</p>
              </div>
            )}
            
            <button 
              onClick={onComplete}
              className="group flex items-center justify-center gap-3 w-full bg-forest text-earth px-8 py-4 rounded-full text-lg font-medium hover:bg-forest/90 transition-all"
            >
              Finish
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
