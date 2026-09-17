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
    <section className="relative py-20 overflow-hidden bg-linear-to-b from-background via-card/30 to-background border-b">
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
            <div className="w-12 h-0.5 bg-linear-to-r from-primary to-secondary rounded-full" />
            <span className="text-sm font-bold tracking-widest text-primary">
              WHAT WE DO
            </span>
            <div className="w-12 h-0.5 bg-linear-to-r from-secondary to-primary rounded-full" />
          </div>

          {/* Heading */}
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="text-foreground">Practical </span>
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              People Solutions
            </span>
          </div>

          {/* Description */}
          <span className="text-lg text-muted-foreground">
            For organisations and professionals seeking excellence
          </span>
        </motion.div>

        {/* Services Grid - Single Row on Large Screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative h-full"
              >
                <Link href={service.href} className="block h-full">
                  {/* linear Background Layer */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary to-secondary rounded-tl-3xl rounded-br-3xl" />

                  {/* Card that shifts on hover to reveal linear */}
                  <div className="relative p-6 lg:p-7 bg-background shadow-2xl shadow-primary border-border/50 rounded-tl-2xl hover:border-none rounded-br-3xl hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 h-full flex flex-col">
                    {/* linear Overlay on Hover */}
                    <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/5 rounded-tl-3xl rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon with linear Border */}
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-14 h-14 rounded-tl-2xl rounded-br-2xl bg-linear-to-br from-primary to-secondary p-0.5 mb-4"
                      >
                        <div className="w-full h-full bg-card rounded-tl-2xl rounded-br-2xl flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                          <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                        </div>
                      </motion.div>

                      {/* Number Badge */}
                      <div className="text-6xl font-bold text-primary/10 absolute top-3 right-3 leading-none select-none">
                        {service.number}
                      </div>

                      {/* Title */}
                      <span className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300 block">
                        {service.title}
                      </span>

                      {/* Description */}
                      <span className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow block">
                        {service.description}
                      </span>

                      {/* Link Arrow */}
                      <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all text-sm mt-auto">
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          <div className="w-96 h-0.5 bg-linear-to-r from-transparent via-primary to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
