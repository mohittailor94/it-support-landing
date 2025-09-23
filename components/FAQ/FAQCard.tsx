"use client";

import { useEffect, useState } from "react";
//import parse from "html-react-parser";

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
    <div className=" rounded-xl mb-5 shadow-md border border-[#e6ecf1]" 
      data-aos="fade-up"
      data-aos-duration="700"
    >
      <button
        className="w-full text-left px-6 py-4 bg-transparent border-none font-medium text-[1.25rem] text-[#183153] cursor-pointer outline-none flex items-center justify-between"
        aria-expanded="true"
        type="button"
        onClick={() => {
          setIsExpand(!isExpand);
        }}
      >
        <h3>{label}</h3>
        <h3 className="text-[#183153] text-xl  ml-3">{isExpand ? "-" : "+"} </h3>
      </button>
      <p
        className={
          isExpand
            ? "faq-answer text-md  text-[#4a5a6a] leading-relaxed transition-all duration-300 ease-in-out border-top-1 opacity-100 mb-0 pt-0 p-6 max-h-[500px] pointer-events-auto"
            : "faq-answer text-md   text-[#4a5a6a] leading-relaxed transition-all duration-300 ease-in-out opacity-0 pt-0 h-0 pointer-events-none"
        }
        style={{ overflow: "hidden" }}
      >
        {descHTMLString ? parse(desc) : desc}
      </p>
    </div>
  );
};

export default FAQCard;
