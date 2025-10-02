'use client'

import { useLanguage } from '../contexts/LanguageContext'

interface ContactProps {
  isDarkMode: boolean
}

export default function Contact({ isDarkMode }: ContactProps) {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-4 md:py-6">
      <div className="max-w-4xl mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-6 md:mb-8 animate-fade-in-up">
          <h2 className={`text-lg md:text-xl font-bold mb-2 md:mb-3 ${
            isDarkMode ? 'text-white' : 'bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent'
          }`}>
            {t('contact.title')}
          </h2>
          <p className={`text-xs md:text-sm max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t('contact.description')}
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-8 pt-6 border-t border-gray-200 text-center">
          <div className={`text-xs md:text-sm mb-2 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {t('contact.footer.created')} <span className="font-semibold">LuGo</span>
          </div>
          <div className={`text-xs ${
            isDarkMode ? 'text-gray-500' : 'text-gray-500'
          }`}>
            {t('contact.footer.technologies')}{' '}
            <a href="https://nextjs.org" className="underline hover:text-gray-700 transition-colors">Next.js</a>
            ,{' '}
            <a href="https://typescriptlang.org" className="underline hover:text-gray-700 transition-colors">TypeScript</a>
            ,{' '}
            <a href="https://tailwindcss.com" className="underline hover:text-gray-700 transition-colors">Tailwind CSS</a>
            {' '}a{' '}
            <a href="https://www.emailjs.com" className="underline hover:text-gray-700 transition-colors">EmailJS</a>
          </div>
        </footer>
      </div>
    </section>
  )
} 