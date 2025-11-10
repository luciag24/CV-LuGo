'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'sk' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation keys
const translations = {
  sk: {
    // Navigation
    'nav.projects': 'Projekty',
    'nav.github': 'GitHub',
    'nav.contact': 'Kontakt',
    'nav.phone': 'Telefón',
    
    // Hero
    'hero.title': 'Java Developer | Backend & Web Applications',
    'hero.description': 'Backend vývoj v Jave a Spring Boote je moja silná stránka. Skúsenosti mám aj s moderným frontendom (React, TypeScript, Next.js) a databázami (PostgreSQL, MySQL). Neustále sa učím nové technológie.',
    
    // About
    'about.title': 'O mne',
    'about.description': 'Do IT ma priviedla vášeň pre riešenie problémov a možnosť tvoriť hodnotné riešenia. Postupne som vytvorila niekoľko funkčných aplikácií, ktoré mi priniesli nové skúsenosti.',
    'about.softSkills': 'Soft skills',
    'about.communication': 'Komunikačné zručnosti',
    'about.problemSolving': 'Riešenie problémov',
    'about.reliability': 'Spoľahlivosť',
    'about.creativity': 'Kreativita',
    'about.perseverance': 'Vytrvalosť',
    
    // Skills
    'skills.title': 'Technické znalosti',
    'skills.backend': 'Backend - Moja špecializácia',
    'skills.frontend': 'Frontend - Podporné technológie',
    'skills.databases': 'Databázy a Nástroje',
    'skills.months': 'mesiacov',
    
    // Experience
    'experience.title': 'Projekty a skúsenosti',
    'experience.demo': 'Demo',
    'experience.code': 'Code',
    'experience.inProgress': 'In Progress',
    
    // Contact
    'contact.title': 'Poďme spolupracovať',
    'contact.description': 'Ráda sa pobavím o nových projektoch, kreatívnych myšlienkach alebo príležitostiach byť súčasťou vašej vízie',
    'contact.form.name': 'Meno',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Predmet',
    'contact.form.message': 'Správa',
    'contact.form.submit': 'Odoslať správu',
    'contact.form.submitting': 'Odosielam...',
    'contact.form.success': 'Správa bola úspešne odoslaná!',
    'contact.form.error': 'Chyba pri odosielaní správy',
    'contact.footer.created': '© 2025 Vytvorila',
    'contact.footer.technologies': 'Vytvorené pomocí',
    
    // Projects
    'projects.eshop.title': 'E-commerce Platform',
    'projects.eshop.description': 'Profesionálna e-commerce platforma navrhnutá pre globálny trh. Podporuje 4 jazyky (čeština, slovenčina, angličtina, nemčina) a 3 kurzové meny (CZK, EUR, GBP), čím umožňuje zákazníkom z celého sveta nakupovať v ich rodnom jazyku a mene. Platforma obsahuje intuitívny katalóg produktov, bezpečné Stripe platby, automatickú synchronizáciu s Printful pre tlačové produkty a plne responzívny dizajn optimalizovaný pre všetky zariadenia. Ideálne riešenie pre podniky, ktoré chcú expandovať medzinárodne.',
    
    'projects.bottlelogic.title': 'BottleLogic - Recyklačná aplikácia',
    'projects.bottlelogic.description': 'Konzolová aplikácia na recykláciu plastových fliaš a plechoviek vytvorená na prezentáciu OOP princípov. Implementuje 8 návrhových vzorov (Strategy, Factory, Builder, Command, Template Method, State, Visitor, Observer) a demonštruje pokročilé OOP koncepty s ASCII art rozhraním.',
    
    'projects.mathgame.title': 'Pokročilá Matematická hra',
    'projects.mathgame.description': 'Matematická hra pre žiakov základných škôl s pokročilými funkciami: matematické príklady pre 1.-4. ročník, jednotkové prevody, zvukové efekty a sledovanie progresu. Webová aplikácia s moderným UI.',
    
    'projects.godzilla.title': 'Godzilla Adventure Game',
    'projects.godzilla.description': 'Zábavná adventure hra s Godzilla tematikou. Obsahuje rôzne úrovne, boss battles, power-ups a moderné grafické efekty. Demonštruje game development skills a kreatívne riešenia.',
  },
  en: {
    // Navigation
    'nav.projects': 'Projects',
    'nav.github': 'GitHub',
    'nav.contact': 'Contact',
    'nav.phone': 'Phone',
    
    // Hero
    'hero.title': 'Java Developer | Backend & Web Applications',
    'hero.description': 'Backend development in Java and Spring Boot is my strength. I also have experience with modern frontend (React, TypeScript, Next.js) and databases (PostgreSQL, MySQL). I constantly learn new technologies.',
    
    // About
    'about.title': 'About Me',
    'about.description': 'Passion for problem-solving and the opportunity to create valuable solutions led me to IT. Gradually, I have created several functional applications that brought me new experiences.',
    'about.softSkills': 'Soft skills',
    'about.communication': 'Communication skills',
    'about.problemSolving': 'Problem solving',
    'about.reliability': 'Reliability',
    'about.creativity': 'Creativity',
    'about.perseverance': 'Perseverance',
    
    // Skills
    'skills.title': 'Technical Skills',
    'skills.backend': 'Backend - My specialization',
    'skills.frontend': 'Frontend - Supporting technologies',
    'skills.databases': 'Databases and Tools',
    'skills.months': 'months',
    
    // Experience
    'experience.title': 'Projects and Experience',
    'experience.demo': 'Demo',
    'experience.code': 'Code',
    'experience.inProgress': 'In Progress',
    
    // Contact
    'contact.title': 'Let\'s work together',
    'contact.description': 'I would love to discuss new projects, creative ideas or opportunities to be part of your vision',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send message',
    'contact.form.submitting': 'Sending...',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.error': 'Error sending message',
    'contact.footer.created': '© 2025 Created by',
    'contact.footer.technologies': 'Built with',
    
    // Projects
    'projects.eshop.title': 'E-commerce Platform',
    'projects.eshop.description': 'Professional e-commerce platform designed for the global market. Supports 4 languages (Czech, Slovak, English, German) and 3 currencies (CZK, EUR, GBP), allowing customers worldwide to shop in their native language and currency. The platform features an intuitive product catalog, secure Stripe payments, automatic synchronization with Printful for print products, and a fully responsive design optimized for all devices. Perfect solution for businesses looking to expand internationally.',
    
    'projects.bottlelogic.title': 'BottleLogic - Recycling Application',
    'projects.bottlelogic.description': 'Console application for recycling plastic bottles and cans created to demonstrate OOP principles. Implements 8 design patterns (Strategy, Factory, Builder, Command, Template Method, State, Visitor, Observer) and demonstrates advanced OOP concepts with ASCII art interface.',
    
    'projects.mathgame.title': 'Advanced Math Game',
    'projects.mathgame.description': 'Math game for elementary school students with advanced features: math problems for grades 1-4, unit conversions, sound effects and progress tracking. Web application with modern UI.',
    
    'projects.godzilla.title': 'Godzilla Adventure Game',
    'projects.godzilla.description': 'Fun adventure game with Godzilla theme. Includes various levels, boss battles, power-ups and modern graphic effects. Demonstrates game development skills and creative solutions.',
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('sk')
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
