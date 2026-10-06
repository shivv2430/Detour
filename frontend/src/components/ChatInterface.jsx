import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatInterface({ onComplete }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({ time: '', mood: '', preference: '' });

  const handleSelect = (field, value) => {
    const newAnswers = { ...answers, [field]: value };
    setAnswers(newAnswers);
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      generateMission(newAnswers);
    }
  };

  const generateMission = (finalAnswers) => {
    let title = "Rest & Reset";
    let category = "rest";
    let steps = [];
    
    const { mood, preference } = finalAnswers;
    
    // Logic based on preference and mood
    if (preference === 'Nature') {
      if (mood === 'Good' || mood === 'Mid') {
        title = "Outdoor Photography";
        steps = ["Go outside and take 5 photos of things you find beautiful.", "Focus on the lighting and textures.", "Don't post them anywhere, just keep them."];
      } else {
        title = "A Quiet Walk";
        steps = ["Take a slow, aimless walk outside.", "Breathe in the fresh air.", "Notice the sky and the trees without rushing."];
      }
    } else if (preference === 'Self (Alone)') {
      if (mood === 'Good') {
        title = "Creative Focus";
        steps = ["Sit down and try writing a short story.", "Or pick up that book you've been meaning to read.", "Immerse yourself completely in the world."];
      } else if (mood === 'Mid') {
        title = "Productive Reset";
        steps = ["Do some home cleaning or cooking.", "Put on your favorite instrumental music.", "Focus on the physical task at hand."];
      } else {
        title = "Deep Self Care";
        steps = ["Take time for self care or just sleep.", "Turn off all notifications.", "Give your body the rest it is asking for."];
      }
    } else if (preference === 'Company') {
      if (mood === 'Good' || mood === 'Mid') {
        title = "Active Connection";
        steps = ["Call a friend to go dancing or gyming together.", "Or just meet up for eating and talking.", "Focus entirely on the person in front of you."];
      } else {
        title = "Comforting Presence";
        steps = ["Ask someone to just sit with you or watch a movie together.", "You don't have to talk if you don't want to.", "Just share the space."];
      }
    } else {
      title = "Creative Output";
      steps = ["Try video making or writing something new.", "Express whatever you are feeling right now.", "Let your mind wander and create."];
    }

    onComplete({
      title,
      duration: finalAnswers.time,
      category,
      steps,
      screenRule: "Put the screen away and enjoy this time."
    });
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 mt-16 pb-24 z-10 w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div 
            key="step1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full text-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-12">How much time do you want to be offline?</h2>
            <div className="grid grid-cols-2 gap-4">
              {['15 mins', '30 mins', '1 hour', '2+ hours'].map(opt => (
                <button 
                  key={opt}
                  onClick={() => handleSelect('time', opt)}
                  className="bg-white/40 backdrop-blur-md border border-white/50 text-forest p-6 rounded-2xl text-xl font-medium hover:bg-white/60 hover:scale-105 active:scale-95 transition-all shadow-lg"
                >
                  {opt}
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
            className="w-full text-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-12">How are you feeling right now?</h2>
            <div className="grid grid-cols-2 gap-4">
              {['Good', 'Mid', 'Not well', 'Worst'].map(opt => (
                <button 
                  key={opt}
                  onClick={() => handleSelect('mood', opt)}
                  className="bg-white/40 backdrop-blur-md border border-white/50 text-forest p-6 rounded-2xl text-xl font-medium hover:bg-white/60 hover:scale-105 active:scale-95 transition-all shadow-lg"
                >
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div 
            key="step3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full text-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-12">What kind of vibe do you want?</h2>
            <div className="grid grid-cols-2 gap-4">
              {['Nature', 'Self (Alone)', 'Company', 'Something more...'].map(opt => (
                <button 
                  key={opt}
                  onClick={() => handleSelect('preference', opt)}
                  className="bg-white/40 backdrop-blur-md border border-white/50 text-forest p-6 rounded-2xl text-xl font-medium hover:bg-white/60 hover:scale-105 active:scale-95 transition-all shadow-lg"
                >
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
