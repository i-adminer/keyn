"use client"

import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { Briefcase, TrendingUp } from "lucide-react"

export function DualPathway() {
  return (
    <Section background="light" className="section-spacing">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* For Employers */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white p-8 lg:p-12 rounded-lg shadow-sm border border-neutral-200 hover:shadow-xl transition-shadow"
        >
          <div className="w-16 h-16 rounded-lg bg-blue-royal/10 flex items-center justify-center mb-6">
            <Briefcase className="w-8 h-8 text-blue-royal" />
          </div>

          <h3 className="text-sm font-bold uppercase tracking-wider text-gold mb-4">
            FOR EMPLOYERS
          </h3>

          <h2 className="text-3xl lg:text-4xl font-bold text-navy-deep mb-6 leading-tight">
            Looking for the right talent?
          </h2>

          <p className="text-lg text-neutral-600 leading-relaxed mb-8">
            Tell us what you are looking for and we will help you identify,
            assess and shortlist suitable candidates.
          </p>

          <Button asChild size="lg" variant="primary" className="w-full sm:w-auto">
            <Link href="/contact?service=recruitment">Hire Talent</Link>
          </Button>

          {/* Accent */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-royal to-gold rounded-b-lg" />
        </motion.div>

        {/* For Professionals */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-navy-deep text-white p-8 lg:p-12 rounded-lg shadow-lg"
        >
          <div className="w-16 h-16 rounded-lg bg-gold/20 flex items-center justify-center mb-6">
            <TrendingUp className="w-8 h-8 text-gold" />
          </div>

          <h3 className="text-sm font-bold uppercase tracking-wider text-gold mb-4">
            FOR PROFESSIONALS
          </h3>

          <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            Ready for your next career opportunity?
          </h2>

          <p className="text-lg text-neutral-300 leading-relaxed mb-8">
            Stand out in a competitive job market with a professional CV and
            stronger career positioning.
          </p>

          <Button asChild size="lg" variant="gold" className="w-full sm:w-auto">
            <Link href="/cv-career-services">Build My CV</Link>
          </Button>

          {/* Accent */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-light rounded-b-lg" />
        </motion.div>
      </div>
    </Section>
  )
}
