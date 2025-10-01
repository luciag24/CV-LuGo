'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <main className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900' 
        : 'bg-gradient-to-br from-rose-100 via-pink-50 to-violet-100'
    }`}>
      <AnimatedBackground />
      
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      
      <div className="container mx-auto">
        <Hero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </div>
    </main>
  )
} 