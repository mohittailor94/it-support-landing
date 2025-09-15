const outCoreData = [
  {
    label: "Data Backup Support",
    desc: "Protect your critical business data with secure backup solutions. We provide automated backup services and recovery solutions that ensure your information is safe, retrievable, and compliant with industry standards.",
    icon: '<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path></svg>',
    href: "/services/best-data-backup-and-recovery-services",
  },
  {
    label: "Wi-Fi Network Support",
    desc: "Ensure seamless Wi-Fi connectivity for your offices, warehouses, or educational campuses. Our team handles setup, optimization, security, and troubleshooting of wireless networks.",
    icon: '<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path></svg>',
    href: "/services/wifi-network-support",
  },
  {
    label: "Printer Support Services",
    desc: "Resolve all printer-related issues efficiently. From setup and driver installation to troubleshooting networked or wireless printers, our support ensures your printing operations never disrupt workflow.",
    icon: '<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>',
    href: "/services/printer-support-services",
  },
  {
    label: "Network Support Services",
    desc: "Maintain a robust and reliable network with our expert LAN, WAN, and VPN support. We troubleshoot connectivity issues, optimize network performance, and provide proactive monitoring to prevent downtime.",
    icon: '<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path></svg>',
    href: "/services/networking-support-services",
  },
  {
    label: "Cloud Support Services",
    desc: "Seamlessly manage your cloud infrastructure with our cloud support services. From migration to maintenance on platforms like AWS, Azure, and Google Cloud, we ensure optimal performance and security.",
    icon: '<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>',
    href: "/services/professional-cloud-support-services",
  },
  {
    label: "E-Commerce Support Services",
    desc: "For online businesses, uptime is critical. We provide e-commerce support, ensuring your store, payment gateways, and backend systems function flawlessly, enhancing customer experience and revenue.",
    icon: '<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>',
    href: "/services/e-commerce-support-services",
  },
  {
    label: "Hardware Repair Support Services",
    desc: "Our skilled technicians handle PCs, laptops, servers, and peripherals. We offer diagnostics, repair, and maintenance services to extend hardware lifespan and prevent operational disruptions.",
    icon: '<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',
    href: "/services/hardware-repair-support-services",
  },
  {
    label: "Web Hosting &amp; Domain Support",
    desc: "We assist with website hosting, domain management, and technical configurations, ensuring your online presence is reliable, secure, and fast.",
    icon: '<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path></svg>',
    href: "/services/website-hosting-domain-support-services",
  },
  {
    label: "Email Setup Support",
    desc: "Efficient email communication is vital for any organization. We offer email configuration, migration, and troubleshooting for platforms such as Microsoft 365, Gmail, and Outlook.",
    icon: '<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',
    href: "/services/email-setup-support",
  },
  {
    label: "Wi-Fi Network Support",
    desc: "Ensure seamless Wi-Fi connectivity for your offices, warehouses, or educational campuses. Our team handles setup, optimization, security, and troubleshooting of wireless networks.",
    icon: '<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path></svg>',
    href: "/services/wifi-network-support",
  },
];

export default outCoreData;
