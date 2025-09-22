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
}

export default function FAQs({
  data = HomeScreenFAQData,
}: FAQsProps) {
  const t = useTranslations("FAQs");

  return (
    <section className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto" style={{ opacity: 1 }}>
        <div className="section-heading">
            <h2
              className="text-3xl sm:text-4xl font-bold text-center mb-12"
              style={{ opacity: 1}}
              data-aos="fade-up"
              data-aos-duration="700" 
            >
            {t("title")}
          </h2>
          <div className="bar w-[90px] h-[5px] bg-[#61CE70]/50 mx-auto  mb-12 relative rounded-full"></div>
        </div>
        <div style={{ opacity: 1, transform: "none" }}>
          <section className="my-5">
            {/* <h3 className="mx-auto mb-2 text-blue-700">{t("subtitle")}</h3> */}

            <div className="mx-auto py-2">
              {data.map((faq, index) => (
                <FAQCard {...faq} key={`FAQData-${faq.label}-${index}`} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
