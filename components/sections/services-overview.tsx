"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search, Shield, PenTool, BarChart } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Search,
    title: "Recruitment & Talent Acquisition",
    description: "Find the right talent. Build the right team.",
    href: "/recruitment",
  },
  {
    number: "02",
    icon: Shield,
    title: "HR Consulting",
    description: "Practical HR solutions for growing organisations.",
    href: "/hr-consulting",
  },
  {
    number: "03",
    icon: PenTool,
    title: "CV & Career Services",
    description:
      "Your CV is more than a document. It is your career marketing tool.",
    href: "/cv-career-services",
  },
  {
    number: "04",
    icon: BarChart,
    title: "Training & Development",
    description: "Develop people. Strengthen performance.",
    href: "/training",
  },
];

export function ServicesOverview() {
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
              WHAT WE DO
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-secondary to-primary rounded-full" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="text-foreground">Practical </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              People Solutions
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            For organisations and professionals seeking excellence
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <Link href={service.href} className="block">
                  <div className="relative p-8 lg:p-10 bg-card border border-border/50 rounded-tl-3xl rounded-br-3xl hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-tl-3xl rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon with Gradient Border */}
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-tl-2xl rounded-br-2xl bg-gradient-to-br from-primary to-secondary p-0.5 mb-6"
                      >
                        <div className="w-full h-full bg-card rounded-tl-2xl rounded-br-2xl flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                          <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:text-white transition-colors duration-300" />
                        </div>
                      </motion.div>

                      {/* Number Badge */}
                      <div className="text-7xl md:text-8xl font-bold text-primary/10 absolute top-4 right-4 leading-none select-none">
                        {service.number}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Link Arrow */}
                      <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        <span>Learn more</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-br-3xl" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
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
