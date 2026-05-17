import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './components/Section';
import ContactSection from './components/ContactSection';
import ExpertiseSection from './components/ExpertiseSection';
import Layout from './components/Layout';
import { sections, type Language } from './constants/sections';

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0);
  const [language, setLanguage] = useState<Language>('en');
  const [hoveredNav, setHoveredNav] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const currentSections = sections[language];

  useEffect(() => {
    document.documentElement.lang = language;

    const currentAbout = currentSections.find(s => s.id === 'about');
    const currentExpertise = currentSections.find(s => s.id === 'expertise');
    const expertiseTitles = currentExpertise?.items?.map(item => item.title).join(', ') || '';

    let title, description, keywords, ogTitle;

    if (language === 'mk') {
      title = 'M&M Media | Медиумски и дигитален партнер';
      description = `${currentAbout?.content} Сервиси: ${expertiseTitles}.`;
      keywords = `M&M Media, Гостивар, Gostivar, ${expertiseTitles}`;
      ogTitle = 'M&M Media | Дигитална извонредност';
    } else {
      title = 'M&M Media | Digital & Technology Partner';
      description = `${currentAbout?.content} Services: ${expertiseTitles}.`;
      keywords = `M&M Media, Gostivar, ${expertiseTitles}`;
      ogTitle = 'M&M Media | Digital Excellence';
    }

    document.title = title;

    const updateMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('og:title', ogTitle, true);
    updateMeta('og:description', description, true);
    updateMeta('og:locale', language === 'mk' ? 'mk_MK' : 'en_US', true);
  }, [language, currentSections]);

  useEffect(() => {
    const observerOptions = {
      root: containerRef.current,
      threshold: 0.6,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex((ref) => ref === entry.target);
          if (index !== -1) {
            setActiveSection(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });

    return () => {
      sectionRefs.current.forEach((ref) => { if (ref) observer.unobserve(ref); });
    };
  }, [language]);

  const handleNavClick = useCallback((index: number) => {
    const target = sectionRefs.current[index];
    if (target && containerRef.current) {
      containerRef.current.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'mk' ? 'en' : 'mk');
  }, []);

  const isAtTop = activeSection === 0;

  return (
    <Layout>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: isAtTop ? 'rgba(2, 2, 2, 0)' : 'rgba(2, 2, 2, 0.92)',
          backdropFilter: isAtTop ? 'blur(0px)' : 'blur(20px)',
          borderBottomColor: isAtTop ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0.06)',
          height: isAtTop ? '80px' : '64px'
        }}
        className="fixed top-0 left-0 right-0 z-[60] px-6 md:px-20 flex justify-between items-center transition-all duration-700 border-b"
      >
        <div className="flex-1 flex justify-start">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="px-4 py-1.5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-white/50 border border-white/10 rounded-lg hover:text-white hover:border-primary/50 transition-all font-mono"
            aria-label="Toggle language"
          >
            {language === 'mk' ? 'EN' : 'MK'}
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          className="flex-none text-center cursor-pointer px-4"
          onClick={() => handleNavClick(0)}
        >
          <span className="text-lg md:text-2xl font-heading font-black tracking-tighter text-white uppercase flex items-center gap-1">
            M&M <span className="text-primary">Media</span>
          </span>
        </motion.div>

        <div className="flex-1 flex justify-end" />
      </motion.header>

      <nav className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-8 z-50">
        <div className="absolute top-[-20px] bottom-[-20px] w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent -z-10" />

        {currentSections.map((_, index) => {
          const isActive = index === activeSection;
          const isHovered = hoveredNav === index;

          return (
            <div key={index} className="relative flex items-center justify-center">
              <button
                onClick={() => handleNavClick(index)}
                onMouseEnter={() => setHoveredNav(index)}
                onMouseLeave={() => setHoveredNav(null)}
                className="relative flex items-center justify-center group p-1"
                aria-label={`Navigate to section ${index + 1}`}
              >
                <motion.div
                  animate={{
                    height: isActive ? 32 : (isHovered ? 12 : 4),
                    width: 2,
                    backgroundColor: isActive ? '#3b82f6' : (isHovered ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.2)'),
                    boxShadow: isActive ? '0 0 15px rgba(59,130,246,0.8)' : 'none',
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="rounded-full relative z-10"
                />

                {isActive && (
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: [1, 2.5, 1], opacity: [0, 0.3, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute w-6 h-6 rounded-full bg-primary/20 -z-10"
                  />
                )}
              </button>
            </div>
          );
        })}
      </nav>

      <div ref={containerRef} className="snap-container no-scrollbar">
        {currentSections.map((section, index) => (
          <div
            key={`${section.id}-${language}`}
            ref={(el) => { sectionRefs.current[index] = el; }}
            className="snap-child"
          >
            {section.id === 'contact' ? (
              <ContactSection isActive={index === activeSection} language={language} />
            ) : section.id === 'expertise' ? (
              <ExpertiseSection {...section} isActive={index === activeSection} language={language} />
            ) : (
              <Section {...section} isActive={index === activeSection} />
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
}
