import Link from "next/link";
import { useTranslations } from "next-intl";
import GradientCardSection from "./cards/GradientCardSection";

export default function IndustriesWeServe() {
  const t = useTranslations("Industries");

 const cards = [
    { 
      title: t("healthcare.title"), 
      desc: t("healthcare.desc"), 
      className: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-500" 
    },
    { 
      title: t("finance.title"), 
      desc: t("finance.desc"), 
      className: "bg-gradient-to-br from-green-50 to-green-100 border-green-500" 
    },
    { 
      title: t("retail.title"), 
      desc: t("retail.desc"), 
      className: "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-500" 
    },
    { 
      title: t("manufacturing.title"), 
      desc: t("manufacturing.desc"), 
      className: "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-500" 
    },
    { 
      title: t("education.title"), 
      desc: t("education.desc"), 
      className: "bg-gradient-to-br from-red-50 to-red-100 border-red-500" 
    },
    { 
      title: t("professional.title"), 
      desc: t("professional.desc"), 
      className: "bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-500" 
    },
    { 
      title: t("travel.title"), 
      desc: t("travel.desc"), 
      className: "bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-500" 
    },
    { 
      title: t("construction.title"), 
      desc: t("construction.desc"), 
      className: "bg-gradient-to-br from-teal-50 to-teal-100 border-teal-500" 
    },
    { 
      title: t("logistics.title"), 
      desc: t("logistics.desc"), 
      className: "bg-gradient-to-br from-pink-50 to-pink-100 border-pink-500" 
    },
  ];

  return <GradientCardSection title={t("title")} intro={t("intro")} cards={cards} />;
}
