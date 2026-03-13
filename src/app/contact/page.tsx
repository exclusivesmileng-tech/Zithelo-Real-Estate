"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
  };

  return (
    <div>
      {/* Hero with Image */}
      <section className="relative min-h-[50vh] flex items-center pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/WhatsApp Image 2026-02-11 at 11.01.13 PM.jpeg"
            alt="Contact Zithelo"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy-dark)]/90 via-[var(--color-navy)]/75 to-[var(--color-navy-dark)]/60" />
        </div>
        <Container>
          <AnimatedSection>
            <div className="relative z-10 max-w-3xl py-24 md:py-32">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] mb-4">
                Contact
              </p>
              <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">
                Start a conversation
              </h1>
              <p className="text-lg text-[var(--color-warm-gray)] max-w-xl">
                Whether you&apos;re interested in a specific development or simply 
                want to learn more about Zithelo, we welcome your inquiry.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 md:py-32 bg-[var(--color-cream)]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <AnimatedSection>
              {isSubmitted ? (
                <div className="py-12">
                  <h2 className="font-serif text-3xl text-[var(--color-charcoal)] mb-4">
                    Thank you for reaching out
                  </h2>
                  <p className="text-[var(--color-charcoal-light)]">
                    A member of our team will be in touch within 24 hours to 
                    discuss your inquiry.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm text-[var(--color-charcoal-light)] mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-[var(--color-warm-gray)] text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-teal)] transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm text-[var(--color-charcoal-light)] mb-2"
                      >
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-[var(--color-warm-gray)] text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-teal)] transition-colors"
                        placeholder="+234"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-[var(--color-charcoal-light)] mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-[var(--color-warm-gray)] text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-teal)] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-sm text-[var(--color-charcoal-light)] mb-2"
                    >
                      Area of Interest
                    </label>
                    <select
                      id="interest"
                      value={formData.interest}
                      onChange={(e) =>
                        setFormData({ ...formData, interest: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-[var(--color-warm-gray)] text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-teal)] transition-colors appearance-none"
                    >
                      <option value="">Select an option</option>
                      <option value="ikeja">The Ikeja Residence</option>
                      <option value="yaba">Yaba Quarters</option>
                      <option value="general">General Inquiry</option>
                      <option value="investment">Investment Opportunity</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-[var(--color-charcoal-light)] mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-[var(--color-warm-gray)] text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-teal)] transition-colors resize-none"
                      placeholder="Tell us about your interest..."
                    />
                  </div>

                  <div className="pt-4">
                    <Button type="submit" variant="primary">
                      {isSubmitting ? "Sending..." : "Request a private discussion"}
                    </Button>
                  </div>
                </form>
              )}
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-4">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@zithelo.com"
                    className="text-lg text-[var(--color-charcoal)] hover:text-[var(--color-accent-dark)] transition-colors"
                  >
                    hello@zithelo.com
                  </a>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-4">
                    Location
                  </h3>
                  <p className="text-lg text-[var(--color-charcoal)]">
                    Lagos, Nigeria
                  </p>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent-dark)] mb-4">
                    Response Time
                  </h3>
                  <p className="text-[var(--color-charcoal-light)]">
                    We respond to all inquiries within 24 hours during business days.
                  </p>
                </div>

                <div className="pt-8 border-t border-[var(--color-warm-gray)]">
                  <p className="text-sm text-[var(--color-charcoal-light)] leading-relaxed">
                    For immediate assistance regarding an active purchase or 
                    existing inquiry, please reference your inquiry number in 
                    your message.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </div>
  );
}
