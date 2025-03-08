import { FiCode, FiShoppingCart, FiSearch, FiServer, FiCpu, FiBarChart } from 'react-icons/fi'
import { SiShopify } from 'react-icons/si'

export type Project = {
  id: string
  title: string
  description: string
  technologies: string[]
  link?: string
  completionPercentage: number
  category: string
}

export type Service = {
  id: number
  title: string
  description: string
  icon: any
  projects: Project[]
}

// Proje kategorileri için tip tanımı
export type ProjectCategories = {
  webDev: Project[];
  ecommerce: Project[];
  seo: Project[];
  backend: Project[];
  ai: Project[];
  consulting: Project[];
}

// Proje verileri
export const projects: ProjectCategories = {
  webDev: [
    {
      id: 'product-panel',
      title: 'Modern Ürün Görüntüleme Paneli',
      description: 'E-ticaret siteleri için modern, kolay kullanımlı ve duyarlı bir ürün görüntüleme paneli geliştirdim.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
      completionPercentage: 45,
      category: 'webDev',
      link: 'https://product-panel-three.vercel.app/'
    },
    {
      id: 'e-commerce-platform',
      title: 'E-Ticaret Web Sitesi',
      description: 'Modern ve kullanıcı dostu bir e-ticaret platformu geliştirdim.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Stripe'],
      completionPercentage: 25,
      category: 'webDev',
    },
    {
      id: 'corporate-website',
      title: 'Kurumsal Web Sitesi',
      description: 'SEO odaklı, hızlı ve duyarlı bir kurumsal web sitesi tasarladım.',
      technologies: ['HTML/CSS', 'JavaScript', 'PHP'],
      completionPercentage: 60,
      category: 'webDev'
    }
  ],
  ecommerce: [
    {
      id: 'shopify-optimization',
      title: 'Shopify Mağaza Optimizasyonu',
      description: 'Mevcut bir Shopify mağazasını optimize ederek satışları %30 artırdım.',
      technologies: ['Shopify', 'Liquid', 'JavaScript'],
      completionPercentage: 90,
      category: 'ecommerce'
    },
    {
      id: 'woocommerce-integration',
      title: 'WooCommerce Entegrasyonu',
      description: 'WordPress tabanlı bir siteye WooCommerce entegrasyonu yaparak e-ticaret özelliği ekledim.',
      technologies: ['WordPress', 'WooCommerce', 'PHP'],
      completionPercentage: 40,
      category: 'ecommerce'
    }
  ],
  seo: [
    {
      id: 'seo-optimization',
      title: 'SEO Optimizasyonu',
      description: 'Bir web sitesinin arama motoru sıralamasını iyileştirerek organik trafiği %50 artırdım.',
      technologies: ['Google Analytics', 'SEO', 'İçerik Stratejisi'],
      completionPercentage: 85,
      category: 'seo'
    },
    {
      id: 'digital-marketing',
      title: 'Dijital Pazarlama Kampanyası',
      description: 'Kapsamlı bir dijital pazarlama kampanyası ile marka bilinirliğini artırdım.',
      technologies: ['Google Ads', 'Facebook Ads', 'E-posta Pazarlama'],
      completionPercentage: 30,
      category: 'seo'
    }
  ],
  backend: [
    {
      id: 'api-development',
      title: 'API Geliştirme',
      description: 'Yüksek performanslı ve ölçeklenebilir RESTful API hizmetleri geliştirdim.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Docker'],
      completionPercentage: 65,
      category: 'backend'
    },
    {
      id: 'database-optimization',
      title: 'Veritabanı Optimizasyonu',
      description: 'Karmaşık veritabanı yapılarını optimize ederek sistem performansını artırdım.',
      technologies: ['SQL', 'NoSQL', 'Veritabanı Tasarımı'],
      completionPercentage: 50,
      category: 'backend'
    }
  ],
  ai: [
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Entegrasyonu',
      description: 'Müşteri hizmetleri için yapay zeka destekli chatbot çözümü geliştirdim.',
      technologies: ['Python', 'NLP', 'Machine Learning', 'API Entegrasyonu'],
      completionPercentage: 70,
      category: 'ai'
    },
    {
      id: 'data-analysis',
      title: 'Veri Analizi Platformu',
      description: 'İşletme verilerini analiz eden ve öngörüler sunan bir platform geliştirdim.',
      technologies: ['Python', 'TensorFlow', 'Data Visualization'],
      completionPercentage: 45,
      category: 'ai'
    }
  ],
  consulting: [
    {
      id: 'it-infrastructure',
      title: 'IT Altyapı Danışmanlığı',
      description: 'Bir işletmenin IT altyapısını modernize ederek operasyonel verimliliği artırdım.',
      technologies: ['Sistem Mimarisi', 'Cloud Computing', 'Güvenlik'],
      completionPercentage: 95,
      category: 'consulting'
    },
    {
      id: 'digital-transformation',
      title: 'Dijital Dönüşüm Stratejisi',
      description: 'Bir şirketin dijital dönüşüm yol haritasını oluşturarak rekabet avantajı sağladım.',
      technologies: ['Dijital Strateji', 'İş Süreçleri', 'Teknoloji Entegrasyonu'],
      completionPercentage: 80,
      category: 'consulting'
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

// Tüm projeleri düz bir dizi olarak al
export function getAllProjectsFlat(): Project[] {
  return Object.values(projects).flat();
}

// ID'ye göre proje getir
export function getProjectById(id: string): Project | undefined {
  return getAllProjectsFlat().find(project => project.id === id);
}

// Kategoriye göre projeleri getir
export function getProjectsByCategory(category: string): Project[] {
  return projects[category as keyof ProjectCategories] || [];
}

// Proje linklerini yapım aşamasında sayfasına yönlendir
export function getProjectLink(project: Project): string {
  return project.link || `/yapim-asamasinda/${project.id}`;
}