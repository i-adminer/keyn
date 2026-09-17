"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

const services = [
  "Executive & professional recruitment",
  "Head hunting and targeted talent sourcing",
  "Permanent and contract recruitment",
  "Entry, mid-level and senior-level recruitment",
  "Candidate sourcing and screening",
  "Competency-based interviews",
  "Shortlisting and candidate assessment",
  "Reference and background checks",
  "Recruitment process management",
  "Confidential searches",
];

const assessmentCriteria = [
  "Skills",
  "Experience",
  "Competencies",
  "Culture",
  "Performance expectations",
];

export function RecruitmentSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-linear-to-b from-background via-muted/30 to-background border-b">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-linear-to-r from-primary to-secondary rounded-full" />
              <span className="text-sm font-bold tracking-widest text-primary">
                RECRUITMENT
              </span>
            </div>

            {/* Heading */}
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
              <span className="text-foreground">Find the Right Talent.</span>
              <br />
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                Build the Right Team.
              </span>
            </div>

            {/* Description */}
            <span className="text-lg leading-relaxed text-muted-foreground mb-8 block">
              We support organisations throughout the recruitment lifecycle —
              from identifying workforce requirements to sourcing, screening and
              shortlisting qualified candidates.
            </span>

            {/* Services */}
            <div className="mb-10">
              <span className="text-xl font-semibold text-foreground mb-4 block">
                Services
              </span>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-2"
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="group relative inline-block">
              <div className="absolute inset-0 bg-linear-to-br from-primary to-secondary rounded-tl-2xl rounded-br-2xl" />
              <Button
                asChild
                size="lg"
                className="relative rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none bg-primary text-white hover:bg-transparent hover:text-primary border-primary group-hover:-translate-y-1 group-hover:-translate-x-1 transition-all duration-300"
              >
                <Link href="/contact?service=recruitment">
                  Start a Recruitment Request
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Assessment Highlight Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32 group relative"
          >
            {/* linear Background Layer */}
            <div className="absolute inset-0 bg-linear-to-br from-primary to-secondary rounded-tl-3xl rounded-br-3xl" />

            {/* Card Content */}
            <div className="relative bg-card p-8 lg:p-10 rounded-tl-2xl rounded-br-3xl border border-primary/20 group-hover:-translate-y-0.5 group-hover:-translate-x-10.5transition-all duration-300">
              {/* linear Overlay on Hover */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/5 rounded-tl-3xl rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <span className="text-2xl lg:text-3xl font-bold mb-6 block text-foreground">
                  We focus on more than qualifications.
                </span>
                <span className="text-lg text-muted-foreground mb-8 leading-relaxed block">
                  We assess candidates against:
                </span>
                <div className="space-y-4">
                  {assessmentCriteria.map((criterion, index) => (
                    <motion.div
                      key={criterion}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-linear-to-r from-primary/5 to-transparent rounded-tl-2xl rounded-br-2xl border border-primary/10 hover:border-primary/30 transition-colors duration-300"
                    >
                      <div className="w-8 h-8 rounded-full bg-linear-to-br from-primary to-secondary p-0.5 flex-shrink-0">
                        <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-linear-to-br from-primary to-secondary" />
                        </div>
                      </div>
                      <span className="text-lg font-medium text-foreground">
                        {criterion}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
