"use client"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { Check, FileText, Users, Shield, AlertCircle, Scale, TrendingUp } from "lucide-react"


const consultingServices = [
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

const advisoryAreas = [
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

const benefits = [
  {
    icon: Shield,
    title: "Professional HR Support",
    description: "Access HR expertise without maintaining a large internal function",
  },
  {
    icon: FileText,
    title: "Structured Systems",
    description: "Establish compliant and performance-oriented people management",
  },
  {
    icon: Scale,
    title: "Compliance & Best Practice",
    description: "Align with employment regulations and industry standards",
  },
  {
    icon: Users,
    title: "Employee Relations",
    description: "Navigate workplace relationships and conflicts professionally",
  },
  {
    icon: AlertCircle,
    title: "Independent Advisory",
    description: "Objective guidance on complex people-management challenges",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "HR support that grows with your organisation's needs",
  },
]

export default function HRConsultingPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <Section background="muted" className="pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-caption text-secondary font-bold mb-6">
              HR CONSULTING & ADVISORY
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
              <span className="text-foreground">Practical HR Solutions</span>
              <br />
              <span className="text-primary">For Growing Organisations.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10">
              We provide flexible HR consulting services to businesses that need
              professional HR support without necessarily maintaining a large internal
              HR function.
            </p>
            <Button asChild size="xl" variant="primary">
              <Link href="/contact?service=hr-consulting">Get HR Support</Link>
            </Button>
          </motion.div>
        </Section>

        {/* Overview */}
        <Section background="default" className="section-spacing">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                HR Consulting Overview
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-foreground">
                <p>
                  Many growing organisations need professional HR support but do not
                  require (or cannot sustain) a full-time HR team. Others have HR
                  departments that need additional capacity or specialist expertise for
                  specific projects.
                </p>
                <p>
                  Keyn People Advisory provides flexible HR consulting services to
                  support businesses in establishing, maintaining and improving their
                  people management systems. We work as an extension of your team,
                  providing practical HR solutions that are aligned with your
                  organisational needs and compliant with employment regulations.
                </p>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Benefits */}
        <Section background="muted" className="section-spacing">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Why Work With Us
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professional HR support tailored to your organisation's stage and needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
                  >
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </Section>

        {/* Consulting Services */}
        <Section background="default" className="section-spacing">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                HR Consulting Services
              </h2>
              <p className="text-xl text-muted-foreground">
                We provide comprehensive HR support across all aspects of people
                management.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {consultingServices.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="flex items-start gap-3 p-5 bg-muted rounded-lg hover:bg-muted transition-colors"
                >
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Advisory Section */}
        <Section background="primary" className="section-spacing">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                People Decisions Require More Than Paperwork
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We provide independent HR advisory support to business owners, managers
                and organisations dealing with people-management challenges.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {advisoryAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-card/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 text-primary-foreground hover:bg-card/10 transition-colors"
                >
                  {area}
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Objective */}
        <Section background="default" className="section-spacing">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-primary text-primary-foreground p-10 lg:p-16 rounded-lg text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Objective
              </h2>
              <p className="text-xl md:text-2xl text-neutral-200 leading-relaxed">
                To help organisations establish structured, compliant and
                performance-oriented people management systems that support business
                objectives and employee development.
              </p>
            </div>
          </motion.div>
        </Section>

        {/* How We Work */}
        <Section background="muted" className="section-spacing">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                How We Work
              </h2>
              <p className="text-xl text-muted-foreground">
                Our approach is practical, flexible and aligned with your needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: "01",
                  title: "Understand Your Needs",
                  description: "We discuss your organisation, current HR challenges, and what you need support with.",
                },
                {
                  number: "02",
                  title: "Develop a Solution",
                  description: "We design practical HR solutions that align with your operational requirements and compliance needs.",
                },
                {
                  number: "03",
                  title: "Implement & Support",
                  description: "We work with you to implement solutions and provide ongoing advisory support as needed.",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="text-5xl font-bold text-secondary/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section background="primary" className="section-spacing">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Discuss Your HR Needs
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Whether you need help with a specific HR project or ongoing people
              management support, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" variant="accent">
                <Link href="/contact?service=hr-consulting">Get HR Support</Link>
              </Button>
              <Button asChild size="xl" variant="secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
