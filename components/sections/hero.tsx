"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const services = ["RECRUITMENT", "HR CONSULTING", "CAREER SERVICES"]

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-blue-royal/5">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 right-10 w-96 h-96 bg-blue-royal rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.02, x: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-navy-deep rounded-full blur-3xl"
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Accent lines */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-1/3 left-0 w-1/3 h-0.5 bg-gradient-to-r from-gold to-transparent origin-left"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-1/3 right-0 w-1/4 h-0.5 bg-gradient-to-l from-gold to-transparent origin-right"
        />
      </div>

      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="text-caption text-gold font-bold">
                Talent. People. Performance.
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            >
              <span className="text-navy-deep">Your Talent.</span>
              <br />
              <span className="text-blue-royal">Our Expertise.</span>
              <br />
              <span className="text-navy-deep">Better Outcomes.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl leading-relaxed text-neutral-700 mb-10 max-w-xl"
            >
              We help organisations attract the right talent, strengthen their
              people practices, and build high-performing teams — while helping
              professionals present themselves competitively in today's job
              market.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button asChild size="xl" variant="primary">
                <Link href="/employers">
                  Hire Talent
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="secondary">
                <Link href="/professionals">Build My CV</Link>
              </Button>
            </motion.div>

            {/* Service Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 md:gap-6"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="text-xs md:text-sm font-semibold tracking-wider text-neutral-600 relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-gold before:rounded-full"
                >
                  {service}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Abstract Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex relative h-[600px] items-center justify-center"
          >
            {/* Abstract people/talent visualization */}
            <div className="relative w-full h-full">
              {/* Central circle */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-2 border-blue-royal/20"
              />
              
              {/* Orbiting elements representing people/talent */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const radius = 160
                const x = Math.cos((angle * Math.PI) / 180) * radius
                const y = Math.sin((angle * Math.PI) / 180) * radius
                
                return (
                  <motion.div
                    key={angle}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 1 + i * 0.1,
                    }}
                    className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut",
                      }}
                      className="w-full h-full rounded-full bg-gradient-to-br from-blue-royal to-gold opacity-80 shadow-lg"
                    />
                  </motion.div>
                )
              })}
              
              {/* Central icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-navy-deep to-blue-royal shadow-xl flex items-center justify-center"
              >
                <div className="w-8 h-8 rounded-full bg-gold" />
              </motion.div>
              
              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
                {[0, 60, 120, 180, 240, 300].map((angle) => {
                  const radius = 160
                  const x = Math.cos((angle * Math.PI) / 180) * radius
                  const y = Math.sin((angle * Math.PI) / 180) * radius
                  
                  return (
                    <motion.line
                      key={`line-${angle}`}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ duration: 1, delay: 1 + angle / 300 }}
                      x1="50%"
                      y1="50%"
                      x2={`calc(50% + ${x}px)`}
                      y2={`calc(50% + ${y}px)`}
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-blue-royal"
                    />
                  )
                })}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
