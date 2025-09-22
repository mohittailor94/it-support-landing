import React from "react";
import clsx from "clsx";
import parser from "html-react-parser";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "lead"
  | "small";

interface TypographyProps {
  variant?: Variant;
  className?: string;
  children?: React.ReactNode | string;
  htmlString?: string | any;
}

const variantClasses: Record<Variant, string> = {
  h1: "text-4xl md:text-5xl font-bold xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight",
  h2: "text-3xl md:text-4xl sm:text-4xl font-bold text-center",
  h3: "text-2xl font-semibold",
  h4: "text-xl font-semibold",
  h5: "text-lg font-medium",
  h6: "text-base font-medium",
  p: "text-base sm:text-base text-gray-700 max-w-4xl leading-relaxed",
  span: "text-base sm:text-base",
  lead: "text-lg text-center text-gray-700 mb-12 max-w-4xl mx-auto",
  small: "text-xs text-gray-400",
};

export default function Typography({
  variant = "p",
  className = "",
  children,
  htmlString = "",
}: TypographyProps) {
  const Tag = variant === "lead" ? "p" : variant === "small" ? "span" : variant;

  if (htmlString) {
    return <Tag className={clsx(variantClasses[variant], className)}>
      {parser(htmlString)}
    </Tag>;
  }
  return (
    <Tag className={clsx(variantClasses[variant], className)}>{children}</Tag>
  );
}
