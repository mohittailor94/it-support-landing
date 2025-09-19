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
    <section id="services" className="py-16 px-4 sm:px-6 bg-[#f4f7fa]">
      <div className="max-w-6xl mx-auto" style={{ opacity: 1 }}>
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          style={{ opacity: 1, transform: "none" }}
        >
          {t("title")}
        </h2>
        <p
          className="text-lg text-center text-gray-700 mb-12 max-w-4xl mx-auto"
          style={{ opacity: 1, transform: "none" }}
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
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ opacity: 1 }}
        >
          {outCoreData.map((core, index) => (
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
    </section>
  );
}
