'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiShoppingCart, FiSearch, FiServer, FiCpu, FiBarChart  } from 'react-icons/fi'
import { FaShopify } from "react-icons/fa";
import { SiShopify } from "react-icons/si";
import ServiceModal from './ServiceModal'

// Proje verileri
const projects = {
  webDev: [
    {
      id: 1,
      title: 'E-Ticaret Web Sitesi',
      description: 'Modern ve kullanıcı dostu bir e-ticaret platformu geliştirdim.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Stripe'],
      link: 'https://ecommerce-demo.mahmut.dev'
    },
    {
      id: 2,
      title: 'Kurumsal Web Sitesi',
      description: 'SEO odaklı, hızlı ve duyarlı bir kurumsal web sitesi tasarladım.',
      technologies: ['HTML/CSS', 'JavaScript', 'PHP'],
      link: 'https://corporate-demo.mahmut.dev'
    }
  ],
  ecommerce: [
    {
      id: 1,
      title: 'Shopify Mağaza Optimizasyonu',
      description: 'Mevcut bir Shopify mağazasını optimize ederek satışları %30 artırdım.',
      technologies: ['Shopify', 'Liquid', 'JavaScript'],
      link: 'https://shopify-demo.mahmut.dev'
    },
    {
      id: 2,
      title: 'WooCommerce Entegrasyonu',
      description: 'WordPress tabanlı bir siteye WooCommerce entegrasyonu yaparak e-ticaret özelliği ekledim.',
      technologies: ['WordPress', 'WooCommerce', 'PHP'],
      link: 'https://woocommerce-demo.mahmut.dev'
    }
  ],
  seo: [
    {
      id: 1,
      title: 'SEO Optimizasyonu',
      description: 'Bir web sitesinin arama motoru sıralamasını iyileştirerek organik trafiği %50 artırdım.',
      technologies: ['Google Analytics', 'SEO', 'İçerik Stratejisi'],
      link: 'https://seo-case.mahmut.dev'
    },
    {
      id: 2,
      title: 'Dijital Pazarlama Kampanyası',
      description: 'Kapsamlı bir dijital pazarlama kampanyası ile marka bilinirliğini artırdım.',
      technologies: ['Google Ads', 'Facebook Ads', 'E-posta Pazarlama'],
      link: 'https://marketing-case.mahmut.dev'
    }
  ],
  server: [
    {
      id: 1,
      title: 'Sunucu Migrasyonu',
      description: 'Bir şirketin tüm sunucu altyapısını bulut tabanlı çözüme taşıdım.',
      technologies: ['AWS', 'Docker', 'Nginx'],
      link: 'https://server-case.mahmut.dev'
    },
    {
      id: 2,
      title: 'Sunucu Güvenlik Denetimi',
      description: 'Güvenlik açıklarını tespit edip kapatarak sunucu güvenliğini artırdım.',
      technologies: ['Linux', 'Firewall', 'SSL'],
      link: 'https://security-case.mahmut.dev'
    }
  ],
  ai: [
    {
      id: 1,
      title: 'Müşteri Hizmetleri Chatbot',
      description: 'Müşteri sorularını otomatik yanıtlayan bir yapay zeka chatbot geliştirdim.',
      technologies: ['Python', 'NLP', 'Machine Learning'],
      link: 'https://chatbot-demo.mahmut.dev'
    },
    {
      id: 2,
      title: 'Veri Analizi Otomasyonu',
      description: 'Büyük veri setlerini analiz eden ve raporlayan bir AI sistemi kurdum.',
      technologies: ['Python', 'TensorFlow', 'Data Analysis'],
      link: 'https://data-analysis.mahmut.dev'
    }
  ],
  marketplace: [
    {
      id: 1,
      title: 'Pazaryeri Entegrasyonu',
      description: 'Bir e-ticaret sitesini çeşitli pazaryerleri ile entegre ettim.',
      technologies: ['API Entegrasyonu', 'JavaScript', 'PHP'],
      link: 'https://marketplace-integration.mahmut.dev'
    },
    {
      id: 2,
      title: 'Çok Kanallı Satış Stratejisi',
      description: 'Farklı satış kanallarını yöneten bir strateji ve yazılım çözümü geliştirdim.',
      technologies: ['Shopify', 'Amazon', 'Trendyol'],
      link: 'https://multichannel-sales.mahmut.dev'
    }
  ]
}

const services = [
  {
    id: 1,
    title: 'Full Stack Web Geliştirme',
    description: 'HTML/CSS, JavaScript, PHP, Astro ve diğer teknolojilerle modern ve duyarlı web siteleri geliştiriyorum. SEO dostu, hızlı ve kullanıcı deneyimi odaklı web projeleri tasarlıyorum.',
    icon: <FiCode className="h-10 w-10" />,
    projects: projects.webDev
  },
  {
    id: 2,
    title: 'E-Ticaret & Dijital Yönetim',
    description: 'E-ticaret sistemleri kurulumu, özelleştirme ve dijital varlıklarınızın yönetimi için çözümler sunuyorum. Shopify, WooCommerce ve diğer platformlarda online mağazalar kuruyorum.',
    icon: <FiShoppingCart className="h-10 w-10" />,
    projects: projects.ecommerce
  },
  {
    id: 3,
    title: 'SEO & Dijital Pazarlama',
    description: 'Arama motoru optimizasyonu, dijital pazarlama stratejileri ve web sitenizin görünürlüğünü artıracak çözümler. Google Analytics ile trafik analizi ve raporlama hizmetleri sunuyorum.',
    icon: <FiSearch className="h-10 w-10" />,
    projects: projects.seo
  },
  {
    id: 4,
    title: 'Sunucu Yönetimi',
    description: 'Sunucu kurulumu, bakımı, güvenlik önlemleri ve performans optimizasyonu hizmetleri sunuyorum. Linux tabanlı sistemlerde uzmanlaşmış olarak, güvenli ve hızlı sunucu çözümleri sağlıyorum.',
    icon: <FiServer className="h-10 w-10" />,
    projects: projects.server
  },
  {
    id: 5,
    title: 'Yapay Zeka & AI Agent Sistemleri',
    description: 'Yapay zeka çözümleri, chatbot geliştirme ve işlerinizi otomatikleştirmek için AI agent sistemleri. Müşteri hizmetleri, veri analizi ve karar destek sistemleri için AI çözümleri sunuyorum.',
    icon: <FiCpu className="h-10 w-10" />,
    projects: projects.ai
  },
  {
    id: 6,
    title: 'Shopify & Pazaryeri Yönetimi',
    description: 'Shopify mağazaları ve çeşitli pazaryerlerinde ürünlerinizin yönetimi için profesyonel destek. Trendyol, Amazon, Hepsiburada gibi platformlarda satış stratejileri geliştiriyorum.',
    icon: <SiShopify className="h-10 w-10" />,
    projects: projects.marketplace
  },
]

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (service: typeof services[0]) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <section id="hizmetler" className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Hizmetlerim
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Dijital dünyadaki ihtiyaçlarınız için profesyonel çözümler sunuyorum.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => openModal(service)}
              >
                <div className="text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description.substring(0, 100)}...</p>
                <button 
                  className="mt-4 text-primary font-medium hover:underline focus:outline-none"
                  onClick={() => openModal(service)}
                >
                  Detayları Gör
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        service={selectedService}
      />
    </>
  )
}

export default Services 