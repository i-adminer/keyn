"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CareerServicesCTA() {
  return (
    <section className="relative py-16 overflow-hidden bg-primary">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-secondary to-primary-foreground rounded-full" />
            <span className="text-sm font-bold tracking-widest text-secondary">
              WHY CHOOSE KEYN
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary-foreground to-secondary rounded-full" />
          </div>

          {/* Main Heading */}
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6 text-center">
            <span className="text-primary-foreground">
              Recruitment Expertise.{" "}
            </span>
            <span className="text-secondary">HR Perspective.</span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            Unlike recruitment providers focused only on filling vacancies, Keyn
            People Advisory approaches talent from a broader HR perspective.
          </p>

          {/* Comparison - Compact Text Only */}
          <div className="grid md:grid-cols-2 gap-8 mb-10 max-w-4xl mx-auto hidden">
            {/* Traditional */}
            <div className="text-center">
              <span className="text-primary-foreground/60 text-base font-medium block mb-2">
                Traditional approach
              </span>
              <span className="text-xl md:text-2xl font-bold text-primary-foreground/80 font-serif">
                "Who can do the job?"
              </span>
            </div>

            {/* Keyn */}
            <div className="text-center">
              <span className="text-secondary text-base font-medium block mb-2">
                Keyn approach
              </span>
              <span className="text-xl md:text-2xl font-bold text-primary-foreground font-serif">
                "Who will succeed and contribute to objectives?"
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="inline-block group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary-foreground rounded-tl-2xl rounded-br-2xl" />
              <Button
                asChild
                size="lg"
                className="relative rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none bg-secondary text-foreground border-secondary group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-all duration-300 hover:bg-secondary"
              >
                <Link href="/cv-career-services">
                  Build My CV
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/cv-career-services">Explore Career Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
