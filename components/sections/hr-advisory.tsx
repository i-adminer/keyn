"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { motion } from "framer-motion"
import { AlertCircle, Users, FileCheck, Scale } from "lucide-react"

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
]

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
]

export function HRAdvisory() {
  return (
    <Section background="muted" className="section-spacing">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="HR ADVISORY"
          title="People Decisions Require More Than Paperwork."
          description="We provide independent HR advisory support to business owners, managers and organisations dealing with people-management challenges."
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Advisory areas
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {areas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="bg-card p-4 rounded-lg border border-border text-foreground hover:border-secondary/80 hover:shadow-sm transition-all"
              >
                {area}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
