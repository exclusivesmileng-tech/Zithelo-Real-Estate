"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";

export function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-24 md:py-32 bg-[var(--color-cream)]">
      <Container size="narrow">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-orange)] mb-4">
              Get in Touch
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)]">
              Start a conversation
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          {isSubmitted ? (
            <div className="text-center py-12">
              <p className="font-serif text-2xl text-[var(--color-charcoal)] mb-4">
                Thank you for reaching out
              </p>
              <p className="text-[var(--color-charcoal-light)]">
                We&apos;ll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
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
                  className="w-full px-4 py-3 bg-white border border-[var(--color-warm-gray)] text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-orange)] transition-colors"
                  placeholder="Your name"
                />
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
                  className="w-full px-4 py-3 bg-white border border-[var(--color-warm-gray)] text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-orange)] transition-colors"
                  placeholder="your@email.com"
                />
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
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white border border-[var(--color-warm-gray)] text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-orange)] transition-colors resize-none"
                  placeholder="Tell us about your interest..."
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : "Request a private discussion"}
                </Button>
              </div>
            </form>
          )}
        </AnimatedSection>
      </Container>
    </section>
  );
}
