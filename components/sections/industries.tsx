"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { motion } from "framer-motion"

const industries = [
  "Manufacturing",
  "Healthcare & Pharmaceuticals",
  "FMCG",
  "Logistics & Supply Chain",
  "Education",
  "NGOs & Development Organisations",
  "ICT & Technology",
  "Finance & Accounting",
  "Sales & Marketing",
  "Construction",
  "Retail",
  "Professional Services",
]

export function Industries() {
  return (
    <Section background="muted" className="section-spacing">
      <SectionHeader
        label="EXPERIENCE"
        title="Industries We Serve"
        description="We work across diverse sectors to provide talent and HR solutions tailored to each industry's unique requirements."
        className="mb-16 text-center mx-auto"
      />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-card p-6 rounded-lg border border-border hover:border-secondary/80 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary group-hover:scale-150 transition-transform" />
                <p className="text-lg font-semibold text-foreground group-hover:text-primary/80 transition-colors">
                  {industry}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
