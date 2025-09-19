import CoreServiceCard from "@/components/cards/CoreServiceCard";
import Typography from "@/components/ui/Typography";
import outCoreData, { outCoreDataEs } from "@/utils/constant/outCoreData";
import Link from "next/link";
import ServiceWhyChoose from "./_component/ServiceWhyChoose";
import FAQs from "@/components/FAQ/FAQs";
import { useLocale, useTranslations } from "next-intl";
import {
  heroServicesData,
  heroServicesDataEs,
  ServiceFQAsData,
  ServiceFQAsDataEs,
} from "./_component/constant";

export default function Services() {
  const locale = useLocale();
  const t = useTranslations("Services");
  const heroServices = locale === "es" ? heroServicesDataEs : heroServicesData;
  const outCore = locale === "es" ? outCoreDataEs : outCoreData;
  const serviceFQA = locale === "es" ? ServiceFQAsDataEs : ServiceFQAsData;

  return (
    <>
      <section
        className="flex md:flex-row flex-col h-auto py-8 px-5 align-center bg-gradient-to-r from-slate-200 via-sky-100 to-indigo-300 shadow-md rounded-lg mb-6"
        style={{ alignItems: "center" }}
      >
        <div className="w-full px-4">
          <div className="flex flex-col md:flex-row w-full justify-center">
            <div
              className="flex flex-col justify-center items-center h-full w-full"
              style={{ opacity: 1, transform: "none", height: "inherit" }}
            >
              <Typography
                className="mb-4 leading-tight w-full text-center"
                variant="h1"
              >
                {t("heroTitle")}{" "}
                <span className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300">
                  {t("heroHighlight")}
                </span>{" "}
                {t("heroServices")}
              </Typography>
              <Typography
                variant="p"
                className="text-gray-700 max-w-4xl leading-relaxed w-full text-center mb-4"
              >
                {t("heroIntro1")}{" "}
                <span className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300">
                  ITSupport.net.in
                </span>
                {t("heroIntro2")}
              </Typography>

              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl">
                {heroServices.map((service, index) => (
                  <div
                    key={`hero-services-${service.title}`}
                    className="rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group border border-green-500/50 hover:border-green-500"
                  >
                    <span className="cursor-pointer">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#61CE70] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 text-sm">{service.desc}</p>
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="flex w-full md:justify-baseline mt-5 justify-center"
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
                    {t("getSupportNow")}
                  </span>
                </Link>
              </div>
              <div className="delay-1000 animate-fill-forwards w-full mt-6 justify-center flex">
                <div className="flex items-center gap-2 text-xs">
                  <span>{t("breadcrumbHome")}</span>
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
                  <span>{t("breadcrumbServices")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <ServiceWhyChoose />
      <FAQs data={serviceFQA} />
    </>
  );
}
