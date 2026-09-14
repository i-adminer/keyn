"use client"

import { Section } from "@/components/ui/section"
import { motion } from "framer-motion"

export function Philosophy() {
  return (
    <Section background="primary" className="section-spacing">
      <div className="relative max-w-5xl mx-auto text-center">
        {/* Decorative elements */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-secondary origin-center mb-8"
        />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-8 mt-12"
        >
          <span className="text-primary-foreground">Talent is an investment —</span>
          <br />
          <span className="text-secondary">not an expense.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            The right people can improve productivity, strengthen customer
            relationships, reduce turnover and contribute directly to
            organisational growth.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            At Keyn People Advisory, our goal is to help organisations maximise
            the value of their people through better recruitment, stronger HR
            practices and continuous employee development.
          </p>
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-24 h-1 bg-secondary mx-auto mt-12"
        />
      </div>
    </Section>
  )
}
