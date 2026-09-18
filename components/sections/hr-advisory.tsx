"use client";

import { motion } from "framer-motion";
import { AlertCircle, Users, FileCheck, Scale } from "lucide-react";

const areas = [
  "Employee performance concerns",
  "Workplace disciplinary processes",
  "Employee grievances",
  "Employment documentation",
  "HR policy interpretation",
  "Employee exits",
  "Performance improvement processes",
  "Workforce restructuring",
  "HR compliance",
  "Recruitment decisions",
  "Employee relations",
  "HR best-practice advisory",
];

const highlights = [
  {
    icon: AlertCircle,
    title: "Independent Advice",
    description: "Objective guidance on people-management challenges",
  },
  {
    icon: Users,
    title: "Employee Relations",
    description: "Navigate complex workplace relationships professionally",
  },
  {
    icon: FileCheck,
    title: "Compliance Support",
    description: "Ensure your processes align with employment regulations",
  },
  {
    icon: Scale,
    title: "Fair Practices",
    description: "Balance organisational needs with employee rights",
  },
];

export function HRAdvisory() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background border-b">
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
              HR ADVISORY
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-secondary to-primary rounded-full" />
          </div>

          {/* Heading */}
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="text-foreground">People Decisions Require </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              More Than Paperwork
            </span>
          </div>

          {/* Description */}
          <span className="text-lg text-muted-foreground leading-relaxed block">
            We provide independent HR advisory support to business owners, managers
            and organisations dealing with people-management challenges.
          </span>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Gradient Background Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-tl-3xl rounded-br-3xl" />
                
                {/* Highlight Card */}
                <div className="relative p-6 bg-card border border-border/50 rounded-tl-3xl rounded-br-3xl group-hover:border-primary/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1">
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-tl-3xl rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    {/* Icon with Gradient Border */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-14 h-14 rounded-tl-2xl rounded-br-2xl bg-gradient-to-br from-primary to-secondary p-0.5 mb-4"
                    >
                      <div className="w-full h-full bg-card rounded-tl-2xl rounded-br-2xl flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                        <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                    </motion.div>

                    <span className="font-bold text-foreground mb-2 block group-hover:text-primary transition-colors duration-300">
                      {highlight.title}
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed block">
                      {highlight.description}
                    </span>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Advisory Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <span className="text-2xl font-bold text-foreground mb-6 block text-center">
            Advisory areas
          </span>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {areas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="group relative"
              >
                {/* Gradient Background Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-tl-2xl rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Area Card */}
                <div className="relative p-4 bg-card border border-border/50 rounded-tl-2xl rounded-br-2xl text-foreground group-hover:border-secondary/50 group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-all duration-300 text-sm">
                  {area}
                </div>
              </motion.div>
            ))}
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
