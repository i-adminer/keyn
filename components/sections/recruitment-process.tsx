"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedSection } from "../ui/animated-section";

const steps = [
  { number: "01", title: "Understand", description: "Your requirements" },
  { number: "02", title: "Source", description: "Targeted talent" },
  { number: "03", title: "Screen", description: "Assess candidates" },
  { number: "04", title: "Shortlist", description: "Present qualified" },
  { number: "05", title: "Interview", description: "Structured process" },
  { number: "06", title: "Select", description: "Final decision" },
  { number: "07", title: "Follow Up", description: "Communication" },
];

export function RecruitmentProcess() {
  return (
    <AnimatedSection>
    <section className="relative py-20 overflow-hidden border-b">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Placeholder - replace with actual transparent PNG */}
        <div className="absolute inset-0 bg-linear-to-br from-background via-card/50 to-background" />

        <Image
          src="/images/recruitment-process-floating.png"
          alt="12345"
          fill
          className="object-cover object-center opacity-5"
          quality={100}
        />

        {/* linear Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-background/95 via-background/80 to-background/95" />
      </div>

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-0.5 bg-linear-to-r from-primary to-secondary rounded-full" />
            <span className="text-sm font-bold tracking-widest text-primary">
              OUR PROCESS
            </span>
            <div className="w-12 h-0.5 bg-linear-to-r from-secondary to-primary rounded-full" />
          </div>

          {/* Heading */}
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
            <span className="text-foreground">From </span>
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Vacancy
            </span>
            <span className="text-foreground"> to </span>
            <span className="bg-linear-to-r from-secondary to-primary bg-clip-text text-transparent">
              Talent
            </span>
          </div>
        </motion.div>

        {/* Horizontal Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-10 left-0 right-0 h-1 bg-border/30">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-linear-to-r from-primary via-secondary to-primary origin-left rounded-full"
            />
          </div>

          <div className="grid grid-cols-7 gap-2">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex flex-col items-center group"
              >
                {/* Number Circle */}
                <div className="relative z-10 mb-6">
                  <div className="w-20 h-20 rounded-full bg-linear-to-br from-primary to-secondary p-0.5 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                      <span className="text-lg font-bold bg-linear-to-br from-primary to-secondary bg-clip-text text-transparent">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <span className="text-base font-bold text-foreground mb-1 block group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </span>
                  <span className="text-xs text-muted-foreground block">
                    {step.description}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Compact Vertical Timeline - Mobile/Tablet */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
            >
              {/* linear Background Layer */}
              <div className="absolute inset-0 bg-linear-to-br from-primary to-secondary rounded-tl-2xl rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Step Card */}
              <div className="relative flex items-center gap-4 p-4 bg-card/80 backdrop-blur-sm border border-border/50 rounded-tl-2xl rounded-br-2xl group-hover:border-primary/50 group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-all duration-300">
                {/* Number Badge */}
                <div className="hrink-0">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-secondary p-0.5">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                      <span className="text-sm font-bold bg-linear-to-br from-primary to-secondary bg-clip-text text-transparent">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <span className="text-base font-bold text-foreground block group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </span>
                  <span className="text-sm text-muted-foreground block">
                    {step.description}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <div className="w-96 h-0.5 bg-linear-to-r from-transparent via-primary to-transparent rounded-full" />
        </motion.div>
      </div>    </section>
    </AnimatedSection>
  );
}
