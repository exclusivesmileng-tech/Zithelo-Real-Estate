"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/Button";

const heroImages = [
  { src: "/images/2.jpeg", alt: "Premium Lagos residence" },
  { src: "/images/3.jpeg", alt: "Modern apartment interior" },
  { src: "/images/4.jpeg", alt: "Luxury living space" },
  { src: "/images/5.jpeg", alt: "Contemporary design" },
  { src: "/images/6.jpeg", alt: "Elegant architecture" },
  { src: "/images/7.jpeg", alt: "Premium finishes" },
  { src: "/images/8.jpeg", alt: "Sophisticated living" },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentIndex].src}
              alt={heroImages[currentIndex].alt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Premium overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-navy-dark)]/70 via-[var(--color-navy)]/50 to-[var(--color-navy-dark)]/80 z-10" />
        {/* Architectural texture overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('/images/hero-pattern.svg')] z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight"
        >
          Modern living,
          <br />
          thoughtfully developed
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-8 text-lg md:text-xl text-[var(--color-teal-light)] max-w-2xl mx-auto"
        >
          Premium residences in prime Lagos locations
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="/developments" variant="secondary">
            View Developments
          </Button>
          <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--color-navy)]">
            Request Information
          </Button>
        </motion.div>

        {/* Image Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex justify-center gap-2"
        >
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentIndex 
                  ? "w-8 bg-[var(--color-teal)]" 
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-[var(--color-teal)]/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[var(--color-teal)] rounded-full" />
        </motion.div>
      </motion.div>

      {/* Floating Image Thumbnails - Desktop Only */}
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-20">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col gap-3"
        >
          {heroImages.slice(0, 4).map((image, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex 
                  ? "border-[var(--color-teal)] shadow-lg shadow-[var(--color-teal)]/20" 
                  : "border-white/20 hover:border-white/50"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="64px"
              />
              {index !== currentIndex && (
                <div className="absolute inset-0 bg-[var(--color-navy-dark)]/50" />
              )}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
