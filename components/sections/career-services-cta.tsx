"use client"

import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CareerServicesCTA() {
  return (
    <Section background="primary" className="section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Ready for Your Next
          <br />
          <span className="text-secondary">Career Opportunity?</span>
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10">
          Stand out in a competitive job market with a professional CV and
          stronger career positioning.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="xl" variant="accent">
            <Link href="/cv-career-services">
              Build My CV
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="xl" variant="secondary">
            <Link href="/cv-career-services">Explore Career Services</Link>
          </Button>
        </div>
      </motion.div>
    </Section>
  )
}
