"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { AnimatedSection } from "../ui/animated-section";
import Link from "next/link";

const highlights = [
  {
    image: "/images/1.png",
    title: "Targeted Solutions",
    description: "Tailored to your specific organisational or career needs",
  },
  // {
  //   image: "/images/2.png",
  //   title: "Practical HR Experience",
  //   description: "Grounded in real-world people management practices",
  // },
  {
    image: "/images/3.png",
    title: "Professional Approach",
    description: "Aligned with organisational objectives and career goals",
  },
];

const stats = [
  { value: "500+", label: "Placements Made" },
  { value: "200+", label: "Companies Served" },
  { value: "98%", label: "Client Satisfaction" },
];

export function AboutSection() {
  const { theme, resolvedTheme } = useTheme();

  // Determine which about image to use based on theme
  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const aboutImage =
    currentTheme === "dark" ? "/images/aboutd.png" : "/images/about.png";

  return (
    <AnimatedSection>
      <section className="relative py-16 overflow-hidden border-b">
        {/* Background Image */}
        <div className="absolute inset-0 hidden">
          <Image
            src={aboutImage}
            alt="KEYN People Advisory Background"
            fill
            className="object-cover opacity-20"
            quality={100}
            suppressHydrationWarning
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-background/90 via-background/80 to-background/90" />
        </div>

        <div className="container-premium relative z-10">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 md:mb-20">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 mb-6"
              >
                <div className="w-12 h-0.5 bg-linear-to-r from-primary to-secondary rounded-full" />
                <span className="text-sm font-bold tracking-widest text-primary">
                  ABOUT KEYN
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6"
              >
                <span className="text-foreground">Connecting </span>
                <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Talent
                </span>
                <br />
                <span className="text-foreground">With </span>
                <span className="bg-linear-to-r from-secondary to-primary bg-clip-text text-transparent">
                  Opportunity
                </span>
              </motion.h2>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground mb-8"
              >
                <p>
                  Keyn People Advisory is a professional recruitment and human
                  resource consulting firm providing talent acquisition, HR
                  advisory, career development and CV writing services to
                  organisations and professionals.
                </p>
                <p>
                  We combine practical HR experience with a deep understanding
                  of recruitment, employee management and workplace requirements
                  to deliver solutions that are practical, professional and
                  aligned with organisational objectives.
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-3 gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <div className="pt-5">
                <Link href="/about" passHref>
                  <Button className="rounded-none" asChild>
                    <span>LEARN MORE...</span>
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right: Highlights Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4 h-full flex justify-center items-center flex-col w-96"
            >
              {highlights.map((highlight, index) => {
                return (
                  <motion.div
                    key={highlight.title}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                    className="group"
                  >
                    <div className="relative h-32 md:h-40 overflow-hidden border border-border/50 rounded-md hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex justify-between">
                      {/* Background Image */}
                      <div className="flex justify-center items-center">
                        <Image
                          src={highlight.image}
                          alt={highlight.title}
                          width={100}
                          height={100}
                          className="object-contain"
                        />
                      </div>

                      {/* Text Content on Top */}
                      <div className="relative h-full flex flex-col justify-center p-4 md:p-6">
                        <span className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {highlight.title}
                        </span>
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {highlight.description}
                        </span>
                      </div>

                      {/* Corner accent */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-primary/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Bottom Decorative Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full h-0.5 bg-linear-to-r from-transparent via-primary to-transparent rounded-full"
          />
        </div>
      </section>
    </AnimatedSection>
  );
}
