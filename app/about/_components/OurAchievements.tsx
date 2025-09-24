import React from "react";
import { achievementData, partners } from "./constants";
import { useTranslations } from "next-intl";

export default function OurAchievements() {
  const t = useTranslations("achievement");
  return (
    <section className="py-16 px-4 sm:px-6 bg-[#f4f7fa]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          {t("title")}
        </h2>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl">
            {achievementData.map((achievement, index) => (
              <div
                key={`hero-services-${achievement.title}`}
                className="rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group border border-green-500/50 hover:border-green-500"
              >
                <span className="cursor-pointer">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#61CE70] transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{achievement.desc}</p>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100 mt-10">
      <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">
        Partnerships with leading tech providers
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {partners.map((partner, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="h-12 object-contain mb-2 opacity-80 hover:opacity-100 transition-opacity"
            />
            <p className="text-sm text-gray-600">{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
        <p className="text-lg text-center text-gray-700 mt-12 max-w-4xl mx-auto">
          {t.rich("intro", {
                b: (chunks) => (
                  <strong className="">{chunks}</strong>
                ),
              })}
        </p>
      </div>
    </section>
  );
}
