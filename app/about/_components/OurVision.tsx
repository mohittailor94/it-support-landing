import { useTranslations } from 'next-intl';
import React from 'react'

export default function OurVision() {
    const t = useTranslations("About");
    return (
        <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center" style={{ opacity: 1 }}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            {t("OurVision.title")}
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
           {t.rich("OurVision.description", {
                b: (chunks) => (
                  <strong className="">{chunks}</strong>
                ),
              })}
          </p>
        </div>
      </section>
    )
}
