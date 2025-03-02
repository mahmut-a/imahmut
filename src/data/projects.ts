import { FiCode, FiShoppingCart, FiSearch, FiServer, FiCpu, FiBarChart } from 'react-icons/fi'
import { SiShopify } from 'react-icons/si'

export type Project = {
  id: number
  title: string
  description: string
  technologies: string[]
  link?: string
}

export type Service = {
  id: number
  title: string
  description: string
  icon: any
  projects: Project[]
}

// Proje verileri
export const projects = {
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
    },
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
  backend: [
    {
      id: 1,
      title: 'API Geliştirme',
      description: 'Yüksek performanslı ve ölçeklenebilir RESTful API hizmetleri geliştirdim.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Docker'],
      link: 'https://api-demo.mahmut.dev'
    },
    {
      id: 2,
      title: 'Veritabanı Optimizasyonu',
      description: 'Karmaşık veritabanı yapılarını optimize ederek sistem performansını artırdım.',
      technologies: ['SQL', 'NoSQL', 'Veritabanı Tasarımı'],
      link: 'https://db-case.mahmut.dev'
    }
  ],
  ai: [
    {
      id: 1,
      title: 'AI Chatbot Entegrasyonu',
      description: 'Müşteri hizmetleri için yapay zeka destekli chatbot çözümü geliştirdim.',
      technologies: ['Python', 'NLP', 'Machine Learning', 'API Entegrasyonu'],
      link: 'https://ai-chatbot.mahmut.dev'
    },
    {
      id: 2,
      title: 'Veri Analizi Platformu',
      description: 'İşletme verilerini analiz eden ve öngörüler sunan bir platform geliştirdim.',
      technologies: ['Python', 'TensorFlow', 'Data Visualization'],
      link: 'https://data-analytics.mahmut.dev'
    }
  ],
  consulting: [
    {
      id: 1,
      title: 'IT Altyapı Danışmanlığı',
      description: 'Bir işletmenin IT altyapısını modernize ederek operasyonel verimliliği artırdım.',
      technologies: ['Sistem Mimarisi', 'Cloud Computing', 'Güvenlik'],
      link: 'https://it-consulting.mahmut.dev'
    },
    {
      id: 2,
      title: 'Dijital Dönüşüm Stratejisi',
      description: 'Bir şirketin dijital dönüşüm yol haritasını oluşturarak rekabet avantajı sağladım.',
      technologies: ['Dijital Strateji', 'İş Süreçleri', 'Teknoloji Entegrasyonu'],
      link: 'https://digital-transformation.mahmut.dev'
    }
  ]
}

// Servis verileri
export const services: Service[] = [
  {
    id: 1,
    title: 'Web Geliştirme',
    description: 'Modern, hızlı ve kullanıcı dostu web siteleri ve uygulamalar geliştiriyorum. SEO dostu ve mobil uyumlu tasarımlar ile dijital varlığınızı güçlendiriyorum.',
    icon: FiCode,
    projects: projects.webDev
  },
  {
    id: 2,
    title: 'E-Ticaret Çözümleri',
    description: 'Shopify, WooCommerce ve özel e-ticaret platformları ile işletmeniz için en uygun online satış çözümlerini sunuyorum. Ödeme sistemleri entegrasyonu ve kullanıcı deneyimi optimizasyonu yapıyorum.',
    icon: SiShopify,
    projects: projects.ecommerce
  },
  {
    id: 3,
    title: 'SEO & Dijital Pazarlama',
    description: 'Arama motoru optimizasyonu ve dijital pazarlama stratejileri ile web sitenizin görünürlüğünü artırıyorum. İçerik stratejisi, anahtar kelime analizi ve teknik SEO çalışmaları yapıyorum.',
    icon: FiSearch,
    projects: projects.seo
  },
  {
    id: 4,
    title: 'Backend & API Geliştirme',
    description: 'Güçlü ve ölçeklenebilir backend sistemleri ve API hizmetleri geliştiriyorum. Veritabanı tasarımı, sunucu yönetimi ve sistem entegrasyonları konusunda uzmanım.',
    icon: FiServer,
    projects: projects.backend
  },
  {
    id: 5,
    title: 'Yapay Zeka Çözümleri',
    description: 'Yapay zeka ve makine öğrenimi teknolojileri ile işletmeniz için akıllı çözümler geliştiriyorum. Chatbotlar, veri analizi ve otomasyon sistemleri ile operasyonel verimliliği artırıyorum.',
    icon: FiCpu,
    projects: projects.ai
  },
  {
    id: 6,
    title: 'IT Danışmanlığı',
    description: 'Teknoloji stratejisi, dijital dönüşüm ve IT altyapı danışmanlığı hizmetleri sunuyorum. İşletmenizin teknolojik ihtiyaçlarını analiz ederek en uygun çözümleri öneriyorum.',
    icon: FiBarChart,
    projects: projects.consulting
  }
] 