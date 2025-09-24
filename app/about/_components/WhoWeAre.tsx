import Typography from "@/components/ui/Typography";
import { useTranslations } from "next-intl";
import React from "react";

export default function WhoWeAre() {
  const t = useTranslations("About");
  return (
    <section
      className="flex md:flex-row flex-col h-auto py-5 px-4 align-center bg-gradient-to-r from-slate-200 via-sky-100 to-indigo-300 shadow-md rounded-lg mb-6"
      style={{ alignItems: "center" }}
    >
      <div className="w-full px-4">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div
            className="flex flex-col justify-center items-center h-full w-full md:w-2/5 relative"
            style={{ opacity: 1, transform: "none", height: "inherit" }}
          >
            <Typography
              className="mb-4 leading-tight w-full text-left"
              variant="h1"
            >
              {t("heroTitle")}{" "}
              <span className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300">
                {t("heroHighlight")}
              </span>{" "}
            </Typography>
            <p className="text-base sm:text-base leading-relaxed text-gray-700 max-w-4xl w-full text-left mb-4">
              {t.rich("heroIntro1", {
                b: (chunks) => (
                  <strong className="">{chunks}</strong>
                ),
              })}{" "}
              <span className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300">
                ITSupport.net.in
              </span>{" "}
              {t.rich("heroIntro2", {
                b: (chunks) => (
                  <strong className="">{chunks}</strong>
                ),
              })}
            </p>
            <p className="text-base sm:text-base leading-relaxed text-gray-700 max-w-4xl w-full text-left mb-4">
              {t.rich("heroIntro3", {
                b: (chunks) => (
                  <strong className="">{chunks}</strong>
                ),
              })}
            </p>
          </div>
          <div
            className="w-full h-full p-16 flex rounded-4xl md:w-3/5"
            style={{ opacity: 1, transform: "none" }}
          >
            <img
              className="w-full h-full object-contain rounded-4xl"
              src={
                "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
              }
              alt="Service illustration 1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
