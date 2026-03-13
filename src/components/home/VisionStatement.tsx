"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";

export function VisionStatement() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/5.jpeg"
          alt="Modern Lagos living"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Premium overlay */}
        <div className="absolute inset-0 bg-[var(--color-navy)]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy-dark)]/50 via-transparent to-[var(--color-navy-dark)]/50" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-orange)] mb-8">
            Our Vision
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight">
            Spaces designed for
            <br />
            modern Lagos living
          </h2>
        </AnimatedSection>
      </div>
    </section>
  );
}
