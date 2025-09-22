"use client";

import defaultNavLinks from "@/utils/constant/defaultNavLinks";
import defaultNavLinksES from "@/utils/constant/defaultNavLinksES";
import Link from "next/link";
import { ReactNode, useState } from "react";

interface HeaderNavItemProps {
  navItems?: Array<{
    label: string;
    href: string;
    submenu?: Array<{ label: string; href: string; icon?: React.ReactNode }>;
    icon?: React.ReactNode;
  }>;
  contactLabel?: string;
  contactHref?: string;
}

export default function HeaderNavItem({
  navItems = defaultNavLinks,
}: HeaderNavItemProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const getSubMenuItem = (
    item: {
      label: any;
      href?: string;
      submenu?:
        | { label: string; href: string; icon?: React.ReactNode }[]
        | undefined;
      icon?: ReactNode;
    },
    sub: {
      label: string;
      href: string;
      icon?: React.ReactNode;
    }
  ) => {
    return (
      <Link
        href={sub.href}
        className="flex items-center gap-3 px-4 py-2 border-b hover:text-[#61CE70] transition cursor-pointer"
        key={`submenu-${sub.href}`}
      >
        <span>
          {sub.icon ? (
            sub.icon
          ) : (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              className="inline mr-2 text-blue-500"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"></path>
            </svg>
          )}
        </span>
        <span>{sub.label}</span>
      </Link>
    );
  };

  return (
    <div className="flex items-center space-x-2 justify-center">
      {navItems.map((item, index) =>
        item.submenu?.length ? (
          <div
            className="relative group"
            key={`navItems-${item.href}`}
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            <Link
              className="flex items-center px-2 py-2 text-blue-700 hover:text-[#61CE70] font-semibold transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-90"
              href={item.href}
            >
              {item.label}
              <svg
                className="ml-2 h-4 w-4 transform transition-transform duration-300 rotate-0"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </Link>

            <div
              className={
                openIndex === index
                  ? `absolute left-0 top-full z-40 w-max min-w-[350px] transition-all duration-1000 ease-in-out opacity-100 visible translate-y-0 pointer-events-auto`
                  : `absolute left-0 top-full z-40 w-max min-w-[350px] transition-all duration-1000 ease-in-out opacity-0 invisible -translate-y-2 pointer-events-none`
              }
              style={{
                transitionProperty: "opacity, transform, visibility",
              }}
            >
              <div
                className={`absolute left-0 mt-2 shadow-lg bg-[#f4f7fa] z-50 transition-all duration-200 ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                <div className="absolute -top-5 left-8 md:left-12 z-49">
                  <svg
                    width="40"
                    height="20"
                    viewBox="0 0 40 20"
                    className="block"
                  >
                    <polygon points="20,0 40,20 0,20" fill="#f4f7fa"></polygon>
                  </svg>
                </div>

                {item.submenu &&
                  item.submenu.map((sub) => getSubMenuItem(item, sub))}
              </div>
            </div>
          </div>
        ) : (
          <Link
            className="px-2 py-2 text-blue-700 hover:text-[#61CE70] font-semibold transform transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-90"
            key={`navItems-${item.href}`}
            href={item.href}
          >
            {item.label}
          </Link>
        )
      )}
    </div>
  );
}
