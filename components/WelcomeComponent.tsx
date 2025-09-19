import { useTranslations } from "next-intl";

import Link from "next/link";

export default function WelcomeComponent() {
  const t = useTranslations("Welcome");

  return (
    <section className="flex md:flex-row flex-col h-auto py-5 px-4 bg-gradient-to-b from-[#f8fafc] to-white">
      <div
        className="flex flex-col h-full justify-center mb-5"
        style={{ opacity: 1, transform: "none" }}
      >
        <h1
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center leading-tight"
          style={{ opacity: 1, transform: "none" }}
        >
          {t("welcome")}{" "}
          <a
            href="https://it-support-landing.vercel.app"
            className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300"
          >
            {" "}
            ITSupport.net.in
          </a>
        </h1>
        <p
          className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
          style={{ opacity: 1, transform: "none" }}
        >
          {t("intro1.prefix")}{" "}
          <a
            href="https://it-support-landing.vercel.app"
            className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300"
          >
            {" "}
            ITSupport.net.in
          </a>{" "}
          {t("intro1.suffix")}
        </p>
        <p
          className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mt-6"
          style={{ opacity: 1, transform: "none" }}
        >
          {t("intro2")}
        </p>
        <div
          className="flex w-full justify-center md:justify-baseline mt-5"
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
              {t("exploreServices")}
              <svg
                className="w-5 h-5 text-white group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>
      <div
        className="w-full h-full p-2.5 flex rounded-4xl"
        style={{ opacity: 1, transform: "none" }}
      >
        <video
          className="w-full h-full object-contain rounded-4xl"
          src="https://d3euc6irt3la1j.cloudfront.net/it-support-services.mp4"
          muted
          autoPlay={true}
          loop={true}
          playsInline={false}
          preload="auto"
        ></video>
      </div>
    </section>
  );
}
