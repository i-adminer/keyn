"use client";

import { motion } from "framer-motion";
import { Target, Award, Users2, Sparkles } from "lucide-react";
import Image from "next/image";

const highlights = [
  {
    icon: Target,
    title: "Targeted Solutions",
    description: "Tailored to your specific organisational or career needs",
  },
  {
    icon: Award,
    title: "Practical HR Experience",
    description: "Grounded in real-world people management practices",
  },
  {
    icon: Users2,
    title: "Professional Approach",
    description: "Aligned with organisational objectives and career goals",
  },
];

const stats = [
  { value: "500+", label: "Placements Made" },
  { value: "200+", label: "Companies Served" },
  { value: "98%", label: "Client Satisfaction" },
];

export function AboutSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/50 to-background" />

      <div className="container-premium relative z-10">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 md:mb-20">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-12 h-0.5 bg-linear-to-r from-primary to-secondary rounded-full" />
              <span className="text-sm font-bold tracking-widest text-primary">
                ABOUT KEYN
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              <span className="text-foreground">Connecting </span>
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                Talent
              </span>
              <br />
              <span className="text-foreground">With </span>
              <span className="bg-linear-to-r from-secondary to-primary bg-clip-text text-transparent">
                Opportunity
              </span>
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground mb-8"
            >
              <p>
                Keyn People Advisory is a professional recruitment and human
                resource consulting firm providing talent acquisition, HR
                advisory, career development and CV writing services to
                organisations and professionals.
              </p>
              <p>
                We combine practical HR experience with a deep understanding of
                recruitment, employee management and workplace requirements to
                deliver solutions that are practical, professional and aligned
                with organisational objectives.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Highlights Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="group"
                >
                  <div className="relative bg-card border-2 border-border rounded-tl-3xl rounded-br-3xl p-6 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-secondary/5 rounded-tl-3xl rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10 flex items-start gap-4">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-tl-2xl rounded-br-2xl bg-linear-to-br from-primary to-secondary p-0.5"
                      >
                        <div className="w-full h-full bg-card rounded-tl-2xl rounded-br-2xl flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                          <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-white transition-colors duration-300" />
                        </div>
                      </motion.div>

                      {/* Text */}
                      <div className="flex-1">
                        <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {highlight.title}
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full h-0.5 bg-linear-to-r from-transparent via-primary to-transparent rounded-full"
        />
      </div>
    </section>
  );
}
