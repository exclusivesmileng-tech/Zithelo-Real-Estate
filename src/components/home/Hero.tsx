"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const heroImages = [
  { src: "/images/6.png", alt: "Elegant architecture" },
  { src: "/images/4.png", alt: "Luxury living space" },
  { src: "/images/2.png", alt: "Premium Lagos residence" },
  { src: "/images/3.png", alt: "Modern apartment interior" },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Images */}
      <div 
        className="absolute inset-0"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: '1000px' }}
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              rotateX: mousePosition.y * 10,
              rotateY: mousePosition.x * 10,
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] },
              scale: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] },
              rotateX: { duration: 0.3, ease: "easeOut" },
              rotateY: { duration: 0.3, ease: "easeOut" }
            }}
            className="absolute inset-0"
            style={{ 
              transformStyle: 'preserve-3d',
              willChange: 'transform'
            }}
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
        
        {/* Vignette effect for premium feel */}
        <div className="absolute inset-0 z-10" style={{
          background: "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(26, 26, 26, 0.4) 100%)"
        }} />
        
        {/* Subtle animated grain texture */}
        <div className="absolute inset-0 opacity-[0.03] z-10 pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating particles for luxury ambiance */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[var(--color-teal)]/30 rounded-full"
            initial={{
              x: `${20 + i * 15}%`,
              y: "110%",
              opacity: 0,
            }}
            animate={{
              y: "-10%",
              opacity: [0, 0.6, 0.6, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Corner accent lines */}
      <div className="absolute top-8 left-8 w-20 h-20 z-20 pointer-events-none hidden md:block">
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[var(--color-teal)]/60 to-transparent origin-left"
        />
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[var(--color-teal)]/60 to-transparent origin-top"
        />
      </div>
      <div className="absolute bottom-8 right-8 w-20 h-20 z-20 pointer-events-none hidden md:block">
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-[var(--color-teal)]/60 to-transparent origin-right"
        />
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-[var(--color-teal)]/60 to-transparent origin-bottom"
        />
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

        {/* Premium Tagline with elegant styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-10 max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl text-white/90 font-light italic tracking-wide">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-[var(--color-teal)]"
            >
              &ldquo;
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              More Than a Home,{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-[var(--color-teal-light)] font-normal"
            >
              A Legacy
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-[var(--color-teal)]"
            >
              &rdquo;
            </motion.span>
          </p>
          
          {/* Subtitle */}
          <motion.div
            className="mt-6 text-center"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-lg md:text-2xl lg:text-3xl font-bold tracking-wider uppercase">
              {['Premium', 'real', 'estate', 'company'].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ 
                    opacity: { delay: 1 + i * 0.15, duration: 0.6 },
                    y: { delay: 1 + i * 0.15, duration: 0.6, type: "spring", stiffness: 100 },
                    scale: { delay: 1 + i * 0.15, duration: 0.6, type: "spring", stiffness: 100 },
                    backgroundPosition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 1 + i * 0.15
                    }
                  }}
                  className={
                    i === 2 || i === 3
                      ? "bg-gradient-to-r from-[var(--color-teal)] via-cyan-300 to-[var(--color-teal)] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(45,212,191,0.6)] bg-[length:200%_100%]"
                      : "bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent bg-[length:200%_100%]"
                  }
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-[var(--color-teal)]/60" />
          <div className="w-1.5 h-1.5 bg-[var(--color-teal)] rotate-45" />
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-[var(--color-teal)]/60" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-10"
        >
          <motion.button
            onClick={() => setIsContactOpen(true)}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center justify-center px-12 py-4 text-sm uppercase tracking-[0.2em] transition-all duration-500 bg-[var(--color-teal)] hover:bg-[var(--color-teal-dark)] text-[var(--color-navy-dark)] font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2 overflow-hidden"
          >
            {/* Button shine effect */}
            <span className="absolute inset-0 w-full h-full">
              <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-700 ease-out" />
            </span>
            <span className="relative">Contact Us</span>
          </motion.button>
        </motion.div>

        {/* Image Indicators - refined */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex justify-center items-center gap-3"
        >
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative transition-all duration-500 ${
                index === currentIndex 
                  ? "w-10 h-1" 
                  : "w-2 h-2 hover:w-3 hover:h-3"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className={`absolute inset-0 rounded-full transition-all duration-500 ${
                index === currentIndex 
                  ? "bg-[var(--color-teal)] rounded-sm" 
                  : "bg-white/30 hover:bg-white/60"
              }`} />
              {index === currentIndex && (
                <motion.span 
                  layoutId="activeIndicator"
                  className="absolute inset-0 rounded-sm ring-2 ring-[var(--color-teal)]/30 ring-offset-2 ring-offset-transparent"
                />
              )}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator - Premium */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.2 }}
          className="text-[10px] uppercase tracking-[0.3em] text-white/50"
        >
          Scroll
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-6 h-10 border border-[var(--color-teal)]/40 rounded-full flex justify-center pt-2"
        >
          <motion.div 
            animate={{ 
              y: [0, 12, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-[var(--color-teal)] rounded-full" 
          />
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-[var(--color-teal)]/5 blur-sm" />
        </motion.div>
      </motion.div>

      {/* Floating Image Thumbnails - Desktop Only with 3D Effect */}
      <div className="gallery-3d-container hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-20">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col gap-4"
        >
          {heroImages.slice(0, 4).map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`thumbnail-3d ${index === currentIndex ? 'active' : ''}`}
            >
              <div className="thumbnail-3d-image">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              
              {index !== currentIndex && (
                <div className="thumbnail-3d-overlay" />
              )}
              
              <div className="thumbnail-3d-shine" />
              
              {index === currentIndex && (
                <div className="thumbnail-3d-indicator" />
              )}
            </button>
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
