'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Merhaba, ben <span className="text-primary">Mahmut</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            Web geliştirme, E-Ticaret, SEO, Yapay Zeka ve IT alanlarında profesyonel çözümler sunuyorum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#hizmetler" 
              className="btn btn-primary text-center flex items-center justify-center gap-2"
            >
              Hizmetlerim
              <FiArrowRight />
            </Link>
            <Link 
              href="#iletisim" 
              className="btn bg-gray-100 dark:bg-gray-800 text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              İletişime Geç
            </Link>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <div className="font-bold text-3xl text-primary mb-1">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Yıl Deneyim</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <div className="font-bold text-3xl text-primary mb-1">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Tamamlanan Proje</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <div className="font-bold text-3xl text-primary mb-1">30+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Mutlu Müşteri</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <div className="font-bold text-3xl text-primary mb-1">6</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Hizmet Alanı</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 