"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { motion } from "framer-motion"
import { Target, Award, Users2 } from "lucide-react"

const highlights = [
  {
    icon: Target,
    title: "Targeted Solutions",
    description: "Tailored to your specific organisational or career needs",
  },
  {
    icon: Award,
    title: "Practical HR Experience",
    description: "Grounded in real-world people management practices",
  },
  {
    icon: Users2,
    title: "Professional Approach",
    description: "Aligned with organisational objectives and career goals",
  },
]

export function AboutSection() {
  return (
    <Section background="light" className="section-spacing">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <div className="text-caption text-gold font-bold mb-4">
              ABOUT KEYN
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              <span className="text-navy-deep">Your People.</span>
              <br />
              <span className="text-blue-royal">Our Expertise.</span>
              <br />
              <span className="text-navy-deep">Better Outcomes.</span>
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
            <p>
              Keyn People Advisory is a professional recruitment and human
              resource consulting firm providing talent acquisition, HR advisory,
              career development and CV writing services to organisations and
              professionals.
            </p>
            <p>
              We combine practical HR experience with a deep understanding of
              recruitment, employee management and workplace requirements to
              deliver solutions that are practical, professional and aligned with
              organisational objectives.
            </p>
            <p className="font-medium text-navy-deep">
              Whether you are an employer looking for the right person or a
              professional looking to advance your career, we provide tailored
              solutions designed around your specific needs.
            </p>
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-royal/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-blue-royal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-deep mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </Section>
  )
}
