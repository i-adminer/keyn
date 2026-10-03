import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/providers/theme";
import { CustomCursor } from "@/components/custom-cursor";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
} from "@/lib/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://keynpeopleadvisory.co.ke"),
  title: {
    default: "Keyn People Advisory | Recruitment, HR Consulting & Career Services",
    template: "%s | Keyn People Advisory",
  },
  description:
    "Keyn People Advisory provides professional recruitment, HR consulting, career development and CV services for organisations and professionals in Kenya and beyond.",
  keywords: [
    "Keyn",
    "Keyn People Advisory",
    "Keyn recruitment",
    "Keyn HR consulting",
    "Keyn People",
    "Keyn Advisory",
    "recruitment Kenya",
    "HR consulting Kenya",
    "CV writing services Kenya",
    "talent acquisition Kenya",
    "career services Kenya",
    "professional recruitment Kenya",
    "HR advisory Kenya",
    "executive search Kenya",
    "career development Kenya",
    "career coaching Kenya",
    "career mentoring Kenya",
    "training and development",
    "performance management",
    "LinkedIn profile optimization",
    "ATS-friendly CV",
    "HR outsourcing Kenya",
    "employee relations",
    "talent management Kenya",
    "young adults career guidance",
    "adolescent career coaching",
    "Nairobi recruitment agency",
    "Nairobi HR consulting",
  ],
  authors: [{ name: "Keyn People Advisory" }],
  creator: "Keyn People Advisory",
  publisher: "Keyn People Advisory",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    alternateLocale: ["en_US", "en_GB"],
    url: "https://keynpeopleadvisory.co.ke",
    title:
      "Keyn People Advisory | Recruitment, HR Consulting & Career Services",
    description:
      "Empower young talent with career guidance and global opportunities. Professional recruitment, HR consulting, career development and CV services for organisations and professionals.",
    siteName: "Keyn People Advisory",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Keyn People Advisory - Talent, Careers, Opportunity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Keyn People Advisory | Recruitment, HR Consulting & Career Services",
    description:
      "Professional recruitment, HR consulting, career development and CV services for organisations and professionals.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "business",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.variable)}
      suppressHydrationWarning
    >
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans cursor-none overflow-x-hidden">
        <ThemeProvider>
          <CustomCursor />
          {children}
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}
