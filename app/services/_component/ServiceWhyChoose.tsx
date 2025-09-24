import IconCardSection, { Card } from "@/components/cards/IconCardSection";

export type WhyChooseProps = {
  cards: Card[];
  title: string;
  desc: string;
};

export default function ServiceWhyChoose({
  cards,
  title,
  desc,
}: WhyChooseProps) {
  return <IconCardSection title={title} cards={cards} desc={desc} isColor />;
}
