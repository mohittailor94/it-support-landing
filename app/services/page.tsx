import { useLocale, useTranslations } from "next-intl";
import { Globe, Server } from "lucide-react";

import CoreServiceCard from "@/components/cards/CoreServiceCard";
import Typography from "@/components/ui/Typography";
import outCoreData, { outCoreDataEs } from "@/utils/constant/outCoreData";
import ServiceWhyChoose from "./_component/ServiceWhyChoose";
import FAQs from "@/components/FAQ/FAQs";
import {
  heroServicesData,
  heroServicesDataEs,
  ServiceFQAsData,
  ServiceFQAsDataEs,
} from "./_component/constant";
import ServiceOffer from "./_component/ServiceOffer";
import HeroSection from "@/components/HeroSection";
import { whyChooseDataDetail } from "./_component/ServiceWhyChooseConstant";

export default function Services() {
  const locale = useLocale();
  const t = useTranslations("Services");
  const heroServices = locale === "es" ? heroServicesDataEs : heroServicesData;
  const outCore = locale === "es" ? outCoreDataEs : outCoreData;
  const serviceFQA = locale === "es" ? ServiceFQAsDataEs : ServiceFQAsData;
  console.log("heroServices");

  const serviceProvider = {
    imageAlt: t("ServiceProvider.imageAlt"),
    imageTitle: t("ServiceProvider.imageTitle"),
    imageSrc:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    title: t("ServiceProvider.title"),
    highlight: t("ServiceProvider.highlight"),
    subtitle: t("ServiceProvider.description"),
  };

  return (
    <>
      <HeroSection
        heroTitle={`${t(
          "heroTitle"
        )} <span class="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300">${t(
          "heroHighlight"
        )}</span> ${t("heroServices")}`}
        heroIntro={`${t(
          "heroIntro1"
        )} <span className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300"> ITSupport.net.in </span> ${t(
          "heroIntro2"
        )}`}
        rightSideIcons={[
          <Globe className="w-6 h-6 text-white" />,
          <Server className="w-6 h-6 text-white" />,
        ]}
        buttonTexts={[{ label: "Explore Service", href: "#" }]}
        breadcrumbs={[{ home: "Home" }, { home: "Services" }]}
        imageSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
      />

      <ServiceOffer
        serviceProvider={serviceProvider}
        heroServices={heroServices}
      />

      <section className="py-16 px-4 sm:px-6 bg-[#f4f7fa]">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="w-full p-4">
            <div className="text-center mb-16">
              <span className="inline-block bg-gradient-to-r from-[#61CE70] via-blue-500 to-[#61CE70] text-white px-1 py-1 sm:px-1 sm:py-1 rounded-full font-semibold shadow-xl text-xs tracking-wide group mb-4">
                {t("coreServices")}
              </span>

              <Typography variant="h2" className="font-bold text-gray-900 mb-4">
                {t("reliableITSupport")}{" "}
                <span className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300">
                  {t("reliableHighlight")}
                </span>{" "}
                {t("forEveryBusinessStage")}
              </Typography>

              <p className="text-lg text-center text-gray-700 mb-12 max-w-4xl mx-auto">
                {t("comprehensiveRange1")}{" "}
                <span className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300">
                  ITSupport.net.in
                </span>{" "}
                {t("comprehensiveRange2")}
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              style={{ opacity: 1 }}
            >
              {outCore.map((core, index) => (
                <CoreServiceCard
                  key={`ourCoreService-${core.label}-${index}`}
                  label={core.label}
                  desc={core.desc}
                  icon={core.icon}
                  href={core.href}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceWhyChoose
        cards={whyChooseDataDetail}
        title="Why Partner with ITSupport.net.in for Email Excellence"
        desc="Choosing ITSupport.net.in as your email support partner means leveraging over a decade of specialized expertise and a global track record of empowering 100,000+ satisfied customers. Our commitment to your uninterrupted communication is built on"
      />
      <FAQs data={serviceFQA} />
    </>
  );
}
