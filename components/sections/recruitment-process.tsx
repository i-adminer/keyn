"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your organisation, vacancy and candidate requirements.",
  },
  {
    number: "02",
    title: "Source",
    description:
      "We identify suitable candidates through targeted sourcing and talent networks.",
  },
  {
    number: "03",
    title: "Screen",
    description:
      "Candidates are assessed against the requirements of the position.",
  },
  {
    number: "04",
    title: "Shortlist",
    description: "We present qualified candidates for your consideration.",
  },
  {
    number: "05",
    title: "Interview",
    description:
      "We support structured candidate assessment and interview processes.",
  },
  {
    number: "06",
    title: "Select",
    description:
      "You make the final hiring decision with better information and a stronger candidate pool.",
  },
  {
    number: "07",
    title: "Follow Up",
    description:
      "We maintain professional communication throughout the recruitment process.",
  },
]

export function RecruitmentProcess() {
  return (
    <Section background="default" className="section-spacing">
      <SectionHeader
        label="OUR PROCESS"
        title="From Vacancy to Talent."
        className="mb-16 text-center mx-auto"
      />

      {/* Desktop: Horizontal */}
      <div className="hidden lg:block relative">
        {/* Connection Line */}
        <div className="absolute top-8 left-0 right-0 h-0.5 bg-neutral-200">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-blue-royal via-gold to-blue-royal origin-left"
          />
        </div>

        <div className="grid grid-cols-7 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex flex-col items-center"
            >
              {/* Number Circle */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center font-bold text-primary mb-6 shadow-sm">
                {step.number}
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet: Vertical */}
      <div className="lg:hidden space-y-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative flex gap-6"
          >
            {/* Number Circle and Line */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-card border-2 border-primary flex items-center justify-center font-bold text-primary shadow-sm flex-shrink-0">
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div className="w-0.5 h-full mt-2 bg-neutral-200">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="w-full bg-gradient-to-b from-blue-royal via-gold to-blue-royal origin-top"
                    style={{ height: "100%" }}
                  />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
