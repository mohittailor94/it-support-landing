import Link from "next/link";
import { useTranslations } from "next-intl";

export default function OurCommitment() {
  const t = useTranslations("Commitment");

  return (
    <section className="py-16 px-4 sm:px-6 bg-[#f4f7fa]">
      <div className="max-w-4xl mx-auto text-center" style={{ opacity: 1 }}>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          {t("title")}
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          {t("intro.prefix")}
          <Link
            href="/"
            className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300"
          >
            ITSupport.net.in
          </Link>
          {t("intro.suffix")}
        </p>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          {t("mission")}
        </p>
        <div tabIndex={0}>
          <Link
            className="inline-block bg-gradient-to-r from-[#61CE70] to-blue-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            href="/pricing"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}