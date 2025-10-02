import { useLanguage } from '../contexts/LanguageContext'

interface SkillsProps {
  isDarkMode: boolean
}

export default function Skills({ isDarkMode }: SkillsProps) {
  const { t } = useLanguage()
  const skillCategories = [
    {
      title: t('skills.backend'),
      color: 'primary',
      skills: [
        { name: 'Java 8/11/17', progress: 95, experience: `13-14 ${t('skills.months')}` },
        { name: 'Spring Boot', progress: 90, experience: `12-13 ${t('skills.months')}` },
        { name: 'Maven/Gradle', progress: 85, experience: `11-12 ${t('skills.months')}` },
        { name: 'JUnit', progress: 80, experience: `10-11 ${t('skills.months')}` },
        { name: 'REST API', progress: 85, experience: `11-12 ${t('skills.months')}` },
        { name: 'Spring Security', progress: 70, experience: `8-9 ${t('skills.months')}` },
      ]
    },
    {
      title: t('skills.frontend'),
      color: 'orange',
      skills: [
        { name: 'React', progress: 75, experience: `10-11 ${t('skills.months')}` },
        { name: 'TypeScript', progress: 70, experience: `9-10 ${t('skills.months')}` },
        { name: 'Next.js', progress: 65, experience: `8-9 ${t('skills.months')}` },
        { name: 'Tailwind CSS', progress: 60, experience: `7-8 ${t('skills.months')}` },
        { name: 'HTML/CSS', progress: 85, experience: `13-14 ${t('skills.months')}` },
        { name: 'JavaScript', progress: 80, experience: `11-12 ${t('skills.months')}` },
      ]
    },
    {
      title: t('skills.databases'),
      color: 'green',
      skills: [
        { name: 'Git', progress: 85, experience: `11-12 ${t('skills.months')}` },
        { name: 'MySQL', progress: 75, experience: `10-11 ${t('skills.months')}` },
        { name: 'PostgreSQL', progress: 70, experience: `9-10 ${t('skills.months')}` },
        { name: 'Docker & Docker Compose', progress: 60, experience: `6-7 ${t('skills.months')}` },
        { name: 'IntelliJ IDEA', progress: 90, experience: `13-14 ${t('skills.months')}` },
      ]
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary-600'
      case 'orange':
        return 'bg-orange-500'
      case 'green':
        return 'bg-green-600'
      default:
        return 'bg-primary-600'
    }
  }

  const getTitleColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary-700'
      case 'orange':
        return 'text-orange-600'
      case 'green':
        return 'text-green-600'
      default:
        return 'text-primary-700'
    }
  }

  return (
    <section id="skills" className="py-4 md:py-6">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`text-lg md:text-xl font-bold mb-3 md:mb-4 text-center animate-fade-in-up ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>{t('skills.title')}</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="space-y-2 md:space-y-3 animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
              <h3 className={`text-sm md:text-base font-semibold ${getTitleColor(category.color)}`}>
                {category.title}
              </h3>
              
              <div className="space-y-1.5 md:space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-1 animate-fade-in-up" style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}>
                    <div className="flex justify-between items-center">
                      <span className={`font-medium text-xs ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>{skill.name}</span>
                      <span className={`text-xs ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>{skill.experience}</span>
                    </div>
                    <div className={`w-full rounded-full h-1 ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <div
                        className={`h-1 rounded-full ${getColorClasses(category.color)} transition-all duration-1000`}
                        style={{ width: `${skill.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 