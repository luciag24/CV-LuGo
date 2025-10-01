'use client'

interface AboutProps {
  isDarkMode: boolean
}

export default function About({ isDarkMode }: AboutProps) {
  const softSkills = [
    'Komunikačné zručnosti',
    'Riešenie problémov',
    'Spoľahlivosť',
    'Kreativita',
    'Vytrvalosť'
  ]

  return (
    <section id="about" className="py-4 md:py-6">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Text */}
          <div className="animate-fade-in-up">
            <h2 className={`text-lg md:text-xl font-bold mb-2 md:mb-3 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>O mne</h2>
            <p className={`text-xs md:text-sm mb-3 md:mb-4 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Do IT ma priviedla vášeň pre riešenie problémov a možnosť tvoriť hodnotné riešenia. 
              Postupne som vytvorila niekoľko funkčných aplikácií, ktoré mi priniesli nové skúsenosti.
            </p>
          </div>

          {/* Soft Skills */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className={`text-base md:text-lg font-semibold mb-2 md:mb-3 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Soft skills</h3>
            <div className="flex flex-wrap gap-1 md:gap-1.5">
              {softSkills.map((skill, index) => (
                <span
                  key={skill}
                  className={`px-2 py-1 rounded-full text-xs font-medium transition-colors duration-200 animate-fade-in-up ${
                    isDarkMode 
                      ? 'bg-rose-900/30 text-rose-300 hover:bg-rose-800/40 border border-rose-700/50' 
                      : 'bg-rose-100 text-rose-800 hover:bg-rose-200'
                  }`}
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 