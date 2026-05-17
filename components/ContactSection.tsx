import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import type { Language } from '../constants/sections';
import { BrandingSeal, SectionBadge } from './Section';

interface ContactSectionProps {
  isActive: boolean;
  language: Language;
}

const contactData = {
  mk: {
    title: "Контакт",
    subtitle: "Готов ли сте за следната глава? Ние сме овде да ги превратиме вашите идеи во дигитална реалност. Дали имате добра идеја и волите да ја претворите во успешен производ? Ние сме тука за вас.",
    button: "Испрати порака",
    info: {
      email: "contact@mmmedia.site"
    }
  },
  en: {
    title: "Contact",
    subtitle: "Ready for the next chapter? We are here to turn your ideas into digital reality.",
    button: "Send message",
    info: {
      email: "contact@mmmedia.site"
    }
  }
};

const ScanningLine: React.FC<{ active: boolean }> = ({ active }) => (
  <AnimatePresence>
    {active && (
      <motion.div
        initial={{ top: "-5%" }}
        animate={{ top: "105%" }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute left-0 right-0 z-[4] pointer-events-none h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_10px_rgba(59,130,246,0.3)]"
      >
        <div className="absolute inset-0 bg-primary/10" />
      </motion.div>
    )}
  </AnimatePresence>
);

const ContactSection: React.FC<ContactSectionProps> = ({ isActive, language }) => {
  const data = contactData[language];
  const [isLoaded, setIsLoaded] = useState(false);
  const backgroundImage = 'https://storage.googleapis.com/mmmedia-assets/contact1-bg.webp';

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <section
      id="contact"
      className="relative h-[100dvh] w-full snap-child flex flex-col justify-center overflow-hidden bg-surface"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          {isLoaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 0.6 } : { opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.5]"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
          )}
        </AnimatePresence>

        <ScanningLine active={isActive} />

        <div className="absolute inset-0 z-[3] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-surface via-transparent to-surface opacity-95" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-surface via-surface/40 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 px-6 md:px-20 lg:px-32 max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4 }}
        >
          <div className="mb-2">
            <SectionBadge label="CONTACT_STATION" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-[-0.06em] mb-6 md:mb-10 text-white leading-[0.85] flex items-baseline">
            {data.title}<BrandingSeal />
          </h1>

          <p className="text-[15px] md:text-lg lg:text-xl text-white/60 max-w-2xl leading-[1.6] mb-8 md:mb-14 font-medium tracking-tight">
            {data.subtitle}
          </p>

          <motion.a
            href={`mailto:${data.info.email}`}
            whileTap={{ scale: 0.98 }}
            className="group bg-primary text-white font-bold py-5 px-10 md:py-6 md:px-16 rounded-xl flex items-center justify-center gap-5 transition-all w-fit cursor-pointer border border-primary/20"
          >
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-black">{data.button}</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>

      <footer className="absolute bottom-6 left-0 right-0 z-20 px-6 md:px-20 lg:px-32">
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
          <div className="opacity-[0.22]">
            <a href={`mailto:${data.info.email}`} className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <Mail size={8} />
              <span className="text-[7px] md:text-[8px] uppercase tracking-[0.4em] font-bold">{data.info.email}</span>
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
