import { useTranslations } from 'next-intl';
import Link from 'next/link'
import React from 'react'

export default function OurMission() {
    const t = useTranslations("About");
  return (
      <section className="py-16 px-4 sm:px-6 bg-[#f4f7fa]">
      <div className="max-w-4xl mx-auto text-center" style={{ opacity: 1 }}>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          {t("OurMission.title")}
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
         {t("OurMission.description1")}
        </p>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          {t("OurMission.description2")}
        </p>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {t.rich("OurMission.description3", {
            b: (chunks) => <strong className="">{chunks}</strong>
          })}
        </p>
      </div>
    </section>
  )
}
