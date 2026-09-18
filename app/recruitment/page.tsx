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
  Award,
  FileCheck,
  Target,
  Users,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

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
];

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
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your organisation, vacancy and candidate requirements.",
  },
  {
    number: "02",
    title: "Source",
    description:
      "We identify suitable candidates through targeted sourcing and talent networks.",
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
    description:
      "We support structured candidate assessment and interview processes.",
  },
  {
    number: "06",
    title: "Select",
    description:
      "You make the final hiring decision with better information and a stronger candidate pool.",
  },
  {
    number: "07",
    title: "Follow Up",
    description:
      "We maintain professional communication throughout the recruitment process.",
  },
];

export default function RecruitmentPage() {
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
                  <span className="text-white">Find the Right Talent.</span>
                  <span className="text-transparent bg-linear-to-r from-secondary to-white bg-clip-text w-max">
                    Build the Right Team.
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
                    RECRUITMENT & TALENT ACQUISITION
                  </span>
                </div>

                <span className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.03] mb-6 block">
                  End-to-End{" "}
                  <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Recruitment Support
                  </span>
                </span>

                <div className="space-y-4 text-lg leading-8 text-muted-foreground max-w-3xl">
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
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* RECRUITMENT SERVICES */}
        <AnimatedSection>
          <section className="relative py-14 lg:py-16 bg-card border-y">
            <div className="container-premium">
              <div className="max-w-3xl mb-9 lg:mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-14 bg-linear-to-r from-primary to-secondary" />
                  <span className="text-xs font-bold tracking-[0.2em] text-primary">
                    OUR SERVICES
                  </span>
                </div>

                <span className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                  Comprehensive recruitment support across{" "}
                  <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                    all levels and employment types
                  </span>
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border hover:border-primary/40 hover:bg-muted/30 transition-all"
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

        {/* ASSESSMENT APPROACH */}
        <AnimatedSection>
          <section className="relative py-14 lg:py-16 bg-primary text-primary-foreground">
            <div className="container-premium">
              <div className="max-w-3xl mb-9 lg:mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-14 bg-linear-to-r from-white to-secondary" />
                  <span className="text-xs font-bold tracking-[0.2em] text-white">
                    OUR APPROACH
                  </span>
                </div>

                <span className="text-2xl md:text-3xl font-bold tracking-tight leading-tight text-white">
                  We focus on more than{" "}
                  <span className="bg-linear-to-r from-secondary to-white bg-clip-text text-transparent">
                    qualifications alone
                  </span>
                </span>
                <p className="text-lg text-primary-foreground/80 mt-4">
                  Our candidate assessment goes beyond skills and experience to
                  evaluate fit and future performance.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {assessmentCriteria.map((criterion, index) => {
                  const Icon = criterion.icon;
                  return (
                    <motion.div
                      key={criterion.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className="bg-primary-foreground/5 backdrop-blur-sm p-6 rounded-xl border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/20 text-secondary mb-4">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-lg font-bold text-white block mb-2">
                        {criterion.title}
                      </span>
                      <p className="text-sm text-primary-foreground/70 leading-relaxed">
                        {criterion.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* PROCESS */}
        <AnimatedSection>
          <section className="relative py-14 lg:py-16">
            <div className="container-premium">
              <div className="max-w-3xl mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-14 bg-linear-to-r from-primary to-secondary" />
                  <span className="text-xs font-bold tracking-[0.2em] text-primary">
                    OUR METHODOLOGY
                  </span>
                </div>

                <span className="text-2xl md:text-3xl font-bold tracking-tight leading-tight block mb-3">
                  From Vacancy to{" "}
                  <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Talent
                  </span>
                </span>
                <p className="text-muted-foreground">
                  Our structured recruitment process ensures quality at every stage.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {process.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="relative"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-primary/10 text-primary font-bold shrink-0">
                          {step.number}
                        </div>
                        <span className="text-lg font-bold text-foreground">
                          {step.title}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
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
                      READY TO START
                    </span>
                    <span className="h-px w-14 bg-linear-to-r from-primary to-secondary" />
                  </div>

                  <span className="text-2xl md:text-3xl font-bold tracking-tight leading-tight block mb-4">
                    <span className="text-foreground">
                      Tell us about your vacancy and we'll help you{" "}
                    </span>
                    <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                      find the right talent
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
                        <Link href="/contact?service=recruitment">
                          Start a Recruitment Request
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
