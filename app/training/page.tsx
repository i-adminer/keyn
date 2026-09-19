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
  Users2,
  Building2,
  GraduationCap,
  Presentation,
  ArrowUpRight,
} from "lucide-react";

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
];

const formats = [
  {
    icon: Building2,
    title: "In-House Workshops",
    description:
      "Training delivered at your organisation's premises, tailored to your team's needs and schedule.",
    benefits: [
      "Cost-effective for groups",
      "Customized to your context",
      "Team learning experience",
      "Flexible scheduling",
    ],
  },
  {
    icon: Users2,
    title: "Customised Programmes",
    description:
      "Training programmes designed specifically to address your organisation's unique development needs.",
    benefits: [
      "Addresses specific challenges",
      "Relevant to your industry",
      "Practical application focus",
      "Ongoing support available",
    ],
  },
  {
    icon: GraduationCap,
    title: "Targeted Development Sessions",
    description:
      "Focused training for specific teams, departments, or individuals requiring specialized development.",
    benefits: [
      "Role-specific content",
      "Small group or 1-on-1",
      "Intensive skill building",
      "Immediate application",
    ],
  },
];

const workProcess = [
  {
    number: "01",
    title: "Training Needs Assessment",
    description:
      "We discuss your organisation's development priorities and training requirements.",
  },
  {
    number: "02",
    title: "Programme Design",
    description:
      "We design training content aligned with your needs and participant profiles.",
  },
  {
    number: "03",
    title: "Delivery & Evaluation",
    description:
      "We deliver the training and provide post-training support as needed.",
  },
];

export default function TrainingPage() {
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
                  <span className="text-white">Develop People.</span>
                  <span className="text-transparent bg-linear-to-r from-secondary to-white bg-clip-text w-max">
                    Strengthen Performance.
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
                    TRAINING & DEVELOPMENT
                  </span>
                </div>

                <span className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.03] mb-6 block">
                  Build the Skills Your People Need to{" "}
                  <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Perform Effectively
                  </span>
                </span>

                <div className="space-y-4 text-lg leading-8 text-muted-foreground max-w-3xl">
                  <p>
                    Employee development is essential for building capable teams
                    and maintaining competitive performance. Whether you need to
                    strengthen supervisory capabilities, improve workplace
                    communication, or develop people management skills across
                    your organisation, professional training can accelerate
                    growth and performance.
                  </p>
                  <p>
                    Keyn People Advisory provides practical training and
                    development programmes focused on building the skills that
                    directly impact workplace performance. Our training is
                    delivered by experienced HR practitioners who understand
                    real-world workplace challenges and provide actionable
                    guidance participants can apply immediately.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* TRAINING AREAS */}
        <AnimatedSection>
          <section className="relative py-14 lg:py-16 bg-card border-y">
            <div className="container-premium">
              <div className="max-w-3xl mb-9 lg:mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-14 bg-linear-to-r from-primary to-secondary" />
                  <span className="text-xs font-bold tracking-[0.2em] text-primary">
                    TRAINING AREAS
                  </span>
                </div>

                <span className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                  Training across a wide range of{" "}
                  <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                    workplace and people management topics
                  </span>
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {trainingAreas.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border hover:border-primary/40 hover:bg-muted/30 transition-all"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-foreground font-medium text-sm">
                      {area}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* PROGRAMME FORMATS */}
        <AnimatedSection>
          <section className="relative py-14 lg:py-16">
            <div className="container-premium">
              <div className="max-w-3xl mb-9 lg:mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-14 bg-linear-to-r from-primary to-secondary" />
                  <span className="text-xs font-bold tracking-[0.2em] text-primary">
                    DELIVERY OPTIONS
                  </span>
                </div>

                <span className="text-2xl md:text-3xl font-bold tracking-tight leading-tight block mb-3">
                  Flexible Training{" "}
                  <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Delivery Options
                  </span>
                </span>
                <p className="text-muted-foreground">
                  Choose the format that suits your organisation's needs.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-px overflow-hidden rounded-[1.75rem] border bg-border">
                {formats.map((format, index) => {
                  const Icon = format.icon;

                  return (
                    <motion.div
                      key={format.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className="group bg-background p-6 lg:p-7 min-h-80 flex flex-col hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="text-xs font-semibold text-muted-foreground/50">
                          0{index + 1}
                        </span>
                      </div>

                      <div className="flex-1">
                        <span className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors block">
                          {format.title}
                        </span>
                        <p className="text-sm leading-6 text-muted-foreground mb-4">
                          {format.description}
                        </p>

                        <div className="space-y-2">
                          {format.benefits.map((benefit) => (
                            <div
                              key={benefit}
                              className="flex items-start gap-2"
                            >
                              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                                <Check className="h-3 w-3" />
                              </div>
                              <span className="text-xs text-muted-foreground">
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* OUR APPROACH */}
        <AnimatedSection>
          <section className="relative py-14 lg:py-16 bg-primary text-primary-foreground">
            <div className="container-premium">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-secondary/20 text-secondary mx-auto mb-6">
                    <Presentation className="h-8 w-8" />
                  </div>

                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="h-px w-14 bg-linear-to-r from-white to-secondary" />
                    <span className="text-xs font-bold tracking-[0.2em] text-white">
                      OUR APPROACH
                    </span>
                    <span className="h-px w-14 bg-linear-to-r from-white to-secondary" />
                  </div>

                  <span className="text-2xl md:text-3xl font-bold tracking-tight leading-tight text-white block mb-6">
                    Practical, Interactive &{" "}
                    <span className="bg-linear-to-r from-secondary to-white bg-clip-text text-transparent">
                      Focused on Real Workplace Scenarios
                    </span>
                  </span>

                  <div className="space-y-4 text-lg text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
                    <p>
                      We don't just present theory we work with participants to
                      apply concepts to their actual work situations.
                    </p>
                    <p className="text-xl text-white font-medium">
                      Training programmes can be tailored to your organisation's
                      specific needs and delivered on-site or virtually.
                    </p>
                  </div>
                </motion.div>
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
                    HOW WE WORK
                  </span>
                </div>

                <span className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                  Our{" "}
                  <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Training Process
                  </span>
                </span>
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
                      Whether you need team training, management development,
                      or{" "}
                    </span>
                    <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                      specialized workplace programmes
                    </span>
                    <span className="text-foreground">
                      {" "}
                      - we're here to help.
                    </span>
                  </span>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-7">
                    <div className="inline-block group relative">
                      <div className="absolute inset-0 bg-linear-to-br from-primary to-secondary rounded-tl-2xl rounded-br-2xl" />
                      <Button
                        asChild
                        size="lg"
                        className="relative rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none bg-primary text-primary-foreground border-primary group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-all duration-300 px-7"
                      >
                        <Link href="/contact?service=training">
                          Discuss Training
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
