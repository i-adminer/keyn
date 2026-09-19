"use client";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Section background="muted" className="pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>
        </Section>

        <Section background="default" className="py-12">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Website Use
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              By accessing and using the Keyn People Advisory website, you
              accept and agree to be bound by these Terms of Service. If you do
              not agree to these terms, please do not use our website or
              services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Our Services
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Keyn People Advisory provides:
            </p>
            <ul className="list-disc list-inside text-foreground space-y-2 mb-6">
              <li>Recruitment and talent acquisition services</li>
              <li>HR consulting and advisory services</li>
              <li>Professional CV writing and career services</li>
              <li>Training and development programmes</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Recruitment Services
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              For recruitment services:
            </p>
            <ul className="list-disc list-inside text-foreground space-y-2 mb-6">
              <li>We act as intermediaries between employers and candidates</li>
              <li>Final hiring decisions remain with the employer</li>
              <li>
                We conduct professional screening but cannot guarantee candidate
                performance
              </li>
              <li>
                Candidate information is shared with relevant employers with
                consent
              </li>
              <li>
                Employers are responsible for conducting their own final
                assessments
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              CV and Career Services
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              For CV and career services:
            </p>
            <ul className="list-disc list-inside text-foreground space-y-2 mb-6">
              <li>
                We provide professional CV writing and career document
                preparation
              </li>
              <li>Information provided must be accurate and truthful</li>
              <li>We cannot guarantee job placement or interview success</li>
              <li>Completed documents are provided in agreed formats</li>
              <li>Clients retain ownership of their career documents</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              User Responsibilities
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Users of our services agree to:
            </p>
            <ul className="list-disc list-inside text-foreground space-y-2 mb-6">
              <li>Provide accurate and complete information</li>
              <li>Use our services in a lawful manner</li>
              <li>Respect intellectual property rights</li>
              <li>Not misuse or attempt to circumvent our systems</li>
              <li>Maintain confidentiality of sensitive information</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Intellectual Property
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              All content on this website, including text, graphics, logos, and
              design, is the property of Keyn People Advisory and is protected
              by copyright and intellectual property laws. You may not
              reproduce, distribute, or create derivative works without our
              express written permission.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Third-Party Links
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              Our website may contain links to third-party websites. We are not
              responsible for the content, privacy practices, or terms of
              service of external sites.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Limitation of Liability
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              Keyn People Advisory provides services on an "as is" basis. While
              we strive for excellence, we cannot guarantee specific outcomes.
              We are not liable for indirect, incidental, or consequential
              damages arising from the use of our services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Professional Advice
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              Our services provide professional recruitment, HR, and career
              support. However, we do not provide legal, financial, or medical
              advice. Consult appropriate professionals for specialized
              guidance.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Confidentiality
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              We maintain confidentiality of information shared during our
              engagements. Clients and candidates agree to maintain
              confidentiality of information shared by us during the service
              delivery process.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Service Modifications
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              We reserve the right to modify, suspend, or discontinue any aspect
              of our services at any time. We will make reasonable efforts to
              notify users of significant changes.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Termination
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              Either party may terminate a service engagement according to
              agreed terms. We reserve the right to refuse or terminate services
              if these terms are violated.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Governing Law
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              These terms are governed by the laws of Kenya. Any disputes will
              be subject to the jurisdiction of Kenyan courts.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Changes to Terms
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              We may update these Terms of Service from time to time. Continued
              use of our services after changes constitutes acceptance of the
              updated terms.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Contact Information
            </h2>
            <p className="text-foreground leading-relaxed mb-2">
              For questions about these Terms of Service, please contact us:
            </p>
            <p className="text-foreground leading-relaxed mb-2">
              <strong>Email:</strong> info@keynpeopleadvisory.co.ke
            </p>
            <p className="text-foreground leading-relaxed mb-2">
              <strong>Phone:</strong> +254 782 461268
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              <strong>Location:</strong> Nairobi, Kenya
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
