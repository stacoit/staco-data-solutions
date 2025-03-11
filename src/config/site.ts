
import InsightsIcon from '@/assets/home/insights_icon.svg';
import RoboIcon from '@/assets/home/robo_icon.svg';
import B2BIcon from '@/assets/service/b2b_icon.svg';
import DataIcon from '@/assets/service/data_icon.svg';
import AIIcon from '@/assets/service/ai_icon.svg';
import DatabaseIcon from '@/assets/service/database_icon.svg';
import LeadIcon from '@/assets/service/lead_icon.svg';
import MarketingIcon from '@/assets/service/marketing_icon.svg';
import TickIcon from '@/assets/service/tick.svg';

type SiteConfig = {
  navigation: {
    name: string
    href: string
  }[]
}

const siteConfig: SiteConfig = {
  navigation: [
    { name: 'Home', href: '/home' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ],
}

const homeContent = {
  hero: {
    title: 'Your Data, Our Vision Unlock Boundless Possibilities with Staco.',
    subtitle: '“Explore new horizons. Empower your future with data.”',
    button: 'Unleash Data'
  },
  ourSolution: {
    title: 'Our Solution',
    description: 'For Your Business, Solutions with Multiple Facets',
    paragraph: 'At Staco, we offer a dynamic data platform that brings B2B data, processing, and analytics together under one roof. Whether you’re looking to increase sales, grow your business, or optimize lead generation, we have the right solution for you.',
    cards: [
      {
        id: "01",
        name: 'B2B Database Solutions',
        text: '"Targeted, customized, and validated lists designed to meet your specific needs delivering precision for impactful marketing."'
      },
      {
        id: "02",
        name: 'Data Processing Services',
        text: '"We provide clients accurate data with real-time processing, ensuring precision and empowering informed decisions."'
      },
      {
        id: "03",
        name: 'Executive Database',
        text: '"Precision-targeted contact records designed for reaching top executives and key decision-makers effectively."'
      }
    ]
  },
  whyChooseStaco: {
    title: 'Why Choose Staco?',
    description: 'Your Ultimate Marketing Advantage',
    paragraph: 'We help you reach your marketing goals with our dynamic, human-and-AI-powered marketing solutions. Staco customizes your B2B lists, appends data, and ensures everything is accurate—making your campaigns more effective.',
    cards: [
      {
        id: 1,
        name: 'Data Dynamics',
        text: 'Real-time insights to fuel your business decisions.'
      },
      {
        id: 2,
        name: 'Global Reach',
        text: 'Connect with professionals and businesses worldwide.'
      },
      {
        id: 3,
        name: 'Unmatched Accuracy',
        text: 'Generated 98 million leads with targeted precision.'
      }
    ]
  },
  ourStrategy: {
    title: 'Our Strategy',
    description: 'A Proven Approach for Maximum Impact',
    paragraph: 'Staco’s strategy integrates human insight with advanced AI tools to provide actionable data solutions that drive growth. We’ve redefined account-based sales, ensuring the right message reaches the right people at the right time.',
    cards: [
      {
        id: 1,
        name: 'Tailored Data',
        text: '"Effortlessly customize and optimize your data to deliver a uniquely tailored, highly personalized, and strategic approach that meets your specific goals and drives impactful results."'
      },
      {
        id: 2,
        name: 'Lead Management',
        text: '"Significantly increase your ROI with highly optimized lead management systems that streamline processes, enhance efficiency, and drive sustainable business growth through smarter, data-driven strategies."'
      },
      {
        id: 3,
        name: 'Continuous Improvement',
        text: '"Our advanced data solutions adapt and evolve alongside your growing business needs, ensuring seamless scalability, enhanced performance, and continuous support for your success."'
      }
    ]
  },
  leadGeneration: {
    title: 'Lead Generation Success',
    description: 'Power Your Sales Funnel with Precision.',
    paragraph: 'Boost your sales funnel with 98 million leads, 655K company profiles, and 545K emails. Our platform empowers you to create sales pipelines that convert, ensuring consistent business growth.',
    cards: [
      {
        id: 1,
        name: 'Lead Generation',
        text: 'Efficient and accurate leads for precise targeting.'
      },
      {
        id: 2,
        name: 'Increased Engagement',
        text: 'Connect faster with potential clients and partners.'
      },
      {
        id: 3,
        name: 'Maximized ROI',
        text: 'Multiply your revenue with data-backed lead strategies.'
      }
    ]
  },
  clientResults: {
    title: 'Client Results',
    description: 'Our Clients’ Success Speaks for Itself',
    paragraph: 'We’ve helped businesses worldwide increase their sales and grow exponentially. With Staco, your marketing goals become reality.',
    cards: [
      {
        id: '784+',
        name: 'New Customers',
        text: 'In the last 7 days, our clients have gained significant traction.'
      },
      {
        id: '3X',
        name: 'Business Growth',
        text: 'Maximize your leads and drive consistent sales growth.'
      },
      {
        id: 'Top',
        name: 'Conversion Rates',
        text: 'Leverage our platform for the best marketing ROI in the industry.'
      }
    ]
  },
  ourCommunity: {
    title: 'Our Community',
    description: 'Join Over 5,000 Global Leaders',
    paragraph: 'Thousands of professionals rely on Staco to fuel their marketing and sales efforts. Hear from our satisfied clients about how Staco transformed their business with data-driven solutions.',
    cards: [
      {
        id: 1,
        review: '"Staco helped us triple our leads in just 6 months!"',
        name: 'Global Retailer',
        rating: 5
      },
      {
        id: 2,
        review: '"Staco’s data solutions revolutionized our marketing efforts. We saw a 4X increase in qualified leads in just 90 days."',
        name: 'Tech Startup, USA',
        rating: 4.5
      },
      {
        id: 3,
        review: '"The data provided by Staco helped us identify untapped markets and create a more effective sales strategy."',
        name: 'VP of Sales, Healthcare Provider',
        rating: 4
      },
      {
        id: 4,
        review: '"Staco’s solutions have given us a competitive edge. We’re now able to approach key decision-makers with the right message"',
        name: 'Founder & CEO, Global Consulting Firm',
        rating: 5
      }
    ]
  },
  dataInsights: {
    title: 'Data Insights',
    description: 'Technology Insights That Drive Results',
    paragraph: 'Harness the power of actionable insights from our executive database and global contacts. Connect with decision-makers across industries to tailor your campaigns and improve response rates.',
    cards: [
      {
        id: 1,
        name: 'Data Analytics',
        text: 'Actionable insights that uncover trends and opportunities.',
        icon: InsightsIcon
      },
      {
        id: 2,
        name: 'AI-Driven',
        text: 'Technology-powered, data-driven marketing data solutions.',
        icon: RoboIcon
      },
    ]
  },
  faq: {
    title: 'Frequently Asked Questions',
    description: 'Everything You Need to Know Before Getting Started',
    paragraph: 'We understand that choosing the right data partner is crucial for your business success. Here are answers to the most common questions we receive.',
    cards: [
      {
        id: 1,
        question: 'How do you collect your database?',
        answer: 'Our data is sourced from trusted, verified sources, including publicly available records, industry reports, and partnerships with reliable data providers. We ensure accuracy through rigorous validation processes.'
      },
      {
        id: 2,
        question: 'Is the data GDPR compliant?',
        answer: 'Yes, all of our data is fully GDPR-compliant. We prioritize privacy and security by adhering to strict data protection regulations, ensuring that all information is ethically sourced and handled responsibly.'
      },
      {
        id: 3,
        question: 'Can I customize my data?',
        answer: 'Absolutely! We offer tailored data solutions to match your specific requirements. Whether you need data filtering, segmentation, or custom datasets, we can provide a solution that fits your business needs.'
      },
      {
        id: 4,
        question: 'How do I get started with Staco?',
        answer: 'Getting started is easy! Simply reach out to our team or sign up on our platform to explore our data solutions. We’ll guide you through the process, helping you find the right data package to meet your goals.'
      },
    ]
  },
  advantage: {
    title: 'The Staco Advantage',
    description: 'Committed to Top Quality and Results',
    paragraph: 'Staco’s advanced data platform delivers results with precision. With our multi-faceted solutions, we guarantee increased revenue returns and faster decision-making for your business.',
  },
};

const aboutContent = {
  hero: {
    title: 'Empowering Businesses Through Data',
    subtitle: 'Turning information into innovation, growth, and success.',
    description: 'At Staco Data Solutions, we are passionate about transforming data into actionable insights that empower businesses worldwide. With cutting-edge tools and a relentless focus on accuracy, we are here to unlock the potential of your data and fuel your success.'
  },
  mission: {
    title: 'Our Mission',
    description: 'Revolutionizing Data for Business Growth',
    paragraph: 'At Staco, we aim to bridge the gap between data and opportunity. By providing innovative solutions, we empower businesses to achieve their goals, exceed expectations, and create sustainable growth.',
  },
  vision: {
    title: 'Our Vision',
    description: 'To Be the Gold Standard in Data Solutions',
    paragraph: 'We envision a future where businesses of all sizes harness the power of data to drive smarter decisions, create impactful strategies, and redefine success.',
  },
  journey: {
    title: 'Our Journey',
    description: 'From Start-Up to Global Partner',
    paragraph: 'Established in 2016, Staco has grown from a small data solutions firm to a global leader, trusted by thousands of businesses worldwide. Our relentless focus on precision, innovation, and customer satisfaction sets us apart in the industry.',
  },
  driveUs: [
    {
      id: 1,
      name: 'Innovation',
      text: 'Staying ahead with cutting-edge technology and solutions.'
    },
    {
      id: 2,
      name: 'Integrity',
      text: 'Building trust through transparency and ethical practices.'
    },
    {
      id: 3,
      name: 'Customer-Centricity',
      text: 'Putting your success at the heart of what we do.'
    },
    {
      id: 4,
      name: 'Excellence',
      text: 'Striving for the highest standards in all that we deliver.'
    }
  ],
  whyStaco: {
    title: 'Why Staco?',
    description: 'Why Choose Staco Data Solutions?',
    paragraph: 'Staco is more than a data solutions provider—we are your growth partner. From tailored B2B lists to AI-driven insights, we go beyond expectations to ensure your success in an ever-competitive marketplace.',
  },
  meetTheTeam: {
    title: 'Meet the Team',
    description: 'Meet the Minds Behind Staco',
    paragraph: 'Our team of data experts, AI specialists, and marketing strategists work together to deliver unparalleled solutions. With a shared passion for data-driven growth, we are committed to helping your business thrive.',
  },
  CTA: {
    title: 'Ready to Transform Your Business?',
    description: 'Join the thousands of businesses worldwide who trust Staco for their data and marketing needs.',
    button: 'Contact Us',
  },
};

const serviceContent = {
  hero: {
    title: 'Our Service',
    description: 'Transformative Data Solutions for Every Business Need',
    paragraph: 'Delivering precision, insights, and growth with a dynamic approach.',
  },
  cards: [
    {
      id: 1,
      name: 'B2B Database Solutions',
      text: 'Precision-targeted, customized B2B data that fuels your marketing efforts.',
      points: [
        'Customizable contact lists',
        'Verified and accurate data',
        'Enhanced marketing reach'
      ],
      icon: B2BIcon
    },
    {
      id: 2,
      name: 'Data Processing',
      text: 'Streamlined, real-time data processing to help you make smarter decisions faster.',
      points: [
        'Real-time data updates',
        'Seamless system integration',
        'Filters and customization'
      ],
      icon: DataIcon
    },
    {
      id: 3,
      name: 'Lead Generation',
      text: 'High-quality leads designed to increase conversions and accelerate growth.',
      points: [
        'Precision-targeted leads',
        'Increased engagement',
        'Optimized conversion rates'
      ],
      icon: LeadIcon
    },
    {
      id: 4,
      name: 'AI-Smarter Insights',
      text: 'Leverage AI to extract meaningful insights from your data, driving precision-targeted strategies.',
      points: [
        'Predictive analytics',
        'Advanced segmentation',
        'Enhanced decision-making'
      ],
      icon: AIIcon
    },
    {
      id: 5,
      name: 'Executive Database',
      text: 'Access comprehensive contact records of key decision-makers and executives.',
      points: [
        'Complete Contact Records',
        'Key Decision-Makers',
        'Executive Access'
      ],
      icon: DatabaseIcon
    },
    {
      id: 6,
      name: 'Marketing Insights',
      text: 'Data-driven strategies and insights to optimize your marketing campaigns and ROI.',
      points: [
        'Customized strategies',
        'Performance analysis',
        'Campaign optimization'
      ],
      icon: MarketingIcon
    }
  ],
  CTA: {
    title: 'Start Your Data Journey Today',
    description: 'Discover the difference Staco can make for your business. Whether you’re looking to boost sales, enhance marketing, or streamline operations, we’re here to help.',
    button: 'Get in Touch',
  },
  button: 'Learn More',
  tick: TickIcon
};

const contactContent = {
  hero: {
    title: 'Let’s Shape Your Success Together',
    description: 'Start the Conversation',
    paragraph: 'Whether you have questions, need assistance, or are ready to transform your business, we’re here to help.',
    button: 'Get in Touch'
  },
  form: {
    title: 'Start the Conversation',
    description: 'Ready to transform your business with data? We’re here to listen, understand, and provide tailored solutions for your marketing and sales growth. Share your details, and we’ll get back to you shortly.',
    label: {
      name: {
        name: 'Name',
        placeholder: 'eg : David'
      },
      Email: {
        name: 'Email',
        placeholder: 'eg : david123@gmail.com'
      },
      Message: {
        name: 'Message',
        placeholder: 'Tell us how can we help!'
      }
    }
  },
  mapSection: {
    title: 'Find Us Here',
    description: 'We are located in the heart of the city, next to the subway, and we are always happy to meet you!',
    address: '2712 County Line Road, St Petersburg, Florida USA 33701',
    phone: '+1 (555) 123-4567',
    email: 'contact@stacodatasolutions.com'
  },
};

const footerContent = {
  title: 'Staco Data Solutions',
  description: 'Unlocking the Power of Data for Your Business Growth',
  paragraph: 'Transform your business with cutting-edge data insights and innovative technology. We turn complex data into actionable strategies that drive growth, optimize operations, and fuel success.',
  links: {
    title: 'Quick Link',
    links: [
      {
        id: 1,
        name: 'Home',
        href: '/home'
      },
      {
        id: 2,
        name: 'About',
        href: '/about'
      },
      {
        id: 3,
        name: 'Services',
        href: '/services'
      },
      {
        id: 4,
        name: 'Contact',
        href: '/contact'
      }
    ]
  },
  services: {
    title: 'Services',
    service: [
      {
        id: 1,
        name: 'B2B Database',
        href: '/services'
      },
      {
        id: 2,
        name: 'Data Processing',
        href: '/services'
      },
      {
        id: 3,
        name: 'Lead Generation',
        href: '/services'
      },
      {
        id: 4,
        name: 'AI-Smarter Insights',
        href: '/services'
      },
      {
        id: 5,
        name: 'Executive Database',
        href: '/services'
      },
      {
        id: 6,
        name: 'Marketing Insights',
        href: '/services'
      },
    ]
  },
  contactUs: {
    title: 'Contact  with us',
    email: 'info@stacodatasolutions.com',
    phone: '+1 (555) 123-4567',
    address: '350 Holger Way, San Jose, CA 95134, USA',
  },
  copyright: '© 2016 Staco Data Solutions | All Rights Reserved'
}

export {
  siteConfig,
  homeContent,
  aboutContent,
  serviceContent,
  contactContent,
  footerContent
}