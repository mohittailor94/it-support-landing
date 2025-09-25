import React from "react";
import parse from "html-react-parser";
import Typography from "./ui/Typography";

interface HeroSectionProps {
  heroTitle: string;
  heroIntro: string;
  buttonTexts?: { label: string; href?: string }[];
  breadcrumbs?: { home: string; services?: string }[];
  imageSrc?: string;
  rightSideIcons?: any[];
}

const HeroSection: React.FC<HeroSectionProps> = ({
  heroTitle,
  heroIntro,
  buttonTexts = [],
  breadcrumbs = [],
  imageSrc,
  rightSideIcons = [],
}) => {
  return (
    <section
      className="flex md:flex-row flex-col h-auto py-5 px-4 align-center shadow-md rounded-lg mb-6"
      style={{
        alignItems: "center",
        background:
          "linear-gradient(135deg, #001731 0%, #00426F 50%, #0D76B1 100%)",
      }}
    >
      <div className="w-full px-4">
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* Left side text */}
          <div
            className="flex flex-col justify-center items-center h-full w-full md:w-1/2 relative"
            style={{ opacity: 1, transform: "none", height: "inherit" }}
          >
            <Typography
              className="leading-tight w-full text-left font-bold text-white"
              variant="h1"
            >
              {parse(heroTitle)}
            </Typography>

            <Typography
              className="mt-6 md:mb-4 leading-tight w-full text-left font-bold text-white"
              variant="h2"
            >
              {parse(heroIntro)}
            </Typography>

            {/* Button */}
            {buttonTexts.length > 0 && (
              <div className="flex justify-start w-full align-center flex-wrap gap-4 items-center mt-9 md:mb-9 xl:mb-0 mb-4">
                {buttonTexts.map((ctm, index) => (
                  <a
                    className="p-2 inline-block bg-gradient-to-r from-[#61CE70] via-blue-500 to-[#61CE70] text-white rounded-full font-extrabold shadow-xl hover:from-blue-500 hover:to-[#61CE70] hover:scale-105 transition-all duration-300 text-lg sm:text-xl tracking-wide group "
                    href={ctm.href || "#"}
                    key={`ctm-buttons-${ctm.label}-${index}-${ctm.href}`}
                  >
                    <Typography
                      variant="p"
                      className="inline-flex items-center gap-2 text-white"
                    >
                      {ctm.label}
                    </Typography>
                  </a>
                ))}
              </div>
            )}

            {/* Breadcrumb */}
            {breadcrumbs.length > 0 && (
              <div className="delay-1000 animate-fill-forwards w-full mt-6 md:absolute bottom-0 font-bold text-white">
                <div className="flex items-center gap-2 text-xs">
                  {breadcrumbs.map((breadcrumb, index) => (
                    <>
                      {Boolean(index) && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-arrow-right w-4 h-4"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      )}
                      <span>{parse(breadcrumb.home)}</span>
                    </>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right side image */}
          <div
            className="w-full h-full flex rounded-lg md:w-1/2"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="relative w-full">
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg z-10">
                {rightSideIcons[0] ? (
                  rightSideIcons[0]
                ) : (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 640 512"
                    className="w-6 h-6 text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
                  </svg>
                )}
              </div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg z-10">
                {rightSideIcons[1] ? (
                  rightSideIcons[1]
                ) : (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 640 512"
                    className="w-6 h-6 text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
                  </svg>
                )}
              </div>
              <div className="relative bg-gradient-to-br from-white/20 to-white/5 rounded-2xl backdrop-blur-lg border border-white/20 shadow-2xl overflow-hidden p-4">
                <img
                  alt="Real Estate"
                  loading="lazy"
                  width="1920"
                  height="1080"
                  decoding="async"
                  data-nimg="1"
                  className="w-full h-auto rounded-xl"
                  style={{ color: "transparent" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={imageSrc}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
