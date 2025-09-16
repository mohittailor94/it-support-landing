const JsonLdSchemas = [
  {
    "@context": "http://schema.org",
    "@id": "#product",
    "@type": "Product",
    name: "IT Support",
    description:
      "Leading tech support for 20 years. We solve your IT challenges efficiently, offering expert help for businesses and individuals.",
    url: "https://www.itsupport.net.in/",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "8756953",
    },
    audience: {
      "@type": "audience",
      description: "8756953 Reviews",
      audienceType: "20 Years Tech Support, Solutions & Expert Help",
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
    url: "https://www.itsupport.net.in/",
    image: "",
    author: {
      "@type": "Person",
      name: "Mike",
    },
    reviewBody: "best IT support in usa",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.8",
    },
    itemReviewed: {
      "@type": "LocalBusiness",
      name: "L4RG US LLC",
      priceRange: 12000,
      address: {
        "@type": "PostalAddress",
        streetAddress: "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
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
    name: "Professional IT support",
    image: "path",
    "@id": "",
    url: "https://www.itsupport.net.in/",
    telephone: "+1-978-615-9403",
    address: {
      "@type": "PostalAddress",
      streetAddress: "L4RG US LLC, 105 ELMSFORD ST, DURHAM, NC 27703, USA",
      addressLocality: "ELMSFORD ST",
      postalCode: "27703",
      addressCountry: {
        "@type": "Country",
        name: "United State",
      },
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
      name: "Best Remote Tech Support Services",
      sameAs: "https://www.itsupport.net.in/",
    },
    ratingValue: "95",
    bestRating: "100",
    worstRating: "1",
    ratingCount: 4.9,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Reliable IT Support & Computer Repair Near Me | Home Tech Help",
    url: "https://www.itsupport.net.in/",
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      url: "https://www.itsupport.net.in/",
      name: "L4RG US LLC",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does IT support include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "IT back incorporates investigating and settling issues with computers, systems, computer program, and equipment. It moreover covers administrations like infection expulsion, information reinforcement, wifi setup, and specialized direction for both domestic and trade clients.",
        },
      },
      {
        "@type": "Question",
        name: "How can I find reliable tech support near me?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Look for “tech bolster close me” and see for businesses with tall appraisals and confirmed audits. Nearby registries like Google Maps or Cry can offer assistance you select a legitimate specialist.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer home IT support services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, numerous IT benefit suppliers offer on-site domestic visits for issues like wifi setup, printer association, infection evacuation, and computer repairs—ideal for clients who favor in-home benefit.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help fix slow wifi or weak signals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Completely. We analyze wifi issues, reposition switches, update firmware, and can suggest superior equipment if required to boost flag quality and web speed in your domestic or office.",
        },
      },
      {
        "@type": "Question",
        name: "My printer won't connect to my computer—can you fix this?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can resolve common printer association issues, whether they're related to computer program, organize settings, obsolete drivers, or remote syncing issues.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: "How do I know if my computer has a virus?",
      text: "Signs of a virus include slow performance, unexpected pop-ups, frequent crashes, and strange files or programs. A full scan by a professional can detect and safely remove malware.",
      answerCount: 1,
      acceptedAnswer: {
        "@type": "Answer",
        text: "Signs of a virus include slow performance, unexpected pop-ups, frequent crashes, and strange files or programs. A full scan by a professional can detect and safely remove malware.",
        dateCreated: "2025-07-14T10:00:00+05:30",
        url: "https://www.itsupport.net.in#q1a1",
      },
    },
    suggestedAnswer: [
      {
        "@type": "Question",
        name: "Do you repair laptops and desktops?",
        text: "Yes, we give repair administrations for both portable workstations and desktops, counting screen substitutions, battery issues, console repairs, information recuperation, and computer program fixes.",
        answerCount: 1,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we give repair administrations for both portable workstations and desktops, counting screen substitutions, battery issues, console repairs, information recuperation, and computer program fixes.",
          dateCreated: "2025-07-14T10:05:00+05:30",
          url: "https://www.itsupport.net.in#q2a1",
        },
      },
      {
        "@type": "Question",
        name: "How long does a typical computer repair take?",
        text: "Most essential repairs take 1–2 days. Fast fixes like infection expulsion or program investigating can frequently be done the same day, depending on the issue and parts accessibility.",
        answerCount: 1,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most essential repairs take 1–2 days. Fast fixes like infection expulsion or program investigating can frequently be done the same day, depending on the issue and parts accessibility.",
          dateCreated: "2025-07-14T10:10:00+05:30",
          url: "https://www.itsupport.net.in#q3a1",
        },
      },
      {
        "@type": "Question",
        name: "What should I do before bringing my device in for repair?",
        text: "Back up critical information if conceivable, note any blunder messages, and bring control cables or extras if they might be portion of the issue. We moreover suggest evacuating any delicate individual data if you can.",
        answerCount: 1,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Back up critical information if conceivable, note any blunder messages, and bring control cables or extras if they might be portion of the issue. We moreover suggest evacuating any delicate individual data if you can.",
          dateCreated: "2025-07-14T10:15:00+05:30",
          url: "https://www.itsupport.net.in#q4a1",
        },
      },
    ],
  },
];

export default JsonLdSchemas;
