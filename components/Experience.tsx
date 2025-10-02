'use client'

import { ExternalLink, Github, Play, X } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

interface ExperienceProps {
  isDarkMode: boolean
}

interface Project {
  title: string
  description: string
  tags: string[]
  languages: string[]
  image: string
  demoUrl: string | null
  demoGif?: string
  codeUrl: string
  status: string | null
}

export default function Experience({ isDarkMode }: ExperienceProps) {
  const { t } = useLanguage()
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null)

  const projects: Project[] = [
    {
      title: t('projects.eshop.title'),
      description: t('projects.eshop.description'),
      tags: ['Next.js', 'TypeScript', 'Directus CMS', 'Stripe', 'Printful', 'Tailwind CSS', 'Vercel'],
      languages: ['TypeScript', 'JavaScript', 'CSS'],
      image: '/images/eshop-placeholder.jpg',
      demoUrl: 'https://our-printshop687.vercel.app',
      demoGif: '/demos/eshop-demo.gif',
      codeUrl: 'https://github.com/daasadr/our-printshop',
      status: 'In Progress'
    },
    {
      title: t('projects.bottlelogic.title'),
      description: t('projects.bottlelogic.description'),
      tags: ['Java', 'OOP', 'Design Patterns', 'Console Application', 'ASCII Art'],
      languages: ['Java'],
      image: '/images/bottlelogic.jpg',
      demoUrl: null,
      demoGif: '/demos/BottleLogic-demo.gif',
      codeUrl: 'https://github.com/luciag24/bottlelogic',
      status: null
    },
    {
      title: t('projects.mathgame.title'),
      description: t('projects.mathgame.description'),
      tags: ['Java', 'Spring Boot', 'MySQL', 'Maven', 'Docker', 'Web Application'],
      languages: ['Java', 'JavaScript', 'CSS', 'HTML', 'SQL'],
      image: '/images/math-game2.jpg',
      demoUrl: null,
      demoGif: '/demos/MathGame-demo.gif',
      codeUrl: 'https://github.com/luciag24/math-game2.0',
      status: null
    },
    {
      title: t('projects.godzilla.title'),
      description: t('projects.godzilla.description'),
      tags: ['React', 'JavaScript', 'Game Development', 'CSS Animations', 'Creative Design'],
      languages: ['JavaScript', 'HTML/CSS'],
      image: '/images/kaijunoexryori.jpg',
      demoUrl: null,
      demoGif: '/demos/godzilla-demo.gif',
      codeUrl: 'https://github.com/luciag24/kaijunoexryori',
      status: null
    }
  ]

  const openDemo = (demoGif: string) => {
    setSelectedDemo(demoGif)
  }

  const closeDemo = () => {
    setSelectedDemo(null)
  }

  return (
    <section id="experience" className="py-4 md:py-6">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`text-lg md:text-xl font-bold mb-3 md:mb-4 text-center animate-fade-in-up ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>{t('experience.title')}</h2>
        
        <div className="grid sm:grid-cols-2 gap-2 md:gap-3">
          {projects.map((project, index) => (
            <div key={index} className={`rounded-lg shadow-md border overflow-hidden card-hover animate-fade-in-up ${
              isDarkMode 
                ? 'bg-slate-800 border-slate-700' 
                : 'bg-white border-gray-200'
            }`} style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Project Image */}
              <div className={`h-16 sm:h-20 md:h-24 relative overflow-hidden ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-slate-700 to-slate-800' 
                  : 'bg-gradient-to-br from-gray-100 to-gray-200'
              }`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center hidden">
                  <div className="text-gray-400 text-xs">Project Image</div>
                </div>
                {project.status && (
                  <div className="absolute top-1 right-1">
                    <span className="bg-yellow-100 text-yellow-800 px-1 py-0.5 rounded-full text-xs font-medium">
                      {project.status}
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-2 md:p-3">
                <h3 className={`text-xs md:text-sm font-semibold mb-1 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-xs mb-2 line-clamp-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Languages */}
                <div className="mb-2">
                  <div className={`text-xs font-medium mb-1 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Jazyky:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.languages.map((language) => (
                      <span
                        key={language}
                        className={`px-1 py-0.5 rounded-full text-xs font-medium ${
                          isDarkMode 
                            ? 'bg-violet-900/30 text-violet-300 border border-violet-700/50' 
                            : 'bg-violet-100 text-violet-800'
                        }`}
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className={`px-1 py-0.5 rounded-full text-xs font-medium ${
                        isDarkMode 
                          ? 'bg-rose-900/30 text-rose-300 border border-rose-700/50' 
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-1">
                  {project.demoGif && (
                    <button
                      onClick={() => openDemo(project.demoGif!)}
                      className="bg-gradient-to-r from-rose-500 via-pink-500 to-violet-600 hover:from-rose-600 hover:via-pink-600 hover:to-violet-700 text-white flex items-center gap-1 flex-1 justify-center text-xs py-1 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
                    >
                      <Play className="w-3 h-3" />
                      {t('experience.demo')}
                    </button>
                  )}
                  <a 
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:from-gray-600 hover:via-gray-700 hover:to-gray-800 text-white flex items-center gap-1 flex-1 justify-center text-xs py-1 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                  >
                    <Github className="w-3 h-3" />
                    {t('experience.code')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Demo Modal */}
      {selectedDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className={`relative max-w-4xl max-h-[90vh] mx-4 rounded-lg shadow-2xl ${
            isDarkMode ? 'bg-slate-800' : 'bg-white'
          }`}>
            {/* Close Button */}
            <button
              onClick={closeDemo}
              className="absolute -top-2 -right-2 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>
            
            {/* Demo Content */}
            <div className="p-4">
              <div className="text-center mb-4">
                <h3 className={`text-lg font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Demo aplikácie
                </h3>
              </div>
              
              <div className="relative">
                <img
                  src={selectedDemo}
                  alt="Project Demo"
                  className="w-full h-auto rounded-lg shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className={`absolute inset-0 flex items-center justify-center hidden rounded-lg ${
                  isDarkMode ? 'bg-slate-700' : 'bg-gray-100'
                }`}>
                  <div className={`text-center ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <Play className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Demo sa načítava...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
} 