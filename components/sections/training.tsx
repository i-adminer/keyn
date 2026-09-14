"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { Check, Users2, Building2, GraduationCap } from "lucide-react"

const areas = [
  "Supervisory skills",
  "People management",
  "Recruitment and interviewing",
  "Performance management",
  "Workplace communication",
  "Employee relations",
  "HR fundamentals for managers",
  "Workplace professionalism",
  "Leadership development",
  "Employee onboarding",
  "Career development",
]

const programTypes = [
  {
    icon: Building2,
    title: "In-house workshops",
    description: "Delivered at your organisation's premises",
  },
  {
    icon: Users2,
    title: "Customised programmes",
    description: "Designed to address your specific training needs",
  },
  {
    icon: GraduationCap,
    title: "Targeted employee development",
    description: "Focused sessions for specific teams or individuals",
  },
]

export function Training() {
  return (
    <Section background="white" className="section-spacing">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="TRAINING & DEVELOPMENT"
          title={
            <>
              Develop People.
              <br />
              <span className="text-blue-royal">Strengthen Performance.</span>
            </>
          }
          className="mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-12">
          {/* Training Areas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-navy-deep mb-6">
              Training areas
            </h3>
            <div className="space-y-3">
              {areas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{area}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Programme Types */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-navy-deep mb-6">
              Programme formats
            </h3>
            <div className="space-y-6">
              {programTypes.map((type, index) => {
                const Icon = type.icon
                return (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-neutral-50 p-6 rounded-lg border border-neutral-200 hover:border-gold hover:shadow-sm transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-royal/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-royal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-navy-deep mb-1">
                          {type.title}
                        </h4>
                        <p className="text-neutral-600 leading-relaxed">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-blue-royal text-white p-8 lg:p-10 rounded-lg"
        >
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Training programmes can be tailored to your organisation's specific
            needs and delivered on-site or virtually.
          </p>
          <Button asChild size="lg" variant="gold">
            <Link href="/contact?service=training">Discuss Training</Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}
