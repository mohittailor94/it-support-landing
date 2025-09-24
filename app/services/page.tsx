"use client"; 
import CoreServiceCard from "@/components/cards/CoreServiceCard";
import Typography from "@/components/ui/Typography";
import outCoreData, { outCoreDataEs } from "@/utils/constant/outCoreData";
import Link from "next/link";
import ServiceWhyChoose from "./_component/ServiceWhyChoose";
import FAQs from "@/components/FAQ/FAQs";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect } from "react";
import {
  heroServicesData,
  heroServicesDataEs,
  ServiceFQAsData,
  ServiceFQAsDataEs,
} from "./_component/constant";
import ServiceOffer from "./_component/ServiceOffer";
import AOS from "aos";
import "aos/dist/aos.css";

  

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 750, easing: "ease-out", once: true, offset: 80 });
  }, []);

  const locale = useLocale();
  const t = useTranslations("Services");
  const heroServices = locale === "es" ? heroServicesDataEs : heroServicesData;
  const outCore = locale === "es" ? outCoreDataEs : outCoreData;
  const serviceFQA = locale === "es" ? ServiceFQAsDataEs : ServiceFQAsData;
  console.log("heroServices");
  const serviceProvider = {
    imageAlt: t("ServiceProvider.imageAlt"),
    imageTitle: t("ServiceProvider.imageTitle"),
    imageSrc:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    title: t("ServiceProvider.title"),
    highlight: t("ServiceProvider.highlight"),
    description: t("ServiceProvider.description"),
  };

  return (
    <>
      <section
        className="flex md:flex-row flex-col h-auto py-5 px-4 align-center bg-gradient-to-r from-slate-200 via-sky-100 to-indigo-300 shadow-md  mb-0 sm:px-6 xl:px-40 md:px-10 py-10 px-4"
        style={{ alignItems: "center" }}
      >
        <div className="w-full lg:pe-4">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            
            <div className="flex flex-col justify-center items-center w-full md:w-2/5 relative h-[inherit]" data-aos="fade-right" data-aos-delay="200">
              <Typography
                className="mb-4 leading-tight w-full text-left"
                variant="h1"
              >
                {t("heroTitle")}{" "}
                <span className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300">
                  {t("heroHighlight")}
                </span>{" "}
                {t("heroServices")}
              </Typography>
              <p className="text-lg sm:text-xl text-gray-700 max-w-4xl leading-relaxed w-full text-left mb-4">
                {t("heroIntro1")}{" "}
                <span className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300">
                  ITSupport.net.in
                </span>
                {t("heroIntro2")}
              </p>

              <div
                className="flex w-full md:justify-baseline mt-5"
                style={{ opacity: 1, transform: "none" }}
              >
                <Link
                  className="inline-block bg-gradient-to-r from-[#61CE70] via-blue-500 to-[#61CE70] text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full font-extrabold shadow-xl hover:from-blue-500 hover:to-[#61CE70] hover:scale-105 transition-all duration-300 text-lg sm:text-xl tracking-wide ring-2 ring-[#61CE70] hover:ring-4 focus:outline-none focus:ring-4 focus:ring-[#61CE70]/60 group"
                  href="/services"
                  style={{
                    boxShadow:
                      "rgba(97, 206, 112, 0.25) 0px 8px 32px 0px, rgba(10, 25, 47, 0.1) 0px 1.5px 8px 0px",
                    letterSpacing: "0.04em",
                  }}
                >
                  <span className="inline-flex items-center gap-2">
                    {t("getSupportNow")} <svg className="w-5 h-5 text-white group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </span>
                  
                </Link>
              </div>
              <div
                className="delay-1000 animate-fill-forwards w-full mt-6 absolute"
                style={{ position: "absolute", bottom: 60 }}
              >
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-lg">Home</span>
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
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                  <span className="text-lg">Services</span>
                </div>
              </div>
            </div>
            <div
              className="w-full h-full lg:py-16 flex rounded-4xl md:w-3/5"             
              data-aos="fade-left"
              data-aos-delay="200"    
            >
              <img
                className="w-full h-full object-contain rounded-4xl"
                src={
                  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
                }
                alt="Service illustration 1"
              />
            </div>
          </div>
        </div>
      </section>


      
      <section className="service-provider">
      <ServiceOffer
        serviceProvider={serviceProvider}
        heroServices={heroServices}
      />
        </section>          
     

      <section className="lg:py-16 bg-[#f4f7fa] relative sm:px-6 xl:px-40 md:px-10 py-10 px-4">
        <div className="flex flex-col md:flex-row gap-4 w-full">
           <div className="shape2 shape absolute top-[50px] right-[20px] lg:top-[150px] lg:right-[150px] xl:top-[150px] xl:right-[150px] sm:top-[50ppx] sm:right-[80px] animate-[spin_3s_linear_infinite]" >
            {/* Use a public asset (available at /assets) */}
            <Image src="/assets/shape1.svg" alt="shape" width={24} height={24}/>
          </div>
          <div className="shape2 shape absolute top-[50px] left-[20px] lg:top-[150px] lg:left-[150px] xl:top-[150px] xl:left-[150px] sm:top-[50ppx] sm:left-[80px] animate-[spin_6s_linear_infinite]" >
            {/* Use a public asset (available at /assets) */}
            <Image src="/assets/shape2.svg" alt="shape" width={30} height={30}/>
          </div>
          <div className="w-full p-4">
            <div className="text-center mb-16">
              
              <div className="section-heading">
                <span className="inline-block bg-gradient-to-r from-[#61CE70] via-blue-500 to-[#61CE70] text-white px-1 py-1 sm:px-1 sm:py-1 rounded-full font-semibold shadow-xl text-xs tracking-wide group mb-4"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration="700">
                  {t("coreServices")}
                </span>
                {/* <Typography variant="h2" className="font-bold text-gray-900 mb-4"
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-offset="200">
                  {t("reliableITSupport")}{" "}
                  <span className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300">
                    {t("reliableHighlight")}
                  </span>{" "}
                  {t("forEveryBusinessStage")}
                </Typography> */}
                <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-center mb-lg-12 mb-6"
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-offset="200">
                  {t("reliableITSupport")}{" "}
                  <span className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300">
                    {t("reliableHighlight")}
                  </span>{" "}
                  {t("forEveryBusinessStage")}
                </h2>
                <div className="bar w-[90px] h-[5px] bg-[#61CE70]/50 mx-auto  mb-lg-12 mb-6 relative rounded-full"></div>
                <p className="text-lg text-center text-gray-700 mb-12 max-w-4xl mx-auto"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration="700">
                  {t("comprehensiveRange1")}{" "}
                  <span className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300">
                    ITSupport.net.in
                  </span>{" "}
                  {t("comprehensiveRange2")}
                </p>
              </div>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              style={{ opacity: 1 }}
            >
              {outCore.map((core, index) => (
                <CoreServiceCard
                  key={`ourCoreService-${core.label}-${index}`}
                  label={core.label}
                  desc={core.desc}
                  icon={core.icon}
                  href={core.href}
                  dataAos="fade-up"
                  dataAosDelay={index * 100}
                />
              ))}
            </div>
          </div>
          <div className="shape2 hidden xl:block shape absolute bottom-[150px] left-[100px] animate-[spin_5s_linear_infinite]" >
            {/* Use a public asset (available at /assets) */}
            <Image src="/assets/shape1.svg" alt="shape" width={24} height={24}/>
          </div>
        </div>
      </section>
      <section className="why-choose-section">
        <ServiceWhyChoose />
      </section>
      

      <section className="faq-section relative">
      <FAQs data={serviceFQA} />
        <div className="absolute bottom-[0px] right-0" >
          <svg width="250" height="250" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="2" fill="#61CE70" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
      </section>
    </>
  );
}
