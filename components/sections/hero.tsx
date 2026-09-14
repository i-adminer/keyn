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
      className="relative h-screen w-full flex items-center overflow-hidden"
    >
      {/* Background Image using Next.js Image */}
      <div className="absolute inset-1 md:inset-2 lg:inset-4 ">
        <LandingNavigation />
        <Image
          src={heroImage}
          alt="Hero Background"
          fill
          className="object-cover object-right md:object-center rounded-2xl border-2 border-secondary"
          priority
          quality={100}
          suppressHydrationWarning
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 " />

      {/* Content Container */}
      <div className="container-premium relative z-10 px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl pt-20 md:pt-24 lg:pt-0"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] mb-4 md:mb-6 font-realce"
            >
              <span className="text-foreground">Your Talent.</span>
              <br />
              <span className="bg-linear-to-r to-primary from-foreground bg-clip-text text-transparent">
                Our Expertise.
              </span>
              <br />
              <span className="text-outline">Better Outcomes.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl leading-relaxed text-foreground mb-6 md:mb-8 text-justify"
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
              className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-10"
            >
              <Button
                asChild
                size="lg"
                className="rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none bg-primary text-white hover:border hover:bg-transparent hover:text-primary border-primary w-full sm:w-auto"
              >
                <Link href="/professionals">Hire Talent</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none bg-transparent text-primary border hover:text-white border-primary w-full sm:w-auto"
              >
                <Link href="/professionals">Build My CV</Link>
              </Button>
            </motion.div>

            {/* Service Indicators - Hidden on mobile, visible on md+ */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hidden md:flex flex-wrap gap-3 lg:gap-4"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.4, delay: 0.6 + index * 0.1 },
                    y: {
                      duration: 1.5,
                      delay: index * 0.5,
                      repeat: Infinity,
                      repeatDelay: (services.length - 1) * 0.5,
                      ease: "easeInOut",
                    },
                  }}
                  className="flex items-center gap-2 px-3 md:px-4 py-2 bg-card/80 backdrop-blur-sm border border-border"
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
            className="hidden lg:flex relative h-150 items-center justify-center"
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
