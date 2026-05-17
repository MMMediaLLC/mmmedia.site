import React from 'react';
import { SectionBadge } from '../components/Section';
import { Radio, Newspaper, Sparkles, Code2, Camera, Crosshair, LucideIcon } from "lucide-react";

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
      title: "М&М Медиа,",
      content: "Медиумски и технолошки партнер за развој на современи дигитални решенија. Градиме платформи, содржини и AI алатки со реална примена и долгорочна вредност.",
      showButton: true,
      buttonText: 'Започни проект',
      backgroundImage: '/slide-1.jpg'
    },
    {
      id: 'about',
      subtitle: <SectionBadge label="IDENTITY_ENGINE" />,
      title: 'За нас',
      content: 'M&M Media е медиумска и дигитална компанија, активна од 2016 година со седиште во Гостивар. Управува со сопствени информативни платформи и развива медиумски, веб и AI решенија со практична примена за современи дигитални потреби.',
      backgroundImage: '/slide-2.webp'
    },
    {
      id: 'expertise',
      title: 'Услуги и решенија',
      items: [
        {
          title: "Медиа",
          icon: Radio,
          description: "Јавно информирање засновано на веродостојност, јавен интерес и ефикасна масовна дистрибуција на содржини преку дигитални платформи и медиумски канали."
        },
        {
          title: "Новинарство",
          icon: Newspaper,
          description: "Професионално и одговорно известување, базирано на проверка на информации, борба против дезинформации и обуки за новинарство, медиумска и дигитална писменост."
        },
        {
          title: "AI решенија",
          icon: Sparkles,
          description: "Развој и имплементација на практични алатки базирани на вештачка интелигенција за автоматизација, оптимизација на процеси и зголемување на продуктивноста кај компании и организации."
        },
        {
          title: "Веб развој",
          icon: Code2,
          description: "Развој на функционални, скалабилни и одржливи веб платформи, медиумски системи и дигитални решенија прилагодени на реални потреби."
        },
        {
          title: "Фотографија",
          icon: Camera,
          description: "Професионални фото-репортажи и документарна фотографија, вклучувајќи работа во комплексни и чуствителни окружувања."
        },
        {
          title: "FPV дрон операции",
          icon: Crosshair,
          description: "Напредни FPV дрон услуги за fly-through снимки, воздушни инспекции, поддршка при пребарување и спасување, безбедносен надзор и новинарска документација."
        }
      ],
      backgroundImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80'
    },
    {
      id: 'contact',
      title: 'Контакт',
      backgroundImage: '/contact1-bg.webp'
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
      backgroundImage: '/slide-1.jpg'
    },
    {
      id: 'about',
      subtitle: <SectionBadge label="IDENTITY_ENGINE" />,
      title: 'About Us',
      content: 'M&M Media is a media and digital company active since 2016. We manage our own news platforms and develop web, technology, and AI solutions for media, businesses, and organizations.',
      backgroundImage: '/slide-2.webp'
    },
    {
      id: 'expertise',
      title: 'Services & Solutions',
      items: [
        {
          title: "Media",
          icon: Radio,
          description: "Public information based on credibility, public interest, and efficient mass distribution of content through digital platforms and media channels."
        },
        {
          title: "Journalism",
          icon: Newspaper,
          description: "Professional and responsible reporting based on fact-checking, combating disinformation, and training in journalism, media, and digital literacy."
        },
        {
          title: "AI Solutions",
          icon: Sparkles,
          description: "Development and implementation of practical AI-based tools for automation, process optimization, and increased productivity for companies and organizations."
        },
        {
          title: "Web Development",
          icon: Code2,
          description: "Development of functional, scalable, and sustainable web platforms, media systems, and digital solutions tailored to real needs."
        },
        {
          title: "Photography",
          icon: Camera,
          description: "Professional photo reports and documentary photography, including work in complex and sensitive environments."
        },
        {
          title: "FPV Drone Operations",
          icon: Crosshair,
          description: "Advanced FPV drone services for fly-through footage, aerial inspections, search and rescue support, security surveillance, and journalistic documentation."
        }
      ],
      backgroundImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80'
    },
    {
      id: 'contact',
      title: 'Contact',
      backgroundImage: '/contact1-bg.webp'
    },
  ]
};
