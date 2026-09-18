"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "../ui/animated-section";

import {
  Briefcase,
  Users,
  FileText,
  TrendingUp,
  Award,
  Target,
  Sparkles,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "RECRUITMENT",
    description: "Find exceptional talent",
  },
  {
    icon: Users,
    title: "HR CONSULTING",
    description: "Strengthen your people systems",
  },
  {
    icon: FileText,
    title: "CAREER SERVICES",
    description: "Position yourself for opportunity",
  },
  {
    icon: TrendingUp,
    title: "TRAINING",
    description: "Develop people and performance",
  },
  {
    icon: Award,
    title: "TALENT ACQUISITION",
    description: "Strategic hiring solutions",
  },
  {
    icon: Target,
    title: "PERFORMANCE MANAGEMENT",
    description: "Optimize team performance",
  },
  {
    icon: Sparkles,
    title: "CV WRITING",
    description: "Professional resume creation",
  },
  {
    icon: Rocket,
    title: "CAREER COACHING",
    description: "Accelerate your growth",
  },
];

// Duplicate services for seamless infinite scroll
const duplicatedServices = [...services, ...services];

export function ValueStrip() {
  return (
    <AnimatedSection>
      <section className="relative py-7 overflow-hidden bg-linear-to-b from-background via-card/30 to-background">
        <div className="container-premium">
          {/* Infinite Marquee Scrolling */}
          <div className="relative">
            {/* linear Fades on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-linear-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-linear-to-l from-background to-transparent z-10" />

            {/* Scrolling Container */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6 md:gap-8"
                animate={{
                  x: [0, -50 + "%"],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {duplicatedServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={`${service.title}-${index}`}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="shrink-0 w-72 md:w-80 group cursor-pointer"
                    >
                      <div className="relative h-full rounded-tl-3xl rounded-br-3xl p-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                        {/* linear Overlay on Hover */}
                        <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/5 rounded-tl-3xl rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {/* Content */}
                        <div className="relative z-10 flex items-start gap-4">
                          {/* Icon */}
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="w-14 h-14 md:w-16 md:shrink-0 rounded-tl-2xl rounded-br-2xl bg-linear-to-br from-primary to-secondary p-0.5"
                          >
                            <div className="w-full h-full bg-card rounded-tl-2xl rounded-br-2xl flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                              <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary group-hover:text-white transition-colors duration-300" />
                            </div>
                          </motion.div>

                          {/* Text */}
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                              {service.title}
                            </span>
                            <br />
                            <span className="text-sm text-muted-foreground leading-relaxed">
                              {service.description}
                            </span>
                          </div>
                        </div>
                        {/* Corner Accent */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Bottom Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 md:mt-16 flex justify-center"
          >
            <div className="w-96 h-0.5 bg-linear-to-r from-transparent via-primary to-transparent rounded-full" />
          </motion.div>
        </div>{" "}
      </section>
    </AnimatedSection>
  );
}
