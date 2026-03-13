"use client";

import { Container } from "@/components/Container";
import { AnimatedSection } from "@/components/AnimatedSection";

const facts = [
  {
    title: "Prime Locations",
    description: "Strategic developments in Lagos's most sought-after neighborhoods",
  },
  {
    title: "Quality Focus",
    description: "Uncompromising standards in materials, design, and construction",
  },
  {
    title: "Long-term Value",
    description: "Properties designed for appreciation and enduring relevance",
  },
  {
    title: "Professional Approach",
    description: "Transparent advisory from initial inquiry to handover",
  },
];

export function AuthoritySection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-stone)]">
      <Container>
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-orange)] mb-4">
              Our Approach
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)] max-w-2xl mx-auto">
              Building for those who value substance over spectacle
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {facts.map((fact, index) => (
            <AnimatedSection key={fact.title} delay={index * 0.1}>
              <div className="text-center">
                <h3 className="font-serif text-xl text-[var(--color-charcoal)] mb-3">
                  {fact.title}
                </h3>
                <p className="text-sm text-[var(--color-charcoal-light)] leading-relaxed">
                  {fact.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
