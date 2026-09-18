"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function CVCareerServices() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background via-card/30 to-background border-b">
      <div className="container-premium">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-4xl mx-auto"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
            <span className="text-sm font-bold tracking-widest text-primary">
              CV & CAREER SERVICES
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-secondary to-primary rounded-full" />
          </div>

          {/* Heading */}
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="text-foreground">Your CV Is More Than a Document. </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              It Is Your Career Marketing Tool
            </span>
          </div>

          {/* Single Comprehensive Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed mb-8"
          >
            Keyn helps professionals at all career levels—from graduates and entry-level 
            professionals to experienced managers, senior executives, career changers, and 
            international applicants—create clear, professional, and results-focused CVs 
            that stand out in competitive job markets. Our services include professional CV 
            writing, CV redesign, ATS-friendly optimization, executive CVs for senior 
            leadership positions, LinkedIn profile optimization, and compelling cover letters 
            tailored to your target role, all crafted by experienced HR professionals who 
            understand what employers are looking for.
          </motion.p>

          {/* CTA Button */}
          <div className="inline-block group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-tl-2xl rounded-br-2xl" />
            <Button
              asChild
              size="lg"
              className="relative rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none bg-primary text-white hover:bg-transparent hover:text-primary border-primary group-hover:-translate-y-1 group-hover:-translate-x-1 transition-all duration-300"
            >
              <Link href="/cv-career-services">Build My CV</Link>
            </Button>
          </div>
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <div className="w-96 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
