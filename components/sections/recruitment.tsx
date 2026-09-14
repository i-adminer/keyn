"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { Check } from "lucide-react"

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
]

const assessmentCriteria = [
  "Skills",
  "Experience",
  "Competencies",
  "Culture",
  "Performance expectations",
]

export function RecruitmentSection() {
  return (
    <Section background="light" className="section-spacing">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            label="RECRUITMENT"
            title={
              <>
                Find the Right Talent.
                <br />
                <span className="text-blue-royal">Build the Right Team.</span>
              </>
            }
            className="mb-8"
          />

          <p className="text-lg leading-relaxed text-neutral-700 mb-8">
            We support organisations throughout the recruitment lifecycle — from
            identifying workforce requirements to sourcing, screening and
            shortlisting qualified candidates.
          </p>

          <div className="mb-10">
            <h4 className="text-xl font-semibold text-navy-deep mb-4">
              Services
            </h4>
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
                  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <Button asChild size="lg" variant="primary">
            <Link href="/contact?service=recruitment">
              Start a Recruitment Request
            </Link>
          </Button>
        </motion.div>

        {/* Assessment Highlight */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:sticky lg:top-32"
        >
          <div className="bg-navy-deep text-white p-8 lg:p-10 rounded-lg">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              We focus on more than qualifications.
            </h3>
            <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
              We assess candidates against:
            </p>
            <div className="space-y-4">
              {assessmentCriteria.map((criterion, index) => (
                <motion.div
                  key={criterion}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10"
                >
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-gold" />
                  </div>
                  <span className="text-lg font-medium">{criterion}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
