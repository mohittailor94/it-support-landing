import { useTranslations } from "next-intl";
import Link from "next/link";
import InfoCardSection from "./cards/InfoCardSection";

export default function OurGlobalPresence() {
   const t = useTranslations("GlobalPresence");

  const cards = [
    { title: t("us.title"), desc: t("us.desc") },
    { title: t("uk.title"), desc: t("uk.desc") },
    { title: t("in.title"), desc: t("in.desc") },
    { title: t("au.title"), desc: t("au.desc") },
    { title: t("de.title"), desc: t("de.desc") },
    { title: t("fr.title"), desc: t("fr.desc") },
    { title: t("ca.title"), desc: t("ca.desc") },
  ];

  return (
    <InfoCardSection
      title={t("title")}
      intro={t("intro")}
      cards={cards}
    />
  );
}
