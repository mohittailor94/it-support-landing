export interface Service {
  slug: string;
  title: string;
  description: string;
  features: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesDetailData: Service[] = [
  {
    slug: "best-data-backup-and-recovery-services",
    title: "Data Backup Support",
    description:
      "Our data backup services ensure your critical files and business data remain safe, secure, and recoverable during emergencies.",
    features: [
      "Automated daily and weekly backups",
      "Hybrid cloud and local storage solutions",
      "Fast disaster recovery assistance",
    ],
    faqs: [
      {
        question: "Why do I need professional data backup services?",
        answer:
          "Professional data backup ensures your important files are safe from hardware failure, cyberattacks, and accidental deletion.",
      },
      {
        question: "Can you recover data after a system crash?",
        answer:
          "Yes, our disaster recovery solutions help restore your files quickly after a crash or system failure.",
      },
    ],
  },
  {
    slug: "antivirus-support-services",
    title: "Antivirus Support Services",
    description:
      "Stay protected from viruses, malware, and online threats with our reliable antivirus installation and support services.",
    features: [
      "Setup and configuration of antivirus software",
      "Real-time threat monitoring and removal",
      "Regular updates for maximum security",
    ],
    faqs: [
      {
        question: "Which antivirus brands do you support?",
        answer:
          "We support popular antivirus solutions like Norton, McAfee, Kaspersky, Avast, and more.",
      },
      {
        question: "Do you provide regular antivirus updates?",
        answer:
          "Yes, we ensure your antivirus is updated regularly for the best protection.",
      },
    ],
  },
  {
    slug: "printer-support-services",
    title: "Printer Support Services",
    description:
      "We provide troubleshooting, setup, and maintenance for all major printer brands to keep your printing workflow smooth.",
    features: [
      "Printer installation and driver setup",
      "Troubleshooting hardware and connectivity issues",
      "Regular maintenance and optimization",
    ],
    faqs: [
      {
        question: "Can you fix wireless printer issues?",
        answer:
          "Yes, we troubleshoot and fix connectivity problems for wireless and network printers.",
      },
      {
        question: "Do you support all printer brands?",
        answer:
          "We provide support for HP, Canon, Epson, Brother, and other major brands.",
      },
    ],
  },
  {
    slug: "networking-support-services",
    title: "Network Support Services",
    description:
      "Our networking experts ensure fast, secure, and reliable connections for your office or home networks.",
    features: [
      "LAN and Wi-Fi setup and configuration",
      "Network performance optimization",
      "Firewall and security monitoring",
    ],
    faqs: [
      {
        question: "Can you optimize slow internet speeds?",
        answer:
          "Yes, we identify bottlenecks and optimize your network for better speed and stability.",
      },
      {
        question: "Do you offer secure network setup?",
        answer:
          "Absolutely, we configure firewalls and encryption to protect your network.",
      },
    ],
  },
  {
    slug: "professional-cloud-support-services",
    title: "Cloud Support Services",
    description:
      "Unlock the power of the cloud with our tailored cloud support services for storage, collaboration, and security.",
    features: [
      "Cloud migration and setup assistance",
      "Data synchronization across devices",
      "Secure cloud backup and storage options",
    ],
    faqs: [
      {
        question: "Which cloud providers do you support?",
        answer:
          "We work with AWS, Google Cloud, Microsoft Azure, and other platforms.",
      },
      {
        question: "Can you migrate my existing data to the cloud?",
        answer: "Yes, we provide seamless and secure cloud migration services.",
      },
    ],
  },
  {
    slug: "e-commerce-support-services",
    title: "E-Commerce Support Services",
    description:
      "Enhance your online store performance with our expert e-commerce support for platforms, payments, and security.",
    features: [
      "Store setup and configuration",
      "Payment gateway integration",
      "Security and uptime monitoring",
    ],
    faqs: [
      {
        question: "Do you support all e-commerce platforms?",
        answer:
          "Yes, we support Shopify, WooCommerce, Magento, and other platforms.",
      },
      {
        question: "Can you help with payment gateway issues?",
        answer:
          "Yes, we provide setup and troubleshooting for secure online payments.",
      },
    ],
  },
  {
    slug: "hardware-repair-support-services",
    title: "Hardware Repair Support Services",
    description:
      "We provide fast and reliable repair services for desktops, laptops, and IT hardware to minimize downtime.",
    features: [
      "Diagnosis and repair of hardware issues",
      "Replacement of faulty components",
      "Preventive maintenance and upgrades",
    ],
    faqs: [
      {
        question: "Do you repair all computer brands?",
        answer:
          "Yes, we service Dell, HP, Lenovo, Apple, and other major brands.",
      },
      {
        question: "How long does hardware repair usually take?",
        answer:
          "Most repairs are completed within 24–48 hours, depending on the issue.",
      },
    ],
  },
  {
    slug: "website-hosting-domain-support-services",
    title: "Web Hosting Domain Support",
    description:
      "Get professional support for web hosting, domain setup, and smooth website management with our expert services.",
    features: [
      "Domain purchase and DNS configuration",
      "Hosting setup and migration",
      "Email and SSL certificate setup",
    ],
    faqs: [
      {
        question: "Can you help transfer my domain?",
        answer: "Yes, we assist with domain transfers and DNS setup.",
      },
      {
        question: "Do you offer website migration support?",
        answer:
          "Absolutely, we handle website migrations with minimal downtime.",
      },
    ],
  },
  {
    slug: "email-setup-support",
    title: "Support for Email Setup",
    description:
      "Simplify your email setup and management with our expert support for business and personal accounts.",
    features: [
      "Email account setup and configuration",
      "Integration with Outlook, Gmail, and more",
      "Spam filtering and security setup",
    ],
    faqs: [
      {
        question: "Can you set up email on multiple devices?",
        answer:
          "Yes, we configure email accounts across desktops, laptops, and mobile devices.",
      },
      {
        question: "Do you support business email setups?",
        answer:
          "Yes, we configure professional email for businesses using custom domains.",
      },
    ],
  },
  {
    slug: "wifi-network-support",
    title: "Wi-Fi Network Support",
    description:
      "Ensure fast and reliable wireless connectivity with our Wi-Fi support services for homes and businesses.",
    features: [
      "Wi-Fi router setup and optimization",
      "Signal boosting and range extension",
      "Secure network configuration",
    ],
    faqs: [
      {
        question: "Can you fix weak Wi-Fi signals?",
        answer:
          "Yes, we optimize coverage and provide solutions like signal extenders.",
      },
      {
        question: "Do you install secure Wi-Fi networks?",
        answer:
          "Yes, we set up encrypted Wi-Fi with strong passwords to keep your data safe.",
      },
    ],
  },
];
