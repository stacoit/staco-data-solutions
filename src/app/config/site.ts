import { 
  Home,
  BookOpen,
  Users,
  Mail,
  type LucideIcon 
} from "lucide-react"

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
    linkedin: string
  }
  contact: {
    email: string
    phone: string
    address: string
  }
  navigation: {
    name: string
    href: string
    icon: LucideIcon
  }[]
  features: {
    name: string
    description: string
  }[]
}

export const siteConfig: SiteConfig = {
  name: 'Staco Data Solutions',
  description:
    'Transform your data into actionable insights with cutting-edge analytics and machine learning solutions.',
  url: 'https://stacodatasolutions.com',
  ogImage: 'https://stacodatasolutions.com/og.jpg',
  links: {
    twitter: 'https://twitter.com/stacodata',
    github: 'https://github.com/staco',
    linkedin: 'https://linkedin.com/company/staco-data-solutions',
  },
  contact: {
    email: 'contact@stacodatasolutions.com',
    phone: '+1 (555) 123-4567',
    address: '2712 County Line Road, St Petersburg, Florida USA 33701',
  },
  navigation: [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: BookOpen },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Mail },
  ],
  features: [
    {
      name: 'Data Analytics',
      description: 'Transform raw data into meaningful insights with our advanced analytics solutions.',
    },
    {
      name: 'Machine Learning',
      description: 'Leverage AI and ML to automate processes and make data-driven decisions.',
    },
    {
      name: 'Cloud Solutions',
      description: 'Secure and scalable cloud infrastructure for your data needs.',
    },
    {
      name: 'Data Security',
      description: 'Enterprise-grade security measures to protect your valuable data assets.',
    },
  ],
}
