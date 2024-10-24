export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Mehmet Cengiz GÜLEÇ',
    subtitle: 'Psikanalist M. Cengiz Güleç',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Ana Sayfa',
            href: '/cengizhoca/'
        },
        {
            text: 'Hakkında',
            href: '/cengizhoca/about'
        },
        {
            text: 'Yazılar',
            href: '/cengizhoca/blog'
        },
        {
            text: 'Başlıklar',
            href: '/cengizhoca/tags'
        },
        {
            text: 'Kitaplar',
            href: '/cengizhoca/contact'
        },
        {
            text: 'Videolar',
            href: '/cengizhoca/terms'
        },
        {
            text: 'İletişim',
            href: '/cengizhoca/contact'
        }
    ],
    footerNavLinks: [
    ],
    socialLinks: [
    ],
    hero: {
        title: '',
        text: "1948 yılında Sivas Şarkışla’da doğdu.İlkokulu burada bitirdi.Orta öğrenimini İstanbul Kabataş Erkek Lisesi’nde tamamladı. 1964 yılında Hacettepe Üniversitesi Tıp Fakültesine girdi ve 1972 yılında mezun oldu. Aynı Fakültenin Psikiyatri bölümünde başladığı uzmanlık eğitimini 1976 yılında tamamladı.1976-78 yılları arasında,Fransız Hükümetinden burslu olarak Paris’e gitti. Paris V.Tıp Fakültesine bağlı Sainte-Anne Psikiyatri merkezinde Prof. Dr. Pierre Pichot’un servisinde, Adölesans psikiyatrisi üst ihtisas programını başarıyla tamamladı.",
        image: {
            src: '/cengizhoca/cengiz.jpg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'İletişim',
                href: '/cengizhoca/contact'
            }
        ]
    },
    subscribe: {
        title: 'Bülten Aboneliği',
        text: 'Cengiz Hocanın yeni yazılarından haberdar olmak için mail adresinizi kayıt edebilirsiniz.',
        formUrl: 'https://mehmetcengizgulec.com/'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
