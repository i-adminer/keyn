"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HRAdvisory() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background border-b">
      <div className="container-premium">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
            <span className="text-sm font-bold tracking-widest text-primary">
              HR ADVISORY
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-secondary to-primary rounded-full" />
          </div>

          {/* Heading */}
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="text-foreground">People Decisions Require </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              More Than Paperwork
            </span>
          </div>

          {/* Description */}
          <span className="text-lg text-muted-foreground leading-relaxed block">
            We provide independent HR advisory support to business owners, managers
            and organisations dealing with people-management challenges.
          </span>
        </motion.div>

        {/* Two Column Layout: Image + Advisory Areas */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square">
              <Image
                src="/images/lady.png"
                alt="HR Advisory Services"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
                quality={100}
              />
            </div>
          </motion.div>

          {/* Right: Advisory Areas as Descriptive Paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-2xl font-bold text-foreground mb-6 block">
              Advisory areas
            </span>
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-base text-muted-foreground leading-relaxed"
              >
                We guide you through employee performance concerns, workplace 
                disciplinary processes, and employee grievances with practical, 
                objective advice that considers both organizational needs and 
                fair treatment.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base text-muted-foreground leading-relaxed"
              >
                Our support extends to employment documentation, HR policy 
                interpretation, and employee exits, ensuring your processes 
                remain structured, compliant, and professionally managed at 
                every stage.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-base text-muted-foreground leading-relaxed"
              >
                Whether you're implementing performance improvement processes, 
                navigating workforce restructuring, or seeking HR compliance 
                clarity, we provide actionable guidance grounded in employment 
                regulations and workplace best practice.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-base text-muted-foreground leading-relaxed"
              >
                From recruitment decisions and employee relations to broader 
                HR strategy, we act as your independent advisor when people 
                decisions require more than templates and guesswork.
              </motion.p>
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
