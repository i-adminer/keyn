"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

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

export function ClientsSection() {
  return (
    <section className="py-16 bg-background overflow-hidden border-b">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-muted-foreground mb-12 text-sm uppercase tracking-wider font-extrabold">
            Our diversified clients have ended up at
          </p>

          <Marquee
            pauseOnHover
            speed={40}
            gradient
            gradientColor="hsl(var(--background))"
            gradientWidth={100}
          >
            {clients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="mx-8 md:mx-12 transition-all duration-300 grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
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
          </Marquee>
        </div>
      </div>
    </section>
  );
}
