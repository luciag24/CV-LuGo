'use client'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
      {/* Animated shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-300 rounded-full opacity-30 blur-xl animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full opacity-30 blur-xl animate-float"></div>
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-pink-100 to-purple-200 rounded-full opacity-20 blur-xl animate-pulse-slow"></div>
      
      {/* Wireframe-like shapes */}
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-purple-300 opacity-20 transform rotate-45 animate-rotate-slow"></div>
      <div className="absolute bottom-1/3 left-1/3 w-12 h-12 border-2 border-pink-300 opacity-20 transform -rotate-12 animate-pulse-slow"></div>
      
      {/* Floating dots */}
      <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-pink-400 rounded-full opacity-40 animate-float"></div>
      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-50 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-pink-300 rounded-full opacity-40 animate-float"></div>

      {/* Animated LuGo logo */}
      <div className="absolute top-10 right-10 w-16 h-16 opacity-30 animate-float">
        <img 
          src="/images/lugo.PNG" 
          alt="LuGo Logo" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  )
} 