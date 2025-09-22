'use client';
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Link from "next/link";

export default function WelcomeComponent() {
  const t = useTranslations("Welcome");

  useEffect(() => {
    AOS.init({ duration: 750, easing: "ease-out", once: true, offset: 80 });
  }, []);

  return (
    <section className="relative flex md:flex-row flex-col items-center h-auto  px-4 sm:px-6 md:px-40  py-10 px-4  overflow-hidden">
      {/* Decorative background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#61CE70]/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl"
      />
      <div
        className="flex flex-col h-full justify-center mb-8 md:mb-5 items-start max-w-3xl w-full"
         data-aos="fade-right"
      >
        <h1
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-left leading-tight"
          data-aos="fade-in"
        >
          {t("welcome")} {" "}
          <a
            href="https://it-support-landing.vercel.app"
            className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300"
          >
            {" "}
            ITSupport.net.in
          </a>
        </h1>
        <p
          className="text-lg sm:text-xl text-gray-700 max-w-3xl leading-relaxed text-left"
          data-aos="fade-in"
          data-aos-delay="100"
        >
          {t("intro1.prefix")} {" "}
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
          className="text-lg sm:text-xl text-gray-700 max-w-3xl leading-relaxed mt-6 text-left"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          {t("intro2")}
        </p>
        <div
          className="flex w-full justify-start mt-6"
          data-aos="fade-in"
          data-aos-delay="300"
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
        className="w-full h-full p-2.5 md:pl-8 flex rounded-4xl"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <video
          className="w-full h-full object-cover rounded-3xl shadow-xl ring-1 ring-black/5"
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
