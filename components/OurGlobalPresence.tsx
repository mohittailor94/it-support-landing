import Link from "next/link";

export default function OurGlobalPresence() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-[#f4f7fa]">
      <div className="max-w-6xl mx-auto" style={{ opacity: 1 }}>
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          style={{ opacity: 1, transform: "none" }}
        >
          Our Global Presence
        </h2>
        <p
          className="text-lg text-center text-gray-700 mb-12 max-w-4xl mx-auto"
          style={{ opacity: 1, transform: "none" }}
        >
          We proudly serve clients across the globe, ensuring businesses in each
          region have localized support and timely assistance. Learn more about
          our presence in your region:
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ opacity: 1 }}
        >
          <div
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
            style={{ opacity: 1, transform: "none" }}
          >
            <span className="cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#61CE70] transition-colors duration-300">
                United States
              </h3>
              <p className="text-gray-700 text-sm">
                Supporting tech, finance, healthcare, and retail sectors with
                24/7 remote services.
              </p>
            </span>
          </div>
          <div
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
            style={{ opacity: 1, transform: "none" }}
          >
            <span className="cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#61CE70] transition-colors duration-300">
                United Kingdom
              </h3>
              <p className="text-gray-700 text-sm">
                Providing GDPR-compliant IT solutions and responsive tech
                support.
              </p>
            </span>
          </div>
          <div
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
            style={{ opacity: 1, transform: "none" }}
          >
            <span className="cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#61CE70] transition-colors duration-300">
                India
              </h3>
              <p className="text-gray-700 text-sm">
                Scalable, cost-effective IT support for startups, SMBs, and
                enterprises.
              </p>
            </span>
          </div>
          <div
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
            style={{ opacity: 1, transform: "none" }}
          >
            <span className="cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#61CE70] transition-colors duration-300">
                Australia
              </h3>
              <p className="text-gray-700 text-sm">
                Reliable network, cloud, and hardware solutions for businesses
                nationwide.
              </p>
            </span>
          </div>
          <div
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
            style={{ opacity: 1, transform: "none" }}
          >
            <span className="cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#61CE70] transition-colors duration-300">
                Germany
              </h3>
              <p className="text-gray-700 text-sm">
                Industry-focused IT services for manufacturing, finance, and
                healthcare sectors.
              </p>
            </span>
          </div>
          <div
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
            style={{ opacity: 1, transform: "none" }}
          >
            <span className="cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#61CE70] transition-colors duration-300">
                France
              </h3>
              <p className="text-gray-700 text-sm">
                Expert remote support and cloud management tailored to French
                business requirements.
              </p>
            </span>
          </div>
          <div
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
            style={{ opacity: 1, transform: "none" }}
          >
            <span className="cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#61CE70] transition-colors duration-300">
                Canada
              </h3>
              <p className="text-gray-700 text-sm">
                Fast, multilingual IT assistance for finance, tech, and
                e-commerce industries.
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
