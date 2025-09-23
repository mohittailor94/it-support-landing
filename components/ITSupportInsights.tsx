import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ITSupportInsights() {
  const t = useTranslations("Insights");

  return (
    <section className="lg:py-16 bg-gray-50">
      <div className="sm:px-6 xl:px-40 md:px-10 py-10 px-4">
        <div className="section-heading text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" data-aos="fade-up"
          data-aos-duration="700">
            {t("latestTitle")}
          </h2>
          <div className="bar w-[90px] h-[5px] bg-[#61CE70]/50 mx-auto  mb-6  relative rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up"
          data-aos-delay={100}
          data-aos-duration="700">
            {t("latestIntro")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration="700">
          {[1, 2, 3].map((i) => (
            <article
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-60">
                <Image
                  alt={t("article.imageAlt")}
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover"
                  sizes="100vw"
                  height={192}
                  width={384}
                  src="/assets/web-development.webp"
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
        <div className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay={200}
          data-aos-duration="700"
        >
          <span className="cursor-pointer inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 text-white font-bold rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:from-indigo-500 hover:to-teal-400 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 group text-sm md:text-base transition-colors">
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
