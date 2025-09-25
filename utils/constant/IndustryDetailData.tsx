import {
  SvgBolt,
  SvgBriefcase,
  SvgCheckCircle,
  SvgClipboard,
  SvgLock,
} from "@/app/services/_component/ServiceWhyChooseConstant";
import { Service } from "./serviceDetailData";

export const industryDetailData: Service[] = [
  {
    slug: "healthcare",
    title: "Healthcare IT Support Services",
    subtitle:
      "Global healthcare IT support powering patient care with secure and efficient technology",
    subtitle1:
      "For over two decades, ITSupport.net.in has been delivering reliable, secure, and innovative IT support services for the healthcare industry across 50+ countries. With 1 million+ service cases handled and 20,000+ satisfied customers, we understand the critical nature of healthcare IT systems — where downtime can directly impact patient care, compliance, and operational efficiency.",
    heroImage:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    intro: {
      headline: "Two Decades of Proven Healthcare IT Expertise",
      subheadline: "",
      description:
        "Our specialized healthcare IT solutions are designed to support hospitals, clinics, diagnostic centers, pharmacies, telemedicine platforms, and healthcare startups, ensuring uninterrupted care delivery while maintaining strict HIPAA and GDPR compliance.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    },
    serviceHighlights: {
      title: "Why Healthcare Needs Specialized IT Support",
      subTitle:
        "The healthcare sector deals with life-critical data, complex workflows, and stringent regulatory requirements. Generic IT solutions often fail to meet these specialized needs. Healthcare IT support requires:",
      services: [
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
              aria-hidden="true"
              data-id="element-247"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path>
            </svg>
          ),
          title: "Data Security & Compliance",
          description:
            "Protecting sensitive patient health records from cyber threats.",
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
              aria-hidden="true"
              data-id="element-240"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
            </svg>
          ),
          title: "High Availability",
          description:
            "Ensuring systems and networks run 24/7 without downtime.",
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
              aria-hidden="true"
              data-id="element-243"
            >
              <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
              <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
              <line x1="6" x2="6.01" y1="6" y2="6"></line>
              <line x1="6" x2="6.01" y1="18" y2="18"></line>
            </svg>
          ),
          title: "Integration",
          description:
            "Connecting EHR/EMR systems, lab equipment, and third-party apps seamlessly.",
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
              aria-hidden="true"
              data-id="element-244"
            >
              <line x1="22" x2="2" y1="12" y2="12"></line>
              <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
              <line x1="6" x2="6.01" y1="16" y2="16"></line>
              <line x1="10" x2="10.01" y1="16" y2="16"></line>
            </svg>
          ),
          title: "Scalability",
          description:
            "Supporting growing patient volumes and expanding healthcare facilities.",
        },
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline mr-2 text-gray-500"
              aria-hidden="true"
              data-id="element-239"
            >
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
              <path d="M3 12A9 3 0 0 0 21 12"></path>
            </svg>
          ),
          title: "Disaster Recovery",
          description:
            "Minimizing data loss and downtime during technical failures or cyberattacks.",
        },
      ],
    },
    issuecategory: {
      title: "Our Finance & Banking IT Services in Detail",
      subTitle: "",
      issueCategories: [
        {
          title:
            "Electronic Medical Records (EMR) & Electronic Health Records (EHR) Support",
          description:
            "We manage, configure, and maintain EMR/EHR systems such as Epic, Cerner, Allscripts, and Meditech. Our services include:",
          issues: [
            {
              title: "",
              type: "list",
              options: [
                { title: "Installation & configuration", desc: "" },
                { title: "Data migration from legacy systems", desc: "" },
                { title: "Real-time performance monitoring", desc: "" },
                { title: "User training for healthcare staff", desc: "" },
                {
                  title: "Integration with lab equipment and pharmacy systems",
                  desc: "",
                },
              ],
            },
          ],
        },
        {
          title: "HIPAA & GDPR Compliance Management",
          description:
            "We ensure your healthcare facility meets all regulatory requirements for patient data protection. Services include:",
          issues: [
            {
              title: "",
              type: "list",
              options: [
                { title: "Security risk assessments", desc: "" },
                { title: "Data encryption (at rest & in transit)", desc: "" },
                { title: "Access control & audit logging", desc: "" },
                { title: "Regular compliance audits", desc: "" },
                { title: "Staff compliance training", desc: "" },
              ],
            },
          ],
        },
        {
          title: "Telemedicine & Remote Patient Monitoring Support",
          description: "As telehealth grows, we provide robust IT support for:",
          issues: [
            {
              title: "",
              type: "list",
              options: [
                {
                  title:
                    "Video conferencing platforms for patient consultations",
                  desc: "",
                },
                { title: "Secure patient data exchange", desc: "" },
                {
                  title:
                    "Integration with wearable devices and remote monitoring tools",
                  desc: "",
                },
                {
                  title: "Cloud-based telemedicine software hosting",
                  desc: "",
                },
              ],
            },
          ],
        },
        {
          title: "Healthcare Cybersecurity Solutions",
          description:
            "We protect sensitive patient information from breaches, ransomware, and unauthorized access with:",
          issues: [
            {
              title: "",
              type: "list",
              options: [
                { title: "24/7 threat monitoring", desc: "" },
                { title: "Multi-factor authentication (MFA)", desc: "" },
                { title: "Firewalls & intrusion detection systems", desc: "" },
                { title: "Endpoint security for all devices", desc: "" },
                { title: "Incident response & recovery", desc: "" },
              ],
            },
          ],
        },
        {
          title: "Medical Device & Equipment Integration",
          description:
            "We connect medical devices such as imaging machines, diagnostic tools, and monitoring equipment to your network and EHR systems for:",
          issues: [
            {
              title: "",
              type: "list",
              options: [
                { title: "Real-time data sharing", desc: "" },
                { title: "Automated reporting", desc: "" },
                { title: "Improved diagnostic accuracy", desc: "" },
              ],
            },
          ],
        },
        {
          title: "Cloud Solutions for Healthcare",
          description:
            "We help healthcare providers transition to secure, compliant cloud platforms:",
          issues: [
            {
              title: "",
              type: "list",
              options: [
                { title: "Microsoft Azure for Healthcare", desc: "" },
                { title: "AWS HealthLake integration", desc: "" },
                { title: "Cloud backup & disaster recovery", desc: "" },
                { title: "Hybrid cloud solutions for data control", desc: "" },
              ],
            },
          ],
        },
        {
          title: "24/7 Remote & On-Site IT Support",
          description:
            "Our healthcare IT helpdesk is available round the clock to:",
          issues: [
            {
              title: "",
              type: "list",
              options: [
                { title: "Troubleshoot system issues in real-time", desc: "" },
                {
                  title: "Provide remote desktop support for doctors and staff",
                  desc: "",
                },
                { title: "Dispatch on-site engineers when needed", desc: "" },
              ],
            },
          ],
        },
        {
          title: "Data Backup & Disaster Recovery",
          description: "We protect your healthcare data with:",
          issues: [
            {
              title: "",
              type: "list",
              options: [
                { title: "Automated daily backups", desc: "" },
                {
                  title: "Redundant storage across multiple locations",
                  desc: "",
                },
                {
                  title: "Rapid recovery systems to minimize downtime",
                  desc: "",
                },
              ],
            },
          ],
        },
        {
          title: "Healthcare IT Infrastructure Management",
          description: "We handle the full lifecycle of your IT systems:",
          issues: [
            {
              title: "",
              type: "list",
              options: [
                { title: "Network setup & optimization", desc: "" },
                { title: "Server installation & management", desc: "" },
                { title: "Data center maintenance", desc: "" },
                {
                  title: "Hardware procurement & lifecycle management",
                  desc: "",
                },
              ],
            },
          ],
        },
      ],
    },
    whyChoose: {
      title: "Benefits of Choosing ITSupport.net.in for Healthcare IT Services",
      desc: "",
      whyChoosecategories: [
        {
          svg: <SvgCheckCircle />,
          title: "20+ Years of Healthcare IT Expertise",
          desc: "Decades of proven experience delivering innovative and reliable healthcare technology solutions.",
        },
        {
          svg: <SvgBolt />,
          title: "Global Presence Across 50+ Countries",
          desc: "A trusted partner for healthcare organizations worldwide, ensuring localized support and scalability.",
        },
        {
          svg: <SvgLock />,
          title: "Compliance with Global Healthcare Standards",
          desc: "Adherence to HIPAA, GDPR, and other international healthcare regulations for secure, compliant solutions.",
        },
        {
          svg: <SvgBriefcase />,
          title: "Certified Healthcare IT Professionals",
          desc: "Specialized experts with industry-recognized certifications to meet complex healthcare challenges.",
        },
        {
          svg: <SvgClipboard />,
          title: "Comprehensive End-to-End Solutions",
          desc: "From IT infrastructure to regulatory compliance, we cover every aspect of healthcare technology.",
        },
      ],
    },
    description: "",
    features: [],
    faqs: [
      {
        label: "How do you ensure HIPAA compliance for healthcare IT systems?",
        desc: "We conduct detailed security audits, implement data encryption, access controls, and maintain audit logs to ensure complete HIPAA compliance.",
        expanded: true,
      },
      {
        label:
          "Can you integrate our existing EMR system with new telemedicine software?",
        desc: "Yes. Our team specializes in integrating EMR/EHR systems with telemedicine platforms, ensuring secure and seamless data flow.",
        expanded: false,
      },
      {
        label: "Do you offer 24/7 healthcare IT support?",
        desc: "Absolutely. We provide round-the-clock remote and on-site IT assistance for healthcare facilities worldwide.",
        expanded: false,
      },
      {
        label: "How do you protect against healthcare cyberattacks?",
        desc: "We use advanced cybersecurity measures like intrusion detection, MFA, endpoint protection, and regular vulnerability scanning to safeguard your network.",
        expanded: false,
      },
      {
        label: "Can you work with multi-location hospitals and clinics?",
        desc: "Yes, we provide centralized IT management and secure networking solutions for healthcare organizations with multiple locations.",
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
];
