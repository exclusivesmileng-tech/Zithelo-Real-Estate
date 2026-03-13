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
                src="/images/Zithelo_logo.png"
                alt="Zithelo Real Estate"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-[var(--color-warm-gray)] leading-relaxed max-w-xs">
              Building Smart Homes in prime Lagos locations.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[var(--color-orange)] mb-4">
              Navigation
            </h4>
            <nav className="space-y-3">
              <Link
                href="/site"
                className="block text-sm text-[var(--color-warm-gray)] hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/site/developments"
                className="block text-sm text-[var(--color-warm-gray)] hover:text-white transition-colors"
              >
                Developments
              </Link>
              <Link
                href="/site/about"
                className="block text-sm text-[var(--color-warm-gray)] hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/site/contact"
                className="block text-sm text-[var(--color-warm-gray)] hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[var(--color-orange)] mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-[var(--color-warm-gray)]">
              <p>12B Agoro Odiyan Street, Off Adeola Odeku,<br />Victoria Island, Lagos</p>
              <a
                href="tel:+2349110222323"
                className="block hover:text-white transition-colors"
              >
                0911 022 2323
              </a>
              <a
                href="mailto:info@zithelorealestate.com"
                className="block hover:text-white transition-colors"
              >
                info@zithelorealestate.com
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
