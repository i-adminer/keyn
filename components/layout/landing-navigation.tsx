"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Theme_Switcher } from "@/components/theme_switcher";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const mainNavigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "CV & Career Services", href: "/cv-career-services" },
];

const servicesDropdown = [
  { name: "Recruitment", href: "/recruitment" },
  { name: "HR Consulting", href: "/hr-consulting" },
  { name: "Training & Development", href: "/training" },
];

const rightNavigation = [{ name: "Contact", href: "/contact" }];

export function LandingNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Handle mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine which logo to use based on theme
  const currentTheme = mounted
    ? theme === "system"
      ? resolvedTheme
      : theme
    : "light";
  const logoSrc = currentTheme === "dark" ? "/logo.png" : "/logod.png";

  return (
    <>
      <nav
        className={cn(
          "absolute top-0.5 inset-x-0 z-50 transition-all duration-300",
          " ",
        )}
      >
        <div className="container-premium backdrop-blur-md text-foreground shadow-md border-b border-border rounded-b-2xl">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="relative h-12 w-48 lg:h-14 lg:w-56 shrink-0"
            >
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
              {mainNavigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group relative px-3 xl:px-4 py-2 text-sm font-medium transition-colors text-foreground hover:text-primary"
                  >
                    {item.name}
                    <span
                      className={cn(
                        "absolute bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ease-out",
                        isActive ? "w-full" : "w-0 group-hover:w-1/2",
                      )}
                    />
                    <span
                      className={cn(
                        "absolute bottom-1 right-0 h-0.5 bg-primary transition-all duration-300 ease-out delay-75",
                        !isActive && "w-0 group-hover:w-1/2",
                      )}
                    />
                  </Link>
                );
              })}

              {/* Services Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className={cn(
                    "relative px-3 xl:px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1",
                    "text-foreground hover:text-primary group",
                  )}
                >
                  Services
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      isServicesOpen && "rotate-180",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ease-out",
                      isServicesOpen ||
                        servicesDropdown.some((s) => pathname === s.href)
                        ? "w-full"
                        : "w-0 group-hover:w-1/2",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute bottom-1 right-0 h-0.5 bg-primary transition-all duration-300 ease-out delay-75",
                      !isServicesOpen &&
                        !servicesDropdown.some((s) => pathname === s.href) &&
                        "w-0 group-hover:w-1/2",
                    )}
                  />
                </button>

                {/* Dropdown Menu with padding area to prevent closing */}
                <div className="absolute top-full left-0 pt-2">
                  {isServicesOpen && (
                    <div className="w-64 bg-card border border-border rounded-lg shadow-lg overflow-hidden">
                      {servicesDropdown.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="group relative block px-4 py-3 text-sm font-medium transition-colors text-foreground hover:text-primary border-b border-border last:border-b-0 overflow-hidden"
                          >
                            <span className="relative z-10">{item.name}</span>
                            <span
                              className={cn(
                                "absolute inset-0 bg-accent transition-transform duration-300 ease-out origin-left",
                                isActive
                                  ? "scale-x-100"
                                  : "scale-x-0 group-hover:scale-x-100",
                              )}
                            />
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {rightNavigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group relative px-3 xl:px-4 py-2 text-sm font-medium transition-colors text-foreground hover:text-primary"
                  >
                    {item.name}
                    <span
                      className={cn(
                        "absolute bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ease-out",
                        isActive ? "w-full" : "w-0 group-hover:w-1/2",
                      )}
                    />
                    <span
                      className={cn(
                        "absolute bottom-1 right-0 h-0.5 bg-primary transition-all duration-300 ease-out delay-75",
                        !isActive && "w-0 group-hover:w-1/2",
                      )}
                    />
                  </Link>
                );
              })}

              {/* Theme Switcher */}
              <div className="ml-2">
                <Theme_Switcher />
              </div>

              {/* CTA Button */}
              <Button asChild size="sm" variant="primary" className="ml-2">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Button & Theme Switcher */}
            <div className="flex lg:hidden items-center gap-3">
              <Theme_Switcher />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-20 left-0 right-0 bg-card border-b border-border shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="container-premium py-6">
              <div className="flex flex-col space-y-1">
                {mainNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Services Section in Mobile */}
                <div className="px-4 py-2">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full flex items-center justify-between py-3 text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Services
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        isServicesOpen && "rotate-180",
                      )}
                    />
                  </button>
                  {isServicesOpen && (
                    <div className="ml-4 mt-2 space-y-1">
                      {servicesDropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {rightNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="pt-4 px-4">
                  <Button
                    asChild
                    size="lg"
                    variant="primary"
                    className="w-full"
                  >
                    <Link
                      href="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
