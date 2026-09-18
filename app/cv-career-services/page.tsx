"use client";

import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  Award,
  Briefcase,
  TrendingUp,
  Globe,
  Sparkles,
  Check,
  User,
  Users,
  Mail,
  ArrowUpRight,
  Target,
  Eye,
  Heart,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Professional CV Writing",
    description:
      "A comprehensive CV crafted from scratch by experienced HR professionals who understand what employers look for.",
  },
  {
    icon: Award,
    title: "CV Redesign",
    description:
      "Transform your existing CV into a professional document that presents your experience more effectively.",
  },
  {
    icon: TrendingUp,
    title: "ATS-Friendly CV",
    description:
      "CVs optimized for Applicant Tracking Systems used by many employers to screen applications.",
  },
  {
    icon: Sparkles,
    title: "Executive CV",
    description:
      "Premium CVs for senior leadership positions that emphasize strategic impact and leadership achievements.",
  },
  {
    icon: Users,
    title: "LinkedIn Profile",
    description:
      "Strengthen your professional online presence with an optimized LinkedIn profile that attracts opportunities.",
  },
  {
    icon: Mail,
    title: "Cover Letters",
    description:
      "Compelling cover letters tailored to specific roles that strengthen your application.",
  },
];

const audiences = [
  "Graduates",
  "Entry-level professionals",
  "Experienced professionals",
  "Managers & Senior executives",
  "Career changers",
  "International applicants",
];

export default function CVCareerServicesPage() {
  return (
    <>
      <Navigation />

      <main className="flex-1 overflow-hidden">
        {/* HERO - Exact same as About page */}
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
                  <span className="text-white">Your CV Is More</span>
                  <span className="text-white">Than a Document.</span>
                  <span className="text-transparent bg-linear-to-r from-secondary to-white bg-clip-text w-max">
                    It's Your Career Marketing Tool.
                  </span>
                </span>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        {/* WHO WE HELP */}
        <AnimatedSection>
          <section className="relative py-14 lg:py-32">
            <div className="container-premium">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-14 bg-linear-to-r from-primary to-secondary" />
                  <span className="text-xs font-bold tracking-[0.2em] text-primary">
                    WHO WE HELP
                  </span>
                </div>

                <span className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.03] mb-6 block">
                  Professional CV Services for{" "}
                  <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Every Career Stage
                  </span>
                </span>

                <div className="space-y-4 text-lg leading-8 text-muted-foreground max-w-3xl mb-8">
                  <p>
                    Keyn helps professionals at all career levels from graduates
                    and entry-level professionals to experienced managers,
                    senior executives, career changers, and international
                    applicants create clear, professional, and results-focused
                    CVs that stand out in competitive job markets.
                  </p>
                  <p>
                    Our services are crafted by experienced HR professionals who
                    have reviewed thousands of CVs and know exactly what
                    employers are looking for. We create ATS-friendly,
                    achievement focused CVs that highlight your strengths and
                    position you competitively.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* OUR SERVICES */}
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
                  Comprehensive{" "}
                  <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                    CV & Career Services
                  </span>
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px overflow-hidden rounded-[1.75rem] border bg-border">
                {services.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <motion.div
                      key={service.title}
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
                          {service.title}
                        </span>
                        <p className="text-sm leading-6 text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* WHY CHOOSE KEYN CV SERVICES */}
        <AnimatedSection>
          <section className="relative py-14 lg:py-16 bg-card">
            <div className="container-premium">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-14 bg-linear-to-r from-primary to-secondary" />
                    <span className="text-xs font-bold tracking-[0.2em] text-primary">
                      WHY CHOOSE US
                    </span>
                  </div>

                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.03] mb-6 block">
                    What Makes Our{" "}
                    <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                      CV Services Different
                    </span>
                  </span>

                  <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold text-foreground block mb-1">
                          HR Professional Expertise
                        </span>
                        <p className="text-sm">
                          Our CV writers are experienced HR professionals who
                          have reviewed thousands of CVs and know what employers
                          want.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold text-foreground block mb-1">
                          ATS-Friendly Format
                        </span>
                        <p className="text-sm">
                          All our CVs are optimized for Applicant Tracking
                          Systems to ensure your application gets seen.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold text-foreground block mb-1">
                          Results-Focused Content
                        </span>
                        <p className="text-sm">
                          We highlight achievements and quantifiable results,
                          not just job responsibilities.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="font-semibold text-foreground block mb-1">
                          Industry-Appropriate Presentation
                        </span>
                        <p className="text-sm">
                          We tailor your CV format and content to suit your
                          industry and target role.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="inline-block group relative">
                    <div className="absolute inset-0 bg-linear-to-br from-primary to-secondary rounded-tl-2xl rounded-br-2xl" />
                    <Button
                      asChild
                      size="lg"
                      className="relative rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none bg-primary text-primary-foreground border-primary group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-all duration-300 px-7"
                    >
                      <Link href="/contact?service=cv">
                        Build My CV
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="relative aspect-square rounded-tl-3xl rounded-br-3xl overflow-hidden border border-border/50">
                    <Image
                      src="/images/cv.png"
                      alt="Professional CV Services"
                      fill
                      className="object-contain p-8"
                      quality={90}
                    />
                  </div>
                  {/* Decorative corner accent */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-primary rounded-tl-3xl" />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-secondary rounded-br-3xl" />
                </motion.div>
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
                      READY TO GET STARTED
                    </span>
                    <span className="h-px w-14 bg-linear-to-r from-primary to-secondary" />
                  </div>

                  <span className="text-2xl md:text-3xl font-bold tracking-tight leading-tight block mb-4">
                    <span className="text-foreground">
                      Stand out in a competitive job market with a{" "}
                    </span>
                    <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                      professional CV
                    </span>
                  </span>

                  <p className="text-muted-foreground mb-8">
                    Let our HR professionals help you present your experience,
                    skills, and achievements in the best possible way.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <div className="inline-block group relative">
                      <div className="absolute inset-0 bg-linear-to-br from-primary to-secondary rounded-tl-2xl rounded-br-2xl" />
                      <Button
                        asChild
                        size="lg"
                        className="relative rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none bg-primary text-primary-foreground border-primary group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-all duration-300 px-7"
                      >
                        <Link href="/contact?service=cv">
                          Build My CV
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
                      <Link href="/contact">Ask a Question</Link>
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
