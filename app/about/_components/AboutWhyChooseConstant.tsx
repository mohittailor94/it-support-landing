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
const SvgClock = () => (
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
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
);
const SvgPuzzle = () => (
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
const SvgMagnifyingGlass = () => (
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
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    ></path>
  </svg>
);
const SvgShieldCheck = () => (
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

export const ABOUT_WHY_CHOOSE_CARDS = [
  {
    svg: <SvgGlobe />,
    title: "Global Reach, Local Expertise",
    desc: "We understand both international standards and regional business needs.",
  },
  {
    svg: <SvgClock />,
    title: "24/7 Support Availability",
    desc: "We’re always there when you need us, across time zones.",
  },
  {
    svg: <SvgPuzzle />,
    title: "Customized IT Solutions",
    desc: "Tailored to fit your business requirements, not one-size-fits-all.",
  },
  {
    svg: <SvgMagnifyingGlass />,
    title: "Proactive Approach",
    desc: "Preventing issues before they impact your operations.",
  },
  {
    svg: <SvgShieldCheck />,
    title: "Security-First Mindset",
    desc: "Keeping your business data and operations safe from cyber threats.",
  },
];
