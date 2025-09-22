import Link from "next/link";
import React from "react";

interface CoreServiceCardProps {
  label?: string;
  desc?: string;
  icon?: string | React.ReactNode;
  href?: string;
  children?: React.ReactNode;
  dataAos?: string;
  dataAosDelay?: number;
}

export default function CoreServiceCard({
  label,
  desc,
  icon,
  href,
  children,
  dataAos,
  dataAosDelay,
}: CoreServiceCardProps) {
  if (children) {
    return (
      <div
        className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
        data-aos={dataAos}
        data-aos-delay={dataAosDelay}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <Link href={href || "/"} className="cursor-pointer">
        <div className="flex items-center mb-4">
          {icon && icon}
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#61CE70] transition-colors duration-300">
            {label}
          </h3>
        </div>
        <p className="text-gray-700">{desc}</p>
      </Link>
    </div>
  );
}
