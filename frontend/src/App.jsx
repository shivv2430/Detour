import { useState } from 'react'
import LandingPage from './components/LandingPage'
import ChatInterface from './components/ChatInterface'
import GrassMode from './components/GrassMode'
import FeedbackMode from './components/FeedbackMode'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  const [appState, setAppState] = useState('landing') // landing, chat, grass, feedback
  const [mission, setMission] = useState(null)

  const handleStartChat = () => setAppState('chat')
  
  const handleGoOutside = (assignedMission) => {
    setMission(assignedMission)
    setAppState('grass')
  }
  
  const handleReturn = () => setAppState('feedback')
  
  const handleReset = () => {
    setMission(null)
    setAppState('landing')
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-earth">
      {appState !== 'grass' && <Navbar onReset={handleReset} />}
      {/* Soft ambient background */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-grass/40 rounded-full blur-[100px] animate-drift pointer-events-none"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-grass/30 rounded-full blur-[120px] animate-drift pointer-events-none" style={{ animationDelay: '2s' }}></div>

      <main className="flex-grow flex flex-col relative z-10">
        {appState === 'landing' && (
          <LandingPage 
            onStart={handleStartChat} 
            onSurprise={() => handleGoOutside({
              title: "The Unplanned Minute",
              duration: 30,
              steps: [
                "Go outside and find the most interesting tree within walking distance.", 
                "Don't take a picture.", 
                "Just look at it for a minute."
              ],
              screenRule: "No scrolling"
            })} 
          />
        )}
        {appState === 'chat' && <ChatInterface onComplete={handleGoOutside} />}
        {appState === 'grass' && <GrassMode mission={mission} onReturn={handleReturn} />}
        {appState === 'feedback' && <FeedbackMode onComplete={handleReset} />}
      </main>

      {appState !== 'grass' && <Footer />}
    </div>
  )
}

export default App
