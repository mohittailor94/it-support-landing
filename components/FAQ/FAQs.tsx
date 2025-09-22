import { HomeScreenFAQData } from "@/utils/constant/FAQData";
import FAQCard from "./FAQCard";
import { useTranslations } from "next-intl";

export interface FAQItem {
  label: string;
  desc: string;
  expanded?: boolean;
}

interface FAQsProps {
  data?: FAQItem[];
  title?: string;
  descHTMLString?: boolean;
}

export default function FAQs({
  title,
  data = HomeScreenFAQData,
  descHTMLString = false,
}: FAQsProps) {
  const t = useTranslations("FAQs");

  return (
    <section className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto" style={{ opacity: 1 }}>
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          style={{ opacity: 1, transform: "none" }}
        >
          {title || t("title")}
        </h2>
        <div style={{ opacity: 1, transform: "none" }}>
          <section className="bg-white rounded-lg shadow-md p-8 my-5">
            <h3 className="mx-auto mb-2 text-blue-700">{t("subtitle")}</h3>

            <div className="mx-auto py-2">
              {data.map((faq, index) => (
                <FAQCard
                  {...faq}
                  key={`FAQData-${faq.label}-${index}`}
                  descHTMLString={descHTMLString}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
