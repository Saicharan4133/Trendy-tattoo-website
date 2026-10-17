// Central source of truth for Trendy Tattoo & Piercing Studio content.
export const siteConfig = {
  name: 'Trendy Tattoo & Piercing Studio',
  seoName: 'Trendy Tattoo & Piercing Studio',
  shortName: 'TRENDY TATTOO',
  tagline: 'INK YOUR STORY',
  description: 'Trendy Tattoo & Piercing Studio in Vijayawada, led by artist Sai Teja with 10+ years of experience.',
  url: 'https://trendy-tattoo-studio.vercel.app',
  city: 'Vijayawada',
  state: 'Andhra Pradesh',
  country: 'India',
  countryCode: 'IN',
  areaServed: ['Vijayawada', 'Andhra Pradesh'],
  phone: '+91 95425 46806',
  phoneHref: 'tel:+919542546806',
  phone2: '',
  phoneHref2: '',
  whatsappNumber: '919542546806',
  whatsappMessage: "Hi, I'd like to book an appointment at Trendy Tattoo & Piercing Studio.",
  instagramHandle: '@tej_tattooist__',
  instagramUrl: 'https://www.instagram.com/tej_tattooist__/',
  googleBusinessProfileUrl: 'https://www.google.com/maps/place/Trendy+Tattoo+%26+Piercing+Studio/',
  founder: { name: 'Sai Teja', role: 'Owner & lead artist', mainImage: '/images/trendy/about us/owner1.webp', secondaryImage: '/images/trendy/about us/owner2.webp' },
  logoImage: '/images/logo.webp',
  movedLogoImage: '/images/logo.webp',
  shareImage: '/images/trendy/hero image/home hero image.webp',
  heroImages: {
    home: '/images/trendy/hero image/home hero image.webp',
    services: '/images/trendy/hero image/services hero image.webp',
    gallery: '/images/trendy/hero image/gallery hero image.webp',
    about: '/images/trendy/hero image/about us hero image.webp',
    contact: '/images/trendy/hero image/contact us hero image.webp',
  },
  heroImageDimensions: {
    home: { width: 640, height: 853 }, services: { width: 640, height: 853 }, gallery: { width: 640, height: 853 }, about: { width: 640, height: 853 }, contact: { width: 640, height: 853 },
  },
  homeSupportLine: 'Custom tattoos, piercing, tattoo removal and cover-up, permanent makeup, and scar camouflage in Vijayawada.',
  contact: {
    email: 'ajjadasai26@gmail.com',
    emailjs: {
      serviceId: 'service_so0e9dn',
      templateId: 'template_coiofvh',
      publicKey: 'RJZYPHqF3kJENRquj',
    },
  },
  analytics: { googleTagManagerId: '' },
  locations: [{
    slug: 'vijayawada', label: 'VIJAYAWADA STUDIO', name: 'Trendy Tattoo & Piercing Studio', neighborhood: 'Bhavanipuram', landmark: 'Swathi Theater',
    line1: 'Swathi Theater, Old Police Station Rd', line2: 'HP Colony, Bhavanipuram', line3: 'Vijayawada, Andhra Pradesh 520012', line4: 'India', postalCode: '520012',
    fullAddress: 'Vijayawada Bhavanipuram Swathi Theater, Old Police Station Rd, HP Colony, Vijayawada, Andhra Pradesh 520012',
    mapsEmbedUrl: 'https://www.google.com/maps?q=Trendy+Tattoo+%26+Piercing+Studio,+Swathi+Theater,+Old+Police+Station+Rd,+Vijayawada,+Andhra+Pradesh+520012&output=embed', mapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Trendy+Tattoo+%26+Piercing+Studio,+Swathi+Theater,+Old+Police+Station+Rd,+HP+Colony,+Vijayawada,+Andhra+Pradesh+520012',
    geo: null as { latitude: number; longitude: number } | null, hours: '9:30 AM to 10:00 PM', openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '09:30', closes: '22:00' }], googleBusinessProfileUrl: 'https://www.google.com/maps/place/Trendy+Tattoo+%26+Piercing+Studio/',
  }],
  services: [
    { number: '01', slug: 'permanent-tattoo', title: 'PERMANENT TATTOO', displayTitle: 'Permanent Tattoo', seoTitle: 'Permanent Tattoo in Vijayawada | Trendy Tattoo & Piercing Studio', seoDescription: 'Custom permanent tattoos in Vijayawada by Sai Teja.', description: 'Custom tattoo designs created around your idea, preferred style and placement.', extra: null, image: '/images/trendy/home/permanent tattoo featured image.webp', gallery: ['/images/trendy/services/Permanent Tattoo/img1.webp','/images/trendy/services/Permanent Tattoo/img2.webp','/images/trendy/services/Permanent Tattoo/img4.webp','/images/trendy/services/Permanent Tattoo/img6.webp','/images/trendy/services/Permanent Tattoo/img7.webp','/images/trendy/services/Permanent Tattoo/img8.webp'], galleryThumbnails: ['/images/trendy/services/Permanent Tattoo/img1.webp','/images/trendy/services/Permanent Tattoo/img2.webp'] },
    { number: '02', slug: 'piercing', title: 'PIERCING', displayTitle: 'Piercing', seoTitle: 'Piercing in Vijayawada | Trendy Tattoo & Piercing Studio', seoDescription: 'Professional piercing enquiries in Vijayawada.', description: 'Thoughtful piercing placement and jewellery discussions with clear aftercare guidance.', extra: null, image: '/images/trendy/home/piercing featured image.webp', gallery: ['/images/trendy/services/piercing/img1.webp','/images/trendy/services/piercing/img2.webp','/images/trendy/services/piercing/img3.webp','/images/trendy/services/piercing/img10.webp'], galleryThumbnails: ['/images/trendy/services/piercing/img1.webp','/images/trendy/services/piercing/img2.webp'] },
    { number: '03', slug: 'tattoo-removal-cover-up', title: 'TATTOO REMOVAL & COVER-UP', displayTitle: 'Tattoo Removal & Cover-up', seoTitle: 'Tattoo Removal & Cover-up in Vijayawada | Trendy Tattoo & Piercing Studio', seoDescription: 'Discuss tattoo removal and cover-up options with Trendy Tattoo & Piercing Studio.', description: 'Individual consultations for tattoo removal questions and cover-up design possibilities.', extra: 'Suitability and expectations are discussed individually during consultation.', image: '/images/trendy/home/tattoo removal and coverup featured image.webp', gallery: ['/images/services/tattoo-removal/tattoo-removal-1.webp','/images/services/tattoo-removal/tattoo-removal-2.webp','/images/services/tattoo-removal/tattoo-removal-3.webp','/images/services/tattoo-removal/tattoo-removal-4.webp','/images/services/tattoo-removal/tattoo-removal-5.webp','/images/services/tattoo-removal/tattoo-removal-6.webp','/images/services/tattoo-removal/tattoo-removal-7.webp','/images/services/scar-coverup/scar-coverup-1.webp','/images/services/scar-coverup/scar-coverup-2.webp','/images/services/scar-coverup/scar-coverup-3.webp','/images/services/scar-coverup/scar-coverup-4.webp','/images/services/scar-coverup/scar-coverup-5.webp','/images/services/scar-coverup/scar-coverup-6.webp'], galleryThumbnails: ['/images/services/thumbnails/tattoo-removal-01.webp','/images/services/thumbnails/tattoo-removal-02.webp','/images/services/thumbnails/tattoo-removal-03.webp','/images/services/thumbnails/tattoo-removal-04.webp','/images/services/thumbnails/scar-coverup-01.webp','/images/services/thumbnails/scar-coverup-02.webp'] },
    { number: '04', slug: 'permanent-makeup', title: 'PERMANENT MAKEUP', displayTitle: 'Permanent Makeup', seoTitle: 'Permanent Makeup in Vijayawada | Trendy Tattoo & Piercing Studio', seoDescription: 'Permanent makeup enquiries in Vijayawada.', description: 'Permanent makeup consultations shaped around your preferred look and appointment goals.', extra: null, image: '/images/trendy/home/permanent makeup featured image.webp', gallery: ['/images/trendy/services/permanent makeup/4.webp','/images/trendy/services/permanent makeup/5.webp','/images/trendy/services/permanent makeup/6.webp'], galleryThumbnails: ['/images/trendy/services/permanent makeup/4.webp','/images/trendy/services/permanent makeup/5.webp'] },
    { number: '05', slug: 'scar-camouflage', title: 'SCAR CAMOUFLAGE', displayTitle: 'Scar Camouflage', seoTitle: 'Scar Camouflage in Vijayawada | Trendy Tattoo & Piercing Studio', seoDescription: 'Scar camouflage enquiries in Vijayawada.', description: 'A considered consultation for scar camouflage and individual design possibilities.', extra: 'Every scar is different. Suitability is discussed individually during consultation.', image: '/images/trendy/home/scar camouflage featured image.webp', gallery: ['/images/trendy/services/scar camouflage/1.webp','/images/trendy/services/scar camouflage/2.webp','/images/trendy/services/scar camouflage/3.webp'], galleryThumbnails: ['/images/trendy/services/scar camouflage/1.webp','/images/trendy/services/scar camouflage/2.webp'] },
  ],
  nav: [{ label: 'HOME', href: '/', number: '100' }, { label: 'SERVICES', href: '/services', number: '101' }, { label: 'GALLERY', href: '/gallery', number: '102' }, { label: 'ABOUT US', href: '/about-us', number: '103' }, { label: 'CONTACT', href: '/contact', number: '104' }],
  footerLinks: [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Permanent tattoo', href: '/services/permanent-tattoo' }, { label: 'Piercing', href: '/services/piercing' }, { label: 'Tattoo removal & cover-up', href: '/services/tattoo-removal-cover-up' }, { label: 'Permanent makeup', href: '/services/permanent-makeup' }, { label: 'Scar camouflage', href: '/services/scar-camouflage' }, { label: 'Gallery', href: '/gallery' }, { label: 'About Sai Teja', href: '/about-us' }, { label: 'FAQ', href: '/faq' }, { label: 'Tattoo aftercare', href: '/tattoo-aftercare' }, { label: 'Contact', href: '/contact' }],
  fixedSitemapDate: '2026-10-15',
} as const

export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString()
}

export function whatsappHref(message = siteConfig.whatsappMessage): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function studioEntityId(slug: string): string {
  return `${absoluteUrl(`/studios/${slug}`)}#studio`
}

const galleryFiles = ['1 (1).webp','1 (10).webp','1 (11).webp','1 (12).webp','1 (2).webp','1 (3).webp','1 (4).webp','1 (5).webp','1 (6).webp','1 (7).webp','1 (8).webp','1 (9).webp','100 (10).webp','100 (11).webp','100 (12).webp','100 (13).webp','100 (7).webp','100 (8).webp','100 (9).webp','200 (1).webp','200 (2).webp','200 (3).webp','200 (4).webp','300 (1).webp','300 (2).webp','300 (3).webp','300 (4).webp','300 (5).webp']
export const galleryImages = galleryFiles.map((file, index) => ({ id: index + 1, fullSrc: `/images/trendy/gallery/${file}`, src: `/images/trendy/gallery/${file}`, alt: `Portfolio work ${index + 1} — ${siteConfig.name}, ${siteConfig.city}.` }))
export const services = siteConfig.services
export const about = { name: siteConfig.founder.name.toUpperCase(), role: `${siteConfig.founder.role.toUpperCase()} · 10+ YEARS`, mainImage: siteConfig.founder.mainImage, secondaryImage: siteConfig.founder.secondaryImage } as const
