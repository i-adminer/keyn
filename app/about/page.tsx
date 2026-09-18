"use client";

import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Target,
  Heart,
  Shield,
  Lightbulb,
  Users,
  TrendingUp,
  ArrowUpRight,
  CheckCircle2,
  Quote,
} from "lucide-react";

const beliefs = [
  {
    icon: Target,
    title: "Talent is Strategic",
    description:
      "The right people drive productivity, growth, and organisational success.",
  },
  {
    icon: Heart,
    title: "People are Human Capital",
    description:
      "We approach recruitment and HR with respect for both organisational needs and individual career aspirations.",
  },
  {
    icon: Shield,
    title: "Quality Over Speed",
    description:
      "We prioritise finding the right fit over simply filling vacancies quickly.",
  },
  {
    icon: Lightbulb,
    title: "Practical Solutions",
    description:
      "Our recommendations are grounded in real-world HR and workplace experience.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="flex-1 overflow-hidden">
        {/* HERO */}
        <AnimatedSection>
          <section className="relative min-h-[540px] lg:min-h-[580px] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/bgweb.jpeg"
                alt="Background"
                fill
                className="object-cover object-bottom"
                quality={100}
                priority
              />
            </div>

            <div className="absolute inset-0 z-[1] pointer-events-none">
              <div className="absolute -left-32 top-1/4 h-80 w-80 rounded-full border border-border/20" />
              <div className="absolute -left-20 top-[30%] h-56 w-56 rounded-full border border-border/10" />
              <div className="absolute right-[-140px] bottom-[-160px] h-[420px] w-[420px] rounded-full border border-border/20" />
            </div>

            <div className="container-premium relative z-10 w-full py-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 backdrop-blur-md mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-primary">
                    ABOUT KEYN PEOPLE ADVISORY
                  </span>
                </div>

                <span className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[0.98] mb-4">
                  <span className="text-foreground">Your People. </span>
                  <br />
                  <span className="text-primary">Our Expertise.</span>
                  <br />
                  <span className="text-foreground">Better Outcomes.</span>
                </span>

                <div className="flex items-center gap-4">
                  <div className="h-px w-16 bg-primary" />
                  <div className="h-px w-8 bg-primary/40" />
                </div>
              </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-background to-transparent" />
          </section>
        </AnimatedSection>

        {/* WHO WE ARE */}
        <AnimatedSection>
          <section className="relative py-14 lg:py-16">
            <div className="container-premium">
              <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-14 bg-gradient-to-r from-primary to-primary" />
                    <span className="text-xs font-bold tracking-[0.2em] text-primary">
                      WHO WE ARE
                    </span>
                  </div>

                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.03] mb-4">
                    <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
                      Practical HR Experience
                    </span>{" "}
                    <span className="text-foreground">Meets</span>{" "}
                    <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
                      Recruitment Expertise
                    </span>
                  </span>

                  <div className="space-y-4 text-lg leading-8 text-muted-foreground max-w-3xl">
                    <p>
                      <strong className="text-foreground">
                        Keyn People Advisory
                      </strong>{" "}
                      is a professional recruitment and human resource
                      consulting firm providing talent acquisition, HR advisory,
                      career development and CV writing services to
                      organisations and professionals.
                    </p>
                    <p>
                      We combine practical HR experience with a deep
                      understanding of recruitment, employee management and
                      workplace requirements to deliver solutions that are
                      practical, professional and aligned with organisational
                      objectives.
                    </p>
                    <p>
                      Whether you are an employer looking for the right person
                      or a professional looking to advance your career, we
                      provide tailored solutions designed around your specific
                      needs.
                    </p>
                  </div>

                  <div className="mt-7 flex items-center gap-5">
                    <div className="h-1 w-24 rounded-full bg-gradient-to-r from-primary to-primary" />
                    <div className="h-px flex-1 max-w-xs bg-border" />
                  </div>
                </div>

                <div className="relative min-h-[340px] rounded-[1.5rem] border border-border/70 bg-muted/30 p-5 lg:p-7 overflow-hidden">
                  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-border/20" />
                  <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full border border-primary/15" />

                  <div className="relative h-full min-h-[300px] rounded-[1.5rem] bg-primary p-6 md:p-8 flex flex-col justify-between overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />

                    <div className="relative">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary shadow-lg">
                        <Users className="h-7 w-7" />
                      </div>
                    </div>

                    <div className="relative">
                      <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                        People & Performance
                      </div>
                      <div className="text-2xl md:text-3xl font-bold leading-tight text-primary-foreground">
                        Building stronger teams through practical people
                        solutions.
                      </div>

                      <div className="mt-6 grid grid-cols-3 gap-3">
                        <div className="rounded-xl border border-border/10 bg-background/5 p-4">
                          <CheckCircle2 className="h-5 w-5 text-primary mb-3" />
                          <span className="text-xs text-primary-foreground/70">
                            Talent
                          </span>
                        </div>
                        <div className="rounded-xl border border-border/10 bg-background/5 p-4">
                          <CheckCircle2 className="h-5 w-5 text-primary mb-3" />
                          <span className="text-xs text-primary-foreground/70">
                            HR
                          </span>
                        </div>
                        <div className="rounded-xl border border-border/10 bg-background/5 p-4">
                          <CheckCircle2 className="h-5 w-5 text-primary mb-3" />
                          <span className="text-xs text-primary-foreground/70">
                            Careers
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* WHAT WE BELIEVE */}
        <AnimatedSection>
          <section className="relative py-14 lg:py-16 bg-gradient-to-b from-background via-muted/25 to-background border-y">
            <div className="container-premium">
              <div className="max-w-3xl mb-9 lg:mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-14 bg-gradient-to-r from-primary to-primary" />
                  <span className="text-xs font-bold tracking-[0.2em] text-primary">
                    WHAT WE BELIEVE
                  </span>
                </div>

                <span className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                  Our approach to talent and HR is{" "}
                  <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
                    grounded in core principles
                  </span>
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-[1.75rem] border bg-border">
                {beliefs.map((belief, index) => {
                  const Icon = belief.icon;

                  return (
                    <motion.div
                      key={belief.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className="group bg-background p-6 lg:p-7 min-h-[225px] flex flex-col hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="text-xs font-semibold text-muted-foreground/50">
                          0{index + 1}
                        </span>
                      </div>

                      <div className="mt-auto">
                        <span className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {belief.title}
                        </span>
                        <p className="text-sm leading-6 text-muted-foreground">
                          {belief.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* FINAL CTA */}
        <AnimatedSection>
          <section className="relative py-14 lg:py-16">
            <div className="container-premium">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-muted/25 px-6 py-10 md:px-9 lg:px-12">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-border/20" />
                <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full border border-primary/10" />

                <div className="relative text-center max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="h-px w-14 bg-gradient-to-r from-primary to-primary" />
                    <span className="text-xs font-bold tracking-[0.2em] text-primary">
                      LET'S WORK TOGETHER
                    </span>
                    <span className="h-px w-14 bg-gradient-to-r from-primary to-primary" />
                  </div>

                  <span className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                    <span className="text-foreground">
                      Whether you need to{" "}
                    </span>
                    <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
                      hire talent, strengthen HR, or advance your career
                    </span>
                    <span className="text-foreground">
                      {" "}
                      - we're here to help.
                    </span>
                  </span>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-7">
                    <div className="inline-block group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary rounded-tl-2xl rounded-br-2xl" />
                      <Button
                        asChild
                        size="lg"
                        className="relative rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none bg-primary text-primary-foreground hover:bg-transparent hover:text-primary border-primary group-hover:-translate-y-1 group-hover:-translate-x-1 transition-all duration-300 px-7"
                      >
                        <Link href="/contact">
                          Get in Touch
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
                      <Link href="/">Explore Our Services</Link>
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
