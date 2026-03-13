import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-navy-dark)] text-[var(--color-stone)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="relative h-10 w-32 mb-4">
              <Image
                src="/images/logo.png"
                alt="Zithelo Real Estate"
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </div>
            <p className="text-sm text-[var(--color-warm-gray)] leading-relaxed max-w-xs">
              Thoughtfully designed properties in prime Lagos locations.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[var(--color-teal)] mb-4">
              Navigation
            </h4>
            <nav className="space-y-3">
              <Link
                href="/"
                className="block text-sm text-[var(--color-warm-gray)] hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/developments"
                className="block text-sm text-[var(--color-warm-gray)] hover:text-white transition-colors"
              >
                Developments
              </Link>
              <Link
                href="/about"
                className="block text-sm text-[var(--color-warm-gray)] hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-[var(--color-warm-gray)] hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[var(--color-teal)] mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-[var(--color-warm-gray)]">
              <p>Lagos, Nigeria</p>
              <a
                href="mailto:hello@zithelo.com"
                className="block hover:text-white transition-colors"
              >
                hello@zithelo.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--color-navy)]">
          <p className="text-xs text-[var(--color-navy-light)]">
            © {currentYear} Zithelo Real Estate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
