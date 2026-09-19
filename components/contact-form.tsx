"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Send, Loader2 } from "lucide-react"

const inquiryTypes = [
  { value: "recruitment", label: "I need to hire" },
  { value: "hr-consulting", label: "I need HR support" },
  { value: "cv", label: "I need a professional CV" },
  { value: "career-support", label: "I need career support" },
  { value: "training", label: "I need training" },
  { value: "general", label: "General inquiry" },
]

export function ContactForm() {
  const searchParams = useSearchParams()
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    inquiryType: "",
    position: "",
    vacancies: "",
    employmentType: "",
    careerLevel: "",
    targetRole: "",
    cvService: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // Set inquiry type from URL parameter
  useEffect(() => {
    const service = searchParams.get("service")
    if (service && inquiryTypes.some(t => t.value === service)) {
      setFormData(prev => ({ ...prev, inquiryType: service }))
    }
  }, [searchParams])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          organisation: "",
          inquiryType: "",
          position: "",
          vacancies: "",
          employmentType: "",
          careerLevel: "",
          targetRole: "",
          cvService: "",
          message: "",
        })
        setSubmitStatus("idle")
      }, 3000)
    }, 2000)
  }

  const showRecruitmentFields = formData.inquiryType === "recruitment"
  const showCVFields = formData.inquiryType === "cv" || formData.inquiryType === "cv-services" || formData.inquiryType === "career-support"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
              Full Name <span className="text-secondary">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-background text-foreground"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
              Email <span className="text-secondary">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-background text-foreground"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-background text-foreground"
              placeholder="+254 782 461268"
            />
          </div>

          <div>
            <label htmlFor="organisation" className="block text-sm font-semibold text-foreground mb-2">
              Organisation / Company
            </label>
            <input
              type="text"
              id="organisation"
              name="organisation"
              value={formData.organisation}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-background text-foreground"
              placeholder="Your company name"
            />
          </div>

          {/* Inquiry Type */}
          <div>
            <label htmlFor="inquiryType" className="block text-sm font-semibold text-foreground mb-2">
              Service Required <span className="text-secondary">*</span>
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              required
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-background text-foreground"
            >
              <option value="">Select a service</option>
              {inquiryTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {/* Conditional Fields for Recruitment */}
          {showRecruitmentFields && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-4 p-5 bg-primary/5 rounded-xl border border-primary/20"
            >
              <span className="text-sm font-bold text-primary block">RECRUITMENT DETAILS</span>
              
              <div>
                <label htmlFor="position" className="block text-sm font-semibold text-foreground mb-2">
                  Position Title
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-background text-foreground"
                  placeholder="e.g., HR Manager"
                />
              </div>

              <div>
                <label htmlFor="vacancies" className="block text-sm font-semibold text-foreground mb-2">
                  Number of Vacancies
                </label>
                <input
                  type="number"
                  id="vacancies"
                  name="vacancies"
                  min="1"
                  value={formData.vacancies}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-background text-foreground"
                />
              </div>

              <div>
                <label htmlFor="employmentType" className="block text-sm font-semibold text-foreground mb-2">
                  Employment Type
                </label>
                <select
                  id="employmentType"
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-background text-foreground"
                >
                  <option value="">Select type</option>
                  <option value="permanent">Permanent</option>
                  <option value="contract">Contract</option>
                  <option value="temporary">Temporary</option>
                </select>
              </div>
            </motion.div>
          )}

          {/* Conditional Fields for CV Services */}
          {showCVFields && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-4 p-5 bg-secondary/5 rounded-xl border border-secondary/20"
            >
              <span className="text-sm font-bold text-secondary block">CAREER DETAILS</span>
              
              <div>
                <label htmlFor="careerLevel" className="block text-sm font-semibold text-foreground mb-2">
                  Career Level
                </label>
                <select
                  id="careerLevel"
                  name="careerLevel"
                  value={formData.careerLevel}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-background text-foreground"
                >
                  <option value="">Select level</option>
                  <option value="graduate">Graduate</option>
                  <option value="entry">Entry-level</option>
                  <option value="mid">Mid-level</option>
                  <option value="senior">Senior</option>
                  <option value="executive">Executive</option>
                </select>
              </div>

              <div>
                <label htmlFor="targetRole" className="block text-sm font-semibold text-foreground mb-2">
                  Target Role / Industry
                </label>
                <input
                  type="text"
                  id="targetRole"
                  name="targetRole"
                  value={formData.targetRole}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-background text-foreground"
                  placeholder="e.g., Marketing Manager"
                />
              </div>

              <div>
                <label htmlFor="cvService" className="block text-sm font-semibold text-foreground mb-2">
                  CV Service Required
                </label>
                <select
                  id="cvService"
                  name="cvService"
                  value={formData.cvService}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-background text-foreground"
                >
                  <option value="">Select service</option>
                  <option value="new">Professional CV Writing</option>
                  <option value="redesign">CV Redesign</option>
                  <option value="ats">ATS-Friendly CV</option>
                  <option value="executive">Executive CV</option>
                  <option value="linkedin">LinkedIn Profile</option>
                  <option value="cover">Cover Letter</option>
                </select>
              </div>
            </motion.div>
          )}

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
              Additional Information <span className="text-secondary">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none bg-background text-foreground"
              placeholder="Tell us more about your requirements..."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              size="lg"
              variant="primary"
              className="w-full rounded-lg"
              disabled={isSubmitting || submitStatus === "success"}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Sending...
                </>
              ) : submitStatus === "success" ? (
                <>Message Sent Successfully!</>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </div>

          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
            >
              <p className="text-green-600 dark:text-green-400 text-sm font-medium">
                Thank you! We've received your message and will get back to you soon.
              </p>
            </motion.div>
          )}
        </form>
    </motion.div>
  )
}
