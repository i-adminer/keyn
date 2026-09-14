"use client"

import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { Users, Shield, FileEdit } from "lucide-react"

const options = [
  {
    icon: Users,
    title: "Hire Talent",
    description:
      "Need to recruit? Let us help you find the right talent.",
    href: "/contact?service=recruitment",
    variant: "primary" as const,
  },
  {
    icon: Shield,
    title: "Get HR Support",
    description:
      "Need professional HR guidance? Let's discuss your organisation's needs.",
    href: "/contact?service=hr-consulting",
    variant: "secondary" as const,
  },
  {
    icon: FileEdit,
    title: "Write My CV",
    description:
      "Ready to advance your career? Let's strengthen your professional profile.",
    href: "/cv-career-services",
    variant: "gold" as const,
  },
]

export function FinalCTA() {
  return (
    <Section background="white" className="section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
          <span className="text-navy-deep">Let's Build Your Next</span>
          <br />
          <span className="text-blue-royal">Success Story.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {options.map((option, index) => {
          const Icon = option.icon
          return (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-neutral-200 p-8 rounded-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-lg bg-blue-royal/10 flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-blue-royal" />
              </div>
              <h3 className="text-2xl font-bold text-navy-deep mb-4">
                {option.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                {option.description}
              </p>
              <Button asChild size="lg" variant={option.variant} className="w-full">
                <Link href={option.href}>{option.title}</Link>
              </Button>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
