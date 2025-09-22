import InfoCardSection from "@/components/cards/InfoCardSection";
import { useTranslations } from "next-intl";

export default function OurCoreValues() {
  const t = useTranslations("CoreValues");

  const cards = [
    { title: t("customer.title"), desc: t("customer.desc") },
    { title: t("reliability.title"), desc: t("reliability.desc") },
    { title: t("innovation.title"), desc: t("innovation.desc") },
    { title: t("integrity.title"), desc: t("integrity.desc") },
    { title: t("excellence.title"), desc: t("excellence.desc") },
  ];

  return <InfoCardSection title={t("title")} cards={cards} />;
}
