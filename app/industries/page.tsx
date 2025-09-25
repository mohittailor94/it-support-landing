import outCoreData, { outCoreDataEs } from "@/utils/constant/outCoreData";

import { useLocale, useTranslations } from "next-intl";

import "aos/dist/aos.css";
import IndustriesWhyChoose, {
  whyChooseIndustriesDataDetail,
} from "./_component/IndustriesWhyChoose";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import HeroSection from "@/components/HeroSection";
import ServiceWhyChoose from "../services/_component/ServiceWhyChoose";
export default function Industries() {
  const locale = useLocale();
  const t = useTranslations("IndustriesPage");
  // const heroServices = locale === "es" ? heroServicesDataEs : heroServicesData;
  const outCore = locale === "es" ? outCoreDataEs : outCoreData;

  return (
    <>
      {/* Hero section */}
      <HeroSection
        heroTitle={
          `${t(
            "heroTitle"
          )} <span className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300"> ${t(
            "heroHighlight"
          )}</span> ${t("heroServices")}` || ""
        }
        heroIntro={t("heroIntro1")}
        buttonTexts={[{ label: "Get Support Now" }]}
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
        imageSrc={
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
        }
      />

      {/* Why Choose IT Support section */}
      <section className="why-choose-section">
        <ServiceWhyChoose
          title={`Why Choose <span className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300">ITSupport.net.in</span> for Your Business?`}
          desc={
            "With over a decade of dedicated service and thousands of satisfied customers across India, ITSupport.net.in stands out as the clear choice for all your printer support needs."
          }
          cards={whyChooseIndustriesDataDetail.map(card => ({
            svg: card.icon, // assuming icon is the svg
            title: card.title,
            desc: card.description // map description to desc
          }))}
        />
      </section>

      <section className="industries-section">
        <IndustriesWeServe />
      </section>
    </>
  );
}
