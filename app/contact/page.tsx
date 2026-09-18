"use client";

import { Suspense } from "react";
import { ContactForm } from "@/components/contact-form";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Section background="muted" className="section-spacing pt-32">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
                <span className="text-foreground">Let's Talk About</span>
                <br />
                <span className="text-primary">Your People.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Whether you need to hire talent, get HR support, or build your
                professional CV — we're here to help.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <Suspense
                fallback={
                  <div className="text-center py-12">Loading form...</div>
                }
              >
                <ContactForm />
              </Suspense>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Get in touch
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    We're here to help with your recruitment, HR, and career
                    development needs. Reach out to us using any of the methods
                    below.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:info@keynpeopleadvisory.co.ke"
                          className="text-muted-foreground hover:text-primary/80 transition-colors"
                        >
                          info@keynpeopleadvisory.co.ke{" "}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Phone
                        </h3>
                        <a
                          href="tel:+254700000000"
                          className="text-muted-foreground hover:text-primary/80 transition-colors"
                        >
                          +254 700 000 000
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Location
                        </h3>
                        <p className="text-muted-foreground">Nairobi, Kenya</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-primary text-primary-foreground p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-muted p-8 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Quick Links
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="/recruitment"
                      className="block text-muted-foreground hover:text-primary/80 transition-colors"
                    >
                      → Recruitment Services
                    </a>
                    <a
                      href="/hr-consulting"
                      className="block text-muted-foreground hover:text-primary/80 transition-colors"
                    >
                      → HR Consulting
                    </a>
                    <a
                      href="/cv-career-services"
                      className="block text-muted-foreground hover:text-primary/80 transition-colors"
                    >
                      → CV & Career Services
                    </a>
                    <a
                      href="/training"
                      className="block text-muted-foreground hover:text-primary/80 transition-colors"
                    >
                      → Training & Development
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
