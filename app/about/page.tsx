"use client";

import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Target, Heart, Shield, Lightbulb, Users, TrendingUp } from "lucide-react";

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
      <main className="flex-1">
        {/* Hero */}
        <AnimatedSection>
          <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-b from-muted/50 to-background">
            <div className="container-premium">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center"
              >
                {/* Eyebrow */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                  <span className="text-sm font-bold tracking-widest text-primary">
                    ABOUT KEYN PEOPLE ADVISORY
                  </span>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-secondary to-primary rounded-full" />
                </div>

                {/* Heading */}
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-8">
                  <span className="text-foreground">Your People. </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Our Expertise.
                  </span>
                  <br />
                  <span className="text-foreground">Better Outcomes.</span>
                </div>

                {/* Description */}
                <span className="text-xl md:text-2xl text-muted-foreground leading-relaxed block">
                  We combine recruitment expertise with practical HR experience to
                  deliver talent and people solutions for organisations and
                  professionals.
                </span>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        {/* Who We Are */}
        <AnimatedSection>
          <section className="relative py-16 overflow-hidden border-b">
            <div className="container-premium">
              <div className="max-w-4xl mx-auto">
                {/* Eyebrow */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                  <span className="text-sm font-bold tracking-widest text-primary">
                    WHO WE ARE
                  </span>
                </div>

                {/* Heading */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-8">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Practical HR Experience
                  </span>
                  <span className="text-foreground"> Meets </span>
                  <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                    Recruitment Expertise
                  </span>
                </div>

                {/* Description Paragraphs */}
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
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

                {/* Decorative Line */}
                <div className="mt-12 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* What We Believe - Compact Grid */}
        <AnimatedSection>
          <section className="relative py-16 overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background border-b">
            <div className="container-premium">
              <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                    <span className="text-sm font-bold tracking-widest text-primary">
                      WHAT WE BELIEVE
                    </span>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-secondary to-primary rounded-full" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1]">
                    <span className="text-foreground">Our approach to talent and HR is </span>
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      grounded in core principles
                    </span>
                  </div>
                </div>

                {/* Beliefs - Compact No-Card Design */}
                <div className="grid md:grid-cols-2 gap-8">
                  {beliefs.map((belief, index) => {
                    const Icon = belief.icon;
                    return (
                      <motion.div
                        key={belief.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex gap-4 group"
                      >
                        {/* Icon with Gradient Border */}
                        <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl bg-gradient-to-br from-primary to-secondary p-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                          <div className="w-full h-full bg-background rounded-tl-2xl rounded-br-2xl flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>

                        {/* Text Content */}
                        <div>
                          <div className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {belief.title}
                          </div>
                          <span className="text-muted-foreground leading-relaxed">
                            {belief.description}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Our Approach - Full Width Primary */}
        <AnimatedSection>
          <section className="relative py-16 overflow-hidden bg-primary">
            <div className="container-premium">
              <div className="max-w-4xl mx-auto text-center">
                {/* Eyebrow */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-secondary to-primary-foreground rounded-full" />
                  <span className="text-sm font-bold tracking-widest text-secondary">
                    OUR APPROACH
                  </span>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-primary-foreground to-secondary rounded-full" />
                </div>

                {/* Content */}
                <div className="space-y-6 text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
                  <p>
                    Unlike recruitment providers focused only on filling vacancies,
                    <strong className="text-primary-foreground">
                      {" "}
                      Keyn People Advisory approaches talent from a broader HR
                      perspective.
                    </strong>
                  </p>
                  <p>
                    We don't just ask{" "}
                    <em className="text-primary-foreground/70">
                      "Who can do the job?"
                    </em>
                  </p>
                  <div className="text-2xl md:text-3xl font-bold text-secondary py-4">
                    "Who will succeed and contribute to objectives?"
                  </div>
                  <p>
                    This perspective allows us to assess candidates not only on skills
                    and experience, but also on competencies, cultural alignment, and
                    performance expectations.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* We Serve Two Audiences - Two Column */}
        <AnimatedSection>
          <section className="relative py-16 overflow-hidden border-b">
            <div className="container-premium">
              <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                    <span className="text-sm font-bold tracking-widest text-primary">
                      WHO WE SERVE
                    </span>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-secondary to-primary rounded-full" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] mb-4">
                    <span className="text-foreground">Supporting </span>
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Organisations & Professionals
                    </span>
                  </div>
                  <span className="text-lg text-muted-foreground block">
                    Our services bridge the gap between talent and opportunity.
                  </span>
                </div>

                {/* Two Columns - No Heavy Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Employers */}
                  <div className="group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl bg-gradient-to-br from-primary to-secondary p-0.5 group-hover:scale-110 transition-transform">
                        <div className="w-full h-full bg-background rounded-tl-2xl rounded-br-2xl flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        For Employers
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      We help organisations find the right talent, build stronger HR
                      systems, and develop their people through recruitment, HR
                      consulting, and training services.
                    </p>
                    <div className="inline-block group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-tl-2xl rounded-br-2xl" />
                      <Button
                        asChild
                        size="lg"
                        className="relative rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none bg-primary text-white hover:bg-transparent hover:text-primary border-primary group-hover:-translate-y-1 group-hover:-translate-x-1 transition-all duration-300"
                      >
                        <Link href="/employers">Learn More</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Professionals */}
                  <div className="group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-tl-2xl rounded-br-2xl bg-gradient-to-br from-secondary to-primary p-0.5 group-hover:scale-110 transition-transform">
                        <div className="w-full h-full bg-background rounded-tl-2xl rounded-br-2xl flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-secondary" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-foreground group-hover:text-secondary transition-colors">
                        For Professionals
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      We help professionals present themselves competitively through
                      professional CV writing, career positioning, and job application
                      support.
                    </p>
                    <div className="inline-block group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary rounded-tl-2xl rounded-br-2xl" />
                      <Button
                        asChild
                        size="lg"
                        className="relative rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none bg-secondary text-foreground hover:bg-transparent hover:text-secondary border-secondary group-hover:-translate-y-1 group-hover:-translate-x-1 transition-all duration-300"
                      >
                        <Link href="/professionals">Learn More</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Philosophy Quote - Primary Background */}
        <AnimatedSection>
          <section className="relative py-16 overflow-hidden bg-primary">
            <div className="container-premium">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-24 h-1 bg-secondary mx-auto mb-8" />
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                  <span className="text-primary-foreground">
                    Talent is an investment —
                  </span>
                  <br />
                  <span className="text-secondary">not an expense.</span>
                </div>
                <span className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed block">
                  The right people can improve productivity, strengthen customer
                  relationships, reduce turnover and contribute directly to
                  organisational growth.
                </span>
                <div className="w-24 h-1 bg-secondary mx-auto mt-8" />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Final CTA - Compact */}
        <AnimatedSection>
          <section className="relative py-16 overflow-hidden">
            <div className="container-premium">
              <div className="max-w-4xl mx-auto text-center">
                {/* Eyebrow */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                  <span className="text-sm font-bold tracking-widest text-primary">
                    LET'S WORK TOGETHER
                  </span>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-secondary to-primary rounded-full" />
                </div>

                {/* Heading */}
                <div className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] mb-6">
                  <span className="text-foreground">Whether you need to </span>
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    hire talent, strengthen HR, or advance your career
                  </span>
                  <span className="text-foreground"> — we're here to help.</span>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                  <div className="inline-block group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-tl-2xl rounded-br-2xl" />
                    <Button
                      asChild
                      size="lg"
                      className="relative rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none bg-primary text-white hover:bg-transparent hover:text-primary border-primary group-hover:-translate-y-1 group-hover:-translate-x-1 transition-all duration-300"
                    >
                      <Link href="/contact">Get in Touch</Link>
                    </Button>
                  </div>

                  <Button asChild size="lg" variant="outline">
                    <Link href="/">Explore Our Services</Link>
                  </Button>
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
