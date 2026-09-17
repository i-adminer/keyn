"use client";

import Image from "next/image";

const clients = [
  { name: "Apple", logo: "/images/clients/apple.svg" },
  { name: "Microsoft", logo: "/images/clients/microsoft.svg" },
  { name: "Google", logo: "/images/clients/google.svg" },
  { name: "Safaricom", logo: "/images/clients/safaricom.svg" },
  { name: "KCB Bank", logo: "/images/clients/kcb.svg" },
  { name: "Equity Bank", logo: "/images/clients/equity.svg" },
  { name: "Coca-Cola", logo: "/images/clients/coca-cola.svg" },
];

export function ClientsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-muted-foreground mb-12 text-sm uppercase tracking-wider">
            Our diversified clients have ended up at
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clients.map((client) => (
              <div
                key={client.name}
                className="transition-all duration-300 grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
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
          </div>
        </div>
      </div>
    </section>
  );
}
