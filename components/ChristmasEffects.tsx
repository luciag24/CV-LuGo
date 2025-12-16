'use client'

import { useEffect, useState } from 'react'

export default function ChristmasEffects({ isDarkMode }: { isDarkMode: boolean }) {
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number }>>([])

  useEffect(() => {
    // Generate snowflakes - more visible
    const flakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      size: 8 + Math.random() * 12 // Larger and more visible
    }))
    setSnowflakes(flakes)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Snowflakes - darker color for visibility on light background */}
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute top-0"
          style={{
            left: `${flake.left}%`,
            animation: `snowfall ${flake.duration}s linear infinite`,
            animationDelay: `${flake.delay}s`,
            fontSize: `${flake.size}px`,
            color: isDarkMode ? '#ffffff' : '#4a90e2', // White for dark mode, blue for light mode
            opacity: isDarkMode ? 0.9 : 0.7,
            textShadow: isDarkMode 
              ? '0 0 3px rgba(255, 255, 255, 0.8)' 
              : '0 0 4px rgba(74, 144, 226, 0.6), 0 0 2px rgba(0, 0, 0, 0.3)',
          }}
        >
          ❄
        </div>
      ))}

      {/* Christmas Tree - top left, more space from edge */}
      <div className="absolute top-16 left-8 sm:top-20 sm:left-12 w-16 h-20 sm:w-20 sm:h-24 opacity-80 z-10">
        {/* Tree */}
        <div className="relative w-full h-full">
          {/* Tree layers - smaller */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] sm:border-l-[12px] border-r-[10px] sm:border-r-[12px] border-b-[15px] sm:border-b-[18px] border-l-transparent border-r-transparent border-b-green-600"></div>
          <div className="absolute bottom-[15px] sm:bottom-[18px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[12px] sm:border-l-[14px] border-r-[12px] sm:border-r-[14px] border-b-[18px] sm:border-b-[20px] border-l-transparent border-r-transparent border-b-green-700"></div>
          <div className="absolute bottom-[33px] sm:bottom-[38px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[14px] sm:border-l-[16px] border-r-[14px] sm:border-r-[16px] border-b-[20px] sm:border-b-[22px] border-l-transparent border-r-transparent border-b-green-600"></div>
          
          {/* Trunk */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-5 sm:w-5 sm:h-6 bg-amber-800"></div>
          
          {/* Star on top */}
          <div className="absolute top-[-6px] sm:top-[-8px] left-1/2 transform -translate-x-1/2 text-yellow-300 text-sm sm:text-base animate-pulse" style={{ filter: 'drop-shadow(0 0 6px rgba(255, 215, 0, 0.8))' }}>
            ⭐
          </div>
          
          {/* Ornaments - blinking lights - smaller */}
          <div className="absolute bottom-[10px] sm:bottom-[12px] left-1/2 transform -translate-x-1/2 -ml-4 sm:-ml-5 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-red-500 rounded-full animate-pulse" style={{ boxShadow: '0 0 6px rgba(255, 0, 0, 0.8)' }}></div>
          <div className="absolute bottom-[10px] sm:bottom-[12px] left-1/2 transform -translate-x-1/2 ml-3 sm:ml-4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s', boxShadow: '0 0 6px rgba(0, 0, 255, 0.8)' }}></div>
          <div className="absolute bottom-[25px] sm:bottom-[28px] left-1/2 transform -translate-x-1/2 -ml-5 sm:-ml-6 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '1s', boxShadow: '0 0 6px rgba(255, 255, 0, 0.8)' }}></div>
          <div className="absolute bottom-[25px] sm:bottom-[28px] left-1/2 transform -translate-x-1/2 ml-4 sm:ml-5 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s', boxShadow: '0 0 6px rgba(128, 0, 128, 0.8)' }}></div>
          <div className="absolute bottom-[42px] sm:bottom-[48px] left-1/2 transform -translate-x-1/2 -ml-6 sm:-ml-7 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s', boxShadow: '0 0 6px rgba(255, 192, 203, 0.8)' }}></div>
          <div className="absolute bottom-[42px] sm:bottom-[48px] left-1/2 transform -translate-x-1/2 ml-5 sm:ml-6 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.8s', boxShadow: '0 0 6px rgba(255, 165, 0, 0.8)' }}></div>
        </div>

        {/* Gifts under the tree - smaller */}
        <div className="absolute -bottom-0.5 sm:-bottom-1 left-1/2 transform -translate-x-1/2 flex gap-0.5 sm:gap-1">
          <div className="relative">
            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-sm" style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.3)' }}></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-yellow-400"></div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-0.5 h-full bg-yellow-400"></div>
          </div>
          <div className="relative">
            <div className="w-5 h-4 sm:w-6 sm:h-5 bg-green-500 rounded-sm" style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.3)' }}></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-red-400"></div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-0.5 h-full bg-red-400"></div>
          </div>
          <div className="relative">
            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-sm" style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.3)' }}></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-yellow-400"></div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-0.5 h-full bg-yellow-400"></div>
          </div>
        </div>
      </div>

      {/* Santa with Sled/Skis - top right, more space from edge */}
      <div className="absolute top-16 right-8 sm:top-20 sm:right-12 opacity-90 z-10">
        <div className="relative w-20 h-16 sm:w-24 sm:h-20">
          {/* Santa */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            {/* Santa body */}
            <div className="w-8 h-10 sm:w-10 sm:h-12 bg-red-600 rounded-t-full relative">
              {/* Santa face */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-7 sm:h-7 bg-pink-200 rounded-full border-2 border-red-600">
                {/* Beard */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-6 sm:w-10 sm:h-8 bg-white rounded-b-full"></div>
                {/* Hat */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-4 sm:w-7 sm:h-5 bg-red-600 rounded-t-full">
                  <div className="absolute -top-2 right-0 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full"></div>
                </div>
              </div>
              {/* Belt */}
              <div className="absolute bottom-2 left-0 w-full h-1 bg-black"></div>
            </div>
          </div>
          
          {/* Sled/Skis */}
          <div className="absolute bottom-0 left-0 w-full flex justify-center">
            <div className="relative">
              {/* Skis */}
              <div className="flex gap-1 sm:gap-1.5">
                <div className="w-1 h-8 sm:w-1.5 sm:h-10 bg-gray-400 rounded-full transform rotate-12"></div>
                <div className="w-1 h-8 sm:w-1.5 sm:h-10 bg-gray-400 rounded-full transform -rotate-12"></div>
              </div>
              {/* Sled base */}
              <div className="absolute top-6 sm:top-8 left-1/2 transform -translate-x-1/2 w-12 h-1 sm:w-14 sm:h-1.5 bg-red-800 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

