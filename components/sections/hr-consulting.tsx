"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  FileSignature,
  Users,
  UserPlus,
  Wallet,
  GraduationCap,
} from "lucide-react";

const categories = [
  {
    icon: ShieldCheck,
    title: "Policy & compliance",
    detail: "Handbooks, audits, disciplinary process",
  },
  {
    icon: FileSignature,
    title: "Contracts & records",
    detail: "Employment contracts, HR documentation",
  },
  {
    icon: Users,
    title: "Employee relations",
    detail: "Performance systems, grievance support",
  },
  {
    icon: UserPlus,
    title: "Recruitment & structure",
    detail: "Job profiling, workforce planning",
  },
  {
    icon: Wallet,
    title: "Payroll & leave",
    detail: "Attendance tracking, payroll support",
  },
  {
    icon: GraduationCap,
    title: "Training & onboarding",
    detail: "Development plans, investigations",
  },
];

export function HRConsulting() {
  return (
    <section className="relative bg-primary border-b py-5">
      <div className="container-premium relative z-10 ">
        {/* Hero row: copy + image */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-5">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-primary-foreground/80 to-secondary rounded-full" />
              <span className="text-sm font-bold tracking-widest text-primary-foreground/90">
                HR CONSULTING
              </span>
            </div>

            {/* Heading */}
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
              <span className="text-primary-foreground">
                HR support for teams that would rather{" "}
              </span>
              <span className="text-secondary">grow than paper-push</span>
            </div>

            {/* Description */}
            <span className="text-base text-primary-foreground/75 leading-relaxed mb-6 block">
              We step in as your HR function building the policies, contracts
              and processes that keep people management steady as you scale,
              without the overhead of hiring one.
            </span>

            {/* CTA Button with gradient background */}
            <div className="inline-block group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary-foreground rounded-tl-2xl rounded-br-2xl" />
              <Button
                asChild
                size="lg"
                className="relative rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none bg-secondary text-primary hover:bg-transparent hover:text-primary-foreground border-secondary group-hover:-translate-y-1 group-hover:-translate-x-1 transition-all duration-300"
              >
                <Link href="/contact?service=hr-consulting">
                  Get HR support
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: Large Image - No card, no overflow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Image without any container or shape */}
            <div className="relative aspect-square">
              <Image
                src="/images/hr2.png"
                alt="HR consultant reviewing workplace documentation with a client"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
                quality={100}
              />
            </div>
          </motion.div>
        </div>

        {/* Decorative Line with Gradient */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="w-full max-w-3xl h-0.5 bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent rounded-full" />
        </motion.div>

        {/* Service Categories Grid - Compact, no hover */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {/* Category Card - No hover effects */}
                <div className="flex items-start gap-3 p-4 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-tl-2xl rounded-br-2xl">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-primary-foreground p-0.5">
                      <div className="w-full h-full rounded-full bg-primary flex items-center justify-center">
                        <Icon className="w-4 h-4 text-secondary" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <span className="text-primary-foreground font-bold text-sm mb-0.5 block">
                      {category.title}
                    </span>
                    <span className="text-primary-foreground/70 text-xs leading-snug block">
                      {category.detail}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
