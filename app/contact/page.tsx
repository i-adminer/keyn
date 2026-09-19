"use client";

import { Suspense, useState } from "react";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { sendContactEmail } from "@/app/actions/contact";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+254 700 000 000",
    href: "tel:+254700000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@keynpeopleadvisory.co.ke",
    href: "mailto:info@keynpeopleadvisory.co.ke",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, Kenya",
    href: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Fri: 8:00 AM – 5:00 PM",
    href: "#",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        setSubmitStatus("success");
        // Reset form after 5 seconds
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
          setSubmitStatus("idle");
        }, 5000);
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg text-sm border border-input bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all";

  return (
    <>
      <Navigation />

      <main className="flex-1 overflow-hidden">
        {/* HERO - Same as other pages */}
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
              {/* Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="h-px w-10 bg-primary" />
                  <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                    Get In Touch
                  </span>
                  <div className="h-px w-10 bg-primary" />
                </div>
                <span className="text-3xl sm:text-4xl font-bold text-foreground mb-3 block">
                  Let's{" "}
                  <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Work Together
                  </span>
                </span>
                <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
                  Reach out for a consultation. Our team will respond within 24
                  hours.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 items-start">
                {/* Left — Contact Info (2 columns) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="lg:col-span-2 flex flex-col gap-4"
                >
                  {/* Info Card */}
                  <div className="rounded-xl p-6 sm:p-7 border border-primary/30 bg-linear-to-br from-primary to-primary/80">
                    <span className="text-white font-bold text-lg mb-5 block">
                      Contact Information
                    </span>
                    <div className="flex flex-col gap-4">
                      {contactInfo.map(({ icon: Icon, label, value, href }) => (
                        <a
                          key={label}
                          href={href}
                          className="flex items-start gap-3 group"
                        >
                          <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors bg-secondary/20 border border-secondary/30">
                            <Icon size={16} className="text-secondary" />
                          </div>
                          <div>
                            <span className="text-white/50 text-xs uppercase tracking-wider mb-1 block">
                              {label}
                            </span>
                            <span className="text-white text-sm font-medium group-hover:text-secondary transition-colors leading-snug block">
                              {value}
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Quick Note */}
                  <div className="rounded-lg p-5 border border-border bg-card text-sm text-muted-foreground leading-relaxed">
                    <span className="text-primary font-semibold">
                      Free initial consultation.
                    </span>{" "}
                    We assess your needs and recommend the right services no
                    obligation.
                  </div>
                </motion.div>

                {/* Right — Form (3 columns) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="lg:col-span-3"
                >
                  <div className="rounded-xl p-6 sm:p-8 border border-border bg-card">
                    {submitStatus === "success" ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="flex flex-col items-center justify-center py-12 text-center gap-4"
                      >
                        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary/15 border-2 border-primary">
                          <CheckCircle size={28} className="text-primary" />
                        </div>
                        <span className="text-xl font-bold text-foreground">
                          Message Sent!
                        </span>
                        <p className="text-muted-foreground text-sm max-w-xs">
                          Thank you for reaching out. We'll get back to you
                          within 24 hours.
                        </p>
                        <button
                          onClick={() => setSubmitStatus("idle")}
                          className="text-sm underline text-muted-foreground hover:text-foreground transition-colors mt-2"
                        >
                          Send another message
                        </button>
                      </motion.div>
                    ) : submitStatus === "error" ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="flex flex-col items-center justify-center py-12 text-center gap-4"
                      >
                        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-red-500/15 border-2 border-red-500">
                          <AlertCircle size={28} className="text-red-500" />
                        </div>
                        <span className="text-xl font-bold text-foreground">
                          Failed to Send
                        </span>
                        <p className="text-muted-foreground text-sm max-w-xs">
                          {errorMessage}
                        </p>
                        <button
                          onClick={() => {
                            setSubmitStatus("idle");
                            setErrorMessage("");
                          }}
                          className="text-sm underline text-muted-foreground hover:text-foreground transition-colors mt-2"
                        >
                          Try again
                        </button>
                      </motion.div>
                    ) : (
                      <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                              Full Name{" "}
                              <span className="text-secondary">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              required
                              placeholder="Your full name"
                              className={inputClass}
                              value={formData.name}
                              onChange={handleChange}
                            />
                          </div>
                          <div>
                            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                              Email Address{" "}
                              <span className="text-secondary">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              required
                              placeholder="your@email.com"
                              className={inputClass}
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              placeholder="+254 700 000 000"
                              className={inputClass}
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </div>
                          <div>
                            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                              Service Required{" "}
                              <span className="text-secondary">*</span>
                            </label>
                            <select
                              name="service"
                              required
                              className={inputClass}
                              value={formData.service}
                              onChange={handleChange}
                            >
                              <option value="">Select a service</option>
                              <option value="recruitment">Recruitment</option>
                              <option value="hr-consulting">
                                HR Consulting
                              </option>
                              <option value="cv">CV & Career Services</option>
                              <option value="training">Training</option>
                              <option value="general">General Inquiry</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                            Message <span className="text-secondary">*</span>
                          </label>
                          <textarea
                            name="message"
                            required
                            rows={5}
                            placeholder="Tell us about your requirements..."
                            className={`${inputClass} resize-none`}
                            value={formData.message}
                            onChange={handleChange}
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-85 hover:scale-[1.02] mt-1 cursor-pointer bg-linear-to-r from-primary to-secondary text-primary-foreground shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 size={14} className="animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send size={14} />
                              Send Message
                            </>
                          )}
                        </button>
                      </form>
                    )}
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
