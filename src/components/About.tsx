'use client'

import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiShoppingBag, FiSearch, FiCpu, FiServer } from 'react-icons/fi'

const About = () => {
  const skills = [
    { icon: <FiCode />, name: 'Web Geliştirme', level: 90 },
    { icon: <FiShoppingBag />, name: 'E-Ticaret', level: 85 },
    { icon: <FiSearch />, name: 'SEO', level: 80 },
    { icon: <FiServer />, name: 'Sunucu Yönetimi', level: 75 },
    { icon: <FiCpu />, name: 'Yapay Zeka', level: 70 },
    { icon: <FiDatabase />, name: 'Veritabanı', level: 85 },
  ]

  return (
    <section id="hakkimda" className="section bg-gray-50 dark:bg-gray-800/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Hakkımda</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sol Kolon - Kişisel Bilgiler ve Profil */}
            <div className="md:col-span-1">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md card-hover mb-8">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-primary">M</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Mahmut</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Uzmanlık</h4>
                    <p className="font-medium">IT & Yazılım Çözümleri</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Deneyim</h4>
                    <p className="font-medium">5+ Yıl</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Konum</h4>
                    <p className="font-medium">İstanbul, Türkiye</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">E-posta</h4>
                    <a href="mailto:imahmut@proton.me" className="font-medium text-primary hover:underline">imahmut@proton.me</a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md card-hover">
                <h3 className="text-xl font-bold mb-4 text-primary">Profesyonel Profil</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Web geliştirme, E-Ticaret Sistemleri, SEO, IT, Yapay Zeka ve AI Agent sistemleri alanlarında uzmanlaşmış bir yazılım ve IT çözümleri uzmanıyım.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Modern teknolojileri kullanarak müşterilerimin dijital varlıklarını optimize ediyor, işlerini büyütmelerine yardımcı oluyorum. Kullanıcı deneyimini ön planda tutarak, SEO dostu ve yüksek performanslı web çözümleri geliştiriyorum.
                </p>
              </div>
            </div>
            
            {/* Sağ Kolon - Beceriler */}
            <div className="md:col-span-1">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md card-hover h-full">
                <h3 className="text-xl font-bold mb-6 text-primary">Beceriler</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <span className="text-primary mr-2 text-xl">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div 
                          className="bg-primary h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                      <div className="text-right text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {skill.level}%
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                  <h4 className="font-bold text-primary mb-2">Yapay Zeka ve Otomasyon</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Yapay zeka ve otomasyon sistemleri ile işletmelerin operasyonel süreçlerini iyileştiriyor, zaman ve maliyet tasarrufu sağlıyorum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 