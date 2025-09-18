import CoreServiceCard from "@/components/cards/CoreServiceCard";
import outCoreData from "@/utils/constant/outCoreData";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <section className="py-16 px-4 sm:px-6 bg-[#f4f7fa]">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="w-full md:w-[70%] p-4">
            <p className="text-blue-700 font-semibold transform transition-all duration-300 ease-in-out">
              Printer Support
            </p>

            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-left leading-tight w-full">
              Fast &amp; Reliable Printer Support Services — On-site &amp;
              Remote
            </h1>
            <h6
              className="text-lg sm:text-xl text-gray-700 leading-relaxed text-left w-full mb-4"
              style={{ fontWeight: 700 }}
            >
              Keep your office printing running smoothly with proactive
              maintenance, rapid repairs, and scalable managed print solutions
              tailored for businesses of all sizes.
            </h6>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-left w-full mb-4">
              Our certified technicians diagnose and fix hardware, software, and
              network printing issues quickly — reducing downtime and lowering
              your printing costs. We support all major brands including HP,
              Canon, Epson, Brother, Lexmark and more.
            </p>
            <ul>
              <li>
                <strong>Rapid SLA-backed response</strong> for on-site and
                remote support.
              </li>
              <li>
                <strong>Preventive maintenance</strong> to extend printer
                lifespan and reduce costs.
              </li>
              <li>
                <strong>Managed Print Services</strong> for centralized control,
                analytics and consumables optimisation.
              </li>
            </ul>
            <div style={{ marginTop: 14 }}>
              <span className="cursor-pointer inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                Get a Quote
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <span className="cursor-pointer inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md ">
                Read FAQ
              </span>
            </div>
          </div>
          <div
            className="w-full md:w-[30%] p-4 h-full pt-0 px-16 pb-16 flex rounded-4xl"
            style={{ opacity: 1, transform: "none" }}
          >
            <img
              className="w-full h-full object-contain rounded-4xl"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
              alt="Service illustration 1"
            />
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-6 bg-[#f4f7fa]">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="w-full md:w-[70%] p-4">
            <section className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-left leading-tight w-full">
                Our Printer Support Services
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-left w-full mb-4">
                From single-site offices to multi-location enterprises, our
                end-to-end printer services ensure uninterrupted printing
                operations. Choose from ad-hoc repairs, fixed-scope maintenance,
                or fully-managed print contracts.
              </p>

              <div
                className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8"
                style={{ opacity: 1 }}
              >
                {outCoreData.slice(0, 4).map((core, index) => (
                  <CoreServiceCard
                    key={`ourCoreService-${core.label}-${index}`}
                    label={core.label}
                    desc={core.desc}
                  />
                ))}
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-6">
                Why Choose L4RG for Printer Support?
              </h3>
              <ul className="mb-6">
                <li className="text-gray-700 mt-1 mb-1">
                  SLA-backed response times with escalation matrix.
                </li>
                <li className="text-gray-700 mt-1 mb-1">
                  Certified technicians for major printer brands.
                </li>
                <li className="text-gray-700 mt-1 mb-1">
                  Transparent pricing and consumable management.
                </li>
                <li className="text-gray-700 mt-1 mb-1">
                  Advanced reporting and cost-saving recommendations.
                </li>
              </ul>

              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                <CoreServiceCard
                  children={
                    <img
                      src="https://images.unsplash.com/photo-1581091012184-2a12b2b6f5f9?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"
                      alt="Printer parts and tools"
                    />
                  }
                />
                <CoreServiceCard
                  children={
                    <>
                      <h4
                        className="text-xl font-semibold text-gray-900 group-hover:text-[#61CE70] transition-colors duration-300 mb-4"
                        style={{ marginTop: 0 }}
                      >
                        Service Packages
                      </h4>
                      <ul>
                        <li>
                          <strong>Pay-as-you-go:</strong> Per visit pricing for
                          ad-hoc repairs.
                        </li>
                        <li>
                          <strong>Maintenance Plan:</strong> Quarterly or
                          bi-monthly servicing contracts.
                        </li>
                        <li>
                          <strong>Full MPS:</strong> End-to-end management
                          including consumables &amp; analytics.
                        </li>
                      </ul>
                    </>
                  }
                />
              </div>
            </section>
          </div>

          <div
            className="w-full md:w-[30%] p-4 h-full flex rounded-4xl"
            style={{ opacity: 1, transform: "none" }}
          >
            <section className="w-full bg-white rounded-lg shadow-md p-8">
              <h2
                className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-left leading-tight w-full"
                style={{ marginTop: 0 }}
              >
                Quick Facts
              </h2>
              <p className="mb-2">
                <span
                  style={{ fontWeight: 700 }}
                  className="text-lg sm:text-xl text-gray-700 leading-relaxed text-left w-full mb-4"
                >
                  Response:
                </span>{" "}
                SLA options from 2–48 hours
              </p>

              <p className="mb-2">
                <span
                  style={{ fontWeight: 700 }}
                  className="text-lg sm:text-xl text-gray-700 leading-relaxed text-left w-full mb-4"
                >
                  Response:
                </span>{" "}
                SLA options from 2–48 hours
              </p>

              <p className="mb-2">
                <span
                  style={{ fontWeight: 700 }}
                  className="text-lg sm:text-xl text-gray-700 leading-relaxed text-left w-full mb-4"
                >
                  Response:
                </span>{" "}
                SLA options from 2–48 hours
              </p>

              <p className="mb-2">
                <span
                  style={{ fontWeight: 700 }}
                  className="text-lg sm:text-xl text-gray-700 leading-relaxed text-left w-full mb-4"
                >
                  Response:
                </span>{" "}
                SLA options from 2–48 hours
              </p>

              <div id="contact" style={{ marginTop: 12 }}>
                <h4 className="text-xl font-bold text-gray-900 mt-1 mb-2">
                  Request a Quote
                </h4>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Email us at{" "}
                  <a
                    className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300"
                    href="mailto:digital@l4rg.com"
                  >
                    digital@l4rg.com
                  </a>{" "}
                  or visit our{" "}
                  <Link
                    className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300"
                    href="/contact"
                  >
                    Contact page
                  </Link>
                  .
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
