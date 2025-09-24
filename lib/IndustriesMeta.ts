export type IndustriesMetaType = {
  slug: string;
  title: string;
  description: string;
  keywords?: string[];
  url?: string;
  canonical?: string;
  author?: string;
  robots?: string;
  copyright?: string;
  hreflangs?: { href: string; hreflang: string }[];
  openGraph?: {
    type?: string;
    title?: string;
    description?: string;
    url?: string;
    images?: string[];
    siteName?: string;
    locale?: string;
    localeAlt?: string[];
    locales?: string[];
    image?: any;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    image?: string;
    creator?: string;
  };
  jsonLd?: Array<object>; // array of JSON-LD objects (Product, FAQ, Review, etc.)
};

export const industriesMeta: Record<string, IndustriesMetaType> = {
  healthcare: {
    slug: "healthcare",
    title: "Healthcare IT Support Services",
    description:
      "Specialized IT support for hospitals, clinics, and medical facilities. HIPAA compliance, EHR management, secure backups, and 24/7 assistance.",
    keywords: [
      "healthcare IT support",
      "healthcare IT services",
      "hospital IT assistance",
      "medical network support",
      "EHR support",
      "HIPAA compliant IT services",
      "healthcare data backup",
      "healthcare cloud solutions",
      "healthcare network troubleshooting",
      "managed healthcare IT services",
    ],
    canonical: "https://www.itsupport.net.in/industries/healthcare",
    hreflangs: [
      {
        href: "https://www.itsupport.net.in/industries/healthcare",
        hreflang: "en-US",
      },
      {
        href: "https://www.itsupport.net.in/industries/healthcare",
        hreflang: "en-AE",
      },
      {
        href: "https://www.itsupport.net.in/industries/healthcare",
        hreflang: "de-DE",
      },
      {
        href: "https://www.itsupport.net.in/industries/healthcare",
        hreflang: "es-ES",
      },
      {
        href: "https://www.itsupport.net.in/industries/healthcare",
        hreflang: "fr-FR",
      },
      {
        href: "https://www.itsupport.net.in/industries/healthcare",
        hreflang: "pt-BR",
      },
      {
        href: "https://www.itsupport.net.in/industries/healthcare",
        hreflang: "en-GB",
      },
      {
        href: "https://www.itsupport.net.in/industries/healthcare",
        hreflang: "en-CA",
      },
      {
        href: "https://www.itsupport.net.in/industries/healthcare",
        hreflang: "en-MY",
      },
      {
        href: "https://www.itsupport.net.in/industries/healthcare",
        hreflang: "en-SG",
      },
      {
        href: "https://www.itsupport.net.in/industries/healthcare",
        hreflang: "en-NG",
      },
      {
        href: "https://www.itsupport.net.in/industries/healthcare",
        hreflang: "en-ID",
      },
      {
        href: "https://www.itsupport.net.in/industries/healthcare",
        hreflang: "en-IE",
      },
      {
        href: "https://www.itsupport.net.in/industries/healthcare",
        hreflang: "en-AU",
      },
      {
        href: "https://www.itsupport.net.in/industries/healthcare",
        hreflang: "en-IN",
      },
      {
        href: "https://www.itsupport.net.in/industries/healthcare",
        hreflang: "en-NZ",
      },
      {
        href: "https://www.itsupport.net.in/industries/healthcare",
        hreflang: "en-PH",
      },
      {
        href: "https://www.itsupport.net.in/industries/healthcare",
        hreflang: "en-ZA",
      },
      {
        href: "https://www.itsupport.net.in/industries/healthcare",
        hreflang: "es-MX",
      },
      {
        href: "https://www.itsupport.net.in/industries/healthcare",
        hreflang: "es-CO",
      },
      {
        href: "https://www.itsupport.net.in/industries/healthcare",
        hreflang: "es-PE",
      },
      {
        href: "https://www.itsupport.net.in/industries/healthcare",
        hreflang: "es-AR",
      },
      {
        href: "https://www.itsupport.net.in/industries/healthcare",
        hreflang: "es-CL",
      },
      {
        href: "https://www.itsupport.net.in/industries/healthcare",
        hreflang: "es-VE",
      },
      {
        href: "https://www.itsupport.net.in/industries/healthcare",
        hreflang: "pt-PT",
      },
      {
        href: "https://www.itsupport.net.in/industries/healthcare",
        hreflang: "fr-CA",
      },
      {
        href: "https://www.itsupport.net.in/industries/healthcare",
        hreflang: "fr-BE",
      },
    ],
    openGraph: {
      title: "Healthcare IT Support Services",
      description:
        "Specialized healthcare IT support for hospitals, clinics, and medical facilities. HIPAA compliance, EHR assistance, secure backups, and 24/7 technical help.",
      url: "https://www.itsupport.net.in/industries/healthcare",
      images: ["image-url"],
      siteName: "Healthcare IT Support Services",
      locale: "en_US",
      localeAlt: [
        "en-US",
        "en-AE",
        "de-DE",
        "es-ES",
        "fr-FR",
        "pt-BR",
        "en-GB",
        "en-CA",
        "en-MY",
        "en-SG",
        "en-NG",
        "en-ID",
        "en-IE",
        "en-AU",
        "en-IN",
        "en-NZ",
        "en-PH",
        "en-ZA",
        "es-MX",
        "es-CO",
        "es-PE",
        "es-AR",
        "es-CL",
        "es-VE",
        "pt-PT",
        "fr-CA",
        "fr-BE",
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Hospital & Medical IT Services",
      description:
        "Trusted healthcare IT support solutions. Network monitoring, cloud services, and HIPAA-compliant assistance for medical organizations.",
      image: "image-url",
      creator: "@L4RGINDIA",
    },
    robots: "index, follow",
    author: "Healthcare Support industry",
    copyright: "© 2025",
    jsonLd: [
      {
        "@context": "http://schema.org",
        "@id": "#product",
        "@type": "Product",
        name: "Healthcare IT Support Services",
        description:
          "Comprehensive IT support for the healthcare industry, including EHR system assistance, HIPAA-compliant cloud solutions, secure data backup, network monitoring, and 24/7 technical help for hospitals, clinics, and medical facilities.",
        url: "https://www.itsupport.net.in/industries/healthcare",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "986518",
        },
        audience: {
          "@type": "Audience",
          description:
            "Healthcare providers and organizations seeking specialized IT support services including secure network management, HIPAA compliance, data protection, and 24/7 technical assistance.",
          audienceType:
            "Healthcare Organizations, Hospitals, Clinics, Medical Practices",
        },
        website: {
          "@type": "WebSite",
          url: "https://www.itsupport.net.in/industries/healthcare",
          name: "L4RG Healthcare IT Support Services",
          description:
            "Specialized IT support services for the healthcare industry, including EHR assistance, HIPAA-compliant cloud solutions, secure backups, and 24/7 technical help for hospitals and clinics.",
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://www.itsupport.net.in/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        },
        reviews: [
          {
            "@type": "Review",
            name: "Expert Healthcare IT Support Services | HIPAA-Compliant Assistance",
            url: "https://www.itsupport.net.in/industries/healthcare",
            image:
              "https://www.itsupport.net.in/images/healthcare-it-support.jpg",
            author: { "@type": "Person", name: "Mike" },
            reviewBody:
              "Best healthcare IT support in the USA, offering HIPAA compliance, EHR management, secure data backup, and 24/7 technical assistance for hospitals and clinics.",
            reviewRating: { "@type": "Rating", ratingValue: "4.8" },
            itemReviewed: {
              "@type": "LocalBusiness",
              name: "L4RG US LLC",
              priceRange: "12000",
              image: "",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
                addressLocality: "ELMSFORD ST",
                addressRegion: "ELMSFORD ST",
                postalCode: "27703",
                telephone: "+1-978-615-9403",
                addressCountry: {
                  "@type": "Country",
                  name: "United State America",
                },
              },
            },
          },
        ],
        professionalService: {
          "@type": "ProfessionalService",
          name: "Healthcare IT Support Services",
          image:
            "https://www.itsupport.net.in/images/healthcare-it-support.jpg",
          "@id": "https://www.itsupport.net.in/industries/healthcare",
          url: "https://www.itsupport.net.in/",
          telephone: "+1-978-615-9403",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
            addressLocality: "ELMSFORD ST",
            postalCode: "27703",
            addressCountry: "USA",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 35.96039,
            longitude: -78.8272,
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
          sameAs: [
            "https://www.facebook.com/L4RGINDIA/",
            "https://twitter.com/L4rgindia",
            "https://www.instagram.com/l4rgllc/",
            "https://www.youtube.com/c/L4RGINDIA",
            "https://in.linkedin.com/company/l4rgindia",
            "https://in.pinterest.com/L4RGINDIA/",
            "https://l4rgcompany.quora.com/",
            "https://www.itsupport.net.in/",
          ],
        },
        employerAggregateRating: {
          "@type": "EmployerAggregateRating",
          itemReviewed: {
            "@type": "Organization",
            name: "Healthcare IT Support Services - itsupport.net.in",
            sameAs: "https://www.itsupport.net.in/industries/healthcare",
          },
          ratingValue: "99",
          bestRating: "100",
          worstRating: "1",
          ratingCount: "4.9",
        },
        webPage: {
          "@type": "WebPage",
          name: "Expert Healthcare IT Support Services",
          url: "https://www.itsupport.net.in/industries/healthcare",
          inLanguage: "en-US",
          isPartOf: {
            "@type": "WebSite",
            url: "https://www.itsupport.net.in/",
            name: "L4RG US LLC",
          },
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 156790,
              name: "Home",
              item: "https://www.itsupport.net.in/",
            },
            {
              "@type": "ListItem",
              position: 156791,
              name: "industries",
              item: "https://www.itsupport.net.in/industries",
            },
            {
              "@type": "ListItem",
              position: 156792,
              name: "finance & banking support industries",
              item: "https://www.itsupport.net.in/industries/healthcare",
            },
          ],
        },
        FAQPage: {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How do you ensure HIPAA compliance for healthcare IT systems?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We conduct detailed security audits, implement data encryption, access controls, and maintain audit logs to ensure complete HIPAA compliance.",
              },
            },
            {
              "@type": "Question",
              name: "Can you integrate our existing EMR system with new telemedicine software?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Our team specializes in integrating EMR/EHR systems with telemedicine platforms, ensuring secure and seamless data flow.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer 24/7 healthcare IT support?",
              acceptedAnswer: {
                "@type": "Answer",
                text: " Absolutely. We provide round-the-clock remote and on-site IT assistance for healthcare facilities worldwide.",
              },
            },
            {
              "@type": "Question",
              name: "How do you protect against healthcare cyberattacks?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We use advanced cybersecurity measures like intrusion detection, MFA, endpoint protection, and regular vulnerability scanning to safeguard your network.",
              },
            },
            {
              "@type": "Question",
              name: "Can you work with multi-location hospitals and clinics?",
              acceptedAnswer: {
                "@type": "Answer",
                text: " Yes, we provide centralized IT management and secure networking solutions for healthcare organizations with multiple locations.",
              },
            },
          ],
        },
        QAPage: {
          "@type": "QAPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Can you help with setting up secure healthcare IT systems?",
              text: "Absolutely. We provide complete setup and configuration of secure healthcare IT systems, including HIPAA-compliant networks, encrypted communications, access control management, and performance optimization to keep patient data secure and systems running efficiently.",
              answerCount: 1,
              acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. We provide complete setup and configuration of secure healthcare IT systems, including HIPAA-compliant networks, encrypted communications, access control management, and performance optimization to keep patient data secure and systems running efficiently.",
                dateCreated: "2025-07-14T10:00:00+05:30",
                url: "https://www.itsupport.net.in/industries/healthcare#q1a1",
              },
            },
            {
              "@type": "Question",
              name: "What’s the difference between healthcare IT support and general IT support?",
              text: "Healthcare IT support specializes in managing medical systems, ensuring HIPAA compliance, securing patient data, and maintaining healthcare-specific applications, while general IT support covers broader hardware, software, and network needs. We provide both for complete coverage in healthcare organizations.",
              answerCount: 1,
              acceptedAnswer: {
                "@type": "Answer",
                text: "Healthcare IT support specializes in managing medical systems, ensuring HIPAA compliance, securing patient data, and maintaining healthcare-specific applications, while general IT support covers broader hardware, software, and network needs. We provide both for complete coverage in healthcare organizations.",
                dateCreated: "2025-07-14T10:10:00+05:30",
                url: "https://www.itsupport.net.in/industries/healthcare#q3a1",
              },
            },
            {
              "@type": "Question",
              name: "Can you help secure our healthcare network from cyber threats?",
              text: "Yes. We provide healthcare-specific network security solutions, including HIPAA-compliant security assessments, firewall configuration, intrusion detection, and best-practice setups to protect patient data, medical devices, and healthcare systems from viruses, malware, and unauthorized access.",
              answerCount: 1,
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We provide healthcare-specific network security solutions, including HIPAA-compliant security assessments, firewall configuration, intrusion detection, and best-practice setups to protect patient data, medical devices, and healthcare systems from viruses, malware, and unauthorized access.",
                dateCreated: "2025-07-14T10:15:00+05:30",
                url: "https://www.itsupport.net.in/industries/healthcare#q4a1",
              },
            },
          ],
        },
      },
    ],
  },
};
