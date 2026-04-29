import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Language, ExpertiseItem } from "../constants/sections";
import { BrandingSeal, SectionBadge } from "./Section";

interface ExpertiseSectionProps {
  isActive: boolean;
  language: Language;
  title: string;
  items?: ExpertiseItem[];
  backgroundImage?: string;
}

const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ isActive, title, items = [], backgroundImage }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (backgroundImage) {
      const img = new Image();
      img.src = backgroundImage;
      img.onload = () => setIsLoaded(true);
    }
  }, [backgroundImage]);

  return (
    <section 
      id="expertise" 
      className="relative h-[100dvh] w-full snap-child flex flex-col justify-center overflow-hidden bg-[#020202]"
    >
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          {isLoaded && backgroundImage && isActive && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-0 bg-cover bg-center grayscale"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-[#020202]/80 to-[#020202] z-[2]" />
      </div>
      
      <div className="relative z-10 px-4 md:px-12 lg:px-20 max-w-6xl w-full mx-auto flex flex-col h-full justify-center py-2 md:py-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          <div className="mb-1 md:mb-3">
            <SectionBadge label="core_solutions" />
          </div>

          <h2 className="text-[8.5vw] xs:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold text-white tracking-tighter mb-3 md:mb-5 leading-[0.85] flex items-baseline whitespace-nowrap overflow-hidden text-ellipsis">
            {title}<BrandingSeal />
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-2.5">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative p-2.5 md:p-3.5 border border-white/5 hover:border-primary/40 transition-colors duration-300 bg-white/[0.02] rounded-lg md:rounded-xl flex flex-col overflow-hidden"
                >
                  <div className="flex items-center gap-2.5 mb-1.5 relative z-10">
                    <div className="p-1.5 rounded-md bg-white/[0.03] text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon size={14} />
                    </div>
                    <h3 className="text-[13px] md:text-sm lg:text-base font-bold tracking-tight text-white/90">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-white/40 group-hover:text-white/60 transition-colors text-[10px] md:text-[11px] lg:text-[12px] leading-snug md:leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;