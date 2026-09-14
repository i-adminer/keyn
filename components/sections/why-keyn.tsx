"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

const capabilities = [
  "Recruitment",
  "Employee relations",
  "Performance management",
  "HR operations",
  "Workforce planning",
  "Employee development",
  "Workplace compliance",
  "Talent retention",
]

export function WhyKeyn() {
  return (
    <Section background="white" className="section-spacing">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="WHY CHOOSE KEYN"
          title={
            <>
              <span className="text-navy-deep">Recruitment Expertise.</span>
              <br />
              <span className="text-blue-royal">HR Perspective.</span>
            </>
          }
          description="Unlike recruitment providers focused only on filling vacancies, Keyn People Advisory approaches talent from a broader HR perspective."
          className="mb-16 text-center mx-auto"
        />

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Traditional Approach */}
          <div className="bg-neutral-100 p-8 rounded-lg border border-neutral-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-neutral-300 flex items-center justify-center">
                <X className="w-5 h-5 text-neutral-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-700">
                Traditional approach
              </h3>
            </div>
            <p className="text-2xl lg:text-3xl font-medium text-neutral-600 leading-relaxed">
              "Who can do the job?"
            </p>
          </div>

          {/* Keyn Approach */}
          <div className="bg-blue-royal p-8 rounded-lg shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                  <Check className="w-5 h-5 text-navy-deep" />
                </div>
                <h3 className="text-xl font-bold text-white">Keyn approach</h3>
              </div>
              <p className="text-2xl lg:text-3xl font-medium text-white leading-relaxed">
                "Who is most likely to succeed in this organisation and
                contribute to its objectives?"
              </p>
            </div>
          </div>
        </motion.div>

        {/* Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-navy-deep mb-6 text-center">
            Supporting capabilities
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white border border-neutral-200 p-4 rounded-lg text-center hover:border-gold hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-navy-deep">{capability}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
