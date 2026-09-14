"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Recruitment", href: "/recruitment" },
  { name: "HR Consulting", href: "/hr-consulting" },
  { name: "CV & Career Services", href: "/cv-career-services" },
  { name: "Training", href: "/training" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const isDark = theme === "dark"
  const logoSrc = isDark ? "/logos/logo-dark.png" : "/logos/logo-light.png"

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 dark:bg-navy-deep/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        )}
      >
        <div className="container-premium">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="relative h-12 w-48 lg:h-14 lg:w-56 flex-shrink-0">
              <Image
                src={logoSrc}
                alt="KEYN PEOPLE ADVISORY"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 xl:px-4 py-2 text-sm font-medium transition-colors rounded-md",
                    "hover:text-blue-royal focus-ring",
                    isScrolled
                      ? "text-foreground"
                      : "text-navy-deep hover:text-blue-royal"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Button asChild size="lg" variant="primary">
                <Link href="/contact?service=recruitment">Hire Talent</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-navy-deep dark:text-white focus-ring rounded-md"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-navy-deep"
          style={{ top: "5rem" }}
        >
          <div className="container-premium py-8">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-lg font-medium text-white hover:text-gold transition-colors rounded-md hover:bg-navy-midnight"
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 px-4">
                <Button
                  asChild
                  size="lg"
                  variant="gold"
                  className="w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href="/contact?service=recruitment">Hire Talent</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer to prevent content from hiding under fixed nav */}
      <div className="h-20 lg:h-24" />
    </>
  )
}
