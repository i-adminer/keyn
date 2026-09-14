"use client"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { FileText, Award, Briefcase, TrendingUp, Globe, Sparkles, Check, User } from "lucide-react"


const targetAudiences = [
  { icon: User, name: "Graduates" },
  { icon: Briefcase, name: "Entry-level professionals" },
  { icon: TrendingUp, name: "Experienced professionals" },
  { icon: Award, name: "Managers" },
  { icon: Sparkles, name: "Senior executives" },
  { icon: TrendingUp, name: "Career changers" },
  { icon: Globe, name: "International applicants" },
  { icon: Briefcase, name: "Professionals seeking promotion" },
]

const services = [
  {
    title: "Professional CV Writing",
    description: "A comprehensive CV crafted from scratch by experienced HR professionals who understand what employers look for.",
    whoFor: "Professionals at all levels looking for a complete CV solution",
    included: ["Professional CV structure", "Achievement-focused content", "ATS optimization", "Industry-appropriate format"],
  },
  {
    title: "CV Redesign",
    description: "Transform your existing CV into a professional document that presents your experience more effectively.",
    whoFor: "Professionals with existing CVs that need professional improvement",
    included: ["Content restructuring", "Professional formatting", "Improved readability", "Enhanced presentation"],
  },
  {
    title: "ATS-Friendly CV",
    description: "CVs optimized for Applicant Tracking Systems used by many employers to screen applications.",
    whoFor: "Professionals applying through online systems and job portals",
    included: ["ATS-compatible formatting", "Keyword optimization", "System-readable structure", "Professional presentation"],
  },
  {
    title: "Executive CV",
    description: "Premium CVs for senior leadership positions that emphasize strategic impact and leadership achievements.",
    whoFor: "Senior managers, directors, and C-suite executives",
    included: ["Executive summary", "Leadership achievements", "Strategic impact focus", "Premium presentation"],
  },
  {
    title: "LinkedIn Profile Optimisation",
    description: "Strengthen your professional online presence with an optimized LinkedIn profile that attracts opportunities.",
    whoFor: "Professionals building their online professional brand",
    included: ["Profile headline", "About section", "Experience optimization", "Skills and endorsements"],
  },
  {
    title: "Cover Letters",
    description: "Compelling cover letters tailored to specific roles that strengthen your application.",
    whoFor: "Professionals applying for specific positions",
    included: ["Customized content", "Role alignment", "Professional tone", "Clear value proposition"],
  },
]

export default function CVCareerServicesPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <Section background="light" className="pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-caption text-gold font-bold mb-6">
              CV & CAREER SERVICES
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
              <span className="text-navy-deep">Your CV Is More Than a Document.</span>
              <br />
              <span className="text-blue-royal">It Is Your Career Marketing Tool.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed mb-10">
              Keyn helps professionals create clear, professional and results-focused
              CVs that stand out in competitive job markets.
            </p>
            <Button asChild size="xl" variant="primary">
              <Link href="/contact?service=cv">Build My CV</Link>
            </Button>
          </motion.div>
        </Section>

        {/* Overview */}
        <Section background="white" className="section-spacing">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-8">
                Professional CV Writing
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
                <p>
                  Your CV is often the first impression a potential employer has of you.
                  It needs to clearly communicate your skills, experience and
                  achievements in a way that demonstrates your value and makes you stand
                  out from other candidates.
                </p>
                <p>
                  Many professionals struggle to present themselves effectively on paper.
                  They either undersell their accomplishments, use generic descriptions,
                  or create CVs that are difficult to read or not optimized for modern
                  recruitment processes.
                </p>
                <p className="font-medium text-navy-deep">
                  Keyn People Advisory provides professional CV writing services to help
                  you present yourself competitively in today's job market.
                </p>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Target Audiences */}
        <Section background="light" className="section-spacing">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">
                We Work With Professionals at All Career Levels
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {targetAudiences.map((audience, index) => {
                const Icon = audience.icon
                return (
                  <motion.div
                    key={audience.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg border border-neutral-200 hover:border-gold hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <p className="text-sm font-semibold text-navy-deep text-center">
                      {audience.name}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </Section>

        {/* Services */}
        <Section background="white" className="section-spacing">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">
                Our Services
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Professional career documents tailored to your needs and career stage.
              </p>
            </motion.div>

            <div className="space-y-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-8 lg:p-10">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-lg bg-blue-royal/10 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-7 h-7 text-blue-royal" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl lg:text-3xl font-bold text-navy-deep mb-3">
                          {service.title}
                        </h3>
                        <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <div className="mb-4">
                          <span className="text-sm font-semibold text-gold uppercase tracking-wide">
                            Who this is for:
                          </span>
                          <p className="text-neutral-700 mt-1">{service.whoFor}</p>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-navy-deep uppercase tracking-wide block mb-3">
                            What's included:
                          </span>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {service.included.map((item) => (
                              <div key={item} className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-neutral-600">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Career Positioning */}
        <Section background="navy" className="section-spacing">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Beyond the CV: Career Positioning
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-neutral-300 leading-relaxed">
                <p>
                  A strong CV is more than a list of jobs and responsibilities. It's a
                  strategic document that positions you as the right candidate for the
                  opportunities you're pursuing.
                </p>
                <p className="text-white font-medium">
                  Our approach focuses on presenting your achievements, demonstrating
                  your value, and aligning your experience with the roles you're
                  targeting.
                </p>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Process */}
        <Section background="light" className="section-spacing">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">
                How It Works
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  number: "01",
                  title: "Submit Your Information",
                  description: "Provide your career information and target roles.",
                },
                {
                  number: "02",
                  title: "Professional Review",
                  description: "Our team reviews your background and requirements.",
                },
                {
                  number: "03",
                  title: "CV Development",
                  description: "We craft your professional CV or career documents.",
                },
                {
                  number: "04",
                  title: "Delivery & Support",
                  description: "Receive your completed documents and guidance.",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg border border-neutral-200 text-center hover:shadow-md transition-shadow"
                >
                  <div className="text-5xl font-bold text-gold/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-navy-deep mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section background="white" className="section-spacing">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">
              Ready to Strengthen Your Professional Profile?
            </h2>
            <p className="text-xl text-neutral-600 mb-10 leading-relaxed">
              Let's build a professional CV that positions you for your next career
              opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" variant="primary">
                <Link href="/contact?service=cv">Build My CV</Link>
              </Button>
              <Button asChild size="xl" variant="secondary">
                <Link href="/professionals">For Professionals</Link>
              </Button>
            </div>
          </motion.div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
