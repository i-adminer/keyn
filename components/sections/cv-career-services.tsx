"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { FileText, Briefcase, TrendingUp, Award, Globe, Sparkles } from "lucide-react"

const audiences = [
  { icon: Award, name: "Graduates" },
  { icon: Briefcase, name: "Entry-level professionals" },
  { icon: TrendingUp, name: "Experienced professionals" },
  { icon: Award, name: "Managers" },
  { icon: Sparkles, name: "Senior executives" },
  { icon: TrendingUp, name: "Career changers" },
  { icon: Globe, name: "International applicants" },
  { icon: Briefcase, name: "Professionals seeking promotion" },
]

const services = [
  {
    name: "Professional CV Writing",
    description: "Comprehensive CV crafted by experienced HR professionals",
  },
  {
    name: "CV Redesign",
    description: "Transform your existing CV into a professional document",
  },
  {
    name: "ATS-Friendly CV",
    description: "Optimized for applicant tracking systems",
  },
  {
    name: "Executive CV",
    description: "Premium CVs for senior leadership positions",
  },
  {
    name: "LinkedIn Profile Optimisation",
    description: "Strengthen your professional online presence",
  },
  {
    name: "Cover Letters",
    description: "Compelling cover letters tailored to your target role",
  },
]

export function CVCareerServices() {
  return (
    <Section background="default" className="section-spacing">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="CV & CAREER SERVICES"
          title={
            <>
              Your CV Is More Than a Document.
              <br />
              <span className="text-primary">
                It Is Your Career Marketing Tool.
              </span>
            </>
          }
          description="Keyn helps professionals create clear, professional and results-focused CVs that stand out in competitive job markets."
          className="mb-16 text-center mx-auto"
        />

        {/* Target Audiences */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            We work with professionals at all career levels
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {audiences.map((audience, index) => {
              const Icon = audience.icon
              return (
                <motion.div
                  key={audience.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex flex-col items-center gap-3 p-4 bg-muted rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-sm font-medium text-foreground text-center">
                    {audience.name}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border p-6 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">
                {service.name}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button asChild size="xl" variant="primary">
            <Link href="/cv-career-services">Build My CV</Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}
