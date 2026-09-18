import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const navigation = {
  services: [
    { name: "Recruitment", href: "/recruitment" },
    { name: "HR Consulting", href: "/hr-consulting" },
    { name: "CV & Career Services", href: "/cv-career-services" },
    { name: "Training", href: "/training" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-foreground overflow-hidden">
      {/* Gradient Accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="container-premium">
        {/* Main Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="KEYN"
                width={180}
                height={48}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-background/70 leading-relaxed">
              Recruitment · HR Consulting · Career Services · Training
            </p>
          </div>

          {/* Services */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-4 block">
              Services
            </span>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/80 hover:text-secondary transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-secondary transition-all duration-300 mr-0 group-hover:mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-4 block">
              Company
            </span>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/80 hover:text-secondary transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-secondary transition-all duration-300 mr-0 group-hover:mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-4 block">
              Connect
            </span>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@keynpeople.com"
                  className="text-sm text-background/80 hover:text-secondary transition-colors flex items-center gap-2 group"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>info@keynpeople.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+254700000000"
                  className="text-sm text-background/80 hover:text-secondary transition-colors flex items-center gap-2 group"
                >
                  <Phone className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>+254 700 000 000</span>
                </a>
              </li>
              <li>
                <div className="text-sm text-background/80 flex items-center gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>Nairobi, Kenya</span>
                </div>
              </li>
              <li className="pt-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-secondary transition-colors group"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>Follow us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/10">
          <div className="text-center">
            <span className="text-xs text-background/60">
              © {new Date().getFullYear()} Keyn People Advisory. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
