import Link from "next/link";
import { useTranslations } from "next-intl";

export default function IndustriesWeServe() {
  const t = useTranslations("Industries");

  return (
    <section className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto" style={{ opacity: 1 }}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          {t("title")}
        </h2>
        <p className="text-lg text-center text-gray-700 mb-12 max-w-4xl mx-auto">
          {t("intro")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-500 rounded-lg p-6 border-l-4 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
            <span className="cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                {t("healthcare.title")}
              </h3>
              <p className="text-gray-700 group-hover:text-gray-700 transition-colors duration-300">
                {t("healthcare.desc")}
              </p>
            </span>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 border-green-500 rounded-lg p-6 border-l-4 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
            <span className="cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                {t("finance.title")}
              </h3>
              <p className="text-gray-700 group-hover:text-gray-700 transition-colors duration-300">
                {t("finance.desc")}
              </p>
            </span>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-500 rounded-lg p-6 border-l-4 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
            <span className="cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                {t("retail.title")}
              </h3>
              <p className="text-gray-700 group-hover:text-gray-700 transition-colors duration-300">
                {t("retail.desc")}
              </p>
            </span>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-500 rounded-lg p-6 border-l-4 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
            <span className="cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                {t("manufacturing.title")}
              </h3>
              <p className="text-gray-700 group-hover:text-gray-700 transition-colors duration-300">
                {t("manufacturing.desc")}
              </p>
            </span>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 border-red-500 rounded-lg p-6 border-l-4 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
            <span className="cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                {t("education.title")}
              </h3>
              <p className="text-gray-700 group-hover:text-gray-700 transition-colors duration-300">
                {t("education.desc")}
              </p>
            </span>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-500 rounded-lg p-6 border-l-4 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
            <span className="cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                {t("professional.title")}
              </h3>
              <p className="text-gray-700 group-hover:text-gray-700 transition-colors duration-300">
                {t("professional.desc")}
              </p>
            </span>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-500 rounded-lg p-6 border-l-4 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
            <span className="cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                {t("travel.title")}
              </h3>
              <p className="text-gray-700 group-hover:text-gray-700 transition-colors duration-300">
                {t("travel.desc")}
              </p>
            </span>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 border-teal-500 rounded-lg p-6 border-l-4 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
            <span className="cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                {t("construction.title")}
              </h3>
              <p className="text-gray-700 group-hover:text-gray-700 transition-colors duration-300">
                {t("construction.desc")}
              </p>
            </span>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-500 rounded-lg p-6 border-l-4 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
            <span className="cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                {t("logistics.title")}
              </h3>
              <p className="text-gray-700 group-hover:text-gray-700 transition-colors duration-300">
                {t("logistics.desc")}
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
