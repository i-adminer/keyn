"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

const services = [
  "HR policy development and review",
  "HR procedures and employee handbooks",
  "Employment contracts and HR documentation",
  "Performance management systems",
  "Employee relations",
  "Disciplinary and grievance procedures",
  "HR audits and compliance reviews",
  "Leave and attendance management",
  "Payroll and HR data support",
  "Recruitment process design",
  "Job descriptions and role profiling",
  "Organisation structure and workforce planning",
  "Employee onboarding and offboarding",
  "Training and development",
  "HR records and documentation",
  "Workplace investigations and advisory support",
];

export function HRConsulting() {
  return (
    <section className="relative py-20 overflow-hidden bg-primary border-b">
      <div className="container-premium relative z-10">
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
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary-foreground/80 to-secondary rounded-full" />
            <span className="text-sm font-bold tracking-widest text-primary-foreground/90">
              HR CONSULTING
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-secondary to-primary-foreground/80 rounded-full" />
          </div>

          {/* Heading */}
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="text-primary-foreground">Practical HR Solutions for </span>
            <span className="text-secondary">
              Growing Organisations
            </span>
          </div>

          {/* Description */}
          <span className="text-lg text-primary-foreground/80 leading-relaxed block">
            We provide flexible HR consulting services to businesses that need
            professional HR support without necessarily maintaining a large
            internal HR function.
          </span>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="group relative"
            >
              {/* Gradient Background Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary-foreground rounded-tl-2xl rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Service Card */}
              <div className="relative flex items-start gap-3 p-4 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-tl-2xl rounded-br-2xl group-hover:border-secondary/50 group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-all duration-300">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5 group-hover:text-primary transition-colors duration-300" />
                <span className="text-primary-foreground/90 group-hover:text-foreground transition-colors duration-300 text-sm">
                  {service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto group relative"
        >
          {/* Gradient Background Layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary-foreground rounded-tl-3xl rounded-br-3xl" />
          
          {/* Content Card */}
          <div className="relative p-8 lg:p-10 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-tl-3xl rounded-br-3xl text-center group-hover:-translate-y-1 group-hover:-translate-x-1 transition-all duration-300">
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-secondary/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              <span className="text-2xl lg:text-3xl font-bold mb-4 block text-primary-foreground">
                Our objective:
              </span>
              <span className="text-lg lg:text-xl text-primary-foreground/80 leading-relaxed mb-8 block max-w-3xl mx-auto">
                To help organisations establish structured, compliant and
                performance-oriented people management systems.
              </span>
              
              {/* Button with gradient background */}
              <div className="inline-block group/btn relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary-foreground rounded-tl-2xl rounded-br-2xl" />
                <Button 
                  asChild 
                  size="lg" 
                  className="relative rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none bg-card text-primary hover:bg-transparent hover:text-primary-foreground border-primary-foreground group-hover/btn:-translate-y-1 group-hover/btn:-translate-x-1 transition-all duration-300"
                >
                  <Link href="/contact?service=hr-consulting">Get HR Support</Link>
                </Button>
              </div>
            </div>
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
          <div className="w-96 h-0.5 bg-gradient-to-r from-transparent via-primary-foreground/50 to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
