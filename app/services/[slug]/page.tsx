import Link from "next/link";
import FAQs from "@/components/FAQ/FAQs";
import Typography from "@/components/ui/Typography";
import { PrinterFAQData } from "@/utils/constant/FAQData";
import { servicesDetailData } from "@/utils/constant/serviceDetailData";
import ServiceCard from "./_components/ServiceCard";
import IssueCategory from "./_components/IssueCategory";
import SpecificIssue from "./_components/SpecificIssue";
import FeatureCard from "./_components/FeatureCard";

interface Props {
  params: { slug: string };
}

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

export default function ServiceDetail({ params }: Props) {
  const service = servicesDetailData.find((s) => s.slug === params.slug);

  if (!service) {
    return <div className="p-8">Service not found</div>;
  }

  return (
    <>
      <section
        className="flex md:flex-row flex-col h-auto py-5 px-4 align-center bg-gradient-to-r from-slate-200 via-sky-100 to-indigo-300 shadow-md rounded-lg mb-6"
        style={{ alignItems: "center" }}
      >
        <div className="w-full px-4">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div
              className="flex flex-col justify-center items-center h-full w-full md:w-1/2 relative"
              style={{ opacity: 1, transform: "none", height: "inherit" }}
            >
              <h1
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-left leading-tight w-full"
                style={{ opacity: 1, transform: "none" }}
              >
                <span className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300">
                  {service.title}{" "}
                </span>
                Services
              </h1>
              <p
                className="text-lg sm:text-xl text-gray-700 max-w-4xl leading-relaxed text-left w-full"
                style={{ opacity: 1, transform: "none" }}
              >
                {service.subtitle}
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
              <div
                className="delay-1000 animate-fill-forwards w-full mt-6 absolute"
                style={{ position: "absolute", bottom: 60 }}
              >
                <div className="flex items-center gap-2 text-sm">
                  <span>Home</span>
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                src={service.heroImage}
                alt="Service illustration 1"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16 px-4 sm:px-6 bg-[#f4f7fa]">
        <div className="flex flex-col md:flex-row gap-8 mb-16 w-full">
          <div className="w-full md:w-[45%] p-4">
            <Typography
              variant="h1"
              className="text-left leading-tight w-full font-bold mb-3"
            >
              {service.intro?.headline}{" "}
              <a
                href="https://it-support-landing.vercel.app"
                className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300"
              >
                ITSupport.net.in
              </a>
            </Typography>

            <Typography variant="h2" className="text-left font-semibold mb-6">
              {service.intro?.subheadline}
            </Typography>

            <Typography variant="p" className="text-left mb-8 leading-relaxed">
              {service.intro?.description}
            </Typography>
          </div>
          <div
            className="flex items-center justify-center md:w-[55%] "
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="rounded-lg overflow-hidden w-full ">
              <img
                className="rounded-lg overflow-hidden shadow-xl w-full"
                src={service.intro?.image}
                alt="Service illustration 1"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------- */}
      <section className="px-16 sm:px-6 bg-[#f4f7fa]">
        <div className="w-full px-4">
          <Typography
            variant="h2"
            className="font-bold mb-8 text-center text-gray-800"
          >
            {service.serviceHighlights?.title}
          </Typography>
          <div className="grid md:grid-cols-3 gap-6 mb-4">
            {service.serviceHighlights?.services.map((serv, servIndex) => (
              <ServiceCard
                key={`service-service-highlights-service-${servIndex}-${service.title}`}
                icon={
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="inline mr-2 text-gray-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"></path>
                  </svg>
                }
                title={serv.title}
                description={serv.description}
              />
            ))}
          </div>
        </div>

        <div className="py-8 w-full px-4">
          <Typography
            variant="h2"
            className="font-bold mb-8 text-center text-gray-800"
          >
            {service.issuecategory?.title}
          </Typography>
          <Typography
            variant="p"
            className="text-gray-600 mb-8 text-center max-w-5xl mx-auto"
          >
            {service.issuecategory?.subTitle}
          </Typography>

          {service.issuecategory?.issueCategories.map((cat) => (
            <div
              className="space-y-12 mt-12 flex justify-center"
              key={`service-issue-category-${cat.title}`}
            >
              <IssueCategory title={cat.title} description={cat.description}>
                {cat?.issues.map((catIssue) => (
                  <SpecificIssue
                    key={`service-issue-category-categories-${cat.title}-${catIssue.title}`}
                    title={catIssue.title}
                    problemDescription={catIssue.problemDescription}
                    solution={catIssue.solution}
                  />
                ))}
              </IssueCategory>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-800">
              Why Choose ITSupport.net.in?
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

      <FAQs data={service.faqs} />
    </>
  );
}
