"use client";

import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Check,
  FileText,
  Users,
  Shield,
  AlertCircle,
  Scale,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

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
];

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
];

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
];

const workProcess = [
  {
    number: "01",
    title: "Understand Your Needs",
    description:
      "We discuss your organisation, current HR challenges, and what you need support with.",
  },
  {
    number: "02",
    title: "Develop a Solution",
    description:
      "We design practical HR solutions that align with your operational requirements and compliance needs.",
  },
  {
    number: "03",
    title: "Implement & Support",
    description:
      "We work with you to implement solutions and provide ongoing advisory support as needed.",
  },
];

export default function HRConsultingPage() {
  return (
    <>
      <Navigation />

      <main className="flex-1 overflow-hidden">
        {/* HERO - Same as About/CV/Contact pages */}
        <AnimatedSection>
          <section className="relative min-h-50 lg:min-h-85 flex items-center overflow-visible">
            <div className="absolute inset-x-0 top-24 -bottom-10 z-0 overflow-hidden">
              <Image
                src="/images/bgweb.jpeg"
                alt="Background"
                fill
                className="object-cover object-bottom"
                quality={100}
                priority
              />
            </div>

            <div className="container-premium relative z-10 w-full pt-32 h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <span className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight leading-[0.98] mb-4 flex flex-col gap-2 font-realce">
                  <span className="text-white">Practical HR Solutions</span>
                  <span className="text-transparent bg-linear-to-r from-secondary to-white bg-clip-text w-max">
                    For Growing Organisations.
                  </span>
                </span>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        {/* OVERVIEW */}
        <AnimatedSection>
          <section className="relative py-14 lg:py-32">
            <div className="container-premium">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-14 bg-linear-to-r from-primary to-secondary" />
                  <span className="text-xs font-bold tracking-[0.2em] text-primary">
                    HR CONSULTING & ADVISORY
                  </span>
                </div>

                <span className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.03] mb-6 block">
                  Flexible HR Consulting for{" "}
                  <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Every Stage of Growth
                  </span>
                </span>

                <div className="space-y-4 text-lg leading-8 text-muted-foreground max-w-3xl">
                  <p>
                    Many growing organisations need professional HR support but do not
                    require (or cannot sustain) a full-time HR team. Others have HR
                    departments that need additional capacity or specialist expertise
                    for specific projects.
                  </p>
                  <p>
                    Keyn People Advisory provides flexible HR consulting services to
                    support businesses in establishing, maintaining and improving their
                    people management systems. We work as an extension of your team,
                    providing practical HR solutions that are aligned with your
                    organisational needs and compliant with employment regulations.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* WHY WORK WITH US */}
        <AnimatedSection>
          <section className="relative py-14 lg:py-16 bg-card border-y">
            <div className="container-premium">
              <div className="max-w-3xl mb-9 lg:mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-14 bg-linear-to-r from-primary to-secondary" />
                  <span className="text-xs font-bold tracking-[0.2em] text-primary">
                    WHY CHOOSE US
                  </span>
                </div>

                <span className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                  Professional HR support tailored to your{" "}
                  <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                    organisation's stage and needs
                  </span>
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px overflow-hidden rounded-[1.75rem] border bg-border">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;

                  return (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className="group bg-background p-6 lg:p-7 min-h-56.25 flex flex-col hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="text-xs font-semibold text-muted-foreground/50">
                          0{index + 1}
                        </span>
                      </div>

                      <div className="mt-auto">
                        <span className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors block">
                          {benefit.title}
                        </span>
                        <p className="text-sm leading-6 text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* HR CONSULTING SERVICES */}
        <AnimatedSection>
          <section className="relative py-14 lg:py-16">
            <div className="container-premium">
              <div className="max-w-3xl mb-9 lg:mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-14 bg-linear-to-r from-primary to-secondary" />
                  <span className="text-xs font-bold tracking-[0.2em] text-primary">
                    OUR SERVICES
                  </span>
                </div>

                <span className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                  Comprehensive HR support across{" "}
                  <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                    all aspects of people management
                  </span>
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {consultingServices.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary/40 hover:bg-muted/30 transition-all"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-foreground font-medium text-sm">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* HR ADVISORY */}
        <AnimatedSection>
          <section className="relative py-14 lg:py-16 bg-primary text-primary-foreground">
            <div className="container-premium">
              <div className="max-w-3xl mb-9 lg:mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-14 bg-linear-to-r from-white to-secondary" />
                  <span className="text-xs font-bold tracking-[0.2em] text-white">
                    HR ADVISORY
                  </span>
                </div>

                <span className="text-2xl md:text-3xl font-bold tracking-tight leading-tight text-white block mb-4">
                  People Decisions Require More Than{" "}
                  <span className="bg-linear-to-r from-secondary to-white bg-clip-text text-transparent">
                    Paperwork
                  </span>
                </span>
                <p className="text-lg text-primary-foreground/80">
                  We provide independent HR advisory support to business owners,
                  managers and organisations dealing with people-management challenges.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {advisoryAreas.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-primary-foreground/5 backdrop-blur-sm px-4 py-3 rounded-lg border border-primary-foreground/10 text-primary-foreground text-sm hover:bg-primary-foreground/10 transition-colors"
                  >
                    {area}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* HOW WE WORK */}
        <AnimatedSection>
          <section className="relative py-14 lg:py-16 bg-card">
            <div className="container-premium">
              <div className="max-w-3xl mb-9 lg:mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-14 bg-linear-to-r from-primary to-secondary" />
                  <span className="text-xs font-bold tracking-[0.2em] text-primary">
                    OUR APPROACH
                  </span>
                </div>

                <span className="text-2xl md:text-3xl font-bold tracking-tight leading-tight block mb-3">
                  How We{" "}
                  <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Work
                  </span>
                </span>
                <p className="text-muted-foreground">
                  Our approach is practical, flexible and aligned with your needs.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {workProcess.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative rounded-xl border border-border bg-background p-6 hover:border-primary/40 transition-colors"
                  >
                    <div className="text-5xl font-bold text-primary/10 mb-4 group-hover:text-primary/20 transition-colors">
                      {step.number}
                    </div>
                    <span className="text-xl font-bold text-foreground mb-3 block">
                      {step.title}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Objective Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-12 relative overflow-hidden rounded-2xl border border-primary bg-primary p-8 lg:p-10 text-center"
              >
                <span className="text-2xl md:text-3xl font-bold text-white mb-4 block">
                  Our Objective
                </span>
                <p className="text-lg text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
                  To help organisations establish structured, compliant and
                  performance-oriented people management systems that support business
                  objectives and employee development.
                </p>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        {/* FINAL CTA */}
        <AnimatedSection>
          <section className="relative py-14 lg:py-16">
            <div className="container-premium">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-muted/25 px-6 py-10 md:px-9 lg:px-12">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-border/20" />
                <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full border border-primary/10" />

                <div className="relative text-center max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="h-px w-14 bg-linear-to-r from-primary to-secondary" />
                    <span className="text-xs font-bold tracking-[0.2em] text-primary">
                      LET'S TALK
                    </span>
                    <span className="h-px w-14 bg-linear-to-r from-primary to-secondary" />
                  </div>

                  <span className="text-2xl md:text-3xl font-bold tracking-tight leading-tight block mb-4">
                    <span className="text-foreground">
                      Whether you need help with a specific HR project or ongoing{" "}
                    </span>
                    <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                      people management support
                    </span>
                    <span className="text-foreground"> - we're here to help.</span>
                  </span>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-7">
                    <div className="inline-block group relative">
                      <div className="absolute inset-0 bg-linear-to-br from-primary to-secondary rounded-tl-2xl rounded-br-2xl" />
                      <Button
                        asChild
                        size="lg"
                        className="relative rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none bg-primary text-primary-foreground border-primary group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-all duration-300 px-7"
                      >
                        <Link href="/contact?service=hr-consulting">
                          Get HR Support
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="px-7"
                    >
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <Footer />
    </>
  );
}
