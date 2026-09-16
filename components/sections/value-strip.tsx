"use client"

import { motion } from "framer-motion"
import { Briefcase, Users, FileText, TrendingUp } from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Briefcase,
    title: "RECRUITMENT",
    description: "Find exceptional talent",
    href: "/recruitment",
    gradient: "from-blue-500 to-primary",
  },
  {
    icon: Users,
    title: "HR CONSULTING",
    description: "Strengthen your people systems",
    href: "/hr-consulting",
    gradient: "from-primary to-purple-500",
  },
  {
    icon: FileText,
    title: "CAREER SERVICES",
    description: "Position yourself for opportunity",
    href: "/cv-career-services",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "TRAINING",
    description: "Develop people and performance",
    href: "/training",
    gradient: "from-pink-500 to-secondary",
  },
]

export function ValueStrip() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container-premium relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">What We </span>
            <span className="bg-gradient-to-r to-primary from-secondary bg-clip-text text-transparent">
              Deliver
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to elevate your talent and organisational potential
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link href={value.href}>
                  <div className="relative h-full bg-card border-2 border-border rounded-tl-3xl rounded-br-3xl p-6 md:p-8 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-tl-3xl rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon with Gradient Background */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className={`w-14 h-14 md:w-16 md:h-16 rounded-tl-2xl rounded-br-2xl bg-gradient-to-br ${value.gradient} p-0.5 mb-6`}
                      >
                        <div className="w-full h-full bg-card rounded-tl-2xl rounded-br-2xl flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                          <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary group-hover:text-white transition-colors duration-300" />
                        </div>
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-bold tracking-wider text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {value.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 flex-grow">
                        {value.description}
                      </p>

                      {/* Animated Arrow */}
                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        className="text-primary text-sm font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        Learn More
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          →
                        </motion.span>
                      </motion.div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 md:mt-16 flex justify-center"
        >
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
