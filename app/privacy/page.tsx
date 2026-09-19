"use client";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>
        </Section>

        <Section background="default" className="py-12">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Introduction
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              Keyn People Advisory ("we", "our", "us") is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, store, and protect your personal information when
              you use our recruitment, HR consulting, CV writing, and training
              services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Information We Collect
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-foreground space-y-2 mb-6">
              <li>Contact information (name, email address, phone number)</li>
              <li>
                Professional information (employment history, qualifications,
                skills)
              </li>
              <li>CV and career documents</li>
              <li>Organisation and recruitment requirements</li>
              <li>Training and HR consulting requirements</li>
              <li>Communication preferences</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              How We Use Your Information
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-foreground space-y-2 mb-6">
              <li>Provide recruitment and talent acquisition services</li>
              <li>Deliver HR consulting and advisory services</li>
              <li>Prepare professional CVs and career documents</li>
              <li>Provide training and development services</li>
              <li>Communicate with you about our services</li>
              <li>Improve our services and website</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Recruitment Data
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              When you apply for positions through our recruitment services, we
              collect and process your CV, application materials, and related
              information to match you with suitable opportunities. This
              information is shared with relevant employers with your consent.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              CV and Career Services Data
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              For CV writing and career services, we collect detailed
              professional information to create your career documents. This
              information is used solely for preparing your materials and is not
              shared with third parties without your explicit consent.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Data Security
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              We implement appropriate technical and organisational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Data Retention
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this policy, unless a longer
              retention period is required by law. Candidate information may be
              retained for future opportunities with your consent.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Third-Party Sharing
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              We do not sell your personal information. We may share your
              information with:
            </p>
            <ul className="list-disc list-inside text-foreground space-y-2 mb-6">
              <li>
                Employers and organisations (for recruitment services, with your
                consent)
              </li>
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Your Rights
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-foreground space-y-2 mb-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent for processing</li>
              <li>Request a copy of your information</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Cookies
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              Our website may use cookies to enhance user experience. You can
              control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Contact Us
            </h2>
            <p className="text-foreground leading-relaxed mb-2">
              If you have questions about this Privacy Policy or wish to
              exercise your rights, please contact us:
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

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Policy Updates
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated revision date.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
