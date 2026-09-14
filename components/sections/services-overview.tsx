"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Search, Shield, PenTool, BarChart } from "lucide-react"

const services = [
  {
    number: "01",
    icon: Search,
    title: "Recruitment & Talent Acquisition",
    description:
      "Find the right talent. Build the right team.",
    href: "/recruitment",
  },
  {
    number: "02",
    icon: Shield,
    title: "HR Consulting",
    description:
      "Practical HR solutions for growing organisations.",
    href: "/hr-consulting",
  },
  {
    number: "03",
    icon: PenTool,
    title: "CV & Career Services",
    description:
      "Your CV is more than a document. It is your career marketing tool.",
    href: "/cv-career-services",
  },
  {
    number: "04",
    icon: BarChart,
    title: "Training & Development",
    description:
      "Develop people. Strengthen performance.",
    href: "/training",
  },
]

export function ServicesOverview() {
  return (
    <Section background="white" className="section-spacing">
      <SectionHeader
        title="What We Do"
        description="Practical people solutions for organisations and professionals."
        className="mb-16"
      />

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <Link href={service.href} className="block">
                <div className="relative p-8 lg:p-10 bg-white border border-neutral-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Number */}
                  <div className="text-6xl font-bold text-gold/20 mb-4 leading-none">
                    {service.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-lg bg-blue-royal/10 flex items-center justify-center mb-6 group-hover:bg-blue-royal/20 transition-colors">
                    <Icon className="w-7 h-7 text-blue-royal" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-navy-deep mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-blue-royal font-semibold group-hover:gap-3 transition-all">
                    <span>Learn more</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>

                  {/* Accent line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-blue-royal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-lg" />
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
