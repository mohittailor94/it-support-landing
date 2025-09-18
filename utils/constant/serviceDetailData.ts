export interface ServiceFAQ {
  label: string;
  desc: string;
  expanded?: boolean;
}

export interface ServiceHighlight {
  icon: string; // SVG as string or ReactNode if you render directly
  title: string;
  description: string;
}

export interface SpecificIssue {
  title: string;
  problemDescription: string;
  solution: string;
}

export interface IssueCategory {
  title: string;
  description: string;
  issues: SpecificIssue[];
}

export interface Service {
  slug: string;
  title: string;
  subtitle?: string;
  heroImage?: string;
  intro?: {
    headline: string;
    subheadline: string;
    description: string;
    image?: string;
  };
  serviceHighlights?: {
    title: string;
    services: ServiceHighlight[];
  };
  issuecategory?: {
    title: string;
    subTitle: string;
    issueCategories: IssueCategory[];
  };
  description?: string;
  features?: string[];
  faqs: ServiceFAQ[];
}

export const servicesDetailData: Service[] = [
  {
    slug: "best-data-backup-and-recovery-services",
    title: "Data Backup Support",
    subtitle: "Automated & Secure Data Backup Solutions",
    heroImage:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "Reliable Data Backup Services",
      subheadline: "Protect Your Business-Critical Data",
      description:
        "Our data backup services ensure your critical files and business data remain safe, secure, and recoverable during emergencies. We use industry-leading solutions to automate, monitor, and restore your data.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Why Choose Our Data Backup?",
      services: [
        {
          icon: "<svg>...</svg>",
          title: "Automated Backups",
          description: "Never worry about manual backups again.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Hybrid Storage",
          description: "Cloud + local options for maximum safety.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Disaster Recovery",
          description: "Fast restoration in case of emergencies.",
        },
      ],
    },
    issuecategory: {
      title: "Common Data Backup Issues",
      subTitle: "We resolve backup failures, slow restores, and more.",
      issueCategories: [
        {
          title: "Backup Failures",
          description: "Automated or manual backups not completing.",
          issues: [
            {
              title: "Scheduled Backup Not Running",
              problemDescription:
                "Backups are not triggered as per schedule due to software or permission issues.",
              solution:
                "We check backup logs, permissions, and reconfigure schedules.",
            },
          ],
        },
      ],
    },
    description:
      "Our data backup services ensure your critical files and business data remain safe, secure, and recoverable during emergencies.",
    features: [
      "Automated daily and weekly backups",
      "Hybrid cloud and local storage solutions",
      "Fast disaster recovery assistance",
    ],
    faqs: [
      {
        label: "Why do I need professional data backup services?",
        desc: "Professional data backup ensures your important files are safe from hardware failure, cyberattacks, and accidental deletion.",
        expanded: false,
      },
      {
        label: "Can you recover data after a system crash?",
        desc: "Yes, our disaster recovery solutions help restore your files quickly after a crash or system failure.",
        expanded: false,
      },
    ],
  },
  {
    slug: "antivirus-support-services",
    title: "Antivirus Support",
    subtitle: "Stay Protected from Online Threats",
    heroImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "Comprehensive Antivirus Solutions",
      subheadline: "Protect Your Devices from Malware",
      description:
        "Stay protected from viruses, malware, and online threats with our reliable antivirus installation and support services.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Our Antivirus Services",
      services: [
        {
          icon: "<svg>...</svg>",
          title: "Real-Time Protection",
          description: "Continuous monitoring for threats.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Multi-Device Support",
          description: "Protect all your devices.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Expert Removal",
          description: "We remove even the toughest malware.",
        },
      ],
    },
    issuecategory: {
      title: "Common Antivirus Issues",
      subTitle: "We resolve installation, update, and detection problems.",
      issueCategories: [
        {
          title: "Installation Problems",
          description: "Antivirus fails to install or activate.",
          issues: [
            {
              title: "Activation Failed",
              problemDescription: "License key not accepted or expired.",
              solution: "We verify your license and reinstall if needed.",
            },
          ],
        },
      ],
    },
    description:
      "Stay protected from viruses, malware, and online threats with our reliable antivirus installation and support services.",
    features: [
      "Setup and configuration of antivirus software",
      "Real-time threat monitoring and removal",
      "Regular updates for maximum security",
    ],
    faqs: [
      {
        label: "Which antivirus brands do you support?",
        desc: "We support popular antivirus solutions like Norton, McAfee, Kaspersky, Avast, and more.",
        expanded: false,
      },
      {
        label: "Do you provide regular antivirus updates?",
        desc: "Yes, we ensure your antivirus is updated regularly for the best protection.",
        expanded: false,
      },
    ],
  },
  {
    slug: "printer-support-services",
    title: "Printer Support",
    subtitle: "On-site & Remote Printer Repair • Managed Print Solutions",
    heroImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "Expert Printer Support Services by ",
      subheadline:
        "Your Trusted Partner for Flawless Printing for Over a Decade",
      description:
        "At ITSupport.net.in, we understand that a smoothly functioning printer is crucial for both homes and businesses. For over 10 years, we have been proudly serving over 10,000 customers globally, providing reliable and comprehensive printer support services. Our extensive experience ensures that we can quickly diagnose and resolve a wide array of printer issues, minimizing your downtime and maximizing your productivity.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Our Comprehensive Printer Support Services",
      services: [
        {
          icon: "<svg>...</svg>",
          title: "Comprehensive Support",
          description: "Expert solutions for all printer brands and models",
        },
        {
          icon: "<svg>...</svg>",
          title: "Fast Response Time",
          description: "Quick diagnosis and efficient problem resolution",
        },
        {
          icon: "<svg>...</svg>",
          title: "Certified Technicians",
          description: "Skilled professionals with years of experience",
        },
      ],
    },
    issuecategory: {
      title: "Common Printer Issues We Resolve",
      subTitle:
        "Printers, while essential, can often be a source of frustration. From minor glitches to major malfunctions, our expert technicians are equipped to handle it all. Here’s a breakdown of common problems we frequently encounter and effectively resolve.",
      issueCategories: [
        {
          title: "Connectivity Conundrums",
          description:
            "One of the most frequent issues users face is getting their printer to connect properly to their computer or network.",
          issues: [
            {
              title: "Wireless Printer Not Connecting",
              problemDescription:
                "Your wireless printer shows as offline, refuses to join your Wi-Fi network, or intermittently loses connection. This can be due to incorrect network settings, Wi-Fi interference, outdated drivers, or router issues.",
              solution:
                "We troubleshoot your network configuration, update printer firmware, ensure correct IP settings, and resolve any conflicts causing connectivity drops.",
            },
            {
              title: "USB Printer Not Recognized",
              problemDescription:
                "When you plug in your USB printer, your computer doesn't detect it, or it appears as an 'unknown device.' This often points to faulty USB cables, damaged printer ports, or missing/corrupt USB drivers.",
              solution:
                "We check cable integrity, test USB ports, reinstall or update necessary USB and printer drivers, and resolve driver conflicts.",
            },
          ],
        },
        {
          title: "Printing Quality Nightmares",
          description:
            "Nothing is more frustrating than a document that prints with streaks, faded text, or incorrect colors.",
          issues: [
            {
              title: "Streaks, Lines, and Faded Prints",
              problemDescription:
                "Your printed pages have horizontal or vertical lines, streaks of ink, or appear consistently faded. This is commonly caused by clogged print heads (inkjet), low toner (laser), dirty printer rollers, or drum unit issues.",
              solution:
                "We perform print head cleaning/alignment, assess toner/ink levels, clean internal components, and recommend or replace faulty consumables like toner cartridges or drum units.",
            },
            {
              title: "Incorrect Colors or Blotchy Output",
              problemDescription:
                "Colors on your printouts don't match the screen, or there are blotches of ink/toner. This can be due to incorrect color calibration, incompatible ink/toner cartridges, or damaged print heads/fusers.",
              solution:
                "We recalibrate color settings, ensure genuine cartridge use, and address physical damage to printing components.",
            },
          ],
        },
        {
          title: "Paper Handling Headaches",
          description:
            "Paper jams are a universal printer frustration, but they're not the only paper-related problem.",
          issues: [
            {
              title: "Constant Paper Jams",
              problemDescription:
                "Your printer frequently reports paper jams, even when no paper is visibly stuck, or it physically jams when feeding. This can be caused by misaligned paper trays, worn-out rollers, using incorrect paper types, or small debris inside the printer.",
              solution:
                "We carefully inspect the paper path for obstructions, clean and realign paper rollers, ensure correct paper loading, and advise on optimal paper types.",
            },
            {
              title: "Paper Not Feeding Properly",
              problemDescription:
                "The printer fails to pick up paper from the tray, or multiple sheets feed through at once. This often indicates worn paper rollers, issues with the paper tray mechanism, or humidity affecting the paper.",
              solution:
                "We clean or replace worn-out pick-up rollers and guide you on proper paper storage and loading techniques.",
            },
          ],
        },
        {
          title: "Software and Driver Dilemmas",
          description:
            "Printers rely heavily on correct software and drivers to communicate with your computer.",
          issues: [
            {
              title: "Printer Driver Installation Errors",
              problemDescription:
                "You're unable to install the printer driver, or it installs incorrectly, leading to non-functional printing. This can be due to corrupted installation files, operating system conflicts, or remnants of previous driver installations.",
              solution:
                "We ensure clean removal of old drivers, download and install the correct, up-to-date drivers compatible with your OS, and resolve any software conflicts.",
            },
            {
              title: "Printer Offline Status",
              problemDescription:
                'Your printer shows as "offline" even when it\'s powered on and connected. This could be a driver issue, network problem, or an incorrect printer port setting.',
              solution:
                "We reconfigure printer ports, update or reinstall drivers, and troubleshoot network connectivity to bring your printer back online.",
            },
          ],
        },
        {
          title: "Performance and Error Messages",
          description:
            "Slow printing or cryptic error messages can bring your work to a halt.",
          issues: [
            {
              title: "Extremely Slow Printing Speed",
              problemDescription:
                "Your printer takes an unusually long time to print, even simple documents. This can be due to high print quality settings, fragmented hard drive, insufficient RAM, or network congestion for network printers.",
              solution:
                "We optimize printer settings, clear print queues, and recommend system improvements for faster processing.",
            },
            {
              title: "Mysterious Error Codes",
              problemDescription:
                "Your printer displays alphanumeric error codes (e.g., E5, 0x0000000A) without clear explanations, preventing operation.",
              solution:
                "We decode error messages, troubleshoot the underlying hardware or software fault, and perform necessary repairs or resets.",
            },
          ],
        },
      ],
    },
    faqs: [
      {
        label: "Why is my printer not printing, even though it's turned on?",
        desc: 'This could be due to several reasons, including connectivity issues (Wi-Fi/USB), empty paper trays, low ink/toner, a paused print queue, or an "offline" status.',
        expanded: false,
      },
      {
        label: "How do I fix a paper jam when there's no paper visible?",
        desc: "Often, small pieces of paper or debris can be stuck. Turn off the printer, unplug it, and carefully check all accessible areas (paper trays, back panel, inside the printer) using a flashlight.",
        expanded: false,
      },
      {
        label:
          "My wireless printer won't connect to my new Wi-Fi network. What should I do?",
        desc: "You'll typically need to put your printer into setup mode and reconnect it to the new Wi-Fi network, often by entering the new Wi-Fi password. Refer to your printer's manual for specific steps.",
        expanded: false,
      },
      {
        label: "Why are my printouts faded or streaky?",
        desc: "For inkjet printers, this usually indicates clogged print heads or low ink. For laser printers, it could be low toner or a problem with the drum unit. Cleaning the print heads or replacing cartridges often resolves this.",
        expanded: false,
      },
      {
        label: "How often should I update my printer drivers?",
        desc: "It's good practice to update your printer drivers if you experience issues, install a new operating system, or if your printer manufacturer releases significant updates. Otherwise, if it's working fine, frequent updates aren't always necessary.",
        expanded: false,
      },
      {
        label: "Can ITSupport.net.in help with all printer brands?",
        desc: "Yes, our technicians are experienced with a wide range of printer brands, including HP, Epson, Canon, Brother, Lexmark, Samsung, and more.",
        expanded: false,
      },
      {
        label: 'What does it mean when my printer says "offline"?',
        desc: 'An "offline" status means your computer isn\'t communicating with your printer. This can be caused by connection issues (cable, Wi-Fi), an incorrect printer setting, or a driver problem.',
        expanded: false,
      },
      {
        label:
          "Is it better to use genuine or compatible ink/toner cartridges?",
        desc: "While compatible cartridges can be cheaper, genuine cartridges often offer better print quality and reliability, and their use typically doesn't void your printer's warranty.",
        expanded: false,
      },
      {
        label: "How can I clear the print queue on my computer?",
        desc: 'Go to "Devices and Printers" (Windows) or "Printers & Scanners" (Mac), double-click your printer, and then select "Open Print Queue." You can then cancel all documents.',
        expanded: false,
      },
      {
        label: "Do you offer remote printer support?",
        desc: "Yes, a significant portion of our printer support can be provided remotely, allowing us to quickly diagnose and fix software, driver, and connectivity issues without an on-site visit.",
        expanded: false,
      },
    ],
  },
  {
    slug: "networking-support-services",
    title: "Network Support",
    subtitle: "Fast, Secure & Reliable Network Solutions",
    heroImage:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "Expert Network Support for Home & Business",
      subheadline: "Stay Connected, Stay Productive",
      description:
        "Our networking experts ensure fast, secure, and reliable connections for your office or home networks. We design, install, and maintain robust network infrastructures to keep your business running smoothly.",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Why Choose Our Network Support?",
      services: [
        {
          icon: "<svg>...</svg>",
          title: "LAN & Wi-Fi Setup",
          description:
            "Professional installation and configuration for seamless connectivity.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Performance Optimization",
          description: "We identify and resolve bottlenecks for maximum speed.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Security Monitoring",
          description:
            "Continuous monitoring to protect your network from threats.",
        },
      ],
    },
    issuecategory: {
      title: "Common Network Issues We Resolve",
      subTitle:
        "From slow speeds to security threats, we handle all your networking challenges.",
      issueCategories: [
        {
          title: "Connectivity Issues",
          description: "Problems connecting devices to your network.",
          issues: [
            {
              title: "Wi-Fi Drops Frequently",
              problemDescription:
                "Devices lose connection to Wi-Fi or experience intermittent drops.",
              solution:
                "We optimize router placement, update firmware, and reduce interference.",
            },
            {
              title: "Ethernet Not Working",
              problemDescription: "Wired devices can't access the network.",
              solution:
                "We check cabling, switch ports, and network adapter settings.",
            },
          ],
        },
        {
          title: "Slow Network Performance",
          description: "Network is sluggish or unresponsive.",
          issues: [
            {
              title: "Slow Internet Speeds",
              problemDescription: "Websites and cloud apps load slowly.",
              solution:
                "We diagnose bandwidth usage, optimize QoS, and recommend upgrades.",
            },
            {
              title: "Lag in Video Calls or Streaming",
              problemDescription: "Video calls freeze or buffer.",
              solution:
                "We prioritize traffic and ensure stable connections for critical apps.",
            },
          ],
        },
        {
          title: "Security Concerns",
          description: "Protect your network from unauthorized access.",
          issues: [
            {
              title: "Unsecured Wi-Fi",
              problemDescription: "Wi-Fi is open or uses weak encryption.",
              solution: "We set up WPA3 encryption and strong passwords.",
            },
            {
              title: "Unknown Devices on Network",
              problemDescription:
                "Unrecognized devices appear on your network.",
              solution:
                "We audit connected devices and block unauthorized access.",
            },
          ],
        },
      ],
    },
    description:
      "Our networking experts ensure fast, secure, and reliable connections for your office or home networks.",
    features: [
      "LAN and Wi-Fi setup and configuration",
      "Network performance optimization",
      "Firewall and security monitoring",
    ],
    faqs: [
      {
        label: "Can you optimize slow internet speeds?",
        desc: "Yes, we identify bottlenecks and optimize your network for better speed and stability.",
        expanded: false,
      },
      {
        label: "Do you offer secure network setup?",
        desc: "Absolutely, we configure firewalls and encryption to protect your network.",
        expanded: false,
      },
    ],
  },
  {
    slug: "professional-cloud-support-services",
    title: "Cloud Support",
    subtitle: "Seamless Cloud Integration & Support",
    heroImage:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "Unlock the Power of the Cloud",
      subheadline: "Flexible, Secure, and Scalable Cloud Solutions",
      description:
        "Unlock the power of the cloud with our tailored cloud support services for storage, collaboration, and security. We help you migrate, manage, and optimize your cloud environment for maximum efficiency.",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Our Cloud Support Services",
      services: [
        {
          icon: "<svg>...</svg>",
          title: "Cloud Migration",
          description: "Seamless migration of your data and apps to the cloud.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Data Synchronization",
          description:
            "Keep your files updated and accessible across all devices.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Secure Backup",
          description: "Automated, encrypted backups for peace of mind.",
        },
      ],
    },
    issuecategory: {
      title: "Common Cloud Issues We Resolve",
      subTitle:
        "We help you overcome migration, access, and security challenges.",
      issueCategories: [
        {
          title: "Migration Challenges",
          description: "Difficulties moving data and apps to the cloud.",
          issues: [
            {
              title: "Data Loss During Migration",
              problemDescription:
                "Some files or emails are missing after migration.",
              solution:
                "We verify data integrity and re-migrate missing items.",
            },
            {
              title: "Downtime During Migration",
              problemDescription:
                "Business operations are interrupted during migration.",
              solution:
                "We plan migrations for off-hours and minimize downtime.",
            },
          ],
        },
        {
          title: "Access & Sync Issues",
          description: "Problems accessing or syncing cloud data.",
          issues: [
            {
              title: "Files Not Syncing",
              problemDescription:
                "Changes made on one device don't appear on others.",
              solution: "We troubleshoot sync settings and resolve conflicts.",
            },
            {
              title: "Permission Errors",
              problemDescription: "Users can't access shared folders or files.",
              solution: "We review and update sharing and permission settings.",
            },
          ],
        },
        {
          title: "Security & Compliance",
          description: "Ensuring your cloud data is safe and compliant.",
          issues: [
            {
              title: "Unauthorized Access",
              problemDescription:
                "Suspicious logins or data breaches detected.",
              solution:
                "We enable multi-factor authentication and monitor access logs.",
            },
            {
              title: "Data Privacy Concerns",
              problemDescription:
                "Uncertainty about where and how data is stored.",
              solution: "We configure data residency and compliance settings.",
            },
          ],
        },
      ],
    },
    description:
      "Unlock the power of the cloud with our tailored cloud support services for storage, collaboration, and security.",
    features: [
      "Cloud migration and setup assistance",
      "Data synchronization across devices",
      "Secure cloud backup and storage options",
    ],
    faqs: [
      {
        label: "Which cloud providers do you support?",
        desc: "We work with AWS, Google Cloud, Microsoft Azure, and other platforms.",
        expanded: false,
      },
      {
        label: "Can you migrate my existing data to the cloud?",
        desc: "Yes, we provide seamless and secure cloud migration services.",
        expanded: false,
      },
    ],
  },
  {
    slug: "e-commerce-support-services",
    title: "E-Commerce Support",
    subtitle: "Boost Your Online Store’s Performance & Security",
    heroImage:
      "https://images.unsplash.com/photo-1515168833906-d2a3b82b3027?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "Expert E-Commerce Support for Every Platform",
      subheadline: "Grow Your Online Business with Confidence",
      description:
        "Our e-commerce support services help you launch, manage, and secure your online store. From platform setup to payment gateway integration and ongoing maintenance, we ensure your business runs smoothly and securely.",
      image:
        "https://images.unsplash.com/photo-1515168833906-d2a3b82b3027?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Why Choose Our E-Commerce Support?",
      services: [
        {
          icon: "<svg>...</svg>",
          title: "Platform Expertise",
          description: "Support for Shopify, WooCommerce, Magento, and more.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Payment Integration",
          description: "Seamless and secure payment gateway setup.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Security & Uptime",
          description: "Continuous monitoring for safe and reliable shopping.",
        },
      ],
    },
    issuecategory: {
      title: "Common E-Commerce Issues We Resolve",
      subTitle:
        "From setup to security, we handle all your e-commerce challenges.",
      issueCategories: [
        {
          title: "Store Setup & Launch",
          description:
            "Difficulties getting your store online or configuring products.",
          issues: [
            {
              title: "Theme or Plugin Conflicts",
              problemDescription:
                "Store layout breaks or features stop working after installing new themes or plugins.",
              solution:
                "We troubleshoot, update, or replace conflicting plugins and themes.",
            },
            {
              title: "Product Upload Errors",
              problemDescription:
                "Products fail to upload or display incorrectly.",
              solution:
                "We check data formats, fix upload scripts, and ensure proper product configuration.",
            },
          ],
        },
        {
          title: "Payment & Checkout Problems",
          description: "Issues with payment gateways or abandoned carts.",
          issues: [
            {
              title: "Payment Gateway Not Working",
              problemDescription:
                "Customers can’t complete purchases due to payment errors.",
              solution:
                "We verify gateway credentials, update plugins, and resolve integration issues.",
            },
            {
              title: "High Cart Abandonment",
              problemDescription:
                "Many customers leave without completing checkout.",
              solution:
                "We optimize checkout flow and address technical or UX barriers.",
            },
          ],
        },
        {
          title: "Security & Performance",
          description: "Protect your store and keep it running fast.",
          issues: [
            {
              title: "Store Hacked or Compromised",
              problemDescription:
                "Malware or unauthorized changes detected on your store.",
              solution:
                "We clean up malware, restore backups, and harden security.",
            },
            {
              title: "Slow Store Loading",
              problemDescription:
                "Pages take too long to load, affecting sales.",
              solution:
                "We optimize images, code, and hosting for faster performance.",
            },
          ],
        },
      ],
    },
    description:
      "Enhance your online store performance with our expert e-commerce support for platforms, payments, and security.",
    features: [
      "Store setup and configuration",
      "Payment gateway integration",
      "Security and uptime monitoring",
    ],
    faqs: [
      {
        label: "Do you support all e-commerce platforms?",
        desc: "Yes, we support Shopify, WooCommerce, Magento, and other platforms.",
        expanded: false,
      },
      {
        label: "Can you help with payment gateway issues?",
        desc: "Yes, we provide setup and troubleshooting for secure online payments.",
        expanded: false,
      },
    ],
  },
  {
    slug: "hardware-repair-support-services",
    title: "Hardware Repair Support",
    subtitle: "Fast & Reliable IT Hardware Repairs",
    heroImage:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "Professional Hardware Repair for All Devices",
      subheadline: "Minimize Downtime, Maximize Productivity",
      description:
        "We provide fast and reliable repair services for desktops, laptops, and IT hardware. Our certified technicians diagnose and fix issues quickly, helping you get back to work with minimal disruption.",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Why Choose Our Hardware Repair?",
      services: [
        {
          icon: "<svg>...</svg>",
          title: "All Major Brands",
          description: "Repairs for Dell, HP, Lenovo, Apple, and more.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Quick Turnaround",
          description: "Most repairs completed within 24–48 hours.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Preventive Maintenance",
          description: "Upgrades and maintenance to prevent future issues.",
        },
      ],
    },
    issuecategory: {
      title: "Common Hardware Issues We Resolve",
      subTitle: "From broken screens to failing drives, we fix it all.",
      issueCategories: [
        {
          title: "Startup & Power Issues",
          description: "Devices won’t turn on or randomly shut down.",
          issues: [
            {
              title: "No Power or Boot Failure",
              problemDescription:
                "Device does not power on or gets stuck during boot.",
              solution:
                "We check power supply, motherboard, and replace faulty components.",
            },
            {
              title: "Random Shutdowns",
              problemDescription: "Computer shuts down unexpectedly.",
              solution:
                "We check for overheating, failing fans, and power issues.",
            },
          ],
        },
        {
          title: "Performance & Storage",
          description: "Slow computers or storage failures.",
          issues: [
            {
              title: "Slow Performance",
              problemDescription: "Computer is sluggish or unresponsive.",
              solution:
                "We upgrade RAM, replace hard drives, and remove malware.",
            },
            {
              title: "Hard Drive Failure",
              problemDescription: "Data loss or clicking noises from drive.",
              solution: "We recover data and replace failing drives.",
            },
          ],
        },
        {
          title: "Display & Peripheral Issues",
          description:
            "Problems with screens, keyboards, or other peripherals.",
          issues: [
            {
              title: "Broken Screen",
              problemDescription:
                "Laptop or monitor screen is cracked or not displaying.",
              solution: "We replace screens and test display connections.",
            },
            {
              title: "Keyboard/Mouse Not Working",
              problemDescription: "Input devices are unresponsive.",
              solution: "We repair or replace faulty peripherals.",
            },
          ],
        },
      ],
    },
    description:
      "We provide fast and reliable repair services for desktops, laptops, and IT hardware to minimize downtime.",
    features: [
      "Diagnosis and repair of hardware issues",
      "Replacement of faulty components",
      "Preventive maintenance and upgrades",
    ],
    faqs: [
      {
        label: "Do you repair all computer brands?",
        desc: "Yes, we service Dell, HP, Lenovo, Apple, and other major brands.",
        expanded: false,
      },
      {
        label: "How long does hardware repair usually take?",
        desc: "Most repairs are completed within 24–48 hours, depending on the issue.",
        expanded: false,
      },
    ],
  },
  {
    slug: "website-hosting-domain-support-services",
    title: "Web Hosting Domain Support",
    subtitle: "Reliable Hosting & Domain Solutions",
    heroImage:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "Professional Web Hosting & Domain Support",
      subheadline: "Get Your Website Online, Fast and Secure",
      description:
        "Get professional support for web hosting, domain setup, and smooth website management with our expert services. We ensure your website is always accessible, secure, and easy to manage.",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Why Choose Our Hosting & Domain Support?",
      services: [
        {
          icon: "<svg>...</svg>",
          title: "Domain Management",
          description: "Purchase, transfer, and configure domains with ease.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Seamless Migration",
          description:
            "Smooth website and email migration with minimal downtime.",
        },
        {
          icon: "<svg>...</svg>",
          title: "SSL & Security",
          description:
            "SSL certificate setup and proactive security monitoring.",
        },
      ],
    },
    issuecategory: {
      title: "Common Hosting & Domain Issues We Resolve",
      subTitle: "From DNS errors to migration headaches, we handle it all.",
      issueCategories: [
        {
          title: "Domain & DNS Issues",
          description: "Problems with domain setup or DNS configuration.",
          issues: [
            {
              title: "Domain Not Resolving",
              problemDescription:
                "Your website doesn't load due to DNS errors or misconfiguration.",
              solution:
                "We check DNS records, update nameservers, and ensure proper propagation.",
            },
            {
              title: "Email Not Working After Domain Change",
              problemDescription:
                "Emails stop working after domain transfer or DNS update.",
              solution:
                "We update MX records and verify email routing settings.",
            },
          ],
        },
        {
          title: "Hosting & Migration Problems",
          description: "Difficulties moving or managing your website.",
          issues: [
            {
              title: "Website Migration Downtime",
              problemDescription: "Site is unavailable during migration.",
              solution:
                "We plan migrations for off-peak hours and ensure a smooth transition.",
            },
            {
              title: "SSL Certificate Errors",
              problemDescription:
                "Browsers show security warnings due to SSL issues.",
              solution:
                "We install and renew SSL certificates and fix mixed content errors.",
            },
          ],
        },
      ],
    },
    description:
      "Get professional support for web hosting, domain setup, and smooth website management with our expert services.",
    features: [
      "Domain purchase and DNS configuration",
      "Hosting setup and migration",
      "Email and SSL certificate setup",
    ],
    faqs: [
      {
        label: "Can you help transfer my domain?",
        desc: "Yes, we assist with domain transfers and DNS setup.",
        expanded: false,
      },
      {
        label: "Do you offer website migration support?",
        desc: "Absolutely, we handle website migrations with minimal downtime.",
        expanded: false,
      },
    ],
  },
  {
    slug: "email-setup-support",
    title: "Support for Email Setup",
    subtitle: "Business & Personal Email Configuration",
    heroImage:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "Expert Email Setup & Support",
      subheadline: "Stay Connected with Reliable Email",
      description:
        "Simplify your email setup and management with our expert support for business and personal accounts. We ensure your email works seamlessly across all devices.",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Why Choose Our Email Setup Support?",
      services: [
        {
          icon: "<svg>...</svg>",
          title: "Multi-Device Setup",
          description:
            "Configure email on desktops, laptops, and mobile devices.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Business Email Integration",
          description:
            "Professional email setup for businesses using custom domains.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Spam & Security",
          description:
            "Advanced spam filtering and secure email configuration.",
        },
      ],
    },
    issuecategory: {
      title: "Common Email Setup Issues We Resolve",
      subTitle: "From configuration errors to spam problems, we fix it all.",
      issueCategories: [
        {
          title: "Configuration Issues",
          description: "Problems setting up or syncing email accounts.",
          issues: [
            {
              title: "Cannot Add Email Account",
              problemDescription:
                "Unable to add email account to Outlook, Gmail, or mobile device.",
              solution:
                "We verify server settings, ports, and credentials for successful setup.",
            },
            {
              title: "Emails Not Syncing",
              problemDescription: "Emails do not appear across all devices.",
              solution:
                "We check IMAP/POP settings and resolve sync conflicts.",
            },
          ],
        },
        {
          title: "Security & Spam",
          description: "Issues with spam or email security.",
          issues: [
            {
              title: "Receiving Too Much Spam",
              problemDescription: "Inbox is flooded with unwanted emails.",
              solution:
                "We enable advanced spam filters and block suspicious senders.",
            },
            {
              title: "Suspicious Login Alerts",
              problemDescription:
                "Email provider warns of unauthorized access.",
              solution:
                "We update passwords and enable two-factor authentication.",
            },
          ],
        },
      ],
    },
    description:
      "Simplify your email setup and management with our expert support for business and personal accounts.",
    features: [
      "Email account setup and configuration",
      "Integration with Outlook, Gmail, and more",
      "Spam filtering and security setup",
    ],
    faqs: [
      {
        label: "Can you set up email on multiple devices?",
        desc: "Yes, we configure email accounts across desktops, laptops, and mobile devices.",
        expanded: false,
      },
      {
        label: "Do you support business email setups?",
        desc: "Yes, we configure professional email for businesses using custom domains.",
        expanded: false,
      },
    ],
  },
  {
    slug: "wifi-network-support",
    title: "Wi-Fi Network Support",
    subtitle: "Fast & Secure Wireless Connectivity",
    heroImage:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "Reliable Wi-Fi Network Support",
      subheadline: "Stay Connected Everywhere",
      description:
        "Ensure fast and reliable wireless connectivity with our Wi-Fi support services for homes and businesses. We optimize your network for speed, coverage, and security.",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Why Choose Our Wi-Fi Support?",
      services: [
        {
          icon: "<svg>...</svg>",
          title: "Router Setup & Optimization",
          description:
            "Professional installation and configuration for maximum coverage.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Signal Boosting",
          description: "Range extension and dead zone elimination.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Secure Network",
          description: "Encrypted Wi-Fi and strong password setup.",
        },
      ],
    },
    issuecategory: {
      title: "Common Wi-Fi Issues We Resolve",
      subTitle:
        "From weak signals to security risks, we handle all your Wi-Fi challenges.",
      issueCategories: [
        {
          title: "Coverage & Signal Issues",
          description: "Problems with Wi-Fi range or dead zones.",
          issues: [
            {
              title: "Weak Wi-Fi Signal",
              problemDescription:
                "Wi-Fi signal is weak or drops in certain areas.",
              solution:
                "We optimize router placement and install range extenders.",
            },
            {
              title: "Dead Zones",
              problemDescription: "No Wi-Fi coverage in some rooms.",
              solution: "We add mesh systems or additional access points.",
            },
          ],
        },
        {
          title: "Security & Connectivity",
          description: "Issues with Wi-Fi security or device connections.",
          issues: [
            {
              title: "Unsecured Wi-Fi",
              problemDescription:
                "Wi-Fi network is open or uses weak encryption.",
              solution: "We set up WPA3 encryption and strong passwords.",
            },
            {
              title: "Devices Can't Connect",
              problemDescription: "Some devices fail to connect to Wi-Fi.",
              solution: "We troubleshoot device settings and update firmware.",
            },
          ],
        },
      ],
    },
    description:
      "Ensure fast and reliable wireless connectivity with our Wi-Fi support services for homes and businesses.",
    features: [
      "Wi-Fi router setup and optimization",
      "Signal boosting and range extension",
      "Secure network configuration",
    ],
    faqs: [
      {
        label: "Can you fix weak Wi-Fi signals?",
        desc: "Yes, we optimize coverage and provide solutions like signal extenders.",
        expanded: false,
      },
      {
        label: "Do you install secure Wi-Fi networks?",
        desc: "Yes, we set up encrypted Wi-Fi with strong passwords to keep your data safe.",
        expanded: false,
      },
    ],
  },
];
