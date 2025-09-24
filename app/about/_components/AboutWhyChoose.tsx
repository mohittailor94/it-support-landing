import IconCardSection, { Card } from "@/components/cards/IconCardSection";

export type WhyChooseProps = {
  cards: Card[];
  title: string;
};

export default function AboutWhyChoose({ cards, title }: WhyChooseProps) {
  return (
    <IconCardSection
      title={title}
      titleLinkHref="https://it-support-landing.vercel.app"
      titleLinkText="ITSupport.net.in"
      cards={cards}
      isColor
    />
  );
}
