import Image from "next/image";
import { Container } from "@/components/Container";
import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developments | Zithelo Real Estate",
  description: "Explore our current developments in prime Lagos locations - Ikeja and Yaba.",
};

const developments = [
  {
    id: "ikeja-residence",
    title: "The Ikeja Residence",
    location: "Ikeja, Lagos",
    image: "/images/3.jpeg",
    description: "A collection of refined apartments in the heart of Ikeja, designed for discerning professionals seeking convenience and quality.",
    status: "Now Selling",
    slug: "ikeja-residence",
  },
  {
    id: "yaba-quarters",
    title: "Yaba Quarters",
    location: "Yaba, Lagos",
    image: "/images/4.jpeg",
    description: "Contemporary living spaces in Lagos's vibrant tech hub, combining modern design with strategic positioning.",
    status: "Coming Soon",
    slug: "yaba-quarters",
  },
];

export default function DevelopmentsPage() {
  return (
    <div>
      {/* Hero with Image */}
      <section className="relative min-h-[50vh] flex items-center pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/8.jpeg"
            alt="Zithelo Developments"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy-dark)]/90 via-[var(--color-navy)]/70 to-[var(--color-navy-dark)]/60" />
        </div>
        <Container>
          <AnimatedSection>
            <div className="relative z-10 max-w-3xl py-24 md:py-32">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] mb-4">
                Our Portfolio
              </p>
              <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">
                Developments
              </h1>
              <p className="text-lg text-[var(--color-warm-gray)] max-w-xl">
                Each project reflects our commitment to thoughtful design, 
                prime locations, and long-term value.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Development List */}
      <section className="py-24 md:py-32 bg-[var(--color-cream)]">
        <Container>
          <div className="space-y-24">
            {developments.map((dev, index) => (
              <AnimatedSection key={dev.id} delay={index * 0.1}>
                <Link href={`/developments/${dev.slug}`} className="group block">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className={`relative aspect-[4/3] overflow-hidden bg-[var(--color-warm-gray)] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <Image
                        src={dev.image}
                        alt={dev.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-[var(--color-navy-dark)]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal-dark)]">
                        {dev.status}
                      </span>
                      <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)] mt-4 mb-2 group-hover:text-[var(--color-navy)] transition-colors">
                        {dev.title}
                      </h2>
                      <p className="text-sm text-[var(--color-charcoal-light)] mb-6">
                        {dev.location}
                      </p>
                      <p className="text-[var(--color-charcoal-light)] leading-relaxed mb-8">
                        {dev.description}
                      </p>
                      <span className="inline-flex items-center text-sm text-[var(--color-charcoal)] group-hover:text-[var(--color-navy)] transition-colors">
                        View Development
                        <svg 
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
