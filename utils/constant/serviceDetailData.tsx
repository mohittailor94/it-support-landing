import {
  Database,
  RotateCcw,
  ShieldCheck,
  Bug,
  Printer,
  Wrench,
  Wifi,
  Server,
  Cloud,
  ShoppingCart,
  Cpu,
  Globe,
  Mail,
} from "lucide-react";

export interface ServiceFAQ {
  label: string;
  desc: string;
  expanded?: boolean;
}

export interface WhyChooseCategory {
  svg: string | React.ReactNode; // SVG as string or ReactNode if you render directly
  title: string;
  desc: string;
}
export interface WhyChoose {
  title: string;
  desc: string;
  whyChoosecategories: WhyChooseCategory[];
}
export interface ServiceHighlight {
  icon: string | React.ReactNode; // SVG as string or ReactNode if you render directly
  title: string;
  description: string;
}

export interface SpecificIssue {
  title: string;
  type?: string;
  problemDescription?: string;
  solution?: string;
  options?: { title: string; desc: string }[];
}

export interface IssueCategory {
  title: string;
  description: string;
  bottomDesc?: string;
  issues?: SpecificIssue[];
}

export interface Service {
  slug?: string;
  title?: string;
  subtitle?: string;
  subtitle1?: string;
  heroImage?: string;
  heroRightSideIcons?: any[];
  intro?: {
    headline: string;
    subheadline: string;
    description: string;
    image?: string;
  };
  serviceHighlights?: {
    title: string;
    subTitle?: string;
    services: ServiceHighlight[];
  };
  issuecategory?: {
    title: string;
    subTitle: string;
    bottomDesc?: string;
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
  whyChoose?: WhyChoose;
  faqs?: ServiceFAQ[];
}

export const servicesDetailData: Service[] = [
  {
    slug: "best-data-backup-and-recovery-services",
    title: "Data Backup & Recovery Services",
    subtitle: "Backup & Recovery Support Services",
    subtitle1:
      "In the digital age, data is the lifeblood of every business and the repository of every personal memory. From critical business documents and financial records to cherished family photos and vital creative projects, your data represents invaluable assets. Yet, these assets are constantly vulnerable to loss from countless threats – hardware failures, human error, cyber-attacks, natural disasters, and software corruptions.",
    heroRightSideIcons: [
      <Database className="w-6 h-6 text-white" />,
      <RotateCcw className="w-6 h-6 text-white" />,
    ],
    heroImage:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "The Critical Importance of Data Backup & Recovery",
      subheadline: "",
      description:
        "Losing data can mean financial ruin for businesses, irreparable damage to personal history, and immense stress. At ITSupport.net.in, we understand the profound importance of your data. We offer comprehensive Data Backup & Recovery support services designed to protect your information, ensure business continuity, and provide ultimate peace of mind.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Why Choose Our Data Backup?",
      services: [
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M3 12a9 3 0 0 0 5 2.69"></path>
              <path d="M21 9.3V5"></path>
              <path d="M3 5v14a9 3 0 0 0 6.47 2.88"></path>
              <path d="M12 12v4h4"></path>
              <path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"></path>
            </svg>
          ),
          title: "Automated Backups",
          description: "Never worry about manual backups again.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path>
            </svg>
          ),
          title: "Hybrid Storage",
          description: "Cloud + local options for maximum safety.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M12 2v8"></path>
              <path d="m16 6-4 4-4-4"></path>
              <rect width="20" height="8" x="2" y="14" rx="2"></rect>
              <path d="M6 18h.01"></path>
              <path d="M10 18h.01"></path>
            </svg>
          ),
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
        desc: "Our services are designed to protect you from a wide range of data loss scenarios, including <strong>hardware failures</strong> (e.g., hard drive crashes), <strong>human error</strong> (accidental deletions, overwriting files), <strong>cyber-attacks</strong> (ransomware, malware), <strong>software corruption</strong>, and even <strong>physical damage</strong> from natural disasters. We aim to ensure your data is resilient against virtually any threat.",
        expanded: true,
      },
      {
        label:
          "How often should I back up my data, and do you automate this process?",
        desc: "The ideal backup frequency depends on how often your data changes and its criticality. We help you determine the most suitable schedule (daily, hourly, or even continuous). Yes, we configure <strong>automated backup solutions</strong> so your data is backed up regularly without manual intervention, ensuring consistency and reliability. We also monitor these backups to confirm they're always successful.",
        expanded: false,
      },
      {
        label: "What is the data recovery process like if I lose my data?",
        desc: "If data loss occurs, our process focuses on rapid restoration. First, we'll assess the extent of the loss. Then, utilizing your secure backups, our experts will meticulously <strong>restore your data</strong> to your system. We prioritize minimizing downtime and ensuring data integrity throughout the recovery, getting you back up and running as quickly as possible.",
        expanded: false,
      },
      {
        label:
          "How secure is my data when backed up through ITSupport.net.in's services?",
        desc: "Data security is our top priority. We implement <strong>robust encryption protocols</strong> for data both in transit and at rest. We also set up <strong>strict access controls</strong> to ensure only authorized personnel can access your backups. Whether you opt for on-premise, cloud, or hybrid solutions, your data's confidentiality and integrity are paramount.",
        expanded: false,
      },
      {
        label:
          "What makes ITSupport.net.in's data backup and recovery services stand out?",
        desc: "Our decade of experience and <strong>10,000+ satisfied customers globally</strong> speak volumes. We offer <strong>tailored, scalable solutions</strong> unique to your needs, not one-size-fits-all fixes. Our <strong>certified technicians</strong> provide proactive monitoring and 24/7 expert support, meaning we're always there when you need us most. We're not just providing a service; we're building a fortress for your invaluable data.",
        expanded: false,
      },
    ],
  },
  {
    slug: "antivirus-support-services",
    title: "Safeguard Your Digital World",
    subtitle: "Expert Antivirus Support Services",
    subtitle1:
      "In today's interconnected world, your digital life is constantly under threat. From sophisticated ransomware to elusive spyware, malicious software lurks, ready to compromise your data, disrupt your operations, and steal your peace of mind. A simple antivirus program isn't enough; you need robust, proactive, and expert support to truly protect your digital assets. At ITSupport.net.in, we understand the complexities of modern cyber threats. We provide comprehensive antivirus support services designed to keep your systems secure, ensuring you can work, browse, and connect without fear.",
    heroRightSideIcons: [
      <ShieldCheck className="w-6 h-6 text-white" />,
      <Bug className="w-6 h-6 text-white" />,
    ],
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
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M7 3.34V5a3 3 0 0 0 3 3"></path>
              <path d="M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
              <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
              <path d="M12 2a10 10 0 1 0 9.54 13"></path>
              <path d="M20 6V4a2 2 0 1 0-4 0v2"></path>
              <rect width="8" height="5" x="14" y="6" rx="1"></rect>
            </svg>
          ),
          title: "Real-Time Protection",
          description: "Continuous monitoring for threats.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path>
              <path d="M10 19v-3.96 3.15"></path>
              <path d="M7 19h5"></path>
              <rect width="6" height="10" x="16" y="12" rx="2"></rect>
            </svg>
          ),
          title: "Multi-Device Support",
          description: "Protect all your devices.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="m14.5 12.5-5-5"></path>
              <path d="m9.5 12.5 5-5"></path>
              <rect width="20" height="14" x="2" y="3" rx="2"></rect>
              <path d="M12 17v4"></path>
              <path d="M8 21h8"></path>
            </svg>
          ),
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
            "Our success is measured by the trust of our clients. We are proud to have <strong>10,000+ satisfied customers globally</strong> who rely on our expertise for their digital security needs. This global footprint and high satisfaction rate speak volumes about our effective solutions and customer-centric approach. We don't just fix problems; we build long-term relationships based on reliability and peace of mind.",
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
    title: "Expert Printer Support Services",
    subtitle: "Trusted Partner for Flawless Printing Over a Decade",
    subtitle1:
      "At ITSupport.net.in, we understand that a smoothly functioning printer is crucial for both homes and businesses. For over 10 years, we have been proudly serving over 10,000 customers globally, providing reliable and comprehensive printer support services. Our extensive experience ensures that we can quickly diagnose and resolve a wide array of printer issues, minimizing your downtime and maximizing your productivity.",
    heroRightSideIcons: [
      <Printer className="w-6 h-6 text-white" />,
      <Wrench className="w-6 h-6 text-white" />,
    ],
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
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M12 21V7"></path>
              <path d="m16 12 2 2 4-4"></path>
              <path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"></path>
            </svg>
          ),
          title: "Comprehensive Support",
          description: "Expert solutions for all printer brands and models",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z"></path>
              <path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z"></path>
            </svg>
          ),
          title: "Fast Response Time",
          description: "Quick diagnosis and efficient problem resolution",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M10 10 7 7"></path>
              <path d="m10 14-3 3"></path>
              <path d="m14 10 3-3"></path>
              <path d="m14 14 3 3"></path>
              <path d="M14.205 4.139a4 4 0 1 1 5.439 5.863"></path>
              <path d="M19.637 14a4 4 0 1 1-5.432 5.868"></path>
              <path d="M4.367 10a4 4 0 1 1 5.438-5.862"></path>
              <path d="M9.795 19.862a4 4 0 1 1-5.429-5.873"></path>
              <rect x="10" y="8" width="4" height="8" rx="1"></rect>
            </svg>
          ),
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
    whyChoose: {
      title: "Why Choose ITSupport.net.in?",
      desc: "With over a decade of dedicated service and thousands of satisfied customers globally, ITSupport.net.in stands out for its:",
      whyChoosecategories: [
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title: "Expert Technicians",
          desc: "Highly trained and experienced professionals.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          ),
          title: "24/7 Support",
          desc: "Assistance whenever you need it.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H7a3 3 0 00-3 3v8a3 3 0 003 3z"
              ></path>
            </svg>
          ),
          title: "Remote Solutions",
          desc: "Many issues resolved efficiently from anywhere.",
        },
        {
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-11V7a4 4 0 00-8 0v3"
              ></path>
            </svg>
          ),
          title: "Customer Satisfaction",
          desc: "Our priority is getting you back to printing seamlessly.",
        },
      ],
    },
    faqs: [
      {
        label: "Why is my printer not printing, even though it's turned on?",
        desc: 'This could be due to several reasons, including connectivity issues (Wi-Fi/USB), empty paper trays, low ink/toner, a paused print queue, or an "offline" status.',
        expanded: true,
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
    title: "Robust Network Support Services",
    subtitle: "Seamless Connectivity Over a Decade",
    subtitle1:
      "In today's interconnected world, a robust and reliable network is the backbone of any successful operation, whether for a home office or a large enterprise. At ITSupport.net.in, we understand the critical role your network plays in daily productivity and communication. For over 10 years, we have been the trusted partner for over 10,000 customers globally, providing unparalleled network support services that ensure seamless connectivity and minimal downtime. Our deep expertise in network architecture, troubleshooting, and security empowers us to tackle any challenge, keeping your digital infrastructure strong and secure.",
    heroRightSideIcons: [
      <Wifi className="w-6 h-6 text-white" />,
      <Server className="w-6 h-6 text-white" />,
    ],
    heroImage:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "Navigating and Resolving Common Network Challenges",
      subheadline: "",
      description:
        "Network issues can range from minor annoyances to complete system outages, crippling operations and frustrating users. Our certified technicians are adept at diagnosing and resolving a comprehensive spectrum of network problems, ensuring your systems are always online and performing optimally",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Why Choose Our Network Support?",
      services: [
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M12 20h.01"></path>
              <path d="M2 8.82a15 15 0 0 1 20 0"></path>
              <path d="M5 12.859a10 10 0 0 1 14 0"></path>
              <path d="M8.5 16.429a5 5 0 0 1 7 0"></path>
            </svg>
          ),
          title: "LAN & Wi-Fi Setup",
          description:
            "Professional installation and configuration for seamless connectivity.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M18 12h2"></path>
              <path d="M18 16h2"></path>
              <path d="M18 20h2"></path>
              <path d="M18 4h2"></path>
              <path d="M18 8h2"></path>
              <path d="M4 12h2"></path>
              <path d="M4 16h2"></path>
              <path d="M4 20h2"></path>
              <path d="M4 4h2"></path>
              <path d="M4 8h2"></path>
              <path d="M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z"></path>
            </svg>
          ),
          title: "Performance Optimization",
          description: "We identify and resolve bottlenecks for maximum speed.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M12 9v1.258"></path>
              <path d="M16 3v5.46"></path>
              <path d="M21 9.118V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5.75"></path>
              <path d="M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z"></path>
              <path d="M3 15h7"></path>
              <path d="M3 9h12.142"></path>
              <path d="M8 15v6"></path>
              <path d="M8 3v6"></path>
            </svg>
          ),
          title: "Security Monitoring",
          description:
            "Continuous monitoring to protect your network from threats.",
        },
      ],
    },
    issuecategory: {
      title: "Navigating and Resolving Common Network Challenges",
      subTitle:
        "Network issues can range from minor annoyances to complete system outages, crippling operations and frustrating users. Our certified technicians are adept at diagnosing and resolving a comprehensive spectrum of network problems, ensuring your systems are always online and performing optimally.",
      issueCategories: [
        {
          title: "Connectivity Conundrums and Access Issues",
          description:
            "The most immediate sign of network trouble is often a loss of connection or inability to access resources.",
          issues: [
            {
              title: "No Internet Access",
              problemDescription:
                "Your devices are connected to the network, but you can't browse the internet, access online services, or receive emails. This can stem from router/modem issues, ISP outages, incorrect DNS settings, IP conflicts, or firewall blocks.",
              solution:
                "We systematically check modem and router status, verify ISP connectivity, reconfigure network settings, flush DNS, and inspect firewall rules to restore your internet connection promptly.",
            },
            {
              title: "Wi-Fi Dropping or Weak Signal",
              problemDescription:
                "Your wireless devices frequently disconnect, or the Wi-Fi signal is consistently weak in certain areas. Common causes include router placement, signal interference from other devices, outdated router firmware, or channel congestion.",
              solution:
                "We perform site surveys to optimize router placement, identify and mitigate interference sources, update router firmware, adjust Wi-Fi channels, and recommend Wi-Fi extenders or mesh systems where necessary to ensure stable and strong coverage.",
            },
            {
              title: "Inability to Connect to Network Shares or Printers",
              problemDescription:
                "Users cannot access shared folders, files, or network printers, despite being connected to the network. This often points to incorrect sharing permissions, network discovery issues, firewall blocks, or IP address changes.",
              solution:
                "We verify network sharing settings, troubleshoot network discovery services, adjust firewall configurations, and ensure correct IP address assignment and DNS resolution for shared resources.",
            },
          ],
        },
        {
          title: "Network Performance Bottlenecks",
          description:
            "A slow network can be just as debilitating as no network at all, impacting productivity and user experience.",
          issues: [
            {
              title: "Slow Network Speeds",
              problemDescription:
                "Data transfer is sluggish, applications load slowly, or video conferencing suffers from lag and buffering. This can be due to network congestion, outdated network hardware (routers, switches), excessive bandwidth consumption by certain applications, or cabling issues.",
              solution:
                "We analyze network traffic to identify bandwidth hogs, optimize Quality of Service (QoS) settings, inspect network cabling for damage, recommend hardware upgrades, and implement network segmentation to improve overall speed and responsiveness.",
            },
            {
              title: "High Latency and Packet Loss",
              problemDescription:
                "You experience significant delays in data transmission (high ping) or intermittent loss of data packets, leading to choppy voice calls or unreliable data transfers. This can be caused by overloaded network devices, misconfigured routers, or poor signal quality in wireless environments.",
              solution:
                "We conduct comprehensive network diagnostics to pinpoint latency sources, optimize router configurations, and address underlying hardware or environmental factors contributing to packet loss.",
            },
          ],
        },
        {
          title: "Network Security Vulnerabilities",
          description:
            "Protecting your network from unauthorized access and cyber threats is paramount in today's digital landscape.",
          issues: [
            {
              title: "Unauthorized Network Access",
              problemDescription:
                "Suspicious devices appear on your network, or you detect unusual data activity, indicating a potential breach or unauthorized access. This often results from weak Wi-Fi passwords, unsecure network configurations, or malware.",
              solution:
                "We implement strong encryption protocols (WPA3), configure robust firewall rules, set up network access controls (NAC), recommend VLAN segmentation for guest networks, and conduct regular security audits to identify and close vulnerabilities.",
            },
            {
              title: "Malware and Virus Infections Spreading Across Network",
              problemDescription:
                "One infected device can quickly spread malware throughout your entire network, leading to data corruption, system slowdowns, or data exfiltration.",
              solution:
                "We deploy advanced endpoint protection, implement network-level antivirus scanning, configure intrusion detection/prevention systems (IDS/IPS), and provide rapid incident response to contain and eradicate threats.",
            },
          ],
        },
        {
          title: "Hardware and Configuration Malfunctions",
          description:
            "The physical and logical components of your network require proper configuration and maintenance.",
          issues: [
            {
              title: "Router/Switch Malfunctions",
              problemDescription:
                "Your network devices are unresponsive, frequently crash, or fail to route traffic correctly. This could be due to firmware bugs, hardware failure, or incorrect configuration.",
              solution:
                "We perform device diagnostics, update firmware, reconfigure settings, and provide recommendations for replacement hardware if a device is faulty.",
            },
            {
              title: "IP Address Conflicts",
              problemDescription:
                "Two devices on your network are assigned the same IP address, leading to connectivity issues for one or both.",
              solution:
                "We troubleshoot DHCP server configurations, identify static IP conflicts, and reconfigure devices to ensure unique IP assignments across your network.",
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
    whyChoose: {
      title: "Why Choose ITSupport.net.in for Network Support?",
      desc: "With over a decade of dedicated service and a track record of supporting more than 10,000 customers globally, ITSupport.net.in is your ideal partner for network health. Our commitment to excellence is reflected in:",
      whyChoosecategories: [
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title: "Experienced Network Engineers",
          desc: "Our team comprises highly skilled and certified professionals.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          ),
          title: "Proactive Monitoring",
          desc: "We offer solutions to monitor your network for potential issues before they become critical.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H7a3 3 0 00-3 3v8a3 3 0 003 3z"
              ></path>
            </svg>
          ),
          title: "Rapid Response",
          desc: "Quick diagnosis and resolution to minimize network downtime.",
        },
        {
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-11V7a4 4 0 00-8 0v3"
              ></path>
            </svg>
          ),
          title: "24/7 Availability",
          desc: "Around-the-clock support to ensure your business stays connected.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              ></path>
            </svg>
          ),
          title: "Customized Solutions",
          desc: "Tailored network strategies to meet your specific business needs and scale.",
        },
      ],
    },
    faqs: [
      {
        label: "Why is my internet so slow all of a sudden?",
        desc: "Slow internet can be caused by network congestion, too many devices using bandwidth, outdated router firmware, Wi-Fi interference, or even an issue with your Internet Service Provider (ISP).",
        expanded: true,
      },
      {
        label: "My Wi-Fi keeps dropping out. How can I fix this?",
        desc: "Try repositioning your router, checking for interference from other electronics (microwaves, cordless phones), updating your router's firmware, or changing your Wi-Fi channel.",
        expanded: false,
      },
      {
        label: "What is an IP address conflict and how do I resolve it?",
        desc: "An IP address conflict occurs when two devices on the same network are assigned the same IP address. This can often be resolved by restarting your router and all connected devices, or by configuring static IPs carefully.",
        expanded: false,
      },
      {
        label: "How can I improve my Wi-Fi signal strength in my home/office?",
        desc: "Consider using Wi-Fi extenders, mesh Wi-Fi systems, or upgrading to a newer, more powerful router. Also, ensure your router is centrally located and away from obstructions.",
        expanded: false,
      },
      {
        label: "What's the difference between a router and a modem?",
        desc: "A modem connects your home/office to your Internet Service Provider (ISP) and translates the internet signal. A router creates a local network (Wi-Fi or wired) and allows multiple devices to share that internet connection.",
        expanded: false,
      },
      {
        label: "How often should I restart my router?",
        desc: "It's a good practice to restart your router every few weeks or once a month. This can help clear its memory and resolve minor connectivity glitches.",
        expanded: false,
      },
      {
        label: "What are the signs of a network security breach?",
        desc: "Signs can include unusual network activity, unknown devices connected to your network, unexpected pop-ups, difficulty accessing files, or receiving warnings from your antivirus software.",
        expanded: false,
      },
      {
        label: "Why can't I access shared folders on my network?",
        desc: "This often relates to incorrect file sharing permissions, network discovery being turned off, or firewall settings blocking access.",
        expanded: false,
      },
      {
        label:
          "Can ITSupport.net.in help with setting up a new network for my business?",
        desc: "Absolutely. We provide comprehensive network setup and configuration services, including cabling, router/switch installation, Wi-Fi setup, and security implementation for new businesses or expansions.",
        expanded: false,
      },
      {
        label: "What is a firewall and why is it important for my network?",
        desc: "A firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It's crucial for protecting your network from unauthorized access and malicious threats from the internet.",
        expanded: false,
      },
    ],
  },
  {
    slug: "professional-cloud-support-services",
    title: "Elevate Business with Cloud Services",
    subtitle:
      "Seamless Cloud Operations: Over a Decade of Global Excellence for 1,000+ Customers",
    subtitle1: `In the modern digital era, cloud computing is no longer just an option – it's a fundamental necessity for agility, scalability, and innovation. At ITSupport.net.in, we've been at the forefront of this transformation for over 10 years, proudly serving more than 1,000 customers globally. We understand that while the cloud offers immense potential, navigating its complexities requires specialized expertise. Our dedicated Cloud Support Services are designed to ensure your cloud infrastructure is always optimized, secure, and performing at its peak, allowing you to focus on your core business objectives without interruption.`,
    heroRightSideIcons: [
      <Cloud className="w-6 h-6 text-white" />,
      <Server className="w-6 h-6 text-white" />,
    ],
    heroImage:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "Navigating the Cloud Landscape: Common Challenges We Resolve",
      subheadline: "",
      description:
        "While cloud platforms offer unparalleled flexibility and power, they also come with their own set of unique challenges. From initial migration hurdles to ongoing optimization and security concerns, managing a cloud environment can be intricate. Our team of certified cloud experts is adept at identifying, diagnosing, and resolving these complex issues, ensuring your cloud journey is smooth and successful.",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Our Cloud Support Services",
      services: [
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="m10.852 19.772-.383.924"></path>
              <path d="m13.148 14.228.383-.923"></path>
              <path d="M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923"></path>
              <path d="m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544"></path>
              <path d="m14.772 15.852.923-.383"></path>
              <path d="m14.772 18.148.923.383"></path>
              <path d="M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"></path>
              <path d="m9.228 15.852-.923-.383"></path>
              <path d="m9.228 18.148-.923.383"></path>
            </svg>
          ),
          title: "Cloud Migration",
          description: "Seamless migration of your data and apps to the cloud.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="m17 15-5.5 5.5L9 18"></path>
              <path d="M5 17.743A7 7 0 1 1 15.71 10h1.79a4.5 4.5 0 0 1 1.5 8.742"></path>
            </svg>
          ),
          title: "Data Synchronization",
          description:
            "Keep your files updated and accessible across all devices.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M3 12a9 3 0 0 0 5 2.69"></path>
              <path d="M21 9.3V5"></path>
              <path d="M3 5v14a9 3 0 0 0 6.47 2.88"></path>
              <path d="M12 12v4h4"></path>
              <path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"></path>
            </svg>
          ),
          title: "Secure Backup",
          description: "Automated, encrypted backups for peace of mind.",
        },
      ],
    },
    issuecategory: {
      title: "Navigating the Cloud Landscape: Common Challenges We Resolve",
      subTitle:
        "While cloud platforms offer unparalleled flexibility and power, they also come with their own set of unique challenges. From initial migration hurdles to ongoing optimization and security concerns, managing a cloud environment can be intricate. Our team of certified cloud experts is adept at identifying, diagnosing, and resolving these complex issues, ensuring your cloud journey is smooth and successful.",
      issueCategories: [
        {
          title: "Cloud Migration Headaches: Transitioning with Confidence",
          description:
            "Moving to the cloud, or between cloud providers, can be a daunting task fraught with potential pitfalls. We streamline the process, mitigating risks and ensuring a seamless transition.",
          issues: [
            {
              title: "Data Migration Complexity & Integrity Issues",
              problemDescription:
                "Transferring large volumes of data securely and without corruption from on-premises systems to the cloud, or between cloud environments, can be slow, prone to errors, and challenging to manage, leading to data loss or inconsistencies.",
              solution:
                "We employ robust data migration strategies, utilizing specialized tools and phased approaches. We ensure data integrity through checksum validations, implement efficient transfer mechanisms, and plan for minimal downtime during the transition, verifying data accuracy post-migration.",
            },
            {
              title: "Application Compatibility & Refactoring Challenges",
              problemDescription:
                "Not all legacy applications are 'cloud-native,' and simply lifting and shifting them can lead to performance issues, security gaps, or increased operational costs. Refactoring applications to suit cloud architectures can be complex and resource-intensive.",
              solution:
                "We perform thorough application assessments to determine cloud readiness. For incompatible applications, we advise on refactoring strategies, utilize containerization (Docker, Kubernetes), or suggest platform-as-a-service (PaaS) alternatives, ensuring optimal performance and cost-efficiency in the cloud.",
            },
          ],
        },
        {
          title: "Performance & Optimization Pitfalls: Maximizing Cloud ROI",
          description:
            "Cloud resources are powerful, but without proper management, they can be underutilized, over-provisioned, or suffer from performance bottlenecks.",
          issues: [
            {
              title: "Latency & Slow Access to Cloud Resources",
              problemDescription:
                "Users experience delays when accessing applications or data hosted in the cloud. This can be caused by network configuration issues, inefficient routing, geographical distance to data centers, or improper resource allocation.",
              solution:
                "We optimize network configurations, implement CDN (Content Delivery Network) solutions for global access, fine-tune resource allocation (e.g., VM sizes, database tiers), and troubleshoot network paths to minimize latency and ensure swift access.",
            },
            {
              title: "Cost Overruns & Uncontrolled Resource Sprawl",
              problemDescription:
                "Cloud bills unexpectedly surge due to inefficient resource provisioning, forgotten resources (orphan disks, idle VMs), or lack of cost visibility. Managing numerous services across multiple teams can lead to 'resource sprawl.'",
              solution:
                "We conduct regular cloud cost optimization audits, implement tagging strategies for resource allocation tracking, utilize auto-scaling and serverless functions where appropriate, and advise on reserved instances or savings plans to reduce expenditure while maintaining performance.",
            },
          ],
        },
        {
          title:
            "Security & Compliance Concerns: Safeguarding Your Cloud Environment",
          description:
            "The shared responsibility model of the cloud means security is a partnership. We help you secure your side of the cloud infrastructure and meet regulatory demands.",
          issues: [
            {
              title: "Data Breaches & Access Control Gaps",
              problemDescription:
                "Unauthorized access to sensitive data, misconfigured security groups, weak identity and access management (IAM) policies, or lack of encryption can lead to critical data breaches.",
              solution:
                "We implement robust IAM policies (Least Privilege Principle), configure multi-factor authentication (MFA), deploy network security groups and firewalls, enforce data encryption at rest and in transit, and conduct regular vulnerability assessments and penetration testing.",
            },
            {
              title: "Regulatory Compliance Gaps (GDPR, HIPAA, PCI DSS)",
              problemDescription:
                "Ensuring your cloud environment complies with industry-specific regulations (like GDPR for data privacy, HIPAA for healthcare, PCI DSS for payments) can be complex due to evolving rules and shared responsibility models.",
              solution:
                "We help you understand the compliance requirements relevant to your industry, configure cloud services to meet these standards, establish auditing and logging mechanisms, and assist with documentation for compliance reporting.",
            },
          ],
        },
        {
          title:
            "Management & Operational Complexities: Ensuring Cloud Resilience",
          description:
            "Day-to-day cloud operations require continuous monitoring, robust backup strategies, and efficient incident response.",
          issues: [
            {
              title: "Inadequate Monitoring & Alerting Gaps",
              problemDescription:
                "Without proper monitoring tools and alerting mechanisms, it's difficult to detect performance bottlenecks, security threats, or service outages in real-time, leading to reactive instead of proactive issue resolution.",
              solution:
                "We implement comprehensive cloud monitoring solutions (e.g., CloudWatch, Azure Monitor, Stackdriver), configure custom dashboards, set up proactive alerts for anomalies, and integrate with your existing incident management systems.",
            },
            {
              title: "Disaster Recovery & Business Continuity Challenges",
              problemDescription:
                "Planning for and implementing effective disaster recovery (DR) strategies in the cloud, including data backups, replication, and failover mechanisms, can be complex and often overlooked, risking significant downtime during an outage.",
              solution:
                "We design and implement robust cloud-based disaster recovery plans, configure automated backups and cross-region replication, test DR scenarios regularly, and help establish business continuity procedures to minimize data loss and maximize uptime.",
            },
          ],
        },
      ],
    },
    issuecategory2: {
      title: "Expert Support Across Leading Cloud Platforms",
      subTitle:
        "Our expertise spans the most widely used public cloud platforms, ensuring that no matter where your infrastructure resides, you have expert support at your fingertips.",
      issueCategories: [
        {
          title: "Amazon Web Services (AWS) Support",
          description:
            "As pioneers in cloud computing, AWS offers an unparalleled breadth of services. Our AWS support covers:",
          issues: [
            {
              title: "Core AWS Services & Optimizations",
              type: "list",
              options: [
                {
                  title: "Compute:",
                  desc: "EC2 instance management, optimizing auto-scaling groups, serverless (AWS Lambda) deployments and troubleshooting.",
                },
                {
                  title: "Storage:",
                  desc: "S3 bucket management, Glacier archiving, EBS volume optimization, and data lifecycle policies.",
                },
                {
                  title: "Databases:",
                  desc: "RDS (Relational Database Service) setup and optimization, DynamoDB, Redshift, and Aurora management.",
                },
                {
                  title: "Networking:",
                  desc: "VPC (Virtual Private Cloud) configuration, Direct Connect, Load Balancer setup (ELB), and Route 53 DNS management.",
                },
                {
                  title: "Security & Identity:",
                  desc: "IAM (Identity and Access Management) policy configuration, AWS WAF, GuardDuty, and security best practices.",
                },
              ],
            },
          ],
        },
        {
          title: "Addressing Specific AWS Challenges",
          description:
            "We resolve issues like EC2 instance connectivity problems, S3 permission errors, RDS performance degradation, Lambda function execution failures, and complex VPC routing issues, ensuring your AWS environment runs flawlessly.",
        },
        {
          title: "Microsoft Azure Support",
          description:
            "Azure's powerful hybrid capabilities and deep integration with Microsoft technologies make it a popular choice. Our Azure support includes:",
          issues: [
            {
              title: "Azure Infrastructure & Platform Management",
              type: "list",
              options: [
                {
                  title: "Compute:",
                  desc: "Azure Virtual Machines (VMs), Azure Functions, App Services for web applications.",
                },
                {
                  title: "Storage:",
                  desc: "Blob Storage, Azure Files, Disk Storage, and data redundancy strategies.",
                },
                {
                  title: "Databases:",
                  desc: "Azure SQL Database, Cosmos DB, Azure Database for MySQL/PostgreSQL/MariaDB.",
                },
                {
                  title: "Networking:",
                  desc: "Azure Virtual Network (VNet), VPN Gateways, ExpressRoute, Azure Load Balancer.",
                },
                {
                  title: "Identity & Security:",
                  desc: "Azure Active Directory (AAD) integration, Azure Security Center, Key Vault.",
                },
              ],
            },
          ],
        },
        {
          title: "Resolving Azure-Specific Issues",
          description:
            "We tackle common Azure challenges such as VM deployment failures, Azure Storage access issues, SQL database connection problems, Azure AD sync errors, and ensuring optimal performance for Azure App Services.",
        },
        {
          title: "Google Cloud Platform (GCP) Support",
          description:
            "GCP is known for its strengths in data analytics, machine learning, and Kubernetes. Our GCP support offerings include:",
          issues: [
            {
              title: "GCP Core Services & Data Solutions",
              type: "list",
              options: [
                {
                  title: "Compute:",
                  desc: "Compute Engine (VMs), Kubernetes Engine (GKE) cluster management, Cloud Functions, App Engine.",
                },
                {
                  title: "Storage:",
                  desc: "Cloud Storage (object storage), Persistent Disk.",
                },
                {
                  title: "Databases:",
                  desc: "Cloud SQL, Cloud Spanner, Firestore, Bigtable.",
                },
                {
                  title: "Networking:",
                  desc: "VPC, Load Balancing, Cloud CDN, Cloud DNS.",
                },
                {
                  title: "Big Data & AI:",
                  desc: "BigQuery, Cloud Dataflow, AI Platform services.",
                },
              ],
            },
          ],
        },
        {
          title: "Overcoming GCP-Specific Hurdles",
          description:
            "We assist with GKE cluster health issues, BigQuery query optimization, Cloud Storage permission problems, Compute Engine instance performance tuning, and ensuring seamless deployment of serverless functions.",
        },
        {
          title: "Alibaba Cloud Support",
          description:
            "A leading cloud provider, especially strong in the APAC region, Alibaba Cloud offers a comprehensive suite of services. Our support covers:",
          issues: [
            {
              title: "Alibaba Cloud Infrastructure & Ecosystem",
              type: "list",
              options: [
                {
                  title: "Compute:",
                  desc: "Elastic Compute Service (ECS) instance management, Container Service for Kubernetes (ACK).",
                },
                {
                  title: "Storage:",
                  desc: "Object Storage Service (OSS), ApsaraDB for various databases.",
                },
                {
                  title: "Networking:",
                  desc: "Virtual Private Cloud (VPC), Server Load Balancer (SLB), CDN.",
                },
                {
                  title: "Security:",
                  desc: "Cloud Security services, RAM (Resource Access Management).",
                },
              ],
            },
          ],
        },
        {
          title: "Addressing Alibaba Cloud Challenges",
          description:
            "We resolve ECS performance issues, OSS access problems, network connectivity challenges within Alibaba Cloud VPCs, and provide guidance on security configurations unique to the platform.",
        },
        {
          title: "Oracle Cloud Infrastructure (OCI) Support",
          description:
            "OCI is rapidly gaining traction for its enterprise-grade performance and cost-effectiveness for specific workloads. Our OCI support includes:",
          issues: [
            {
              title: "OCI Compute, Storage & Database Optimization",
              type: "list",
              options: [
                {
                  title: "Compute:",
                  desc: "Bare Metal, Virtual Machine, and Container Engine for Kubernetes.",
                },
                {
                  title: "Storage:",
                  desc: "Block Volumes, Object Storage, File Storage.",
                },
                {
                  title: "Databases:",
                  desc: "Autonomous Database (Shared/Dedicated Exadata Infrastructure), Database Cloud Service.",
                },
                {
                  title: "Networking:",
                  desc: "Virtual Cloud Network (VCN), Load Balancers, FastConnect.",
                },
                {
                  title: "Identity & Access Management:",
                  desc: "OCI IAM for secure resource access.",
                },
              ],
            },
          ],
        },
        {
          title: "Resolving OCI-Specific Problems",
          description:
            "We troubleshoot VCN routing issues, optimize Autonomous Database performance, manage OCI Object Storage access, and ensure efficient deployment and scaling of compute instances.",
        },

        {
          title: "DigitalOcean Support",
          description:
            "DigitalOcean is a favorite among developers for its simplicity, predictable pricing, and robust infrastructure for building and scaling apps. Our DigitalOcean support focuses on:",
          issues: [
            {
              title: "Streamlined DigitalOcean Deployments & Management",
              type: "list",
              options: [
                {
                  title: "Compute:",
                  desc: "Droplets (VMs) creation, management, and scaling.",
                },
                {
                  title: "Storage:",
                  desc: "Spaces (object storage), Block Storage.",
                },
                {
                  title: "Databases:",
                  desc: "Managed Databases (PostgreSQL, MySQL, Redis).",
                },
                {
                  title: "Networking:",
                  desc: "VPCs, Load Balancers, DNS management.",
                },
                {
                  title: "Containers:",
                  desc: "Kubernetes (DOKS) cluster management.",
                },
              ],
            },
          ],
        },
        {
          title: "Addressing DigitalOcean-Related Issues",
          description:
            "We assist with Droplet performance tuning, Spaces access issues, Managed Database connectivity problems, Kubernetes cluster configuration, and general networking setup for smooth application deployment.",
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
    whyChoose: {
      title: "Why Partner with ITSupport.net.in for Cloud Services?",
      desc: "Choosing ITSupport.net.in as your cloud support partner means leveraging over a decade of hands-on experience and a global footprint of over 10,000 satisfied customers. Our commitment to your success is built on:",
      whyChoosecategories: [
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title: "Platform Agnostic Expertise",
          desc: "Proficient across all major cloud providers.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          ),
          title: "24/7 Proactive Monitoring & Support",
          desc: "We detect and resolve issues often before you even notice them.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H7a3 3 0 00-3 3v8a3 3 0 003 3z"
              ></path>
            </svg>
          ),
          title: "Cost Optimization Focus",
          desc: "Ensuring you get the most value from your cloud investment.",
        },
        {
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-11V7a4 4 0 00-8 0v3"
              ></path>
            </svg>
          ),
          title: "Enhanced Security & Compliance",
          desc: "Protecting your data and meeting regulatory requirements.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              ></path>
            </svg>
          ),
          title: "Scalability & Flexibility",
          desc: "Ensuring your cloud infrastructure grows seamlessly with your business.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title: "Dedicated & Certified Cloud Engineers",
          desc: "A team committed to your cloud success.",
        },
      ],
    },
    faqs: [
      {
        label: "Which cloud providers do you support?",
        desc: "We work with AWS, Google Cloud, Microsoft Azure, and other platforms.",
        expanded: true,
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
    title: "Elevate Online Store with Expert",
    subtitle:
      "Seamless Digital Retail: Over a Decade of Global Excellence for 500+ Online Businesses",
    subtitle1: `In the dynamic world of e-commerce, your online store is more than just a website—it's your storefront, sales team, and customer service hub rolled into one. At ITSupport.net.in, we understand that every moment of downtime or every friction point in the customer journey can mean lost sales and damaged reputation. For over 10 years, we have been the trusted ally for over 500 e-commerce businesses globally, providing unparalleled support that ensures your digital storefront operates flawlessly, securely, and efficiently. Our comprehensive e-commerce support services empower you to focus on growth while we handle the technical complexities.`,
    heroRightSideIcons: [
      <ShoppingCart className="w-6 h-6 text-white" />,
      <Server className="w-6 h-6 text-white" />,
    ],
    heroImage:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline:
        "Conquering E-commerce Challenges: Issues We Resolve for Your Online Success",
      subheadline: "",
      description:
        "Running a successful e-commerce business involves navigating a myriad of technical and operational hurdles. From website performance to secure transactions and seamless integrations, our expert team is equipped to diagnose and resolve a wide array of e-commerce challenges, ensuring a smooth and profitable online operation.",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Why Choose Our E-Commerce Support?",
      services: [
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"></path>
              <path d="M8 13v9"></path>
              <path d="M16 22v-9"></path>
              <path d="m9 6 1 7"></path>
              <path d="m15 6-1 7"></path>
              <path d="M12 6V2"></path>
              <path d="M13 2h-2"></path>
            </svg>
          ),
          title: "Platform Expertise",
          description: "Support for Shopify, WooCommerce, Magento, and more.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path>
              <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path>
              <path d="m2 16 6 6"></path>
              <circle cx="16" cy="9" r="2.9"></circle>
              <circle cx="6" cy="5" r="3"></circle>
            </svg>
          ),
          title: "Payment Integration",
          description: "Seamless and secure payment gateway setup.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M7 3.34V5a3 3 0 0 0 3 3"></path>
              <path d="M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
              <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
              <path d="M12 2a10 10 0 1 0 9.54 13"></path>
              <path d="M20 6V4a2 2 0 1 0-4 0v2"></path>
              <rect width="8" height="5" x="14" y="6" rx="1"></rect>
            </svg>
          ),
          title: "Security & Uptime",
          description: "Continuous monitoring for safe and reliable shopping.",
        },
      ],
    },
    issuecategory: {
      title:
        "Conquering E-commerce Challenges: Issues We Resolve for Your Online Success",
      subTitle:
        "Running a successful e-commerce business involves navigating a myriad of technical and operational hurdles. From website performance to secure transactions and seamless integrations, our expert team is equipped to diagnose and resolve a wide array of e-commerce challenges, ensuring a smooth and profitable online operation.",
      issueCategories: [
        {
          title: "Website Performance & User Experience (UX) Issues",
          description:
            "A slow, clunky, or non-responsive website drives customers away, directly impacting conversion rates and brand perception.",
          issues: [
            {
              title: "Slow Loading Times & Page Speed Optimization",
              problemDescription:
                "Your e-commerce pages take too long to load, leading to high bounce rates and frustrated customers. This can be caused by unoptimized images, excessive scripts, inefficient code, slow hosting, or unoptimized database queries.",
              solution:
                "We conduct thorough performance audits, optimize images and media, minify CSS/JavaScript, implement caching mechanisms, fine-tune database performance, evaluate and recommend optimal hosting solutions, and leverage CDNs (Content Delivery Networks) to ensure lightning-fast loading speeds across all devices.",
            },
            {
              title: "Mobile Responsiveness & UI/UX Glitches",
              problemDescription:
                "Your store might look great on a desktop but appears broken, difficult to navigate, or unresponsive on smartphones and tablets, alienating a large segment of online shoppers. Clunky interfaces or broken links also degrade user experience.",
              solution:
                "We ensure your e-commerce platform is fully responsive, adapting seamlessly to any screen size. We identify and fix UI/UX glitches, optimize navigation paths, enhance call-to-action visibility, and perform cross-browser and cross-device testing to guarantee a consistent and intuitive shopping experience.",
            },
          ],
        },
        {
          title: "Shopping Cart & Checkout Funnel Obstacles",
          description:
            "A smooth checkout process is crucial for converting browsers into buyers. Issues here directly impact sales.",
          issues: [
            {
              title: "Abandoned Carts & Payment Gateway Failures",
              problemDescription:
                "Customers add items to their cart but abandon the purchase before completion, often due to complex checkout processes, unexpected fees, or payment gateway errors (transactions failing, slow processing).",
              solution:
                "We optimize your checkout flow for simplicity and clarity, implement one-page checkout where suitable, troubleshoot payment gateway integrations (PayPal, Stripe, etc.), resolve API errors, and ensure all payment methods function reliably and securely to minimize abandonment.",
            },
            {
              title: "Shipping & Tax Calculation Errors",
              problemDescription:
                "Incorrect shipping rates, miscalculated taxes, or a lack of clear shipping options can lead to customer frustration, chargebacks, and lost profits. Complex shipping rules or international tax regulations often cause these errors.",
              solution:
                "We configure and fine-tune shipping zones, rates, and methods, integrate with preferred shipping carriers' APIs for real-time rates, and set up accurate tax rules based on location and product type, ensuring transparency and compliance.",
            },
          ],
        },
        {
          title: "Product Management & Inventory Woes",
          description:
            "Efficient product and inventory management is key to preventing overselling or stockouts.",
          issues: [
            {
              title: "Product Data Inaccuracies & Import/Export Problems",
              problemDescription:
                "Incorrect product descriptions, pricing, images, or specifications confuse customers. Issues during bulk product imports or exports can lead to data loss or inconsistencies across your catalog.",
              solution:
                "We assist with bulk product data import/export, ensuring data integrity and accuracy. We help structure product attributes, optimize images, and troubleshoot any database or platform-specific errors during catalog updates.",
            },
            {
              title: "Inventory Sync & Stock Management Issues",
              problemDescription:
                "Your online store shows items in stock that are actually out, or vice-versa, leading to backorders, cancellations, or missed sales opportunities. This often happens with multiple sales channels or unreliable inventory sync.",
              solution:
                "We set up and troubleshoot real-time inventory synchronization across your e-commerce platform and any integrated POS, ERP, or warehouse management systems, ensuring accurate stock levels and preventing overselling.",
            },
          ],
        },
        {
          title: "Security, Integrations & Compliance Gaps",
          description:
            "Protecting customer data and ensuring your store is integrated with vital business tools is non-negotiable.",
          issues: [
            {
              title: "Website Security Vulnerabilities & SSL Issues",
              problemDescription:
                "E-commerce sites are prime targets for cyberattacks (DDoS, XSS, SQL injection). Lack of an SSL certificate or an expired one scares customers away and reduces SEO ranking.",
              solution:
                "We implement robust security measures, including WAF (Web Application Firewall), regular security audits, malware scanning and removal, brute-force protection, and ensuring proper SSL certificate installation and renewal to safeguard your store and customer data.",
            },
            {
              title: "Third-Party Integration Breakdowns (CRM, ERP, Marketing)",
              problemDescription:
                "Crucial integrations with CRM systems, ERPs, email marketing platforms, or analytics tools stop working, leading to data silos, manual workarounds, and inefficient operations.",
              solution:
                "We troubleshoot and re-establish broken API connections, verify data flow between systems, update integration modules, and ensure seamless communication between your e-commerce platform and all essential third-party business tools.",
            },
          ],
        },
        {
          title: "SEO, Marketing & Analytics Shortcomings",
          description:
            "Even the best products won't sell without visibility and insight into customer behavior.",
          issues: [
            {
              title: "Poor Search Engine Visibility & Ranking",
              problemDescription:
                "Your products aren't showing up prominently in search results, limiting organic traffic and sales. This can be due to technical SEO issues, poor content, or lack of proper keyword optimization.",
              solution:
                "We perform technical SEO audits, optimize product pages and categories for keywords, ensure proper sitemap submission, implement schema markup, and address crawling/indexing issues to boost your organic search rankings.",
            },
            {
              title: "Analytics Tracking Discrepancies & Reporting Errors",
              problemDescription:
                "Your Google Analytics or other tracking tools are showing inaccurate data, missing conversions, or providing incomplete reports, making it impossible to make informed marketing and business decisions.",
              solution:
                "We verify accurate installation of tracking codes, troubleshoot event and conversion tracking, resolve discrepancies between platforms, and help configure custom reports to provide clear, actionable insights into your store's performance.",
            },
          ],
        },
      ],
    },
    issuecategory2: {
      title: "Expert Support Across Leading E-commerce Platforms",
      subTitle:
        "Our profound expertise spans the most popular and powerful e-commerce platforms, ensuring that no matter your chosen technology, your online store receives unparalleled support.",
      issueCategories: [
        {
          title: "Shopify Support",
          description:
            "As a leading SaaS e-commerce platform, Shopify is known for its ease of use. Our support for Shopify stores includes:",
          issues: [
            {
              title: "",
              solution:
                "Theme customization, app integration, payment gateway setup, checkout flow optimization, inventory sync, SEO enhancements, and troubleshooting of any platform-specific issues to maximize your store's potential.",
            },
          ],
        },
        {
          title: "BigCommerce Support",
          description:
            "BigCommerce offers powerful enterprise-level features and scalability. Our BigCommerce support covers:",
          issues: [
            {
              title: "",
              solution:
                "Store setup and configuration, custom template development, API integrations, complex shipping/tax rules, multi-channel selling setup, performance tuning, and advanced security configurations to handle high traffic and extensive catalogs.",
            },
          ],
        },
        {
          title: "WordPress + WooCommerce Support",
          description:
            "Combining the flexibility of WordPress with the power of WooCommerce creates a robust e-commerce solution. Our support for this popular duo includes:",
          issues: [
            {
              title: "",
              solution:
                "Plugin conflict resolution, theme customization, payment gateway integration, database optimization, security hardening, performance tuning, inventory management, and custom feature development to tailor your store perfectly.",
            },
          ],
        },
        {
          title: "Drupal (Commerce) Support",
          description:
            "Drupal Commerce provides a highly flexible and customizable framework for complex e-commerce needs. Our Drupal support entails:",
          issues: [
            {
              title: "",
              solution:
                "Module configuration, custom development, performance optimization, security audits, payment gateway integration, content management integration, and migration services for robust, scalable e-commerce solutions.",
            },
          ],
        },
        {
          title: "Adobe Commerce (Magento) Support",
          description:
            "Formerly Magento, Adobe Commerce is a powerful, feature-rich platform ideal for large-scale operations. Our specialized support includes:",
          issues: [
            {
              title: "",
              solution:
                "Installation, configuration, performance optimization (caching, server tuning), extension development and conflict resolution, security patching, multi-store management, and complex third-party system integrations for high-volume retailers.",
            },
          ],
        },
        {
          title: "OpenCart Support",
          description:
            "OpenCart offers a straightforward, open-source solution for online stores. Our support for OpenCart users covers:",
          issues: [
            {
              title: "",
              solution:
                "Installation and setup, theme customization, extension integration, performance tuning, security hardening, SEO optimization, and troubleshooting common issues to ensure a smooth shopping experience.",
            },
          ],
        },
        {
          title: "Wix Support",
          description:
            "Wix provides an intuitive drag-and-drop website builder with integrated e-commerce features. Our Wix support helps you:",
          issues: [
            {
              title: "",
              solution:
                "Optimize store layout, manage product listings, integrate payment methods, set up shipping rules, improve SEO settings, and troubleshoot any glitches within the Wix editor to enhance your online presence.",
            },
          ],
        },
        {
          title: "HubSpot Integration & E-commerce CRM Support",
          description:
            "While primarily a CRM and marketing platform, HubSpot's e-commerce integrations are vital. Our support focuses on:",
          issues: [
            {
              title: "",
              solution:
                "Seamless integration of your e-commerce platform (Shopify, WooCommerce, etc.) with HubSpot CRM, ensuring accurate customer data sync, automating marketing workflows, setting up abandoned cart recovery, and enabling personalized customer journeys.",
            },
          ],
        },
        {
          title: "Squarespace Support",
          description:
            "Squarespace offers beautiful, design-focused templates with integrated e-commerce capabilities. Our Squarespace support assists with:",
          issues: [
            {
              title: "",
              solution:
                "Store design and layout optimization, product management, inventory synchronization, payment gateway setup, SEO best practices, and ensuring responsive design for a visually stunning and functional online store.",
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
    whyChoose: {
      title: "Why Partner with ITSupport.net.in for E-commerce Success?",
      desc: "Choosing ITSupport.net.in means entrusting your online store to a team with over a decade of specialized experience and a track record of supporting 500+ happy e-commerce customers globally. Our commitment to your business growth is reflected in:",
      whyChoosecategories: [
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title: "Platform Agnostic Expertise",
          desc: "Proficient across all major e-commerce platforms and technologies.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          ),
          title: "24/7 Proactive Monitoring",
          desc: "We identify and resolve issues before they impact your sales.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H7a3 3 0 00-3 3v8a3 3 0 003 3z"
              ></path>
            </svg>
          ),
          title: "Sales-Driven Solutions",
          desc: "Our support is focused on improving your store’s performance, conversions, and revenue.",
        },
        {
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-11V7a4 4 0 00-8 0v3"
              ></path>
            </svg>
          ),
          title: "Enhanced Security & Compliance",
          desc: "Protecting your valuable customer data and maintaining trust.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              ></path>
            </svg>
          ),
          title: "Scalability & Performance Optimization",
          desc: "Ensuring your store can handle traffic surges and grow with your business.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title: "Dedicated & Certified E-commerce Specialists",
          desc: "A team truly invested in your online retail success.",
        },
      ],
    },
    faqs: [
      {
        label: `What exactly does "E-commerce Support Service" entail?`,
        desc: "E-commerce support services encompass a wide range of technical and operational assistance for your online store, including website maintenance, performance optimization, security management, payment gateway troubleshooting, product management, third-party integrations, and resolving any issues that impact sales or user experience.",
        expanded: true,
      },
      {
        label:
          "Why do I need dedicated e-commerce support if I'm using a platform like Shopify or Wix?",
        desc: "While platforms like Shopify and Wix offer excellent core functionalities, dedicated support ensures your store is fully optimized, custom integrations work seamlessly, specific bugs are fixed quickly, and you receive expert guidance on performance, SEO, and advanced features that go beyond basic platform support.",
        expanded: false,
      },
      {
        label: "Can you help improve my e-commerce website's loading speed?",
        desc: "Yes, page speed optimization is a critical part of our service. We analyze your website's performance, optimize images, streamline code, implement caching, and recommend hosting improvements to significantly reduce loading times.",
        expanded: false,
      },
      {
        label:
          "My customers are abandoning their carts frequently. Can you help?",
        desc: "Absolutely. We can audit your checkout process, identify friction points, troubleshoot payment gateway issues, ensure clear pricing, and implement strategies like one-page checkout or abandoned cart recovery features to improve conversion rates.",
        expanded: false,
      },
      {
        label:
          "Do you offer support for specific e-commerce platforms like WooCommerce or BigCommerce?",
        desc: "Yes, our team has extensive expertise across all major e-commerce platforms including Shopify, BigCommerce, WordPress/WooCommerce, Adobe Commerce (Magento), OpenCart, Wix, Squarespace, and integrating with HubSpot.",
        expanded: false,
      },
      {
        label: "How do you handle security for e-commerce websites?",
        desc: "We implement comprehensive security measures including SSL certificate management, WAF (Web Application Firewall) configuration, regular vulnerability scanning, malware detection and removal, DDoS protection, and ensuring PCI DSS compliance for payment processing.",
        expanded: false,
      },
      {
        label:
          "Can you help with integrating my e-commerce store with my CRM or ERP system?",
        desc: "Yes, we specialize in integrating your e-commerce platform with essential business systems like CRMs (e.g., HubSpot), ERPs, accounting software, and email marketing platforms to ensure seamless data flow and automation.",
        expanded: false,
      },
      {
        label:
          "What if my website experiences an outage during peak shopping hours?",
        desc: "Our 24/7 proactive monitoring system is designed to detect outages immediately. For critical issues, we have rapid response protocols in place to diagnose and restore your e-commerce store as quickly as possible, minimizing revenue loss.",
        expanded: false,
      },
      {
        label: "Do you provide SEO optimization services for product pages?",
        desc: "Yes, we offer technical SEO audits, keyword research, on-page optimization for product and category pages, meta tag optimization, structured data (schema markup) implementation, and sitemap management to improve your organic search visibility.",
        expanded: false,
      },
      {
        label: "How quickly can you resolve common e-commerce issues?",
        desc: "Resolution times depend on the complexity of the issue. However, our goal is always rapid resolution. We prioritize critical issues to ensure minimal disruption to your sales, with most common problems fixed within hours or a day.",
        expanded: false,
      },
    ],
  },
  {
    slug: "hardware-repair-support-services",
    title: "Unrivaled Hardware Support Services",
    subtitle:
      "Powering Your Performance: Over a Decade of Global Hardware Excellence for 100,000+ Customers",
    subtitle1: `In the fast-paced digital landscape, reliable hardware is the bedrock of productivity and innovation. Whether it's a critical server, a high-performance workstation, or your everyday laptop, hardware failures can halt operations, frustrate users, and cost businesses dearly. At ITSupport.net.in, we understand the indispensable role hardware plays in your daily workflow. For over 10 years, we have been the trusted partner for over 100,000 customers globally, providing comprehensive and proactive hardware support services that ensure your devices run smoothly, efficiently, and reliably. From diagnostics to repair and component replacement, our expert team is dedicated to maximizing the lifespan and performance of your valuable hardware assets.`,
    heroRightSideIcons: [
      <Cpu className="w-6 h-6 text-white" />,
      <Wrench className="w-6 h-6 text-white" />,
    ],
    heroImage:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline:
        "Conquering Hardware Headaches: Common Issues We Expertly Resolve",
      subheadline: "",
      description:
        "Hardware problems can manifest in various frustrating ways, often appearing suddenly and bringing work to a standstill. Our certified technicians are skilled at identifying, troubleshooting, and rectifying a broad spectrum of hardware issues, minimizing your downtime and restoring your system's functionality.",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Why Choose Our Hardware Repair?",
      services: [
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
              <path d="M10 6h4"></path>
              <path d="M10 10h4"></path>
              <path d="M10 14h4"></path>
              <path d="M10 18h4"></path>
            </svg>
          ),
          title: "All Major Brands",
          description: "Repairs for Dell, HP, Lenovo, Apple, and more.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"></path>
              <path d="M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"></path>
              <path d="M6 6h.01"></path>
              <path d="M6 18h.01"></path>
              <path d="m13 6-4 6h6l-4 6"></path>
            </svg>
          ),
          title: "Quick Turnaround",
          description: "Most repairs completed within 24–48 hours.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M12 3V2"></path>
              <path d="m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5"></path>
              <path d="M2 14h12a2 2 0 0 1 0 4h-2"></path>
              <path d="M4 10h16"></path>
              <path d="M5 10a7 7 0 0 1 14 0"></path>
              <path d="M5 14v6a1 1 0 0 1-1 1H2"></path>
            </svg>
          ),
          title: "Preventive Maintenance",
          description: "Upgrades and maintenance to prevent future issues.",
        },
      ],
    },
    issuecategory: {
      title: "Conquering Hardware Headaches: Common Issues We Expertly Resolve",
      subTitle:
        "A slow, unresponsive, or frequently crashing system can severely impact productivity and user experience.",
      issueCategories: [
        {
          title: "Performance Degradation & System Instability",
          description:
            "A slow, unresponsive, or frequently crashing system can severely impact productivity and user experience.",
          issues: [
            {
              title: "Overheating & Unexpected Shutdowns",
              problemDescription:
                "Your device feels unusually hot, fans run constantly at high speed, or the system suddenly shuts down. This is often caused by accumulated dust in cooling vents, failing fans, or excessive workload on components leading to thermal throttling.",
              solution:
                "We perform thorough internal cleaning, inspect and replace faulty cooling fans, reapply thermal paste to CPUs/GPUs, and advise on proper ventilation to prevent overheating, ensuring stable operation and component longevity.",
            },
            {
              title: "Slow Boot Times & Application Lag",
              problemDescription:
                "Your computer takes an eternity to start, or applications are painfully slow and unresponsive. This could be due to a failing hard drive (especially HDDs), insufficient RAM, outdated drivers, or a struggling CPU.",
              solution:
                "We diagnose the bottleneck, recommending SSD upgrades for faster boot and application load times, assess and upgrade RAM for multitasking efficiency, update crucial drivers, and optimize system configurations for peak performance.",
            },
          ],
        },
        {
          title: "Component Failure & Malfunctions",
          description:
            "When a critical hardware component fails, your system can become entirely unusable.",
          issues: [
            {
              title: "Hard Drive Failure & Data Loss Risk",
              problemDescription:
                'You hear clicking noises from your hard drive, experience frequent crashes, or receive "disk error" messages, indicating imminent drive failure and potential data loss.',
              solution:
                "We use diagnostic tools to assess drive health, perform data recovery attempts (where possible), and recommend timely replacement with new HDDs or faster, more reliable SSDs to prevent catastrophic data loss.",
            },
            {
              title: "Graphics Card (GPU) Issues & Display Problems",
              problemDescription:
                "Your screen shows distorted images, artifacts, black screens, or games/applications crash frequently, pointing to a failing or overheating graphics card, or corrupted drivers.",
              solution:
                "We troubleshoot display connectivity, verify and update graphics drivers, address overheating issues, and diagnose whether the GPU needs repair or replacement, ensuring clear and stable visual output.",
            },
          ],
        },
        {
          title: "Peripheral & Connectivity Problems",
          description:
            "Even functional core hardware can be rendered ineffective if peripherals don't connect or work correctly.",
          issues: [
            {
              title: "USB Ports Not Working or Device Not Recognized",
              problemDescription:
                "Your USB devices (mouse, keyboard, external drives) are not detected, or the ports provide no power. This can be due to driver issues, faulty ports, or power management settings.",
              solution:
                "We check device drivers, troubleshoot USB controller issues, inspect physical ports for damage, and adjust power management settings to ensure all your peripherals connect and function correctly.",
            },
            {
              title: "Audio & Sound Malfunctions",
              problemDescription:
                "No sound from speakers/headphones, distorted audio, or microphone not working. This can stem from faulty audio jacks, corrupted audio drivers, or issues with the sound card itself.",
              solution:
                "We diagnose audio driver conflicts, check physical connections, test audio hardware components, and reconfigure sound settings to restore crystal-clear audio output and input.",
            },
          ],
        },
      ],
    },
    issuecategory2: {
      title: "Expert Support Across Leading Hardware Brands",
      subTitle:
        "Our team possesses in-depth knowledge and specialized tools to support a wide array of hardware brands, ensuring that no matter your device, you receive expert, tailored assistance.",
      issueCategories: [
        {
          title: "Apple Support",
          description:
            "From MacBook Pros to iMacs, Apple hardware is known for its premium design and ecosystem, but it can still encounter issues. Our Apple hardware support includes:",
          issues: [
            {
              title: "Apple Hardware Services",
              type: "list",
              options: [
                {
                  title: "MacBook & iMac Diagnostics:",
                  desc: "Addressing battery drain, overheating, display flickering, non-responsive trackpads/keyboards, and power-on issues.",
                },
                {
                  title: "Component Replacement:",
                  desc: "Replacing logic boards, displays, batteries, storage drives (SSDs), and addressing liquid damage.",
                },
                {
                  title: "Software & Hardware Integration:",
                  desc: "Troubleshooting macOS-related hardware conflicts, ensuring smooth peripheral operation, and managing firmware updates.",
                },
              ],
            },
          ],
        },
        {
          title: "Samsung Support",
          description:
            "Samsung's diverse range of laptops, monitors, and components requires specialized attention. Our Samsung hardware support covers:",
          issues: [
            {
              title: "Samsung Hardware Services",
              type: "list",
              options: [
                {
                  title: "Laptop & Desktop Troubleshooting:",
                  desc: "Resolving issues like rapid battery drain, screen flickering, non-responsive touchscreens/keyboards, and overheating in Samsung notebooks and desktops.",
                },
                {
                  title: "Monitor Repair:",
                  desc: "Addressing display panel issues, backlight problems, and connectivity failures for Samsung monitors.",
                },
                {
                  title: "Component-Level Repair:",
                  desc: "Diagnosing and replacing faulty mainboards, power supplies, and internal connectors in Samsung devices.",
                },
              ],
            },
          ],
        },
        {
          title: "Dell Support",
          description:
            "Dell systems are widely used in both business and personal environments. Our Dell hardware support services include:",
          issues: [
            {
              title: "Dell Hardware Services",
              type: "list",
              options: [
                {
                  title: "OptiPlex, Latitude, XPS Diagnostics:",
                  desc: "Addressing common issues such as non-powering systems, slow performance, battery life degradation, Wi-Fi connectivity problems, and Blue Screen of Death (BSOD) errors specific to Dell hardware.",
                },
                {
                  title: "Precision Workstation & Server Support:",
                  desc: "Troubleshooting complex hardware failures in Dell servers and workstations, including RAID issues, power supply unit (PSU) failures, and memory module diagnostics.",
                },
                {
                  title: "Driver & Firmware Management:",
                  desc: "Ensuring Dell-specific drivers and BIOS/firmware are up-to-date for optimal performance and stability.",
                },
              ],
            },
          ],
        },
        {
          title: "HP Support",
          description:
            "HP devices are ubiquitous, from consumer laptops to enterprise-grade servers and workstations. Our HP hardware support covers:",
          issues: [
            {
              title: "HP Hardware Services",
              type: "list",
              options: [
                {
                  title: "Consumer & Business PC Troubleshooting:",
                  desc: "Resolving issues like connectivity problems, screen malfunctions, battery issues, keyboard unresponsiveness, and persistent performance lags in HP laptops and desktops.",
                },
                {
                  title: "ProLiant Server Support:",
                  desc: "Diagnosing and repairing hardware faults in HP servers, including hard drive arrays, power supply units, and network interface cards.",
                },
                {
                  title: "Component Replacement & Upgrades:",
                  desc: "Performing upgrades to RAM, SSDs, and replacing faulty components in HP systems.",
                },
              ],
            },
          ],
        },
        {
          title: "Lenovo Support",
          description:
            "Lenovo, known for its robust ThinkPads and innovative designs, also requires expert hardware care. Our Lenovo hardware support includes:",
          issues: [
            {
              title: "Lenovo Hardware Services",
              type: "list",
              options: [
                {
                  title: "ThinkPad & IdeaPad Diagnostics:",
                  desc: "Addressing common problems such as power-on failures, display issues (blank screen, flickering), keyboard/trackpad malfunctions, and overheating in Lenovo laptops and desktops.",
                },
                {
                  title: "ThinkCentre & ThinkStation Support:",
                  desc: "Troubleshooting hardware issues in Lenovo desktops and workstations, including motherboard failures, power supply problems, and storage device issues.",
                },
                {
                  title: "Docking Station & Peripheral Connectivity:",
                  desc: "Resolving issues with Lenovo docking stations and ensuring seamless connection to external monitors and peripherals.",
                },
              ],
            },
          ],
        },
        {
          title: "NVIDIA Support",
          description:
            "NVIDIA's graphics cards (GeForce, Quadro, Tesla) are critical for gaming, design, and AI. Our NVIDIA support focuses on:",
          issues: [
            {
              title: "NVIDIA Hardware Services",
              type: "list",
              options: [
                {
                  title: "GPU Diagnostics & Repair:",
                  desc: "Troubleshooting display issues, driver crashes, black screening, artifacting, and overheating problems specifically related to NVIDIA graphics cards.",
                },
                {
                  title: "Driver Management:",
                  desc: "Performing clean installations of NVIDIA drivers, resolving driver conflicts, and ensuring compatibility with your operating system and applications.",
                },
                {
                  title: "Component-Level GPU Repair:",
                  desc: "Addressing issues like fan failures, power delivery problems, and VRAM stability on NVIDIA GPUs.",
                },
              ],
            },
          ],
        },
        {
          title: "Intel Support",
          description:
            "Intel's CPUs, chipsets, and integrated graphics are at the core of countless systems. Our Intel support services include:",
          issues: [
            {
              title: "Intel Hardware Services",
              type: "list",
              options: [
                {
                  title: "CPU & Motherboard Diagnostics:",
                  desc: "Troubleshooting processor instability (especially 13th/14th Gen Intel Core issues), overheating caused by CPU, and chipset-related problems.",
                },
                {
                  title: "Driver & Firmware Updates:",
                  desc: "Ensuring Intel chipset drivers, Management Engine firmware, and integrated graphics drivers are correctly installed and up-to-date.",
                },
                {
                  title: "System Performance Optimization:",
                  desc: "Addressing performance bottlenecks related to Intel's platform architecture, including memory compatibility and power delivery issues.",
                },
              ],
            },
          ],
        },
        {
          title: "ASUS Support",
          description:
            "ASUS offers a wide range of hardware, from motherboards and graphics cards to laptops and desktops. Our ASUS hardware support encompasses:",
          issues: [
            {
              title: "ASUS Hardware Services",
              type: "list",
              options: [
                {
                  title: "Motherboard Troubleshooting:",
                  desc: "Diagnosing POST (Power-On Self-Test) failures, BIOS issues, component compatibility problems, and power delivery issues on ASUS motherboards.",
                },
                {
                  title: "Laptop & Desktop Repair:",
                  desc: "Addressing common problems like non-functioning components, display issues, overheating, and power problems in ASUS laptops (ROG, ZenBook) and desktops.",
                },
                {
                  title: "Graphics Card & Peripheral Support:",
                  desc: "Troubleshooting ASUS-branded graphics cards, monitors, and other peripherals, including driver issues and physical component failures.",
                },
              ],
            },
          ],
        },
        {
          title: "Why Partner with ITSupport.net.in for Hardware Services?",
          description:
            "Choosing ITSupport.net.in for your hardware support means leveraging over a decade of hands-on experience and a track record of serving 10,000+ satisfied customers globally. Our commitment to your operational continuity is built on:",
          issues: [
            {
              title: "Key Advantages",
              type: "list",
              options: [
                {
                  title: "Multi-Brand Expertise:",
                  desc: "Proficient in diagnosing and repairing hardware from all major manufacturers.",
                },
                {
                  title: "Component-Level Repair:",
                  desc: "Beyond simple fixes, we can often repair components, saving you replacement costs.",
                },
                {
                  title: "24/7 Rapid Response:",
                  desc: "Quick diagnosis and efficient resolution to minimize hardware downtime.",
                },
                {
                  title: "Preventative Maintenance:",
                  desc: "Proactive services to extend the lifespan of your hardware and prevent future issues.",
                },
                {
                  title: "Genuine Parts & Quality Service:",
                  desc: "Using authentic replacement parts and delivering top-tier technical assistance.",
                },
                {
                  title: "Global Reach, Local Touch:",
                  desc: "Expert support available wherever you are, with personalized service.",
                },
              ],
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
    whyChoose: {
      title: "Why Partner with ITSupport.net.in for Hardware Services?",
      desc: "Choosing ITSupport.net.in for your hardware support means leveraging over a decade of hands-on experience and a track record of serving 10,000+ satisfied customers globally. Our commitment to your operational continuity is built on:",
      whyChoosecategories: [
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title: "Multi-Brand Expertise",
          desc: "Proficient in diagnosing and repairing hardware from all major manufacturers.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          ),
          title: "Component-Level Repair",
          desc: "Beyond simple fixes, we can often repair components, saving you replacement costs.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H7a3 3 0 00-3 3v8a3 3 0 003 3z"
              ></path>
            </svg>
          ),
          title: "24/7 Rapid Response",
          desc: "Quick diagnosis and efficient resolution to minimize hardware downtime.",
        },
        {
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-11V7a4 4 0 00-8 0v3"
              ></path>
            </svg>
          ),
          title: "Preventative Maintenance",
          desc: "Proactive services to extend the lifespan of your hardware and prevent future issues.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              ></path>
            </svg>
          ),
          title: "Genuine Parts & Quality Service",
          desc: "Using authentic replacement parts and delivering top-tier technical assistance.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title: "Global Reach, Local Touch",
          desc: "Expert support available wherever you are, with personalized service.",
        },
      ],
    },
    faqs: [
      {
        label:
          "What types of hardware issues does ITSupport.net.in typically resolve?",
        desc: "We resolve a wide range of hardware issues, including slow performance, overheating, unexpected shutdowns, hard drive failures, graphics card problems, power supply issues, memory errors, faulty motherboards, and issues with peripherals like keyboards, mice, and monitors.",
        expanded: true,
      },
      {
        label:
          "Do you support all major hardware brands like Apple, Dell, HP, etc.?",
        desc: "Yes, our technicians are highly experienced and trained to provide comprehensive hardware support for all major brands, including Apple, Samsung, Dell, HP, Lenovo, as well as components from NVIDIA and Intel, and systems from ASUS.",
        expanded: false,
      },
      {
        label:
          "Can you perform repairs on-site, or do I need to send my device in?",
        desc: "Our service approach is flexible. Depending on the issue's complexity and your location, we offer both remote diagnostics and troubleshooting, as well as on-site repair services and pick-up/drop-off options for more extensive repairs at our service centers.",
        expanded: false,
      },
      {
        label: "How quickly can you diagnose a hardware problem?",
        desc: "Our diagnosis process is efficient. Many common issues can be diagnosed remotely within minutes to a few hours. For complex or intermittent problems, a more in-depth diagnostic process may be required, which we aim to complete as quickly as possible.",
        expanded: false,
      },
      {
        label: "Do you use genuine replacement parts for repairs?",
        desc: "Yes, we prioritize the use of genuine OEM (Original Equipment Manufacturer) parts whenever possible to ensure compatibility, reliability, and to maintain the integrity of your device. If genuine parts are unavailable, we use high-quality, tested aftermarket alternatives with your approval.",
        expanded: false,
      },
      {
        label:
          "Can you help with hardware upgrades (e.g., adding more RAM, upgrading to SSD)?",
        desc: "Absolutely. We provide hardware upgrade services, including installing additional RAM, upgrading traditional HDDs to faster SSDs, and enhancing graphics cards to boost your system's performance.",
        expanded: false,
      },
      {
        label: "What measures do you take to prevent future hardware issues?",
        desc: "We offer preventative maintenance services such as internal cleaning to prevent overheating, regular system diagnostics, driver and firmware updates, and advice on proper device usage and environmental conditions to extend hardware lifespan.",
        expanded: false,
      },
      {
        label: "Is my data safe during a hardware repair?",
        desc: "We take data privacy and security very seriously. While we recommend backing up your data before any major repair, our technicians are trained to handle devices with utmost care, and we implement strict protocols to protect your information throughout the service process.",
        expanded: false,
      },
      {
        label: "Do you offer warranty on your hardware repair services?",
        desc: "Yes, we provide a service warranty on our repairs and replacement parts. The duration of the warranty depends on the specific service rendered and the components replaced, which will be clearly communicated to you.",
        expanded: false,
      },
      {
        label: "What if my hardware is beyond repair?",
        desc: "If a device is deemed beyond economical repair or completely irreparable, we will advise you honestly about the situation. We can also provide recommendations for suitable replacement hardware and assist with data migration to your new system.",
        expanded: false,
      },
    ],
  },
  {
    slug: "website-hosting-domain-support-services",
    title: "Uninterrupted Online Presence",
    subtitle:
      "Your Digital Foundation, Our Expertise: Over a Decade of Global Web Hosting Excellence",
    subtitle1: `In today's digital-first world, your website is often the first point of contact for customers, the engine of your online business, and a reflection of your brand. Any hiccup in its availability or performance can translate directly into lost opportunities and revenue. At ITSupport.net.in, we deeply understand the critical importance of a stable, secure, and fast web presence. For over 10 years, we have proudly served more than 1,000 customers globally, providing comprehensive web hosting support services that ensure your website is always online, responsive, and secure. We handle the complexities of hosting, so you can focus on growing your digital footprint without worry.`,
    heroRightSideIcons: [
      <Globe className="w-6 h-6 text-white" />,
      <Server className="w-6 h-6 text-white" />,
    ],
    heroImage:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline:
        "Navigating the Hosting Landscape: Common Challenges We Expertly Resolve",
      subheadline: "",
      description:
        "Web hosting environments, while robust, are susceptible to a range of issues that can impact your website's performance, security, and accessibility. Our team of certified web hosting specialists is adept at diagnosing, troubleshooting, and resolving these intricate problems, ensuring your online assets remain fully functional and optimized.",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Why Choose Our Hosting & Domain Support?",
      services: [
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
              <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path>
              <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
          ),
          title: "Domain Management",
          description: "Purchase, transfer, and configure domains with ease.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
              <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
              <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
            </svg>
          ),
          title: "Seamless Migration",
          description:
            "Smooth website and email migration with minimal downtime.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M12 9v1.258"></path>
              <path d="M16 3v5.46"></path>
              <path d="M21 9.118V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5.75"></path>
              <path d="M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z"></path>
              <path d="M3 15h7"></path>
              <path d="M3 9h12.142"></path>
              <path d="M8 15v6"></path>
              <path d="M8 3v6"></path>
            </svg>
          ),
          title: "SSL & Security",
          description:
            "SSL certificate setup and proactive security monitoring.",
        },
      ],
    },
    issuecategory: {
      title:
        "Navigating the Hosting Landscape: Common Challenges We Expertly Resolve",
      subTitle:
        "Web hosting environments, while robust, are susceptible to a range of issues that can impact your website's performance, security, and accessibility. Our team of certified web hosting specialists is adept at diagnosing, troubleshooting, and resolving these intricate problems, ensuring your online assets remain fully functional and optimized.",
      issueCategories: [
        {
          title: "Website Downtime & Performance Issues",
          description:
            "Nothing is more detrimental to an online business than an inaccessible or sluggish website. We ensure your site stays up and running efficiently.",
          issues: [
            {
              title: "Frequent Website Outages & 'Site Down' Errors",
              problemDescription:
                "Your website periodically becomes inaccessible, displaying '500 Internal Server Error,' 'Error Establishing a Database Connection,' or simply not loading. This can be caused by server overload, resource limits being hit, misconfigured server settings, or malicious attacks.",
              solution:
                "We conduct immediate server status checks, analyze server logs to pinpoint the root cause (e.g., exhausted CPU/RAM, too many processes), optimize server configurations, implement load balancing, and work with your hosting provider to resolve server-side issues and restore uptime quickly.",
            },
            {
              title: "Slow Website Loading Speeds",
              problemDescription:
                "Your website takes an unacceptably long time to load, leading to high bounce rates and poor user experience. Factors include unoptimized code, large images, lack of caching, inefficient database queries, or inadequate server resources.",
              solution:
                "We perform comprehensive speed audits, optimize website code and databases, implement server-side and client-side caching, integrate Content Delivery Networks (CDNs), optimize images, and advise on upgrading hosting plans if current resources are insufficient, ensuring lightning-fast page loads.",
            },
          ],
        },
        {
          title: "Security Vulnerabilities & Attacks",
          description:
            "E-commerce and content websites are constant targets for cyber threats. Proactive security is paramount.",
          issues: [
            {
              title: "Malware Infections & Hacking Attempts",
              problemDescription:
                "Your website is suddenly redirecting to malicious sites, displaying unwanted ads, or you receive alerts about malware or unauthorized access. This indicates a security breach, often due to outdated software, weak passwords, or vulnerable plugins.",
              solution:
                "We perform thorough malware scans, remove malicious code, harden server security, configure Web Application Firewalls (WAFs), implement intrusion detection systems, and apply necessary security patches to prevent future attacks.",
            },
            {
              title: "SSL Certificate Errors & Data Encryption Failures",
              problemDescription:
                "Visitors see 'Not Secure' warnings in their browser, or your SSL certificate has expired or is incorrectly installed, compromising data encryption and user trust.",
              solution:
                "We assist with SSL certificate installation, renewal, and troubleshooting common errors (e.g., mixed content warnings), ensuring your website encrypts all data transfer and maintains visitor trust.",
            },
          ],
        },
        {
          title: "Database & Application Conflicts",
          description:
            "The backend of your website, including databases and content management systems, is complex and prone to errors.",
          issues: [
            {
              title: "Database Connection Errors & Corruption",
              problemDescription:
                "Your website displays 'Error Establishing a Database Connection,' or data is missing/corrupted. This can result from incorrect database credentials, an overloaded database server, or database corruption.",
              solution:
                "We verify database configurations, optimize database queries, repair corrupted databases, perform regular database backups, and troubleshoot server-side database issues to ensure seamless data retrieval.",
            },
            {
              title: "CMS (WordPress, Joomla, Drupal) Malfunctions",
              problemDescription:
                "Your Content Management System (CMS) such as WordPress, Joomla, or Drupal, experiences 'White Screen of Death,' plugin/theme conflicts, update failures, or administrative panel access issues.",
              solution:
                "We diagnose and resolve plugin/theme conflicts, perform safe CMS core updates, troubleshoot database connectivity for CMS, and rectify file permission errors, ensuring your CMS functions flawlessly.",
            },
          ],
        },
        {
          title: "Email Hosting & DNS Management Hurdles",
          description:
            "Email communication and domain resolution are crucial for business operations.",
          issues: [
            {
              title: "Email Delivery Issues (Sending/Receiving Failures, Spam)",
              problemDescription:
                "You can't send or receive emails associated with your domain, or your legitimate emails are landing in spam folders. This often involves incorrect DNS records (MX records), misconfigured email clients, or blacklisting.",
              solution:
                "We troubleshoot MX records, SPF, DKIM, and DMARC settings, configure email client settings (POP/IMAP/SMTP), and work to delist your domain from blacklists to ensure reliable email delivery.",
            },
            {
              title: "DNS Propagation & Configuration Errors",
              problemDescription:
                "Your website is inaccessible after a domain transfer or DNS change, or different users see different versions of your site due to slow DNS propagation or incorrect DNS records.",
              solution:
                "We verify DNS records (A, CNAME, NS), troubleshoot propagation delays, ensure correct domain pointing, and assist with complex DNS configurations, guaranteeing your domain resolves correctly worldwide.",
            },
          ],
        },
        {
          title: "Backup, Migration & Resource Management",
          description:
            "Ensuring data safety and smooth transitions are vital for hosting continuity.",
          issues: [
            {
              title: "Inadequate Backup & Recovery Strategies",
              problemDescription:
                "You lack regular, reliable backups of your website data, or your recovery process is slow and complicated, risking significant data loss in case of a disaster.",
              solution:
                "We implement automated daily/weekly backups, configure off-site storage solutions, and create robust disaster recovery plans, ensuring your website data can be quickly and fully restored.",
            },
            {
              title: "Hosting Account Migration Challenges",
              problemDescription:
                "Moving your website from one hosting provider to another, or from a development environment to live, can be complex, leading to downtime, data corruption, or broken functionalities.",
              solution:
                "We perform seamless website migrations with minimal downtime, ensuring all files, databases, and configurations are transferred accurately and tested thoroughly on the new hosting environment.",
            },
          ],
        },
      ],
    },
    issuecategory2: {
      title: "Expert Support Across Leading Web Hosting Providers",
      subTitle:
        "Our profound expertise spans the most widely used web hosting providers, ensuring that no matter where your website is hosted, you receive expert, tailored assistance.",
      issueCategories: [
        {
          title: "Hostinger Support",
          description:
            "Known for its affordable plans and user-friendly hPanel, Hostinger is a popular choice. Our Hostinger support includes:",
          issues: [
            {
              title: "Core Hostinger Services",
              type: "list",
              options: [
                {
                  title: "hPanel Navigation & Optimization:",
                  desc: "Assisting with website builder issues, domain pointing, email setup, and general configuration within hPanel.",
                },
                {
                  title: "Performance Tuning:",
                  desc: "Optimizing websites hosted on Hostinger for speed, including LSCache configuration and resource usage monitoring.",
                },
                {
                  title: "Security & Troubleshooting:",
                  desc: "Resolving common issues like website not loading, database connection errors, and managing security settings and SSL.",
                },
              ],
            },
          ],
        },
        {
          title: "Bluehost Support",
          description:
            "A long-standing hosting provider popular for WordPress sites, Bluehost requires specific knowledge for optimal performance. Our Bluehost support covers:",
          issues: [
            {
              title: "Core Bluehost Services",
              type: "list",
              options: [
                {
                  title: "WordPress Optimization:",
                  desc: "Resolving common WordPress issues on Bluehost, including plugin conflicts, theme errors, and performance bottlenecks.",
                },
                {
                  title: "cPanel Management:",
                  desc: "Assisting with cPanel navigation, file management, database management, and email account setup.",
                },
                {
                  title: "Account Troubleshooting:",
                  desc: "Diagnosing issues related to account suspension, domain pointing, and ensuring stable server performance on Bluehost's infrastructure.",
                },
              ],
            },
          ],
        },
        {
          title: "SiteGround Support",
          description:
            "SiteGround is favored for its speed and advanced features for developers and WordPress users. Our SiteGround support entails:",
          issues: [
            {
              title: "Core SiteGround Services",
              type: "list",
              options: [
                {
                  title: "SG Optimizer & Speed Issues:",
                  desc: "Fine-tuning SiteGround's custom caching (SuperCacher), optimizing PHP versions, and resolving performance-related issues specific to SiteGround's environment.",
                },
                {
                  title: "Security & Staging:",
                  desc: "Managing SiteGround's security features, assisting with SSL setup, and utilizing their staging environments for safe development.",
                },
                {
                  title: "Migration & Advanced Configurations:",
                  desc: "Seamless website migrations to/from SiteGround and handling complex configurations within their Site Tools interface.",
                },
              ],
            },
          ],
        },
        {
          title: "GoDaddy Support",
          description:
            "One of the largest domain registrars and hosting providers, GoDaddy offers a wide range of services. Our GoDaddy support focuses on:",
          issues: [
            {
              title: "Core GoDaddy Services",
              type: "list",
              options: [
                {
                  title: "Domain & DNS Management:",
                  desc: "Troubleshooting domain pointing, DNS record configuration, and resolving domain-related access issues.",
                },
                {
                  title: "Web Hosting & cPanel/Plesk:",
                  desc: "Assisting with website file management, database issues, email setup, and navigating either cPanel or Plesk control panels within GoDaddy hosting.",
                },
                {
                  title: "Website Builder & WordPress Hosting:",
                  desc: "Resolving issues with GoDaddy's website builder, and troubleshooting common WordPress hosting problems on their platform.",
                },
              ],
            },
          ],
        },
        {
          title: "DreamHost Support",
          description:
            "DreamHost is known for its strong open-source commitment and managed WordPress hosting. Our DreamHost support includes:",
          issues: [
            {
              title: "Core DreamHost Services",
              type: "list",
              options: [
                {
                  title: "Shared & VPS Hosting Optimization:",
                  desc: "Performance tuning for websites hosted on DreamHost's shared or VPS environments, addressing resource limits.",
                },
                {
                  title: "WordPress & Custom Code Troubleshooting:",
                  desc: "Resolving WordPress issues, debugging custom code, and ensuring compatibility with DreamHost's server environment.",
                },
                {
                  title: "Domain & Email Configuration:",
                  desc: "Assisting with domain management within the DreamHost panel, setting up email accounts, and troubleshooting email delivery issues.",
                },
              ],
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
    whyChoose: {
      title: "Why Partner with ITSupport.net.in for Web Hosting Success?",
      desc: "Choosing ITSupport.net.in as your web hosting support partner means leveraging over a decade of dedicated expertise and a global track record of empowering 1,000+ satisfied customers. Our commitment to your online success is built on:",
      whyChoosecategories: [
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title: "Platform-Agnostic Expertise",
          desc: "Proficient across all major web hosting providers and technologies.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          ),
          title: "24/7 Proactive Monitoring",
          desc: "We detect and resolve hosting issues often before they impact your website.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H7a3 3 0 00-3 3v8a3 3 0 003 3z"
              ></path>
            </svg>
          ),
          title: "Speed & Uptime Focus",
          desc: "Our primary goal is to ensure your website is consistently fast and available.",
        },
        {
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-11V7a4 4 0 00-8 0v3"
              ></path>
            </svg>
          ),
          title: "Enhanced Security",
          desc: "Robust measures to protect your website from malware, hacks, and data breaches.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              ></path>
            </svg>
          ),
          title: "Seamless Migrations & Backups",
          desc: "Ensuring your data is always safe and transitions are smooth.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title: "Dedicated & Certified Hosting Specialists",
          desc: "A team truly invested in your online presence and growth.",
        },
      ],
    },
    faqs: [
      {
        label: "What common problems does Web Hosting Support address?",
        desc: "Web Hosting Support addresses issues like website downtime, slow loading speeds, malware infections, security breaches, SSL certificate errors, database connection problems, email delivery failures, DNS configuration issues, and website migration challenges.",
        expanded: true,
      },
      {
        label: "Can you help if my website is already down or hacked?",
        desc: "Yes, absolutely. We provide emergency response for website outages and security incidents. We will work quickly to diagnose the cause, remove malware, restore your website from backups, and implement measures to prevent future occurrences.",
        expanded: false,
      },
      {
        label:
          "Do you support all popular hosting providers like Hostinger, GoDaddy, and SiteGround?",
        desc: "Yes, our expert team has extensive experience working with and troubleshooting issues across all major web hosting providers, including Hostinger, Bluehost, SiteGround, GoDaddy, DreamHost, and many others.",
        expanded: false,
      },
      {
        label: "How do you improve my website's loading speed?",
        desc: "We improve website speed through various techniques such as optimizing images, minifying code (CSS, JavaScript), implementing caching (server-side and browser-side), enabling CDN (Content Delivery Network), optimizing database queries, and ensuring efficient server configurations.",
        expanded: false,
      },
      {
        label: "What security measures do you implement for my hosted website?",
        desc: "We implement robust security measures including SSL certificate management, malware scanning and removal, Web Application Firewall (WAF) configuration, regular security audits, brute-force protection, and ensuring strong access control.",
        expanded: false,
      },
      {
        label: "Can you assist with migrating my website to a new host?",
        desc: "Yes, we provide seamless website migration services. We handle the entire process, including transferring all your website files, databases, and configurations to the new hosting environment with minimal downtime.",
        expanded: false,
      },
      {
        label: "What is included in your website backup service?",
        desc: "Our backup service includes setting up automated daily or weekly backups of your entire website (files and database) to secure off-site locations. We also provide swift restoration services in case of data loss or disaster.",
        expanded: false,
      },
      {
        label:
          "My emails associated with my domain are not working. Can you help?",
        desc: "Yes, we can. We troubleshoot common email hosting issues such as problems with sending or receiving emails, emails going to spam, and incorrect email client configurations. We also verify DNS records like MX, SPF, and DMARC.",
        expanded: false,
      },
      {
        label: "Do you offer 24/7 support for web hosting issues?",
        desc: "Yes, our web hosting support team is available 24/7. We understand that website issues can arise at any time, so we provide round-the-clock monitoring and rapid response to ensure your website is always online.",
        expanded: false,
      },
      {
        label:
          "How do you help with CMS-specific problems (e.g., WordPress errors)?",
        desc: 'For CMS-specific problems, we diagnose and fix issues like plugin/theme conflicts, "White Screen of Death," database connection errors, update failures, and security vulnerabilities unique to platforms like WordPress, Joomla, or Drupal, ensuring your CMS runs smoothly.',
        expanded: false,
      },
    ],
  },
  {
    slug: "email-setup-support",
    title:
      "Seamless Communication: Expert Email Support Services by ITSupport.net.in",
    subtitle:
      "Your Inbox, Our Priority: Over a Decade of Global Excellence for 100,000+ Customers",
    subtitle1: `In today's interconnected world, email is the lifeblood of communication for businesses and individuals alike. It's how you connect with clients, collaborate with colleagues, and manage critical information. Any disruption to your email service can lead to missed opportunities, operational delays, and significant frustration. At ITSupport.net.in, we understand that a reliable and secure email experience is non-negotiable. For over 10 years, we have proudly served more than 100,000 customers globally, providing comprehensive email support services that ensure your messages are always delivered, your inboxes are secure, and your communication flows without a hitch. We handle the complexities of email, so you can focus on what truly matters: connecting with your world.`,
    heroRightSideIcons: [
      <Mail className="w-6 h-6 text-white" />,
      <ShieldCheck className="w-6 h-6 text-white" />,
    ],
    heroImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline:
        "Ensuring Reliable Email Operations: Common Challenges We Expertly Handle",
      subheadline: "",
      description:
        "Email systems, while essential, can face disruptions that impact communication, productivity, and security. Our certified email support specialists diagnose, troubleshoot, and resolve these issues promptly, ensuring your inbox remains secure, your messages are delivered on time, and your organization's communication stays uninterrupted.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Why Choose Our Hosting & Domain Support?",
      services: [
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
              <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path>
              <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
          ),
          title: "Domain Management",
          description: "Purchase, transfer, and configure domains with ease.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
              <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
              <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
            </svg>
          ),
          title: "Seamless Migration",
          description:
            "Smooth website and email migration with minimal downtime.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M12 9v1.258"></path>
              <path d="M16 3v5.46"></path>
              <path d="M21 9.118V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5.75"></path>
              <path d="M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z"></path>
              <path d="M3 15h7"></path>
              <path d="M3 9h12.142"></path>
              <path d="M8 15v6"></path>
              <path d="M8 3v6"></path>
            </svg>
          ),
          title: "SSL & Security",
          description:
            "SSL certificate setup and proactive security monitoring.",
        },
      ],
    },
    issuecategory: {
      title:
        "Expert Support Across Leading Email & Marketing Platforms",
      subTitle:
        "Our expertise extends across the most popular personal and business email platforms, as well as essential email marketing services, ensuring your communication tools are always optimized, secure, and fully functional.",
      issueCategories: [
        {
          title: "Google Workspace (Gmail, Calendar, Drive) Support",
          description:
            "Gmail, as part of Google Workspace, is a powerhouse for personal and business communication. Our support covers:",
          issues: [
            {
              title: "Core Google Workspace Services",
              type: "list",
              options: [
                {
                  title: "Gmail Functionality",
                  desc: "Resolving issues with Gmail interface, filters, labels, search, attachments, and ensuring smooth operation of integrated Calendar and Drive.",
                },
                {
                  title: "Workspace Admin Console",
                  desc: "Assisting with user management, domain verification, MX record configuration, security settings, and shared mailbox setup for Google Workspace accounts.",
                },
                {
                  title: "Deliverability & Sync",
                  desc: "Troubleshooting email sending/receiving problems, sync issues with desktop clients, and ensuring optimal deliverability for both personal and business Gmail accounts.",
                },
              ],
            },
          ],
        },
        {
          title: "Microsoft Outlook (Microsoft 365) Support",
          description:
            "Outlook, especially within Microsoft 365, is a staple for many businesses. Our support includes:",
          issues: [
            {
              title: "Core Microsoft Outlook Services",
              type: "list",
              options: [
                {
                  title: "Outlook Desktop Client",
                  desc: "Resolving PST/OST file corruption, 'Outlook Not Responding' errors, search issues, add-in conflicts, and configuration for Exchange, IMAP, and POP accounts.",
                },
                {
                  title: "Exchange Online & Microsoft 365 Admin",
                  desc: "Assisting with mailbox provisioning, shared mailboxes, distribution lists, migration to/from Exchange Online, and security settings within the Microsoft 365 admin center.",
                },
                {
                  title: "Connectivity & Sync",
                  desc: "Troubleshooting connection issues with Exchange servers, synchronization problems between Outlook client and server, and ensuring smooth email, calendar, and contact sync.",
                },
              ],
            },
          ],
        },
        {
          title: "Yahoo Mail Support",
          description:
            "A popular free email service, Yahoo Mail also presents unique user challenges. Our Yahoo Mail support covers:",
          issues: [
            {
              title: "Core Yahoo Mail Services",
              type: "list",
              options: [
                {
                  title: "Login & Access",
                  desc: "Guiding users through password recovery, account lockout issues, and enabling/disabling two-factor authentication.",
                },
                {
                  title: "Interface & Features",
                  desc: "Troubleshooting issues with Yahoo Mail's web interface, filters, folders, and attachment handling.",
                },
                {
                  title: "Spam & Security",
                  desc: "Assisting with managing spam filters, identifying phishing attempts, and securing accounts from unauthorized access.",
                },
              ],
            },
          ],
        },
        {
          title: "Zoho Mail Support",
          description:
            "Zoho Mail offers a clean, ad-free experience, often integrated with Zoho's business suite. Our Zoho Mail support includes:",
          issues: [
            {
              title: "Core Zoho Mail Services",
              type: "list",
              options: [
                {
                  title: "Domain & DNS Configuration",
                  desc: "Setting up custom domains, verifying MX, SPF, DKIM, and DMARC records for optimal email delivery.",
                },
                {
                  title: "User & Group Management",
                  desc: "Assisting with adding/removing users, setting up aliases, group mailboxes, and managing storage.",
                },
                {
                  title: "Migration & Sync",
                  desc: "Supporting migration of emails to Zoho Mail and troubleshooting sync issues with external email clients.",
                },
              ],
            },
          ],
        },
        {
          title: "ProtonMail Support",
          description:
            "Known for its strong encryption and privacy features, ProtonMail has specific technical nuances. Our ProtonMail support involves:",
          issues: [
            {
              title: "Core ProtonMail Services",
              type: "list",
              options: [
                {
                  title: "Encryption & Decryption",
                  desc: "Troubleshooting issues with sending/receiving encrypted emails, and understanding password protection.",
                },
                {
                  title: "Bridge Application",
                  desc: "Assisting with the ProtonMail Bridge application for desktop client integration (Outlook, Thunderbird) and resolving connectivity issues.",
                },
                {
                  title: "Account & Security",
                  desc: "Guiding through account setup, managing two-password mode, and ensuring secure access to your encrypted mailbox.",
                },
              ],
            },
          ],
        },
        {
          title: "Fastmail Support",
          description:
            "Fastmail emphasizes speed, reliability, and privacy. Our Fastmail support covers:",
          issues: [
            {
              title: "Core Fastmail Services",
              type: "list",
              options: [
                {
                  title: "Custom Domain Setup",
                  desc: "Configuring custom domains, DNS records (MX, SPF, DKIM), and email aliases for Fastmail accounts.",
                },
                {
                  title: "Client Configuration",
                  desc: "Assisting with setting up Fastmail accounts in various email clients using IMAP/POP/SMTP settings and app passwords.",
                },
                {
                  title: "Rule & Filter Management",
                  desc: "Helping users create and manage advanced email rules, filters, and smart folders for efficient inbox organization.",
                },
              ],
            },
          ],
        },
        {
          title: "AOL Mail Support",
          description:
            "A long-standing email service, AOL Mail still serves a significant user base. Our AOL Mail support includes:",
          issues: [
            {
              title: "Core AOL Mail Services",
              type: "list",
              options: [
                {
                  title: "Login & Password Recovery",
                  desc: "Guiding users through forgotten password processes and resolving account lockout issues.",
                },
                {
                  title: "Interface & Feature Troubleshooting",
                  desc: "Assisting with issues related to the AOL Mail web interface, folders, contacts, and spam filters.",
                },
                {
                  title: "Security & Deliverability",
                  desc: "Addressing concerns about spam, phishing, and ensuring reliable email sending and receiving from AOL Mail accounts.",
                },
              ],
            },
          ],
        },
        {
          title: "Mail.com Support",
          description:
            "Mail.com offers a variety of domain options for email addresses. Our Mail.com support focuses on:",
          issues: [
            {
              title: "Core Mail.com Services",
              type: "list",
              options: [
                {
                  title: "Account Setup & Access",
                  desc: "Troubleshooting login problems, password resets, and account verification issues for Mail.com accounts.",
                },
                {
                  title: "Email Client Integration",
                  desc: "Assisting with configuring Mail.com accounts in desktop and mobile email clients.",
                },
                {
                  title: "Spam & Filtering",
                  desc: "Helping users manage spam and set up email filters for better inbox organization.",
                },
              ],
            },
          ],
        },
        {
          title: "Neo Mail Support",
          description:
            "Neo provides professional email hosting with custom domains. Our Neo Mail support includes:",
          issues: [
            {
              title: "Core Neo Mail Services",
              type: "list",
              options: [
                {
                  title: "Domain & DNS Configuration",
                  desc: "Setting up and troubleshooting custom domain emails, MX records, and other DNS settings for Neo Mail.",
                },
                {
                  title: "Webmail & Client Access",
                  desc: "Resolving issues related to accessing Neo webmail and configuring accounts in third-party email clients.",
                },
                {
                  title: "Deliverability & Storage",
                  desc: "Addressing sending/receiving issues, bounce backs, and managing mailbox storage limits within the Neo platform.",
                },
              ],
            },
          ],
        },
        {
          title: "Mozilla Thunderbird Support",
          description:
            "As a popular open-source desktop email client, Thunderbird requires specific expertise. Our Thunderbird support covers:",
          issues: [
            {
              title: "Core Thunderbird Services",
              type: "list",
              options: [
                {
                  title: "Account Configuration",
                  desc: "Assisting with setting up new email accounts (IMAP/POP/SMTP), troubleshooting existing configurations, and resolving connection errors.",
                },
                {
                  title: "Performance & Data Management",
                  desc: "Optimizing Thunderbird performance, managing large mailboxes, compacting folders, and resolving corrupted profile issues.",
                },
                {
                  title: "Add-on & Plugin Conflicts",
                  desc: "Diagnosing and resolving issues caused by problematic add-ons or extensions, ensuring Thunderbird's stability.",
                },
              ],
            },
          ],
        },
        {
          title: "Mailchimp Support",
          description:
            "Mailchimp is a leading email marketing platform crucial for campaigns. Our Mailchimp support involves:",
          issues: [
            {
              title: "Core Mailchimp Services",
              type: "list",
              options: [
                {
                  title: "Audience Management",
                  desc: "Assisting with importing contacts, segmenting audiences, and troubleshooting sync issues with e-commerce platforms.",
                },
                {
                  title: "Campaign Creation & Sending",
                  desc: "Guiding through email template design, campaign setup, A/B testing, and resolving sending errors or deliverability issues.",
                },
                {
                  title: "Automation & Reporting",
                  desc: "Setting up marketing automations (e.g., abandoned cart, welcome series) and interpreting campaign reports for optimization.",
                },
              ],
            },
          ],
        },
        {
          title: "SendGrid Support",
          description:
            "SendGrid provides robust transactional and marketing email APIs for developers and businesses. Our SendGrid support includes:",
          issues: [
            {
              title: "Core SendGrid Services",
              type: "list",
              options: [
                {
                  title: "API Integration",
                  desc: "Assisting with SendGrid API key setup, integration with applications, and troubleshooting API sending errors.",
                },
                {
                  title: "Deliverability Optimization",
                  desc: "Monitoring sender reputation, resolving bounce and block issues, setting up SPF/DKIM/DMARC records for improved deliverability.",
                },
                {
                  title: "Suppressions & Templates",
                  desc: "Managing suppression lists, designing and deploying dynamic email templates, and interpreting SendGrid analytics.",
                },
              ],
            },
          ],
        },
        {
          title: "Constant Contact Support",
          description:
            "Constant Contact is a user-friendly platform for email marketing campaigns. Our Constant Contact support covers:",
          issues: [
            {
              title: "Core Constant Contact Services",
              type: "list",
              options: [
                {
                  title: "List Management",
                  desc: "Importing contacts, segmenting lists, managing unsubscribes, and troubleshooting contact sync issues.",
                },
                {
                  title: "Campaign Design & Deployment",
                  desc: "Assisting with drag-and-drop email builder, template customization, scheduling campaigns, and resolving sending failures.",
                },
                {
                  title: "Reporting & Automation",
                  desc: "Setting up basic automations (e.g., welcome emails) and helping analyze campaign performance reports.",
                },
              ],
            },
          ],
        },
        {
          title: "GetResponse Support",
          description:
            "GetResponse offers a comprehensive suite of online marketing tools, including email. Our GetResponse support involves:",
          issues: [
            {
              title: "Core GetResponse Services",
              type: "list",
              options: [
                {
                  title: "Email Marketing & Automation",
                  desc: "Creating and managing email campaigns, setting up autoresponders, and designing complex marketing automation workflows.",
                },
                {
                  title: "Landing Page & Webinar Integration",
                  desc: "Troubleshooting email form integration with landing pages and webinar platforms within GetResponse.",
                },
                {
                  title: "List Hygiene & Deliverability",
                  desc: "Ensuring list health, managing bounces, and optimizing campaigns for better inbox placement.",
                },
              ],
            },
          ],
        },
        {
          title: "HubSpot Email Marketing Support",
          description:
            "HubSpot integrates email marketing seamlessly with its CRM and sales tools. Our HubSpot support focuses on:",
          issues: [
            {
              title: "Core HubSpot Services",
              type: "list",
              options: [
                {
                  title: "Email Builder & Personalization",
                  desc: "Assisting with HubSpot's email editor, dynamic content, and personalization tokens.",
                },
                {
                  title: "List Segmentation & Automation",
                  desc: "Creating targeted email lists, setting up workflows for lead nurturing, and troubleshooting automation triggers.",
                },
                {
                  title: "Deliverability & Reporting",
                  desc: "Monitoring email performance within HubSpot, analyzing open/click rates, and resolving deliverability challenges related to HubSpot's sending infrastructure.",
                },
              ],
            },
          ],
        },
        {
          title: "Brevo (formerly Sendinblue) Support",
          description:
            "Brevo offers marketing, sales, and transactional email services with a focus on deliverability. Our Brevo support includes:",
          issues: [
            {
              title: "Core Brevo Services",
              type: "list",
              options: [
                {
                  title: "SMTP & API Configuration",
                  desc: "Assisting with SMTP relay setup, API integration for transactional emails, and troubleshooting sending issues.",
                },
                {
                  title: "Email Design & Campaigns",
                  desc: "Helping design engaging email templates, set up marketing campaigns, and manage email lists.",
                },
                {
                  title: "Deliverability & Authentication",
                  desc: "Configuring SPF, DKIM, and DMARC records, monitoring sender reputation, and resolving deliverability challenges to ensure high inbox placement.",
                },
              ],
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
    whyChoose: {
      title: "Why Partner with ITSupport.net.in for Email Excellence",
      desc: "Choosing ITSupport.net.in as your email support partner means leveraging over a decade of specialized expertise and a global track record of empowering 100,000+ satisfied customers. Our commitment to your uninterrupted communication is built on",
      whyChoosecategories: [
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title: "Comprehensive Platform Agnostic Expertise",
          desc: "Proficient across all major personal, business, and marketing email platforms.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          ),
          title: "24/7 Proactive Monitoring & Rapid Response",
          desc: "We detect and resolve email issues before they disrupt your workflow.",
        },
        {
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-11V7a4 4 0 00-8 0v3"
              ></path>
            </svg>
          ),
          title: "Enhanced Security & Privacy",
          desc: "Robust measures to protect your inboxes from threats and ensure data confidentiality.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              ></path>
            </svg>
          ),
          title: "Deliverability Optimization",
          desc: "Strategies and troubleshooting to ensure your emails reach their intended recipients",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              ></path>
            </svg>
          ),
          title: "Seamless Migrations & Integrations",
          desc: "Expert handling of email data transfers and integration with your essential business tools.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title: "Dedicated & Certified Email Specialists",
          desc: "A team truly invested in your efficient and secure communication.",
        },
      ],
    },
    faqs: [
      {
        label:
          "What kind of email issues does ITSupport.net.in typically resolve?",
        desc: "We resolve issues such as sending/receiving problems, client configuration errors, password resets, spam and phishing attacks, storage issues, migrations, and marketing email deliverability problems.",
        expanded: true,
      },
      {
        label:
          "Do you support specific email providers like Gmail, Outlook, or Zoho Mail?",
        desc: "Yes, we provide comprehensive support for Google Workspace (Gmail), Microsoft Outlook (Microsoft 365), Yahoo Mail, Zoho Mail, ProtonMail, Fastmail, AOL Mail, Mail.com, Neo, and clients like Mozilla Thunderbird.",
        expanded: false,
      },
      {
        label:
          "Can you help if my email account has been hacked or compromised?",
        desc: "Yes, we guide you through securing your account with forced logouts, password changes, MFA setup, and reporting to the provider.",
        expanded: false,
      },
      {
        label:
          "I'm not receiving emails, or my emails are going to spam. Can you fix this?",
        desc: "Yes, we troubleshoot MX, SPF, DKIM, DMARC, blacklisting issues, content analysis, and spam filter settings to restore deliverability.",
        expanded: false,
      },
      {
        label:
          "Can you assist with migrating my emails from one provider to another?",
        desc: "Yes, we handle seamless migrations of emails, contacts, and calendars between providers, ensuring minimal downtime and data integrity.",
        expanded: false,
      },
      {
        label:
          "Do you provide support for email marketing platforms like Mailchimp or HubSpot?",
        desc: "Yes, we support Mailchimp, SendGrid, Constant Contact, GetResponse, HubSpot, and Brevo, including campaigns, list management, automation, and deliverability.",
        expanded: false,
      },
      {
        label: "How do you help with slow email client performance?",
        desc: "We optimize settings, repair corrupted files, compact mailboxes, and troubleshoot sync issues for clients like Outlook and Thunderbird.",
        expanded: false,
      },
      {
        label: "What security measures do you recommend for email accounts?",
        desc: "We recommend strong passwords, multi-factor authentication, advanced spam filters, security audits, and user education on phishing.",
        expanded: false,
      },
      {
        label: "Can you help me set up my business email with a custom domain?",
        desc: "Yes, we configure custom domains with MX, SPF, DKIM, and DMARC for professional branding and reliable delivery.",
        expanded: false,
      },
      {
        label: "Is your email support available 24/7?",
        desc: "Yes, our dedicated team provides round-the-clock monitoring and rapid response for all email concerns.",
        expanded: false,
      },
    ],
  },
  {
    slug: "wifi-network-support",
    title: "Seamless Connectivity and Unrivaled Speed",
    subtitle:
      "Your Wireless World, Our Expertise: Over a Decade of Global Excellence for 20,000+ Customers",
    subtitle1: `In today's hyper-connected world, Wi-Fi is no longer a luxury; it's the invisible infrastructure powering our homes, offices, and businesses. From streaming entertainment to mission-critical business operations, a reliable and fast wireless connection is paramount. At ITSupport.net.in, we understand that frustrating Wi-Fi issues can disrupt your productivity and peace of mind. For over 10 years, we have proudly served over 20,000 customers globally, providing comprehensive Wi-Fi support services that ensure your wireless network is always stable, secure, and optimized for peak performance. We eliminate the guesswork and frustration, empowering you to connect with confidence.`,
    heroRightSideIcons: [
      <Database className="w-6 h-6 text-white" />,
      <RotateCcw className="w-6 h-6 text-white" />,
    ],
    heroImage:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline:
        "Your Wireless World, Our Expertise: Over a Decade of Global Excellence for 20,000+ Customers",
      subheadline: "",
      description:
        "For over 10 years, we have proudly served over 20,000 customers globally, providing comprehensive Wi-Fi support services that ensure your wireless network is always stable, secure, and optimized for peak performance. We eliminate the guesswork and frustration, empowering you to connect with confidence.",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Why Choose Our Wi-Fi Support?",
      services: [
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <rect width="20" height="8" x="2" y="14" rx="2"></rect>
              <path d="M6.01 18H6"></path>
              <path d="M10.01 18H10"></path>
              <path d="M15 10v4"></path>
              <path d="M17.84 7.17a4 4 0 0 0-5.66 0"></path>
              <path d="M20.66 4.34a8 8 0 0 0-11.31 0"></path>
            </svg>
          ),
          title: "Router Setup & Optimization",
          description:
            "Professional installation and configuration for maximum coverage.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9"></path>
              <path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"></path>
              <circle cx="12" cy="9" r="2"></circle>
              <path d="M16.2 4.8c2 2 2.26 5.11.8 7.47"></path>
              <path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1"></path>
              <path d="M9.5 18h5"></path>
              <path d="m8 22 4-11 4 11"></path>
            </svg>
          ),
          title: "Signal Boosting",
          description: "Range extension and dead zone elimination.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13"></path>
              <path d="M2 12h8.5"></path>
              <path d="M20 6V4a2 2 0 1 0-4 0v2"></path>
              <rect width="8" height="5" x="14" y="6" rx="1"></rect>
            </svg>
          ),
          title: "Secure Network",
          description: "Encrypted Wi-Fi and strong password setup.",
        },
      ],
    },
    issuecategory: {
      title:
        "Conquering Wireless Woes: Common Wi-Fi Problems We Expertly Resolve",
      subTitle:
        "Wi-Fi networks, despite their convenience, are susceptible to a range of issues that can hinder your internet access, slow down your devices, or compromise your network's security. Our team of dedicated Wi-Fi specialists is adept at diagnosing, troubleshooting, and resolving these intricate wireless challenges, ensuring seamless connectivity for all your devices.",
      issueCategories: [
        {
          title: "Connectivity & Access Issues",
          description:
            "Problems connecting to Wi-Fi or staying online consistently.",
          issues: [
            {
              title: "No Internet Connection via Wi-Fi",
              problemDescription:
                "Devices show connected to Wi-Fi but cannot browse, access services, or receive emails. Causes include router/modem issues, DNS errors, or ISP outages.",
              solution:
                "We check modem/router lights, WAN connections, DNS settings, renew IPs, and review firewall rules to restore internet access.",
            },
            {
              title: "Wi-Fi Dropping & Intermittent Connectivity",
              problemDescription:
                "Frequent disconnections, buffering, dropped calls, or unstable Wi-Fi due to interference, outdated firmware, or misconfigured security.",
              solution:
                "We analyze channels for interference, optimize router placement, update firmware, and review WPA2/WPA3 security protocols for stability.",
            },
          ],
        },
        {
          title: "Performance & Speed Bottlenecks",
          description:
            "Issues with slow Wi-Fi speeds, lag, or dead zones impacting streaming, gaming, and productivity.",
          issues: [
            {
              title: "Slow Wi-Fi Speeds & Laggy Performance",
              problemDescription:
                "Internet speed much lower on Wi-Fi than wired, or sluggish performance caused by congestion, bandwidth-hogging apps, or outdated hardware.",
              solution:
                "We run Wi-Fi diagnostics, identify bandwidth hogs, optimize QoS, adjust channels, and recommend dual-band or Wi-Fi 6/6E upgrades.",
            },
            {
              title: "Poor Signal Strength & Wi-Fi Dead Zones",
              problemDescription:
                "Some areas have little to no Wi-Fi signal due to walls, large spaces, or poor router placement.",
              solution:
                "We perform site surveys, optimize router placement, and implement extenders, mesh systems, or access points for strong coverage.",
            },
          ],
        },
        {
          title: "Setup & Configuration Headaches",
          description:
            "Difficulties setting up routers, networks, or connecting devices properly.",
          issues: [
            {
              title: "Router Setup & Network Configuration Errors",
              problemDescription:
                "Struggles with setting up new routers, Wi-Fi passwords, guest networks, or port forwarding leading to weak security or failed connectivity.",
              solution:
                "We guide secure router setup with SSID, password creation, guest networks, VPN/port forwarding, and ensure optimal secure configuration.",
            },
            {
              title: "Device Connection & Compatibility Problems",
              problemDescription:
                "Smart TVs, consoles, or IoT devices fail to connect due to compatibility issues with Wi-Fi standards or protocols.",
              solution:
                "We adjust router security protocols, enable WPA2/WPA3 mixed mode, configure MAC filtering, and troubleshoot device-specific settings.",
            },
          ],
        },
        {
          title: "Security & Interference Concerns",
          description:
            "Risks of unauthorized access or disruptions from external interference.",
          issues: [
            {
              title: "Unsecured Networks & Unauthorized Access",
              problemDescription:
                "Wi-Fi has no password or is accessed by unknown users, risking data exposure and bandwidth theft.",
              solution:
                "We set up WPA2/WPA3 encryption, strong passwords, MAC filtering, guest networks, and disable WPS for stronger protection.",
            },
            {
              title: "Wireless Interference & Channel Congestion",
              problemDescription:
                "Erratic Wi-Fi performance due to interference from neighbors, microwaves, Bluetooth, or overlapping channels.",
              solution:
                "We use Wi-Fi analysis tools to select less crowded channels, optimize placement, and reduce interference from electronics.",
            },
          ],
        },
        {
          title: "Advanced Wi-Fi Solutions & Optimization",
          description:
            "Enhancing network performance with advanced configurations and controls.",
          issues: [
            {
              title: "Router Firmware Issues & Updates",
              problemDescription:
                "Router becomes unstable or lacks features due to outdated firmware, risking failed updates.",
              solution:
                "We safely update firmware to the latest stable version, ensuring better security, stability, and new features.",
            },
            {
              title: "Quality of Service (QoS) & Network Prioritization",
              problemDescription:
                "Video calls, gaming, or work apps lag because bandwidth is not prioritized.",
              solution:
                "We configure QoS to prioritize critical applications and devices, ensuring smooth performance for essential tasks.",
            },
          ],
        },
      ],
    },
    issuecategory2: {
      title: "Expert Support Across Leading Wi-Fi Router Brands",
      subTitle:
        "Our deep expertise extends across the most popular and advanced Wi-Fi router brands, ensuring that no matter your device, you receive expert, tailored assistance.",
      issueCategories: [
        {
          title: "TP-Link Support",
          description:
            "Known for offering reliable and affordable networking solutions, TP-Link routers are widely used. Our TP-Link support includes:",
          issues: [
            {
              title: "Core TP-Link Services",
              type: "list",
              options: [
                {
                  title: "Setup & Configuration:",
                  desc: "Assisting with initial setup of Archer, Deco, and other TP-Link routers, including secure Wi-Fi password, guest network, and parental controls.",
                },
                {
                  title: "Performance Optimization:",
                  desc: "Troubleshooting Wi-Fi drops, slow speeds, range issues, and optimizing settings for TP-Link mesh Wi-Fi systems like Deco for seamless coverage.",
                },
                {
                  title: "Firmware Updates & Security:",
                  desc: "Guiding through firmware updates, addressing security vulnerabilities, and setting up WPA3 encryption on compatible TP-Link devices.",
                },
              ],
            },
          ],
        },
        {
          title: "Netgear Support",
          description:
            "Netgear provides a range from basic routers to high-performance Nighthawk series. Our Netgear support covers:",
          issues: [
            {
              title: "Core Netgear Services",
              type: "list",
              options: [
                {
                  title: "Nighthawk & Orbi Diagnostics:",
                  desc: "Troubleshooting complex issues with Netgear Nighthawk routers and Orbi mesh systems, including dropped connections, slow throughput, and satellite syncing problems.",
                },
                {
                  title: "Genie/Nighthawk App Issues:",
                  desc: "Resolving problems with the Netgear Genie or Nighthawk mobile apps for remote management and configuration.",
                },
                {
                  title: "Advanced Features:",
                  desc: "Assisting with ReadySHARE setup, Armor Security integration, QoS configuration, and parental controls.",
                },
              ],
            },
          ],
        },
        {
          title: "ASUS Support",
          description:
            "ASUS routers, especially their ROG series, are popular among gamers and power users for advanced features. Our ASUS support entails:",
          issues: [
            {
              title: "Core ASUS Services",
              type: "list",
              options: [
                {
                  title: "ROG Router Optimization:",
                  desc: "Fine-tuning settings on ASUS ROG routers for optimal gaming performance, including Game Boost, Adaptive QoS, and AiMesh setup.",
                },
                {
                  title: "AiMesh Configuration:",
                  desc: "Setting up and troubleshooting ASUS AiMesh systems for whole-home Wi-Fi coverage and seamless roaming.",
                },
                {
                  title: "Firmware & Security:",
                  desc: "Guiding through ASUS-Merlin firmware updates, addressing security vulnerabilities, and configuring advanced firewall rules.",
                },
              ],
            },
          ],
        },
        {
          title: "Cisco Support",
          description:
            "Cisco, a leader in enterprise networking, also offers Linksys routers for consumers (acquired by Belkin, but originally Cisco). Our Cisco/Linksys support focuses on:",
          issues: [
            {
              title: "Core Cisco/Linksys Services",
              type: "list",
              options: [
                {
                  title: "Enterprise-Grade Networks:",
                  desc: "Troubleshooting Cisco Meraki wireless access points, Aironet series, and small business routers for connectivity, performance, and security.",
                },
                {
                  title: "Linksys Router Setup:",
                  desc: "Assisting with setup of Linksys routers (Velop mesh, WRT series), secure Wi-Fi configuration, and parental controls.",
                },
                {
                  title: "Advanced Networking:",
                  desc: "Configuring VLANs, VPNs, and advanced security protocols on Cisco and Linksys networking hardware.",
                },
              ],
            },
          ],
        },
        {
          title: "D-Link Support",
          description:
            "D-Link provides a broad range of networking products for homes and small businesses. Our D-Link support includes:",
          issues: [
            {
              title: "Core D-Link Services",
              type: "list",
              options: [
                {
                  title: "Router & Extender Setup:",
                  desc: "Assisting with initial setup of D-Link routers and Wi-Fi extenders, ensuring proper connectivity and signal strength.",
                },
                {
                  title: "Connection Stability:",
                  desc: "Troubleshooting intermittent disconnections, slow speeds, and range issues specific to D-Link devices.",
                },
                {
                  title: "MyDLink Cloud Services:",
                  desc: "Resolving issues with MyDLink cloud access for remote router management and device monitoring.",
                },
              ],
            },
          ],
        },
        {
          title: "Linksys Support (a Belkin brand)",
          description:
            "Linksys, now part of Belkin, offers popular routers and mesh systems like Velop. Our Linksys support covers:",
          issues: [
            {
              title: "Core Linksys Services",
              type: "list",
              options: [
                {
                  title: "Velop Mesh Wi-Fi Systems:",
                  desc: "Setting up and troubleshooting Linksys Velop nodes, ensuring seamless roaming and optimal mesh performance.",
                },
                {
                  title: "Smart Wi-Fi App:",
                  desc: "Assisting with the Linksys Smart Wi-Fi app for remote management, guest access, and device prioritization.",
                },
                {
                  title: "Firmware & Security:",
                  desc: "Guiding through firmware updates for Linksys routers and configuring advanced security settings.",
                },
              ],
            },
          ],
        },
        {
          title: "Huawei Support",
          description:
            "Huawei offers a growing range of networking products, from consumer routers to enterprise solutions. Our Huawei support includes:",
          issues: [
            {
              title: "Core Huawei Services",
              type: "list",
              options: [
                {
                  title: "Router Setup & Optimization:",
                  desc: "Assisting with the setup of Huawei Wi-Fi routers (e.g., AX series, WiFi Cube), optimizing settings for performance and coverage.",
                },
                {
                  title: "HiLink App & Smart Features:",
                  desc: "Troubleshooting issues related to Huawei's HiLink app for device management and smart home integration.",
                },
                {
                  title: "Connectivity & Stability:",
                  desc: "Resolving common problems like frequent disconnections, slow speeds, and ensuring stable operation of Huawei Wi-Fi devices.",
                },
              ],
            },
          ],
        },
        {
          title: "Xiaomi Support",
          description:
            "Xiaomi provides popular and often cost-effective Wi-Fi routers and mesh systems. Our Xiaomi support covers:",
          issues: [
            {
              title: "Core Xiaomi Services",
              type: "list",
              options: [
                {
                  title: "Router Setup & App Control:",
                  desc: "Assisting with initial setup of Xiaomi Wi-Fi routers, including Mi Wi-Fi app configuration and smart home integration.",
                },
                {
                  title: "Mesh Network Troubleshooting:",
                  desc: "Resolving issues with Xiaomi Mesh Wi-Fi systems for whole-home coverage and seamless connectivity.",
                },
                {
                  title: "Performance & Security:",
                  desc: "Optimizing settings for speed, addressing connectivity drops, and ensuring proper security configuration for Xiaomi networking devices.",
                },
              ],
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
    whyChoose: {
      title: "Why Partner with ITSupport.net.in for Flawless Wi-Fi?",
      desc: "Choosing ITSupport.net.in as your Wi-Fi support partner means leveraging over a decade of specialized expertise and a global track record of empowering 20,000+ satisfied customers. Our commitment to your uninterrupted wireless connectivity is built on:",
      whyChoosecategories: [
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title: "Multi-Brand Expertise",
          desc: "Proficient in diagnosing, troubleshooting, and optimizing Wi-Fi solutions across all major router and networking brands.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          ),
          title: "24/7 Proactive Monitoring & Rapid Response",
          desc: "We detect and resolve Wi-Fi issues often before they disrupt your productivity.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H7a3 3 0 00-3 3v8a3 3 0 003 3z"
              ></path>
            </svg>
          ),
          title: "Speed & Coverage Optimization",
          desc: "Our primary goal is to ensure you have fast, reliable Wi-Fi everywhere you need it.",
        },
        {
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-11V7a4 4 0 00-8 0v3"
              ></path>
            </svg>
          ),
          title: "Enhanced Security",
          desc: "Implementing robust measures to protect your wireless network from unauthorized access and threats.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              ></path>
            </svg>
          ),
          title: "Seamless Setup & Configuration",
          desc: "We make setting up new networks or devices simple and hassle-free.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title: "Dedicated & Certified Wi-Fi Specialists",
          desc: "A team truly invested in your seamless wireless experience.",
        },
      ],
    },
    faqs: [
      {
        label: "What common Wi-Fi problems does ITSupport.net.in resolve?",
        desc: "We resolve a wide range of Wi-Fi issues, including no internet access, frequent disconnections, slow Wi-Fi speeds, poor signal strength, Wi-Fi dead zones, router setup errors, security vulnerabilities, and interference problems.",
        expanded: true,
      },
      {
        label: "Do you support all major Wi-Fi router brands?",
        desc: "Yes, absolutely. Our expert technicians are trained to provide comprehensive Wi-Fi support for all major router brands, including TP-Link, Netgear, ASUS, Cisco, D-Link, Linksys (a Belkin brand), Huawei, and Xiaomi.",
        expanded: false,
      },
      {
        label: "My Wi-Fi keeps dropping out intermittently. Can you fix this?",
        desc: "Yes, this is a common issue we resolve. We'll diagnose the cause, which could be Wi-Fi interference, outdated router firmware, signal saturation, or security protocol issues, and implement the necessary fixes for a stable connection.",
        expanded: false,
      },
      {
        label: "How can I improve my Wi-Fi speed and range in my home/office?",
        desc: "We can perform a Wi-Fi analysis to identify weak spots and suggest solutions like optimizing router placement, upgrading to a dual-band or Wi-Fi 6 router, using Wi-Fi extenders, or implementing a mesh Wi-Fi system.",
        expanded: false,
      },
      {
        label: "Can you help me set up a new Wi-Fi router or mesh system?",
        desc: "Yes, we provide complete setup and configuration services for new Wi-Fi routers and mesh systems, ensuring secure Wi-Fi passwords, guest networks, and optimal performance from the start.",
        expanded: false,
      },
      {
        label: "How do you secure my Wi-Fi network from unauthorized access?",
        desc: "We implement strong encryption (WPA2/WPA3), create unique and complex Wi-Fi passwords, set up guest networks, enable MAC address filtering if needed, and advise on disabling insecure features like WPS.",
        expanded: false,
      },
      {
        label:
          "What if my Wi-Fi signal is strong in one room but weak in another?",
        desc: "This indicates a 'dead zone.' We'll assess your layout and recommend solutions such as repositioning your router, installing Wi-Fi extenders, or deploying a whole-home mesh Wi-Fi system to ensure consistent coverage.",
        expanded: false,
      },
      {
        label:
          "Do you provide support for smart home devices connecting to Wi-Fi?",
        desc: "Yes, we troubleshoot connectivity issues for a wide range of smart home devices (e.g., smart TVs, smart speakers, IoT devices) to ensure they can connect reliably to your Wi-Fi network.",
        expanded: false,
      },
      {
        label: "Can you help if my router's firmware needs updating?",
        desc: "Yes, we can safely update your router's firmware to the latest stable version. This often resolves performance issues, improves security, and unlocks new features.",
        expanded: false,
      },
      {
        label: "Is your Wi-Fi support available 24/7?",
        desc: "Yes, our dedicated Wi-Fi support team is available 24/7. We understand that connectivity is crucial, so we provide round-the-clock monitoring and rapid response to all your Wi-Fi-related concerns.",
        expanded: false,
      },
    ],
  },
];

export const serviceDetailDataEs: Service[] = [
  {
    slug: "mejores-servicios-de-respaldo-y-recuperación-de-datos",
    title: "Proteja sus Datos Críticos y Asegura ",
    subtitle: "Servicios de soporte de copia de seguridad y recuperación",
    subtitle1: `En el panorama empresarial actual, impulsado por los datos, la información es la piedra angular del éxito. Sin embargo, este activo invaluable se enfrenta a amenazas constantes, desde fallos inesperados del sistema y ciberataques maliciosos como el ransomware, hasta errores humanos o desastres naturales. Una interrupción o pérdida de datos no solo puede paralizar las operaciones, sino que también puede generar pérdidas financieras significativas y dañar de forma irreparable la reputación de su marca. En ITSupport.net.in, entendemos que la seguridad de su información no es negociable. Durante más de 20 años, nos hemos dedicado a ofrecer servicios de soporte de TI que no solo solucionan problemas, sino que los previenen. Hemos trabajado con más de 10,000 clientes satisfechos en todo el mundo, ayudándoles a construir una fortaleza digital alrededor de sus datos más valiosos. Nuestra misión es proporcionarle una tranquilidad total, sabiendo que su información está segura, accesible y lista para ser restaurada en cualquier momento.`,
    heroImage:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline:
        "La Imperiosa Necesidad de un Plan de Copia de Seguridad Robusto",
      subheadline: "",
      description:
        "Un plan de copia de seguridad no es un simple seguro; es una inversión fundamental en la continuidad y resiliencia de su negocio. En un mundo donde el tiempo de inactividad se mide en miles de euros por minuto, una estrategia de respaldo eficiente es lo único que le permite recuperarse rápidamente de cualquier adversidad. Nuestros expertos trabajan con usted para evaluar los riesgos, entender sus operaciones y diseñar una estrategia de protección de datos que se adapte perfectamente a sus necesidades, presupuesto y tolerancia al riesgo.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "¿Por qué elegir nuestro respaldo de datos?",
      services: [
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M3 12a9 3 0 0 0 5 2.69"></path>
              <path d="M21 9.3V5"></path>
              <path d="M3 5v14a9 3 0 0 0 6.47 2.88"></path>
              <path d="M12 12v4h4"></path>
              <path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"></path>
            </svg>
          ),
          title: "Copias de seguridad automatizadas",
          description:
            "No vuelva a preocuparse por copias de seguridad manuales.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path>
            </svg>
          ),
          title: "Almacenamiento híbrido",
          description: "Opciones en la nube + local para máxima seguridad.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M12 2v8"></path>
              <path d="m16 6-4 4-4-4"></path>
              <rect width="20" height="8" x="2" y="14" rx="2"></rect>
              <path d="M6 18h.01"></path>
              <path d="M10 18h.01"></path>
            </svg>
          ),
          title: "Recuperación ante desastres",
          description: "Restauración rápida en caso de emergencias.",
        },
      ],
    },
    issuecategory: {
      title: "La Imperiosa Necesidad de un Plan de Copia de Seguridad Robusto",
      subTitle:
        "Un plan de copia de seguridad no es un simple seguro; es una inversión fundamental en la continuidad y resiliencia de su negocio. En un mundo donde el tiempo de inactividad se mide en miles de euros por minuto, una estrategia de respaldo eficiente es lo único que le permite recuperarse rápidamente de cualquier adversidad.",
      issueCategories: [
        {
          title: "Riesgos de la Pérdida de Datos",
          description:
            "Identificamos los principales factores que pueden poner en peligro la integridad y disponibilidad de su información crítica. Estos riesgos incluyen:",
          issues: [
            {
              title: "Factores de Riesgo",
              type: "list",
              options: [
                {
                  title: "Fallos de Hardware:",
                  desc: "Los discos duros y servidores pueden fallar en cualquier momento, a menudo sin previo aviso.",
                },
                {
                  title: "Ciberataques:",
                  desc: "El ransomware y otros ataques maliciosos pueden cifrar o eliminar sus datos, exigiendo un rescate o paralizando sus operaciones.",
                },
                {
                  title: "Errores Humanos:",
                  desc: "Un archivo borrado accidentalmente o un comando ejecutado por error puede provocar una pérdida de datos irrecuperable sin un respaldo adecuado.",
                },
                {
                  title: "Desastres Naturales y Físicos:",
                  desc: "Incendios, inundaciones o robos en su oficina pueden destruir sus sistemas y datos físicos.",
                },
              ],
            },
          ],
        },
        {
          title: "Nuestro Proceso de Copia de Seguridad",
          description:
            "Ofrecemos un servicio integral que va más allá de la simple copia de archivos. Nuestro enfoque incluye consultoría, implementación, monitoreo y soporte continuo:",
          issues: [
            {
              title: "Etapas del Proceso",
              type: "list",
              options: [
                {
                  title: "Diseño del Plan:",
                  desc: "Creación de una estrategia de respaldo adaptada a su negocio.",
                },
                {
                  title: "Implementación:",
                  desc: "Configuración de la tecnología y los sistemas de copia de seguridad.",
                },
                {
                  title: "Monitoreo Proactivo:",
                  desc: "Supervisión continua para garantizar que cada copia de seguridad se realice correctamente.",
                },
                {
                  title: "Pruebas de Restauración:",
                  desc: "Realización de pruebas periódicas para verificar que los datos se puedan restaurar de forma rápida y fiable.",
                },
                {
                  title: "Soporte Dedicado:",
                  desc: "Asistencia experta 24/7 en caso de que necesite recuperar sus datos.",
                },
              ],
            },
          ],
        },
      ],
    },
    issuecategory2: {
      title: "Soluciones de Respaldo a Medida: Flexibilidad y Seguridad Máxima",
      subTitle:
        "Ofrecemos una variedad de soluciones para cubrir cualquier necesidad, desde la empresa más pequeña hasta la corporación global.",
      issueCategories: [
        {
          title: "Copia de Seguridad en la Nube (Cloud Backup)",
          description:
            "Almacenamos sus datos de forma segura en servidores remotos de última generación. Esta solución es ideal para:",
          issues: [
            {
              title: "Beneficios de la Nube",
              type: "list",
              options: [
                {
                  title: "Protección contra Desastres:",
                  desc: "Mantiene sus datos a salvo de cualquier evento físico que afecte a su ubicación.",
                },
                {
                  title: "Acceso Global:",
                  desc: "Acceda y restaure sus datos de forma segura desde cualquier lugar con conexión a Internet.",
                },
                {
                  title: "Escalabilidad:",
                  desc: "Permite un crecimiento ilimitado del almacenamiento sin la necesidad de comprar hardware adicional.",
                },
              ],
            },
          ],
        },
        {
          title: "Copia de Seguridad Local",
          description:
            "Mantenemos sus datos respaldados en dispositivos de almacenamiento físicos (como servidores o discos duros NAS) dentro de sus instalaciones. Esta opción es perfecta para:",
          issues: [
            {
              title: "Beneficios Locales",
              type: "list",
              options: [
                {
                  title: "Velocidad de Restauración:",
                  desc: "Ofrece la restauración más rápida posible, ideal para archivos de gran tamaño.",
                },
                {
                  title: "Control Directo:",
                  desc: "Permite tener el control total sobre sus datos y la infraestructura de respaldo.",
                },
              ],
            },
          ],
        },
        {
          title: "Copia de Seguridad Híbrida",
          description:
            "La estrategia más completa. Combina la velocidad del almacenamiento local con la seguridad de la nube para maximizar la protección y redundancia de los datos.",
        },
        {
          title: "ITSupport.net.in: Dos Décadas de Excelencia y Confianza",
          description:
            "Con más de 20 años en el mercado y 10,000 clientes satisfechos en todo el mundo, hemos demostrado nuestro compromiso con la seguridad digital y la satisfacción del cliente. Somos un socio confiable que evoluciona junto con la tecnología.",
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
        label: "¿Con qué frecuencia se debe hacer una copia de seguridad?",
        desc: "La frecuencia ideal se determina por la cantidad de datos que su negocio genera y la criticidad de los mismos. Para información que cambia constantemente, se recomienda una copia diaria o continua.",
        expanded: true,
      },
      {
        label: "¿Qué es la regla de copia de seguridad 3-2-1?",
        desc: "Es una estrategia de seguridad de datos fundamental: mantener 3 copias de sus datos, en 2 tipos de medios diferentes, con 1 de esas copias almacenada fuera de sus instalaciones.",
        expanded: false,
      },
      {
        label: "¿Qué datos debo respaldar?",
        desc: "Se debe respaldar toda la información crítica para el funcionamiento de su negocio, incluyendo bases de datos de clientes, archivos de proyectos, registros financieros, correos electrónicos y software vital.",
        expanded: false,
      },
      {
        label: "¿Qué tan seguros están mis datos con su servicio de respaldo?",
        desc: "La seguridad es nuestra máxima prioridad. Usamos encriptación de grado militar para proteger sus datos en todo momento. Nuestros centros de datos cumplen con los más altos estándares de seguridad y acceso, y el monitoreo es constante.",
        expanded: false,
      },
      {
        label: "¿Qué es un plan de recuperación ante desastres (DRP)?",
        desc: "Un DRP es un plan formal que su empresa seguirá para responder a una interrupción tecnológica, como una falla de sistema o un ciberataque, con el objetivo de restaurar las operaciones lo más rápido posible.",
        expanded: false,
      },
      {
        label:
          "¿Cómo se restaura la información en caso de una pérdida de datos?",
        desc: "En caso de un incidente, nuestro equipo de soporte le asistirá de inmediato. Se conectará de forma segura a su sistema para restaurar la información desde la copia de seguridad más reciente, asegurando un tiempo de recuperación mínimo.",
        expanded: false,
      },
      {
        label: "¿Es mejor el respaldo local o en la nube?",
        desc: "El respaldo local es rápido, pero vulnerable a desastres físicos. El respaldo en la nube es más seguro y accesible, pero la restauración puede ser más lenta. Por ello, una solución híbrida es ideal para combinar ambas ventajas.",
        expanded: false,
      },
      {
        label: "¿Puedo hacer mis propias copias de seguridad?",
        desc: "Aunque es posible, un servicio profesional de respaldo de datos ofrece automatización, monitoreo, redundancia y la experiencia de un equipo de expertos para garantizar que sus copias de seguridad sean siempre fiables.",
        expanded: false,
      },
      {
        label: "¿Qué pasa si mis copias de seguridad fallan?",
        desc: "Con nuestro servicio, sus copias de seguridad se monitorean de forma proactiva. En caso de cualquier fallo, nuestro equipo es notificado al instante para tomar medidas correctivas y garantizar que sus datos permanezcan protegidos.",
        expanded: false,
      },
      {
        label: "¿Cuál es la principal ventaja de usar ITSupport.net.in?",
        desc: "Nuestra principal ventaja es nuestra trayectoria. Con 20 años de experiencia y la confianza de 10,000 clientes, ofrecemos la tranquilidad y el conocimiento que solo un líder en el sector puede proporcionar.",
        expanded: false,
      },
    ],
  },
  {
    slug: "servicios-de-soporte-de-antivirus",
    title: "Servicios de Soporte Antivirus",
    subtitle: "Su Escudo contra las Amenazas Digitales con ITSupport.net.in",
    subtitle1:
      "En el ecosistema digital actual, las amenazas cibernéticas son una constante. Virus, malware, ransomware y ataques de phishing son solo algunas de las peligrosas realidades que pueden comprometer su información, paralizar sus operaciones y dañar la reputación de su negocio. En ITSupport.net.in, entendemos que la ciberseguridad es una prioridad, no un lujo. Con más de 20 años de experiencia en el sector, hemos construido una sólida reputación como el socio de confianza para miles de empresas y particulares. Hemos ayudado a más de 10,000 clientes satisfechos en todo el mundo a navegar por el complejo mundo de la seguridad digital, proporcionando servicios de soporte antivirus robustos y proactivos. Nuestra misión es simple: ofrecer una protección integral y confiable para que usted pueda centrarse en lo que mejor sabe hacer, sabiendo que sus sistemas están seguros bajo nuestra supervisión experta.",
    heroImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline:
        "Protección Proactiva vs. Solución Reactiva: La Clave para la Seguridad",
      subheadline: "",
      description:
        "No espere a que su sistema sea infectado para buscar ayuda. Una estrategia de seguridad proactiva es la mejor defensa contra las amenazas digitales. Nuestro enfoque no solo se centra en la eliminación de virus, sino en la prevención de infecciones antes de que ocurran. Con nuestro servicio de soporte, usted obtiene un socio que se anticipa a los riesgos, mantiene su protección actualizada y le asesora para fortalecer las defensas de su red.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Nuestros servicios antivirus",
      services: [
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M7 3.34V5a3 3 0 0 0 3 3"></path>
              <path d="M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
              <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
              <path d="M12 2a10 10 0 1 0 9.54 13"></path>
              <path d="M20 6V4a2 2 0 1 0-4 0v2"></path>
              <rect width="8" height="5" x="14" y="6" rx="1"></rect>
            </svg>
          ),
          title: "Protección en tiempo real",
          description: "Monitoreo continuo de amenazas.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path>
              <path d="M10 19v-3.96 3.15"></path>
              <path d="M7 19h5"></path>
              <rect width="6" height="10" x="16" y="12" rx="2"></rect>
            </svg>
          ),
          title: "Compatibilidad con múltiples dispositivos",
          description: "Protect all your devices.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="m14.5 12.5-5-5"></path>
              <path d="m9.5 12.5 5-5"></path>
              <rect width="20" height="14" x="2" y="3" rx="2"></rect>
              <path d="M12 17v4"></path>
              <path d="M8 21h8"></path>
            </svg>
          ),
          title: "Eliminación experta",
          description: "Eliminamos incluso el malware más resistente.",
        },
      ],
    },
    issuecategory: {
      title:
        "Protección Proactiva vs. Solución Reactiva: La Clave para la Seguridad",
      subTitle:
        "No espere a que su sistema sea infectado para buscar ayuda. Una estrategia de seguridad proactiva es la mejor defensa contra las amenazas digitales. Nuestro enfoque no solo se centra en la eliminación de virus, sino en la prevención de infecciones antes de que ocurran. Con nuestro servicio de soporte, usted obtiene un socio que se anticipa a los riesgos, mantiene su protección actualizada y le asesora para fortalecer las defensas de su red.",
      issueCategories: [
        {
          title: "Riesgos Comunes que Enfrenta su Negocio",
          description: "",
          issues: [
            {
              title: "Principales riesgos comunes que enfrenta su empresa",
              type: "list",
              options: [
                {
                  title: "Virus y Malware:",
                  desc: "Software malicioso diseñado para dañar su sistema, robar información o interrumpir sus operaciones.",
                },
                {
                  title: "Ransomware:",
                  desc: "Un tipo de malware que cifra sus archivos y exige un rescate para liberarlos, paralizando su negocio al instante.",
                },
                {
                  title: "Spyware",
                  desc: "Un software que se instala sin su consentimiento para monitorear sus actividades en línea y robar información confidencial.",
                },
                {
                  title: "Phishing:",
                  desc: "Ataques de ingeniería social diseñados para engañarle y hacerle revelar datos sensibles como contraseñas o números de tarjetas de crédito.",
                },
                {
                  title: "Ataques a la Red:",
                  desc: "Intentos de acceso no autorizado a su red para robar información o tomar el control de sus sistemas.",
                },
              ],
            },
          ],
        },
        {
          title: "Nuestro Enfoque Metodológico de Seguridad",
          description:
            "Nuestro servicio de soporte antivirus va más allá de la simple instalación de software. Seguimos un proceso riguroso para asegurar la máxima protección:",
          issues: [
            {
              title: "Etapas Clave",
              type: "list",
              options: [
                {
                  title: "1. Evaluación de Seguridad:",
                  desc: "Analizamos su red y sistemas actuales para identificar vulnerabilidades y riesgos potenciales.",
                },
                {
                  title: "2. Implementación Personalizada:",
                  desc: "Recomendamos y configuramos la solución antivirus más adecuada para sus necesidades específicas, ya sea para una sola PC o para una red corporativa compleja.",
                },
                {
                  title: "3. Monitoreo Proactivo:",
                  desc: "Supervisamos sus sistemas de forma continua para detectar cualquier actividad sospechosa y neutralizarla antes de que cause daños.",
                },
                {
                  title: "4. Actualizaciones y Parches:",
                  desc: "Nos aseguramos de que su software antivirus esté siempre actualizado con las últimas bases de datos de amenazas y parches de seguridad.",
                },
                {
                  title: "5. Educación del Usuario:",
                  desc: "Proporcionamos formación básica sobre las mejores prácticas de ciberseguridad para empoderar a su equipo.",
                },
              ],
            },
          ],
        },
      ],
    },
    issuecategory2: {
      title:
        "Servicios de Soporte Antivirus Integrales para una Protección Total",
      subTitle:
        "En ITSupport.net.in, ofrecemos una gama completa de servicios para mantener su entorno digital seguro.",
      issueCategories: [
        {
          title: "Instalación y Configuración",
          description:
            "Nos encargamos de la instalación y configuración completa de su software antivirus, asegurándonos de que esté optimizado para la máxima protección y el mínimo impacto en el rendimiento de su sistema.",
        },
        {
          title: "Eliminación de Virus y Malware",
          description:
            "Si su sistema ya está infectado, nuestro equipo de expertos está preparado para actuar. Usamos herramientas y técnicas avanzadas para eliminar el malware de forma segura y restaurar su sistema a un estado limpio y funcional.",
        },
        {
          title: "Mantenimiento y Soporte Continuo",
          description:
            "La seguridad es un proceso continuo. Ofrecemos planes de soporte que incluyen escaneos regulares, actualizaciones automáticas, configuración de cortafuegos y un servicio de asistencia técnica disponible 24/7 para cualquier emergencia.",
        },
        {
          title:
            "ITSupport.net.in: 20 Años de Experiencia, 10,000 Clientes Satisfechos",
          description:
            "Nuestra trayectoria es nuestro mayor aval. Durante dos décadas, hemos perfeccionado nuestros servicios para ofrecer soluciones de soporte antivirus que se adaptan a las amenazas cambiantes del panorama digital. La confianza de más de <strong>10,000 clientes satisfechos a nivel mundial</strong> demuestra nuestro compromiso inquebrantable con la excelencia y la seguridad. Con ITSupport.net.in, no solo obtiene un servicio, sino un socio de confianza que trabaja para proteger su negocio día y noche.",
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
        label: "¿Qué es la diferencia entre un antivirus y un antimalware?",
        desc: "Un antivirus tradicionalmente se enfoca en virus informáticos conocidos, mientras que un antimalware está diseñado para detectar y eliminar una gama más amplia de amenazas, como spyware, adware y ransomware.",
        expanded: true,
      },
      {
        label: "¿Es suficiente con un antivirus gratuito?",
        desc: "Si bien los antivirus gratuitos ofrecen una protección básica, a menudo carecen de funciones avanzadas de seguridad, como protección en tiempo real, cortafuegos integrado o soporte técnico, que son cruciales para la seguridad de un negocio.",
        expanded: false,
      },
      {
        label: "¿Qué hago si mi antivirus detecta una amenaza?",
        desc: "Lo más importante es no interactuar con la amenaza. Aísle el sistema si es posible y contacte de inmediato con nuestro equipo de soporte para que analicemos y eliminemos la amenaza de forma segura.",
        expanded: false,
      },
      {
        label: "¿Necesito un antivirus en mis dispositivos móviles?",
        desc: "Sí. Con el creciente uso de smartphones y tabletas para fines laborales, estos dispositivos son un objetivo cada vez más común para los ciberdelincuentes. La protección móvil es esencial.",
        expanded: false,
      },
      {
        label: "¿Qué es un cortafuegos y por qué es importante?",
        desc: "Un cortafuegos (firewall) es una barrera de seguridad que monitorea y controla el tráfico de red, impidiendo el acceso no autorizado a su red. Es una capa de defensa fundamental contra las intrusiones externas.",
        expanded: false,
      },
      {
        label:
          "¿Con qué frecuencia debo realizar un escaneo completo de mi sistema?",
        desc: "Recomendamos realizar un escaneo completo al menos una vez a la semana. Nuestro servicio automatiza este proceso para que no tenga que preocuparse por olvidarlo.",
        expanded: false,
      },
      {
        label: "¿Cómo protegen mis sistemas contra el ransomware?",
        desc: "Nuestra protección antivirus incluye tecnología específica para detectar y bloquear el ransomware antes de que pueda cifrar sus archivos. También ofrecemos soluciones de respaldo para que pueda recuperar sus datos si es necesario.",
        expanded: false,
      },
      {
        label: "¿Pueden eliminar un virus de un sistema ya infectado?",
        desc: "Sí, nuestro equipo de expertos está altamente capacitado para diagnosticar y eliminar virus y malware de sistemas ya infectados, minimizando los daños y restaurando su funcionamiento normal.",
        expanded: false,
      },
      {
        label: "¿Qué es un ataque de phishing y cómo puedo protegerme?",
        desc: "Un ataque de phishing utiliza correos electrónicos fraudulentos para engañarle y hacerle revelar información personal. La mejor protección es la educación y la vigilancia, junto con un filtro de spam avanzado y soluciones de seguridad que detecten enlaces maliciosos.",
        expanded: false,
      },
      {
        label:
          "¿Cuál es la principal ventaja de usar ITSupport.net.in para soporte antivirus?",
        desc: "Nuestra principal ventaja es nuestra combinación de experiencia y servicio proactivo. Con 20 años en el sector, no solo instalamos software; gestionamos su seguridad de forma integral para que usted pueda tener total tranquilidad.",
        expanded: false,
      },
    ],
  },
  {
    slug: "servicios-de-soporte-de-impresoras",
    title: "Solucione sus Problemas de Impresora",
    subtitle:
      "Solucione sus Problemas de Impresora Rápidamente con ITSupport.net.in",
    subtitle1:
      "En el entorno de oficina moderno, una impresora que no funciona puede ser una fuente de gran frustración y una interrupción significativa en el flujo de trabajo. Desde fallos de conexión y errores de drivers hasta atascos de papel inesperados, los problemas de impresora pueden causar retrasos costosos y aumentar el estrés innecesario. En ITSupport.net.in, entendemos que la eficiencia de su oficina depende de que todo funcione a la perfección, y eso incluye su equipo de impresión. Con una sólida experiencia de más de 20 años en el sector del soporte de TI, nos hemos establecido como un socio de confianza, brindando soluciones rápidas y efectivas a miles de empresas y particulares. Hemos ayudado a más de 10,000 clientes satisfechos a nivel mundial a resolver sus problemas de impresión, garantizando que su hardware funcione sin interrupciones. Nuestra misión es ofrecerle tranquilidad, brindándole el soporte experto que necesita para mantener su impresora siempre lista.",
    heroImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "Deje de Perder Tiempo con Problemas de Impresora",
      subheadline: "",
      description:
        "El tiempo que usted y su equipo pasan intentando solucionar problemas de impresora es tiempo perdido que podría dedicarse a tareas más productivas. Los errores de impresión son complejos y pueden ser difíciles de diagnosticar sin la experiencia adecuada. Nuestro enfoque proactivo y nuestro profundo conocimiento de una amplia gama de marcas y modelos de impresoras nos permiten identificar la raíz del problema rápidamente y aplicar una solución duradera. No solo resolvemos el problema inmediato, sino que también le proporcionamos las herramientas para prevenir futuros inconvenientes.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Nuestros Servicios Integrales de Soporte de Impresoras",
      services: [
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M12 21V7"></path>
              <path d="m16 12 2 2 4-4"></path>
              <path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"></path>
            </svg>
          ),
          title: "Soporte Integral",
          description:
            "Soluciones expertas para todas las marcas y modelos de impresoras",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z"></path>
              <path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z"></path>
            </svg>
          ),
          title: "Tiempo de Respuesta Rápido",
          description: "Diagnóstico rápido y resolución eficiente de problemas",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M10 10 7 7"></path>
              <path d="m10 14-3 3"></path>
              <path d="m14 10 3-3"></path>
              <path d="m14 14 3 3"></path>
              <path d="M14.205 4.139a4 4 0 1 1 5.439 5.863"></path>
              <path d="M19.637 14a4 4 0 1 1-5.432 5.868"></path>
              <path d="M4.367 10a4 4 0 1 1 5.438-5.862"></path>
              <path d="M9.795 19.862a4 4 0 1 1-5.429-5.873"></path>
              <rect x="10" y="8" width="4" height="8" rx="1"></rect>
            </svg>
          ),
          title: "Técnicos Certificados",
          description: "Profesionales capacitados con años de experiencia",
        },
      ],
    },
    issuecategory: {
      title: "Olvídate de los Problemas de Impresora",
      subTitle: "",
      issueCategories: [
        {
          title: "Problemas de Impresora Comunes que Resolvemos",
          description:
            "Identificamos y solucionamos los problemas más frecuentes de impresoras para que su flujo de trabajo no se detenga.",
          issues: [
            {
              title: "Soporte de Impresoras",
              type: "list",
              options: [
                {
                  title: "Problemas de Conectividad:",
                  desc: "La impresora no se conecta a la red Wi-Fi o al ordenador.",
                },
                {
                  title: "Errores de Software:",
                  desc: "Errores de drivers o de configuración que impiden la impresión.",
                },
                {
                  title: "Atascos de Papel Frecuentes:",
                  desc: "Ayudamos a identificar la causa de los atascos y a prevenirlos.",
                },
                {
                  title: "Mala Calidad de Impresión:",
                  desc: "Impresiones borrosas, rayas o colores incorrectos.",
                },
                {
                  title: "Errores del Sistema:",
                  desc: "Mensajes de error en la pantalla de la impresora o en el ordenador que no sabe cómo interpretar.",
                },
              ],
            },
            {
              title: "Nuestro Proceso de Soporte",
              type: "list",
              options: [
                {
                  title: "Consulta Rápida:",
                  desc: "Nos contacta a través de nuestro servicio de atención al cliente 24/7 y describe el problema.",
                },
                {
                  title: "Diagnóstico Experto:",
                  desc: "Un técnico especializado diagnostica la causa del problema a través de soporte remoto o, si es necesario, le guía para la solución.",
                },
                {
                  title: "Solución Rápida:",
                  desc: "Aplicamos la solución más adecuada, ya sea reparando el driver, reconfigurando la red o limpiando el hardware.",
                },
                {
                  title: "Verificación del Funcionamiento:",
                  desc: "Nos aseguramos de que su impresora esté funcionando perfectamente antes de finalizar la sesión.",
                },
              ],
            },
          ],
        },
      ],
    },
    issuecategory2: {
      title:
        "Servicios de Soporte de Impresoras Personalizados para una Protección Completa",
      subTitle:
        "En ITSupport.net.in, ofrecemos una gama completa de servicios para mantener su equipo de impresión en óptimas condiciones, sin importar la marca o el modelo.",
      issueCategories: [
        {
          title: "Instalación y Configuración",
          description:
            "Nos encargamos de la instalación completa de su nueva impresora, incluyendo la configuración de los drivers, la conexión a la red (cableada o inalámbrica) y la configuración de las opciones de impresión. Nos aseguramos de que su impresora esté lista para usar desde el primer momento.",
        },
        {
          title: "Reparación y Mantenimiento",
          description:
            "Si su impresora no funciona correctamente, nuestro equipo de expertos está preparado para actuar. Usamos técnicas de diagnóstico avanzadas para identificar y solucionar problemas de hardware y software, garantizando que su equipo vuelva a funcionar lo antes posible. También ofrecemos servicios de mantenimiento preventivo para prolongar la vida útil de su impresora.",
        },
        {
          title: "Soporte de Software y Conectividad",
          description:
            "Nos encargamos de los problemas más complejos, desde la configuración de una red de impresoras compartida hasta la solución de errores de drivers o la actualización de software. Garantizamos que su impresora se comunique correctamente con todos sus dispositivos.",
        },
        {
          title:
            "ITSupport.net.in: 20 Años de Experiencia, 10,000 Clientes Satisfechos",
          description:
            "Nuestra longevidad en el mercado es un testimonio de nuestra fiabilidad y experiencia. Durante dos décadas, hemos resuelto innumerables problemas de impresoras de todo tipo, desde las más sencillas hasta las más complejas. La confianza de más de 10,000 clientes satisfechos a nivel mundial demuestra nuestro compromiso con la excelencia y la satisfacción del cliente. Con ITSupport.net.in, usted no solo contrata un servicio, sino que obtiene un socio de confianza que se asegura de que sus herramientas de trabajo funcionen sin fallos.",
        },
      ],
    },
    whyChoose: {
      title: "¿Por qué elegir ITSupport.net.in?",
      desc: "Con más de una década de servicio dedicado y miles de clientes satisfechos a nivel mundial, ITSupport.net.in se destaca por:",
      whyChoosecategories: [
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title: "Técnicos Expertos",
          desc: "Profesionales altamente capacitados y experimentados.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          ),
          title: "Soporte 24/7",
          desc: "Asistencia cuando la necesite.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H7a3 3 0 00-3 3v8a3 3 0 003 3z"
              ></path>
            </svg>
          ),
          title: "Soluciones Remotas",
          desc: "Muchos problemas se resuelven de manera eficiente desde cualquier lugar.",
        },
        {
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-11V7a4 4 0 00-8 0v3"
              ></path>
            </svg>
          ),
          title: "Satisfacción del Cliente",
          desc: "Nuestra prioridad es que vuelva a imprimir sin problemas.",
        },
      ],
    },
    faqs: [
      {
        label: "¿Pueden reparar mi impresora de forma remota?",
        desc: "Sí, la mayoría de los problemas de software, como errores de drivers, problemas de conexión y errores de configuración, pueden resolverse de forma segura a través de nuestro soporte remoto, ahorrándole tiempo y molestias.",
        expanded: true,
      },
      {
        label: "¿Dan soporte a todas las marcas de impresoras?",
        desc: "Sí, nuestro equipo de técnicos tiene experiencia con la mayoría de las marcas de impresoras del mercado, incluyendo HP, Epson, Canon, Brother, Lexmark y muchas otras.",
        expanded: false,
      },
      {
        label: "¿Qué hago si mi impresora muestra un mensaje de error?",
        desc: "Si su impresora muestra un mensaje de error, es mejor no intentar solucionar el problema usted mismo. Tome una foto del mensaje y contáctenos de inmediato para que podamos diagnosticar y resolver el problema correctamente.",
        expanded: false,
      },
      {
        label:
          "¿Por qué mi impresora no imprime aunque el ordenador la detecta?",
        desc: "Este es un problema común. A menudo se debe a un driver corrupto, un error en la cola de impresión o una configuración incorrecta. Nuestro equipo puede diagnosticar la causa y solucionarlo rápidamente.",
        expanded: false,
      },
      {
        label: "¿Qué es un driver de impresora y por qué es importante?",
        desc: "Un driver es un software que permite que su ordenador se comunique con la impresora. Si el driver está obsoleto, dañado o es incorrecto, su impresora no funcionará correctamente.",
        expanded: false,
      },
      {
        label: "¿Pueden ayudarme a conectar mi impresora de forma inalámbrica?",
        desc: "Sí, ofrecemos asistencia completa para configurar su impresora en una red inalámbrica, asegurándonos de que todos sus dispositivos puedan imprimir de forma segura.",
        expanded: false,
      },
      {
        label: "¿Qué es un atasco de papel y cómo lo prevengo?",
        desc: "Un atasco de papel ocurre cuando el papel no pasa correctamente por el mecanismo de la impresora. A menudo se puede prevenir usando papel de buena calidad y asegurándose de que la bandeja de papel no esté sobrecargada.",
        expanded: false,
      },
      {
        label: "¿También dan soporte para problemas de calidad de impresión?",
        desc: "Sí, podemos ayudar a diagnosticar y solucionar problemas de calidad de impresión, como rayas, manchas o colores desvanecidos, que a menudo se deben a cabezales de impresión sucios o cartuchos de tinta defectuosos.",
        expanded: false,
      },
      {
        label: "¿Qué debo hacer si mi impresora imprime páginas en blanco?",
        desc: "Este problema suele estar relacionado con un cartucho de tinta o tóner vacío, un cabezal de impresión obstruido o un error del driver. Le guiaremos a través de la solución adecuada para el problema.",
        expanded: false,
      },
      {
        label: "¿Ofrecen soporte para cartuchos de tinta y tóner?",
        desc: "Aunque no vendemos consumibles directamente, podemos asesorarle sobre los tipos de tinta o tóner adecuados para su impresora y ayudarle a solucionar problemas relacionados con cartuchos defectuosos o no reconocidos.",
        expanded: false,
      },
    ],
  },
  {
    slug: "servicios-de-soporte-de-redes",
    title: "Servicios de soporte de red robustos",
    subtitle: "Conectividad perfecta durante una década",
    subtitle1:
      "En el núcleo de toda empresa moderna se encuentra una red de datos robusta y confiable. Una conexión lenta, una desconexión inesperada o un fallo en el servidor pueden paralizar las operaciones, impactar la productividad y poner en riesgo la seguridad de su información crítica. En ITSupport.net.in, entendemos que una red funcional no es solo una conveniencia, sino un pilar esencial para el éxito de su negocio.Con una trayectoria de más de 20 años en la industria de TI, hemos perfeccionado nuestros Servicios de Soporte de Redes para ofrecerle soluciones integrales, seguras y eficientes. Hemos brindado soporte a más de 10,000 clientes satisfechos a nivel mundial, ayudándoles a construir, gestionar y mantener redes que funcionan sin interrupciones. Nuestra misión es proporcionarle una tranquilidad total, sabiendo que la columna vertebral de su infraestructura tecnológica está en manos de expertos.",
    heroImage:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "Cómo abordar y resolver los desafíos comunes de la red",
      subheadline: "",
      description:
        "Los problemas de red pueden ser complejos y a menudo requieren conocimientos especializados para ser diagnosticados y resueltos.",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "¿Por qué elegir nuestro soporte de redes?",
      services: [
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M12 20h.01"></path>
              <path d="M2 8.82a15 15 0 0 1 20 0"></path>
              <path d="M5 12.859a10 10 0 0 1 14 0"></path>
              <path d="M8.5 16.429a5 5 0 0 1 7 0"></path>
            </svg>
          ),
          title: "Configuración de LAN y Wi-Fi",
          description:
            "Instalación y configuración profesional para una conectividad sin interrupciones.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M18 12h2"></path>
              <path d="M18 16h2"></path>
              <path d="M18 20h2"></path>
              <path d="M18 4h2"></path>
              <path d="M18 8h2"></path>
              <path d="M4 12h2"></path>
              <path d="M4 16h2"></path>
              <path d="M4 20h2"></path>
              <path d="M4 4h2"></path>
              <path d="M4 8h2"></path>
              <path d="M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z"></path>
            </svg>
          ),
          title: "Optimización de Rendimiento",
          description:
            "Identificamos y resolvemos cuellos de botella para máxima velocidad.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M12 9v1.258"></path>
              <path d="M16 3v5.46"></path>
              <path d="M21 9.118V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5.75"></path>
              <path d="M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z"></path>
              <path d="M3 15h7"></path>
              <path d="M3 9h12.142"></path>
              <path d="M8 15v6"></path>
              <path d="M8 3v6"></path>
            </svg>
          ),
          title: "Monitoreo de Seguridad",
          description:
            "Monitoreo continuo para proteger su red contra amenazas.",
        },
      ],
    },
    issuecategory: {
      title: "Deje de Luchar con Problemas de Red y Concéntrese en su Negocio",
      subTitle:
        "Los problemas de red pueden ser complejos y a menudo requieren conocimientos especializados para ser diagnosticados y resueltos. En lugar de que su equipo pierda tiempo valioso intentando solucionar fallos, nuestro servicio le permite delegar estas tareas en profesionales. Un soporte de red proactivo no solo soluciona los problemas, sino que los previene, garantizando una operación fluida y una seguridad sólida.",
      issueCategories: [
        {
          title: "Soporte de Red Empresarial",
          description:
            "Ofrecemos soluciones completas para resolver problemas comunes de red y optimizar el rendimiento de su infraestructura, garantizando conectividad estable, segura y eficiente.",
          issues: [
            {
              title: "Problemas de Red Comunes que Resolvemos",
              type: "list",
              options: [
                {
                  title: "Conectividad Lenta o Intermitente:",
                  desc: "Diagnóstico y solución de la causa de una velocidad de red deficiente o desconexiones frecuentes.",
                },
                {
                  title: "Problemas de Configuración:",
                  desc: "Dificultades para configurar nuevos dispositivos, routers, servidores o redes inalámbricas.",
                },
                {
                  title: "Fallas de Hardware:",
                  desc: "Identificación y reemplazo de equipos de red defectuosos, como routers, switches o puntos de acceso.",
                },
                {
                  title: "Vulnerabilidades de Seguridad:",
                  desc: "Detección de puntos débiles en su red que podrían ser explotados por atacantes.",
                },
                {
                  title: "Problemas de Acceso Remoto:",
                  desc: "Dificultades para conectarse de forma segura a la red de su oficina desde ubicaciones remotas.",
                },
              ],
            },
            {
              title: "Nuestro Proceso de Soporte de Red",
              type: "list",
              options: [
                {
                  title: "Evaluación de la Red:",
                  desc: "Realizamos un análisis completo de su infraestructura para identificar cuellos de botella, vulnerabilidades de seguridad y áreas de mejora.",
                },
                {
                  title: "Diseño e Implementación:",
                  desc: "Diseñamos y configuramos su red, ya sea desde cero o mejorando la existente, para garantizar un rendimiento óptimo y una seguridad robusta.",
                },
                {
                  title: "Monitoreo Constante:",
                  desc: "Supervisamos su red de forma proactiva para detectar cualquier actividad inusual o fallo potencial antes de que afecte sus operaciones.",
                },
                {
                  title: "Soporte Remoto y en Sitio:",
                  desc: "Ofrecemos asistencia rápida a través de soporte remoto para la mayoría de los problemas y programamos visitas en sitio para inconvenientes de hardware que lo requieran.",
                },
                {
                  title: "Mantenimiento Preventivo:",
                  desc: "Realizamos tareas de mantenimiento regulares, como actualizaciones de firmware y optimización de configuraciones, para asegurar la estabilidad de su red.",
                },
              ],
            },
          ],
        },
      ],
    },
    issuecategory2: {
      title:
        "Servicios de Soporte de Redes a Medida: Soluciones que Crecen con Usted",
      subTitle:
        "En ITSupport.net.in, ofrecemos un espectro completo de servicios de red para cubrir todas las necesidades de su negocio.",
      issueCategories: [
        {
          title: "Configuración de Redes Cableadas e Inalámbricas",
          description:
            "Nos encargamos de la configuración completa de su red, incluyendo routers, switches y puntos de acceso Wi-Fi. Nos aseguramos de que su red esté optimizada para ofrecer la máxima velocidad, cobertura y estabilidad en su oficina.",
        },
        {
          title: "Seguridad de Red y VPN",
          description:
            "Implementamos soluciones de seguridad de última generación, como firewalls y redes privadas virtuales (VPN), para proteger su red de accesos no autorizados, malware y otras amenazas. Garantizamos que sus datos viajen de forma segura, tanto dentro como fuera de la oficina.",
        },
        {
          title: "Diagnóstico y Solución de Problemas",
          description:
            "Nuestro equipo de expertos está preparado para diagnosticar y solucionar cualquier problema de red, desde un router que no responde hasta fallos de conectividad complejos. Utilizamos herramientas de diagnóstico avanzadas para identificar y resolver la causa raíz del problema de manera eficiente.",
        },
        {
          title:
            "ITSupport.net.in: 20 Años de Experiencia, 10,000 Clientes Satisfechos",
          description:
            "Nuestra longevidad en el mercado es un testimonio de nuestra fiabilidad y experiencia. Durante dos décadas, hemos resuelto innumerables problemas de red de todo tipo, desde las configuraciones más sencillas hasta arquitecturas de red complejas. La confianza de más de 10,000 clientes satisfechos a nivel mundial demuestra nuestro compromiso con la excelencia. Con ITSupport.net.in, usted no solo contrata un servicio, sino que obtiene un socio tecnológico que se asegura de que la red de su negocio esté siempre funcionando a la perfección.",
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
    whyChoose: {
      title: "¿Por qué elegir ITSupport.net.in para soporte de red?",
      desc: "Con más de una década de servicio dedicado y una trayectoria de apoyo a más de 10,000 clientes a nivel mundial, ITSupport.net.in es su socio ideal para la salud de su red. Nuestro compromiso con la excelencia se refleja en:",
      whyChoosecategories: [
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title: "Ingenieros de Red Experimentados",
          desc: "Nuestro equipo está compuesto por profesionales altamente cualificados y certificados.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          ),
          title: "Monitoreo Proactivo",
          desc: "Ofrecemos soluciones para monitorear su red en busca de posibles problemas antes de que se vuelvan críticos.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H7a3 3 0 00-3 3v8a3 3 0 003 3z"
              ></path>
            </svg>
          ),
          title: "Respuesta Rápida",
          desc: "Diagnóstico y resolución rápidos para minimizar el tiempo de inactividad de la red.",
        },
        {
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-11V7a4 4 0 00-8 0v3"
              ></path>
            </svg>
          ),
          title: "Disponibilidad 24/7",
          desc: "Soporte las 24 horas del día para asegurar que su negocio permanezca conectado.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              ></path>
            </svg>
          ),
          title: "Soluciones Personalizadas",
          desc: "Estrategias de red adaptadas para satisfacer las necesidades y la escala específicas de su negocio.",
        },
      ],
    },
    faqs: [
      {
        label: "¿Por qué mi red Wi-Fi es lenta y se desconecta con frecuencia?",
        desc: "La lentitud puede deberse a la saturación del canal, la distancia al router, interferencias de otros dispositivos o una configuración incorrecta. Realizamos un diagnóstico para optimizar su red y resolver estos problemas.",
        expanded: true,
      },
      {
        label: "¿Cuál es la diferencia entre un módem y un router?",
        desc: "Un módem es un dispositivo que se conecta a Internet a través de su proveedor de servicios. Un router es el dispositivo que distribuye esa conexión de Internet a todos los dispositivos en su red (computadoras, teléfonos, etc.).",
        expanded: false,
      },
      {
        label: "¿Cómo puedo asegurar mi red Wi-Fi de accesos no autorizados?",
        desc: "Es crucial proteger su red con una contraseña WPA2/WPA3 fuerte, cambiar el nombre de usuario y contraseña predeterminados del router y configurar un cortafuegos. Podemos ayudarle a implementar todas estas medidas de seguridad.",
        expanded: false,
      },
      {
        label: "¿Pueden ayudarme a configurar una VPN para el trabajo remoto?",
        desc: "Sí, ofrecemos servicios completos de configuración de VPN para garantizar que su equipo pueda acceder de forma segura a la red de la oficina desde cualquier lugar, protegiendo los datos confidenciales.",
        expanded: false,
      },
      {
        label: "¿Qué son los puntos de acceso Wi-Fi y por qué los necesito?",
        desc: "Los puntos de acceso (Access Points) son dispositivos que crean una red inalámbrica. En entornos de oficina grandes, se necesitan múltiples puntos de acceso para garantizar una cobertura Wi-Fi completa y estable en todas las áreas.",
        expanded: false,
      },
      {
        label: "¿Qué señales indican que mi red tiene un problema?",
        desc: "Las señales más comunes son la pérdida frecuente de conexión, velocidades de Internet lentas, el no poder acceder a recursos de la red (como impresoras o archivos compartidos) y mensajes de error de conectividad.",
        expanded: false,
      },
      {
        label: "¿Qué tipo de soporte de redes ofrecen?",
        desc: "Ofrecemos soporte integral que incluye diagnóstico de problemas, configuración de equipos, optimización de velocidad, seguridad de red, configuración de VPN y monitoreo constante para garantizar un rendimiento óptimo.",
        expanded: false,
      },
      {
        label: "¿Con qué tipo de hardware de red trabajan?",
        desc: "Trabajamos con una amplia gama de hardware de red, incluyendo routers, switches, módems, firewalls, puntos de acceso y tarjetas de red, de todas las marcas y modelos principales del mercado.",
        expanded: false,
      },
      {
        label: "¿Ofrecen un servicio de monitoreo de red?",
        desc: "Sí, ofrecemos un servicio de monitoreo proactivo 24/7 que nos permite detectar y solucionar posibles problemas de red, como fallos de equipos o interrupciones del servicio, antes de que afecten su negocio.",
        expanded: false,
      },
      {
        label:
          "¿Cuál es la ventaja de usar un servicio profesional en lugar de solucionar los problemas yo mismo?",
        desc: "Un servicio profesional como el nuestro le ahorra tiempo y dinero. Un diagnóstico incorrecto puede llevar a un problema mayor, mientras que nuestros expertos identifican la causa raíz y la resuelven de forma rápida y definitiva, garantizando la seguridad y la estabilidad de su red.",
        expanded: false,
      },
    ],
  },
  {
    slug: "servicios-de-soporte-en-la-nube",
    title: "Migre, Gestiona y Optimiza Infraestructura en la Nube",
    subtitle:
      "Operaciones en la nube sin interrupciones: más de una década de excelencia global para más de 1,000 clientes",
    subtitle1: `La nube ha dejado de ser una tecnología del futuro para convertirse en el presente de las empresas de todos los tamaños. A través de la computación en la nube, las empresas pueden lograr una agilidad sin precedentes, reducir costos, mejorar la colaboración y escalar sus operaciones de manera eficiente. Sin embargo, la migración y gestión de una infraestructura en la nube pueden ser complejas, repletas de desafíos de seguridad, optimización de costos y configuración. En ITSupport.net.in, somos su socio estratégico para desbloquear todo el potencial de la nube.`,
    heroImage:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline:
        "Navegando por el panorama de la nube: desafíos comunes que resolvemos",
      subheadline: "",
      description:
        "Con una experiencia de más de 20 años en el sector, nos hemos consolidado como un líder en soluciones de TI, proporcionando servicios de soporte en la nube expertos y fiables. Hemos ayudado a más de 10,000 clientes satisfechos en todo el mundo a navegar por la complejidad de la nube, garantizando una transición fluida, una seguridad robusta y una gestión eficiente. Nuestra misión es simple: empoderar su negocio para que prospere en la era digital.",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Nuestros Servicios de Soporte en la Nube",
      services: [
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="m10.852 19.772-.383.924"></path>
              <path d="m13.148 14.228.383-.923"></path>
              <path d="M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923"></path>
              <path d="m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544"></path>
              <path d="m14.772 15.852.923-.383"></path>
              <path d="m14.772 18.148.923.383"></path>
              <path d="M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"></path>
              <path d="m9.228 15.852-.923-.383"></path>
              <path d="m9.228 18.148-.923.383"></path>
            </svg>
          ),
          title: "Migración a la Nube",
          description:
            "Migración fluida de sus datos y aplicaciones a la nube.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="m17 15-5.5 5.5L9 18"></path>
              <path d="M5 17.743A7 7 0 1 1 15.71 10h1.79a4.5 4.5 0 0 1 1.5 8.742"></path>
            </svg>
          ),
          title: "Sincronización de Datos",
          description:
            "Mantenga sus archivos actualizados y accesibles en todos los dispositivos.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M3 12a9 3 0 0 0 5 2.69"></path>
              <path d="M21 9.3V5"></path>
              <path d="M3 5v14a9 3 0 0 0 6.47 2.88"></path>
              <path d="M12 12v4h4"></path>
              <path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"></path>
            </svg>
          ),
          title: "Sincronización de Datos",
          description:
            "Mantenga sus archivos actualizados y accesibles en todos los dispositivos.",
        },
      ],
    },
    issuecategory: {
      title: "Los Beneficios de la Nube, Gestionados por Expertos",
      subTitle:
        "La nube ofrece una promesa de flexibilidad, escalabilidad y ahorro de costos. Sin embargo, sin la gestión adecuada, estos beneficios pueden ser difíciles de alcanzar. Un entorno en la nube mal configurado puede generar vulnerabilidades de seguridad, costos inesperados y problemas de rendimiento que afectan a la productividad. Nuestro enfoque proactivo y nuestra profunda experiencia garantizan que su infraestructura en la nube esté siempre optimizada, segura y alineada con los objetivos de su negocio.",
      issueCategories: [
        {
          title: "Beneficios Clave de la Computación en la Nube",
          description:
            "Aproveche al máximo la computación en la nube con beneficios que impulsan su negocio:",
          issues: [
            {
              title: "Beneficios Principales",
              type: "list",
              options: [
                {
                  title: "Escalabilidad:",
                  desc: "Aumente o reduzca sus recursos informáticos según la demanda, pagando solo por lo que usa.",
                },
                {
                  title: "Reducción de Costos:",
                  desc: "Elimine la necesidad de invertir en hardware costoso y su mantenimiento asociado.",
                },
                {
                  title: "Flexibilidad:",
                  desc: "Permita que sus empleados accedan a los datos y aplicaciones desde cualquier lugar y en cualquier dispositivo, mejorando la colaboración.",
                },
                {
                  title: "Recuperación ante Desastres:",
                  desc: "Proteja sus datos de desastres físicos y fallos del sistema con soluciones de respaldo y recuperación en la nube.",
                },
                {
                  title: "Innovación Acelerada:",
                  desc: "Utilice herramientas y servicios de vanguardia de forma instantánea para innovar más rápido que su competencia.",
                },
              ],
            },
          ],
        },
        {
          title:
            "Nuestro Proceso de Soporte en la Nube: Un Viaje sin Problemas",
          description:
            "Nuestro servicio integral asegura que su transición y gestión en la nube sean un éxito:",
          issues: [
            {
              title: "Etapas del Proceso",
              type: "list",
              options: [
                {
                  title: "Evaluación y Estrategia:",
                  desc: "Analizamos su infraestructura actual y sus objetivos comerciales para diseñar una estrategia de nube personalizada, decidiendo qué migrar y cómo.",
                },
                {
                  title: "Migración Segura:",
                  desc: "Ejecutamos la migración de sus datos y aplicaciones a la nube de manera segura y con un tiempo de inactividad mínimo.",
                },
                {
                  title: "Configuración y Optimización:",
                  desc: "Configuramos su entorno en la nube para garantizar el máximo rendimiento, la seguridad y la optimización de costos desde el primer día.",
                },
                {
                  title: "Soporte y Gestión Continuos:",
                  desc: "Ofrecemos monitoreo proactivo, soporte 24/7 y gestión continua para asegurarnos de que su infraestructura en la nube funcione sin problemas.",
                },
              ],
            },
          ],
        },
      ],
    },
    issuecategory2: {
      title:
        "Servicios de Soporte en la Nube a Medida para la Máxima Eficiencia",
      subTitle:
        "En ITSupport.net.in, ofrecemos un espectro completo de servicios para gestionar su viaje a la nube, independientemente de la etapa en la que se encuentre su negocio.",
      issueCategories: [
        {
          title: "Migración y Configuración de la Nube",
          description:
            "Nos encargamos de todo el proceso de migración, desde la planificación hasta la ejecución, en las principales plataformas de nube como AWS, Microsoft Azure y Google Cloud. Nos aseguramos de que su infraestructura se configure de forma óptima para su rendimiento y seguridad.",
        },
        {
          title: "Gestión de la Seguridad en la Nube",
          description:
            "La seguridad en la nube es nuestra prioridad. Implementamos las mejores prácticas de seguridad, como la gestión de identidades y accesos (IAM), la configuración de firewalls y el cifrado de datos, para proteger su información en todo momento y cumplir con las normativas.",
        },
        {
          title: "Optimización de Costos y Rendimiento",
          description:
            "Con nuestra experiencia, evitamos costos innecesarios y garantizamos que sus recursos en la nube se utilicen de manera eficiente. Realizamos auditorías periódicas para optimizar el rendimiento y asegurar que usted solo pague por los servicios que realmente necesita.",
        },
        {
          title: "Soporte para Entornos Híbridos y Multicloud",
          description:
            "Si su estrategia requiere una combinación de infraestructura local y en la nube (híbrida) o el uso de múltiples proveedores de nube, nuestro equipo tiene la experiencia para gestionar estos entornos complejos, garantizando una operación fluida y una integración perfecta.",
        },
        {
          title:
            "ITSupport.net.in: 20 Años de Experiencia, 10,000 Clientes Satisfechos",
          description:
            "Nuestra longevidad en el mercado es un testimonio de nuestra fiabilidad y experiencia. Durante dos décadas, hemos resuelto innumerables problemas de TI y hemos ayudado a empresas a adoptar nuevas tecnologías como la nube. La confianza de más de 10,000 clientes satisfechos a nivel mundial demuestra nuestro compromiso con la excelencia y el éxito de nuestros clientes. Con ITSupport.net.in, usted no solo contrata un servicio, sino que obtiene un socio tecnológico que lo guiará en su camino a la nube.",
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
    whyChoose: {
      title:
        "¿Por qué asociarse con ITSupport.net.in para servicios en la nube?",
      desc: "Elegir ITSupport.net.in como su socio de soporte en la nube significa aprovechar más de una década de experiencia práctica y una huella global de más de 10,000 clientes satisfechos. Nuestro compromiso con su éxito se basa en:",
      whyChoosecategories: [
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title: "Experiencia en Plataformas Agnósticas",
          desc: "Competentes en todos los principales proveedores de la nube.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          ),
          title: "Monitoreo y Soporte Proactivo 24/7",
          desc: "Detectamos y resolvemos problemas a menudo antes de que usted los note.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H7a3 3 0 00-3 3v8a3 3 0 003 3z"
              ></path>
            </svg>
          ),
          title: "Foco en la Optimización de Costos",
          desc: "Aseguramos que obtenga el máximo valor de su inversión en la nube.",
        },
        {
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-11V7a4 4 0 00-8 0v3"
              ></path>
            </svg>
          ),
          title: "Seguridad y Cumplimiento Mejorados",
          desc: "Protegemos sus datos y cumplimos con los requisitos regulatorios.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              ></path>
            </svg>
          ),
          title: "Escalabilidad y Flexibilidad",
          desc: "Garantizamos que su infraestructura en la nube crezca sin problemas con su negocio.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title: "Ingenieros de Nube Dedicados y Certificados",
          desc: "Un equipo comprometido con su éxito en la nube.",
        },
      ],
    },
    faqs: [
      {
        label: "¿Qué es la computación en la nube?",
        desc: "La computación en la nube es el suministro de servicios informáticos (servidores, almacenamiento, bases de datos, redes, software) a través de Internet, permitiendo acceder a ellos de forma remota en lugar de tenerlos en sus propias instalaciones.",
        expanded: true,
      },
      {
        label:
          "¿Cuáles son los principales beneficios de mover mi negocio a la nube?",
        desc: "Los principales beneficios incluyen la reducción de costos de hardware, la capacidad de escalar sus recursos según la demanda, la mejora en la colaboración entre equipos y la protección avanzada de datos y sistemas.",
        expanded: false,
      },
      {
        label: "¿Es la nube más segura que tener servidores locales?",
        desc: "Un entorno en la nube bien configurado y gestionado por expertos es a menudo más seguro que los servidores locales, ya que los proveedores de nube invierten masivamente en medidas de seguridad físicas y digitales de última generación.",
        expanded: false,
      },
      {
        label:
          "¿Pueden ayudarme a elegir el proveedor de nube adecuado (AWS, Azure, Google)?",
        desc: "Nuestros expertos le guiarán a través de un análisis exhaustivo para entender sus necesidades y recomendar la plataforma de nube que mejor se adapte a su negocio en términos de servicios, costos y escalabilidad.",
        expanded: false,
      },
      {
        label: "¿Cuánto tiempo tarda una migración a la nube?",
        desc: "El tiempo de migración varía según la complejidad de su infraestructura. Una migración simple puede tomar unos pocos días, mientras que una migración completa de un entorno complejo puede durar varios meses.",
        expanded: false,
      },
      {
        label: "¿Qué tipos de servicios en la nube existen?",
        desc: "Los tipos de servicio más comunes son: IaaS (Infraestructura como servicio), PaaS (Plataforma como servicio) y SaaS (Software como servicio). Cada uno ofrece un nivel diferente de control y gestión.",
        expanded: false,
      },
      {
        label: "¿Cómo puedo controlar los costos en la nube?",
        desc: "La gestión proactiva de costos es clave. Nuestro servicio incluye el monitoreo del uso de recursos, la optimización de instancias y el uso de reservas y planes de ahorro para asegurar que sus gastos se mantengan dentro del presupuesto.",
        expanded: false,
      },
      {
        label: "¿Qué es una nube híbrida?",
        desc: "Una nube híbrida es un entorno que combina una infraestructura local (on-premise) con una nube pública. Esta solución permite a las empresas mantener el control sobre los datos sensibles mientras aprovechan los beneficios de la nube pública.",
        expanded: false,
      },
      {
        label: "¿Qué pasa con la privacidad de mis datos en la nube?",
        desc: "Nos aseguramos de que su entorno en la nube cumpla con las normativas de privacidad de datos, como el RGPD, y utilizamos protocolos de encriptación y acceso seguro para garantizar la confidencialidad de su información.",
        expanded: false,
      },
      {
        label: "¿Ofrecen soporte para entornos que ya están en la nube?",
        desc: "Ofrecemos servicios de soporte integral para entornos que ya están en la nube. Podemos encargarnos de la gestión, optimización, seguridad y resolución de problemas para cualquier infraestructura en la nube existente.",
        expanded: false,
      },
    ],
  },
  {
    slug: "servicios-de-soporte-para-comercio-electrónico",
    title: "Eleve su tienda en línea con expertos",
    subtitle: "Maximice la Conversión y la Fiabilidad de su Tienda Online",
    subtitle1: `En el competitivo mundo del comercio electrónico, una tienda online no es solo un sitio web; es el corazón de su negocio. Un rendimiento lento, un error en el carrito de compras o una pasarela de pago defectuosa pueden llevar a la pérdida de clientes y a una caída en las ventas. Para tener éxito, su plataforma de e-commerce debe ser rápida, segura y estar siempre disponible. En ITSupport.net.in, somos el socio tecnológico que garantiza que su negocio online funcione sin problemas.`,
    heroImage:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline:
        "Superando los desafíos del comercio electrónico: Soluciones para su éxito online",
      subheadline: "",
      description:
        "Con una experiencia de más de 20 años en la industria de TI, hemos adaptado nuestra experiencia para ofrecer Servicios de Soporte para Comercio Electrónico de primera línea. Hemos ayudado a más de 10,000 clientes satisfechos a nivel mundial a construir y mantener tiendas online robustas, seguras y altamente eficientes. Nuestra misión es simple: proporcionarle una base técnica sólida para que usted pueda concentrarse en el crecimiento de su negocio.",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Why Choose Our E-Commerce Support?",
      services: [
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"></path>
              <path d="M8 13v9"></path>
              <path d="M16 22v-9"></path>
              <path d="m9 6 1 7"></path>
              <path d="m15 6-1 7"></path>
              <path d="M12 6V2"></path>
              <path d="M13 2h-2"></path>
            </svg>
          ),
          title: "Platform Expertise",
          description: "Support for Shopify, WooCommerce, Magento, and more.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path>
              <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path>
              <path d="m2 16 6 6"></path>
              <circle cx="16" cy="9" r="2.9"></circle>
              <circle cx="6" cy="5" r="3"></circle>
            </svg>
          ),
          title: "Payment Integration",
          description: "Seamless and secure payment gateway setup.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M7 3.34V5a3 3 0 0 0 3 3"></path>
              <path d="M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
              <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
              <path d="M12 2a10 10 0 1 0 9.54 13"></path>
              <path d="M20 6V4a2 2 0 1 0-4 0v2"></path>
              <rect width="8" height="5" x="14" y="6" rx="1"></rect>
            </svg>
          ),
          title: "Security & Uptime",
          description: "Continuous monitoring for safe and reliable shopping.",
        },
      ],
    },
    issuecategory: {
      title: "Los Desafíos del E-commerce, Resueltos por Expertos",
      subTitle:
        "Los negocios online enfrentan una variedad de desafíos técnicos que pueden afectar directamente su rentabilidad. Un solo error puede interrumpir la experiencia del cliente y dañar su credibilidad. Nuestro servicio de soporte proactivo no solo soluciona los problemas, sino que los previene, asegurando que su tienda online esté siempre optimizada para la conversión y la confianza del cliente.",
      issueCategories: [
        {
          title: "Desafíos Comunes del Comercio Electrónico que Solucionamos",
          description:
            "Identificamos y resolvemos los problemas más frecuentes que afectan a su tienda online:",
          issues: [
            {
              title: "Problemas Principales",
              type: "list",
              options: [
                {
                  title: "Rendimiento Lento:",
                  desc: "Tiempos de carga prolongados que frustran a los clientes y aumentan la tasa de rebote.",
                },
                {
                  title: "Fallos de Pago:",
                  desc: "Errores en la pasarela de pago que impiden a los clientes completar sus compras.",
                },
                {
                  title: "Problemas de Seguridad:",
                  desc: "Vulnerabilidades que pueden exponer los datos de los clientes y dañar la reputación de la marca.",
                },
                {
                  title: "Funcionalidad Rota:",
                  desc: "Carritos de compra, filtros de productos o enlaces que no funcionan correctamente.",
                },
                {
                  title: "Gestión de la Plataforma:",
                  desc: "Dificultades para configurar nuevos productos, plugins o actualizaciones.",
                },
              ],
            },
          ],
        },
        {
          title:
            "Nuestro Proceso de Soporte para E-commerce: Eficiencia y Confiabilidad",
          description:
            "Seguimos un proceso estructurado para garantizar el éxito a largo plazo de su tienda online:",
          issues: [
            {
              title: "Etapas del Proceso",
              type: "list",
              options: [
                {
                  title: "Auditoría Inicial:",
                  desc: "Realizamos un análisis completo de su plataforma para identificar problemas de rendimiento, seguridad y experiencia de usuario.",
                },
                {
                  title: "Plan de Optimización:",
                  desc: "Creamos un plan de acción detallado para mejorar la velocidad, seguridad y funcionalidad de su sitio.",
                },
                {
                  title: "Implementación y Mantenimiento:",
                  desc: "Nos encargamos de la implementación de las mejoras y ofrecemos un servicio de mantenimiento continuo para asegurar que su plataforma esté siempre actualizada y libre de errores.",
                },
                {
                  title: "Soporte Dedicado:",
                  desc: "Le proporcionamos acceso a un equipo de expertos que está disponible para resolver cualquier problema técnico de forma rápida y eficaz.",
                },
              ],
            },
          ],
        },
      ],
    },
    issuecategory2: {
      title:
        "Servicios de Soporte de E-commerce a Medida para un Negocio en Crecimiento",
      subTitle:
        "En ITSupport.net.in, ofrecemos un espectro completo de servicios para gestionar todos los aspectos técnicos de su tienda online.",
      issueCategories: [
        {
          title: "Gestión de Plataformas y Rendimiento",
          description:
            "Proporcionamos soporte experto para las principales plataformas de comercio electrónico, incluyendo Shopify, WooCommerce y Magento. Nos encargamos de la configuración inicial, la optimización del rendimiento, la gestión de temas y plugins, y la resolución de errores para garantizar una experiencia de usuario fluida y rápida.",
        },
        {
          title: "Seguridad y Confianza del Cliente",
          description:
            "La seguridad es fundamental para la confianza online. Implementamos las mejores prácticas de seguridad, incluyendo la gestión de certificados SSL, la protección contra ataques de malware y la supervisión de vulnerabilidades, para proteger los datos de sus clientes y su reputación.",
        },
        {
          title: "Integración y Resolución de Pasarelas de Pago",
          description:
            "Nos encargamos de la integración de pasarelas de pago populares como PayPal, Stripe y otras soluciones locales. Solucionamos cualquier problema técnico que surja, garantizando que sus clientes puedan completar sus compras de forma segura y sin interrupciones.",
        },
        {
          title:
            "ITSupport.net.in: 20 Años de Experiencia, 10,000 Clientes Satisfechos",
          description:
            "Nuestra trayectoria es un testimonio de nuestra fiabilidad y experiencia. Durante dos décadas, hemos resuelto innumerables problemas tecnológicos y hemos ayudado a empresas a prosperar en línea. La confianza de más de 10,000 clientes satisfechos a nivel mundial demuestra nuestro compromiso con la excelencia y el éxito de nuestros clientes. Con ITSupport.net.in, usted no solo contrata un servicio, sino que obtiene un socio tecnológico que se asegura de que su tienda online esté siempre en su mejor forma.",
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
    whyChoose: {
      title:
        "¿Por qué asociarse con ITSupport.net.in para el éxito del comercio electrónico?",
      desc: "Elegir ITSupport.net.in significa confiar su tienda en línea a un equipo con más de una década de experiencia especializada y una trayectoria de apoyo a más de 500 clientes de comercio electrónico satisfechos a nivel mundial. Nuestro compromiso con el crecimiento de su negocio se refleja en:",
      whyChoosecategories: [
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title: "Experiencia en Plataformas Agnósticas",
          desc: "Competentes en todas las principales plataformas y tecnologías de comercio electrónico.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          ),
          title: "Monitoreo Proactivo 24/7",
          desc: "Identificamos y resolvemos problemas antes de que afecten sus ventas.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H7a3 3 0 00-3 3v8a3 3 0 003 3z"
              ></path>
            </svg>
          ),
          title: "Soluciones Orientadas a las Ventas",
          desc: "Nuestro soporte se centra en mejorar el rendimiento, las conversiones y los ingresos de su tienda.",
        },
        {
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-11V7a4 4 0 00-8 0v3"
              ></path>
            </svg>
          ),
          title: "Seguridad y Cumplimiento Mejorados",
          desc: "Protegemos los datos valiosos de sus clientes y mantenemos la confianza.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              ></path>
            </svg>
          ),
          title: "Escalabilidad y Optimización del Rendimiento",
          desc: "Aseguramos que su tienda pueda manejar picos de tráfico y crecer con su negocio.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title:
            "Especialistas en Comercio Electrónico Dedicados y Certificados",
          desc: "Un equipo verdaderamente comprometido con el éxito de su tienda en línea.",
        },
      ],
    },
    faqs: [
      {
        label: "¿Qué plataformas de comercio electrónico soportan?",
        desc: "Ofrecemos soporte integral para las plataformas más populares, incluyendo Shopify, WooCommerce, Magento, así como soluciones personalizadas en otros sistemas de gestión de contenido.",
        expanded: true,
      },
      {
        label: "¿Cómo mejoran la velocidad de mi sitio de e-commerce?",
        desc: "Mejoramos la velocidad optimizando imágenes, minimizando el código, utilizando la caché del navegador, gestionando eficazmente el alojamiento y garantizando que su plataforma esté actualizada y libre de plugins que la ralenticen.",
        expanded: false,
      },
      {
        label: "¿Qué hacen para proteger mi tienda online de ciberamenazas?",
        desc: "Implementamos firewalls de aplicaciones web (WAF), gestionamos los certificados SSL, realizamos escaneos de seguridad regulares, nos encargamos de las actualizaciones y aplicamos las mejores prácticas para proteger su sitio de malware y ataques.",
        expanded: false,
      },
      {
        label: "¿Pueden ayudarme a integrar una nueva pasarela de pago?",
        desc: "Podemos encargarnos de la integración completa de nuevas pasarelas de pago, asegurando que la configuración sea correcta y que todas las transacciones se procesen de forma segura.",
        expanded: false,
      },
      {
        label:
          "¿Qué es un certificado SSL y por qué es importante para mi e-commerce?",
        desc: "Un certificado SSL (Secure Sockets Layer) es un protocolo de seguridad que encripta la conexión entre su sitio web y los navegadores de sus clientes. Es esencial para proteger los datos confidenciales y es clave para la confianza del cliente.",
        expanded: false,
      },
      {
        label: "¿Ofrecen soporte para la gestión de productos y categorías?",
        desc: "Ofrecemos soporte para la gestión de su base de datos de productos, incluyendo la carga masiva de productos, la configuración de categorías, la optimización de descripciones y la resolución de problemas relacionados con inventarios y precios.",
        expanded: false,
      },
      {
        label:
          "¿Cuáles son los beneficios de un mantenimiento continuo para mi tienda online?",
        desc: "El mantenimiento continuo previene problemas antes de que ocurran, asegura que su sitio esté siempre actualizado y seguro, optimiza el rendimiento y garantiza que la experiencia de sus clientes sea siempre fluida.",
        expanded: false,
      },
      {
        label: "¿Cómo manejan el tiempo de inactividad de mi sitio web?",
        desc: "Monitoreamos su sitio 24/7. Si se produce un tiempo de inactividad, nuestro equipo es notificado de inmediato para diagnosticar la causa y restaurar el servicio en el menor tiempo posible.",
        expanded: false,
      },
      {
        label: "¿Ayudan con la optimización para dispositivos móviles?",
        desc: "Nos aseguramos de que su tienda online esté completamente optimizada para dispositivos móviles, ya que un gran porcentaje del tráfico y las ventas de e-commerce provienen de smartphones y tabletas.",
        expanded: false,
      },
      {
        label:
          "¿En qué se diferencia su servicio del soporte estándar de la plataforma (ej. Shopify)?",
        desc: "El soporte estándar a menudo se limita a problemas de la plataforma. Nosotros ofrecemos un soporte integral que cubre problemas de plugins, temas, integraciones, rendimiento, seguridad y optimización, proporcionándole un servicio personalizado y completo.",
        expanded: false,
      },
    ],
  },
  {
    slug: "servicios-de-soporte-para-reparación-de-hardware",
    title: "Servicios de soporte de hardware inigualables",
    subtitle:
      "Reparación de Hardware: Restaure sus Dispositivos con Expertos de ITSupport.net.in",
    subtitle1: `Un fallo de hardware puede ser una de las experiencias más frustrantes y disruptivas en el mundo digital. Su ordenador no se enciende, la pantalla se congela, el disco duro hace ruidos extraños… estos problemas no solo interrumpen su trabajo, sino que también ponen en riesgo sus datos más valiosos. En ITSupport.net.in, somos su solución confiable para todos los problemas de hardware, grandes y pequeños.`,
    heroImage:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline:
        "Cómo solucionar los problemas de hardware: problemas comunes que solucionamos con maestría",
      subheadline: "",
      description:
        "Con más de 20 años de experiencia en el sector de TI, hemos perfeccionado nuestros Servicios de Soporte para Reparación de Hardware para ofrecer diagnósticos precisos y soluciones duraderas. Hemos asistido a más de 10,000 clientes satisfechos a nivel mundial a revivir sus dispositivos, restaurar su funcionalidad y recuperar su información crítica. Nuestra misión es simple: devolverle la tranquilidad, asegurando que su tecnología funcione de manera óptima y que su inversión esté protegida.",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Why Choose Our Hardware Repair?",
      services: [
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
              <path d="M10 6h4"></path>
              <path d="M10 10h4"></path>
              <path d="M10 14h4"></path>
              <path d="M10 18h4"></path>
            </svg>
          ),
          title: "All Major Brands",
          description: "Repairs for Dell, HP, Lenovo, Apple, and more.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"></path>
              <path d="M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"></path>
              <path d="M6 6h.01"></path>
              <path d="M6 18h.01"></path>
              <path d="m13 6-4 6h6l-4 6"></path>
            </svg>
          ),
          title: "Quick Turnaround",
          description: "Most repairs completed within 24–48 hours.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M12 3V2"></path>
              <path d="m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5"></path>
              <path d="M2 14h12a2 2 0 0 1 0 4h-2"></path>
              <path d="M4 10h16"></path>
              <path d="M5 10a7 7 0 0 1 14 0"></path>
              <path d="M5 14v6a1 1 0 0 1-1 1H2"></path>
            </svg>
          ),
          title: "Preventive Maintenance",
          description: "Upgrades and maintenance to prevent future issues.",
        },
      ],
    },
    issuecategory: {
      title:
        "Diagnóstico Preciso y Soluciones Duraderas: El Camino a la Recuperación",
      subTitle:
        "Un diagnóstico incorrecto puede llevar a reparaciones costosas e innecesarias. Nuestros técnicos, con décadas de experiencia, están capacitados para identificar la causa raíz de cualquier fallo de hardware. En lugar de ofrecer soluciones temporales, nos enfocamos en una reparación completa y duradera, utilizando componentes de calidad y aplicando las mejores prácticas de la industria. No solo solucionamos el problema, sino que también le asesoramos para que pueda prevenir fallos futuros.",
      issueCategories: [
        {
          title: "Fallos de Hardware Comunes que Resolvemos",
          description:
            "Identificamos y resolvemos los problemas más frecuentes que afectan a sus dispositivos de hardware:",
          issues: [
            {
              title: "Problemas Principales",
              type: "list",
              options: [
                {
                  title: "Fallo de Arranque:",
                  desc: "El ordenador no se enciende o se reinicia de forma inesperada.",
                },
                {
                  title: "Componentes Dañados:",
                  desc: "Tarjetas madre, tarjetas de video, módulos de RAM o fuentes de alimentación defectuosos.",
                },
                {
                  title: "Problemas de Almacenamiento:",
                  desc: "Discos duros que fallan, hacen ruidos extraños o no son detectados por el sistema.",
                },
                {
                  title: "Pantallas Dañadas:",
                  desc: "Pantallas de portátiles o monitores con pixeles muertos, rayas o que no muestran imagen.",
                },
                {
                  title: "Rendimiento Lento:",
                  desc: "Una degradación significativa en la velocidad del sistema, a menudo causada por hardware obsoleto o fallas en el disco duro.",
                },
              ],
            },
          ],
        },
        {
          title: "Nuestro Proceso de Reparación: Transparente y Profesional",
          description:
            "Seguimos un proceso estructurado para garantizar que su dispositivo esté en las mejores manos:",
          issues: [
            {
              title: "Etapas del Proceso",
              type: "list",
              options: [
                {
                  title: "Diagnóstico Inicial:",
                  desc: "Realizamos un diagnóstico exhaustivo de su dispositivo para identificar el componente fallido y la causa del problema.",
                },
                {
                  title: "Presupuesto Claro:",
                  desc: "Le proporcionamos un presupuesto detallado y transparente, explicando la reparación necesaria y el costo asociado antes de proceder.",
                },
                {
                  title: "Reparación Experta:",
                  desc: "Nuestros técnicos certificados realizan la reparación con precisión, utilizando herramientas y componentes de alta calidad.",
                },
                {
                  title: "Pruebas Rigurosas:",
                  desc: "Una vez reparado, su dispositivo se somete a rigurosas pruebas para garantizar que el problema se haya resuelto y que el sistema funcione de manera óptima.",
                },
                {
                  title: "Entrega y Garantía:",
                  desc: "Le entregamos su dispositivo reparado y ofrecemos una garantía sobre la reparación y los componentes reemplazados.",
                },
              ],
            },
          ],
        },
      ],
    },
    issuecategory2: {
      title:
        "Servicios de Reparación de Hardware a Medida para la Máxima Eficiencia",
      subTitle:
        "En ITSupport.net.in, ofrecemos un espectro completo de servicios para restaurar y mejorar el rendimiento de sus equipos.",
      issueCategories: [
        {
          title: "Diagnóstico y Reparación de Componentes",
          description:
            "Identificamos y reemplazamos componentes fallidos como tarjetas madre, procesadores, tarjetas gráficas, módulos de RAM y fuentes de poder. Nuestro objetivo es restaurar la funcionalidad de su dispositivo de manera eficiente y económica.",
        },
        {
          title: "Recuperación de Datos de Discos Duros",
          description:
            "Un disco duro fallido no siempre significa la pérdida de sus datos. Nuestros expertos utilizan herramientas avanzadas para intentar la recuperación de datos de discos duros defectuosos, dándole una segunda oportunidad a su información crítica.",
        },
        {
          title: "Actualizaciones y Mejoras de Rendimiento",
          description:
            "Podemos darle una nueva vida a sus equipos antiguos. Ofrecemos servicios de actualización, como la instalación de discos SSD para una velocidad de arranque ultrarrápida y la ampliación de la memoria RAM, para mejorar el rendimiento general de su sistema.",
        },
        {
          title: "Reparación de Portátiles y Periféricos",
          description:
            "Desde la reparación de pantallas rotas y teclados que no funcionan en portátiles, hasta la solución de problemas en impresoras y otros periféricos. Nuestro equipo está capacitado para trabajar en una amplia variedad de dispositivos y accesorios.",
        },
        {
          title:
            "ITSupport.net.in: 20 Años de Experiencia, 10,000 Clientes Satisfechos",
          description:
            "Nuestra longevidad en el mercado es un testimonio de nuestra fiabilidad y experiencia. Durante dos décadas, hemos resuelto innumerables problemas de hardware y hemos ayudado a empresas y particulares a maximizar la vida útil de sus equipos. La confianza de más de 10,000 clientes satisfechos a nivel mundial demuestra nuestro compromiso con la excelencia. Con ITSupport.net.in, usted no solo contrata un servicio, sino que obtiene un socio tecnológico que se asegura de que su hardware funcione de manera impecable.",
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
    whyChoose: {
      title:
        "¿Por qué asociarse con ITSupport.net.in para servicios de hardware?",
      desc: "Elegir a ITSupport.net.in para su soporte de hardware significa aprovechar más de una década de experiencia práctica y una trayectoria de servicio a más de 10,000 clientes satisfechos a nivel mundial. Nuestro compromiso con su continuidad operativa se basa en:",
      whyChoosecategories: [
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title: "Experiencia en Múltiples Marcas",
          desc: "Competentes en el diagnóstico y la reparación de hardware de todos los principales fabricantes.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          ),
          title: "Reparación a Nivel de Componente",
          desc: "Más allá de las soluciones simples, a menudo podemos reparar componentes, lo que le ahorra costos de reemplazo.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H7a3 3 0 00-3 3v8a3 3 0 003 3z"
              ></path>
            </svg>
          ),
          title: "Respuesta Rápida 24/7",
          desc: "Diagnóstico rápido y resolución eficiente para minimizar el tiempo de inactividad del hardware.",
        },
        {
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-11V7a4 4 0 00-8 0v3"
              ></path>
            </svg>
          ),
          title: "Mantenimiento Preventivo",
          desc: "Servicios proactivos para extender la vida útil de su hardware y prevenir futuros problemas.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              ></path>
            </svg>
          ),
          title: "Repuestos Genuinos y Servicio de Calidad",
          desc: "Utilizamos repuestos auténticos y ofrecemos asistencia técnica de primer nivel.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title: "Alcance Global, Toque Local",
          desc: "Soporte experto disponible dondequiera que esté, con un servicio personalizado.",
        },
      ],
    },
    faqs: [
      {
        label: "¿Qué tipo de hardware reparan?",
        desc: "Reparamos una amplia gama de hardware, incluyendo ordenadores de escritorio, portátiles, servidores, discos duros, fuentes de poder, tarjetas gráficas, pantallas y periféricos como impresoras.",
        expanded: true,
      },
      {
        label: "¿Cómo sé si mi problema es de hardware o de software?",
        desc: "Las señales de un problema de hardware suelen ser físicas, como ruidos extraños, el dispositivo que no enciende, o una pantalla que no muestra imagen. Un problema de software suele manifestarse con errores del sistema operativo o el mal funcionamiento de un programa.",
        expanded: false,
      },
      {
        label: "¿Es mejor reparar o reemplazar mi dispositivo?",
        desc: "Esto depende de la edad del dispositivo y la gravedad del problema. Un técnico de nuestro equipo le proporcionará un diagnóstico y un presupuesto claro, ayudándole a decidir si la reparación es una opción más rentable que el reemplazo.",
        expanded: false,
      },
      {
        label: "¿Cuánto tiempo tarda una reparación de hardware?",
        desc: "El tiempo de reparación varía según la complejidad del problema y la disponibilidad de las piezas. Le proporcionaremos una estimación de tiempo clara y le mantendremos informado durante todo el proceso.",
        expanded: false,
      },
      {
        label: "¿Pueden recuperar datos de un disco duro dañado?",
        desc: "Contamos con herramientas y técnicas especializadas para intentar la recuperación de datos de discos duros que han fallado, incluso en casos donde el sistema ya no lo detecta.",
        expanded: false,
      },
      {
        label: "¿Ofrecen garantía sobre sus reparaciones?",
        desc: "Todas nuestras reparaciones y los componentes que reemplazamos están respaldados por una garantía para darle total tranquilidad sobre la calidad de nuestro servicio.",
        expanded: false,
      },
      {
        label: "¿Cuál es el costo de una reparación de hardware?",
        desc: "El costo varía según el problema y los componentes necesarios. Después de realizar un diagnóstico, le proporcionaremos un presupuesto sin compromiso antes de comenzar cualquier trabajo.",
        expanded: false,
      },
      {
        label: "¿Dan soporte a todas las marcas de hardware?",
        desc: "Nuestro equipo tiene experiencia trabajando con la mayoría de las marcas principales, incluyendo Dell, HP, Apple, Lenovo, Acer, Asus, entre muchas otras.",
        expanded: false,
      },
      {
        label: "¿Cómo puedo preparar mi dispositivo para una reparación?",
        desc: "Si es posible, se recomienda hacer una copia de seguridad de sus datos antes de llevarlo. Si esto no es posible, infórmenos y tomaremos las precauciones necesarias para proteger su información durante el proceso.",
        expanded: false,
      },
      {
        label: "¿También ofrecen soporte remoto para hardware?",
        desc: "El diagnóstico de un problema de hardware a menudo se puede hacer de forma remota. Sin embargo, la reparación física de un componente requiere la intervención de un técnico. Ofrecemos una combinación de soporte remoto y en sitio para un servicio completo.",
        expanded: false,
      },
    ],
  },
  {
    slug: "soporte-de-dominio-de-alojamiento-web",
    title: "Presencia en línea ininterrumpida",
    subtitle: "Garantice una Presencia Online Sin Fallos con ITSupport.net.in",
    subtitle1: `Su sitio web y su dominio son la tarjeta de presentación de su negocio en el mundo digital. Un sitio web que no funciona, un correo electrónico que no se envía o una caída inesperada del servidor pueden dañar su reputación, perder clientes y paralizar sus operaciones. En ITSupport.net.in, entendemos que una presencia online fiable y segura es fundamental para el éxito de su empresa.`,
    heroImage:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline:
        "Navegando por el panorama del hosting: desafíos comunes que resolvemos con experiencia",
      subheadline: "",
      description:
        "Con una sólida experiencia de más de 20 años en el sector de TI, nos hemos consolidado como un líder en Soporte de Alojamiento Web y Dominio, proporcionando soluciones expertas y personalizadas. Hemos asistido a más de 10,000 clientes satisfechos a nivel mundial a construir y mantener una presencia online impecable, garantizando que sus servicios digitales funcionen sin interrupciones. Nuestra misión es simple: encargarnos de los detalles técnicos para que usted pueda centrarse en el crecimiento de su negocio.",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Why Choose Our Hosting & Domain Support?",
      services: [
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
              <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path>
              <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
          ),
          title: "Domain Management",
          description: "Purchase, transfer, and configure domains with ease.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
              <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
              <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
            </svg>
          ),
          title: "Seamless Migration",
          description:
            "Smooth website and email migration with minimal downtime.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M12 9v1.258"></path>
              <path d="M16 3v5.46"></path>
              <path d="M21 9.118V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5.75"></path>
              <path d="M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z"></path>
              <path d="M3 15h7"></path>
              <path d="M3 9h12.142"></path>
              <path d="M8 15v6"></path>
              <path d="M8 3v6"></path>
            </svg>
          ),
          title: "SSL & Security",
          description:
            "SSL certificate setup and proactive security monitoring.",
        },
      ],
    },
    issuecategory: {
      title: "Los Retos de la Gestión Web, Resueltos por Expertos",
      subTitle:
        "La gestión de un sitio web, un dominio y un correo electrónico puede ser un desafío. Los problemas de DNS, los fallos del servidor, las renovaciones de dominios olvidadas y las vulnerabilidades de seguridad son comunes y pueden tener graves consecuencias. Nuestro servicio permite delegar estas tareas en profesionales, garantizando una operación fluida y una seguridad sólida.",
      issueCategories: [
        {
          title: "Problemas de Alojamiento y Dominio Comunes que Resolvemos",
          description: "",
          issues: [
            {
              title: "Problemas Principales",
              type: "list",
              options: [
                {
                  title: "Caídas del Sitio Web:",
                  desc: "Su sitio web no está disponible o carga lentamente, afectando la experiencia del usuario y las ventas.",
                },
                {
                  title: "Problemas de Correo Electrónico:",
                  desc: "Errores de envío o recepción de correos, o configuraciones de servidor incorrectas.",
                },
                {
                  title: "Dominio Vencido:",
                  desc: "La caducidad del dominio puede resultar en la pérdida de su dirección web y el cierre de su sitio.",
                },
                {
                  title: "Vulnerabilidades de Seguridad:",
                  desc: "Su sitio es vulnerable a ataques de hackers o malware, comprometiendo sus datos y los de sus clientes.",
                },
                {
                  title: "Migración de Sitio Web:",
                  desc: "Dificultades para transferir su sitio web a un nuevo servidor sin perder datos ni sufrir tiempo de inactividad.",
                },
              ],
            },
          ],
        },
        {
          title:
            "Nuestro Proceso de Soporte Web: Eficiencia y Experiencia a su Servicio",
          description:
            "Seguimos un proceso riguroso para asegurar la máxima eficiencia y seguridad de su presencia online:",
          issues: [
            {
              title: "Etapas del Proceso",
              type: "list",
              options: [
                {
                  title: "Auditoría Inicial:",
                  desc: "Realizamos un análisis completo de su dominio, hosting y configuración de correo electrónico para identificar problemas y oportunidades de mejora.",
                },
                {
                  title: "Configuración e Implementación:",
                  desc: "Diseñamos e implementamos una estrategia de alojamiento web y dominio que se adapte a las necesidades de su negocio.",
                },
                {
                  title: "Monitoreo Constante:",
                  desc: "Supervisamos su sitio web y servidor de forma proactiva para detectar cualquier fallo o vulnerabilidad antes de que afecte sus operaciones.",
                },
                {
                  title: "Soporte Técnico 24/7:",
                  desc: "Nuestro equipo de expertos está disponible en todo momento para resolver cualquier problema técnico, desde el más sencillo hasta el más complejo.",
                },
              ],
            },
          ],
        },
      ],
    },
    issuecategory2: {
      title:
        "Servicios de Alojamiento y Dominio a Medida para una Presencia Online Impecable",
      subTitle:
        "En ITSupport.net.in, ofrecemos un espectro completo de servicios para gestionar todos los aspectos técnicos de su presencia online.",
      issueCategories: [
        {
          title: "Registro y Gestión de Dominio",
          description:
            "Nos encargamos del registro de su dominio y de su gestión continua. Nos aseguramos de que su dominio esté siempre activo y configurado correctamente, incluyendo la gestión de DNS y la renovación automática para evitar interrupciones.",
        },
        {
          title: "Configuración y Migración de Alojamiento Web",
          description:
            "Ya sea que necesite configurar un nuevo sitio web o migrar uno existente, nuestro equipo de expertos se encarga de todo. Nos aseguramos de que su sitio se configure en un servidor fiable, optimizado para el rendimiento y con un tiempo de inactividad mínimo durante la migración.",
        },
        {
          title:
            "Alojamiento y Configuración de Correo Electrónico Profesional",
          description:
            "Ofrecemos servicios de alojamiento de correo electrónico para su dominio. Nos encargamos de la configuración de las cuentas, la gestión de alias y los problemas de envío y recepción, garantizando que su comunicación sea profesional y segura.",
        },
        {
          title: "Seguridad Web y Certificados SSL",
          description:
            "La seguridad es fundamental para la confianza online. Implementamos las mejores prácticas de seguridad, incluyendo la instalación y gestión de certificados SSL para encriptar la conexión, y la configuración de firewalls para proteger su sitio de ataques maliciosos.",
        },
        {
          title:
            "ITSupport.net.in: 20 Años de Experiencia, 10,000 Clientes Satisfechos",
          description:
            "Nuestra longevidad en el mercado es un testimonio de nuestra fiabilidad y experiencia. Durante dos décadas, hemos resuelto innumerables problemas de alojamiento y dominio, y hemos ayudado a empresas de todos los tamaños a establecer una presencia online exitosa. La confianza de más de 10,000 clientes satisfechos a nivel mundial demuestra nuestro compromiso con la excelencia. Con ITSupport.net.in, usted no solo contrata un servicio, sino que obtiene un socio tecnológico que se asegura de que su presencia online sea siempre impecable.",
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
    whyChoose: {
      title:
        "Warum Sie mit ITSupport.net.in für erfolgreiches Webhosting zusammenarbeiten sollten?",
      desc: "Wenn Sie ITSupport.net.in als Ihren Webhosting-Support-Partner wählen, profitieren Sie von über einem Jahrzehnt spezialisierter Expertise und einer globalen Erfolgsbilanz, die 1.000+ zufriedene Kunden umfasst. Unser Engagement für Ihren Online-Erfolg basiert auf:",
      whyChoosecategories: [
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title: "Plattformunabhängige Expertise",
          desc: "Kompetent über alle gängigen Webhosting-Anbieter und -Technologien hinweg.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          ),
          title: "24/7 Proaktive Überwachung",
          desc: "Wir erkennen und beheben Hosting-Probleme oft, bevor sie Ihre Website beeinträchtigen.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H7a3 3 0 00-3 3v8a3 3 0 003 3z"
              ></path>
            </svg>
          ),
          title: "Fokus auf Geschwindigkeit & Verfügbarkeit",
          desc: "Unser Hauptziel ist es, sicherzustellen, dass Ihre Website stets schnell und verfügbar ist.",
        },
        {
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-11V7a4 4 0 00-8 0v3"
              ></path>
            </svg>
          ),
          title: "Verbesserte Sicherheit",
          desc: "Robuste Maßnahmen zum Schutz Ihrer Website vor Malware, Hacks und Datenlecks.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              ></path>
            </svg>
          ),
          title: "Nahtlose Migrationen & Backups",
          desc: "Sicherstellung der Datensicherheit und reibungsloser Übergänge.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title: "Engagierte & zertifizierte Hosting-Spezialisten",
          desc: "Ein Team, das sich voll und ganz für Ihre Online-Präsenz und Ihr Wachstum einsetzt.",
        },
      ],
    },
    faqs: [
      {
        label: "¿Cuál es la diferencia entre un dominio y un alojamiento web?",
        desc: "Un dominio es la dirección de su sitio web (por ejemplo, https://www.google.com/search?q=google.com). El alojamiento web es el espacio en un servidor donde se almacenan los archivos de su sitio web, haciendo que esté accesible en Internet.",
        expanded: true,
      },
      {
        label: "¿Pueden ayudarme a elegir un nombre de dominio?",
        desc: "Sí, podemos asesorarle sobre la selección de un nombre de dominio que sea relevante para su negocio, fácil de recordar y que esté disponible para su registro.",
        expanded: false,
      },
      {
        label: "¿Pueden ayudarme a migrar mi sitio web a un nuevo host?",
        desc: "Sí, nos encargamos de todo el proceso de migración, transfiriendo los archivos de su sitio web y la base de datos de forma segura, con un tiempo de inactividad mínimo.",
        expanded: false,
      },
      {
        label: "¿Qué es un certificado SSL y por qué lo necesito?",
        desc: "Un certificado SSL encripta la conexión entre su sitio web y los visitantes, protegiendo los datos que se transmiten. Es crucial para la seguridad y la confianza, y es un factor importante para el posicionamiento en buscadores.",
        expanded: false,
      },
      {
        label: "¿Qué hago si mi sitio web se cae?",
        desc: "Contáctenos de inmediato. Con nuestro servicio de monitoreo 24/7, a menudo podemos detectar y solucionar el problema antes de que usted lo note. Actuaremos de forma rápida para restaurar el servicio.",
        expanded: false,
      },
      {
        label:
          "¿Ofrecen soporte para el correo electrónico profesional de mi dominio?",
        desc: "Sí, ofrecemos soporte completo para la configuración y gestión de cuentas de correo electrónico con su dominio, incluyendo la resolución de problemas de envío, recepción y configuración de clientes de correo.",
        expanded: false,
      },
      {
        label:
          "¿Con qué frecuencia se debe hacer una copia de seguridad de un sitio web?",
        desc: "La frecuencia ideal depende de la frecuencia con la que se actualiza su sitio. Para un sitio de e-commerce, se recomienda una copia de seguridad diaria para no perder datos de transacciones.",
        expanded: false,
      },
      {
        label: "¿Cómo protegen mi sitio web de ciberataques?",
        desc: "Protegemos su sitio implementando firewalls, gestionando certificados SSL, escaneando en busca de malware y aplicando parches de seguridad para las vulnerabilidades del sistema.",
        expanded: false,
      },
      {
        label: "¿Qué es un DNS y por qué es importante?",
        desc: "El DNS (Domain Name System) es el sistema que traduce los nombres de dominio a direcciones IP. Es fundamental para que los usuarios puedan encontrar su sitio web. Nosotros nos encargamos de su configuración y gestión para evitar fallos.",
        expanded: false,
      },
      {
        label: "¿También gestionan las renovaciones de dominio y hosting?",
        desc: "Sí, como parte de nuestro servicio, nos encargamos de monitorear y gestionar las renovaciones de su dominio y hosting, asegurándonos de que su presencia online se mantenga activa y sin interrupciones.",
        expanded: false,
      },
    ],
  },
  {
    slug: "soporte-para-la-configuración-de-correo-electrónico",
    title: "Presencia en línea ininterrumpida",
    subtitle: "Garantice una Presencia Online Sin Fallos con ITSupport.net.in",
    subtitle1: `Su sitio web y su dominio son la tarjeta de presentación de su negocio en el mundo digital. Un sitio web que no funciona, un correo electrónico que no se envía o una caída inesperada del servidor pueden dañar su reputación, perder clientes y paralizar sus operaciones. En ITSupport.net.in, entendemos que una presencia online fiable y segura es fundamental para el éxito de su empresa.`,
    heroImage:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline:
        "Navegando por el panorama del hosting: desafíos comunes que resolvemos con experiencia",
      subheadline: "",
      description:
        "Con una sólida experiencia de más de 20 años en el sector de TI, nos hemos consolidado como un líder en Soporte de Alojamiento Web y Dominio, proporcionando soluciones expertas y personalizadas. Hemos asistido a más de 10,000 clientes satisfechos a nivel mundial a construir y mantener una presencia online impecable, garantizando que sus servicios digitales funcionen sin interrupciones. Nuestra misión es simple: encargarnos de los detalles técnicos para que usted pueda centrarse en el crecimiento de su negocio.",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Why Choose Our Hosting & Domain Support?",
      services: [
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
              <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path>
              <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
          ),
          title: "Domain Management",
          description: "Purchase, transfer, and configure domains with ease.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
              <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
              <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
            </svg>
          ),
          title: "Seamless Migration",
          description:
            "Smooth website and email migration with minimal downtime.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M12 9v1.258"></path>
              <path d="M16 3v5.46"></path>
              <path d="M21 9.118V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5.75"></path>
              <path d="M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z"></path>
              <path d="M3 15h7"></path>
              <path d="M3 9h12.142"></path>
              <path d="M8 15v6"></path>
              <path d="M8 3v6"></path>
            </svg>
          ),
          title: "SSL & Security",
          description:
            "SSL certificate setup and proactive security monitoring.",
        },
      ],
    },
    issuecategory: {
      title: "Deje de Luchar con la Configuración de Correo Electrónico",
      subTitle:
        "La configuración de correo puede ser frustrante, afectando la productividad personal y las operaciones del negocio. Desde problemas de acceso básicos hasta amenazas complejas de entregabilidad y seguridad, nuestro equipo de especialistas en correo electrónico está capacitado para diagnosticar, solucionar y resolver una amplia gama de problemas relacionados con el correo.",
      issueCategories: [
        {
          title: "Conectividad y Acceso",
          description:
            "Garantizando que siempre esté conectado a sus servicios de correo.",
          issues: [
            {
              title: "Garantizando que siempre esté conectado",
              type: "list",
              options: [
                {
                  title: "Rendimiento Lento",
                  desc: "Tiempos de carga prolongados que frustran a los clientes y aumentan la tasa de rebote.",
                },
                {
                  title: "Fallos de Pago",
                  desc: "Errores en la pasarela de pago que impiden a los clientes completar sus compras.",
                },
                {
                  title: "Problemas de Seguridad",
                  desc: "Vulnerabilidades que pueden exponer los datos de los clientes y dañar la reputación de la marca.",
                },
                {
                  title: "Funcionalidad Rota",
                  desc: "Carritos de compra, filtros de productos o enlaces que no funcionan correctamente.",
                },
                {
                  title: "Gestión de la Plataforma",
                  desc: "Dificultades para configurar nuevos productos, plugins o actualizaciones.",
                },
              ],
            },
          ],
        },
      ],
    },
    issuecategory2: {
      title:
        "Servicios de Soporte de Correo Electrónico a Medida para una Comunicación Impecable",
      subTitle:
        "En ITSupport.net.in, ofrecemos un espectro completo de servicios para gestionar todos los aspectos técnicos de su correo electrónico.",
      issueCategories: [
        {
          title: "Configuración de Clientes de Correo",
          description:
            "Nos encargamos de la configuración de su correo electrónico en todos los clientes de correo populares, como Microsoft Outlook, Gmail, Apple Mail, Thunderbird, y otros. Nos aseguramos de que su correo esté configurado correctamente para que funcione sin problemas en su ordenador, teléfono o tablet.",
        },
        {
          title: "Migración de Correos Electrónicos",
          description:
            "Si necesita cambiar de proveedor de correo o de servicio, nuestro equipo de expertos se encarga de la migración completa de sus correos electrónicos, carpetas y contactos, garantizando que no se pierda ninguna información valiosa durante la transición.",
        },
        {
          title: "Gestión de la Seguridad y el Spam",
          description:
            "Configuramos las mejores medidas de seguridad para su correo electrónico. Esto incluye la activación de filtros de spam avanzados para mantener su bandeja de entrada limpia, así como la configuración de protocolos de seguridad para proteger su cuenta de accesos no autorizados.",
        },
        {
          title: "Soporte para Dispositivos Móviles",
          description:
            "Ofrecemos asistencia completa para configurar su correo electrónico en dispositivos móviles, tanto iOS como Android. Nos aseguramos de que pueda acceder a su correo, calendarios y contactos desde cualquier lugar y en cualquier momento, de forma segura.",
        },
        {
          title:
            "ITSupport.net.in: 20 Años de Experiencia, 10,000 Clientes Satisfechos",
          description:
            "Nuestra longevidad en el mercado es un testimonio de nuestra fiabilidad y experiencia. Durante dos décadas, hemos resuelto innumerables problemas de correo electrónico y hemos ayudado a empresas de todos los tamaños a mantener una comunicación fluida y profesional. La confianza de más de 10,000 clientes satisfechos a nivel mundial demuestra nuestro compromiso con la excelencia. Con ITSupport.net.in, usted no solo contrata un servicio, sino que obtiene un socio tecnológico que se asegura de que su correo electrónico funcione a la perfección.",
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
    whyChoose: {
      title:
        "Por qué asociarse con ITSupport.net.in para la excelencia en el correo electrónico",
      desc: "Elegir a ITSupport.net.in como su socio de soporte de correo electrónico significa aprovechar más de una década de experiencia especializada y una trayectoria global de empoderar a más de 100,000 clientes satisfechos. Nuestro compromiso con su comunicación ininterrumpida se basa en",
      whyChoosecategories: [
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title: "Experiencia integral y agnóstica de la plataforma",
          desc: "Dominio de todas las principales plataformas de correo electrónico personal, empresarial y de marketing.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          ),
          title: "Monitoreo proactivo 24/7 y respuesta rápida",
          desc: "Detectamos y resolvemos los problemas de correo electrónico antes de que interrumpan su flujo de trabajo.",
        },
        {
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-11V7a4 4 0 00-8 0v3"
              ></path>
            </svg>
          ),
          title: "Seguridad y privacidad mejoradas",
          desc: "Medidas sólidas para proteger sus bandejas de entrada de amenazas y garantizar la confidencialidad de los datos.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              ></path>
            </svg>
          ),
          title: "Optimización de la capacidad de entrega",
          desc: "Estrategias y solución de problemas para garantizar que sus correos electrónicos lleguen a sus destinatarios previstos.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              ></path>
            </svg>
          ),
          title: "Migraciones e integraciones sin problemas",
          desc: "Manejo experto de las transferencias de datos de correo electrónico e integración con sus herramientas comerciales esenciales.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title: "Especialistas en correo electrónico dedicados y certificados",
          desc: "Un equipo verdaderamente comprometido con su comunicación eficiente y segura.",
        },
      ],
    },
    faqs: [
      {
        label: "¿Cuál es la diferencia entre los protocolos IMAP y POP3?",
        desc: "IMAP (Internet Message Access Protocol) le permite acceder a sus correos desde múltiples dispositivos, ya que los mensajes se sincronizan con el servidor. POP3 (Post Office Protocol 3) descarga los correos al dispositivo local y los elimina del servidor, siendo ideal para un único dispositivo.",
        expanded: true,
      },
      {
        label: "¿Por qué mis correos no se envían o no los recibo?",
        desc: "Esto puede deberse a una variedad de razones, como una configuración de servidor incorrecta, problemas con su conexión a Internet o un filtro de spam que bloquea los correos. Nuestro equipo puede diagnosticar la causa y solucionarlo rápidamente.",
        expanded: false,
      },
      {
        label:
          "¿Pueden ayudarme a configurar mi correo en mi teléfono o tablet?",
        desc: "Sí, ofrecemos soporte completo para configurar su correo electrónico en dispositivos móviles, ya sean iOS (iPhone, iPad) o Android, asegurando una sincronización perfecta de correos, calendarios y contactos.",
        expanded: false,
      },
      {
        label: "¿Cómo puedo detener los correos no deseados (spam)?",
        desc: "Podemos configurar filtros de spam avanzados en su servidor de correo y cliente para bloquear los correos no deseados. También le asesoraremos sobre las mejores prácticas para evitar el spam.",
        expanded: false,
      },
      {
        label: "¿Qué hago si creo que mi cuenta de correo ha sido hackeada?",
        desc: "Si sospecha que su cuenta ha sido comprometida, el primer paso es cambiar su contraseña inmediatamente. Luego, contáctenos para que podamos revisar los registros de acceso, asegurar la cuenta y verificar si se ha enviado algún correo malicioso.",
        expanded: false,
      },
      {
        label: "¿Pueden migrar mis correos antiguos a un nuevo proveedor?",
        desc: "Sí, ofrecemos servicios de migración de correo electrónico para transferir de forma segura todos sus correos, carpetas y contactos de un proveedor a otro sin perder información.",
        expanded: false,
      },
      {
        label:
          "¿Cuál es la mejor manera de configurar el correo para un nuevo dominio?",
        desc: "Le guiaremos a través del proceso completo, desde la configuración de los registros DNS necesarios hasta la creación de las cuentas de correo electrónico y su configuración en los dispositivos de su equipo.",
        expanded: false,
      },
      {
        label: "¿Qué clientes de correo soportan?",
        desc: "Damos soporte a la mayoría de los clientes de correo populares, como Outlook, Gmail, Apple Mail, Thunderbird y la configuración de correo web.",
        expanded: false,
      },
      {
        label: "¿Por qué recibo un error al enviar correos?",
        desc: "Esto puede deberse a un problema de autenticación, una configuración de servidor SMTP incorrecta o a que su IP está en una lista de bloqueo. Realizaremos un diagnóstico completo para identificar la causa y restaurar el servicio.",
        expanded: false,
      },
      {
        label:
          "¿También ofrecen servicios de alojamiento de correo electrónico?",
        desc: "Sí, ofrecemos servicios de alojamiento de correo electrónico para su dominio. Nos encargamos de la gestión completa del servicio, incluyendo la creación de cuentas, la seguridad y el soporte.",
        expanded: false,
      },
    ],
  },
  {
    slug: "soporte-de-red-wifi",
    title: "Conectividad perfecta y velocidad inigualable",
    subtitle:
      "Conexión Inalámbrica Sin Fallos: Su Solución de Soporte Wi-Fi con ITSupport.net.in",
    subtitle1: `En el mundo actual, la conectividad inalámbrica es una necesidad fundamental, tanto en el hogar como en la oficina. Una señal débil, una conexión lenta o los puntos muertos pueden ser una fuente de frustración constante, interrumpiendo videoconferencias, descargas importantes y la productividad diaria. En ITSupport.net.in, entendemos que una red Wi-Fi fiable no es un lujo, sino un pilar esencial para la eficiencia y la comunicación.`,
    heroImage:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline:
        "Su mundo inalámbrico, nuestra experiencia: más de una década de excelencia global para más de 20.000 clientes",
      subheadline: "",
      description:
        "Con una sólida experiencia de más de 20 años en el sector de TI, nos hemos consolidado como líderes en Servicios de Soporte de Red Wi-Fi, proporcionando soluciones expertas y personalizadas. Hemos asistido a más de 10,000 clientes satisfechos a nivel mundial a construir y mantener redes Wi-Fi rápidas, estables y seguras. Nuestra misión es simple: encargarnos de los desafíos técnicos para que usted pueda disfrutar de una conectividad fluida en cada rincón de su espacio.",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Why Choose Our Wi-Fi Support?",
      services: [
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <rect width="20" height="8" x="2" y="14" rx="2"></rect>
              <path d="M6.01 18H6"></path>
              <path d="M10.01 18H10"></path>
              <path d="M15 10v4"></path>
              <path d="M17.84 7.17a4 4 0 0 0-5.66 0"></path>
              <path d="M20.66 4.34a8 8 0 0 0-11.31 0"></path>
            </svg>
          ),
          title: "Router Setup & Optimization",
          description:
            "Professional installation and configuration for maximum coverage.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9"></path>
              <path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"></path>
              <circle cx="12" cy="9" r="2"></circle>
              <path d="M16.2 4.8c2 2 2.26 5.11.8 7.47"></path>
              <path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1"></path>
              <path d="M9.5 18h5"></path>
              <path d="m8 22 4-11 4 11"></path>
            </svg>
          ),
          title: "Signal Boosting",
          description: "Range extension and dead zone elimination.",
        },
        {
          icon: (
            <svg
              data-v-15b35c9e=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
            >
              <path d="M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13"></path>
              <path d="M2 12h8.5"></path>
              <path d="M20 6V4a2 2 0 1 0-4 0v2"></path>
              <rect width="8" height="5" x="14" y="6" rx="1"></rect>
            </svg>
          ),
          title: "Secure Network",
          description: "Encrypted Wi-Fi and strong password setup.",
        },
      ],
    },
    issuecategory: {
      title: "Deje de Luchar con los Puntos Muertos y la Baja Velocidad",
      subTitle:
        "Los problemas de Wi-Fi pueden afectar la productividad y la experiencia de usuario. Desde señal débil hasta desconexiones frecuentes, nuestro equipo de especialistas diagnostica, optimiza y asegura su red Wi-Fi para un rendimiento óptimo.",
      issueCategories: [
        {
          title: "Problemas Comunes de Red Wi-Fi",
          description: "",
          issues: [
            {
              title: "Problemas Comunes",
              type: "list",
              options: [
                {
                  title: "Señal Débil o Inestable",
                  desc: "La señal es fuerte cerca del router, pero se debilita en otras áreas.",
                },
                {
                  title: "Velocidad Lenta",
                  desc: "El Internet es lento incluso cuando la conexión es fuerte.",
                },
                {
                  title: "Desconexiones Frecuentes",
                  desc: "Los dispositivos se desconectan constantemente de la red Wi-Fi.",
                },
                {
                  title: "Problemas de Configuración",
                  desc: "Dificultad para configurar un nuevo router o conectar nuevos dispositivos.",
                },
                {
                  title: "Vulnerabilidades de Seguridad",
                  desc: "La red Wi-Fi no está protegida con una contraseña segura, exponiendo sus datos.",
                },
              ],
            },
          ],
        },
      ],
    },
    issuecategory2: {
      title:
        "Servicios de Soporte Wi-Fi a Medida para una Conectividad Impecable",
      subTitle:
        "En ITSupport.net.in, ofrecemos un espectro completo de servicios para gestionar y optimizar su red Wi-Fi.",
      issueCategories: [
        {
          title: "Configuración e Instalación de Redes Wi-Fi",
          description:
            "Nos encargamos de la instalación y configuración completa de su router y de otros equipos de red. Optimizamos los canales y la configuración para minimizar las interferencias, y nos aseguramos de que su red esté protegida con la última tecnología de encriptación.",
        },
        {
          title: "Eliminación de Puntos Muertos y Extensión de Cobertura",
          description:
            "Si tiene áreas de su casa u oficina donde la señal es débil, instalamos y configuramos extensores de rango, puntos de acceso o sistemas de malla (mesh systems) para garantizar una cobertura Wi-Fi completa y estable en cada rincón.",
        },
        {
          title: "Seguridad de Redes Inalámbricas",
          description:
            "La seguridad es fundamental para su red Wi-Fi. Implementamos contraseñas seguras, cifrado WPA2/WPA3 y redes de invitados separadas para proteger su red principal.",
        },
        {
          title: "Solución de Problemas y Diagnóstico",
          description:
            "Si su red Wi-Fi es lenta o se desconecta con frecuencia, utilizamos herramientas de diagnóstico avanzadas para identificar la causa raíz del problema y aplicar una solución duradera de forma remota o en sitio.",
        },
        {
          title:
            "ITSupport.net.in: 20 Años de Experiencia, 10,000 Clientes Satisfechos",
          description:
            "Nuestra longevidad en el mercado es un testimonio de nuestra fiabilidad y experiencia. Durante dos décadas, hemos resuelto innumerables problemas de redes inalámbricas y hemos ayudado a empresas y particulares a disfrutar de una conectividad sin fallos. La confianza de más de 10,000 clientes satisfechos a nivel mundial demuestra nuestro compromiso con la excelencia. Con ITSupport.net.in, usted no solo contrata un servicio, sino que obtiene un socio tecnológico que se asegura de que su red Wi-Fi sea siempre rápida, segura y fiable.",
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
    whyChoose: {
      title:
        "Warum Sie mit ITSupport.net.in für makelloses WLAN zusammenarbeiten sollten?",
      desc: "Wenn Sie ITSupport.net.in als Ihren Wi-Fi-Support-Partner wählen, profitieren Sie von über einem Jahrzehnt spezialisierter Erfahrung und einer globalen Erfolgsbilanz, die 20.000+ zufriedene Kunden umfasst. Unser Engagement für Ihre unterbrechungsfreie drahtlose Konnektivität basiert auf:",
      whyChoosecategories: [
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title: "Markenübergreifende Expertise",
          desc: "Kompetent in der Diagnose, Fehlerbehebung und Optimierung von Wi-Fi-Lösungen für alle gängigen Router- und Netzwerkanbieter.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          ),
          title: "24/7 Proaktive Überwachung & Schnelle Reaktion",
          desc: "Wir erkennen und beheben Wi-Fi-Probleme oft, bevor sie Ihre Produktivität beeinträchtigen.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H7a3 3 0 00-3 3v8a3 3 0 003 3z"
              ></path>
            </svg>
          ),
          title: "Optimierung von Geschwindigkeit & Abdeckung",
          desc: "Unser Hauptziel ist es, Ihnen überall schnelles und zuverlässiges Wi-Fi zu gewährleisten.",
        },
        {
          svg: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-11V7a4 4 0 00-8 0v3"
              ></path>
            </svg>
          ),
          title: "Verbesserte Sicherheit",
          desc: "Implementierung robuster Maßnahmen zum Schutz Ihres drahtlosen Netzwerks vor unbefugtem Zugriff und Bedrohungen.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              ></path>
            </svg>
          ),
          title: "Nahtlose Einrichtung & Konfiguration",
          desc: "Wir gestalten die Einrichtung neuer Netzwerke oder Geräte einfach und unkompliziert.",
        },
        {
          svg: (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ),
          title: "Engagierte & zertifizierte Wi-Fi-Spezialisten",
          desc: "Ein Team, das sich voll und ganz für Ihr nahtloses drahtloses Erlebnis einsetzt.",
        },
      ],
    },
    faqs: [
      {
        label:
          "¿Por qué la señal de mi Wi-Fi es débil en algunas partes de mi casa?",
        desc: "Esto se debe a la distancia del router, los obstáculos físicos como paredes de concreto, y las interferencias de otros dispositivos electrónicos. Una auditoría de red puede identificar estos problemas y recomendar soluciones.",
        expanded: true,
      },
      {
        label: "¿Qué puedo hacer para mejorar la velocidad de mi Wi-Fi?",
        desc: "Puede mejorar la velocidad optimizando la ubicación de su router, cambiando a un canal menos congestionado, actualizando el firmware del router o actualizando su hardware a un modelo más nuevo.",
        expanded: false,
      },
      {
        label: "¿Cuál es la diferencia entre las bandas de 2.4 GHz y 5 GHz?",
        desc: "La banda de 2.4 GHz tiene un mayor alcance, pero ofrece velocidades más lentas y es más propensa a interferencias. La banda de 5 GHz ofrece velocidades más rápidas y menos interferencias, pero tiene un alcance más corto.",
        expanded: false,
      },
      {
        label: "¿Cómo puedo asegurar mi red Wi-Fi?",
        desc: "Para asegurar su red, debe usar una contraseña fuerte, activar el cifrado WPA2/WPA3, cambiar el nombre de usuario y contraseña predeterminados del router y crear una red de invitados separada.",
        expanded: false,
      },
      {
        label: "¿Qué es un sistema de malla (mesh system) y lo necesito?",
        desc: "Un sistema de malla utiliza varios dispositivos para crear una red Wi-Fi unificada en toda su casa u oficina, eliminando los puntos muertos y garantizando una señal fuerte en todas las áreas. Es ideal para espacios grandes o con múltiples plantas.",
        expanded: false,
      },
      {
        label: "¿Pueden ayudarme a configurar una red Wi-Fi para invitados?",
        desc: "Sí, podemos configurar una red Wi-Fi separada y segura para sus invitados, lo que les permite acceder a Internet sin comprometer la seguridad de su red principal.",
        expanded: false,
      },
      {
        label: "¿Por qué mi Wi-Fi se desconecta con tanta frecuencia?",
        desc: "Las desconexiones pueden ser causadas por interferencias, un router sobrecargado, un firmware obsoleto o problemas con el proveedor de Internet. Nuestro equipo puede diagnosticar la causa y solucionar el problema.",
        expanded: false,
      },
      {
        label: "¿Dan soporte a todas las marcas de routers?",
        desc: "Sí, nuestros técnicos tienen experiencia con una amplia gama de marcas de routers y equipos de red, incluyendo TP-Link, Netgear, Linksys, D-Link, y muchas otras.",
        expanded: false,
      },
      {
        label:
          "¿Cómo puedo saber si hay vulnerabilidades de seguridad en mi red Wi-Fi?",
        desc: "Las señales pueden ser el acceso no autorizado a su red, la pérdida de velocidad sin motivo aparente o la aparición de dispositivos desconocidos en la lista de equipos conectados. Podemos realizar una auditoría de seguridad para detectar estos problemas.",
        expanded: false,
      },
      {
        label:
          "¿También pueden ayudarme con la configuración de un nuevo router?",
        desc: "Sí, ofrecemos un servicio completo para la configuración de su nuevo router, incluyendo la conexión al módem, la configuración de la red Wi-Fi y la implementación de medidas de seguridad iniciales.",
        expanded: false,
      },
    ],
  },
];
