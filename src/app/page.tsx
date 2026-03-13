"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
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

// Contact options for floating button
const contactOptions = [
  {
    id: "call",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Call Us",
    href: "tel:09110222323",
    color: "#F5A623",
  },
  {
    id: "whatsapp",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    label: "WhatsApp",
    href: "https://wa.me/2349110222323",
    color: "#25D366",
  },
  {
    id: "email",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    href: "mailto:info@zithelorealestate.com",
    color: "#F5A623",
  },
  {
    id: "location",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Location",
    href: "https://maps.google.com/?q=12B+Agoro+Odiyan+Street,+Victoria+Island,+Lagos",
    color: "#F5A623",
  },
];

// Floating Contact Button Component
function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Contact Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute bottom-16 right-0 mb-2"
          >
            <div className="flex flex-col gap-3 items-end">
              {contactOptions.map((option, index) => (
                <motion.a
                  key={option.id}
                  href={option.href}
                  target={option.id === "location" || option.id === "whatsapp" ? "_blank" : undefined}
                  rel={option.id === "location" || option.id === "whatsapp" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.8 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="flex items-center gap-3 group"
                  onClick={() => setIsOpen(false)}
                >
                  {/* Label */}
                  <motion.span
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 + index * 0.05 }}
                    className="bg-white/95 backdrop-blur-sm text-gray-800 text-sm font-medium px-4 py-2 rounded-full shadow-lg whitespace-nowrap"
                  >
                    {option.label}
                  </motion.span>
                  
                  {/* Icon Button */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300"
                    style={{ 
                      backgroundColor: option.color,
                      boxShadow: `0 4px 15px ${option.color}40`
                    }}
                  >
                    {option.icon}
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 3 }}
        className="w-14 h-14 rounded-full bg-[#F5A623] text-white flex items-center justify-center shadow-xl relative overflow-hidden group"
        style={{ boxShadow: '0 4px 20px rgba(245,166,35,0.4)' }}
      >
        {/* Pulsing ring */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full border-2 border-[#F5A623]"
        />
        
        {/* Icon */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </motion.div>
      </motion.button>
    </div>
  );
}

// Floating Particles Component
function FloatingParticles() {
  const particles = useMemo(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.4 + 0.1,
    })), []
  );

  return (
    <div className="absolute inset-0 z-15 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, rgba(245,166,35,${particle.opacity}) 0%, transparent 70%)`,
            boxShadow: `0 0 ${particle.size * 2}px rgba(245,166,35,${particle.opacity * 0.5})`,
          }}
          animate={{
            y: [0, -100, -200],
            x: [0, Math.random() * 50 - 25, Math.random() * 100 - 50],
            opacity: [0, particle.opacity, 0],
            scale: [0, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

// Character reveal animation for text
function AnimatedText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: delay + index * 0.03,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export default function ComingSoon() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  
  const rotateX = useTransform(y, [-0.5, 0.5], [2, -2]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-2, 2]);
  const translateX = useTransform(x, [-0.5, 0.5], [-15, 15]);
  const translateY = useTransform(y, [-0.5, 0.5], [-15, 15]);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  return (
    <main 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-screen overflow-hidden bg-[#0a1628]"
    >
      {/* Initial Loading Reveal */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
        className="fixed inset-0 bg-[#0a1628] z-50 origin-top"
      />

      {/* Animated Background Images with Parallax */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            transition: { duration: 2, ease: [0.25, 0.1, 0.25, 1] }
          }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            transition: { duration: 1.5 }
          }}
          className="absolute inset-0"
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1200,
          }}
        >
          <motion.div
            animate={{ scale: 1.12 }}
            transition={{ duration: 8, ease: "linear" }}
            className="absolute inset-0"
            style={{ x: translateX, y: translateY }}
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
      
      {/* Premium dark overlay with vignette */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/90 via-[#1E3A5F]/60 to-[#0a1628]/85 z-10" />
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10,22,40,0.4) 100%)',
        }}
      />
      
      {/* Film Grain Overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6">
        {/* Logo with glow */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 relative"
        >
          <div className="absolute inset-0 blur-2xl bg-[#F5A623]/20 scale-150" />
          <div className="relative h-16 w-56 md:h-24 md:w-72">
            <Image
              src="/images/zithelo_logo.png"
              alt="Zithelo Real Estate Limited"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>

        {/* Animated Divider Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#F5A623] to-transparent mb-12 relative"
        >
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent"
          />
        </motion.div>

        {/* Coming Soon Text with character animation */}
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mb-8"
          >
            <span className="text-[#F5A623] text-xs md:text-sm tracking-[0.5em] uppercase">
              <AnimatedText text="Coming Soon" delay={1.1} />
            </span>
          </motion.div>
        )}

        {/* Main Headline with character reveal */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-white text-center font-light"
        >
          {isLoaded && (
            <>
              <span className="block text-2xl md:text-3xl lg:text-4xl tracking-wide mb-3">
                <AnimatedText text="Welcome to" delay={1.4} />
              </span>
              <span className="block text-4xl md:text-6xl lg:text-7xl tracking-tight font-normal">
                <AnimatedText text="Zithelo Homes" delay={1.7} />
              </span>
            </>
          )}
        </motion.h1>

        {/* Tagline with glow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-8 text-white/80 text-lg md:text-xl lg:text-2xl tracking-wide text-center italic relative"
        >
          <span className="relative z-10">More Than a Home, A Legacy.</span>
          <motion.span
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 blur-lg bg-[#F5A623]/20"
          />
        </motion.p>

        {/* Bottom Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 2.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-16 h-[1px] bg-white/20 mt-12"
        />

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.6 }}
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
            <motion.a 
              href="tel:09110222323" 
              className="hover:text-[#F5A623] transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              📞 0911 022 2323
            </motion.a>
            <motion.a 
              href="mailto:info@zithelorealestate.com" 
              className="hover:text-[#F5A623] transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              📧 info@zithelorealestate.com
            </motion.a>
            <motion.a 
              href="https://www.zithelorealestate.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#F5A623] transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              🌐 www.zithelorealestate.com
            </motion.a>
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
            transition={{ duration: 0.6, delay: 2.8 + index * 0.1 }}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            className="group relative h-[3px] overflow-hidden transition-all duration-300"
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
                style={{ boxShadow: '0 0 10px rgba(245,166,35,0.5)' }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Animated Corner Accents */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute top-8 left-8 w-20 h-20 z-20"
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#F5A623]/50 to-transparent" />
        <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-[#F5A623]/50 to-transparent" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 right-8 w-20 h-20 z-20"
      >
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-[#F5A623]/50 to-transparent" />
        <div className="absolute bottom-0 right-0 h-full w-[1px] bg-gradient-to-t from-[#F5A623]/50 to-transparent" />
      </motion.div>

      {/* Floating Contact Button */}
      <FloatingContactButton />
    </main>
  );
}
