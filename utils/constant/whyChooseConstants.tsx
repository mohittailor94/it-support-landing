const SvgCheck = () => (
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
);

const SvgGlobe = () => (
  <svg
    className="w-8 h-8 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a10 10 0 010 20M2 12h20M12 2v20M2 12a10 10 0 0120 0" />
  </svg>
);

const SvgBolt = () => (
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
);

const SvgBriefcase = () => (
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
);

const SvgClipboard = () => (
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
);

const SvgSmiley = () => (
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
);

export const WHY_CHOOSE_CARDS = [
  {
    svg: <SvgCheck />,
    title: "Experienced Team",
    desc: "Over 20 years of expertise in remote technical support across multiple industries.",
  },
  {
    svg: <SvgGlobe />,
    title: "Global Reach",
    desc: "Support for clients in 50+ countries, ensuring businesses never face downtime.",
  },
  {
    svg: <SvgBolt />,
    title: "Rapid Response",
    desc: "Our remote assistance model resolves issues quickly, reducing operational delays.",
  },
  {
    svg: <SvgBriefcase />,
    title: "Comprehensive Services",
    desc: "From data backup to cloud management, we cover all IT requirements under one roof.",
  },
  {
    svg: <SvgClipboard />,
    title: "Industry-Specific Solutions",
    desc: "Tailored services that meet regulatory and operational needs of different sectors.",
  },
  {
    svg: <SvgSmiley />,
    title: "Customer Satisfaction",
    desc: "50,000+ satisfied clients trust us for dependable IT support.",
  },
];
