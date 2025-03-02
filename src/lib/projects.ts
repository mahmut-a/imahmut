// Proje türü tanımı
export type Project = {
  id: string
  title: string
  description: string
  technologies: string[]
  link?: string
  completionPercentage: number
  category: string
}

// Projeler veritabanı
const projects: Project[] = [
  {
    id: 'e-commerce-platform',
    title: 'E-Ticaret Platformu',
    description: 'Modern ve kullanıcı dostu bir e-ticaret platformu. Ürün yönetimi, sepet işlemleri ve ödeme entegrasyonları içerir.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Stripe'],
    completionPercentage: 100,
    category: 'webDev'
  },
  {
    id: 'corporate-website',
    title: 'Kurumsal Web Sitesi',
    description: 'SEO odaklı, hızlı ve duyarlı bir kurumsal web sitesi. İçerik yönetim sistemi ve blog özellikleri içerir.',
    technologies: ['HTML/CSS', 'JavaScript', 'PHP'],
    completionPercentage: 60,
    category: 'webDev'
  },
  {
    id: 'shopify-optimization',
    title: 'Shopify Mağaza Optimizasyonu',
    description: 'Mevcut bir Shopify mağazasının performans ve dönüşüm oranı optimizasyonu.',
    technologies: ['Shopify', 'Liquid', 'JavaScript'],
    completionPercentage: 90,
    category: 'ecommerce'
  },
  {
    id: 'woocommerce-integration',
    title: 'WooCommerce Entegrasyonu',
    description: 'WordPress tabanlı bir siteye WooCommerce entegrasyonu ve özel eklentiler.',
    technologies: ['WordPress', 'WooCommerce', 'PHP'],
    completionPercentage: 40,
    category: 'ecommerce'
  },
  {
    id: 'seo-optimization',
    title: 'SEO Optimizasyonu',
    description: 'Bir web sitesinin arama motoru sıralamasını iyileştirme ve organik trafiği artırma çalışması.',
    technologies: ['Google Analytics', 'SEO', 'İçerik Stratejisi'],
    completionPercentage: 85,
    category: 'seo'
  },
  {
    id: 'digital-marketing',
    title: 'Dijital Pazarlama Kampanyası',
    description: 'Kapsamlı bir dijital pazarlama kampanyası ile marka bilinirliğini artırma stratejisi.',
    technologies: ['Google Ads', 'Facebook Ads', 'Email Marketing'],
    completionPercentage: 30,
    category: 'seo'
  }
]

// Tüm projeleri getir
export function getAllProjects(): Project[] {
  return projects;
}

// ID'ye göre proje getir
export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

// Kategoriye göre projeleri getir
export function getProjectsByCategory(category: string): Project[] {
  return projects.filter(project => project.category === category);
}

// Proje linklerini yapım aşamasında sayfasına yönlendir
export function getProjectLink(project: Project): string {
  return `/yapim-asamasinda/${project.id}`;
} 