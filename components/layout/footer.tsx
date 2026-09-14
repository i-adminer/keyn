import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

const navigation = {
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Recruitment", href: "/recruitment" },
    { name: "HR Consulting", href: "/hr-consulting" },
    { name: "CV & Career Services", href: "/cv-career-services" },
    { name: "Training & Development", href: "/training" },
  ],
  pathways: [
    { name: "For Employers", href: "/contact?type=employer" },
    { name: "For Professionals", href: "/contact?type=professional" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white border-t border-neutral-800">
      <div className="container-premium">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logos/logo-dark.png"
                alt="KEYN PEOPLE ADVISORY"
                width={220}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-neutral-400 leading-relaxed mb-6 max-w-sm">
              Recruitment | HR Consulting | Career & CV Services | Training
            </p>
            <div className="text-sm text-neutral-400 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:info@keynpeople.com"
                  className="hover:text-gold transition-colors"
                >
                  info@keynpeople.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href="tel:+254700000000"
                  className="hover:text-gold transition-colors"
                >
                  +254 700 000 000
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigation.pathways.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Keyn People Advisory. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-neutral-400 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-gold transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
