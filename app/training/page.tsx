"use client"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { Check, Users2, Building2, GraduationCap, Presentation } from "lucide-react"


const trainingAreas = [
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
  "Conflict resolution",
  "Time management",
  "Team building",
  "Change management",
]

const formats = [
  {
    icon: Building2,
    title: "In-House Workshops",
    description: "Training delivered at your organisation's premises, tailored to your team's needs and schedule.",
    benefits: ["Cost-effective for groups", "Customized to your context", "Team learning experience", "Flexible scheduling"],
  },
  {
    icon: Users2,
    title: "Customised Programmes",
    description: "Training programmes designed specifically to address your organisation's unique development needs.",
    benefits: ["Addresses specific challenges", "Relevant to your industry", "Practical application focus", "Ongoing support available"],
  },
  {
    icon: GraduationCap,
    title: "Targeted Development Sessions",
    description: "Focused training for specific teams, departments, or individuals requiring specialized development.",
    benefits: ["Role-specific content", "Small group or 1-on-1", "Intensive skill building", "Immediate application"],
  },
]

export default function TrainingPage() {
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
              TRAINING & DEVELOPMENT
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
              <span className="text-navy-deep">Develop People.</span>
              <br />
              <span className="text-blue-royal">Strengthen Performance.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed mb-10">
              Professional training programmes to build the skills your people need to
              perform effectively and contribute to organisational success.
            </p>
            <Button asChild size="xl" variant="primary">
              <Link href="/contact?service=training">Discuss Training</Link>
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
                Training & Development Overview
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
                <p>
                  Employee development is essential for building capable teams and
                  maintaining competitive performance. Whether you need to strengthen
                  supervisory capabilities, improve workplace communication, or develop
                  people management skills across your organisation, professional
                  training can accelerate growth and performance.
                </p>
                <p>
                  Keyn People Advisory provides practical training and development
                  programmes focused on building the skills that directly impact
                  workplace performance. Our training is delivered by experienced HR
                  practitioners who understand real-world workplace challenges and provide
                  actionable guidance participants can apply immediately.
                </p>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Training Areas */}
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
                Training Areas
              </h2>
              <p className="text-xl text-neutral-600">
                We provide training across a wide range of workplace and people
                management topics.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {trainingAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg border border-neutral-200 hover:border-gold hover:shadow-sm transition-all"
                >
                  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 font-medium">{area}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Programme Formats */}
        <Section background="white" className="section-spacing">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">
                Programme Formats
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Flexible training delivery options to suit your organisation's needs.
              </p>
            </motion.div>

            <div className="space-y-8">
              {formats.map((format, index) => {
                const Icon = format.icon
                return (
                  <motion.div
                    key={format.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-neutral-50 border border-neutral-200 rounded-lg p-8 lg:p-10 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="w-16 h-16 rounded-lg bg-blue-royal/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-blue-royal" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl lg:text-3xl font-bold text-navy-deep mb-4">
                          {format.title}
                        </h3>
                        <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                          {format.description}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {format.benefits.map((benefit) => (
                            <div key={benefit} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                              <span className="text-neutral-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </Section>

        {/* Approach */}
        <Section background="navy" className="section-spacing">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-lg bg-gold/20 flex items-center justify-center mx-auto mb-8">
                <Presentation className="w-8 h-8 text-gold" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Our Training Approach
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-neutral-300 leading-relaxed">
                <p>
                  Our training is practical, interactive and focused on real workplace
                  scenarios. We don't just present theory — we work with participants to
                  apply concepts to their actual work situations.
                </p>
                <p className="text-white font-medium text-xl md:text-2xl">
                  Training programmes can be tailored to your organisation's specific
                  needs and delivered on-site or virtually.
                </p>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Process */}
        <Section background="light" className="section-spacing">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">
                How We Work
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: "01",
                  title: "Training Needs Assessment",
                  description: "We discuss your organisation's development priorities and training requirements.",
                },
                {
                  number: "02",
                  title: "Programme Design",
                  description: "We design training content aligned with your needs and participant profiles.",
                },
                {
                  number: "03",
                  title: "Delivery & Evaluation",
                  description: "We deliver the training and provide post-training support as needed.",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg border border-neutral-200 hover:shadow-lg transition-shadow"
                >
                  <div className="text-5xl font-bold text-gold/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-navy-deep mb-4">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section background="white" className="section-spacing">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">
              Let's Discuss Your Training Needs
            </h2>
            <p className="text-xl text-neutral-600 mb-10 leading-relaxed">
              Whether you need team training, management development, or specialized
              workplace programmes — we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" variant="primary">
                <Link href="/contact?service=training">Discuss Training</Link>
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
