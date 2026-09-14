"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useTheme } from "next-themes";
import { LandingNavigation } from "../layout/landing-navigation";

const services = ["RECRUITMENT", "HR CONSULTING", "CAREER SERVICES"];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme, resolvedTheme } = useTheme();

  // Determine which hero background to use based on theme
  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const heroImage =
    currentTheme === "dark" ? "/images/hero.png" : "/images/herol.png";

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image using Next.js Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 b" />

      {/* Content Container */}
      <div className="container-premium relative z-10 py-32">
        <LandingNavigation />
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            >
              <span className="text-foreground">Your Talent.</span>
              <br />
              <span className="text-primary">Our Expertise.</span>
              <br />
              <span className="text-foreground">Better Outcomes.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8"
            >
              We help organisations attract the right talent, strengthen their
              people practices, and build high-performing teams while helping
              professionals present themselves competitively in today's job
              market.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button asChild size="xl" variant="primary">
                <Link href="/employers">
                  Hire Talent
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="secondary">
                <Link href="/professionals">Build My CV</Link>
              </Button>
            </motion.div>

            {/* Service Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border"
                >
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="text-xs md:text-sm font-semibold tracking-wider text-foreground">
                    {service}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: 3D Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex relative h-[600px] items-center justify-center"
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/3dhero.png"
                alt="KEYN People Advisory 3D"
                fill
                className="object-contain drop-shadow-2xl"
                priority
                quality={100}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
