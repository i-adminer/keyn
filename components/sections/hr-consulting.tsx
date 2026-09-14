"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { Check } from "lucide-react"

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
]

export function HRConsulting() {
  return (
    <Section background="white" className="section-spacing">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="HR CONSULTING"
          title="Practical HR Solutions for Growing Organisations."
          description="We provide flexible HR consulting services to businesses that need professional HR support without necessarily maintaining a large internal HR function."
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <span className="text-neutral-700">{service}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-blue-royal text-white p-8 lg:p-10 rounded-lg text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Our objective:
          </h3>
          <p className="text-lg lg:text-xl text-neutral-200 leading-relaxed mb-8 max-w-3xl mx-auto">
            To help organisations establish structured, compliant and
            performance-oriented people management systems.
          </p>
          <Button asChild size="lg" variant="gold">
            <Link href="/contact?service=hr-consulting">Get HR Support</Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}
