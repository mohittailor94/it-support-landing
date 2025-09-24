import Head from "next/head";
import { useLocale, useTranslations } from "next-intl";
import IssueCategory from "@/app/services/[slug]/_components/IssueCategory";
import ServiceCard from "@/app/services/[slug]/_components/ServiceCard";
import SpecificIssue from "@/app/services/[slug]/_components/SpecificIssue";
import SpecificIssueList from "@/app/services/[slug]/_components/SpecificIssueList";
import ServiceOffer from "@/app/services/_component/ServiceOffer";
import ServiceWhyChoose from "@/app/services/_component/ServiceWhyChoose";
import FAQs from "@/components/FAQ/FAQs";
import HeroSection from "@/components/HeroSection";
import Typography from "@/components/ui/Typography";
import { buildMetadata, renderJsonLd } from "@/lib/seo";
import { ServiceMeta, servicesMetaEs } from "@/lib/servicesMeta";
import {
  Service,
  serviceDetailDataEs,
} from "@/utils/constant/serviceDetailData";

interface ServiceDetailSpanishProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: ServiceDetailSpanishProps) {
  const meta = servicesMetaEs[params?.slug || ""];
  if (!meta) return {};
  return buildMetadata(meta);
}

// optional: pre-render known service slugs at build
export async function generateStaticParams() {
  return Object.values(servicesMetaEs).map((m) => ({ slug: m?.slug || "" }));
}

export default function InsightDetail({ params }: ServiceDetailSpanishProps) {
  const decodedString = decodeURIComponent(params.slug);

  const meta: ServiceMeta | undefined = servicesMetaEs[decodedString || ""];

  const t = useTranslations();
  const locale = useLocale();

  let service: Service =
    serviceDetailDataEs.find((s) => s.slug === decodedString) || {};

  if (!service) {
    return <div className="p-8">Service not found</div>;
  }

  const jsonLdScripts = renderJsonLd(meta?.jsonLd ?? []);

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
      <HeroSection
        heroTitle={service.title || ""}
        heroIntro={service.subtitle || ""}
        buttonTexts={[
          { label: "Get Support Now" },
          { label: "Request a Call" },
        ]}
        breadcrumbs={[
          {
            home: "Home",
          },
          {
            home: "Services",
          },
          {
            home: "Tech Support",
          },
        ]}
        imageSrc={service.heroImage}
      />

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
      <section className="sm:px-16 px-2 bg-[#f4f7fa]">
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
            {/* <Typography
              variant="p"
              className="text-gray-600 mb-8 text-center max-w-5xl mx-auto"
            >
              {service.issuecategory2?.bottomDesc}
            </Typography> */}
          </div>
        )}

        {service?.issuecategory3 && (
          <div className="py-8 w-full px-4">
            <Typography
              variant="h2"
              className="font-bold mb-8 text-center text-gray-800"
            >
              {service.issuecategory3?.title}
            </Typography>
            {service.issuecategory3?.subTitle && (
              <Typography
                variant="p"
                className="text-gray-600 mb-8 text-center max-w-5xl mx-auto"
                htmlString={service?.issuecategory3?.subTitle || ""}
              />
            )}

            {service.issuecategory3?.issueCategories.map((cat) => (
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
            {/* {service.issuecategory3?.bottomDesc && (
              <Typography
                variant="p"
                className="text-gray-600 mb-8 text-center max-w-5xl mx-auto"
              >
                {service.issuecategory3?.bottomDesc}
              </Typography>
            )} */}
          </div>
        )}

        {service?.issuecategory4 && (
          <div className="py-8 w-full px-4">
            <Typography
              variant="h2"
              className="font-bold mb-8 text-center text-gray-800"
            >
              {service.issuecategory4?.title}
            </Typography>
            {service.issuecategory4?.subTitle && (
              <Typography
                variant="p"
                className="text-gray-600 mb-8 text-center max-w-5xl mx-auto"
                htmlString={service?.issuecategory4?.subTitle || ""}
              />
            )}

            {service.issuecategory4?.issueCategories.map((cat) => (
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
            {/* {service.issuecategory4?.bottomDesc && (
              <Typography
                variant="p"
                className="text-gray-600 mb-8 text-center max-w-5xl mx-auto"
              >
                {service.issuecategory4?.bottomDesc}
              </Typography>
            )} */}
          </div>
        )}
      </section>

      <ServiceWhyChoose
        cards={service.whyChoose?.whyChoosecategories ?? []}
        title={service.whyChoose?.title ?? ""}
        desc={service.whyChoose?.desc ?? ""}
      />

      <FAQs data={service.faqs} descHTMLString />
    </>
  );
}
