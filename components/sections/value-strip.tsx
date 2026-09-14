"use client"

import { motion } from "framer-motion"
import { Briefcase, Users, FileText, TrendingUp } from "lucide-react"

const values = [
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
]

export function ValueStrip() {
  return (
    <section className="py-12 md:py-16 bg-card border-y border-border">
      <div className="container-premium">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-start gap-3"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-wider text-foreground mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
