"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "../ui/animated-section";

export function CVCareerServices() {
  return (
    <AnimatedSection>
    <section className="relative py-20 overflow-hidden bg-linear-to-b from-background via-card/30 to-background border-b">
      <div className="container-premium">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-4xl"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-12 h-0.5 bg-linear-to-r from-primary to-secondary rounded-full" />
            <span className="text-sm font-bold tracking-widest text-primary">
              CV & CAREER SERVICES
            </span>
          </div>

          {/* Heading */}
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-12">
            <span className="text-foreground">
              Your CV Is More Than a Document.{" "}
            </span>
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              It Is Your Career Marketing Tool
            </span>
          </div>
        </motion.div>

        {/* Two Column Layout: Paragraph + Image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Paragraph and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Single Comprehensive Paragraph */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Keyn helps professionals at all career levels from graduates and
              entry-level professionals to experienced managers, senior
              executives, career changers, and international applicants create
              clear, professional, and results focused CVs that stand out in
              competitive job markets. Our services include professional CV
              writing, CV redesign, ATS-friendly optimization, executive CVs for
              senior leadership positions, LinkedIn profile optimization, and
              compelling cover letters tailored to your target role, all crafted
              by experienced HR professionals who understand what employers are
              looking for.
            </p>

            {/* CTA Button */}
            <div className="inline-block group relative">
              <div className="absolute inset-0 bg-linear-to-br from-primary to-secondary rounded-tl-2xl rounded-br-2xl" />
              <Button
                asChild
                size="lg"
                className="relative rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none bg-primary text-white  group-hover:-translate-y-1 group-hover:-translate-x-1 transition-all duration-300"
              >
                <Link href="/cv-career-services">Build My CV</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: CV Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <Image
                src="/images/cv.png"
                alt="Professional CV Examples"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                quality={90}
              />
            </div>
          </motion.div>
        </div>
      </div>    </section>
    </AnimatedSection>
  );
}
