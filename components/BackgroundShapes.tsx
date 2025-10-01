export default function BackgroundShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-30 blur-xl"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-30 blur-xl"></div>
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full opacity-20 blur-xl"></div>
      
      {/* Wireframe-like shapes */}
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-purple-200 opacity-20 transform rotate-45"></div>
      <div className="absolute bottom-1/3 left-1/3 w-12 h-12 border-2 border-blue-200 opacity-20 transform -rotate-12"></div>
      
      {/* Floating dots */}
      <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-pink-300 rounded-full opacity-40"></div>
      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-300 rounded-full opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-green-300 rounded-full opacity-40"></div>
    </div>
  )
} 