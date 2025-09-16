import outCoreData from "@/utils/constant/outCoreData";
import Link from "next/link";

export default function OurCoreServices() {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 bg-[#f4f7fa]">
      <div className="max-w-6xl mx-auto" style={{ opacity: 1 }}>
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          style={{ opacity: 1, transform: "none" }}
        >
          Our Core Services
        </h2>
        <p
          className="text-lg text-center text-gray-700 mb-12 max-w-4xl mx-auto"
          style={{ opacity: 1, transform: "none" }}
        >
          At{" "}
          <a
            href="https://it-support-landing.vercel.app"
            className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300"
          >
            {" "}
            ITSupport.net.in
          </a>
          , we provide a comprehensive range of services designed to cover every
          aspect of your IT infrastructure. Click on any service to learn more
          about our specialized solutions:
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ opacity: 1 }}
        >
          {outCoreData.map((core, index) => (
            <div
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
              style={{ opacity: 1, transform: "none" }}
              key={`ourCoreService-${core.label}-${index}`}
            >
              <span className="cursor-pointer"
                key={`ourCoreService-${core.label}-${index}`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 bg-[#61CE70] rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-500 transition-colors duration-300"
                    dangerouslySetInnerHTML={{ __html: core.icon }}
                  ></div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#61CE70] transition-colors duration-300">
                    {core.label}
                  </h3>
                </div>
                <p className="text-gray-700">{core.desc}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
