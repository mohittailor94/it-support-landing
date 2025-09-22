import React from "react";

type Card = {
  title: string;
  desc: string;
};

type InfoCardSectionProps = {
  title: string;
  intro?: string;
  cards: Card[];
}

export default function InfoCardSection({ title, intro, cards } : InfoCardSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 bg-[#f4f7fa]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          {title}
        </h2>
        {intro && (
          <p className="text-lg text-center text-gray-700 mb-12 max-w-4xl mx-auto">
            {intro}
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <span className="cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#61CE70] transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-700 text-sm">{card.desc}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}