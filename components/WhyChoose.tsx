import { useTranslations } from "next-intl";

export default function WhyChoose() {
  const t = useTranslations("WhyChoose");

  return (
    <section className="py-16 bg-white">
      <div className="md:px-40  py-10" style={{ opacity: 1 }}>
        <section className="section-heading">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="700">
            {t("title.prefix")}
            <a
              href="https://it-support-landing.vercel.app"
              className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300"
            >
              ITSupport.net.in
            </a>
            {t("title.suffix")}
          </h2>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="text-center group"
            style={{ opacity: 1, transform: "scale(0.8)" }}
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration="700"
          >
            <div className="w-16 h-16 bg-[#61CE70] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration="700"
            >
              {/* SVG unchanged */}
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#61CE70] transition-colors duration-300"
             data-aos="fade-up"
             data-aos-delay={100}
             data-aos-duration="700"
             >
              {t("experienced.title")}
            </h3>
            <p className="text-gray-700 text-lg"
               data-aos="fade-up"
               data-aos-delay={100}
               data-aos-duration="700"
            >{t("experienced.desc")}</p>
          </div>
          <div
            className="text-center group"
            style={{ opacity: 1, transform: "scale(0.8)" }}
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration="700"
          >
            <div className="w-16 h-16 bg-[#61CE70] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300"
               data-aos="fade-up"
               data-aos-delay={100}
               data-aos-duration="700"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#61CE70] transition-colors duration-300"
               data-aos="fade-up"
               data-aos-delay={100}
               data-aos-duration="700"
            >
              {t("global.title")}
            </h3>
            <p className="text-gray-700 text-lg"
               data-aos="fade-up"
               data-aos-delay={100}
               data-aos-duration="700"
            >{t("global.desc")}</p>
          </div>
          <div
            className="text-center group"
            style={{ opacity: 1, transform: "scale(0.8)" }}
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration="700"
          >
            <div className="w-16 h-16 bg-[#61CE70] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration="700"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#61CE70] transition-colors duration-300"
               data-aos="fade-up"
               data-aos-delay={100}
               data-aos-duration="700"
            >
              {t("rapid.title")}
            </h3>
            <p className="text-gray-700 text-lg"
               data-aos="fade-up"
               data-aos-delay={100}
               data-aos-duration="700"
            >{t("rapid.desc")}</p>
          </div>
          <div
            className="text-center group"
            style={{ opacity: 1, transform: "scale(0.8)" }}
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration="700"
          >
            <div className="w-16 h-16 bg-[#61CE70] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration="700"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#61CE70] transition-colors duration-300"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration="700"
            >
              {t("comprehensive.title")}
            </h3>
            <p className="text-gray-700 text-lg"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration="700"
            >{t("comprehensive.desc")}</p>
          </div>
          <div
            className="text-center group"
            style={{ opacity: 1, transform: "scale(0.8)" }}
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration="700"
          >
            <div className="w-16 h-16 bg-[#61CE70] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration="700"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#61CE70] transition-colors duration-300"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration="700"
            >
              {t("industry.title")}
            </h3>
            <p className="text-gray-700 text-lg"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration="700"
            >{t("industry.desc")}</p>
          </div>
          <div
            className="text-center group"
            style={{ opacity: 1, transform: "scale(0.8)" }}
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration="700"
          >
            <div className="w-16 h-16 bg-[#61CE70] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration="700" 
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#61CE70] transition-colors duration-300"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration="700"
            >
              {t("customer.title")}
            </h3>
            <p className="text-gray-700 text-lg"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration="700"
            >{t("customer.desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
