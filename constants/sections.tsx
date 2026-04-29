import React from 'react';
import { SectionBadge } from '../components/Section';
import { Radio, Newspaper, Sparkles, Code2, Camera, LucideIcon } from "lucide-react";

export type Language = 'mk' | 'en';

export interface ExpertiseItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SectionData {
  id: string;
  subtitle?: React.ReactNode;
  title: string;
  content?: string;
  showButton?: boolean;
  buttonText?: string;
  backgroundImage?: string;
  items?: ExpertiseItem[];
}

export const sections: Record<Language, SectionData[]> = {
  mk: [
    { 
      id: 'hero', 
      subtitle: <SectionBadge label="SINCE 2016" />,
      title: "М&М Медиа",
      content: "Медиумски и технолошки партнер за одржлив дигитален развој. Градиме решенија кои инспирираат и траат.",
      showButton: true,
      buttonText: 'Започнете проект',
      backgroundImage: 'https://storage.googleapis.com/mmmedia-assets/Slide%201.jpg'
    },
    { 
      id: 'about', 
      subtitle: <SectionBadge label="IDENTITY_ENGINE" />,
      title: 'За Нас', 
      content: 'М&М Медиа е медиумска и дигитална компанија со седиште во Гостивар, активна од 2016 година. Управуваме со сопствени информативни платформи и развиваме дигитални, технолошки и AI решенија за медиуми, институции и компании.',
      backgroundImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=80'
    },
    { 
      id: 'expertise', 
      title: 'Сервиси и решенија',
      items: [
        { 
          title: "Медиуми", 
          icon: Radio,
          description: "Јавно информирање засновано на кредибилитет и јавен интерес, со масовен досег и ефикасна дистрибуција на содржини преку дигитални платформи и медиумски канали." 
        },
        { 
          title: "Новинарство", 
          icon: Newspaper,
          description: "Професионално и одговорно известување врз основа на проверени информации, борба против дезинформации, јакнење на јавната одговорност и спроведување обуки за новинарство и дигитална писменост." 
        },
        { 
          title: "AI решенија", 
          icon: Sparkles,
          description: "Имплементација на напредни технологии базирани на вештачка интелигенција и развој на практични AI алатки за компании и бизниси, насочени кон автоматизација, оптимизација и зголемување на продуктивноста." 
        },
        { 
          title: "Веб развој", 
          icon: Code2,
          description: "Развој на функционални, скалабилни и одржливи веб платформи и медиумски системи, прилагодени на реални деловни, информативни и комуникациски потреби." 
        },
        { 
          title: "Фотографија", 
          icon: Camera,
          description: "Професионални фоторепортажи и документарна фотографија, вклучително и работа во сложени и чувствителни опкружувања." 
        }
      ],
      backgroundImage: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1920&q=80'
    },
    { 
      id: 'contact', 
      title: 'Контакт',
      backgroundImage: 'https://storage.googleapis.com/mmmedia-assets/contact1-bg.webp'
    },
  ],
  en: [
    { 
      id: 'hero', 
      subtitle: <SectionBadge label="SINCE 2016" />,
      title: "M&M Media",
      content: "Media and technology partner for sustainable digital growth. We build solutions that inspire and last.",
      showButton: true,
      buttonText: 'Start project',
      backgroundImage: 'https://storage.googleapis.com/mmmedia-assets/Slide%201.jpg'
    },
    { 
      id: 'about', 
      subtitle: <SectionBadge label="IDENTITY_ENGINE" />,
      title: 'About Us', 
      content: 'M&M Media is a media and digital company based in Gostivar, active since 2016. We manage our own news platforms and develop digital, technology, and AI solutions.',
      backgroundImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=80'
    },
    { 
      id: 'expertise', 
      title: 'Services & Solutions',
      items: [
        { 
          title: "Media", 
          icon: Radio,
          description: "Public information based on credibility and public interest, with mass reach and efficient content distribution through digital platforms and media channels." 
        },
        { 
          title: "Journalism", 
          icon: Newspaper,
          description: "Professional and responsible reporting based on verified information, fighting disinformation, strengthening public accountability, and conducting training for journalism and digital literacy." 
        },
        { 
          title: "AI Solutions", 
          icon: Sparkles,
          description: "Implementation of advanced technologies based on artificial intelligence and development of practical AI tools for companies and businesses, aimed at automation, optimization, and increasing productivity." 
        },
        { 
          title: "Web Development", 
          icon: Code2,
          description: "Development of functional, scalable, and sustainable web platforms and media systems, tailored to real business, informational, and communication needs." 
        },
        { 
          title: "Photography", 
          icon: Camera,
          description: "Professional photo-essays and documentary photography, including work in complex and sensitive environments." 
        }
      ],
      backgroundImage: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1920&q=80'
    },
    { 
      id: 'contact', 
      title: 'Contact',
      backgroundImage: 'https://storage.googleapis.com/mmmedia-assets/contact1-bg.webp'
    },
  ]
};