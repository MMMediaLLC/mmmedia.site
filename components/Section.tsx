import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { SectionData } from '../constants/sections';

interface SectionProps extends SectionData {
  isActive: boolean;
}

export const SectionBadge = ({ label }: { label: string; icon?: LucideIcon }) => (
  <div className="flex items-center mb-6 md:mb-10">
    <div className="flex items-center gap-3">
      <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
      <span className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] text-white/40 font-black uppercase">
        {label}
      </span>
    </div>
  </div>
);

export const BrandingSeal = () => (
  <span className="inline-block w-[0.14em] h-[0.14em] bg-primary rounded-full ml-[0.12em] mb-[0.04em] align-baseline shadow-[0_0_8px_rgba(59,130,246,1)] flex-shrink-0" />
);

const Section: React.FC<SectionProps> = ({ 
  isActive, 
  subtitle, 
  title, 
  content, 
  showButton, 
  buttonText, 
  backgroundImage,
  id 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isHero = id === 'hero';

  useEffect(() => {
    if (backgroundImage) {
      const img = new Image();
      img.src = backgroundImage;
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setIsLoaded(true);
    } else {
      setIsLoaded(true);
    }
  }, [backgroundImage]);

  return (
    <section 
      id={id} 
      className="relative h-[100dvh] w-full snap-child flex flex-col justify-center overflow-hidden bg-surface"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          {backgroundImage && isLoaded && (
            <motion.div 
              key={backgroundImage}
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 0.5 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.6]"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
          )}
        </AnimatePresence>

        <div className="absolute inset-0 z-[3] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-surface via-transparent to-surface opacity-90" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-surface via-surface/30 to-transparent" />
        </div>
      </div>
      
      <div className="relative z-10 px-6 md:px-20 lg:px-32 max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {subtitle && <div className="mb-1">{subtitle}</div>}
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-extrabold tracking-[-0.06em] mb-6 md:mb-10 text-white leading-[0.85] flex items-baseline">
            {title}<BrandingSeal />
          </h1>
          
          {content && (
            <p className="text-[15px] md:text-lg lg:text-xl text-white/60 max-w-2xl leading-[1.6] mb-8 md:mb-14 font-medium tracking-tight">
              {content}
            </p>
          )}

          {showButton && (
            <motion.a 
              href="mailto:contact@mmmedia.site"
              whileTap={{ scale: 0.98 }}
              className="group bg-primary text-white font-bold py-4 px-10 md:py-6 md:px-16 rounded-xl flex items-center justify-center gap-5 transition-all w-fit cursor-pointer border border-primary/20"
            >
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-black">{buttonText}</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          )}
        </motion.div>
      </div>

      {isHero && (
        <div className="absolute bottom-10 left-6 md:left-20 lg:left-32 flex flex-col items-center gap-3 opacity-80">
          <span className="font-mono text-[8px] tracking-[0.6em] uppercase font-black text-white/50">SCROLL</span>
          <div className="relative w-[1px] h-12 overflow-hidden bg-white/10 rounded-full">
            <motion.div 
              animate={{ 
                y: ["-100%", "100%"],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute top-0 left-0 w-full h-1/2 bg-primary shadow-[0_0_8px_rgba(59,130,246,0.8)]"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Section;