import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/providers/theme";
import { CustomCursor } from "@/components/custom-cursor";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keyn People Advisory | Recruitment, HR Consulting & Career Services",
  description: "Keyn People Advisory provides professional recruitment, HR consulting, career development and CV services for organisations and professionals.",
  keywords: [
    "recruitment Kenya",
    "HR consulting",
    "CV writing services",
    "talent acquisition",
    "career services",
    "professional recruitment",
    "HR advisory",
  ],
  authors: [{ name: "Keyn People Advisory" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://keynpeople.com",
    title: "Keyn People Advisory | Recruitment, HR Consulting & Career Services",
    description: "Professional recruitment, HR consulting, career development and CV services for organisations and professionals.",
    siteName: "Keyn People Advisory",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keyn People Advisory | Recruitment, HR Consulting & Career Services",
    description: "Professional recruitment, HR consulting, career development and CV services for organisations and professionals.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans cursor-none overflow-x-hidden">
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
