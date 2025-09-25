import React from "react";
import parse from "html-react-parser";

export type Card = {
  svg: React.ReactNode;
  title: string;
  desc: string;
};

type IconCardSectionProps = {
  title: string;
  desc?: string;
  titleLinkHref?: string;
  titleLinkText?: string;
  cards: Card[];
  isColor?: boolean;
};
export default function IconCardSection({
  title,
  desc,
  titleLinkHref,
  titleLinkText,
  cards,
  isColor = false,
}: IconCardSectionProps) {
  return (
    <section
      className={`py-16 px-4 sm:px-6 ${isColor ? "bg-gray-50" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          {parse(title)}
          {titleLinkText && (
            <a
              href={titleLinkHref}
              className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300"
            >
              {" "}
              {titleLinkText}
            </a>
          )}
        </h2>
        {desc && (
          <p className="text-lg text-center text-gray-700 mb-12 max-w-4xl mx-auto">
            {desc}
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-8 gap:3">
          {cards?.map((card, index) => (
            <div
              key={index}
              className="text-center group"
              style={{ opacity: 1, transform: "scale(0.8)" }}
            >
              <div className="w-16 h-16 bg-[#61CE70] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300">
                {card.svg}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#61CE70] transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-gray-700">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
