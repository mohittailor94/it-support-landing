import FeatureCard from "@/app/services/[slug]/_components/FeatureCard";

export const whyChooseIndustriesDataDetail = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-white"
        aria-hidden="true"
        data-id="element-244"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <circle cx="9" cy="7" r="4"></circle>
      </svg>
    ),
    title: "Experience",
    description: "Highly trained and experienced professionals.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-white"
        aria-hidden="true"
        data-id="element-246"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    title: "24/7 Support",
    description: "Assistance whenever you need it.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-white"
        aria-hidden="true"
        data-id="element-248"
      >
        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
        <path d="m9 11 3 3L22 4"></path>
      </svg>
    ),
    title: "Trust",
    description: "Many issues resolved efficiently from anywhere.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-white"
        aria-hidden="true"
        data-id="element-250"
      >
        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
        <circle cx="12" cy="8" r="6"></circle>
      </svg>
    ),
    title: "Certified Experts",
    description: "Our priority is getting you back to printing seamlessly.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-white"
        aria-hidden="true"
        data-id="element-250"
      >
        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
        <circle cx="12" cy="8" r="6"></circle>
      </svg>
    ),
    title: "Global Research",
    description: "Our priority is getting you back to printing seamlessly.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-white"
        aria-hidden="true"
        data-id="element-250"
      >
        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
        <circle cx="12" cy="8" r="6"></circle>
      </svg>
    ),
    title: "Customer First Approach",
    description: "Our priority is getting you back to printing seamlessly.",
  },
];

export default function ServiceWhyChoose({
  whyChooseData = whyChooseIndustriesDataDetail,
}: {
  whyChooseData?: typeof whyChooseIndustriesDataDetail;
}) {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 700, // default duration
  //     once: false,   // whether animation should happen only once
  //   });
  //   AOS.refresh();   // refresh to recalc positions
  // }, []);
  return (
    <section className="py-16 bg-gray-50 sm:px-6 xl:px-40 md:px-10 py-10 px-4">
      <div className="container">
        <div className="mx-auto">
          <section className="section-heading">
            <h2 className="text-2xl xs:text-3xl sm:text-4xlfont-bold text-center mb-lg-12 mb-6">
              Why Choose{" "}
              <span className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300">
                ITSupport.net.in
              </span>{" "}
              for Your Business?
            </h2>
            <div className="bar w-[90px] h-[5px] bg-[#61CE70]/50 mx-auto  mb-lg-12 mb-6 relative rounded-full"></div>
            <p className="text-gray-600 mb-12 text-center">
              With over a decade of dedicated service and thousands of satisfied
              customers across India, ITSupport.net.in stands out as the clear
              choice for all your printer support needs.
            </p>
          </section>
          <div className="grid md:grid-cols-3 gap-4">
            {whyChooseData.map((whyD, index) => (
              <FeatureCard
                key={`why-choose-data-${whyD.title}`}
                icon={whyD.icon}
                title={whyD.title}
                description={whyD.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
