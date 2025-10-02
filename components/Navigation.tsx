'use client'

import { useState } from 'react'
import { Download, Github, Mail, Phone, X, Moon, Sun } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../contexts/LanguageContext'

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
  isDarkMode: boolean
  setIsDarkMode: (isDark: boolean) => void
}

export default function Navigation({ activeSection, setActiveSection, isDarkMode, setIsDarkMode }: NavigationProps) {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isPhoneFlipped, setIsPhoneFlipped] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // EmailJS konfigurácia
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_dfa7sbr'
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_lv25xjb'
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'ApNrXwpFkbsnBFqVv'


      // Parametre pre email
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'lucia.gogolova81@gmail.com'
      }

      // Odoslanie emailu cez EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
              showToast(t('contact.form.success'))
      
      // Reset formulára
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Zatvorenie dropdown
      setIsContactOpen(false)
      
    } catch (error) {
      console.error('EmailJS Error:', error)
      const errorMessage = error instanceof Error ? error.message : 'Neznáma chyba'
      showToast(`${t('contact.form.error')}: ${errorMessage}`, 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-slate-900/80 border-slate-700' 
        : 'bg-gradient-to-r from-rose-100/90 via-pink-50/90 to-violet-100/90 border-rose-200'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo/Name */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 rounded-lg p-1"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg overflow-hidden shadow-md">
              <img
                src="/images/lugo.PNG"
                alt="LuGo Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="w-full h-full bg-gradient-to-r from-rose-500 via-pink-500 to-violet-600 flex items-center justify-center hidden">
                <span className="text-white font-bold text-sm md:text-base">LG</span>
              </div>
            </div>
            <span className={`text-base md:text-lg font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-violet-600 bg-clip-text text-transparent ${
              isDarkMode ? 'text-white' : ''
            }`}>
              LuGo
            </span>
          </button>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-1 md:gap-2">
                    {/* Language Buttons */}
                    <div className="flex gap-1">
                      <button
                        onClick={() => setLanguage('sk')}
                        className={`px-2 py-1.5 md:px-3 md:py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 text-xs md:text-sm ${
                          language === 'sk'
                            ? 'bg-gradient-to-r from-rose-500 via-pink-500 to-violet-600 hover:from-rose-600 hover:via-pink-600 hover:to-violet-700 text-white'
                            : isDarkMode 
                              ? 'bg-slate-700 hover:bg-slate-600 text-gray-300' 
                              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                        }`}
                      >
                        SK
                      </button>
                      <button
                        onClick={() => setLanguage('en')}
                        className={`px-2 py-1.5 md:px-3 md:py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 text-xs md:text-sm ${
                          language === 'en'
                            ? 'bg-gradient-to-r from-rose-500 via-pink-500 to-violet-600 hover:from-rose-600 hover:via-pink-600 hover:to-violet-700 text-white'
                            : isDarkMode 
                              ? 'bg-slate-700 hover:bg-slate-600 text-gray-300' 
                              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                        }`}
                      >
                        EN
                      </button>
                    </div>
                    
                    {/* Dark Mode Toggle */}
                    <button
                      onClick={() => setIsDarkMode(!isDarkMode)}
                      className={`p-1.5 md:p-2 rounded-lg transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-yellow-500 hover:bg-yellow-600 text-white' 
                          : 'bg-slate-800 hover:bg-slate-700 text-white'
                      }`}
                    >
                      {isDarkMode ? <Sun className="w-3 h-3 md:w-4 md:h-4" /> : <Moon className="w-3 h-3 md:w-4 md:h-4" />}
                    </button>
            
            {/* Projekty */}
            <button
              onClick={() => scrollToSection('experience')}
              className="bg-gradient-to-r from-rose-500 via-pink-500 to-violet-600 hover:from-rose-600 hover:via-pink-600 hover:to-violet-700 text-white px-2 py-1.5 md:px-3 md:py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 text-xs md:text-sm"
            >
              <span className="hidden sm:inline">{t('nav.projects')}</span>
              <span className="sm:hidden">{t('nav.projects').substring(0, 4)}</span>
            </button>
            
            {/* GitHub */}
            <a 
              href="https://github.com/luciag24" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-rose-500 via-pink-500 to-violet-600 hover:from-rose-600 hover:via-pink-600 hover:to-violet-700 text-white px-2 py-1.5 md:px-3 md:py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 flex items-center gap-1 text-xs md:text-sm"
            >
              <Github className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">{t('nav.github')}</span>
            </a>
            
            {/* Kontakt */}
            <button 
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="bg-gradient-to-r from-rose-500 via-pink-500 to-violet-600 hover:from-rose-600 hover:via-pink-600 hover:to-violet-700 text-white px-2 py-1.5 md:px-3 md:py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 flex items-center gap-1 text-xs md:text-sm"
            >
              <Mail className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">{t('nav.contact')}</span>
            </button>
            
            {/* Telefón */}
            <button 
              onClick={() => setIsPhoneFlipped(!isPhoneFlipped)}
              className="bg-gradient-to-r from-rose-500 via-pink-500 to-violet-600 hover:from-rose-600 hover:via-pink-600 hover:to-violet-700 text-white px-2 py-1.5 md:px-3 md:py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 flex items-center gap-1 text-xs md:text-sm relative"
            >
              {/* Front of card */}
              <div className={`flex items-center gap-1 transition-opacity duration-300 ${
                isPhoneFlipped ? 'opacity-0' : 'opacity-100'
              }`}>
                <Phone className="w-3 h-3 md:w-4 md:h-4" />
                <span className="hidden sm:inline">{t('nav.phone')}</span>
              </div>
              
              {/* Back of card */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                isPhoneFlipped ? 'opacity-100' : 'opacity-0'
              }`}>
                <span className="text-xs md:text-sm font-bold">+421 949 612 457</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Contact Form Dropdown */}
      {isContactOpen && (
        <div className={`absolute top-full left-0 right-0 border-b shadow-lg z-40 ${
          isDarkMode 
            ? 'bg-slate-800 border-slate-700' 
            : 'bg-white border-gray-200'
        }`}>
          <div className="container mx-auto px-4 py-6">
            <div className="max-w-2xl mx-auto">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className={`text-lg font-semibold ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>{t('nav.contact')}</h3>
                <button
                  onClick={() => setIsContactOpen(false)}
                  className={`transition-colors ${
                    isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className={`block text-sm font-medium mb-1 ${
                              isDarkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              {t('contact.form.name')}
                            </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200 ${
                        isDarkMode 
                          ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                              placeholder={language === 'sk' ? 'Vaše meno' : 'Your name'}
                    />
                  </div>
                  
                          <div>
                            <label htmlFor="email" className={`block text-sm font-medium mb-1 ${
                              isDarkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              {t('contact.form.email')}
                            </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200 ${
                        isDarkMode 
                          ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                              placeholder={language === 'sk' ? 'vas@email.com' : 'your@email.com'}
                    />
                  </div>
                </div>
                
                        <div>
                          <label htmlFor="subject" className={`block text-sm font-medium mb-1 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {t('contact.form.subject')}
                          </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200 ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                            placeholder={language === 'sk' ? 'Predmet správy' : 'Message subject'}
                  />
                </div>
                
                        <div>
                          <label htmlFor="message" className={`block text-sm font-medium mb-1 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {t('contact.form.message')}
                          </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200 resize-none ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                            placeholder={language === 'sk' ? 'Vaša správa...' : 'Your message...'}
                  ></textarea>
                </div>
                
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
                        >
                          {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                        </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-20 right-4 z-50 animate-slide-in">
          <div className={`px-4 py-3 rounded-lg shadow-lg ${
            toast.type === 'success' 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{toast.message}</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
} 