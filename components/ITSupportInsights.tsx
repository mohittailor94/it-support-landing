import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ITSupportInsights() {
  const t = useTranslations("Insights");

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("latestTitle")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("latestIntro")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <article
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  alt={t("article.imageAlt")}
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover"
                  sizes="100vw"
                  height={192}
                  width={384}
                  src="/_next/image?url=%2Fassets%2Fserviceshero.png&amp;w=3840&amp;q=75"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: 0,
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t("article.category")}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  <span className="cursor-pointer">{t("article.title")}</span>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {t("article.desc")}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>ITSupport.net.in</span>
                  <span>{t("article.readTime")}</span>
                </div>
                <div className="mt-4 text-xs text-gray-400">
                  {t("article.published")}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <span className="cursor-pointer inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
            {t("viewAll")}
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}
