"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, Briefcase, TrendingUp, Award, Globe, Sparkles } from "lucide-react";

const audiences = [
  { icon: Award, name: "Graduates" },
  { icon: Briefcase, name: "Entry-level professionals" },
  { icon: TrendingUp, name: "Experienced professionals" },
  { icon: Award, name: "Managers" },
  { icon: Sparkles, name: "Senior executives" },
  { icon: TrendingUp, name: "Career changers" },
  { icon: Globe, name: "International applicants" },
  { icon: Briefcase, name: "Professionals seeking promotion" },
];

const services = [
  {
    name: "Professional CV Writing",
    description: "Comprehensive CV crafted by experienced HR professionals",
  },
  {
    name: "CV Redesign",
    description: "Transform your existing CV into a professional document",
  },
  {
    name: "ATS-Friendly CV",
    description: "Optimized for applicant tracking systems",
  },
  {
    name: "Executive CV",
    description: "Premium CVs for senior leadership positions",
  },
  {
    name: "LinkedIn Profile Optimisation",
    description: "Strengthen your professional online presence",
  },
  {
    name: "Cover Letters",
    description: "Compelling cover letters tailored to your target role",
  },
];

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
          className="text-center mb-16 max-w-4xl mx-auto"
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

          {/* Description */}
          <span className="text-lg text-muted-foreground leading-relaxed block">
            Keyn helps professionals create clear, professional and results-focused
            CVs that stand out in competitive job markets.
          </span>
        </motion.div>

        {/* Target Audiences */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-2xl font-bold text-foreground mb-8 block text-center">
            We work with professionals at all career levels
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <motion.div
                  key={audience.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative"
                >
                  {/* Gradient Background Layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-tl-2xl rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Audience Card */}
                  <div className="relative flex flex-col items-center gap-3 p-4 bg-card border border-border/50 rounded-tl-2xl rounded-br-2xl group-hover:border-secondary/50 group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary p-0.5">
                      <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                        <Icon className="w-5 h-5 text-secondary" />
                      </div>
                    </div>
                    <span className="text-sm font-medium text-foreground text-center">
                      {audience.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Gradient Background Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-tl-3xl rounded-br-3xl" />
              
              {/* Service Card */}
              <div className="relative p-6 bg-card border border-border/50 rounded-tl-3xl rounded-br-3xl group-hover:border-primary/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-tl-3xl rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Icon with Gradient Border */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 rounded-tl-2xl rounded-br-2xl bg-gradient-to-br from-primary to-secondary p-0.5 mb-4"
                  >
                    <div className="w-full h-full bg-card rounded-tl-2xl rounded-br-2xl flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                      <FileText className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                  </motion.div>

                  <span className="text-lg font-bold text-foreground mb-2 block group-hover:text-primary transition-colors duration-300">
                    {service.name}
                  </span>
                  <span className="text-muted-foreground text-sm leading-relaxed block">
                    {service.description}
                  </span>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
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
          className="mt-16 flex justify-center"
        >
          <div className="w-96 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
