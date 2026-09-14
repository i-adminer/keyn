"use client"

import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { Target, Users, Shield, TrendingUp, Heart, Lightbulb } from "lucide-react"

const beliefs = [
  {
    icon: Target,
    title: "Talent is Strategic",
    description: "The right people drive productivity, growth, and organisational success.",
  },
  {
    icon: Heart,
    title: "People are Human Capital",
    description: "We approach recruitment and HR with respect for both organisational needs and individual career aspirations.",
  },
  {
    icon: Shield,
    title: "Quality Over Speed",
    description: "We prioritise finding the right fit over simply filling vacancies quickly.",
  },
  {
    icon: Lightbulb,
    title: "Practical Solutions",
    description: "Our recommendations are grounded in real-world HR and workplace experience.",
  },
]

const expertise = [
  "Recruitment & Talent Acquisition",
  "Executive Search & Head Hunting",
  "HR Consulting & Advisory",
  "HR Policy & Procedure Development",
  "Performance Management Systems",
  "Employee Relations",
  "Professional CV Writing",
  "Career Development Support",
  "Training & Development",
  "Workforce Planning",
  "Organisational Development",
  "HR Compliance & Audits",
]

export default function AboutPage() {
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
              ABOUT KEYN PEOPLE ADVISORY
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
              <span className="text-foreground">Your People.</span>
              <br />
              <span className="text-primary">Our Expertise.</span>
              <br />
              <span className="text-foreground">Better Outcomes.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We combine recruitment expertise with practical HR experience to
              deliver talent and people solutions for organisations and professionals.
            </p>
          </motion.div>
        </Section>

        {/* Who We Are */}
        <Section background="default" className="section-spacing">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                Who We Are
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-foreground">
                <p>
                  <strong className="text-foreground">Keyn People Advisory</strong> is
                  a professional recruitment and human resource consulting firm
                  providing talent acquisition, HR advisory, career development and CV
                  writing services to organisations and professionals.
                </p>
                <p>
                  We combine practical HR experience with a deep understanding of
                  recruitment, employee management and workplace requirements to
                  deliver solutions that are practical, professional and aligned with
                  organisational objectives.
                </p>
                <p>
                  Whether you are an employer looking for the right person or a
                  professional looking to advance your career, we provide tailored
                  solutions designed around your specific needs.
                </p>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* What We Believe */}
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
                What We Believe
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our approach to talent and HR is grounded in core principles that
                guide everything we do.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {beliefs.map((belief, index) => {
                const Icon = belief.icon
                return (
                  <motion.div
                    key={belief.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow"
                  >
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {belief.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {belief.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </Section>

        {/* Our Approach */}
        <Section background="primary" className="section-spacing">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Our Approach
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                <p>
                  Unlike recruitment providers focused only on filling vacancies,
                  <strong className="text-primary-foreground"> Keyn People Advisory approaches
                  talent from a broader HR perspective.</strong>
                </p>
                <p>
                  We don't just ask <em className="text-muted-foreground">"Who can do the job?"</em>
                </p>
                <p className="text-xl md:text-2xl text-secondary font-semibold">
                  We ask: "Who is most likely to succeed in this organisation and
                  contribute to its objectives?"
                </p>
                <p>
                  This perspective allows us to assess candidates not only on skills
                  and experience, but also on competencies, cultural alignment, and
                  performance expectations.
                </p>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Our Expertise */}
        <Section background="default" className="section-spacing">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Expertise
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We provide comprehensive talent and HR solutions across the employee
                lifecycle.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {expertise.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-muted border border-border p-4 rounded-lg hover:border-secondary/80 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <p className="font-medium text-foreground">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Employers & Professionals */}
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
                We Serve Two Audiences
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our services support both organisations seeking talent and
                professionals advancing their careers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Employers */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-card p-8 lg:p-10 rounded-lg border border-border hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  For Employers
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We help organisations find the right talent, build stronger HR
                  systems, and develop their people through recruitment, HR
                  consulting, and training services.
                </p>
                <Button asChild variant="primary" size="lg">
                  <Link href="/employers">Learn More</Link>
                </Button>
              </motion.div>

              {/* Professionals */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-primary text-primary-foreground p-8 lg:p-10 rounded-lg shadow-lg"
              >
                <div className="w-16 h-16 rounded-lg bg-secondary/20 flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">For Professionals</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We help professionals present themselves competitively through
                  professional CV writing, career positioning, and job application
                  support.
                </p>
                <Button asChild variant="accent" size="lg">
                  <Link href="/professionals">Learn More</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* Philosophy */}
        <Section background="primary" className="section-spacing">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-24 h-1 bg-secondary mx-auto mb-8" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                <span className="text-primary-foreground">Talent is an investment —</span>
                <br />
                <span className="text-secondary">not an expense.</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                The right people can improve productivity, strengthen customer
                relationships, reduce turnover and contribute directly to
                organisational growth.
              </p>
              <div className="w-24 h-1 bg-secondary mx-auto mt-8" />
            </motion.div>
          </div>
        </Section>

        {/* Final CTA */}
        <Section background="default" className="section-spacing">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Whether you need to hire talent, strengthen your HR practices, or
              advance your career — we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" variant="primary">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="xl" variant="secondary">
                <Link href="/">Explore Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
