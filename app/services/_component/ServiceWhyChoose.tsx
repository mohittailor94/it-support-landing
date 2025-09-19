import FeatureCard from "../[slug]/_components/FeatureCard";

const whyChooseData = [
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
        className="w-8 h-8 text-[#4CD964]"
        aria-hidden="true"
        data-id="element-244"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <circle cx="9" cy="7" r="4"></circle>
      </svg>
    ),
    title: "Expert Technicians",
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
        className="w-8 h-8 text-[#4CD964]"
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
        className="w-8 h-8 text-[#4CD964]"
        aria-hidden="true"
        data-id="element-248"
      >
        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
        <path d="m9 11 3 3L22 4"></path>
      </svg>
    ),
    title: "Remote Solutions",
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
        className="w-8 h-8 text-[#4CD964]"
        aria-hidden="true"
        data-id="element-250"
      >
        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
        <circle cx="12" cy="8" r="6"></circle>
      </svg>
    ),
    title: "Customer Satisfaction",
    description: "Our priority is getting you back to printing seamlessly.",
  },
];

export default function ServiceWhyChoose() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-800">
            Why Choose{" "}
            <span className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300">
              ITSupport.net.in
            </span>{" "}
            ?
          </h2>
          <p className="text-gray-600 mb-12 text-center">
            With over a decade of dedicated service and thousands of satisfied
            customers across India, ITSupport.net.in stands out as the clear
            choice for all your printer support needs.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseData.map((whyD) => (
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
