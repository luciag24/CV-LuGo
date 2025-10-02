import { useLanguage } from '../contexts/LanguageContext'

interface HeroProps {
  isDarkMode: boolean
}

export default function Hero({ isDarkMode }: HeroProps) {
  const { t } = useLanguage()
  return (
    <section className="pt-20 pb-4 md:pt-24 md:pb-6 text-center">
      <div className="max-w-4xl mx-auto px-4">
        {/* Main Name */}
        <h1 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 animate-fade-in-up ${
          isDarkMode 
            ? 'text-white' 
            : 'bg-gradient-to-r from-rose-600 via-pink-600 to-violet-600 bg-clip-text text-transparent'
        }`}>
          Lucia Gogolová
        </h1>
        
        {/* Titles */}
        <div className="text-sm sm:text-base md:text-lg bg-gradient-to-r from-rose-600 via-pink-600 to-violet-600 bg-clip-text text-transparent font-medium mb-3 md:mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p>{t('hero.title')}</p>
        </div>
        
        {/* Description */}
        <div className={`text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-4 md:mb-6 animate-fade-in-up ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`} style={{ animationDelay: '0.4s' }}>
          <p>
            {t('hero.description')}
          </p>
        </div>
      </div>
    </section>
  )
} 