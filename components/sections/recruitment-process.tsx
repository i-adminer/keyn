"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
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
    description:
      "Candidates are assessed against the requirements of the position.",
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

export function RecruitmentProcess() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background via-card/30 to-background border-b">
      <div className="container-premium">
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
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
            <span className="text-sm font-bold tracking-widest text-primary">
              OUR PROCESS
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-secondary to-primary rounded-full" />
          </div>

          {/* Heading */}
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
            <span className="text-foreground">From </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Vacancy
            </span>
            <span className="text-foreground"> to </span>
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Talent
            </span>
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Process Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group relative"
              >
                {/* Gradient Background Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-tl-2xl rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Step Card */}
                <div className="relative flex gap-4 p-5 bg-card border border-border/50 rounded-tl-2xl rounded-br-2xl group-hover:border-primary/50 group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-all duration-300">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5">
                      <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                        <span className="text-sm font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <span className="text-lg font-bold text-foreground mb-1 block group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed block">
                      {step.description}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Visual/Image Area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:sticky lg:top-32 group"
          >
            {/* Gradient Background Layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-tl-3xl rounded-br-3xl" />
            
            {/* Image Container */}
            <div className="relative h-[400px] lg:h-[600px] bg-card border border-primary/20 rounded-tl-3xl rounded-br-3xl overflow-hidden group-hover:-translate-y-1 group-hover:-translate-x-1 transition-all duration-300">
              {/* Placeholder for image - will be replaced with actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                      <span className="text-3xl">📊</span>
                    </div>
                  </div>
                  <span className="text-lg font-semibold text-muted-foreground block">
                    Professional Recruitment Process Visualization
                  </span>
                </div>
              </div>

              {/* Uncomment when you have the image */}
              {/* <Image
                src="/images/recruitment-process.png"
                alt="Recruitment Process"
                fill
                className="object-cover"
                quality={100}
              /> */}

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <div className="w-96 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
