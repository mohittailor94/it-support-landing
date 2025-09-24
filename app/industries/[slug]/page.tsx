import ServiceOffer from "@/app/services/_component/ServiceOffer";
import ServiceWhyChoose from "@/app/services/_component/ServiceWhyChoose";
import DetailPageHighlightsSection from "@/components/DetailPageHighlightsSection";
import FAQs from "@/components/FAQ/FAQs";
import HeroSection from "@/components/HeroSection";
import { industriesMeta, IndustriesMetaType } from "@/lib/IndustriesMeta";
import { buildMetadata, renderJsonLd } from "@/lib/seo";
import { industryDetailData } from "@/utils/constant/IndustryDetailData";
import { Service as IndustryInterface } from "@/utils/constant/serviceDetailData";
import { useLocale } from "next-intl";
import Head from "next/head";

interface IndustryDetailProps {
  params?: { slug: string };
}

// generateMetadata runs at build/server time and populates <head>
export async function generateMetadata({ params }: IndustryDetailProps) {
  const meta = industriesMeta[params?.slug || ""];
  if (!meta) return {};
  return buildMetadata(meta);
}

// optional: pre-render known service slugs at build
export async function generateStaticParams() {
  return Object.values(industriesMeta).map((m) => ({ slug: m?.slug || "" }));
}

export default function IndustryDetail({ params }: IndustryDetailProps) {
  const meta: IndustriesMetaType | undefined =
    industriesMeta[params?.slug || ""];
  const decodedString = decodeURIComponent(params?.slug || "");

  const locale = useLocale();

  let industry: IndustryInterface = {};

  industry = industryDetailData.find((s) => s.slug === decodedString) || {};

  if (!industry?.slug) {
    return <div className="p-8">Industry not found</div>;
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
        heroTitle={industry.title || ""}
        heroIntro={industry.subtitle || ""}
        buttonTexts={[
          { label: "Get Support Now" },
          { label: "Request a Call" },
        ]}
        breadcrumbs={[
          {
            home: "Home",
          },
          {
            home: "Industry",
          },
          {
            home: "Industry Support",
          },
        ]}
        imageSrc={industry.heroImage}
      />

      <ServiceOffer
        serviceProvider={{
          title: industry?.intro?.headline || "",
          description: industry?.intro?.description || "",
          imageAlt: industry?.intro?.headline || "",
          imageTitle: industry?.intro?.headline || "",
          imageSrc: industry?.intro?.image || "",
          subtitle: industry?.subtitle1 || "",
        }}
      />

      <DetailPageHighlightsSection
        issuecategory={
          industry.issuecategory ?? {
            title: "",
            subTitle: "",
            issueCategories: [],
          }
        }
        serviceHighlightsItems={"even"}
        serviceHighlights={
          industry.serviceHighlights ?? { title: "", services: [] }
        }
        issuecategory2={industry.issuecategory2}
        issuecategory3={industry.issuecategory3}
        issuecategory4={industry.issuecategory4}
      />

      {industry?.whyChoose &&
        industry?.whyChoose?.whyChoosecategories?.length > 0 && (
          <ServiceWhyChoose
            cards={industry.whyChoose.whyChoosecategories}
            title={industry.whyChoose.title}
            desc={industry.whyChoose.desc}
          />
        )}

      {/* <ServiceWhyChoose /> */}

      <FAQs data={industry.faqs} descHTMLString />
    </>
  );
}
