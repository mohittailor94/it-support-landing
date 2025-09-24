import GradientCardSection from "@/components/cards/GradientCardSection";
import { useTranslations } from "next-intl";

export default function OurExpertise() {
  const t = useTranslations("Expertise");

   const richTextComponent = {
    b: (chunks:React.ReactNode) => (
      <strong className="">{chunks}</strong>
    ),
  };
  const cards = [
    {
      title: t("managedIt.title"),
      desc: t("managedIt.desc"),
      className: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-500",
    },
    {
      title: t("network.title"),
      desc: t("network.desc"),
      className: "bg-gradient-to-br from-green-50 to-green-100 border-green-500",
    },
    {
      title: t("cyberSecurity.title"),
      desc: t("cyberSecurity.desc"),
      className: "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-500",
    },
    {
      title: t("cloud.title"),
      desc: t("cloud.desc"),
      className: "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-500",
    },
    {
      title: t("helpDesk.title"),
      desc: t("helpDesk.desc"),
      className: "bg-gradient-to-br from-red-50 to-red-100 border-red-500",
    },
    {
      title: t("itConsulting.title"),
      desc: t("itConsulting.desc"),
      className: "bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-500",
    },
  ];

  return <GradientCardSection title={t("title")} cards={cards} intro={t.rich("intro", richTextComponent)} footerIntro={t.rich("footeIintro", richTextComponent)} />;
}
