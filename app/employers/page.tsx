"use client";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, Shield, TrendingUp, Check, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Recruitment & Talent Acquisition",
    description:
      "Find exceptional talent through professional recruitment services from executive search to entry-level hiring.",
    link: "/recruitment",
  },
  {
    icon: Shield,
    title: "HR Consulting & Advisory",
    description:
      "Strengthen your people management systems with practical HR support tailored to your organisation's needs.",
    link: "/hr-consulting",
  },
  {
    icon: TrendingUp,
    title: "Training & Development",
    description:
      "Build team capabilities through professional training in people management, leadership, and workplace skills.",
    link: "/training",
  },
];

const benefits = [
  "Access professional recruitment and HR expertise",
  "Structured candidate assessment and selection",
  "Compliant HR policies and procedures",
  "Performance-oriented people management",
  "Reduced time-to-hire with qualified candidates",
  "Practical solutions aligned with business needs",
];

export default function EmployersPage() {
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
              FOR EMPLOYERS
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
              <span className="text-foreground">Looking for</span>
              <br />
              <span className="text-primary">the Right Talent?</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10">
              Tell us what you are looking for and we will help you identify,
              assess and shortlist suitable candidates.
            </p>
            <Button asChild size="xl" variant="primary">
              <Link href="/contact?service=recruitment">
                Start Hiring
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </Section>

        {/* Services */}
        <Section background="default" className="section-spacing">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                How We Support Employers
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We provide comprehensive talent and HR solutions to help
                organisations build stronger teams and better people practices.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-card border border-border rounded-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* Why Work With Keyn */}
        <Section background="muted" className="section-spacing">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Why Employers Work With Keyn
              </h2>
              <p className="text-xl text-muted-foreground">
                We combine recruitment expertise with practical HR experience to
                deliver solutions that work for your organisation.
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
                  className="flex items-start gap-3 p-5 bg-card rounded-lg border border-border hover:border-secondary/80 hover:shadow-sm transition-all"
                >
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* How It Works */}
        <Section background="default" className="section-spacing">
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

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: "01",
                  title: "Tell Us What You Need",
                  description:
                    "Share your recruitment, HR, or training requirements through our contact form or direct consultation.",
                },
                {
                  number: "02",
                  title: "We Develop a Solution",
                  description:
                    "We design a practical approach aligned with your organisation's needs and priorities.",
                },
                {
                  number: "03",
                  title: "We Deliver Results",
                  description:
                    "We execute the solution finding candidates, building HR systems, or delivering training.",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center text-2xl font-bold text-secondary mx-auto mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Let's discuss how we can support your talent and HR needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" variant="accent">
                <Link href="/contact?service=recruitment">Start Hiring</Link>
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
  );
}
