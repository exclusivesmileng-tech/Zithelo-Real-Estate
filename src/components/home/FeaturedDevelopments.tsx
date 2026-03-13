"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { AnimatedSection } from "@/components/AnimatedSection";

const developments = [
  {
    id: "ikeja-residence",
    title: "The Ikeja Residence",
    location: "Ikeja, Lagos",
    image: "/images/3.jpeg",
    slug: "ikeja-residence",
  },
  {
    id: "yaba-quarters",
    title: "Yaba Quarters",
    location: "Yaba, Lagos",
    image: "/images/4.jpeg",
    slug: "yaba-quarters",
  },
];

export function FeaturedDevelopments() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-cream)]">
      <Container>
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal-dark)] mb-4">
              Current Developments
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-charcoal)]">
              Our Projects
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {developments.map((dev, index) => (
            <AnimatedSection key={dev.id} delay={index * 0.1}>
              <Link href={`/developments/${dev.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-warm-gray)]">
                  {/* Development Image */}
                  <Image
                    src={dev.image}
                    alt={dev.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-[var(--color-navy-dark)]/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="text-[var(--color-teal)] text-sm tracking-widest uppercase">
                      View Development
                    </span>
                  </motion.div>
                </div>

                <div className="mt-6">
                  <h3 className="font-serif text-2xl text-[var(--color-charcoal)] group-hover:text-[var(--color-navy)] transition-colors">
                    {dev.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-charcoal-light)]">
                    {dev.location}
                  </p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
