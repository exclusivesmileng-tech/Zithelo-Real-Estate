"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const heroImages = [
  "/images/2.jpeg",
  "/images/3.jpeg",
  "/images/4.jpeg",
  "/images/5.jpeg",
  "/images/6.jpeg",
  "/images/7.jpeg",
  "/images/8.jpeg",
];

export default function ComingSoon() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#0a1628]">
      {/* Animated Background Images with Ken Burns effect */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            transition: { duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }
          }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1.2 }
          }}
          className="absolute inset-0"
        >
          <motion.div
            animate={{ scale: 1.08 }}
            transition={{ duration: 8, ease: "linear" }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentIndex]}
              alt="Zithelo Development"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      
      {/* Premium dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/90 via-[#1E3A5F]/70 to-[#0a1628]/85 z-10" />
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <div className="relative h-16 w-56 md:h-20 md:w-64">
            <Image
              src="/images/zithelo_logo.png"
              alt="Zithelo Real Estate Limited"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Divider Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#F5A623] to-transparent mb-12"
        />

        {/* Coming Soon Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-[#F5A623] text-xs md:text-sm tracking-[0.4em] uppercase mb-8"
        >
          Coming Soon
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-white text-center font-light"
        >
          <span className="block text-2xl md:text-3xl lg:text-4xl tracking-wide mb-3">
            Welcome to
          </span>
          <span className="block text-4xl md:text-6xl lg:text-7xl tracking-tight font-normal">
            Zithelo Homes
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-6 text-white/70 text-lg md:text-xl lg:text-2xl tracking-wide text-center italic"
        >
          More Than a Home, A Legacy.
        </motion.p>

        {/* Bottom Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-16 h-[1px] bg-white/20 mt-12"
        />

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-10 text-center space-y-3"
        >
          <p className="text-white/90 text-sm md:text-base font-medium">
            Zithelo Real Estate Limited
          </p>
          <p className="text-white/60 text-xs md:text-sm">
            12B Agoro Odiyan Street, Off Adeola Odeku
            <br />
            Victoria Island, Lagos
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-white/60 text-xs md:text-sm pt-2">
            <a href="tel:09110222323" className="hover:text-[#F5A623] transition-colors">
              📞 0911 022 2323
            </a>
            <a href="mailto:info@zithelorealestate.com" className="hover:text-[#F5A623] transition-colors">
              📧 info@zithelorealestate.com
            </a>
            <a href="https://www.zithelorealestate.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5A623] transition-colors">
              🌐 www.zithelorealestate.com
            </a>
          </div>
        </motion.div>
      </div>

      {/* Image Progress Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroImages.map((_, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
            onClick={() => setCurrentIndex(index)}
            className="group relative h-[3px] overflow-hidden"
            style={{ width: index === currentIndex ? 40 : 20 }}
            aria-label={`View image ${index + 1}`}
          >
            <div className="absolute inset-0 bg-white/20 rounded-full" />
            {index === currentIndex && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 6, ease: "linear" }}
                className="absolute inset-0 bg-[#F5A623] rounded-full origin-left"
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Corner Accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-white/10 z-20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-white/10 z-20" />
    </main>
  );
}
