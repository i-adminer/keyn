"use client";

import { Suspense } from "react";
import { ContactForm } from "@/components/contact-form";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1 overflow-hidden">
        {/* HERO - Same as About/CV pages */}
        <AnimatedSection>
          <section className="relative min-h-50 lg:min-h-85 flex items-center overflow-visible">
            <div className="absolute inset-x-0 top-24 -bottom-10 z-0 overflow-hidden">
              <Image
                src="/images/bgweb.jpeg"
                alt="Background"
                fill
                className="object-cover object-bottom"
                quality={100}
                priority
              />
            </div>

            <div className="container-premium relative z-10 w-full pt-32 h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <span className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight leading-[0.98] mb-4 flex flex-col gap-2 font-realce">
                  <span className="text-white">Let's Talk About</span>
                  <span className="text-transparent bg-linear-to-r from-secondary to-white bg-clip-text w-max">
                    Your People.
                  </span>
                </span>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        {/* CONTACT SECTION */}
        <AnimatedSection>
          <section className="relative py-14 lg:py-16">
            <div className="container-premium">
              <div className="grid lg:grid-cols-[1fr_0.85fr] gap-10 lg:gap-14">
                {/* Contact Form */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-14 bg-linear-to-r from-primary to-secondary" />
                    <span className="text-xs font-bold tracking-[0.2em] text-primary">
                      GET IN TOUCH
                    </span>
                  </div>

                  <span className="text-2xl md:text-3xl font-bold tracking-tight leading-tight block mb-6">
                    Whether you need to{" "}
                    <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                      hire talent, strengthen HR, or advance your career
                    </span>
                    {" "}— we're here to help.
                  </span>

                  <Suspense
                    fallback={
                      <div className="text-center py-12 text-muted-foreground">
                        Loading form...
                      </div>
                    }
                  >
                    <ContactForm />
                  </Suspense>
                </div>

                {/* Contact Information Sidebar */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-6"
                >
                  {/* Contact Details */}
                  <div className="rounded-xl border border-border bg-card p-6">
                    <span className="text-lg font-bold text-foreground mb-6 block">
                      Contact Information
                    </span>

                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-muted-foreground block mb-1">
                            EMAIL
                          </span>
                          <a
                            href="mailto:info@keynpeopleadvisory.co.ke"
                            className="text-sm text-foreground hover:text-primary transition-colors"
                          >
                            info@keynpeopleadvisory.co.ke
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-muted-foreground block mb-1">
                            PHONE
                          </span>
                          <a
                            href="tel:+254700000000"
                            className="text-sm text-foreground hover:text-primary transition-colors"
                          >
                            +254 700 000 000
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-muted-foreground block mb-1">
                            LOCATION
                          </span>
                          <span className="text-sm text-foreground">
                            Nairobi, Kenya
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="rounded-xl border border-border bg-primary p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground shrink-0">
                        <Clock className="h-5 w-5" />
                      </div>
                      <span className="text-lg font-bold text-primary-foreground">
                        Business Hours
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-primary-foreground/80">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-medium text-primary-foreground">
                          8:00 AM - 5:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-medium text-primary-foreground">
                          9:00 AM - 1:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-medium text-primary-foreground">
                          Closed
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Service Links */}
                  <div className="rounded-xl border border-border bg-card p-6">
                    <span className="text-lg font-bold text-foreground mb-4 block">
                      Our Services
                    </span>
                    <div className="space-y-3">
                      <a
                        href="/recruitment"
                        className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>Recruitment Services</span>
                      </a>
                      <a
                        href="/hr-consulting"
                        className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>HR Consulting</span>
                      </a>
                      <a
                        href="/cv-career-services"
                        className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>CV & Career Services</span>
                      </a>
                      <a
                        href="/training"
                        className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>Training & Development</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
