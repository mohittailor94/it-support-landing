import CoreServiceCard from "@/components/cards/CoreServiceCard";
import FAQCard from "@/components/FAQ/FAQCard";
import FAQs from "@/components/FAQ/FAQs";
import outCoreData from "@/utils/constant/outCoreData";
import { servicesDetailData } from "@/utils/constant/serviceDetailData";
import Link from "next/link";

interface Props {
  params: { slug: string };
}

// <img
//   src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
//   alt="Service illustration 1"
//   className="rounded-lg shadow-md w-full object-cover"
// />
// <img
//   src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80"
//   alt="Service illustration 2"
//   className="rounded-lg shadow-md w-full object-cover"
// />
//<section className="p-4 sm:px-6 bg-white">
//   <div className="max-w-4xl mx-auto" style={{ opacity: 1 }}>
//     <h2
//       className="text-3xl sm:text-4xl font-bold text-center mb-12"
//       style={{ opacity: 1, transform: "none" }}
//     >
//       Frequently Asked Questions (FAQs)
//     </h2>
//     <div style={{ opacity: 1, transform: "none" }}>
//       <section className="bg-white rounded-lg shadow-md p-8 my-5">
//         <h3 className="mx-auto mb-2 text-blue-700">
//           Frequently Asked Questions
//         </h3>

//         <div className="mx-auto py-2">
//           {service.faqs.map((faq, index) => (
//             <FAQCard
//               label={faq.question}
//               desc={faq.answer}
//               key={`FAQData-${faq.question}-${index}`}
//             />
//           ))}
//         </div>
//       </section>
//     </div>
//   </div>
// </section>
//       <div
//         className="flex flex-col h-full justify-center mb-5"
//         style={{ opacity: 1, transform: "none" }}
//       >
//         <h1
//           className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center leading-tight"
//           style={{ opacity: 1, transform: "none" }}
//         >
//           Welcome to{" "}
//           <span className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300">
//             {service.title}
//           </span>{" "}
//           Service
//         </h1>
//         <p
//           className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
//           style={{ opacity: 1, transform: "none" }}
//         >
//           {service.description}
//         </p>
//         <div>dasdfasdfd</div>
//       </div>

//       <div className="w-full h-full p-2.5 flex rounded-4xl">
//         <img
//           src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
//           alt="Service illustration 1"
//           className="w-full h-full object-contain rounded-4xl"
//         />
//       </div>

export default function ServiceDetail({ params }: Props) {
  const service = servicesDetailData.find((s) => s.slug === params.slug);

  if (!service) {
    return <div className="p-8">Service not found</div>;
  }

  return (
    <>
      <section
        className="flex md:flex-row flex-col h-auto py-5 px-4 bg-gradient-to-b from-[#f8fafc] to-white align-center"
        style={{ alignItems: "center" }}
      >
        <div className="w-full px-4">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div
              className="flex flex-col justify-center items-center h-full w-full md:w-1/2"
              style={{ opacity: 1, transform: "none", height: "inherit" }}
            >
              <h1
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-left leading-tight w-full"
                style={{ opacity: 1, transform: "none" }}
              >
                <span className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300">
                  Printer Support{" "}
                </span>
                Services
              </h1>
              <p
                className="text-lg sm:text-xl text-gray-700 max-w-4xl leading-relaxed text-left w-full"
                style={{ opacity: 1, transform: "none" }}
              >
                On-site & Remote Printer Repair • Managed Print Solutions
              </p>
              <div
                className="flex w-full md:justify-baseline mt-5"
                style={{ opacity: 1, transform: "none" }}
              >
                <Link
                  className="inline-block bg-gradient-to-r from-[#61CE70] via-blue-500 to-[#61CE70] text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full font-extrabold shadow-xl hover:from-blue-500 hover:to-[#61CE70] hover:scale-105 transition-all duration-300 text-lg sm:text-xl tracking-wide ring-2 ring-[#61CE70] hover:ring-4 focus:outline-none focus:ring-4 focus:ring-[#61CE70]/60 group"
                  href="/services"
                  style={{
                    boxShadow:
                      "rgba(97, 206, 112, 0.25) 0px 8px 32px 0px, rgba(10, 25, 47, 0.1) 0px 1.5px 8px 0px",
                    letterSpacing: "0.04em",
                  }}
                >
                  <span className="inline-flex items-center gap-2">
                    Get Support Now
                  </span>
                </Link>
              </div>
              <div className="delay-1000 animate-fill-forwards w-full mt-6">
                <div className="flex items-center gap-2 text-sm">
                  <span>Home</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-arrow-right w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                  <span>Services</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-arrow-right w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                  <span className="">Tech Support</span>
                </div>
              </div>
            </div>
            <div
              className="w-full h-full p-16 flex rounded-4xl md:w-1/2"
              style={{ opacity: 1, transform: "none" }}
            >
              <img
                className="w-full h-full object-contain rounded-4xl"
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
                alt="Service illustration 1"
              />
            </div>
          </div>
        </div>
      </section>
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
      <FAQs />
    </>
  );
}
