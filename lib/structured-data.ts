// Structured Data for SEO
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://keynpeopleadvisory.co.ke/#organization",
  name: "Keyn People Advisory",
  alternateName: ["Keyn", "Keyn People", "Keyn Advisory"],
  url: "https://keynpeopleadvisory.co.ke",
  logo: "https://keynpeopleadvisory.co.ke/images/logo.png",
  description:
    "Keyn People Advisory provides professional recruitment, HR consulting, career development, and CV services for organisations and professionals in Kenya and beyond.",
  email: "info@keynpeopleadvisory.co.ke",
  telephone: "+254782461268",
  address: {
    "@type": "PostalAddress",
    addressCountry: "KE",
    addressLocality: "Nairobi",
  },
  sameAs: [
    "https://www.linkedin.com/in/keyn-peopleadvisory-6a1608438/",
    // Add other social media links when available
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+254782461268",
      contactType: "Customer Service",
      availableLanguage: ["en"],
      areaServed: "KE",
    },
  ],
  areaServed: {
    "@type": "Country",
    name: "Kenya",
  },
  knowsAbout: [
    "Recruitment",
    "HR Consulting",
    "Career Development",
    "CV Writing",
    "Talent Acquisition",
    "Executive Search",
    "Performance Management",
    "Employee Relations",
    "Career Coaching",
    "LinkedIn Optimization",
    "Training and Development",
  ],
  founder: {
    "@type": "Person",
    name: "Eric Ochieng",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://keynpeopleadvisory.co.ke/#website",
  url: "https://keynpeopleadvisory.co.ke",
  name: "Keyn People Advisory",
  description:
    "Professional recruitment, HR consulting, career development and CV services",
  publisher: {
    "@id": "https://keynpeopleadvisory.co.ke/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://keynpeopleadvisory.co.ke/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://keynpeopleadvisory.co.ke/#business",
  name: "Keyn People Advisory",
  image: "https://keynpeopleadvisory.co.ke/images/logo.png",
  url: "https://keynpeopleadvisory.co.ke",
  telephone: "+254782461268",
  email: "info@keynpeopleadvisory.co.ke",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "KE",
    addressLocality: "Nairobi",
  },
  geo: {
    "@type": "GeoCoordinates",
    addressCountry: "KE",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/in/keyn-peopleadvisory-6a1608438/",
  ],
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const serviceSchema = (service: {
  name: string;
  description: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: service.name,
  provider: {
    "@id": "https://keynpeopleadvisory.co.ke/#organization",
  },
  areaServed: {
    "@type": "Country",
    name: "Kenya",
  },
  description: service.description,
  url: service.url,
});
