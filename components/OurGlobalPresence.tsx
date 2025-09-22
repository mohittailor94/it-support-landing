import { useTranslations } from "next-intl";
import Link from "next/link";

export default function OurGlobalPresence() {
  const t = useTranslations("GlobalPresence");

  return (
    <section className="py-16 bg-[#f4f7fa]">
      <div className="md:px-40  py-10" style={{ opacity: 1 }}>
        <div className="section-heading">
          <h2 className="text-3xl sm:text-4xl font-bold text-center pb-4"
           data-aos="fade-up"
           data-aos-duration="700">
            {t("title")}
          </h2>
          <div className="bar w-[90px] h-[5px] bg-[#61CE70]/50 mx-auto  mb-12 relative rounded-full"></div>
          <p className="text-lg text-center text-gray-700 mb-12 max-w-4xl mx-auto" data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration="700">
            {t("intro")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
           data-aos="fade-up"
           data-aos-delay={100}
            data-aos-duration="700"
          >
            <span className="cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#61CE70] transition-colors duration-300">
                {t("us.title")}
              </h3>
              <p className="text-gray-700">{t("us.desc")}</p>
            </span>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration="700"
          >
            <span className="cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#61CE70] transition-colors duration-300">
                {t("uk.title")}
              </h3>
              <p className="text-gray-700">{t("uk.desc")}</p>
            </span>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration="700"
          >
            <span className="cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#61CE70] transition-colors duration-300">
                {t("in.title")}
              </h3>
              <p className="text-gray-700">{t("in.desc")}</p>
            </span>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration="700"
          >
            <span className="cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#61CE70] transition-colors duration-300">
                {t("au.title")}
              </h3>
              <p className="text-gray-700">{t("au.desc")}</p>
            </span>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration="700"
          >
            <span className="cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#61CE70] transition-colors duration-300">
                {t("de.title")}
              </h3>
              <p className="text-gray-700">{t("de.desc")}</p>
            </span>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration="700"
          >
            <span className="cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#61CE70] transition-colors duration-300">
                {t("fr.title")}
              </h3>
              <p className="text-gray-700">{t("fr.desc")}</p>
            </span>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration="700"
          >
            <span className="cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#61CE70] transition-colors duration-300">
                {t("ca.title")}
              </h3>
              <p className="text-gray-700">{t("ca.desc")}</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
