"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does Keyn People Advisory offer?",
    answer:
      "We offer three core services: Recruitment (talent acquisition and executive search), HR Consulting (employee relations, performance management, workplace compliance), and CV & Career Services (professional CV writing, LinkedIn optimization, career coaching).",
  },
  {
    question: "How is Keyn different from traditional recruitment agencies?",
    answer:
      "Unlike recruitment agencies focused only on filling vacancies, we approach talent from a broader HR perspective. We ask 'Who will succeed and contribute to your objectives?' rather than just 'Who can do the job?' Our team brings deep HR expertise to every placement.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes! We work with organizations of all sizes, from startups to established enterprises. We tailor our services to your specific needs and budget, whether you need a single hire, ongoing HR support, or comprehensive talent strategies.",
  },
  {
    question: "How long does the recruitment process typically take?",
    answer:
      "Timeline varies based on role complexity and seniority. Entry to mid-level positions typically take 2-4 weeks, while senior and executive roles may take 6-8 weeks. We provide transparent timelines and regular updates throughout the process.",
  },
  {
    question: "Can I get HR consulting support without hiring you for recruitment?",
    answer:
      "Absolutely! Our HR Consulting services are completely independent. Whether you need help with employee relations, performance management, compliance, or strategic HR planning, we offer flexible consulting packages tailored to your needs.",
  },
  {
    question: "What makes your CV writing service different?",
    answer:
      "Our CV writers are experienced HR professionals who have reviewed thousands of CVs and know exactly what employers look for. We create ATS-friendly, results-focused CVs that highlight your achievements and position you competitively in the job market.",
  },
  {
    question: "Do you offer services for individual job seekers?",
    answer:
      "Yes! Our CV & Career Services are designed for professionals at all levels—from graduates to senior executives. We help with professional CV writing, LinkedIn optimization, cover letters, and career coaching to strengthen your professional profile.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 overflow-hidden border-t">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg-faq.png"
          alt=""
          fill
          className="object-cover w-full h-full"
          quality={100}
          priority
        />
      </div>

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
            <span className="text-sm font-bold tracking-widest text-primary">
              FAQ
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-secondary to-primary rounded-full" />
          </div>

          {/* Heading */}
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="text-foreground">Frequently Asked </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Questions
            </span>
          </div>

          {/* Description */}
          <span className="text-lg text-muted-foreground leading-relaxed block">
            Got questions? We've got answers. Find the most common questions
            about our services below.
          </span>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="mb-4"
            >
              <div className="group relative">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-tl-2xl rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Accordion Item */}
                <div className="relative bg-card border border-border rounded-tl-2xl rounded-br-2xl overflow-hidden">
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
                  >
                    <span className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-5 pt-2">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Have more questions? We're here to help.
          </p>
          <div className="inline-block group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-tl-2xl rounded-br-2xl" />
            <Button
              asChild
              size="lg"
              className="relative rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none bg-primary text-white hover:bg-transparent hover:text-primary border-primary group-hover:-translate-y-1 group-hover:-translate-x-1 transition-all duration-300"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
