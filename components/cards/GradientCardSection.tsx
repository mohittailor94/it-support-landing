import React from "react";

type Card = {
  title: string;
  desc: string;
  className: string;
};

type GradientCardSectionProps = {
  title: string;
  intro?: React.ReactNode;
  footerIntro?: React.ReactNode;
  cards: Card[];
};

export default function GradientCardSection({ title, intro, footerIntro, cards }:GradientCardSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          {title}
        </h2>
        {intro && (
          <p className="text-lg text-center text-gray-700 mb-12 max-w-4xl mx-auto">
            {intro}
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.className} rounded-lg p-6 border-l-4 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group`}
            >
              <span className="cursor-pointer">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-700 group-hover:text-gray-700 transition-colors duration-300">
                  {card.desc}
                </p>
              </span>
            </div>
          ))}
        </div>
        {footerIntro && (
          <p className="text-lg text-center text-gray-700 mt-12 max-w-4xl mx-auto">
            {footerIntro}
          </p>
        )}
      </div>
    </section>
  );
}
