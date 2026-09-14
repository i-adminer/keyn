"use client"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { FileText, Award, TrendingUp, Check, ArrowRight } from "lucide-react"


const services = [
  {
    title: "Professional CV Writing",
    description: "Expertly crafted CVs that present your experience effectively and position you competitively.",
  },
  {
    title: "CV Redesign",
    description: "Transform your existing CV into a professional document that strengthens your application.",
  },
  {
    title: "ATS-Friendly CV",
    description: "CVs optimized for applicant tracking systems used by modern employers.",
  },
  {
    title: "Executive CV",
    description: "Premium CVs for senior leadership that emphasize strategic impact and achievements.",
  },
  {
    title: "LinkedIn Profile",
    description: "Optimized professional profiles that attract opportunities and build your online brand.",
  },
  {
    title: "Cover Letters",
    description: "Compelling cover letters tailored to specific roles that strengthen your candidacy.",
  },
]

const benefits = [
  "Stand out in competitive job markets",
  "Professional presentation of your achievements",
  "ATS-compatible formatting",
  "Career positioning and personal branding",
  "Faster job application turnaround",
  "Guidance from HR professionals",
]

export default function ProfessionalsPage() {
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
              FOR PROFESSIONALS
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
              <span className="text-foreground">Ready for Your Next</span>
              <br />
              <span className="text-primary">Career Opportunity?</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10">
              Stand out in a competitive job market with a professional CV and stronger
              career positioning.
            </p>
            <Button asChild size="xl" variant="primary">
              <Link href="/contact?service=cv">
                Build My CV
                <ArrowRight className="w-5 h-5" />
              </Link>
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
                Your CV Is Your Career Marketing Tool
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-foreground">
                <p>
                  Your CV is often the first — and sometimes only — opportunity to make
                  an impression on a potential employer. It needs to clearly communicate
                  your value, highlight your achievements, and position you as the right
                  candidate for the opportunities you're pursuing.
                </p>
                <p>
                  Keyn People Advisory provides professional CV writing and career
                  services to help you present yourself competitively. Our CVs are
                  written by HR professionals who understand what employers look for and
                  how to position candidates effectively.
                </p>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Services */}
        <Section background="muted" className="section-spacing">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Professional Career Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We provide comprehensive CV and career document services for professionals
                at all levels.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-12"
            >
              <Button asChild size="lg" variant="secondary">
                <Link href="/cv-career-services">
                  View All Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </Section>

        {/* Benefits */}
        <Section background="default" className="section-spacing">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Why Work With Keyn
              </h2>
              <p className="text-xl text-muted-foreground">
                Professional CV writing from HR practitioners who understand recruitment.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-5 bg-muted rounded-lg hover:bg-muted transition-colors"
                >
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* How It Works */}
        <Section background="muted" className="section-spacing">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                How It Works
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  number: "01",
                  title: "Submit Information",
                  description: "Provide your career details and target roles.",
                },
                {
                  number: "02",
                  title: "Professional Review",
                  description: "We review your background and requirements.",
                },
                {
                  number: "03",
                  title: "CV Development",
                  description: "We craft your professional documents.",
                },
                {
                  number: "04",
                  title: "Delivery",
                  description: "Receive your completed career documents.",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-card p-6 rounded-lg border border-border"
                >
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-xl font-bold text-secondary mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
              Ready to Build Your Professional CV?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Let's strengthen your professional profile for your next career opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" variant="accent">
                <Link href="/contact?service=cv">Build My CV</Link>
              </Button>
              <Button asChild size="xl" variant="secondary">
                <Link href="/cv-career-services">View Services</Link>
              </Button>
            </div>
          </motion.div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
