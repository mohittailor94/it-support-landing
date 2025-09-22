import Head from "next/head";
import FAQs from "@/components/FAQ/FAQs";
import Typography from "@/components/ui/Typography";
import {
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
  const meta = servicesMeta[params.slug];
  if (!meta) return {};
  return buildMetadata(meta);
}

// optional: pre-render known service slugs at build
export async function generateStaticParams() {
  return Object.values(servicesMeta).map((m) => ({ slug: m?.slug || "" }));
}

export default function ServiceDetail({ params }: Props) {
  const meta: ServiceMeta | undefined = servicesMeta[params.slug];

  const decodedString = decodeURIComponent(params.slug);
  const t = useTranslations();
  const locale = useLocale();

  const jsonLdScripts = renderJsonLd(meta?.jsonLd ?? []);

  let service = {};

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
        className="flex md:flex-row flex-col h-auto py-5 px-4 align-center bg-gradient-to-r from-slate-200 via-sky-100 to-indigo-300 shadow-md rounded-lg mb-6"
        style={{ alignItems: "center" }}
      >
        <div className="w-full px-4">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div
              className="flex flex-col justify-center items-center h-full w-full md:w-1/2 relative"
              style={{ opacity: 1, transform: "none", height: "inherit" }}
            >
              <Typography
                className="mb-4 leading-tight w-full text-left"
                variant="h1"
              >
                {service.title} Services
              </Typography>
              <p className="text-base sm:text-base text-gray-700 max-w-4xl leading-relaxed w-full text-left mb-4">
                {service.subtitle}
              </p>

              {service.subtitle1 && (
                <p className="text-base sm:text-base text-gray-700 max-w-4xl leading-relaxed w-full text-left mb-4">
                  {service.subtitle1}
                </p>
              )}
              <div
                className="delay-1000 animate-fill-forwards w-full mt-6 absolute"
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
              className="w-full h-full p-3 flex rounded-lg md:w-1/2"
              style={{ opacity: 1, transform: "none" }}
            >
              <img
                className="w-full h-full object-contain rounded-lg"
                src={service.heroImage}
                alt="Service illustration 1"
              />
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
                  typeof serv.icon === "string" ? <svg
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
                  </svg>:
                  serv.icon || <></>
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
          <Typography
            variant="p"
            className="text-gray-600 mb-8 text-center max-w-5xl mx-auto"
          >
            {service.issuecategory?.bottomDesc}
          </Typography>
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
