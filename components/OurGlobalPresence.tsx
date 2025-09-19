import { useTranslations } from "next-intl";
import Link from "next/link";

export default function OurGlobalPresence() {
  const t = useTranslations("GlobalPresence");

  return (
    <section className="py-16 px-4 sm:px-6 bg-[#f4f7fa]">
      <div className="max-w-6xl mx-auto" style={{ opacity: 1 }}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          {t("title")}
        </h2>
        <p className="text-lg text-center text-gray-700 mb-12 max-w-4xl mx-auto">
          {t("intro")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
            <span className="cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#61CE70] transition-colors duration-300">
                {t("us.title")}
              </h3>
              <p className="text-gray-700 text-sm">{t("us.desc")}</p>
            </span>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
            <span className="cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#61CE70] transition-colors duration-300">
                {t("uk.title")}
              </h3>
              <p className="text-gray-700 text-sm">{t("uk.desc")}</p>
            </span>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
            <span className="cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#61CE70] transition-colors duration-300">
                {t("in.title")}
              </h3>
              <p className="text-gray-700 text-sm">{t("in.desc")}</p>
            </span>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
            <span className="cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#61CE70] transition-colors duration-300">
                {t("au.title")}
              </h3>
              <p className="text-gray-700 text-sm">{t("au.desc")}</p>
            </span>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
            <span className="cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#61CE70] transition-colors duration-300">
                {t("de.title")}
              </h3>
              <p className="text-gray-700 text-sm">{t("de.desc")}</p>
            </span>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
            <span className="cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#61CE70] transition-colors duration-300">
                {t("fr.title")}
              </h3>
              <p className="text-gray-700 text-sm">{t("fr.desc")}</p>
            </span>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
            <span className="cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#61CE70] transition-colors duration-300">
                {t("ca.title")}
              </h3>
              <p className="text-gray-700 text-sm">{t("ca.desc")}</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
