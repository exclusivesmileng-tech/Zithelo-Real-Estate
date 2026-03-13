import Image from "next/image";
import { Container } from "@/components/Container";
import { AnimatedSection } from "@/components/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Zithelo Real Estate",
  description: "Learn about Zithelo Real Estate's philosophy, approach, and commitment to quality development in Lagos.",
};

const values = [
  {
    title: "Location First",
    description: "We select sites with inherent value—established neighborhoods, essential infrastructure, and growth potential.",
  },
  {
    title: "Quality Without Compromise",
    description: "From structural engineering to finishing details, we maintain standards that ensure longevity and livability.",
  },
  {
    title: "Restrained Design",
    description: "Our architecture prioritizes functionality, natural light, and timeless aesthetics over fleeting trends.",
  },
  {
    title: "Transparent Process",
    description: "Clear communication, honest timelines, and straightforward dealings define every client relationship.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero with Image */}
      <section className="relative min-h-[60vh] flex items-center pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/6.jpeg"
            alt="Zithelo Real Estate"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy-dark)]/90 via-[var(--color-navy)]/70 to-transparent" />
        </div>
        <Container>
          <AnimatedSection>
            <div className="relative z-10 max-w-2xl py-24 md:py-32">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] mb-4">
                About Zithelo
              </p>
              <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">
                Building with intention
              </h1>
              <p className="text-lg text-[var(--color-warm-gray)] max-w-xl">
                A development company focused on creating lasting value 
                through considered design and prime positioning.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 bg-[var(--color-cream)]">
        <Container size="narrow">
          <AnimatedSection>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-[var(--color-charcoal)] leading-relaxed">
                Zithelo Real Estate was founded on a simple premise: Lagos deserves 
                development that respects both its residents and its potential.
              </p>
              <p className="text-lg text-[var(--color-charcoal-light)] leading-relaxed">
                We approach each project with the understanding that real estate 
                is a long-term commitment—for buyers, for neighborhoods, and for 
                the city itself. This perspective shapes every decision we make, 
                from site selection to material specification.
              </p>
              <p className="text-lg text-[var(--color-charcoal-light)] leading-relaxed">
                Our developments are not about maximizing unit counts or minimizing 
                costs. They are about creating spaces that people genuinely want 
                to inhabit, in locations that will retain their relevance for 
                decades to come.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-[var(--color-stone)]">
        <Container>
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal-dark)] mb-4">
                Our Approach
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)]">
                What guides us
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div>
                  <h3 className="font-serif text-2xl text-[var(--color-charcoal)] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-[var(--color-charcoal-light)] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Vision Statement */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/7.jpeg"
            alt="Future of Lagos living"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[var(--color-navy)]/85" />
        </div>
        <Container size="narrow">
          <AnimatedSection>
            <div className="relative z-10 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] mb-6">
                Looking Forward
              </p>
              <blockquote className="font-serif text-2xl md:text-4xl text-white leading-relaxed">
                &ldquo;We are building for the Lagos that is emerging—a city of 
                ambition, sophistication, and permanence.&rdquo;
              </blockquote>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
}
