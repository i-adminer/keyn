"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const clients = [
  { name: "Apple", logo: "/images/clients/apple.svg" },
  { name: "Microsoft", logo: "/images/clients/microsoft.svg" },
  { name: "Google", logo: "/images/clients/google.svg" },
  { name: "Amazon", logo: "/images/clients/amazon.svg" },
  { name: "IBM", logo: "/images/clients/ibm.svg" },
  { name: "Safaricom", logo: "/images/clients/safaricom.png" },
  { name: "KCB Bank", logo: "/images/clients/kcb.png" },
  { name: "Equity Bank", logo: "/images/clients/equity.png" },
  { name: "Coca-Cola", logo: "/images/clients/coca-cola.svg" },
];

// Duplicate for seamless infinite scroll
const duplicatedClients = [...clients, ...clients];

export function ClientsSection() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-muted-foreground mb-12 text-sm uppercase tracking-wider">
            Our diversified clients have ended up at
          </p>
          
          <div className="relative">
            {/* Gradient Fades on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

            {/* Scrolling Container */}
            <div 
              className="overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <motion.div
                className="flex gap-12 md:gap-16"
                animate={{
                  x: isPaused ? undefined : [0, -50 + "%"],
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
                  <motion.div
                    key={`${client.name}-${index}`}
                    className="shrink-0 transition-all duration-300 grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={120}
                      height={60}
                      className="h-12 w-auto object-contain"
                      priority={false}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
