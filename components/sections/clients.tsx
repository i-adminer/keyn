"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "../ui/animated-section";

const clients = [
  { name: "Apple", logo: "/images/clients/apple.svg" },
  { name: "Microsoft", logo: "/images/clients/microsoft.svg" },
  { name: "Google", logo: "/images/clients/google.svg" },
  { name: "Amazon", logo: "/images/clients/amazon.svg" },
  { name: "IBM", logo: "/images/clients/ibm.svg" },
  { name: "Safaricom", logo: "/images/clients/safaricom.webp" },
  { name: "KCB Bank", logo: "/images/clients/kcb.png" },
  { name: "Equity Bank", logo: "/images/clients/equity.png" },
  { name: "Coca-Cola", logo: "/images/clients/coca-cola.svg" },
];

// Duplicate clients for seamless infinite scroll
const duplicatedClients = [...clients, ...clients];

export function ClientsSection() {
  return (
    <AnimatedSection>
      <section className="py-16 bg-background overflow-hidden border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <span className="text-center text-muted-foreground mb-12 text-sm uppercase tracking-wider font-extrabold block">
              Our diversified clients have ended up at
            </span>

            {/* Infinite Marquee Scrolling */}
            <div className="relative">
              {/* Gradient Fades on edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

              {/* Scrolling Container */}
              <div className="overflow-hidden">
                <motion.div
                  className="flex gap-8 md:gap-12"
                  animate={{
                    x: [0, "-50%"],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 25,
                      ease: "linear",
                    },
                  }}
                >
                  {duplicatedClients.map((client, index) => (
                    <div
                      key={`${client.name}-${index}`}
                      className="shrink-0"
                    >
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        width={120}
                        height={60}
                        className="h-12 w-auto object-contain"
                        priority={false}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
