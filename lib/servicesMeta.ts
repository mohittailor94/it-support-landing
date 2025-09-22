// Process the above data adn convert the output like this
// {
//   slug: string;
//   title: string;
//   description: string;
//   keywords?: string[];
//   canonical?: string;
//   hreflangs?: { href: string; hreflang: string }[];
//   openGraph?: {
//     title?: string;
//     description?: string;
//     url?: string;
//     images?: string[];
//     siteName?: string;
//     locale?: string;
//     localeAlt?: string[];
//   };
//   twitter?: {
//     card?: string;
//     title?: string;
//     description?: string;
//     image?: string;
//     creator?: string;
//   };
//   jsonLd?: Array<object>; // array of JSON-LD objects (Product, FAQ, Review, etc.)
// };
export type ServiceMeta = {
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

export const servicesMeta: Record<string, ServiceMeta> = {
  "printer-support-services": {
    slug: "printer-support-services",
    title:
      "Printer Setup & Troubleshooting Services, Home & Office Printer Support",
    description:
      "Need help with your printer? We offer setup, repair, wireless connection, and print quality troubleshooting for home and office printers. printer offline, printer not printing, paper jam, ink low, toner low, printer error, printer not connecting",
    keywords: [
      "printer support",
      "printer repair",
      "printer help",
      "printer services",
      "fix printer",
      "troubleshoot printer",
      "printer offline",
      "printer not printing",
      "paper jam",
      "ink low",
      "toner low",
      "printer error",
      "printer not connecting",
    ],
    canonical: "https://www.itsupport.net.in/services/printer-support-services",
    hreflangs: [
      {
        href: "https://www.itsupport.net.in/services/printer-support-services",
        hreflang: "en-US",
      },
      {
        href: "https://www.itsupport.net.in/services/printer-support-services",
        hreflang: "en-AE",
      },
      {
        href: "https://www.itsupport.net.in/services/printer-support-services",
        hreflang: "de-DE",
      },
      {
        href: "https://www.itsupport.net.in/services/printer-support-services",
        hreflang: "es-ES",
      },
      {
        href: "https://www.itsupport.net.in/services/printer-support-services",
        hreflang: "fr-FR",
      },
      {
        href: "https://www.itsupport.net.in/services/printer-support-services",
        hreflang: "pt-BR",
      },
      {
        href: "https://www.itsupport.net.in/services/printer-support-services",
        hreflang: "en-GB",
      },
      {
        href: "https://www.itsupport.net.in/services/printer-support-services",
        hreflang: "en-CA",
      },
      {
        href: "https://www.itsupport.net.in/services/printer-support-services",
        hreflang: "en-MY",
      },
      {
        href: "https://www.itsupport.net.in/services/printer-support-services",
        hreflang: "en-SG",
      },
      {
        href: "https://www.itsupport.net.in/services/printer-support-services",
        hreflang: "en-NG",
      },
      {
        href: "https://www.itsupport.net.in/services/printer-support-services",
        hreflang: "en-ID",
      },
      {
        href: "https://www.itsupport.net.in/services/printer-support-services",
        hreflang: "en-IE",
      },
      {
        href: "https://www.itsupport.net.in/services/printer-support-services",
        hreflang: "en-AU",
      },
      {
        href: "https://www.itsupport.net.in/services/printer-support-services",
        hreflang: "en-IN",
      },
    ],
    openGraph: {
      title: "Printer Not Working? Get Technical Printer Support Today",
      description:
        "Fix common printer problems like offline errors, paper jams, and connection issues. Call now for professional printer help and on-site services.",
      url: "https://www.itsupport.net.in/services/printer-support-services",
      images: ["https://www.itsupport.net.in/og-images/printer-og.png"],
      siteName: "Printer Support & Repair Services | Fix Printer Issues Fast",
      locale: "en_US",
      localeAlt: ["en-US", "en-AE", "de-DE", "es-ES", "fr-FR", "pt-BR"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Fast & Reliable Printer Services | Repair, Support, Setup",
      description:
        "Offering complete printer services including repair, setup, and troubleshooting.",
      image: "https://www.itsupport.net.in/og-images/printer-og.png",
      creator: "@L4RGINDIA",
    },
    jsonLd: [
      // Product
      {
        "@context": "http://schema.org",
        "@id": "#product",
        "@type": "Product",
        name: "Printer Support Services",
        description:
          "Get expert printer support for all brands and models. We fix printing issues, setup new printers, and provide driver installation & connectivity help.",
        url: "https://www.itsupport.net.in/services/printer-support-services",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "98683",
        },
        audience: {
          "@type": "Audience",
          audienceType:
            "Professionals, Developers, Small Businesses, Enterprises, Home Users, IT Administrators",
        },
      },
      // WebSite
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: "https://www.itsupport.net.in/services/printer-support-services",
        name: "L4RG US LLC",
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
      // Review
      {
        "@context": "https://schema.org",
        "@type": "Review",
        name: "Fix Printer Issues Quickly | Local Printer Repair & Support",
        url: "https://www.itsupport.net.in/services/printer-support-services",
        image: "",
        author: "Zike",
        reviewBody: "best printer support in usa",
        reviewRating: { "@type": "Rating", ratingValue: "4.9" },
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
            telephone: "+91-906-968-9226",
            addressCountry: {
              "@type": "Country",
              name: "United State America",
            },
          },
        },
      },
      // ProfessionalService
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "ITSupport.net.in",
        image: "path",
        url: "https://www.itsupport.net.in/",
        telephone: "+91-906-968-9226",
        address: {
          "@type": "PostalAddress",
          streetAddress: "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
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
      // EmployerAggregateRating
      {
        "@context": "https://schema.org/",
        "@type": "EmployerAggregateRating",
        itemReviewed: {
          "@type": "Organization",
          name: "Printer Support Services",
          sameAs: "https://www.itsupport.net.in/",
        },
        ratingValue: "92",
        bestRating: "100",
        worstRating: "1",
        ratingCount: "4.9",
      },
      // WebPage
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Fix Printer Issues Quickly | Local Printer Repair & Support",
        url: "https://www.itsupport.net.in/services/printer-support-services",
        inLanguage: "en-US",
        isPartOf: {
          "@type": "WebSite",
          url: "https://www.itsupport.net.in/",
          name: "L4RG US LLC",
        },
      },
      // BreadcrumbList
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.itsupport.net.in/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://www.itsupport.net.in/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "printer support services",
            item: "https://www.itsupport.net.in/services/printer-support-services",
          },
        ],
      },
      // FAQPage
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What types of printer issues do you support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We bolster a wide run of printer issues counting paper jams, printer offline mistakes, network issues, printing quality issues, driver establishment, and equipment repairs.",
            },
          },
          {
            "@type": "Question",
            name: "My printer says it's offline. How can I fix this?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A printer may show offline due to connection issues or driver errors. First, check the cable or Wi-Fi connection, restart both the printer and computer, and ensure the correct printer is set as default.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer on-site printer repair services?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we provide on-site printer repair for both home and business users. Our technicians can diagnose and fix most hardware or connectivity problems at your location.",
            },
          },
          {
            "@type": "Question",
            name: "Can you help install a new printer or set up wireless printing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. We assist with new printer installations, Wi-Fi printer setup, driver configuration, and connecting the printer to your network or multiple devices.",
            },
          },
          {
            "@type": "Question",
            name: "My printer isn’t printing correctly—how do I fix print quality issues?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Print quality problems often stem from clogged nozzles, low ink, or incorrect settings. We can clean print heads, align cartridges, and adjust software settings to resolve the issue.",
            },
          },
        ],
      },
      // QAPage
      {
        "@context": "https://schema.org",
        "@type": "QAPage",
        mainEntity: {
          "@type": "Question",
          name: "Why is my printer not printing?",
          text: "If your printer is not printing, it could be due to a number of reasons such as low ink or toner, a paper jam, outdated or corrupted drivers, connection issues, or problems with the print queue. Try restarting the printer, checking the connection, reinstalling the drivers, and clearing the print queue to resolve the issue.",
          answerCount: 2,
          upvoteCount: 36,
          dateCreated: "2025-07-20T10:00:00+05:30",
          author: { "@type": "Person", name: "Ankit Mehra" },
          acceptedAnswer: {
            "@type": "Answer",
            text: "This issue may be caused by connection problems, low ink, driver errors, or a jammed print queue. Restart the printer, check your connections, and update the drivers to fix the problem.",
            dateCreated: "2025-07-21T11:00:00+05:30",
            upvoteCount: 22,
            url: "https://www.itsupport.net.in/services/antivirus-support-services",
            author: { "@type": "Person", name: "Pooja Sinha" },
          },
          suggestedAnswer: [
            {
              "@type": "Answer",
              text: "Make sure there’s no paper jam and that your printer has ink or toner. Sometimes, simply turning it off and on again fixes it.",
              dateCreated: "2025-07-21T16:15:00+05:30",
              upvoteCount: 9,
              url: "https://www.itsupport.net.in/client-testimonials",
              author: { "@type": "Person", name: "Ramesh Nair" },
            },
            {
              "@type": "Answer",
              text: "If your printer is not working, first check the power and cable connections. Ensure the printer drivers are installed correctly. Restart both the printer and the computer. If the problem persists, visit the manufacturer’s support page or contact a technical support service for further assistance.",
              dateCreated: "2025-07-22T09:30:00+05:30",
              upvoteCount: 5,
              url: "https://www.itsupport.net.in/reviews",
              author: { "@type": "Person", name: "Neha Patil" },
            },
          ],
        },
      },
    ],
  },
  "antivirus-support-services": {
    slug: "antivirus-support-services",
    title:
      "Antivirus Support Services, Virus Removal, Setup, Scans & Security Fixes",
    description:
      "Get expert antivirus support for your PC, laptop, or network. We remove malware, install security software, and protect your devices from threats.",
    keywords: [
      "antivirus support",
      "antivirus help",
      "antivirus technical support",
      "virus removal service",
      "malware removal service",
      "computer virus help",
      "PC virus removal",
      "antivirus assistance",
      "antivirus not working",
      "antivirus installation problems",
      "antivirus update issues",
      "antivirus not scanning",
    ],
    url: "https://www.itsupport.net.in/services/antivirus-support-services",
    canonical:
      "https://www.itsupport.net.in/services/antivirus-support-services",
    author: "Antivirus Support Services",
    robots: "index, follow",
    copyright: "© 2025",
    twitter: {
      card: "summary_large_image",
      creator: "@L4RGINDIA",
      title: "Antivirus Not Working? Get Fast Malware & Virus Removal Help",
      description:
        "Troubled by pop-ups or system slowdowns? Our antivirus experts remove viruses, spyware, and malware fast. Get antivirus assistance online or at your location.",
      image: "image-url",
    },
    openGraph: {
      type: "website",
      siteName: "Professional Antivirus Support, Fast & Secure Solutions",
      title: "PC Virus Removal & Antivirus Help | Malware Support Services",
      description:
        "Is your antivirus not working? We fix infected computers, remove malware, and provide full antivirus support. Trusted virus removal for Windows and Mac. Available today!",
      url: "https://www.itsupport.net.in/services/antivirus-support-services",
      image: {
        url: "image-url",
        secureUrl: "image-url",
        type: "image/png",
        width: "Fix Size",
        height: "Fix Size",
        alt: "Professional antivirus technical support in US",
      },
      locales: [
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
    jsonLd: [
      // ✅ Product schema
      {
        "@context": "http://schema.org",
        "@type": "Product",
        name: "Antivirus Support Services",
        description:
          "Need antivirus support? Our professionals offer virus removal, software updates, real-time protection, and full security checks for home or business.",
        url: "https://www.itsupport.net.in/services/antivirus-support-services",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "986037890",
        },
        audience: {
          "@type": "Audience",
          audienceType: "Trusted Antivirus Help, Virus Removal & Protection",
        },
      },
      // ✅ Website schema
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "ITSupport.net.in",
        url: "https://www.itsupport.net.in",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.itsupport.net.in/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      // ✅ Review schema
      {
        "@context": "https://schema.org",
        "@type": "Review",
        name: "Trusted Antivirus Support & Virus Help | Computer Protection Experts",
        url: "https://www.itsupport.net.in/services/antivirus-support-services",
        author: "Mike",
        reviewBody: "Best antivirus technical support in usa",
        reviewRating: { "@type": "Rating", ratingValue: "4.7" },
        itemReviewed: {
          "@type": "LocalBusiness",
          name: "ItSupport.net.in",
          priceRange: "12000",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
            postalCode: "27703",
            telephone: "+91-906-968-9226",
            addressCountry: "USA",
          },
        },
      },
      // ✅ Professional Service schema
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Professional antivirus support",
        url: "https://www.itsupport.net.in/services/antivirus-support-services",
        telephone: "+91-906-968-9226",
        address: {
          "@type": "PostalAddress",
          streetAddress: "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
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
      // ✅ Breadcrumb schema
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.itsupport.net.in/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://www.itsupport.net.in/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Antivirus Support Services",
            item: "https://www.itsupport.net.in/services/antivirus-support-services",
          },
        ],
      },
      // ✅ FAQ schema
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do I know if my computer has a virus or malware?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Common signs include slow performance, pop-ups, crashes, or antivirus being disabled.",
            },
          },
          {
            "@type": "Question",
            name: "What should I do if my antivirus software is not working?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Restart your computer, check for updates, reinstall the antivirus, or contact support.",
            },
          },
        ],
      },
    ],
  },
  "best-data-backup-and-recovery-services": {
    slug: "best-data-backup-and-recovery-services",
    title: "Best Data Backup & Recovery Services | Secure & Fast",
    description:
      "Protect your data with top-rated backup and recovery services. We offer secure cloud backups, fast data restoration, and 24/7 expert support.",
    keywords: [
      "data backup",
      "data recovery",
      "data protection",
      "backup and recovery",
      "computer backup",
      "file backup",
      "system backup",
      "cloud backup",
      "online backup",
      "cloud data backup",
      "cloud backup services",
    ],
    canonical:
      "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
    hreflangs: [
      {
        href: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        hreflang: "en-US",
      },
      {
        href: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        hreflang: "en-AE",
      },
      {
        href: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        hreflang: "de-DE",
      },
      {
        href: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        hreflang: "es-ES",
      },
      {
        href: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        hreflang: "fr-FR",
      },
      {
        href: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        hreflang: "pt-BR",
      },
      {
        href: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        hreflang: "en-GB",
      },
      {
        href: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        hreflang: "en-CA",
      },
      {
        href: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        hreflang: "en-MY",
      },
      {
        href: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        hreflang: "en-SG",
      },
      {
        href: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        hreflang: "en-NG",
      },
      {
        href: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        hreflang: "en-ID",
      },
      {
        href: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        hreflang: "en-IE",
      },
      {
        href: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        hreflang: "en-AU",
      },
      {
        href: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        hreflang: "en-IN",
      },
      {
        href: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        hreflang: "en-NZ",
      },
      {
        href: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        hreflang: "en-PH",
      },
      {
        href: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        hreflang: "en-ZA",
      },
      {
        href: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        hreflang: "es-MX",
      },
      {
        href: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        hreflang: "es-CO",
      },
      {
        href: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        hreflang: "es-PE",
      },
      {
        href: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        hreflang: "es-AR",
      },
      {
        href: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        hreflang: "es-CL",
      },
      {
        href: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        hreflang: "es-VE",
      },
      {
        href: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        hreflang: "pt-PT",
      },
      {
        href: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        hreflang: "fr-CA",
      },
      {
        href: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        hreflang: "fr-BE",
      },
    ],
    openGraph: {
      title: "Cloud Backup & Data Recovery Experts | Secure File Protection",
      description:
        "Need file backup or lost data restored? We provide safe cloud backup, system recovery, and data protection solutions. Get peace of mind with 24/7 support.",
      url: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
      images: ["image-url"],
      siteName:
        "Reliable Data Backup & Recovery Services | Cloud & Local Solutions",
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
      title: "Data Protection & Backup Services | Cloud & Computer Backup",
      description:
        "From cloud data backup to full system recovery, our experts help secure your important files. Affordable and reliable backup services for all devices.",
      image: "image-url",
      creator: "@L4RGINDIA",
    },
    jsonLd: [
      {
        "@context": "http://schema.org",
        "@id": "#product",
        "@type": "Product",
        name: "Data Recovery & Backup Services",
        description:
          "Leading provider of data backup and recovery solutions. We recover lost files, set up automated backups, and ensure your data stays protected.",
        url: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "389349",
        },
        audience: {
          "@type": "audience",
          description: "369369",
          audienceType:
            "Top Data Recovery & Backup Services, Trusted Since 2005",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "ITSupport.net.in",
        url: "https://www.itsupport.net.in",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.itsupport.net.in/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Review",
        name: "Complete Backup & Recovery Services | Cloud, File & System Protection",
        url: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        author: "John",
        reviewBody: "best data recovery in usa",
        reviewRating: { "@type": "Rating", ratingValue: "4.9" },
        itemReviewed: {
          "@type": "LocalBusiness",
          name: "L4RG US LLC",
          priceRange: "12000",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
            addressLocality: "ELMSFORD ST",
            addressRegion: "ELMSFORD ST",
            postalCode: "27703",
            telephone: "+91-906-968-9226",
            addressCountry: {
              "@type": "Country",
              name: "United State America",
            },
          },
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Professional IT support",
        url: "https://www.itsupport.net.in/",
        telephone: "+91-906-968-9226",
        address: {
          "@type": "PostalAddress",
          streetAddress: "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
          addressLocality: "ELMSFORD ST",
          postalCode: "27703",
          addressCountry: "USA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 35.96039,
          longitude: -78.8272,
        },
      },
      {
        "@context": "https://schema.org/",
        "@type": "EmployerAggregateRating",
        itemReviewed: {
          "@type": "Organization",
          name: "IT Support Services",
          sameAs: "https://www.itsupport.net.in/",
        },
        ratingValue: "98",
        bestRating: "100",
        worstRating: "1",
        ratingCount: "4.9",
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Data Backup and Recovery Support | ITSupport.net.in",
        url: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
        description:
          "Professional data backup and recovery support services by ITSupport.net.in. Protect your business from data loss with cloud & local backup solutions.",
        inLanguage: "en-IN",
        datePublished: "2025-07-20",
        dateModified: "2025-07-21",
      },
      {
        "@context": "https://schema.org",
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
            name: "Services",
            item: "https://www.itsupport.net.in/services",
          },
          {
            "@type": "ListItem",
            position: 156792,
            name: "best data backup and recovery services",
            item: "https://www.itsupport.net.in/services/best-data-backup-and-recovery-services",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is data backup and why is it important?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Information reinforcement is the prepare of replicating your records and putting away them safely...",
            },
          },
          {
            "@type": "Question",
            name: "What types of data backup are available?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Common sorts incorporate full reinforcement, incremental reinforcement, differential reinforcement, and cloud reinforcement...",
            },
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "QAPage",
        mainEntity: {
          "@type": "Question",
          name: "What are data backup and recovery support services?",
          text: "How does ITSupport.net.in provide data backup and recovery solutions for businesses?",
          answerCount: 2,
          upvoteCount: 42,
          author: { "@type": "Organization", name: "ITSupport.net.in" },
          acceptedAnswer: {
            "@type": "Answer",
            text: "ITSupport.net.in offers automated and secure data backup solutions...",
            author: { "@type": "Person", name: "Rahul Sharma" },
          },
        },
      },
    ],
  },
  "e-commerce-support-services": {
    slug: "e-commerce-support-services",
    title:
      "eCommerce Customer Service Solutions | 24/7 Support for Online Stores",
    description:
      "Deliver exceptional customer experiences with our eCommerce customer service. 24/7 live chat, email, and phone support tailored for online businesses.",
    keywords: [
      "ecommerce customer service",
      "customer support for ecommerce",
      "customer support ecommerce",
      "ecommerce managed services",
      "e commerce customer care",
      "ecommerce and customer service",
      "e commerce support services",
      "outsource ecommerce customer service",
      "ecommerce support",
    ],
    canonical:
      "https://www.itsupport.net.in/services/e-commerce-support-services",
    hreflangs: [
      {
        href: "https://www.itsupport.net.in/services/e-commerce-support-services",
        hreflang: "en-US",
      },
      {
        href: "https://www.itsupport.net.in/services/e-commerce-support-services",
        hreflang: "en-AE",
      },
      {
        href: "https://www.itsupport.net.in/services/e-commerce-support-services",
        hreflang: "de-DE",
      },
      {
        href: "https://www.itsupport.net.in/services/e-commerce-support-services",
        hreflang: "es-ES",
      },
      {
        href: "https://www.itsupport.net.in/services/e-commerce-support-services",
        hreflang: "fr-FR",
      },
      {
        href: "https://www.itsupport.net.in/services/e-commerce-support-services",
        hreflang: "pt-BR",
      },
      {
        href: "https://www.itsupport.net.in/services/e-commerce-support-services",
        hreflang: "en-GB",
      },
      {
        href: "https://www.itsupport.net.in/services/e-commerce-support-services",
        hreflang: "en-CA",
      },
      {
        href: "https://www.itsupport.net.in/services/e-commerce-support-services",
        hreflang: "en-MY",
      },
      {
        href: "https://www.itsupport.net.in/services/e-commerce-support-services",
        hreflang: "en-SG",
      },
      {
        href: "https://www.itsupport.net.in/services/e-commerce-support-services",
        hreflang: "en-NG",
      },
      {
        href: "https://www.itsupport.net.in/services/e-commerce-support-services",
        hreflang: "en-ID",
      },
      {
        href: "https://www.itsupport.net.in/services/e-commerce-support-services",
        hreflang: "en-IE",
      },
      {
        href: "https://www.itsupport.net.in/services/e-commerce-support-services",
        hreflang: "en-AU",
      },
      {
        href: "https://www.itsupport.net.in/services/e-commerce-support-services",
        hreflang: "en-IN",
      },
      {
        href: "https://www.itsupport.net.in/services/e-commerce-support-services",
        hreflang: "en-NZ",
      },
      {
        href: "https://www.itsupport.net.in/services/e-commerce-support-services",
        hreflang: "en-PH",
      },
      {
        href: "https://www.itsupport.net.in/services/e-commerce-support-services",
        hreflang: "en-ZA",
      },
      {
        href: "https://www.itsupport.net.in/services/e-commerce-support-services",
        hreflang: "es-MX",
      },
      {
        href: "https://www.itsupport.net.in/services/e-commerce-support-services",
        hreflang: "es-CO",
      },
      {
        href: "https://www.itsupport.net.in/services/e-commerce-support-services",
        hreflang: "es-PE",
      },
      {
        href: "https://www.itsupport.net.in/services/e-commerce-support-services",
        hreflang: "es-AR",
      },
      {
        href: "https://www.itsupport.net.in/services/e-commerce-support-services",
        hreflang: "es-CL",
      },
      {
        href: "https://www.itsupport.net.in/services/e-commerce-support-services",
        hreflang: "es-VE",
      },
      {
        href: "https://www.itsupport.net.in/services/e-commerce-support-services",
        hreflang: "pt-PT",
      },
      {
        href: "https://www.itsupport.net.in/services/e-commerce-support-services",
        hreflang: "fr-CA",
      },
      {
        href: "https://www.itsupport.net.in/services/e-commerce-support-services",
        hreflang: "fr-BE",
      },
    ],
    openGraph: {
      title: "eCommerce Customer Care Services | Fast, Friendly & Reliable",
      description:
        "Build customer loyalty with fast and reliable eCommerce customer care. We handle order queries, refunds, and live support for global customers.",
      url: "https://www.itsupport.net.in/services/e-commerce-support-services",
      images: ["image-url"],
      siteName: "Reliable E-commerce Support Services, 24/7 Assistance",
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
      title: "eCommerce & Customer Service Experts | Enhance User Experience",
      description:
        "Improve your online store’s customer experience with reliable and responsive eCommerce customer service solutions. Start scaling today.",
      image: "image-url",
      creator: "@L4RGINDIA",
    },
    jsonLd: [
      {
        "@context": "http://schema.org",
        "@id": "#product",
        "@type": "Product",
        name: "Email Support Services",
        description:
          "Get complete e-commerce support services including store setup, platform integration, product uploads, and ongoing technical support.",
        url: "https://www.itsupport.net.in/services/e-commerce-support-services",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "9860",
        },
        audience: {
          "@type": "audience",
          description: "9860",
          audienceType:
            "E-commerce Support Services | Store Setup to Maintenance",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: "https://www.itsupport.net.in/",
        name: "L4RG US LLC",
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
      {
        "@context": "https://schema.org",
        "@type": "Review",
        name: "ecommerce customer service",
        url: "https://www.itsupport.net.in/services/e-commerce-support-services",
        author: "Mike",
        reviewBody: "customer support for ecommerce",
        reviewRating: { "@type": "Rating", ratingValue: "4.9" },
        itemReviewed: {
          "@type": "LocalBusiness",
          name: "L4RG US LLC",
          priceRange: "12000",
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
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "customer support for ecommerce",
        url: "https://www.itsupport.net.in/",
        telephone: "+1-978-615-9403",
        address: {
          "@type": "PostalAddress",
          streetAddress: "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
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
      {
        "@context": "https://schema.org/",
        "@type": "EmployerAggregateRating",
        itemReviewed: {
          "@type": "Organization",
          name: "Outsource eCommerce Customer Service | Affordable & Expert Support",
          sameAs:
            "https://www.itsupport.net.in/services/e-commerce-support-services",
        },
        ratingValue: "95",
        bestRating: "100",
        worstRating: "1",
        ratingCount: "4.9",
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "eCommerce Managed Services | End-to-End Customer Support Solutions",
        url: "https://www.itsupport.net.in/services/e-commerce-support-services",
        inLanguage: "en-US",
        isPartOf: {
          "@type": "WebSite",
          url: "https://www.itsupport.net.in/services/e-commerce-support-services",
          name: "L4RG US LLC",
        },
      },
      {
        "@context": "https://schema.org",
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
            name: "Services",
            item: "https://www.itsupport.net.in/services",
          },
          {
            "@type": "ListItem",
            position: 156792,
            name: "e-commerce support services",
            item: "https://www.itsupport.net.in/services/e-commerce-support-services",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is eCommerce customer service?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "eCommerce customer service is the support provided to online shoppers...",
            },
          },
          {
            "@type": "Question",
            name: "Why is customer service important in eCommerce?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Customer service is crucial for building trust, improving satisfaction...",
            },
          },
          {
            "@type": "Question",
            name: "What are the most common channels for eCommerce support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The main support channels include live chat, email, phone, social media...",
            },
          },
          {
            "@type": "Question",
            name: "What should an eCommerce customer service team handle?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A good eCommerce support team should handle order-related queries...",
            },
          },
          {
            "@type": "Question",
            name: "Can eCommerce customer service be outsourced?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, many brands outsource eCommerce customer service...",
            },
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "QAPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How can I improve customer service for my online store?",
            text: "Use live chat, offer multiple support channels, automate common questions...",
            answerCount: 1,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Use live chat, offer multiple support channels...",
              dateCreated: "2025-07-14T10:00:00+05:30",
              url: "https://www.itsupport.net.in/services/e-commerce-support-services#q1a1",
            },
          },
          {
            "@type": "Question",
            name: "What is 24/7 eCommerce customer support?",
            text: "24/7 eCommerce support means your customers can get help anytime...",
            answerCount: 1,
            acceptedAnswer: {
              "@type": "Answer",
              text: "24/7 eCommerce support means your customers can get help anytime...",
              dateCreated: "2025-07-14T10:10:00+05:30",
              url: "https://www.itsupport.net.in/services/e-commerce-support-services#q3a1",
            },
          },
          {
            "@type": "Question",
            name: "How does customer service impact eCommerce sales?",
            text: "Positive support experiences lead to better reviews, higher trust, and repeat customers...",
            answerCount: 1,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Positive support experiences lead to better reviews...",
              dateCreated: "2025-07-14T10:15:00+05:30",
              url: "https://www.itsupport.net.in/services/e-commerce-support-services#q4a1",
            },
          },
        ],
      },
    ],
  },
  "email-setup-support": {
    slug: "email-setup-support",
    title: "Best Email Setup Support Services | Fast & Reliable",
    description:
      "Get expert email setup support for Gmail, Outlook, AOL Mail setup, and business email. Fast configuration, secure setup, and troubleshooting by professionals.",
    keywords: [
      "email setup",
      "email configuration",
      "email help",
      "email support",
      "set up email",
      "configure email",
      "email settings",
      "email client setup",
    ],
    canonical: "https://www.itsupport.net.in/services/email-setup-support",
    hreflangs: [
      {
        href: "https://www.itsupport.net.in/services/email-setup-support",
        hreflang: "en-US",
      },
      {
        href: "https://www.itsupport.net.in/services/email-setup-support",
        hreflang: "en-AE",
      },
      {
        href: "https://www.itsupport.net.in/services/email-setup-support",
        hreflang: "de-DE",
      },
      {
        href: "https://www.itsupport.net.in/services/email-setup-support",
        hreflang: "es-ES",
      },
      {
        href: "https://www.itsupport.net.in/services/email-setup-support",
        hreflang: "fr-FR",
      },
      {
        href: "https://www.itsupport.net.in/services/email-setup-support",
        hreflang: "pt-BR",
      },
      {
        href: "https://www.itsupport.net.in/services/email-setup-support",
        hreflang: "en-GB",
      },
      {
        href: "https://www.itsupport.net.in/services/email-setup-support",
        hreflang: "en-CA",
      },
      {
        href: "https://www.itsupport.net.in/services/email-setup-support",
        hreflang: "en-MY",
      },
      {
        href: "https://www.itsupport.net.in/services/email-setup-support",
        hreflang: "en-SG",
      },
      {
        href: "https://www.itsupport.net.in/services/email-setup-support",
        hreflang: "en-NG",
      },
      {
        href: "https://www.itsupport.net.in/services/email-setup-support",
        hreflang: "en-ID",
      },
      {
        href: "https://www.itsupport.net.in/services/email-setup-support",
        hreflang: "en-IE",
      },
      {
        href: "https://www.itsupport.net.in/services/email-setup-support",
        hreflang: "en-AU",
      },
      {
        href: "https://www.itsupport.net.in/services/email-setup-support",
        hreflang: "en-IN",
      },
      {
        href: "https://www.itsupport.net.in/services/email-setup-support",
        hreflang: "en-NZ",
      },
      {
        href: "https://www.itsupport.net.in/services/email-setup-support",
        hreflang: "en-PH",
      },
      {
        href: "https://www.itsupport.net.in/services/email-setup-support",
        hreflang: "en-ZA",
      },
      {
        href: "https://www.itsupport.net.in/services/email-setup-support",
        hreflang: "es-MX",
      },
      {
        href: "https://www.itsupport.net.in/services/email-setup-support",
        hreflang: "es-CO",
      },
      {
        href: "https://www.itsupport.net.in/services/email-setup-support",
        hreflang: "es-PE",
      },
      {
        href: "https://www.itsupport.net.in/services/email-setup-support",
        hreflang: "es-AR",
      },
      {
        href: "https://www.itsupport.net.in/services/email-setup-support",
        hreflang: "es-CL",
      },
      {
        href: "https://www.itsupport.net.in/services/email-setup-support",
        hreflang: "es-VE",
      },
      {
        href: "https://www.itsupport.net.in/services/email-setup-support",
        hreflang: "pt-PT",
      },
      {
        href: "https://www.itsupport.net.in/services/email-setup-support",
        hreflang: "fr-CA",
      },
      {
        href: "https://www.itsupport.net.in/services/email-setup-support",
        hreflang: "fr-BE",
      },
    ],
    openGraph: {
      title: "Set Up & Configure Email Accounts | Email Client Setup Support",
      description:
        "Learn how to set up and configure your email on any device. Expert email support for client setup, email settings, and secure email access.",
      url: "https://www.itsupport.net.in/services/email-setup-support",
      images: ["image-url"],
      siteName: "Email Setup & Configuration Help | Easy Email Support Guide",
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
      title: "Email Settings & Setup Assistance | Email Help & Support",
      description:
        "Get fast help with email setup, configuration, and troubleshooting. Adjust email settings or configure any email client with our expert support.",
      image: "image-url",
      creator: "@L4RGINDIA",
    },
    jsonLd: [
      {
        "@context": "http://schema.org",
        "@id": "#product",
        "@type": "Product",
        name: "Email Support Services",
        description:
          "We provide top-rated email setup support for desktops, phones, and tablets. Hassle-free configuration and syncing for personal and business use.",
        url: "https://www.itsupport.net.in/services/email-setup-support",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "45369",
        },
        audience: {
          "@type": "audience",
          description: "45369",
          audienceType:
            "Professional Email Setup Help, All Devices & Platforms",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: "https://www.itsupport.net.in/",
        name: "L4RG US LLC",
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
      {
        "@context": "https://schema.org",
        "@type": "Review",
        name: "IT services, Technical support",
        url: "https://www.itsupport.net.in/services/email-setup-support",
        image: "",
        author: "Mike",
        reviewBody: "best email setup in usa",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4.9",
        },
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
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Professional email configuration",
        image: "path",
        "@id": "",
        url: "https://www.itsupport.net.in/",
        telephone: "+1-978-615-9403",
        address: {
          "@type": "PostalAddress",
          streetAddress: "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
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
      {
        "@context": "https://schema.org/",
        "@type": "EmployerAggregateRating",
        itemReviewed: {
          "@type": "Organization",
          name: "Email Support Services",
          sameAs: "https://www.itsupport.net.in/services/email-setup-support",
        },
        ratingValue: "95",
        bestRating: "100",
        worstRating: "1",
        ratingCount: "4.9",
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Email Client Setup & Support | Configure Email Easily",
        url: "https://www.itsupport.net.in/services/email-setup-support",
        inLanguage: "en-US",
        isPartOf: {
          "@type": "WebSite",
          url: "https://www.itsupport.net.in/",
          name: "L4RG US LLC",
        },
      },
      {
        "@context": "https://schema.org",
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
            name: "Services",
            item: "https://www.itsupport.net.in/services",
          },
          {
            "@type": "ListItem",
            position: 156792,
            name: "email setup support",
            item: "https://www.itsupport.net.in/services/email-setup-support",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do I set up my email account on a new device?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "To set up your e-mail, go to your device's mail app or settings, select Include Account, enter your e-mail address and watchword, and select the legitimate server settings (IMAP or POP, SMTP). Most suppliers auto-configure, but you may require manual settings.",
            },
          },
          {
            "@type": "Question",
            name: "What are IMAP and POP, and which should I use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "IMAP syncs your e-mail over numerous gadgets, whereas POP downloads messages to one gadget and erases them from the server. Utilize IMAP if you check e-mail on numerous gadgets.",
            },
          },
          {
            "@type": "Question",
            name: "What are the incoming and outgoing server settings for my email?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, numerous IT benefit suppliers offer on-site domestic visits for issues like wifi setup, printer association, infection evacuation, and computer repairs—ideal for clients who favor in-home benefit.",
            },
          },
          {
            "@type": "Question",
            name: "Why is my email not sending or receiving messages?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Check your internet connection, verify server settings (IMAP/SMTP), ensure your password is correct, and check for email app or server outages.",
            },
          },
          {
            "@type": "Question",
            name: "How do I configure my email on Outlook or Thunderbird?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Open the app, select Add Account, enter your email, and choose manual setup if needed. Input the correct incoming/outgoing server details, select the encryption type (usually SSL/TLS), and finish setup.",
            },
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "QAPage",
        mainEntity: {
          "@type": "Question",
          name: "Can I set up the same email on multiple devices?",
          text: "Yes, but use IMAP so your messages stay synced across all devices. POP is not recommended for multi-device setups as it downloads and removes emails from the server.",
          answerCount: 1,
          acceptedAnswer: {
            "@type": "Answer",
            text: "Signs of a virus include slow performance, unexpected pop-ups, frequent crashes, and strange files or programs. A full scan by a professional can detect and safely remove malware.",
            dateCreated: "2025-07-14T10:00:00+05:30",
            url: "https://www.itsupport.net.in/services/email-setup-support#q1a1",
          },
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Question",
        name: "Why is my email account repeatedly asking for the password?",
        text: "This usually indicates incorrect login info or server settings. Also, check if your account is locked due to suspicious activity or if an app-specific password is required.",
        answerCount: 1,
        acceptedAnswer: {
          "@type": "Answer",
          text: "This usually indicates incorrect login info or server settings. Also, check if your account is locked due to suspicious activity or if an app-specific password is required.",
          dateCreated: "2025-07-14T10:10:00+05:30",
          url: "https://www.itsupport.net.in/services/email-setup-support#q3a1",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Question",
        name: "How do I enable SSL/TLS for secure email communication?",
        text: "In your email client’s server settings, find the option for encryption and select SSL or TLS. This ensures your email is transmitted securely.",
        answerCount: 1,
        acceptedAnswer: {
          "@type": "Answer",
          text: "In your email client’s server settings, find the option for encryption and select SSL or TLS. This ensures your email is transmitted securely.",
          dateCreated: "2025-07-14T10:15:00+05:30",
          url: "https://www.itsupport.net.in/services/email-setup-support#q4a1",
        },
      },
    ],
  },
  "hardware-repair-support-services": {
    slug: "hardware-repair-support-services",
    title: "Hardware Support Services – 20+ Years of Trusted IT Help",
    description:
      "Get reliable hardware support from experts with 20+ years of experience. We repair, maintain, and upgrade computers, laptops, and office devices.",
    keywords: [
      "computer repair near me",
      "computer repair",
      "computer repair services",
      "IT support",
      "tech support",
      "computer technician",
      "on-site computer repair",
    ],
    canonical:
      "https://www.itsupport.net.in/services/hardware-repair-support-services",
    hreflangs: [
      {
        href: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        hreflang: "en-US",
      },
      {
        href: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        hreflang: "en-AE",
      },
      {
        href: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        hreflang: "de-DE",
      },
      {
        href: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        hreflang: "es-ES",
      },
      {
        href: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        hreflang: "fr-FR",
      },
      {
        href: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        hreflang: "pt-BR",
      },
      {
        href: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        hreflang: "en-GB",
      },
      {
        href: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        hreflang: "en-CA",
      },
      {
        href: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        hreflang: "en-MY",
      },
      {
        href: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        hreflang: "en-SG",
      },
      {
        href: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        hreflang: "en-NG",
      },
      {
        href: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        hreflang: "en-ID",
      },
      {
        href: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        hreflang: "en-IE",
      },
      {
        href: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        hreflang: "en-AU",
      },
      {
        href: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        hreflang: "en-IN",
      },
      {
        href: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        hreflang: "en-NZ",
      },
      {
        href: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        hreflang: "en-PH",
      },
      {
        href: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        hreflang: "en-ZA",
      },
      {
        href: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        hreflang: "es-MX",
      },
      {
        href: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        hreflang: "es-CO",
      },
      {
        href: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        hreflang: "es-PE",
      },
      {
        href: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        hreflang: "es-AR",
      },
      {
        href: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        hreflang: "es-CL",
      },
      {
        href: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        hreflang: "es-VE",
      },
      {
        href: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        hreflang: "pt-PT",
      },
      {
        href: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        hreflang: "fr-CA",
      },
      {
        href: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        hreflang: "fr-BE",
      },
    ],
    openGraph: {
      title: "Local Computer Repair Services | On-Site & Remote Support",
      description:
        "Get professional computer repair and IT support from trusted local technicians. We offer on-site service, virus removal, data recovery, and more.",
      url: "https://www.itsupport.net.in/services/hardware-repair-support-services",
      images: ["image-url"],
      siteName: "Comprehensive Hardware Support Services for 20 Years.",
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
      title: "Expert Computer Technician Near You | Same-Day Repairs",
      description:
        "Looking for a computer technician nearby? We offer same-day computer repair, on-site support, and affordable IT services for home or business.",
      image: "image-url",
      creator: "@L4RGINDIA",
    },
    jsonLd: [
      {
        "@context": "http://schema.org",
        "@id": "#product",
        "@type": "Product",
        name: "Hardware Support",
        description:
          "Serving homes and businesses for over 20 years with expert hardware repair, installation, and troubleshooting. Fast, affordable, and dependable service.",
        url: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "6953",
        },
        audience: {
          "@type": "audience",
          description: "6953 Reviews",
          audienceType:
            "Professional Hardware Support | 20 Years of Experience",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        name: "L4RG US LLC",
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
      {
        "@context": "https://schema.org",
        "@type": "Review",
        name: "Affordable Computer Repair & IT Support | We Come to You",
        url: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        author: "Sony",
        reviewBody: "computer repair near me",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4.8",
        },
        itemReviewed: {
          "@type": "LocalBusiness",
          name: "L4RG US LLC",
          priceRange: "12000",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
            addressLocality: "ELMSFORD ST",
            addressRegion: "ELMSFORD ST",
            postalCode: "27703",
            telephone: "+91-906-968-9226",
            addressCountry: {
              "@type": "Country",
              name: "United State America",
            },
          },
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Professional computer repair",
        image: "path",
        url: "https://www.itsupport.net.in/",
        telephone: "+91-906-968-9226",
        address: {
          "@type": "PostalAddress",
          streetAddress: "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
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
      {
        "@context": "https://schema.org/",
        "@type": "EmployerAggregateRating",
        itemReviewed: {
          "@type": "Organization",
          name: "Hardware Support",
          sameAs: "https://www.itsupport.net.in/",
        },
        ratingValue: "95",
        bestRating: "100",
        worstRating: "1",
        ratingCount: "4.9",
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Affordable Computer Repair & IT Support | We Come to You",
        url: "https://www.itsupport.net.in/services/hardware-repair-support-services",
        inLanguage: "en-US",
        isPartOf: {
          "@type": "WebSite",
          url: "https://www.itsupport.net.in/",
          name: "L4RG US LLC",
        },
      },
      {
        "@context": "https://schema.org",
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
            name: "Services",
            item: "https://www.itsupport.net.in/services",
          },
          {
            "@type": "ListItem",
            position: 156792,
            name: "hardware repair support services",
            item: "https://www.itsupport.net.in/services/hardware-repair-support-services",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What types of hardware issues do you repair?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We repair a wide range of hardware problems, including broken screens, faulty hard drives, power supply issues, motherboard failures, overheating, keyboard/mouse problems, and more.",
            },
          },
          {
            "@type": "Question",
            name: "How do I know if my computer has a hardware problem?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Signs of equipment issues incorporate your computer not turning on, unusual commotions (clicking, beeping), blue screens, visit crashes, overheating, or inert components like USB ports or fans.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer diagnostics before starting the repair?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we give a full equipment symptomatic to recognize the issue precisely. After diagnosing, we’ll give a cite and get your endorsement some time recently starting any repairs.",
            },
          },
          {
            "@type": "Question",
            name: "How long does a typical hardware repair take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most repairs are completed inside 1–3 trade days, depending on the complexity of the issue and portion accessibility. In a few cases, same-day benefit is conceivable.",
            },
          },
          {
            "@type": "Question",
            name: "Do you use original or third-party replacement parts?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We use high-quality parts from trusted manufacturers. When available, we offer both OEM (original equipment manufacturer) and high-grade third-party components based on your preference and budget.",
            },
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "QAPage",
        mainEntity: {
          "@type": "Question",
          name: "Can you repair hardware issues on-site?",
          text: "Yes, we offer on-site equipment repair administrations for numerous common issues. For more complex repairs, we may require to take the gadget to our workshop.",
          answerCount: 1,
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we offer on-site equipment repair administrations for numerous common issues. For more complex repairs, we may require to take the gadget to our workshop.",
            dateCreated: "2025-07-14T10:00:00+05:30",
            url: "https://www.itsupport.net.in/services/hardware-repair-support-services#q1a1",
          },
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Question",
        name: "Do you offer warranties on your hardware repairs?",
        text: "Yes, we give a guarantee on all equipment repairs and substitution parts—typically extending from 30 to 90 days depending on the sort of repair.",
        answerCount: 1,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we give a guarantee on all equipment repairs and substitution parts—typically extending from 30 to 90 days depending on the sort of repair.",
          dateCreated: "2025-07-14T10:10:00+05:30",
          url: "https://www.itsupport.net.in/services/hardware-repair-support-services#q3a1",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Question",
        name: "Is it better to repair or replace my damaged hardware?",
        text: "It depends on the issue and the age of your device. We’ll assess the cost of repair vs. replacement and give honest recommendations to help you make the best decision.",
        answerCount: 1,
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the issue and the age of your device. We’ll assess the cost of repair vs. replacement and give honest recommendations to help you make the best decision.",
          dateCreated: "2025-07-14T10:15:00+05:30",
          url: "https://www.itsupport.net.in/services/hardware-repair-support-services#q4a1",
        },
      },
    ],
  },
  "networking-support-services": {
    slug: "networking-support-services",
    title: "Reliable Network Support Services, Wired & Wireless Solutions",
    description:
      "Get expert network support for homes and businesses. We provide setup, troubleshooting, optimization, and maintenance for secure, fast connections.",
    keywords: [
      "network support",
      "network services",
      "IT network support",
      "network troubleshooting",
      "network help",
      "computer network support",
      "network assistance",
      "managed network services",
    ],
    canonical:
      "https://www.itsupport.net.in/services/networking-support-services",
    hreflangs: [
      {
        href: "https://www.itsupport.net.in/services/networking-support-services",
        hreflang: "en-US",
      },
      {
        href: "https://www.itsupport.net.in/services/networking-support-services",
        hreflang: "en-AE",
      },
      {
        href: "https://www.itsupport.net.in/services/networking-support-services",
        hreflang: "de-DE",
      },
      {
        href: "https://www.itsupport.net.in/services/networking-support-services",
        hreflang: "es-ES",
      },
      {
        href: "https://www.itsupport.net.in/services/networking-support-services",
        hreflang: "fr-FR",
      },
      {
        href: "https://www.itsupport.net.in/services/networking-support-services",
        hreflang: "pt-BR",
      },
      {
        href: "https://www.itsupport.net.in/services/networking-support-services",
        hreflang: "en-GB",
      },
      {
        href: "https://www.itsupport.net.in/services/networking-support-services",
        hreflang: "en-CA",
      },
      {
        href: "https://www.itsupport.net.in/services/networking-support-services",
        hreflang: "en-MY",
      },
      {
        href: "https://www.itsupport.net.in/services/networking-support-services",
        hreflang: "en-SG",
      },
      {
        href: "https://www.itsupport.net.in/services/networking-support-services",
        hreflang: "en-NG",
      },
      {
        href: "https://www.itsupport.net.in/services/networking-support-services",
        hreflang: "en-ID",
      },
      {
        href: "https://www.itsupport.net.in/services/networking-support-services",
        hreflang: "en-IE",
      },
      {
        href: "https://www.itsupport.net.in/services/networking-support-services",
        hreflang: "en-AU",
      },
      {
        href: "https://www.itsupport.net.in/services/networking-support-services",
        hreflang: "en-IN",
      },
      {
        href: "https://www.itsupport.net.in/services/networking-support-services",
        hreflang: "en-NZ",
      },
      {
        href: "https://www.itsupport.net.in/services/networking-support-services",
        hreflang: "en-PH",
      },
      {
        href: "https://www.itsupport.net.in/services/networking-support-services",
        hreflang: "en-ZA",
      },
      {
        href: "https://www.itsupport.net.in/services/networking-support-services",
        hreflang: "es-MX",
      },
      {
        href: "https://www.itsupport.net.in/services/networking-support-services",
        hreflang: "es-CO",
      },
      {
        href: "https://www.itsupport.net.in/services/networking-support-services",
        hreflang: "es-PE",
      },
      {
        href: "https://www.itsupport.net.in/services/networking-support-services",
        hreflang: "es-AR",
      },
      {
        href: "https://www.itsupport.net.in/services/networking-support-services",
        hreflang: "es-CL",
      },
      {
        href: "https://www.itsupport.net.in/services/networking-support-services",
        hreflang: "es-VE",
      },
      {
        href: "https://www.itsupport.net.in/services/networking-support-services",
        hreflang: "pt-PT",
      },
      {
        href: "https://www.itsupport.net.in/services/networking-support-services",
        hreflang: "fr-CA",
      },
      {
        href: "https://www.itsupport.net.in/services/networking-support-services",
        hreflang: "fr-BE",
      },
    ],
    openGraph: {
      title: "Managed Network Services & IT Support | 24/7 Network Help",
      description:
        "Get 24/7 IT network support, network troubleshooting, and maintenance from experienced professionals. Fast, secure solutions for any network issue.",
      url: "https://www.itsupport.net.in/services/networking-support-services",
      images: ["image-url"],
      siteName: "Professional Network Support, Business & Home",
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
      title: "Computer Network Support & Troubleshooting | Trusted Techs",
      description:
        "Struggling with network issues? Our certified technicians provide fast network troubleshooting, configuration help, and managed support services.",
      image: "image-url",
      creator: "@L4RGINDIA",
    },
    jsonLd: [
      {
        "@context": "http://schema.org",
        "@id": "#product",
        "@type": "Product",
        name: "Network Support Services",
        description:
          "From router setup to complete network management, we provide 24/7 network support services with fast response and certified experts.",
        url: "https://www.itsupport.net.in/services/networking-support-services",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "986532",
        },
        audience: {
          "@type": "audience",
          description: "986532",
          audienceType:
            "Network Installation & Support Services, 24/7 Assistance",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: "https://www.itsupport.net.in/services/networking-support-services",
        name: "L4RG US LLC",
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
      {
        "@context": "https://schema.org",
        "@type": "Review",
        name: "Expert Network Services & Assistance | Fast Network Repair",
        url: "https://www.itsupport.net.in/services/networking-support-services",
        image: "",
        author: "Mike",
        reviewBody: "best IT network support in usa",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4.8",
        },
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
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Professional network services",
        image: "path",
        "@id": "",
        url: "https://www.itsupport.net.in/",
        telephone: "+1-978-615-9403",
        address: {
          "@type": "PostalAddress",
          streetAddress: "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
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
      {
        "@context": "https://schema.org/",
        "@type": "EmployerAggregateRating",
        itemReviewed: {
          "@type": "Organization",
          name: "ITSupport.net.in",
          sameAs: "https://www.itsupport.net.in/",
        },
        ratingValue: "99",
        bestRating: "100",
        worstRating: "1",
        ratingCount: "4.9",
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Expert Network Services & Assistance | Fast Network Repair",
        url: "https://www.itsupport.net.in/services/networking-support-services",
        inLanguage: "en-US",
        isPartOf: {
          "@type": "WebSite",
          url: "https://www.itsupport.net.in/",
          name: "L4RG US LLC",
        },
      },
      {
        "@context": "https://schema.org",
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
            name: "Services",
            item: "https://www.itsupport.net.in/services",
          },
          {
            "@type": "ListItem",
            position: 156792,
            name: "networking support services",
            item: "https://www.itsupport.net.in/services/networking-support-services",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What do your networking support services include?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our organizing back administrations incorporate organize establishment, arrangement, investigating, execution optimization, security reviews, and continuous upkeep for wired and remote systems.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide support for both home and business networks?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we bolster domestic clients, little businesses, and undertaking systems. Whether it’s a straightforward Wi-Fi issue or a complex trade arrange, we’re prepared to offer assistance.",
            },
          },
          {
            "@type": "Question",
            name: "What types of networks do you support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We support LAN, WAN, VPN, Wi-Fi, and cloud-based networks. We also handle hybrid environments and remote access solutions for work-from-home users.",
            },
          },
          {
            "@type": "Question",
            name: "How do I know if I need professional network support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "If you involvement visit disengagements, moderate web, security notices, or inconvenience interfacing gadgets, it may be time to bring in a proficient for diagnostics and back.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer managed network services?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we offer completely overseen arrange administrations, counting 24/7 checking, proactive support, security overhauls, and inaccessible back to avoid downtime and optimize execution.",
            },
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "QAPage",
        mainEntity: {
          "@type": "Question",
          name: "Can you help with setting up a secure wireless network?",
          text: "Completely. We can plan and introduce secure remote systems with legitimate encryption, visitor get to controls, and transfer speed administration to keep your information secure and your association quick.",
          answerCount: 1,
          acceptedAnswer: {
            "@type": "Answer",
            text: "Completely. We can plan and introduce secure remote systems with legitimate encryption, visitor get to controls, and transfer speed administration to keep your information secure and your association quick.",
            dateCreated: "2025-07-14T10:00:00+05:30",
            url: "https://www.itsupport.net.in/services/networking-support-services#q1a1",
          },
        },
      },
      {
        "@type": "Question",
        name: "What’s the difference between network support and IT support?",
        text: "Network support focuses specifically on connectivity, infrastructure, and data transmission, while IT support includes hardware, software, and user issues. We provide both for complete coverage.",
        answerCount: 1,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Network support focuses specifically on connectivity, infrastructure, and data transmission, while IT support includes hardware, software, and user issues. We provide both for complete coverage.",
          dateCreated: "2025-07-14T10:10:00+05:30",
          url: "https://www.itsupport.net.in/services/networking-support-services#q3a1",
        },
      },
      {
        "@type": "Question",
        name: "Can you help secure our network from cyber threats?",
        text: "Yes. We offer network security assessments, firewall setup, intrusion detection, and best-practice configurations to protect your network from viruses, malware, and unauthorized access.",
        answerCount: 1,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We offer network security assessments, firewall setup, intrusion detection, and best-practice configurations to protect your network from viruses, malware, and unauthorized access.",
          dateCreated: "2025-07-14T10:15:00+05:30",
          url: "https://www.itsupport.net.in/services/networking-support-services#q4a1",
        },
      },
    ],
  },
  "professional-cloud-support-services": {
    slug: "professional-cloud-support-services",
    title: "Cloud Support Services – 20+ Years of Trusted Expertise",
    description:
      "Get reliable hardware support from experts with 20+ years of experience. We repair, maintain, and upgrade computers, laptops, and office devices.",
    keywords: [
      "cloud support",
      "cloud services support",
      "cloud technical support",
      "cloud managed services",
      "IT cloud support",
      "AWS support",
      "Azure support",
      "Google Cloud support",
      "Amazon Web Services support",
      "Microsoft Azure support",
      "GCP support",
      "IBM Cloud support",
      "Oracle Cloud support",
      "24/7 cloud support",
    ],
    canonical:
      "https://www.itsupport.net.in/services/professional-cloud-support-services",
    hreflangs: [
      {
        hreflang: "en-US",
        href: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      },
      {
        hreflang: "en-AE",
        href: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      },
      {
        hreflang: "de-DE",
        href: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      },
      {
        hreflang: "es-ES",
        href: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      },
      {
        hreflang: "fr-FR",
        href: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      },
      {
        hreflang: "pt-BR",
        href: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      },
      {
        hreflang: "en-GB",
        href: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      },
      {
        hreflang: "en-CA",
        href: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      },
      {
        hreflang: "en-MY",
        href: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      },
      {
        hreflang: "en-SG",
        href: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      },
      {
        hreflang: "en-NG",
        href: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      },
      {
        hreflang: "en-ID",
        href: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      },
      {
        hreflang: "en-IE",
        href: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      },
      {
        hreflang: "en-AU",
        href: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      },
      {
        hreflang: "en-IN",
        href: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      },
      {
        hreflang: "en-NZ",
        href: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      },
      {
        hreflang: "en-PH",
        href: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      },
      {
        hreflang: "en-ZA",
        href: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      },
      {
        hreflang: "es-MX",
        href: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      },
      {
        hreflang: "es-CO",
        href: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      },
      {
        hreflang: "es-PE",
        href: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      },
      {
        hreflang: "es-AR",
        href: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      },
      {
        hreflang: "es-CL",
        href: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      },
      {
        hreflang: "es-VE",
        href: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      },
      {
        hreflang: "pt-PT",
        href: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      },
      {
        hreflang: "fr-CA",
        href: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      },
      {
        hreflang: "fr-BE",
        href: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      },
    ],
    openGraph: {
      title: "Managed Cloud Services & IT Support | AWS & Azure Experts",
      description:
        "Streamline your operations with our managed cloud services. We provide technical support for Amazon Web Services, Azure, and Google Cloud platforms.",
      url: "https://www.itsupport.net.in/services/professional-cloud-support-services",
      images: ["image-url"],
      siteName: "Cloud Infrastructure Support – Since 2005",
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
      title: "Cloud Technical Support & Consulting | Trusted Cloud Experts",
      description:
        "Need cloud technical support? Our certified team helps businesses manage, troubleshoot, and scale AWS, Azure, and Google Cloud environments.",
      image: "image-url",
      creator: "@L4RGINDIA",
    },
    jsonLd: [
      {
        "@context": "http://schema.org",
        "@id": "#product",
        "@type": "Product",
        name: "Cloud Support Services",
        description:
          "Serving businesses for two decades with expert cloud setup, migration, and maintenance. Trusted support for AWS, Azure, and hybrid cloud environments.",
        url: "https://www.itsupport.net.in/services/professional-cloud-support-services",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "369",
        },
        audience: {
          "@type": "audience",
          description: "369",
          audienceType: "Reliable Cloud Support Solutions, 20 Years Experience",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: "https://www.itsupport.net.in/services/professional-cloud-support-services",
        name: "L4RG US LLC",
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
      {
        "@context": "https://schema.org",
        "@type": "Review",
        name: "24/7 Cloud IT Support | AWS, Azure, GCP Cloud Services",
        url: "https://www.itsupport.net.in/services/professional-cloud-support-services",
        author: "Sony",
        reviewBody: "Best Cloud services support in usa",
        reviewRating: { "@type": "Rating", ratingValue: "4.8" },
        itemReviewed: {
          "@type": "LocalBusiness",
          name: "L4RG US LLC",
          priceRange: "12000",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
            addressLocality: "ELMSFORD ST",
            addressRegion: "ELMSFORD ST",
            postalCode: "27703",
            telephone: "+91-906-968-9226",
            addressCountry: {
              "@type": "Country",
              name: "United State America",
            },
          },
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Professional IT support",
        image: "path",
        url: "https://www.itsupport.net.in/",
        telephone: "+91-906-968-9226",
        address: {
          "@type": "PostalAddress",
          streetAddress: "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
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
      {
        "@context": "https://schema.org/",
        "@type": "EmployerAggregateRating",
        itemReviewed: {
          "@type": "Organization",
          name: "Cloud Support Services",
          sameAs: "https://www.itsupport.net.in/",
        },
        ratingValue: "94",
        bestRating: "100",
        worstRating: "1",
        ratingCount: "4.9",
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "24/7 Cloud IT Support | AWS, Azure, GCP Cloud Services",
        url: "https://www.itsupport.net.in/services/professional-cloud-support-services",
        inLanguage: "en-US",
        isPartOf: {
          "@type": "WebSite",
          url: "https://www.itsupport.net.in/",
          name: "L4RG US LLC",
        },
      },
      {
        "@context": "https://schema.org",
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
            name: "Services",
            item: "https://www.itsupport.net.in/services",
          },
          {
            "@type": "ListItem",
            position: 156792,
            name: "professional cloud support services",
            item: "https://www.itsupport.net.in/services/professional-cloud-support-services",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is cloud support, and why do I need it?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Cloud support helps businesses manage, maintain, and troubleshoot their cloud infrastructure. Whether you're using AWS, Azure, or Google Cloud, professional support ensures performance, uptime, security, and cost-efficiency.",
            },
          },
          {
            "@type": "Question",
            name: "What cloud platforms do you support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We support all major cloud providers, including Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and hybrid cloud environments.",
            },
          },
          {
            "@type": "Question",
            name: "What’s included in your managed cloud services?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our managed cloud services include system monitoring, patch management, backups, security updates, cost optimization, and continuous performance tuning.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer 24/7 cloud technical support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we offer 24/7 monitoring and support to ensure your cloud services run smoothly, with quick resolution of issues and proactive alerts for potential risks.",
            },
          },
          {
            "@type": "Question",
            name: "Can you help migrate our infrastructure to the cloud?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. We offer full cloud migration services, including planning, data transfer, minimal downtime strategies, and post-migration support for AWS, Azure, or Google Cloud.",
            },
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "QAPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you offer support for cloud security and compliance?",
            text: "Yes, we help you secure your cloud environment with encryption, firewalls, identity and access controls, and compliance with standards like HIPAA, GDPR, and SOC 2.",
            answerCount: 1,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we help you secure your cloud environment with encryption, firewalls, identity and access controls, and compliance with standards like HIPAA, GDPR, and SOC 2.",
              dateCreated: "2025-07-14T10:00:00+05:30",
              url: "https://www.itsupport.net.in/services/professional-cloud-support-services#q1a1",
            },
          },
          {
            "@type": "Question",
            name: "Can you help optimize cloud costs?",
            text: "Yes, we analyze your current usage and recommend changes to eliminate waste, right-size your instances, and take advantage of reserved pricing and autoscaling options.",
            answerCount: 1,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we analyze your current usage and recommend changes to eliminate waste, right-size your instances, and take advantage of reserved pricing and autoscaling options.",
              dateCreated: "2025-07-14T10:10:00+05:30",
              url: "https://www.itsupport.net.in/services/professional-cloud-support-services#q3a1",
            },
          },
          {
            "@type": "Question",
            name: "Do you support DevOps and automation in the cloud?",
            text: "Absolutely. We assist with CI/CD pipelines, infrastructure as code (IaC), containerization (Docker, Kubernetes), and automated deployment tools tailored to your cloud environment.",
            answerCount: 1,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. We assist with CI/CD pipelines, infrastructure as code (IaC), containerization (Docker, Kubernetes), and automated deployment tools tailored to your cloud environment.",
              dateCreated: "2025-07-14T10:15:00+05:30",
              url: "https://www.itsupport.net.in/services/professional-cloud-support-services#q4a1",
            },
          },
        ],
      },
    ],
  },
  "website-hosting-domain-support-services": {
    slug: "website-hosting-domain-support-services",
    title: "Website Hosting & Domain Support | 20+ Years of Experience",
    description:
      "Providing reliable website hosting and domain support since 2005. Trusted by businesses for secure, fast, and hassle-free web solutions.",
    keywords: [
      "web hosting",
      "website hosting",
      "website support",
      "hosting support",
      "technical support web hosting",
      "24/7 web hosting support",
      "website troubleshooting",
      "website migration support",
    ],
    canonical:
      "https://www.itsupport.net.in/services/website-hosting-domain-support",
    hreflangs: [
      {
        href: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        hreflang: "en-US",
      },
      {
        href: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        hreflang: "en-AE",
      },
      {
        href: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        hreflang: "de-DE",
      },
      {
        href: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        hreflang: "es-ES",
      },
      {
        href: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        hreflang: "fr-FR",
      },
      {
        href: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        hreflang: "pt-BR",
      },
      {
        href: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        hreflang: "en-GB",
      },
      {
        href: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        hreflang: "en-CA",
      },
      {
        href: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        hreflang: "en-MY",
      },
      {
        href: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        hreflang: "en-SG",
      },
      {
        href: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        hreflang: "en-NG",
      },
      {
        href: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        hreflang: "en-ID",
      },
      {
        href: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        hreflang: "en-IE",
      },
      {
        href: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        hreflang: "en-AU",
      },
      {
        href: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        hreflang: "en-IN",
      },
      {
        href: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        hreflang: "en-NZ",
      },
      {
        href: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        hreflang: "en-PH",
      },
      {
        href: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        hreflang: "en-ZA",
      },
      {
        href: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        hreflang: "es-MX",
      },
      {
        href: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        hreflang: "es-CO",
      },
      {
        href: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        hreflang: "es-PE",
      },
      {
        href: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        hreflang: "es-AR",
      },
      {
        href: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        hreflang: "es-CL",
      },
      {
        href: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        hreflang: "es-VE",
      },
      {
        href: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        hreflang: "pt-PT",
      },
      {
        href: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        hreflang: "fr-CA",
      },
      {
        href: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        hreflang: "fr-BE",
      },
    ],
    openGraph: {
      title: "Expert Website Hosting & Support | Fast & Secure Hosting Help",
      description:
        "Need website support or hosting help? Our team provides reliable web hosting, technical support, and full website troubleshooting around the clock.",
      url: "https://www.itsupport.net.in/services/website-hosting-domain-support",
      images: ["image-url"],
      siteName: "Web Hosting & Domain Support Services, 20 Years of Trust",
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
      title: "24/7 Web Hosting Support Services | Website Migration Help",
      description:
        "Struggling with hosting issues? Get expert help with web hosting support, website troubleshooting, and smooth, secure website migration services.",
      image: "image-url",
      creator: "@L4RGINDIA",
    },
    jsonLd: [
      {
        "@context": "http://schema.org",
        "@id": "#product",
        "@type": "Product",
        name: "Website Domain & Hosting Support Services",
        description:
          "With over two decades of experience, we deliver expert website hosting, domain registration, DNS setup, and ongoing technical support.",
        url: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "3679",
        },
        audience: {
          "@type": "audience",
          description: "3679",
          audienceType: "Website Hosting and Domain Support",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        name: "L4RG US LLC",
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
      {
        "@context": "https://schema.org",
        "@type": "Review",
        name: "Technical Support for Web Hosting | Website Performance Solutions",
        url: "https://www.itsupport.net.in/services/website-hosting-domain-support",
        author: "Mike",
        reviewBody: "Best website hosting in usa",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4.9",
        },
        itemReviewed: {
          "@type": "LocalBusiness",
          name: "L4RG US LLC",
          priceRange: "12000",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
            addressLocality: "ELMSFORD ST",
            addressRegion: "ELMSFORD ST",
            postalCode: "27703",
            telephone: "+91-906-968-9226",
            addressCountry: {
              "@type": "Country",
              name: "United State America",
            },
          },
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Professional IT support",
        url: "https://www.itsupport.net.in/",
        telephone: "+91-906-968-9226",
        address: {
          "@type": "PostalAddress",
          streetAddress: "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
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
      {
        "@context": "https://schema.org/",
        "@type": "EmployerAggregateRating",
        itemReviewed: {
          "@type": "Organization",
          name: "Website Hosting and Domain Support",
          sameAs: "https://www.itsupport.net.in/",
        },
        ratingValue: "99",
        bestRating: "100",
        worstRating: "1",
        ratingCount: "4.9",
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Technical Support for Web Hosting | Website Performance Solutions",
        url: "https://www.itsupport.net.in/",
        inLanguage: "en-US",
        isPartOf: {
          "@type": "WebSite",
          url: "https://www.itsupport.net.in/services/website-hosting-domain-support",
          name: "L4RG US LLC",
        },
      },
      {
        "@context": "https://schema.org",
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
            name: "Services",
            item: "https://www.itsupport.net.in/services",
          },
          {
            "@type": "ListItem",
            position: 156792,
            name: "website hosting domain support",
            item: "https://www.itsupport.net.in/services/website-hosting-domain-support",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is website hosting and why do I need it?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Website hosting is a service that stores your website’s files and makes them accessible on the internet. Without hosting, your website won’t be visible online, even if you own a domain name.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between a domain name and web hosting?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A domain name is your website's address (like example.com), while web hosting is the server space where your website files live. Both are essential for running a website.",
            },
          },
          {
            "@type": "Question",
            name: "Can I buy hosting and domain from different providers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, you can. However, you’ll need to point your domain’s DNS settings to your hosting provider, which we can help you set up.",
            },
          },
          {
            "@type": "Question",
            name: "How do I transfer my domain to a new host?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "To transfer a domain, you need to unlock it at your current registrar, get the transfer code (EPP), and initiate the transfer at the new host. We offer full assistance to make the process smooth.",
            },
          },
          {
            "@type": "Question",
            name: "What types of web hosting do you offer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We provide shared hosting, VPS (Virtual Private Server), cloud hosting, and dedicated server options depending on your performance, budget, and control needs.",
            },
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "QAPage",
        mainEntity: {
          "@type": "Question",
          name: "How long does it take for a new domain to become active?",
          text: "Most new domain registrations go live within a few minutes to a few hours. In some cases, DNS propagation may take up to 24–48 hours worldwide.",
          answerCount: 1,
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most new domain registrations go live within a few minutes to a few hours. In some cases, DNS propagation may take up to 24–48 hours worldwide.",
            dateCreated: "2025-07-14T10:00:00+05:30",
            url: "https://www.itsupport.net.in/services/website-hosting-domain-support#q1a1",
          },
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Question",
        name: "Can you help me move my website to your hosting?",
        text: "Yes, we offer full website migration support—including files, databases, email, and domains—ensuring minimal downtime and a smooth transition.",
        answerCount: 1,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer full website migration support—including files, databases, email, and domains—ensuring minimal downtime and a smooth transition.",
          dateCreated: "2025-07-14T10:10:00+05:30",
          url: "https://www.itsupport.net.in/services/website-hosting-domain-support#q3a1",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Question",
        name: "What should I do if my website is down?",
        text: "First, check your internet connection and domain expiration status. If it’s still down, contact our support team. We’ll check server uptime, DNS, and resolve the issue quickly.",
        answerCount: 1,
        acceptedAnswer: {
          "@type": "Answer",
          text: "First, check your internet connection and domain expiration status. If it’s still down, contact our support team. We’ll check server uptime, DNS, and resolve the issue quickly.",
          dateCreated: "2025-07-14T10:15:00+05:30",
          url: "https://www.itsupport.net.in/services/website-hosting-domain-support##q4a1",
        },
      },
    ],
  },
  "wifi-network-support": {
    slug: "/services/wifi-network-support",
    title: "Wi-Fi Setup & Troubleshooting, Reliable Wi-Fi Support Services",
    description:
      "Struggling with Wi-Fi issues? Get expert help with setup, signal boosting, troubleshooting, and secure network configuration for any space. Wi-Fi not working, internet not connecting, Wi-Fi keeps disconnecting, Wi-Fi connection issues",
    keywords: [
      "Wi-Fi support",
      "WiFi help",
      "wireless internet support",
      "Wi-Fi troubleshooting",
      "fix Wi-Fi",
      "internet connection help",
      "Wi-Fi not working",
      "internet not connecting",
      "Wi-Fi keeps disconnecting",
      "Wi-Fi connection issues",
    ],
    canonical: "https://www.itsupport.net.in/services/wifi-network-support",
    hreflangs: [
      {
        href: "https://www.itsupport.net.in/services/wifi-network-support",
        hreflang: "en-US",
      },
      {
        href: "https://www.itsupport.net.in/services/wifi-network-support",
        hreflang: "en-AE",
      },
      {
        href: "https://www.itsupport.net.in/services/wifi-network-support",
        hreflang: "de-DE",
      },
      {
        href: "https://www.itsupport.net.in/services/wifi-network-support",
        hreflang: "es-ES",
      },
      {
        href: "https://www.itsupport.net.in/services/wifi-network-support",
        hreflang: "fr-FR",
      },
      {
        href: "https://www.itsupport.net.in/services/wifi-network-support",
        hreflang: "pt-BR",
      },
      {
        href: "https://www.itsupport.net.in/services/wifi-network-support",
        hreflang: "en-GB",
      },
      {
        href: "https://www.itsupport.net.in/services/wifi-network-support",
        hreflang: "en-CA",
      },
      {
        href: "https://www.itsupport.net.in/services/wifi-network-support",
        hreflang: "en-MY",
      },
      {
        href: "https://www.itsupport.net.in/services/wifi-network-support",
        hreflang: "en-SG",
      },
      {
        href: "https://www.itsupport.net.in/services/wifi-network-support",
        hreflang: "en-NG",
      },
      {
        href: "https://www.itsupport.net.in/services/wifi-network-support",
        hreflang: "en-ID",
      },
      {
        href: "https://www.itsupport.net.in/services/wifi-network-support",
        hreflang: "en-IE",
      },
      {
        href: "https://www.itsupport.net.in/services/wifi-network-support",
        hreflang: "en-AU",
      },
      {
        href: "https://www.itsupport.net.in/services/wifi-network-support",
        hreflang: "en-IN",
      },
      {
        href: "https://www.itsupport.net.in/services/wifi-network-support",
        hreflang: "en-NZ",
      },
      {
        href: "https://www.itsupport.net.in/services/wifi-network-support",
        hreflang: "en-PH",
      },
      {
        href: "https://www.itsupport.net.in/services/wifi-network-support",
        hreflang: "en-ZA",
      },
      {
        href: "https://www.itsupport.net.in/services/wifi-network-support",
        hreflang: "es-MX",
      },
      {
        href: "https://www.itsupport.net.in/services/wifi-network-support",
        hreflang: "es-CO",
      },
      {
        href: "https://www.itsupport.net.in/services/wifi-network-support",
        hreflang: "es-PE",
      },
      {
        href: "https://www.itsupport.net.in/services/wifi-network-support",
        hreflang: "es-AR",
      },
      {
        href: "https://www.itsupport.net.in/services/wifi-network-support",
        hreflang: "es-CL",
      },
      {
        href: "https://www.itsupport.net.in/services/wifi-network-support",
        hreflang: "es-VE",
      },
      {
        href: "https://www.itsupport.net.in/services/wifi-network-support",
        hreflang: "pt-PT",
      },
      {
        href: "https://www.itsupport.net.in/services/wifi-network-support",
        hreflang: "fr-CA",
      },
      {
        href: "https://www.itsupport.net.in/services/wifi-network-support",
        hreflang: "fr-BE",
      },
    ],
    openGraph: {
      title: "Wireless Internet Help | Fix Wi-Fi & Connectivity Problems",
      description:
        "Need Wi-Fi help? Our experts troubleshoot weak signals, dropped connections, and setup problems to restore your wireless internet quickly.",
      url: "https://www.itsupport.net.in/services/wifi-network-support",
      images: ["image-url"],
      siteName:
        "Wi-Fi Support & Troubleshooting | Fix Internet Connection Issues",
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
      title: "Wi-Fi Not Working? Get Fast, Reliable Internet Support Now",
      description:
        "Fix slow or unstable Wi-Fi with professional troubleshooting and setup help. We resolve internet not connecting, signal drops, and router issues.",
      image: "image-url",
      creator: "@L4RGINDIA",
    },
    jsonLd: [
      {
        "@context": "http://schema.org",
        "@id": "#product",
        "@type": "Product",
        name: "Wi-Fi Support Services",
        description:
          "We provide fast and professional Wi-Fi support, including router setup, connectivity fixes, range extension, and device configuration.",
        url: "https://www.itsupport.net.in/services/wifi-network-support",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "98603789",
        },
        audience: {
          "@type": "audience",
          description: "98603789",
          audienceType: "Reliable Wi-Fi Support Services, Home & Business",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: "https://www.itsupport.net.in/",
        name: "L4RG US LLC",
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
      {
        "@context": "https://schema.org",
        "@type": "Review",
        name: "Wi-Fi Connection Support | Setup, Repair & Troubleshooting",
        url: "https://www.itsupport.net.in/services/wifi-network-support",
        author: "Mike",
        reviewBody: "best Wi-Fi support in usa",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4.9",
        },
        itemReviewed: {
          "@type": "LocalBusiness",
          name: "L4RG US LLC",
          priceRange: "12000",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
            addressLocality: "ELMSFORD ST",
            addressRegion: "ELMSFORD ST",
            postalCode: "27703",
            telephone: "+91-906-968-9226",
            addressCountry: {
              "@type": "Country",
              name: "United State America",
            },
          },
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Professional IT support",
        image: "path",
        url: "https://www.itsupport.net.in/",
        telephone: "+91-906-968-9226",
        address: {
          "@type": "PostalAddress",
          streetAddress: "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
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
      {
        "@context": "https://schema.org",
        "@type": "EmployerAggregateRating",
        itemReviewed: {
          "@type": "Organization",
          name: "ITSupport.net.in",
          sameAs: "https://www.itsupport.net.in/",
        },
        ratingValue: "95",
        bestRating: "100",
        worstRating: "1",
        ratingCount: "4.9",
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Reliable IT Support & Computer Repair Near Me | Home Tech Help",
        url: "https://www.itsupport.net.in/services/wifi-network-support",
        inLanguage: "en-US",
        isPartOf: {
          "@type": "WebSite",
          url: "https://www.itsupport.net.in/",
          name: "L4RG US LLC",
        },
      },
      {
        "@context": "https://schema.org",
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
            name: "Services",
            item: "https://www.itsupport.net.in/services",
          },
          {
            "@type": "ListItem",
            position: 156792,
            name: "wifi network support",
            item: "https://www.itsupport.net.in/services/wifi-network-support",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Why is my Wi-Fi not connecting to the internet?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Common causes include incorrect Wi-Fi password, modem/router issues, service outages, or DNS errors. Restarting your router and checking your ISP’s status can often resolve the problem.",
            },
          },
          {
            "@type": "Question",
            name: "How can I fix a weak Wi-Fi signal in certain rooms?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Weak signals can be caused by distance, thick walls, or interference. Solutions include repositioning your router, using a Wi-Fi extender, or upgrading to a mesh Wi-Fi system.",
            },
          },
        ],
      },
    ],
  },
};

const seo = {};
