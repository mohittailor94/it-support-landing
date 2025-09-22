import Link from "next/link";

import CoreServiceCard from "./cards/CoreServiceCard";
import { useLocale, useTranslations } from "next-intl";
import { servicesMenuItem } from "@/utils/constant/defaultNavLinks";
import { servicesMenuItemEs } from "@/utils/constant/defaultNavLinksES";

export default function OurCoreServices() {
  const t = useTranslations("CoreServices");
  const locale = useLocale();

  // Select data based on locale
  const outCoreData = locale === "es" ? servicesMenuItemEs : servicesMenuItem;

  return (
    <section id="services" className="py-16 bg-[#f4f7fa]">
      <div className="sm:px-6 md:px-40  py-10 px-4">
        <div className="section-heading">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center pb-4"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            {t("title")}
          </h2>
          <div className="bar w-[90px] h-[5px] bg-[#61CE70]/50 mx-auto  mb-12 relative rounded-full"></div>
          <p
            className="text-lg text-center text-gray-700 mb-12 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration="700"
          >
            {t("intro.prefix")}
            <a
              href="https://it-support-landing.vercel.app"
              className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300"
            >
              ITSupport.net.in
            </a>
            {t("intro.suffix")}
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {outCoreData.map((core, index) => (
            <CoreServiceCard
              key={`ourCoreService-${core.label}-${index}`}
              label={core.label}
              desc={core.desc}
              icon={core.icon}
              href={core.href}
              dataAos="fade-up"
              dataAosDelay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
