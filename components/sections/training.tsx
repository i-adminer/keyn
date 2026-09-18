"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

const areas = [
  "Supervisory skills",
  "People management",
  "Recruitment and interviewing",
  "Performance management",
  "Workplace communication",
  "Employee relations",
  "HR fundamentals for managers",
  "Workplace professionalism",
  "Leadership development",
  "Employee onboarding",
  "Career development",
];

export function Training() {
  return (
    <section className="relative py-20 overflow-hidden bg-linear-to-b from-background via-muted/30 to-background border-b">
      <div className="container-premium">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-4xl"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-12 h-0.5 bg-linear-to-r from-primary to-secondary rounded-full" />
            <span className="text-sm font-bold tracking-widest text-primary">
              TRAINING & DEVELOPMENT
            </span>
          </div>

          {/* Heading */}
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="text-foreground">Develop People. </span>
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Strengthen Performance.
            </span>
          </div>

          {/* Description */}
          <span className="text-lg text-muted-foreground leading-relaxed block">
            Training programmes can be tailored to your organisation's specific
            needs and delivered on-site or virtually.
          </span>
        </motion.div>

        {/* Two Column Layout: Content + Image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
          {/* Left: Training Areas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-2xl font-bold tracking-tight mb-6">
              <span className="text-foreground">Training Areas</span>
            </div>
            <div className="space-y-3">
              {areas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-5 h-5 rounded-sm bg-linear-to-br from-primary to-secondary p-0.5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <div className="w-full h-full bg-card rounded-sm flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                  </div>
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    {area}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image with Button */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full flex justify-center items-center"
          >
            <div className="relative">
              <Image
                src="/images/meet.png"
                alt="Training & Development"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                quality={90}
              />

              {/* CTA Button - Bottom Left of Image */}
              <div className="absolute bottom-0 left-0 inline-block group">
                <div className="absolute inset-0 bg-linear-to-br from-primary to-secondary rounded-tl-2xl rounded-br-2xl" />
                <Button
                  asChild
                  size="lg"
                  className="relative rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none bg-primary text-white border-primary group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-all duration-300"
                >
                  <Link href="/contact?service=training">Discuss Training</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center"
        >
          <div className="w-96 h-0.5 bg-linear-to-r from-transparent via-primary to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
