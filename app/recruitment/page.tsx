"use client"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { Check, Search, Users, FileCheck, Target, Award, TrendingUp } from "lucide-react"


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
  {
    icon: Award,
    title: "Skills",
    description: "Technical and functional capabilities required for the role",
  },
  {
    icon: FileCheck,
    title: "Experience",
    description: "Relevant work history and demonstrated performance",
  },
  {
    icon: Target,
    title: "Competencies",
    description: "Behavioural capabilities and professional attributes",
  },
  {
    icon: Users,
    title: "Culture",
    description: "Alignment with organisational values and work environment",
  },
  {
    icon: TrendingUp,
    title: "Performance Expectations",
    description: "Capacity to meet and exceed role requirements",
  },
]

const process = [
  {
    number: "01",
    title: "Understand",
    description: "We understand your organisation, vacancy and candidate requirements.",
  },
  {
    number: "02",
    title: "Source",
    description: "We identify suitable candidates through targeted sourcing and talent networks.",
  },
  {
    number: "03",
    title: "Screen",
    description: "Candidates are assessed against the requirements of the position.",
  },
  {
    number: "04",
    title: "Shortlist",
    description: "We present qualified candidates for your consideration.",
  },
  {
    number: "05",
    title: "Interview",
    description: "We support structured candidate assessment and interview processes.",
  },
  {
    number: "06",
    title: "Select",
    description: "You make the final hiring decision with better information and a stronger candidate pool.",
  },
  {
    number: "07",
    title: "Follow Up",
    description: "We maintain professional communication throughout the recruitment process.",
  },
]

export default function RecruitmentPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <Section background="light" className="pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-caption text-gold font-bold mb-6">
              RECRUITMENT & TALENT ACQUISITION
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
              <span className="text-navy-deep">Find the Right Talent.</span>
              <br />
              <span className="text-blue-royal">Build the Right Team.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed mb-10">
              We support organisations throughout the recruitment lifecycle — from
              identifying workforce requirements to sourcing, screening and
              shortlisting qualified candidates.
            </p>
            <Button asChild size="xl" variant="primary">
              <Link href="/contact?service=recruitment">
                Start a Recruitment Request
              </Link>
            </Button>
          </motion.div>
        </Section>

        {/* Overview */}
        <Section background="white" className="section-spacing">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-8">
                Recruitment Overview
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
                <p>
                  Finding the right person for a position requires more than posting
                  a job advertisement and reviewing CVs. It requires a structured
                  approach to sourcing, screening, assessing and selecting candidates
                  who not only possess the required skills but are also likely to
                  succeed within your organisation.
                </p>
                <p>
                  Keyn People Advisory provides end-to-end recruitment support,
                  handling the entire process from vacancy analysis to candidate
                  shortlisting. Whether you need to fill an entry-level position or
                  conduct a confidential executive search, we provide professional
                  recruitment services tailored to your organisation's needs.
                </p>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Services */}
        <Section background="light" className="section-spacing">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">
                Recruitment Services
              </h2>
              <p className="text-xl text-neutral-600">
                We provide comprehensive recruitment support across all levels and
                employment types.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-3 p-5 bg-white rounded-lg border border-neutral-200 hover:border-gold hover:shadow-md transition-all"
                >
                  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Assessment Approach */}
        <Section background="navy" className="section-spacing">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                We Focus on More Than Qualifications
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Our candidate assessment goes beyond skills and experience to
                evaluate fit and future performance.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {assessmentCriteria.slice(0, 3).map((criterion, index) => {
                const Icon = criterion.icon
                return (
                  <motion.div
                    key={criterion.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {criterion.title}
                    </h3>
                    <p className="text-neutral-300 leading-relaxed">
                      {criterion.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
              {assessmentCriteria.slice(3).map((criterion, index) => {
                const Icon = criterion.icon
                return (
                  <motion.div
                    key={criterion.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {criterion.title}
                    </h3>
                    <p className="text-neutral-300 leading-relaxed">
                      {criterion.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </Section>

        {/* Process */}
        <Section background="white" className="section-spacing">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="text-caption text-gold font-bold mb-4">
                OUR METHODOLOGY
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">
                From Vacancy to Talent
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Our structured recruitment process ensures quality at every stage.
              </p>
            </motion.div>

            {/* Desktop: Horizontal */}
            <div className="hidden lg:block relative">
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
                {process.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative flex flex-col items-center"
                  >
                    <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-blue-royal flex items-center justify-center font-bold text-blue-royal mb-6 shadow-sm">
                      {step.number}
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-navy-deep mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile: Vertical */}
            <div className="lg:hidden space-y-6">
              {process.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-2 border-blue-royal flex items-center justify-center font-bold text-blue-royal shadow-sm flex-shrink-0">
                      {step.number}
                    </div>
                    {index < process.length - 1 && (
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
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl md:text-2xl font-bold text-navy-deep mb-2">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section background="navy" className="section-spacing">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Recruitment?
            </h2>
            <p className="text-xl text-neutral-300 mb-10 leading-relaxed">
              Tell us about your vacancy and we'll help you find the right talent for
              your organisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" variant="gold">
                <Link href="/contact?service=recruitment">
                  Start a Recruitment Request
                </Link>
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
