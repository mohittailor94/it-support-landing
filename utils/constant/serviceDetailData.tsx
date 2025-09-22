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
  problemDescription?: string;
  solution?: string;
}

export interface IssueCategory {
  title: string;
  description: string;
  bottomDesc?: string;
  issues?: SpecificIssue[];
}

export interface Service {
  slug: string;
  title: string;
  subtitle?: string;
  subtitle1?: string;
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
  issuecategory2?: {
    title: string;
    subTitle: string;
    issueCategories: IssueCategory[];
  };
  issuecategory3?: {
    title: string;
    subTitle: string;
    issueCategories: IssueCategory[];
  };
  issuecategory4?: {
    title: string;
    subTitle: string;
    issueCategories: IssueCategory[];
  };
  description?: string;
  features?: string[];
  whyChoose?: any[];
  faqs: ServiceFAQ[];
}

export const servicesDetailData: Service[] = [
  {
    slug: "best-data-backup-and-recovery-services",
    title: "Unbreakable Data Security: Expert Backup & Recovery Support",
    subtitle:
      "In the digital age, data is the lifeblood of every business and the repository of every personal memory. From critical business documents and financial records to cherished family photos and vital creative projects, your data represents invaluable assets. Yet, these assets are constantly vulnerable to loss from countless threats – hardware failures, human error, cyber-attacks, natural disasters, and software corruptions.",
    subtitle1:
      "Losing data can mean financial ruin for businesses, irreparable damage to personal history, and immense stress. At ITSupport.net.in, we understand the profound importance of your data. We offer comprehensive Data Backup & Recovery support services designed to protect your information, ensure business continuity, and provide ultimate peace of mind.",
    heroImage:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "The Critical Importance of Data Backup & Recovery",
      subheadline: "Protect Your Business-Critical Data",
      description:
        "Many only realize the true value of their data once it's gone. Proactive backup and a solid recovery plan are not just good practices; they are essential for survival in the digital world.",
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
      title: "Protect Your Data",
      subTitle: "",
      issueCategories: [
        {
          title: "The Silent Threat of Data Loss",
          description:
            "Data loss isn't always a dramatic event. It can stem from a variety of sources:",
          bottomDesc:
            "Without a robust backup and recovery strategy, any of these scenarios can lead to devastating consequences.",
          issues: [
            {
              title: "Hardware Failure",
              solution: "Hard drives crash, SSDs fail, and devices wear out.",
            },
            {
              title: "Human Error",
              solution:
                "Accidental deletions, overwriting files, or formatting the wrong drive.",
            },
            {
              title: "Cyber-Attacks",
              solution:
                "Ransomware encrypts files, malware corrupts data, and hackers steal sensitive information.",
            },
            {
              title: "Software Corruption",
              solution:
                "Operating system errors, application crashes, or corrupt files.",
            },
            {
              title: "Natural Disasters",
              solution:
                "Fires, floods, or other physical damage to your devices.",
            },
          ],
        },
        {
          title: "Business Continuity & Personal Peace of Mind",
          description:
            "For businesses, data loss translates directly into downtime, financial losses, reputational damage, and potential legal liabilities. A quick and effective recovery plan ensures business continuity, minimizing disruption and getting you back on track swiftly. For individuals, losing irreplaceable photos, videos, or documents can be emotionally taxing. Secure backups safeguard these precious memories.",
        },
        {
          title: "Beyond Simple Copies",
          description:
            "Simply dragging and dropping files to an external drive isn't a comprehensive backup solution. True data protection requires systematic, automated, verified backups, and a clear, tested recovery plan. It involves strategy, technology, and ongoing management, which is where professional support becomes indispensable.",
        },
        {
          title: "ITSupport.net.in: Your Fortress for Precious Data",
          description:
            "For over a decade, ITSupport.net.in has been the trusted name in tech support, safeguarding digital assets for clients around the globe. Our expertise in data backup and recovery is built on years of hands-on experience and a relentless commitment to security.",
        },
        {
          title: "A Decade of Data Guardianship",
          description:
            "With <strong>10 years of dedicated tech support services</strong>, ITSupport.net.in has cultivated unparalleled expertise in protecting digital information. We've navigated countless data loss scenarios, perfecting our strategies to provide solutions that are not just effective but also resilient and future-proof. Our long-standing presence signifies our reliability and deep understanding of evolving data challenges.",
        },
        {
          title: "10,000+ Customers, Global Trust",
          description:
            "Our reputation is built on the satisfaction of our clients. We are proud to serve <strong>10,000+ satisfied customers globally,</strong> from individual users to growing businesses. This extensive experience across diverse sectors and geographical locations underscores our ability to deliver tailored, effective, and dependable data backup and recovery solutions, earning trust one client at a time.",
        },
      ],
    },
    issuecategory2: {
      title: "Our Comprehensive Data Backup & Recovery Support Services",
      subTitle:
        "ITSupport.net.in offers a full suite of services designed to implement robust backup strategies and ensure swift, successful data recovery.",
      issueCategories: [
        {
          title: "Tailored Backup Solutions",
          description:
            "One size does not fit all when it comes to data protection. We assess your unique needs to design the perfect strategy.",
        },
        {
          title: "On-Premise Backup Setup",
          description:
            "We configure local backup solutions using external drives, NAS devices, or dedicated servers for quick access and control over your data.",
        },
        {
          title: "Cloud Backup Implementation",
          description:
            "Leverage the power and flexibility of cloud storage (e.g., Google Drive, OneDrive, specialized backup services) for secure, off-site data replication.",
        },
        {
          title: "Hybrid Backup Strategies",
          description:
            "For ultimate resilience, we design hybrid solutions combining local and cloud backups, offering the best of both worlds.",
        },
        {
          title: "Automated Backup Configuration & Monitoring",
          description:
            "Manual backups are prone to human error and inconsistency. We automate the process for you.",
        },
        {
          title: "Set-and-Forget Reliability",
          description:
            "We configure automated backup schedules, ensuring your data is regularly backed up without manual intervention.",
        },
        {
          title: "Proactive Monitoring for Success",
          description:
            "Our team proactively monitors your backup jobs, verifying their successful completion and addressing any issues immediately, so you never have to worry.",
        },
        {
          title: "Proactive Monitoring for Success",
          description:
            "Our team proactively monitors your backup jobs, verifying their successful completion and addressing any issues immediately, so you never have to worry.",
        },
        {
          title: "Rapid Data Recovery",
          description:
            "In the event of data loss, quick recovery is paramount to minimize impact.",
        },
        {
          title: "Disaster Recovery Planning",
          description:
            "We help you develop a comprehensive disaster recovery plan, outlining steps to take and resources needed to restore operations swiftly.",
        },
        {
          title: "Expert Data Restoration",
          description:
            "Our technicians provide expert assistance in recovering lost or corrupted data from your backups, getting your systems back online with minimal downtime.",
        },
        {
          title: "Data Integrity & Security",
          description:
            "Your data's safety is our highest priority, both during backup and recovery.",
        },
        {
          title: "Encryption & Access Control",
          description:
            "We implement robust encryption protocols and access controls to protect your backed-up data from unauthorized access, ensuring privacy and compliance.",
        },
        {
          title: "Regular Backup Verification",
          description:
            "We implement robust encryption protocols and access controls to protect your backed-up data from unauthorized access, ensuring privacy and compliance.",
        },
        {
          title: "Data Migration & Archiving",
          description:
            "Managing data over its lifecycle is crucial for efficiency and compliance.",
        },
        {
          title: "Seamless Data Transfers",
          description:
            "Whether you're upgrading hardware or moving to a new system, we ensure secure and seamless data migration with no loss.",
        },
        {
          title: "Long-Term Storage Solutions",
          description:
            "We assist with setting up effective data archiving strategies for long-term retention requirements, ensuring accessibility when needed while optimizing storage costs.",
        },
        {
          title: "24/7 Expert Assistance",
          description:
            "We assist with setting up effective data archiving strategies for long-term retention requirements, ensuring accessibility when needed while optimizing storage costs.",
        },
        {
          title: "Always There When You Need Us",
          description:
            "Our remote tech support team is available around the clock, 24/7, to provide immediate assistance with any backup- or recovery-related issue, ensuring continuous protection and rapid response.",
        },
      ],
    },
    issuecategory3: {
      title: "The ITSupport.net.in Advantage in Data Protection",
      subTitle:
        "Choosing ITSupport.net.in for your data backup and recovery needs means choosing unparalleled expertise and peace of mind.",
      issueCategories: [
        {
          title: "Proven Expertise & Experience",
          description:
            "Our decade of experience means we've refined our processes to offer the most effective and secure backup and recovery solutions. We are industry veterans you can trust.",
        },
        {
          title: "Customized & Scalable Solutions",
          description:
            "We don't offer generic fixes. Our solutions are tailored to your specific infrastructure, data volume, and recovery objectives, designed to scale with your growth.",
        },
        {
          title: "Unwavering Commitment to Security",
          description:
            "Security is at the core of everything we do. We employ industry best practices to ensure your data is always protected, both in transit and at rest. <br />Protect your most valuable asset today. Partner with ITSupport.net.in for robust Data Backup & Recovery services and ensure your digital future is secure.",
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
        label:
          "What types of data loss can ITSupport.net.in's services protect against?",
        desc: "Our services are designed to protect you from a wide range of data loss scenarios, including hardware failures (e.g., hard drive crashes), human error (accidental deletions, overwriting files), cyber-attacks (ransomware, malware), software corruption, and even physical damage from natural disasters. We aim to ensure your data is resilient against virtually any threat.",
        expanded: true,
      },
      {
        label:
          "How often should I back up my data, and do you automate this process?",
        desc: "The ideal backup frequency depends on how often your data changes and its criticality. We help you determine the most suitable schedule (daily, hourly, or even continuous). Yes, we configure automated backup solutions so your data is backed up regularly without manual intervention, ensuring consistency and reliability. We also monitor these backups to confirm they're always successful.",
        expanded: false,
      },
      {
        label: "What is the data recovery process like if I lose my data?",
        desc: "If data loss occurs, our process focuses on rapid restoration. First, we'll assess the extent of the loss. Then, utilizing your secure backups, our experts will meticulously restore your data to your system. We prioritize minimizing downtime and ensuring data integrity throughout the recovery, getting you back up and running as quickly as possible.",
        expanded: false,
      },
      {
        label:
          "How secure is my data when backed up through ITSupport.net.in's services?",
        desc: "Data security is our top priority. We implement robust encryption protocols for data both in transit and at rest. We also set up strict access controls to ensure only authorized personnel can access your backups. Whether you opt for on-premise, cloud, or hybrid solutions, your data's confidentiality and integrity are paramount.",
        expanded: false,
      },
      {
        label:
          "What makes ITSupport.net.in's data backup and recovery services stand out?",
        desc: "Our decade of experience and 10,000+ satisfied customers globally speak volumes. We offer tailored, scalable solutions unique to your needs, not one-size-fits-all fixes. Our certified technicians provide proactive monitoring and 24/7 expert support, meaning we're always there when you need us most. We're not just providing a service; we're building a fortress for your invaluable data.",
        expanded: false,
      },
    ],
  },
  {
    slug: "antivirus-support-services",
    title: "Safeguard Your Digital World: Expert Antivirus Support",
    subtitle:
      "In today's interconnected world, your digital life is constantly under threat. From sophisticated ransomware to elusive spyware, malicious software lurks, ready to compromise your data, disrupt your operations, and steal your peace of mind. A simple antivirus program isn't enough; you need robust, proactive, and expert support to truly protect your digital assets.",
    subtitle1:
      "At ITSupport.net.in, we understand the complexities of modern cyber threats. We provide comprehensive antivirus support services designed to keep your systems secure, ensuring you can work, browse, and connect without fear.",
    heroImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "Why You Need Professional Antivirus Support",
      subheadline: "",
      description:
        "The digital landscape is a battlefield, and your devices are prime targets. Relying solely on basic antivirus software often leaves critical vulnerabilities exposed.",
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
      title: "Why You Need Professional Antivirus Support",
      subTitle:
        "The digital landscape is a battlefield, and your devices are prime targets. Relying solely on basic antivirus software often leaves critical vulnerabilities exposed.",
      issueCategories: [
        {
          title: "The Ever-Evolving Threat Landscape",
          description:
            "Cybercriminals are constantly innovating. New viruses, malware variants, phishing scams, and ransomware attacks emerge daily, often bypassing generic defenses. Staying protected requires continuous vigilance and up-to-date expertise. A threat detected today might be an old story tomorrow, making dynamic support crucial.",
        },
        {
          title: "Beyond Basic Protection",
          description:
            "Many users install an antivirus and forget about it. However, effective protection goes far beyond installation. It involves proper configuration, regular updates, scheduled scans, and quick, expert intervention when a threat is detected or suspected. Without professional guidance, even the best software can leave you exposed.",
        },
        {
          title: "Time and Expertise: Why DIY Isn't Always Best",
          description:
            "Dealing with a virus infection can be time-consuming, frustrating, and, if not handled correctly, can lead to permanent data loss or system damage. Diagnosing complex issues, performing deep cleanups, and optimizing security settings requires specialized knowledge and experience that most individuals or small businesses lack.",
        },
      ],
    },
    issuecategory2: {
      title: "ITSupport.net.in: Your Trusted Partner in Digital Security",
      subTitle:
        "For over a decade, ITSupport.net.in has stood as a beacon of reliability in the tech support landscape. We are committed to providing top-tier antivirus support that ensures your digital environment remains safe and functional.",
      issueCategories: [
        {
          title: "A Decade of Digital Guardianship",
          description:
            "With <strong>10 years of dedicated tech support services</strong>, ITSupport.net.in has built a reputation for excellence and unwavering commitment to client satisfaction. Our extensive experience means we've seen it all, and we know exactly how to counter even the most sophisticated cyber threats. We leverage our decade-long expertise to provide solutions that are not just reactive but truly preventative.",
        },
        {
          title: "10,000+ Customers, Global Trust",
          description:
            "Our success is measured by the trust of our clients. We are proud to have 10,000+ satisfied customers globally who rely on our expertise for their digital security needs. This global footprint and high satisfaction rate speak volumes about our effective solutions and customer-centric approach. We don't just fix problems; we build long-term relationships based on reliability and peace of mind.",
        },
      ],
    },
    issuecategory3: {
      title: "Our Comprehensive Antivirus Support Services",
      subTitle:
        "ITSupport.net.in offers a full spectrum of antivirus support services designed to cover every aspect of your digital defense.",
      issueCategories: [
        {
          title: "Antivirus Installation & Configuration",
          description:
            "Installing antivirus software correctly is the first critical step.",
        },
        {
          title: "Expert Setup for Optimal Performance",
          description:
            "Our technicians ensure your chosen antivirus software is installed flawlessly, preventing conflicts with existing programs.",
        },
        {
          title: "Tailored to Your Needs",
          description:
            "We configure settings to match your specific usage patterns and security requirements, maximizing protection without hindering performance.",
        },
        {
          title: "Virus, Malware, & Spyware Removal",
          description:
            "When a threat breaches your defenses, swift and thorough action is vital.",
        },
        {
          title: "Deep Scans & Thorough Disinfection",
          description:
            "We perform comprehensive scans to detect all forms of malicious software, including hidden threats, and meticulously remove them from your system.",
        },

        {
          title: "Data Protection During Removal",
          description:
            "Our priority is to eliminate threats without compromising your valuable data. We take every precaution to ensure data integrity during the cleanup process.",
        },
        {
          title: "Regular Updates & Proactive Monitoring",
          description:
            "Staying ahead of cybercriminals requires constant vigilance.",
        },
        {
          title: "Staying Ahead of New Threats",
          description:
            "We ensure your antivirus software is always updated with the latest virus definitions and security patches, offering real-time protection against emerging threats.",
        },
        {
          title: "Performance Optimization",
          description:
            "We optimize your antivirus settings to run efficiently, ensuring it provides maximum protection without slowing down your system.",
        },
        {
          title: "Firewall & Network Security Setup",
          description:
            "Your network is the gateway to your devices; securing it is paramount.",
        },
        {
          title: "Strengthening Your Digital Perimeter",
          description:
            "We help set up and configure robust firewalls and network security protocols to prevent unauthorized access and protect your entire network from external threats.",
        },
        {
          title: "Data Backup & Recovery Assistance",
          description:
            "In the worst-case scenario, having a backup is your ultimate safety net.",
        },
        {
          title: "Protecting Your Priceless Information",
          description:
            "While preventing infections is our goal, we also provide guidance and assistance with data backup strategies, ensuring your critical files can be restored if a disaster strikes.",
        },
        {
          title: "24/7 Remote Tech Support",
          description:
            "Digital threats don't adhere to business hours, and neither do we.",
        },
        {
          title: "Help Whenever You Need It",
          description:
            "Our expert technicians are available round-the-clock, providing instant remote support for any antivirus-related issue, ensuring minimal downtime and continuous protection.",
        },
      ],
    },
    issuecategory4: {
      title: "The ITSupport.net.in Advantage",
      subTitle:
        "Choosing ITSupport.net.in means opting for expertise, reliability, and peace of mind.",
      issueCategories: [
        {
          title: "Certified & Experienced Technicians",
          description:
            "Our team comprises highly skilled and certified professionals with deep knowledge of cybersecurity threats and solutions. They are continuously trained on the latest industry best practices.",
        },
        {
          title: "Certified & Experienced Technicians",
          description:
            "Your security and satisfaction are our top priorities. We offer personalized service, clear communication, and tailored solutions to meet your unique needs. We believe in educating our clients, not just fixing their problems.",
        },
        {
          title: "Affordable & Transparent Pricing",
          description:
            "We provide premium antivirus support services at competitive and transparent prices, with no hidden fees. Quality protection shouldn't break the bank. <br /> Don't leave your digital security to chance. Partner with ITSupport.net.in today and experience the confidence that comes with truly secure systems.",
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
        label:
          "What types of threats can ITSupport.net.in's antivirus support services protect me from?",
        desc: "Our services provide comprehensive protection against a wide array of cyber threats, including viruses, malware, ransomware, spyware, adware, phishing attacks, and rootkits. We ensure your systems are guarded against both known and emerging threats that can compromise your data and system performance.",
        expanded: true,
      },
      {
        label:
          "Why do I need professional antivirus support if I already have antivirus software installed?",
        desc: "While basic antivirus software is a start, professional support from ITSupport.net.in ensures optimal configuration, regular updates, deep threat removal, and proactive monitoring. We go beyond basic installation to truly harden your digital defenses, resolve complex infections that standard scans miss, and offer expert guidance to prevent future attacks, maximizing your software's effectiveness.",
        expanded: false,
      },
      {
        label:
          "Do you provide support for all major antivirus brands and operating systems?",
        desc: "Yes, our certified technicians are highly experienced in providing support for virtually all leading antivirus brands (e.g., Norton, McAfee, Bitdefender, Avast, Kaspersky, AVG) and across various operating systems, including Windows, macOS, Android, and iOS. We ensure seamless integration and troubleshooting, regardless of your chosen security solution.",
        expanded: false,
      },
      {
        label:
          "What happens if my system is already infected with a virus or malware?",
        desc: "If your system is already compromised, our first priority is to isolate the infection to prevent further spread. We then perform deep scans and thorough disinfection, meticulously removing all malicious software. Our process focuses on complete eradication while minimizing data loss and restoring your system to optimal, secure working condition.",
        expanded: false,
      },
      {
        label:
          "How do you ensure my antivirus protection remains effective against new and emerging threats?",
        desc: "The cyber threat landscape is constantly evolving. We ensure your protection remains effective through regular updates of virus definitions and software patches. We also provide guidance on proactive security practices, such as safe Browse habits, firewall management, and timely software updates, to continuously strengthen your digital perimeter against the latest threats.",
        expanded: false,
      },
    ],
  },
  {
    slug: "printer-support-services",
    title: "Printer Support",
    subtitle:
      "At ITSupport.net.in, we understand that a smoothly functioning printer is crucial for both homes and businesses. For over 10 years, we have been proudly serving over 10,000 customers globally, providing reliable and comprehensive printer support services. Our extensive experience ensures that we can quickly diagnose and resolve a wide array of printer issues, minimizing your downtime and maximizing your productivity.",
    heroImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "Common Printer Issues We Resolve",
      subheadline: "",
      description:
        "Printers, while essential, can often be a source of frustration. From minor glitches to major malfunctions, our expert technicians are equipped to handle it all. Here’s a breakdown of common problems we frequently encounter and effectively resolve:",
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
      title: "Issues that we resolve",
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

export const serviceDetailDataEs: Service[] = [
  {
    slug: "soporte-remoto-de-ti",
    title: "Soporte de Copia de Seguridad de Datos",
    subtitle: "Soluciones de respaldo automatizadas y seguras",
    heroImage:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "Servicios confiables de copia de seguridad de datos",
      subheadline: "Proteja los datos críticos de su empresa",
      description:
        "Nuestros servicios de respaldo de datos garantizan que sus archivos y datos empresariales críticos permanezcan seguros y recuperables en caso de emergencia. Utilizamos soluciones líderes en la industria para automatizar, monitorear y restaurar sus datos.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "¿Por qué elegir nuestro respaldo de datos?",
      services: [
        {
          icon: "<svg>...</svg>",
          title: "Respaldos automatizados",
          description: "Olvídese de los respaldos manuales.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Almacenamiento híbrido",
          description: "Opciones en la nube y local para máxima seguridad.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Recuperación ante desastres",
          description: "Restauración rápida en caso de emergencia.",
        },
      ],
    },
    issuecategory: {
      title: "Problemas comunes de respaldo de datos",
      subTitle: "Resolvemos fallos de respaldo, restauraciones lentas y más.",
      issueCategories: [
        {
          title: "Fallos de respaldo",
          description: "Respaldos automáticos o manuales que no se completan.",
          issues: [
            {
              title: "El respaldo programado no se ejecuta",
              problemDescription:
                "Los respaldos no se activan según lo programado por problemas de software o permisos.",
              solution:
                "Revisamos los registros de respaldo, permisos y reconfiguramos los horarios.",
            },
          ],
        },
      ],
    },
    description:
      "Nuestros servicios de respaldo de datos garantizan que sus archivos y datos empresariales críticos permanezcan seguros y recuperables en caso de emergencia.",
    features: [
      "Respaldos diarios y semanales automatizados",
      "Soluciones híbridas en la nube y locales",
      "Asistencia rápida en recuperación ante desastres",
    ],
    faqs: [
      {
        label:
          "¿Por qué necesito servicios profesionales de respaldo de datos?",
        desc: "El respaldo profesional asegura que sus archivos importantes estén protegidos contra fallos de hardware, ciberataques y eliminación accidental.",
        expanded: false,
      },
      {
        label: "¿Pueden recuperar datos después de un fallo del sistema?",
        desc: "Sí, nuestras soluciones de recuperación ante desastres ayudan a restaurar sus archivos rápidamente tras un fallo.",
        expanded: false,
      },
    ],
  },
  {
    slug: "soporte-presencial",
    title: "Soporte Antivirus",
    subtitle: "Manténgase protegido contra amenazas en línea",
    heroImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "Soluciones antivirus integrales",
      subheadline: "Proteja sus dispositivos contra malware",
      description:
        "Manténgase protegido contra virus, malware y amenazas en línea con nuestros servicios confiables de instalación y soporte antivirus.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Nuestros servicios antivirus",
      services: [
        {
          icon: "<svg>...</svg>",
          title: "Protección en tiempo real",
          description: "Monitoreo continuo de amenazas.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Soporte para múltiples dispositivos",
          description: "Proteja todos sus dispositivos.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Eliminación experta",
          description: "Eliminamos incluso el malware más difícil.",
        },
      ],
    },
    issuecategory: {
      title: "Problemas comunes de antivirus",
      subTitle:
        "Resolvemos problemas de instalación, actualización y detección.",
      issueCategories: [
        {
          title: "Problemas de instalación",
          description: "El antivirus no se instala o activa.",
          issues: [
            {
              title: "Fallo de activación",
              problemDescription:
                "La clave de licencia no es aceptada o está vencida.",
              solution:
                "Verificamos su licencia y reinstalamos si es necesario.",
            },
          ],
        },
      ],
    },
    description:
      "Manténgase protegido contra virus, malware y amenazas en línea con nuestros servicios confiables de instalación y soporte antivirus.",
    features: [
      "Configuración e instalación de software antivirus",
      "Monitoreo y eliminación de amenazas en tiempo real",
      "Actualizaciones regulares para máxima seguridad",
    ],
    faqs: [
      {
        label: "¿Qué marcas de antivirus soportan?",
        desc: "Soportamos soluciones populares como Norton, McAfee, Kaspersky, Avast y más.",
        expanded: false,
      },
      {
        label: "¿Ofrecen actualizaciones regulares de antivirus?",
        desc: "Sí, aseguramos que su antivirus esté actualizado regularmente para la mejor protección.",
        expanded: false,
      },
    ],
  },
  {
    slug: "mesa-de-ayuda-24-7",
    title: "Soporte de Impresoras",
    subtitle:
      "Reparación de impresoras en sitio y remota • Soluciones de impresión gestionadas",
    heroImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "Servicios expertos de soporte de impresoras por ",
      subheadline:
        "Su socio de confianza para impresiones perfectas por más de una década",
      description:
        "En ITSupport.net.in, entendemos que una impresora funcionando correctamente es crucial tanto para hogares como empresas. Por más de 10 años, hemos atendido con orgullo a más de 10,000 clientes globalmente, brindando servicios confiables y completos de soporte de impresoras. Nuestra amplia experiencia garantiza que podamos diagnosticar y resolver rápidamente una gran variedad de problemas, minimizando su tiempo de inactividad y maximizando su productividad.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Nuestros servicios integrales de soporte de impresoras",
      services: [
        {
          icon: "<svg>...</svg>",
          title: "Soporte integral",
          description:
            "Soluciones expertas para todas las marcas y modelos de impresoras",
        },
        {
          icon: "<svg>...</svg>",
          title: "Tiempo de respuesta rápido",
          description: "Diagnóstico rápido y resolución eficiente de problemas",
        },
        {
          icon: "<svg>...</svg>",
          title: "Técnicos certificados",
          description: "Profesionales capacitados con años de experiencia",
        },
      ],
    },
    issuecategory: {
      title: "Problemas comunes de impresoras que resolvemos",
      subTitle:
        "Las impresoras, aunque esenciales, pueden ser fuente de frustración. Desde fallos menores hasta grandes averías, nuestros técnicos expertos están preparados para todo. Aquí un resumen de los problemas más comunes que resolvemos eficazmente.",
      issueCategories: [
        {
          title: "Problemas de conectividad",
          description:
            "Uno de los problemas más frecuentes es lograr que la impresora se conecte correctamente a la computadora o red.",
          issues: [
            {
              title: "Impresora inalámbrica no se conecta",
              problemDescription:
                "Su impresora inalámbrica aparece como fuera de línea, no se une a la red Wi-Fi o pierde conexión intermitentemente. Puede deberse a configuraciones incorrectas, interferencias, drivers desactualizados o problemas con el router.",
              solution:
                "Solucionamos la configuración de red, actualizamos el firmware, verificamos la IP y resolvemos conflictos de conectividad.",
            },
            {
              title: "Impresora USB no reconocida",
              problemDescription:
                "Al conectar la impresora USB, la computadora no la detecta o aparece como 'dispositivo desconocido'. Suele ser por cables defectuosos, puertos dañados o drivers faltantes/corruptos.",
              solution:
                "Verificamos los cables, probamos los puertos USB, reinstalamos o actualizamos los drivers necesarios y resolvemos conflictos.",
            },
          ],
        },
        {
          title: "Problemas de calidad de impresión",
          description:
            "Nada es más frustrante que un documento con rayas, texto desvanecido o colores incorrectos.",
          issues: [
            {
              title: "Rayas, líneas y impresiones desvanecidas",
              problemDescription:
                "Las páginas impresas tienen líneas horizontales/verticales, rayas de tinta o aparecen desvanecidas. Suele ser por cabezales obstruidos, bajo nivel de tóner, rodillos sucios o problemas con la unidad de tambor.",
              solution:
                "Realizamos limpieza/alineación de cabezales, revisamos niveles de tinta/tóner, limpiamos componentes internos y reemplazamos consumibles defectuosos.",
            },
            {
              title: "Colores incorrectos o manchas",
              problemDescription:
                "Los colores no coinciden con la pantalla o hay manchas de tinta/tóner. Puede deberse a calibración incorrecta, cartuchos incompatibles o cabezales/fusores dañados.",
              solution:
                "Recalibramos los colores, aseguramos el uso de cartuchos genuinos y solucionamos daños físicos.",
            },
          ],
        },
        {
          title: "Problemas de manejo de papel",
          description:
            "Los atascos de papel son frustrantes, pero no son el único problema relacionado.",
          issues: [
            {
              title: "Atascos de papel constantes",
              problemDescription:
                "La impresora reporta atascos aunque no haya papel visible, o se atasca físicamente al alimentar. Puede ser por bandejas mal alineadas, rodillos desgastados, papel incorrecto o residuos internos.",
              solution:
                "Inspeccionamos el recorrido del papel, limpiamos y alineamos rodillos, verificamos la carga y recomendamos el tipo de papel adecuado.",
            },
            {
              title: "El papel no se alimenta correctamente",
              problemDescription:
                "La impresora no toma el papel o toma varias hojas a la vez. Suele ser por rodillos desgastados, problemas con la bandeja o humedad en el papel.",
              solution:
                "Limpiamos o reemplazamos rodillos y asesoramos sobre almacenamiento y carga de papel.",
            },
          ],
        },
        {
          title: "Problemas de software y drivers",
          description:
            "Las impresoras dependen de software y drivers correctos para comunicarse con la computadora.",
          issues: [
            {
              title: "Errores de instalación de drivers",
              problemDescription:
                "No puede instalar el driver o se instala incorrectamente, impidiendo la impresión. Puede ser por archivos corruptos, conflictos de sistema operativo o restos de instalaciones previas.",
              solution:
                "Eliminamos drivers antiguos, instalamos los correctos y resolvemos conflictos de software.",
            },
            {
              title: "Estado fuera de línea de la impresora",
              problemDescription:
                'La impresora aparece como "fuera de línea" aunque esté encendida y conectada. Puede ser por drivers, problemas de red o configuración incorrecta del puerto.',
              solution:
                "Reconfiguramos los puertos, actualizamos/reinstalamos drivers y solucionamos la conectividad.",
            },
          ],
        },
        {
          title: "Rendimiento y mensajes de error",
          description:
            "Impresión lenta o mensajes de error pueden detener su trabajo.",
          issues: [
            {
              title: "Impresión extremadamente lenta",
              problemDescription:
                "La impresora tarda mucho en imprimir incluso documentos simples. Puede ser por calidad alta, disco fragmentado, poca RAM o congestión de red.",
              solution:
                "Optimizamos la configuración, limpiamos la cola de impresión y recomendamos mejoras.",
            },
            {
              title: "Códigos de error misteriosos",
              problemDescription:
                "La impresora muestra códigos alfanuméricos sin explicación, impidiendo su uso.",
              solution:
                "Interpretamos los mensajes, solucionamos el fallo y realizamos reparaciones o reinicios necesarios.",
            },
          ],
        },
      ],
    },
    faqs: [
      {
        label: "¿Por qué mi impresora no imprime aunque esté encendida?",
        desc: "Puede deberse a problemas de conectividad (Wi-Fi/USB), bandejas vacías, poca tinta/tóner, cola de impresión pausada o estado 'fuera de línea'.",
        expanded: false,
      },
      {
        label: "¿Cómo soluciono un atasco de papel si no hay papel visible?",
        desc: "A menudo hay pequeños trozos de papel o residuos. Apague la impresora, desconéctela y revise todas las áreas accesibles con una linterna.",
        expanded: false,
      },
      {
        label:
          "Mi impresora inalámbrica no se conecta a la nueva red Wi-Fi. ¿Qué hago?",
        desc: "Debe poner la impresora en modo configuración y conectarla a la nueva red, ingresando la contraseña. Consulte el manual para pasos específicos.",
        expanded: false,
      },
      {
        label: "¿Por qué mis impresiones salen desvanecidas o con rayas?",
        desc: "En impresoras de inyección suele ser por cabezales obstruidos o poca tinta. En láser, por bajo tóner o problemas con el tambor. Limpiar cabezales o cambiar cartuchos suele resolverlo.",
        expanded: false,
      },
      {
        label:
          "¿Con qué frecuencia debo actualizar los drivers de la impresora?",
        desc: "Actualice los drivers si tiene problemas, instala un nuevo sistema operativo o hay actualizaciones importantes. Si funciona bien, no es necesario hacerlo frecuentemente.",
        expanded: false,
      },
      {
        label:
          "¿ITSupport.net.in puede ayudar con todas las marcas de impresoras?",
        desc: "Sí, nuestros técnicos tienen experiencia con HP, Epson, Canon, Brother, Lexmark, Samsung y más.",
        expanded: false,
      },
      {
        label: '¿Qué significa que mi impresora esté "fuera de línea"?',
        desc: "Significa que la computadora no se comunica con la impresora. Puede ser por problemas de conexión, configuración o drivers.",
        expanded: false,
      },
      {
        label: "¿Es mejor usar cartuchos originales o compatibles?",
        desc: "Los compatibles pueden ser más baratos, pero los originales ofrecen mejor calidad y fiabilidad, y no suelen anular la garantía.",
        expanded: false,
      },
      {
        label: "¿Cómo limpio la cola de impresión en mi computadora?",
        desc: 'Vaya a "Dispositivos e impresoras" (Windows) o "Impresoras y escáneres" (Mac), haga doble clic en la impresora y seleccione "Abrir cola de impresión" para cancelar los documentos.',
        expanded: false,
      },
      {
        label: "¿Ofrecen soporte remoto para impresoras?",
        desc: "Sí, gran parte del soporte puede ser remoto para diagnosticar y solucionar problemas de software, drivers y conectividad.",
        expanded: false,
      },
    ],
  },
  {
    slug: "soporte-de-red-wifi",
    title: "Soporte de Redes",
    subtitle: "Soluciones de red rápidas, seguras y confiables",
    heroImage:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "Soporte experto de redes para hogar y empresa",
      subheadline: "Manténgase conectado y productivo",
      description:
        "Nuestros expertos en redes garantizan conexiones rápidas, seguras y confiables para su oficina o hogar. Diseñamos, instalamos y mantenemos infraestructuras robustas para que su negocio funcione sin problemas.",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "¿Por qué elegir nuestro soporte de redes?",
      services: [
        {
          icon: "<svg>...</svg>",
          title: "Configuración de LAN y Wi-Fi",
          description:
            "Instalación y configuración profesional para conectividad sin interrupciones.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Optimización de rendimiento",
          description:
            "Identificamos y resolvemos cuellos de botella para máxima velocidad.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Monitoreo de seguridad",
          description: "Monitoreo continuo para proteger su red de amenazas.",
        },
      ],
    },
    issuecategory: {
      title: "Problemas comunes de red que resolvemos",
      subTitle:
        "Desde velocidades lentas hasta amenazas de seguridad, resolvemos todos sus desafíos de red.",
      issueCategories: [
        {
          title: "Problemas de conectividad",
          description: "Problemas al conectar dispositivos a la red.",
          issues: [
            {
              title: "Cortes frecuentes de Wi-Fi",
              problemDescription:
                "Los dispositivos pierden conexión o sufren cortes intermitentes.",
              solution:
                "Optimizamos la ubicación del router, actualizamos el firmware y reducimos interferencias.",
            },
            {
              title: "Ethernet no funciona",
              problemDescription:
                "Los dispositivos cableados no acceden a la red.",
              solution:
                "Verificamos cables, puertos de switch y configuración del adaptador.",
            },
          ],
        },
        {
          title: "Rendimiento lento de la red",
          description: "La red está lenta o no responde.",
          issues: [
            {
              title: "Internet lento",
              problemDescription: "Las webs y apps en la nube cargan despacio.",
              solution:
                "Diagnosticamos el uso de ancho de banda, optimizamos QoS y recomendamos mejoras.",
            },
            {
              title: "Retrasos en videollamadas o streaming",
              problemDescription:
                "Las videollamadas se congelan o hay buffering.",
              solution:
                "Priorizamos el tráfico y aseguramos conexiones estables para apps críticas.",
            },
          ],
        },
        {
          title: "Problemas de seguridad",
          description: "Proteja su red de accesos no autorizados.",
          issues: [
            {
              title: "Wi-Fi no seguro",
              problemDescription: "La red está abierta o usa cifrado débil.",
              solution: "Configuramos WPA3 y contraseñas fuertes.",
            },
            {
              title: "Dispositivos desconocidos en la red",
              problemDescription:
                "Aparecen dispositivos no reconocidos en su red.",
              solution:
                "Auditamos los dispositivos conectados y bloqueamos accesos no autorizados.",
            },
          ],
        },
      ],
    },
    description:
      "Nuestros expertos en redes garantizan conexiones rápidas, seguras y confiables para su oficina o hogar.",
    features: [
      "Configuración de LAN y Wi-Fi",
      "Optimización del rendimiento de la red",
      "Monitoreo de firewall y seguridad",
    ],
    faqs: [
      {
        label: "¿Pueden optimizar velocidades lentas de internet?",
        desc: "Sí, identificamos cuellos de botella y optimizamos su red para mayor velocidad y estabilidad.",
        expanded: false,
      },
      {
        label: "¿Ofrecen configuración de redes seguras?",
        desc: "Por supuesto, configuramos firewalls y cifrado para proteger su red.",
        expanded: false,
      },
    ],
  },
  {
    slug: "servicios-de-soporte-de-antivirus",
    title: "Soporte en la Nube",
    subtitle: "Integración y soporte en la nube sin interrupciones",
    heroImage:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "Desbloquea el poder de la nube",
      subheadline: "Soluciones en la nube flexibles, seguras y escalables",
      description:
        "Desbloquea el poder de la nube con nuestros servicios personalizados de soporte para almacenamiento, colaboración y seguridad. Te ayudamos a migrar, gestionar y optimizar tu entorno en la nube para máxima eficiencia.",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Nuestros servicios de soporte en la nube",
      services: [
        {
          icon: "<svg>...</svg>",
          title: "Migración a la nube",
          description:
            "Migración sin interrupciones de tus datos y aplicaciones a la nube.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Sincronización de datos",
          description:
            "Mantén tus archivos actualizados y accesibles en todos los dispositivos.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Respaldo seguro",
          description:
            "Respaldos automatizados y cifrados para tu tranquilidad.",
        },
      ],
    },
    issuecategory: {
      title: "Problemas comunes en la nube que resolvemos",
      subTitle:
        "Te ayudamos a superar desafíos de migración, acceso y seguridad.",
      issueCategories: [
        {
          title: "Desafíos de migración",
          description: "Dificultades al mover datos y aplicaciones a la nube.",
          issues: [
            {
              title: "Pérdida de datos durante la migración",
              problemDescription:
                "Algunos archivos o correos faltan después de la migración.",
              solution:
                "Verificamos la integridad de los datos y migramos nuevamente los elementos faltantes.",
            },
            {
              title: "Tiempo de inactividad durante la migración",
              problemDescription:
                "Las operaciones se interrumpen durante la migración.",
              solution:
                "Planificamos migraciones fuera de horario y minimizamos el tiempo de inactividad.",
            },
          ],
        },
        {
          title: "Problemas de acceso y sincronización",
          description: "Problemas al acceder o sincronizar datos en la nube.",
          issues: [
            {
              title: "Archivos no se sincronizan",
              problemDescription:
                "Los cambios realizados en un dispositivo no aparecen en otros.",
              solution:
                "Solucionamos la configuración de sincronización y resolvemos conflictos.",
            },
            {
              title: "Errores de permisos",
              problemDescription:
                "Los usuarios no pueden acceder a carpetas o archivos compartidos.",
              solution:
                "Revisamos y actualizamos la configuración de permisos y compartición.",
            },
          ],
        },
        {
          title: "Seguridad y cumplimiento",
          description:
            "Asegurando que tus datos en la nube estén seguros y cumplan normativas.",
          issues: [
            {
              title: "Acceso no autorizado",
              problemDescription:
                "Se detectan inicios de sesión sospechosos o brechas de datos.",
              solution:
                "Activamos autenticación multifactor y monitoreamos registros de acceso.",
            },
            {
              title: "Preocupaciones de privacidad de datos",
              problemDescription:
                "Dudas sobre dónde y cómo se almacenan los datos.",
              solution:
                "Configuramos residencia de datos y ajustes de cumplimiento.",
            },
          ],
        },
      ],
    },
    description:
      "Desbloquea el poder de la nube con nuestros servicios personalizados de soporte para almacenamiento, colaboración y seguridad.",
    features: [
      "Asistencia en migración y configuración en la nube",
      "Sincronización de datos entre dispositivos",
      "Opciones de respaldo y almacenamiento seguro en la nube",
    ],
    faqs: [
      {
        label: "¿Qué proveedores de nube soportan?",
        desc: "Trabajamos con AWS, Google Cloud, Microsoft Azure y otras plataformas.",
        expanded: false,
      },
      {
        label: "¿Pueden migrar mis datos existentes a la nube?",
        desc: "Sí, ofrecemos servicios de migración a la nube sin interrupciones y de forma segura.",
        expanded: false,
      },
    ],
  },
  {
    slug: "servicios-de-soporte-en-la-nube",
    title: "Soporte para E-Commerce",
    subtitle: "Mejora el rendimiento y la seguridad de tu tienda online",
    heroImage:
      "https://images.unsplash.com/photo-1515168833906-d2a3b82b3027?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "Soporte experto de e-commerce para todas las plataformas",
      subheadline: "Haz crecer tu negocio online con confianza",
      description:
        "Nuestros servicios de soporte para e-commerce te ayudan a lanzar, gestionar y asegurar tu tienda online. Desde la configuración de la plataforma hasta la integración de pagos y el mantenimiento continuo, aseguramos que tu negocio funcione de manera fluida y segura.",
      image:
        "https://images.unsplash.com/photo-1515168833906-d2a3b82b3027?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "¿Por qué elegir nuestro soporte de e-commerce?",
      services: [
        {
          icon: "<svg>...</svg>",
          title: "Experiencia en plataformas",
          description: "Soporte para Shopify, WooCommerce, Magento y más.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Integración de pagos",
          description:
            "Configuración de pasarelas de pago segura y sin problemas.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Seguridad y disponibilidad",
          description: "Monitoreo continuo para compras seguras y confiables.",
        },
      ],
    },
    issuecategory: {
      title: "Problemas comunes de e-commerce que resolvemos",
      subTitle:
        "Desde la configuración hasta la seguridad, resolvemos todos tus desafíos de e-commerce.",
      issueCategories: [
        {
          title: "Configuración y lanzamiento de la tienda",
          description:
            "Dificultades para poner tu tienda en línea o configurar productos.",
          issues: [
            {
              title: "Conflictos de temas o plugins",
              problemDescription:
                "El diseño de la tienda se rompe o las funciones dejan de funcionar tras instalar nuevos temas o plugins.",
              solution:
                "Solucionamos, actualizamos o reemplazamos plugins y temas conflictivos.",
            },
            {
              title: "Errores al subir productos",
              problemDescription:
                "Los productos no se suben o se muestran incorrectamente.",
              solution:
                "Verificamos formatos de datos, corregimos scripts de subida y aseguramos la configuración adecuada.",
            },
          ],
        },
        {
          title: "Problemas de pago y checkout",
          description: "Problemas con pasarelas de pago o abandono de carrito.",
          issues: [
            {
              title: "La pasarela de pago no funciona",
              problemDescription:
                "Los clientes no pueden completar compras por errores de pago.",
              solution:
                "Verificamos credenciales, actualizamos plugins y resolvemos problemas de integración.",
            },
            {
              title: "Alto abandono de carrito",
              problemDescription:
                "Muchos clientes abandonan sin finalizar la compra.",
              solution:
                "Optimizamos el flujo de checkout y resolvemos barreras técnicas o de experiencia de usuario.",
            },
          ],
        },
        {
          title: "Seguridad y rendimiento",
          description: "Protege tu tienda y mantenla rápida.",
          issues: [
            {
              title: "Tienda hackeada o comprometida",
              problemDescription:
                "Se detecta malware o cambios no autorizados en tu tienda.",
              solution:
                "Eliminamos malware, restauramos respaldos y reforzamos la seguridad.",
            },
            {
              title: "Carga lenta de la tienda",
              problemDescription:
                "Las páginas tardan mucho en cargar, afectando las ventas.",
              solution:
                "Optimizamos imágenes, código y hosting para mayor velocidad.",
            },
          ],
        },
      ],
    },
    description:
      "Mejora el rendimiento de tu tienda online con nuestro soporte experto en plataformas, pagos y seguridad.",
    features: [
      "Configuración y puesta en marcha de la tienda",
      "Integración de pasarelas de pago",
      "Monitoreo de seguridad y disponibilidad",
    ],
    faqs: [
      {
        label: "¿Soportan todas las plataformas de e-commerce?",
        desc: "Sí, damos soporte a Shopify, WooCommerce, Magento y otras plataformas.",
        expanded: false,
      },
      {
        label: "¿Pueden ayudar con problemas de pasarelas de pago?",
        desc: "Sí, ofrecemos configuración y solución de problemas para pagos en línea seguros.",
        expanded: false,
      },
    ],
  },
  {
    slug: "servicios-de-soporte-para-reparación-de-hardware",
    title: "Soporte de Reparación de Hardware",
    subtitle: "Reparaciones de hardware de TI rápidas y confiables",
    heroImage:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline:
        "Reparación profesional de hardware para todos los dispositivos",
      subheadline:
        "Minimice el tiempo de inactividad, maximice la productividad",
      description:
        "Ofrecemos servicios rápidos y confiables de reparación para computadoras de escritorio, portátiles y hardware de TI. Nuestros técnicos certificados diagnostican y solucionan problemas rápidamente para que pueda volver a trabajar con mínima interrupción.",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "¿Por qué elegir nuestro servicio de reparación de hardware?",
      services: [
        {
          icon: "<svg>...</svg>",
          title: "Todas las marcas principales",
          description: "Reparaciones para Dell, HP, Lenovo, Apple y más.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Entrega rápida",
          description:
            "La mayoría de las reparaciones se completan en 24–48 horas.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Mantenimiento preventivo",
          description:
            "Actualizaciones y mantenimiento para evitar problemas futuros.",
        },
      ],
    },
    issuecategory: {
      title: "Problemas comunes de hardware que resolvemos",
      subTitle:
        "Desde pantallas rotas hasta discos fallando, lo arreglamos todo.",
      issueCategories: [
        {
          title: "Problemas de inicio y energía",
          description:
            "Los dispositivos no encienden o se apagan aleatoriamente.",
          issues: [
            {
              title: "Sin energía o falla de arranque",
              problemDescription:
                "El dispositivo no enciende o se queda atascado al iniciar.",
              solution:
                "Revisamos la fuente de poder, la placa madre y reemplazamos componentes defectuosos.",
            },
            {
              title: "Apagados aleatorios",
              problemDescription: "La computadora se apaga inesperadamente.",
              solution:
                "Verificamos sobrecalentamiento, ventiladores y problemas de energía.",
            },
          ],
        },
        {
          title: "Rendimiento y almacenamiento",
          description: "Computadoras lentas o fallas de almacenamiento.",
          issues: [
            {
              title: "Rendimiento lento",
              problemDescription: "La computadora está lenta o no responde.",
              solution:
                "Actualizamos la RAM, reemplazamos discos duros y eliminamos malware.",
            },
            {
              title: "Falla de disco duro",
              problemDescription:
                "Pérdida de datos o ruidos extraños en el disco.",
              solution: "Recuperamos datos y reemplazamos discos defectuosos.",
            },
          ],
        },
        {
          title: "Problemas de pantalla y periféricos",
          description: "Problemas con pantallas, teclados u otros periféricos.",
          issues: [
            {
              title: "Pantalla rota",
              problemDescription:
                "La pantalla del portátil o monitor está rota o no muestra imagen.",
              solution: "Reemplazamos pantallas y probamos conexiones.",
            },
            {
              title: "Teclado/ratón no funciona",
              problemDescription: "Los dispositivos de entrada no responden.",
              solution: "Reparamos o reemplazamos periféricos defectuosos.",
            },
          ],
        },
      ],
    },
    description:
      "Ofrecemos servicios rápidos y confiables de reparación para computadoras de escritorio, portátiles y hardware de TI para minimizar el tiempo de inactividad.",
    features: [
      "Diagnóstico y reparación de problemas de hardware",
      "Reemplazo de componentes defectuosos",
      "Mantenimiento preventivo y actualizaciones",
    ],
    faqs: [
      {
        label: "¿Reparan todas las marcas de computadoras?",
        desc: "Sí, damos servicio a Dell, HP, Lenovo, Apple y otras marcas principales.",
        expanded: false,
      },
      {
        label: "¿Cuánto tiempo tarda normalmente una reparación de hardware?",
        desc: "La mayoría de las reparaciones se completan en 24–48 horas, según el problema.",
        expanded: false,
      },
    ],
  },
  {
    slug: "servicios-gestionados-de-ti",
    title: "Soporte de Hosting y Dominio Web",
    subtitle: "Soluciones confiables de hosting y dominio",
    heroImage:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "Soporte profesional de hosting y dominio web",
      subheadline: "Ponga su sitio en línea, rápido y seguro",
      description:
        "Obtenga soporte profesional para hosting web, configuración de dominios y gestión eficiente de su sitio con nuestros servicios expertos. Garantizamos que su sitio esté siempre accesible, seguro y fácil de administrar.",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "¿Por qué elegir nuestro soporte de hosting y dominio?",
      services: [
        {
          icon: "<svg>...</svg>",
          title: "Gestión de dominios",
          description:
            "Compra, transferencia y configuración de dominios fácilmente.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Migración sin interrupciones",
          description:
            "Migración de sitios web y correo electrónico con mínima interrupción.",
        },
        {
          icon: "<svg>...</svg>",
          title: "SSL y seguridad",
          description:
            "Configuración de certificados SSL y monitoreo proactivo de seguridad.",
        },
      ],
    },
    issuecategory: {
      title: "Problemas comunes de hosting y dominio que resolvemos",
      subTitle:
        "Desde errores de DNS hasta migraciones complicadas, lo manejamos todo.",
      issueCategories: [
        {
          title: "Problemas de dominio y DNS",
          description: "Problemas con la configuración de dominio o DNS.",
          issues: [
            {
              title: "El dominio no resuelve",
              problemDescription:
                "Su sitio web no carga por errores de DNS o mala configuración.",
              solution:
                "Revisamos los registros DNS, actualizamos los servidores de nombres y aseguramos la propagación correcta.",
            },
            {
              title: "Correo no funciona tras cambio de dominio",
              problemDescription:
                "El correo deja de funcionar tras transferir el dominio o actualizar DNS.",
              solution:
                "Actualizamos los registros MX y verificamos la configuración de enrutamiento de correo.",
            },
          ],
        },
        {
          title: "Problemas de hosting y migración",
          description: "Dificultades al mover o gestionar su sitio web.",
          issues: [
            {
              title: "Tiempo de inactividad en migración",
              problemDescription:
                "El sitio está fuera de línea durante la migración.",
              solution:
                "Planificamos migraciones en horas de baja actividad y aseguramos una transición fluida.",
            },
            {
              title: "Errores de certificado SSL",
              problemDescription:
                "El navegador muestra advertencias de seguridad por problemas de SSL.",
              solution:
                "Instalamos y renovamos certificados SSL y corregimos errores de contenido mixto.",
            },
          ],
        },
      ],
    },
    description:
      "Obtenga soporte profesional para hosting web, configuración de dominios y gestión eficiente de su sitio con nuestros servicios expertos.",
    features: [
      "Compra de dominios y configuración de DNS",
      "Configuración y migración de hosting",
      "Configuración de correo electrónico y certificados SSL",
    ],
    faqs: [
      {
        label: "¿Pueden ayudarme a transferir mi dominio?",
        desc: "Sí, asistimos en transferencias de dominio y configuración de DNS.",
        expanded: false,
      },
      {
        label: "¿Ofrecen soporte para migración de sitios web?",
        desc: "Por supuesto, gestionamos migraciones de sitios con mínima interrupción.",
        expanded: false,
      },
    ],
  },
  {
    slug: "soporte-para-la-configuración-de-correo-electrónico",
    title: "Soporte para Configuración de Email",
    subtitle: "Configuración de correo electrónico empresarial y personal",
    heroImage:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "Soporte experto en configuración de email",
      subheadline: "Manténgase conectado con correo confiable",
      description:
        "Simplifique la configuración y gestión de su correo electrónico con nuestro soporte experto para cuentas empresariales y personales. Garantizamos que su email funcione perfectamente en todos sus dispositivos.",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "¿Por qué elegir nuestro soporte de email?",
      services: [
        {
          icon: "<svg>...</svg>",
          title: "Configuración en múltiples dispositivos",
          description:
            "Configure correo en computadoras, portátiles y dispositivos móviles.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Integración de email empresarial",
          description:
            "Configuración profesional de correo para empresas con dominios personalizados.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Spam y seguridad",
          description:
            "Filtrado avanzado de spam y configuración segura de email.",
        },
      ],
    },
    issuecategory: {
      title: "Problemas comunes de configuración de email que resolvemos",
      subTitle:
        "Desde errores de configuración hasta problemas de spam, lo solucionamos todo.",
      issueCategories: [
        {
          title: "Problemas de configuración",
          description:
            "Dificultades al configurar o sincronizar cuentas de correo.",
          issues: [
            {
              title: "No se puede agregar la cuenta de email",
              problemDescription:
                "No se puede agregar la cuenta en Outlook, Gmail o dispositivo móvil.",
              solution:
                "Verificamos la configuración del servidor, puertos y credenciales para una configuración exitosa.",
            },
            {
              title: "Los correos no se sincronizan",
              problemDescription:
                "Los emails no aparecen en todos los dispositivos.",
              solution:
                "Revisamos la configuración IMAP/POP y resolvemos conflictos de sincronización.",
            },
          ],
        },
        {
          title: "Seguridad y spam",
          description: "Problemas con spam o seguridad en el correo.",
          issues: [
            {
              title: "Recibo demasiado spam",
              problemDescription:
                "La bandeja de entrada está llena de correos no deseados.",
              solution:
                "Activamos filtros avanzados de spam y bloqueamos remitentes sospechosos.",
            },
            {
              title: "Alertas de inicio de sesión sospechoso",
              problemDescription:
                "El proveedor de correo advierte sobre accesos no autorizados.",
              solution:
                "Actualizamos contraseñas y activamos la autenticación en dos pasos.",
            },
          ],
        },
      ],
    },
    description:
      "Simplifique la configuración y gestión de su correo electrónico con nuestro soporte experto para cuentas empresariales y personales.",
    features: [
      "Configuración y gestión de cuentas de email",
      "Integración con Outlook, Gmail y más",
      "Filtrado de spam y configuración de seguridad",
    ],
    faqs: [
      {
        label: "¿Pueden configurar email en varios dispositivos?",
        desc: "Sí, configuramos cuentas de correo en computadoras, portátiles y móviles.",
        expanded: false,
      },
      {
        label: "¿Soportan configuraciones de email empresarial?",
        desc: "Sí, configuramos correo profesional para empresas con dominios personalizados.",
        expanded: false,
      },
    ],
  },
  {
    slug: "servicios-de-soporte-para-comercio-electrónico",
    title: "Soporte de Red Wi-Fi",
    subtitle: "Conectividad inalámbrica rápida y segura",
    heroImage:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "Soporte confiable para redes Wi-Fi",
      subheadline: "Manténgase conectado en cualquier lugar",
      description:
        "Asegure una conectividad inalámbrica rápida y confiable con nuestros servicios de soporte Wi-Fi para hogares y empresas. Optimizamos su red para velocidad, cobertura y seguridad.",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "¿Por qué elegir nuestro soporte Wi-Fi?",
      services: [
        {
          icon: "<svg>...</svg>",
          title: "Configuración y optimización de router",
          description:
            "Instalación y configuración profesional para máxima cobertura.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Aumento de señal",
          description: "Extensión de rango y eliminación de zonas muertas.",
        },
        {
          icon: "<svg>...</svg>",
          title: "Red segura",
          description: "Wi-Fi cifrado y configuración de contraseñas fuertes.",
        },
      ],
    },
    issuecategory: {
      title: "Problemas comunes de Wi-Fi que resolvemos",
      subTitle:
        "Desde señales débiles hasta riesgos de seguridad, solucionamos todos sus problemas de Wi-Fi.",
      issueCategories: [
        {
          title: "Problemas de cobertura y señal",
          description: "Dificultades con el alcance o zonas muertas de Wi-Fi.",
          issues: [
            {
              title: "Señal Wi-Fi débil",
              problemDescription:
                "La señal Wi-Fi es débil o se pierde en ciertas áreas.",
              solution:
                "Optimizamos la ubicación del router e instalamos extensores de rango.",
            },
            {
              title: "Zonas muertas",
              problemDescription:
                "No hay cobertura Wi-Fi en algunas habitaciones.",
              solution:
                "Agregamos sistemas mesh o puntos de acceso adicionales.",
            },
          ],
        },
        {
          title: "Seguridad y conectividad",
          description: "Problemas de seguridad o conexión de dispositivos.",
          issues: [
            {
              title: "Wi-Fi no seguro",
              problemDescription:
                "La red Wi-Fi está abierta o usa cifrado débil.",
              solution: "Configuramos WPA3 y contraseñas seguras.",
            },
            {
              title: "Los dispositivos no se conectan",
              problemDescription:
                "Algunos dispositivos no logran conectarse a Wi-Fi.",
              solution:
                "Solucionamos la configuración y actualizamos el firmware.",
            },
          ],
        },
      ],
    },
    description:
      "Asegure una conectividad inalámbrica rápida y confiable con nuestros servicios de soporte Wi-Fi para hogares y empresas.",
    features: [
      "Configuración y optimización de router Wi-Fi",
      "Aumento de señal y extensión de rango",
      "Configuración de red segura",
    ],
    faqs: [
      {
        label: "¿Pueden solucionar señales Wi-Fi débiles?",
        desc: "Sí, optimizamos la cobertura y ofrecemos soluciones como extensores de señal.",
        expanded: false,
      },
      {
        label: "¿Instalan redes Wi-Fi seguras?",
        desc: "Sí, configuramos Wi-Fi cifrado con contraseñas fuertes para proteger sus datos.",
        expanded: false,
      },
    ],
  },
];
