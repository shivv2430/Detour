export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 border-t border-forest/10 flex flex-col md:flex-row items-center justify-between text-forest/60 text-sm z-10 bg-earth/50 backdrop-blur-sm">
      <div className="mb-4 md:mb-0">
        <strong className="font-serif text-lg text-forest block">Detour</strong>
        <span>An AI that helps you spend less time with AI.</span>
      </div>
      
      <div className="flex gap-6 items-center">
        <a href="#" className="hover:text-forest transition-colors">About</a>
        <a href="#" className="hover:text-forest transition-colors">How it works</a>
        <a href="#" className="hover:text-forest transition-colors">GitHub</a>
        <span className="bg-grass/50 px-3 py-1 rounded-full text-forest text-xs font-medium border border-forest/10">
          Built for Hacktoberfest 🌱
        </span>
      </div>
    </footer>
  )
}
