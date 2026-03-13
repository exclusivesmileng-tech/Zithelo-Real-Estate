"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const heroImages = [
  { src: "/images/6.jpeg", alt: "Elegant architecture" },
  { src: "/images/6.jpeg", alt: "Elegant architecture" },
  { src: "/images/2.jpeg", alt: "Premium Lagos residence" },
  { src: "/images/3.jpeg", alt: "Modern apartment interior" },
  { src: "/images/4.jpeg", alt: "Luxury living space" },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 overflow-hidden"
        >
          <motion.p
            animate={{ 
              textShadow: [
                "0 0 4px rgba(62, 207, 165, 0.3)",
                "0 0 20px rgba(62, 207, 165, 0.6)",
                "0 0 4px rgba(62, 207, 165, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-sm md:text-base uppercase tracking-[0.3em] text-[var(--color-teal)] inline-flex"
          >
            {"Coming Soon".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className={char === " " ? "w-2" : ""}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight"
        >
          Welcome to
          <br />
          Zithelo Homes
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-8 text-lg md:text-xl text-[var(--color-teal-light)] max-w-2xl mx-auto"
        >
          Premium residences in prime Lagos locations
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-12"
        >
          <button
            onClick={() => setIsContactOpen(true)}
            className="inline-flex items-center justify-center px-10 py-4 text-sm tracking-wide transition-all duration-300 bg-[var(--color-teal)] hover:bg-[var(--color-teal-dark)] text-[var(--color-navy-dark)] font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
          >
            Contact Us
          </button>
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

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setIsContactOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[var(--color-navy-dark)]/80 backdrop-blur-sm" />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative bg-white max-w-md w-full p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsContactOpen(false)}
                className="absolute top-4 right-4 p-2 text-[var(--color-charcoal-light)] hover:text-[var(--color-charcoal)] transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="text-center mb-8">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] mb-2">Get in Touch</p>
                <h3 className="font-serif text-2xl text-[var(--color-navy)]">Contact Us</h3>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                {/* Address */}
                <a 
                  href="https://maps.google.com/?q=12B+Agoro+Odiyan+Street+Off+Adeola+Odeku+Victoria+Island+Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-[var(--color-stone)] hover:bg-[var(--color-warm-gray)] transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--color-teal)] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[var(--color-charcoal-light)] mb-1">Address</p>
                    <p className="text-[var(--color-charcoal)] leading-relaxed">
                      12B Agoro Odiyan Street,<br />
                      Off Adeola Odeku,<br />
                      Victoria Island, Lagos
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href="tel:+2349110222323"
                  className="flex items-start gap-4 p-4 bg-[var(--color-stone)] hover:bg-[var(--color-warm-gray)] transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--color-teal)] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[var(--color-charcoal-light)] mb-1">Phone</p>
                    <p className="text-[var(--color-charcoal)]">0911 022 2323</p>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href="mailto:info@zithelorealestate.com"
                  className="flex items-start gap-4 p-4 bg-[var(--color-stone)] hover:bg-[var(--color-warm-gray)] transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--color-teal)] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[var(--color-charcoal-light)] mb-1">Email</p>
                    <p className="text-[var(--color-charcoal)]">info@zithelorealestate.com</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
