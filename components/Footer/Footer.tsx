import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import footerServicesLinks, {
  footerServicesLinksEs,
} from "@/utils/constant/footerServicesLinks";
import footerSocialIconLinks from "@/utils/constant/footerSocialIconLinks";
import FooterLinkList, { FooterLink } from "./FooterLinkList";
import Image from "next/image";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("Footer");
  const newDate = new Date();
  const currentYear = newDate.getFullYear();

  const footerServices =
    locale === "es" ? footerServicesLinksEs : footerServicesLinks;

  return (
    <footer className="flex flex-col items-center justify-center w-full md:justify-around bg-gray-900 text-white sm:px-6 md:px-40 lg:px-40 xl:px-40">
      <div className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <div className="text-center md:text-left mb-6">
              <Link className="inline-block" href="/">
                <Image
                  alt="it-support-logo"
                  loading="lazy"
                  width="250"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  className="w-full h-full"
                  src="/_next/image?url=%2Fit-support-logo.webp&amp;w=640&amp;q=75"
                />
              </Link>
              <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                {t("description")}
              </p>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-sky-400 transition-colors">
                <span className="text-sky-400">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="text-lg"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                  </svg>
                </span>
                <a
                  className="text-sm hover:text-sky-400 transition-colors"
                  href="tel:+15551234567"
                >
                  {t("phone")}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-sky-400 transition-colors">
                <span className="text-sky-400">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="text-lg"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                  </svg>
                </span>
                <a
                  className="text-sm hover:text-sky-400 transition-colors"
                  href="mailto:support@itsupport.com"
                >
                  {t("email")}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-sky-400 transition-colors">
                <span className="text-sky-400">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 384 512"
                    className="text-lg"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                  </svg>
                </span>
                <a
                  className="text-sm hover:text-sky-400 transition-colors"
                  href="#"
                >
                  {t("address")}
                </a>
              </div>
            </div>
          </div>

          {footerServices &&
            footerServices.length > 0 &&
            footerServices.map((section, index) => (
              <FooterLinkList
                key={`servicesLinks-${section.href}`}
                titleHref={section.href}
                title={section.label}
                links={section.links as FooterLink[]}
              />
            ))}
        </div>
      </div>

      <div className="w-full border-t border-gray-800">
        <div className="px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-lg"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm117.134 346.753c-1.592 1.867-39.776 45.731-109.851 45.731-84.692 0-144.484-63.26-144.484-145.567 0-81.303 62.004-143.401 143.762-143.401 66.957 0 101.965 37.315 103.422 38.904a12 12 0 0 1 1.238 14.623l-22.38 34.655c-4.049 6.267-12.774 7.351-18.234 2.295-.233-.214-26.529-23.88-61.88-23.88-46.116 0-73.916 33.575-73.916 76.082 0 39.602 25.514 79.692 74.277 79.692 38.697 0 65.28-28.338 65.544-28.625 5.132-5.565 14.059-5.033 18.508 1.053l24.547 33.572a12.001 12.001 0 0 1-.553 14.866z"></path>
              </svg>
              <span>
                {currentYear} {t("copyright")}
              </span>
            </div>
            <div className="flex space-x-6 text-sm">
              <span className="text-gray-400 hover:text-sky-400 transition-colors cursor-pointer">
                {t("privacyPolicy")}
              </span>
              <span className="text-gray-400 hover:text-sky-400 transition-colors cursor-pointer">
                {t("termsOfService")}
              </span>
              <span className="cursor-pointer text-gray-400 hover:text-sky-400 transition-colors">
                {t("cookiePolicy")}
              </span>
              <a
                className="text-gray-400 hover:text-sky-400 transition-colors"
                href="/sitemap.xml"
              >
                {t("sitemap")}
              </a>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
              {footerSocialIconLinks &&
                footerSocialIconLinks.map((social) => (
                  <a
                    className="text-gray-400 hover:text-sky-400 transition-colors duration-300 hover:scale-110"
                    aria-label={social.label}
                    href={social.href}
                    key={`socialIcon-${social.href}-${social.label}`}
                  >
                    <span
                      dangerouslySetInnerHTML={{ __html: social.icon }}
                    ></span>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
