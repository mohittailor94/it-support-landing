import ServiceOffer from "@/app/services/_component/ServiceOffer";
import ServiceWhyChoose from "@/app/services/_component/ServiceWhyChoose";
import DetailPageHighlightsSection from "@/components/DetailPageHighlightsSection";
import FAQs from "@/components/FAQ/FAQs";
import HeroSection from "@/components/HeroSection";
import { industryDetailData } from "@/utils/constant/IndustryDetailData";
import { Service as IndustryInterface } from "@/utils/constant/serviceDetailData";
import { useLocale } from "next-intl";

interface IndustryDetailProps {
  params?: { slug: string };
}

export default function IndustryDetail({ params }: IndustryDetailProps) {
  const decodedString = decodeURIComponent(params?.slug || "");
  const locale = useLocale();

  let industry: IndustryInterface = {};

  // if (locale === "es") {
  industry = industryDetailData.find((s) => s.slug === decodedString) || {};
  // } else {
  //   industry = servicesDetailData.find((s) => s.slug === decodedString) || {};
  // }

  if (!industry?.slug) {
    return <div className="p-8">Service not found</div>;
  }

  return (
    <>
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
        serviceHighlightsItems={'even'}
        serviceHighlights={
          industry.serviceHighlights ?? { title: "", services: [] }
        }
        issuecategory2={industry.issuecategory2}
        issuecategory3={industry.issuecategory3}
        issuecategory4={industry.issuecategory4}
      />

      <ServiceWhyChoose />

      <FAQs data={industry.faqs} descHTMLString />
    </>
  );
}
