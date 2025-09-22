"use client";

import { useEffect, useState } from "react";
import parse from "html-react-parser";

export interface FAQCardProps {
  label: string;
  desc: string;
  expanded?: boolean;
  onToggle?: () => void;
  descHTMLString?: boolean;
}

const FAQCard: React.FC<FAQCardProps> = ({
  label,
  desc,
  expanded = true,
  onToggle,
  descHTMLString = false,
}) => {
  const [isExpand, setIsExpand] = useState<boolean>(false);

  useEffect(() => {
    setIsExpand(expanded);
  }, []);

  return (
    <div className="bg-[#f5f8fa] rounded-xl mb-2 shadow-sm border border-[#e6ecf1]">
      <button
        className="w-full text-left px-8 py-2 bg-transparent border-none font-bold text-[1.25rem] text-[#183153] cursor-pointer outline-none flex items-center justify-between"
        aria-expanded="true"
        type="button"
        onClick={() => {
          setIsExpand(!isExpand);
        }}
      >
        <h3>{label}</h3>
        <h3 className="text-[#183153] ml-3">{isExpand ? "-" : "+"} </h3>
      </button>
      <p
        className={
          isExpand
            ? "faq-answer mx-4 bg-white rounded-lg  text-[#4a5a6a] leading-relaxed shadow-sm transition-all duration-300 ease-in-out opacity-100 mb-4 p-6 max-h-[500px] pointer-events-auto"
            : "faq-answer mx-4 bg-white rounded-lg  text-[#4a5a6a] leading-relaxed shadow-sm transition-all duration-300 ease-in-out opacity-0 h-0 pointer-events-none"
        }
        style={{ overflow: "hidden" }}
      >
        {descHTMLString ? parse(desc) : desc}
      </p>
    </div>
  );
};

export default FAQCard;
