import Head from "next/head";
import FAQs from "@/components/FAQ/FAQs";
import Typography from "@/components/ui/Typography";
import {
  Service,
  serviceDetailDataEs,
  servicesDetailData,
} from "@/utils/constant/serviceDetailData";
import ServiceCard from "./_components/ServiceCard";
import IssueCategory from "./_components/IssueCategory";
import SpecificIssue from "./_components/SpecificIssue";
import FeatureCard from "./_components/FeatureCard";
import { useLocale, useTranslations } from "next-intl";
import ServiceWhyChoose from "../_component/ServiceWhyChoose";
import Image from "next/image";
import ServiceOffer from "../_component/ServiceOffer";
import SpecificIssueList from "./_components/SpecificIssueList";
import { ServiceMeta, servicesMeta } from "@/lib/servicesMeta";
import { buildMetadata, renderJsonLd } from "@/lib/seo";

interface Props {
  params: { slug: string };
}

// generateMetadata runs at build/server time and populates <head>
export async function generateMetadata({ params }: Props) {
  const meta = servicesMeta[params?.slug || ""];
  if (!meta) return {};
  return buildMetadata(meta);
}

// optional: pre-render known service slugs at build
export async function generateStaticParams() {
  return Object.values(servicesMeta).map((m) => ({ slug: m?.slug || "" }));
}

export default function ServiceDetail({ params }: Props) {
  const meta: ServiceMeta | undefined = servicesMeta[params?.slug || ""];

  const decodedString = decodeURIComponent(params.slug);
  const t = useTranslations();
  const locale = useLocale();

  const jsonLdScripts = renderJsonLd(meta?.jsonLd ?? []);

  let service: Service = {};

  if (locale === "es") {
    service = serviceDetailDataEs.find((s) => s.slug === decodedString) || {};
  } else {
    service = servicesDetailData.find((s) => s.slug === decodedString) || {};
  }

  if (!service) {
    return <div className="p-8">Service not found</div>;
  }

  return (
    <>
      <Head>
        <h1>{meta?.title}</h1>
        <p>{meta?.description}</p>
      </Head>
      {jsonLdScripts.map((s) => (
        <script
          key={s.key}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: s.json }}
        />
      ))}
      <section
        className="flex md:flex-row flex-col h-auto py-5 px-4 align-center shadow-md rounded-lg mb-6"
        style={{
          alignItems: "center",
          background:
            "linear-gradient(135deg, #001731 0%, #00426F 50%, #0D76B1 100%)",
        }}
      >
        <div className="w-full px-4">
          <div className="flex flex-col md:flex-row gap-8 w-full">
            <div
              className="flex flex-col justify-center items-center h-full w-full md:w-1/2 relative"
              style={{ opacity: 1, transform: "none", height: "inherit" }}
            >
              <Typography
                className="leading-tight w-full text-left font-bold text-white"
                variant="h1"
              >
                {service.title}
              </Typography>
              <Typography
                className="mt-6 mb-4 leading-tight w-full text-left font-bold text-white"
                variant="h3"
              >
                {service.subtitle}
              </Typography>

              <div className="flex justify-start w-full align-center flex-wrap gap-4 items-center mt-9">
                <a
                  className="p-2 inline-block bg-gradient-to-r from-[#61CE70] via-blue-500 to-[#61CE70] text-white rounded-full font-extrabold shadow-xl hover:from-blue-500 hover:to-[#61CE70] hover:scale-105 transition-all duration-300 text-lg sm:text-xl tracking-wide group "
                  href="#"
                >
                  <Typography
                    variant="p"
                    className="inline-flex items-center gap-2 text-white"
                  >
                    Get Support Now
                  </Typography>
                </a>
                <a
                  className="p-2 inline-block bg-gradient-to-r from-[#61CE70] via-blue-500 to-[#61CE70] text-white rounded-full font-extrabold shadow-xl hover:from-blue-500 hover:to-[#61CE70] hover:scale-105 transition-all duration-300 text-lg sm:text-xl tracking-wide group "
                  href="#"
                >
                  <Typography
                    variant="p"
                    className="inline-flex items-center gap-2 text-white"
                  >
                    Request a Call
                  </Typography>
                </a>
              </div>

              <div
                className="delay-1000 animate-fill-forwards w-full mt-6 absolute font-bold text-white"
                style={{ position: "absolute", bottom: 0 }}
              >
                <div className="flex items-center gap-2 text-xs">
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
              className="w-full h-full flex rounded-lg md:w-1/2"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="relative w-full">
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg z-10">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 640 512"
                    className="w-6 h-6 text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
                  </svg>
                </div>
                <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg z-10">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 640 512"
                    className="w-6 h-6 text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
                  </svg>
                </div>
                <div className="relative bg-gradient-to-br from-white/20 to-white/5 rounded-2xl backdrop-blur-lg border border-white/20 shadow-2xl overflow-hidden p-4">
                  <img
                    alt="Real Estate"
                    loading="lazy"
                    width="1920"
                    height="1080"
                    decoding="async"
                    data-nimg="1"
                    className="w-full h-auto rounded-xl"
                    style={{ color: "transparent" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={service.heroImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceOffer
        serviceProvider={{
          title: service?.intro?.headline || "",
          description: service?.intro?.description || "",
          imageAlt: service?.intro?.headline || "",
          imageTitle: service?.intro?.headline || "",
          imageSrc: service?.intro?.image || "",
          subtitle: service?.subtitle1 || "",
        }}
      />

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
                  typeof serv.icon === "string" ? (
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
                  ) : (
                    serv.icon || <></>
                  )
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
          {service.issuecategory?.subTitle && (
            <Typography
              variant="p"
              className="text-gray-600 mb-8 text-center max-w-5xl mx-auto"
              htmlString={service?.issuecategory?.subTitle || ""}
            />
          )}

          {service.issuecategory?.issueCategories.map((cat) => (
            <div
              className="space-y-12 mt-12 flex justify-center"
              key={`service-issue-category-${cat.title}`}
            >
              <IssueCategory
                title={cat.title}
                description={cat.description}
                bottomDesc={cat.bottomDesc}
              >
                {cat?.issues?.map((catIssue) => (
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
          {service.issuecategory?.bottomDesc && (
            <Typography
              variant="p"
              className="text-gray-600 mb-8 text-center max-w-5xl mx-auto"
            >
              {service.issuecategory?.bottomDesc}
            </Typography>
          )}
        </div>

        {service?.issuecategory2 && (
          <div className="py-8 w-full px-4">
            <Typography
              variant="h2"
              className="font-bold mb-8 text-center text-gray-800"
            >
              {service.issuecategory2?.title}
            </Typography>
            {service.issuecategory2?.subTitle && (
              <Typography
                variant="p"
                className="text-gray-600 mb-8 text-center max-w-5xl mx-auto"
                htmlString={service?.issuecategory2?.subTitle || ""}
              />
            )}

            {service.issuecategory2?.issueCategories.map((cat) => (
              <div
                className="space-y-12 mt-12 flex justify-center"
                key={`service-issue-category-${cat.title}`}
              >
                <IssueCategory
                  title={cat.title}
                  description={cat.description}
                  bottomDesc={cat.bottomDesc}
                >
                  {cat?.issues?.map((catIssue) =>
                    catIssue.type === "list" ? (
                      <SpecificIssueList
                        key={`service-issue-category-categories-${cat.title}-${catIssue.title}`}
                        title={catIssue.title}
                        options={catIssue.options || []}
                      />
                    ) : (
                      <SpecificIssue
                        key={`service-issue-category-categories-${cat.title}-${catIssue.title}`}
                        title={catIssue.title}
                        problemDescription={catIssue.problemDescription}
                        solution={catIssue.solution}
                      />
                    )
                  )}
                </IssueCategory>
              </div>
            ))}
            <Typography
              variant="p"
              className="text-gray-600 mb-8 text-center max-w-5xl mx-auto"
            >
              {service.issuecategory?.bottomDesc}
            </Typography>
          </div>
        )}
      </section>

      <ServiceWhyChoose />

      <FAQs data={service.faqs} descHTMLString />
    </>
  );
}
