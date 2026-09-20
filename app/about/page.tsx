"use client";

import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";
import {
  Target,
  Heart,
  Shield,
  Lightbulb,
  Users,
  Eye,
  TrendingUp,
  ArrowUpRight,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { useTheme } from "next-themes";

// Counter component for animated numbers
function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const [displayValue, setDisplayValue] = React.useState("0" + suffix);

  React.useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  React.useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest).toString() + suffix);
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return (
    <span ref={ref} className="text-2xl font-bold text-primary block">
      {displayValue}
    </span>
  );
}

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
  const { theme, resolvedTheme } = useTheme();

  // Determine which hero background to use based on theme
  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const aboutImage =
    currentTheme === "dark" ? "/images/concept.png" : "/images/conceptd.png";
  return (
    <>
      <Navigation />

      <main className="flex-1 overflow-hidden">
        {/* HERO */}
        <AnimatedSection>
          <section className="relative min-h-50 lg:min-h-85 flex items-center overflow-visible ">
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

            <div className="container-premium relative z-10 w-full pt-32   h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl "
              >
                <span className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight leading-[0.98] mb-4 flex flex-col gap-2 font-realce">
                  <span className="text-white">Your People. </span>

                  <span className="text-white">Our Expertise.</span>

                  <span className="text-transparent bg-linear-to-r from-secondary to-white bg-clip-text w-max">
                    Better Outcomes.
                  </span>
                </span>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        {/* WHO WE ARE */}
        <AnimatedSection>
          <section className="relative py-14 lg:py-32">
            <div className="container-premium">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-14 bg-linear-to-r from-primary to-secondary" />
                    <span className="text-xs font-bold tracking-[0.2em] text-primary">
                      WHO WE ARE
                    </span>
                  </div>

                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.03] mb-4">
                    Practical HR Experience
                    <span className="text-foreground">Meets</span>{" "}
                    <span className="bg-linear-to-r from-secondary to-primary bg-clip-text text-transparent  ">
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
                </div>

                <div className=" h-full flex justify-center items-center">
                  <img
                    src={aboutImage}
                    alt="Background"
                    className="z-0  bg-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* WHAT WE BELIEVE */}
        <AnimatedSection>
          <section className="relative py-14 lg:py-16 bg-card border-y">
            <div className="container-premium">
              <div className="max-w-3xl mb-9 lg:mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-14 bg-linear-to-r from-primary to-secondary" />
                  <span className="text-xs font-bold tracking-[0.2em] text-primary">
                    WHAT WE BELIEVE
                  </span>
                </div>

                <span className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                  Our approach to talent and HR is{" "}
                  <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
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

        {/* TEAM & VALUES */}
        <AnimatedSection>
          <section className="relative py-14 lg:py-16 bg-card">
            <div className="container-premium">
              {/* Team Profile */}
              <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-center mb-16">
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="relative aspect-square rounded-tl-3xl rounded-br-3xl overflow-hidden border border-border/50">
                    <Image
                      src="/images/director.png"
                      alt="Mr. Eric Otera"
                      fill
                      className="object-cover"
                      quality={90}
                    />
                  </div>
                  {/* Decorative corner accent */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-primary rounded-tl-3xl" />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-secondary rounded-br-3xl" />
                </motion.div>

                {/* Profile Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-14 bg-linear-to-r from-primary to-secondary" />
                    <span className="text-xs font-bold tracking-[0.2em] text-primary">
                      LEADERSHIP
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="text-3xl md:text-4xl font-bold tracking-tight text-foreground block mb-2">
                      Mr. Eric Otera
                    </span>
                    <span className="text-lg text-primary font-semibold">
                      Founder & Director
                    </span>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Eric Otera is the founder and director of Keyn People
                      Advisory, bringing over 10 years of extensive human
                      resource management and recruitment experience to the
                      organization. His career has been built on a deep
                      understanding of talent acquisition, employee relations,
                      and strategic HR consulting across diverse industries.
                    </p>
                    <p>
                      With a proven track record in matching exceptional talent
                      with organizational needs, Eric has helped hundreds of
                      companies build high-performing teams while supporting
                      professionals in advancing their careers. His approach
                      combines practical HR expertise with a genuine commitment
                      to understanding both employer objectives and candidate
                      aspirations.
                    </p>
                    <p>
                      Eric's vision for Keyn People Advisory extends beyond
                      traditional recruitment—he believes in creating meaningful
                      connections that drive organizational success and
                      individual career growth. His leadership philosophy
                      centers on quality over speed, practical solutions, and
                      viewing talent as a strategic investment rather than an
                      expense.
                    </p>
                  </div>

                  {/* Credentials/Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border/50">
                    <div>
                      <AnimatedCounter value={10} suffix="+" />
                      <span className="text-xs text-muted-foreground">
                        Years Experience
                      </span>
                    </div>
                    <div>
                      <AnimatedCounter value={500} suffix="+" />
                      <span className="text-xs text-muted-foreground">
                        Placements
                      </span>
                    </div>
                    <div>
                      <AnimatedCounter value={200} suffix="+" />
                      <span className="text-xs text-muted-foreground">
                        Companies
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Mission, Vision, Core Values - Compact Grid */}
              <div className="grid md:grid-cols-3 gap-4">
                {/* Mission */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group relative rounded-xl border border-border bg-card p-4 hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-tl-lg rounded-br-lg bg-linear-to-br from-primary to-secondary p-0.5 shrink-0 group-hover:scale-110 transition-transform">
                      <div className="w-full h-full bg-background rounded-tl-lg rounded-br-lg flex items-center justify-center">
                        <Target className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-bold tracking-wider text-primary mb-1.5 block">
                        MISSION
                      </span>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        Empower <strong className="text-foreground">young talent</strong> with career guidance and <strong className="text-foreground">global opportunities</strong>, while helping organizations hire the <strong className="text-foreground">right talent efficiently</strong>.
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Vision */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="group relative rounded-xl border border-border bg-card p-4 hover:border-secondary/40 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-tl-lg rounded-br-lg bg-linear-to-br from-secondary to-primary p-0.5 shrink-0 group-hover:scale-110 transition-transform">
                      <div className="w-full h-full bg-background rounded-tl-lg rounded-br-lg flex items-center justify-center">
                        <Eye className="h-4 w-4 text-secondary" />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-bold tracking-wider text-secondary mb-1.5 block">
                        VISION
                      </span>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        A future where every young person has a <strong className="text-foreground">global career pathway</strong> and every organization secures the <strong className="text-foreground">right talent, faster</strong>.
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Core Values */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="group relative rounded-xl border border-border bg-card p-4 hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-tl-lg rounded-br-lg bg-linear-to-br from-primary to-secondary p-0.5 shrink-0 group-hover:scale-110 transition-transform">
                      <div className="w-full h-full bg-background rounded-tl-lg rounded-br-lg flex items-center justify-center">
                        <Heart className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-bold tracking-wider text-primary mb-1.5 block">
                        CORE VALUES
                      </span>
                      <div className="space-y-1.5 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                          <span>Quality Over Speed</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                          <span>Practical Solutions</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                          <span>Professional Integrity</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                          <span>Client-Centered Approach</span>
                        </div>
                      </div>
                    </div>
                  </div>
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
                      LET'S WORK TOGETHER
                    </span>
                    <span className="h-px w-14 bg-linear-to-r from-primary to-secondary" />
                  </div>

                  <span className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                    <span className="text-foreground">
                      Whether you need to{" "}
                    </span>
                    <span>
                      hire talent, strengthen HR, or advance your career
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
                        className="relative rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none bg-primary text-primary-foreground  border-primary group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-all duration-300 px-7"
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
