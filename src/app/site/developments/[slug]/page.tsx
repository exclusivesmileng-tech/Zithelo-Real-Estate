import Image from "next/image";
import { Container } from "@/components/Container";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const developments = {
  "zithelo-signature-homes-1": {
    title: "Zithelo Signature Homes 1",
    location: "Lagos",
    status: "Now Selling",
    heroImage: "/images/3.jpeg",
    description: "A collection of refined smart apartments designed for discerning professionals seeking convenience and quality.",
    longDescription: "Zithelo Signature Homes 1 represents a new standard in Lagos smart home living. This development offers immediate access to essential amenities while providing a refined retreat with cutting-edge home automation technology.",
    highlights: [
      "Smart home automation systems",
      "2 and 3 bedroom configurations",
      "Contemporary architectural design",
      "24-hour security and power",
      "Dedicated parking spaces",
      "Premium finishes throughout",
    ],
    gallery: [
            { id: 2, src: "/images/4.jpeg", alt: "Building Exterior" },
      { id: 1, src: "/images/6.jpeg", alt: "Building Exterior" },
      { id: 3, src: "/images/2.jpeg", alt: "Kitchen" },
      { id: 6, src: "/images/3.jpeg", alt: "Balcony View" },
    ],
  },
  "andoyi-place": {
    title: "Andoyi Place",
    location: "Lagos",
    status: "Coming Soon",
    heroImage: "/images/4.jpeg",
    description: "Contemporary smart living spaces combining modern design with strategic positioning.",
    longDescription: "Andoyi Place is conceived for the modern Lagos professional. This development bridges work and life seamlessly, offering smart residences with integrated home automation that inspire and facilitate modern living.",
    highlights: [
      "Smart home technology integration",
      "Studio and 1 bedroom units",
      "Co-working amenities",
      "Fiber-optic connectivity",
      "Rooftop terrace",
      "Sustainable design features",
    ],
    gallery: [
    { id: 2, src: "/images/4.jpeg", alt: "Building Exterior" },
      { id: 1, src: "/images/6.jpeg", alt: "Building Exterior" },
      { id: 3, src: "/images/2.jpeg", alt: "Kitchen" },
      { id: 6, src: "/images/3.jpeg", alt: "Balcony View" },
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const development = developments[slug as keyof typeof developments];
  
  if (!development) {
    return { title: "Development Not Found" };
  }
  
  return {
    title: `${development.title} | Zithelo Real Estate`,
    description: development.description,
  };
}

export function generateStaticParams() {
  return Object.keys(developments).map((slug) => ({ slug }));
}

export default async function DevelopmentPage({ params }: Props) {
  const { slug } = await params;
  const development = developments[slug as keyof typeof developments];

  if (!development) {
    notFound();
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end pt-20">
        <div className="absolute inset-0">
          <Image
            src={development.heroImage}
            alt={development.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-dark)]/90 via-[var(--color-navy)]/40 to-transparent" />
        </div>
        <div className="relative z-10 w-full pb-16">
          <Container>
            <AnimatedSection>
              <span className="inline-block px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--color-orange)] border border-[var(--color-orange)] mb-6">
                {development.status}
              </span>
              <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">
                {development.title}
              </h1>
              <p className="text-lg text-[var(--color-warm-gray)]">
                {development.location}
              </p>
            </AnimatedSection>
          </Container>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 md:py-32 bg-[var(--color-cream)]">
        <Container size="narrow">
          <AnimatedSection>
            <p className="text-xl md:text-2xl text-[var(--color-charcoal)] leading-relaxed">
              {development.longDescription}
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Highlights */}
      <section className="py-24 md:py-32 bg-[var(--color-stone)]">
        <Container>
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-orange)] mb-4">
                  Key Features
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)]">
                  Development Highlights
                </h2>
              </div>
              <div>
                <ul className="space-y-4">
                  {development.highlights.map((highlight, index) => (
                    <li 
                      key={index}
                      className="flex items-center text-[var(--color-charcoal-light)]"
                    >
                      <span className="w-2 h-2 bg-[var(--color-orange)] rounded-full mr-4" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-24 md:py-32 bg-[var(--color-cream)]">
        <Container>
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-orange)] mb-4">
                Gallery
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)]">
                Visual Tour
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {development.gallery.map((image, index) => (
              <AnimatedSection key={image.id} delay={index * 0.05}>
                <div className="aspect-[4/3] bg-[var(--color-warm-gray)] overflow-hidden relative group">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover overlay with caption */}
                  <div className="absolute inset-0 bg-[var(--color-navy-dark)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white text-sm tracking-wide">{image.alt}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[var(--color-navy)]">
        <Container size="narrow">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                Interested in {development.title}?
              </h2>
              <p className="text-[var(--color-warm-gray)] mb-10 max-w-lg mx-auto">
                Schedule a private viewing or request detailed information about available units.
              </p>
              <Button href="/site/contact" variant="secondary">
                Request Information
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
}
