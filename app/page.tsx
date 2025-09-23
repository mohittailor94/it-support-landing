import dynamic from "next/dynamic";
import Image from "next/image";

import WelcomeComponent from "@/components/WelcomeComponent";
import OurCoreServices from "@/components/OurCoreServices";
import { useLocale } from "next-intl";
import {
  HomeScreenFAQData,
  HomeScreenFAQDataEs,
} from "@/utils/constant/FAQData";

const FAQs = dynamic(() => import("@/components/FAQ/FAQs"), {
  loading: () => <p>Loading…</p>,
});
const IndustriesWeServe = dynamic(
  () => import("@/components/IndustriesWeServe"),
  {
    loading: () => <p>Loading…</p>,
  }
);
const ITSupportInsights = dynamic(
  () => import("@/components/ITSupportInsights"),
  {
    loading: () => <p>Loading…</p>,
  }
);
const OurCommitment = dynamic(() => import("@/components/OurCommitment"), {
  loading: () => <p>Loading…</p>,
});
const OurGlobalPresence = dynamic(
  () => import("@/components/OurGlobalPresence"),
  {
    loading: () => <p>Loading…</p>,
  }
);
const WhyChoose = dynamic(() => import("@/components/WhyChoose"), {
  loading: () => <p>Loading…</p>,
});
const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"), {
  loading: () => <p>Loading…</p>,
});

export default function Home() {
  const locale = useLocale();

  const FAQsData = locale === "es" ? HomeScreenFAQDataEs : HomeScreenFAQData;

  return (
    <>
      <section className="hero-section">
        <WelcomeComponent />
      </section>
      <section className="our-service-section relative">
        <div className="shape2 shape absolute top-[50px] right-[20px] lg:top-[150px] lg:right-[150px] xl:top-[150px] xl:right-[150px] sm:top-[50ppx] sm:right-[80px] animate-[spin_3s_linear_infinite]" >
          {/* Use a public asset (available at /assets) */}
          <Image src="/assets/shape1.svg" alt="shape" width={24} height={24}/>
        </div>
        <div className="shape2 shape absolute top-[50px] left-[20px] lg:top-[150px] lg:left-[150px] xl:top-[150px] xl:left-[150px] sm:top-[50ppx] sm:left-[80px] animate-[spin_6s_linear_infinite]" >
          {/* Use a public asset (available at /assets) */}
          <Image src="/assets/shape2.svg" alt="shape" width={30} height={30}/>
        </div>
        <OurCoreServices />
        <div className="shape2 hidden xl:block shape absolute bottom-[150px] left-[100px] animate-[spin_5s_linear_infinite]" >
          {/* Use a public asset (available at /assets) */}
          <Image src="/assets/shape1.svg" alt="shape" width={24} height={24}/>
        </div>
      </section>
      <section className="industries-section">
        <IndustriesWeServe />
      </section>
      <section className="global-presence-section relative">
      <div className="shape2 shape absolute top-[150px] left-[100px] top-bottom-animation" >
          {/* Use a public asset (available at /assets) */}
          <Image src="/assets/shape3.svg" alt="shape" width={40} height={40}/>
        </div>
        <OurGlobalPresence />
        <div className="shape2 shape absolute bottom-[150px] right-[150px] top-bottom-right-animation" >
          {/* Use a public asset (available at /assets) */}
          <Image src="/assets/shape3.svg" alt="shape" width={40} height={40}/>
        </div>
      </section>
      <section className="why-choose-section">
        <WhyChoose />
      </section>
      <section className="our-commitment-section">
        <OurCommitment />
      </section>
      <section className="it-support-insights-section relative">
      <div className="shape2 shape absolute top-[100px] left-[100px] rounded-full shadow-md h-[80px] w-[80px] bg-gradient-to-r from-[#61CE70] to-blue-500  flip-animation  hidden xl:block" >
          {/* Use a public asset (available at /assets) */}
          
        </div>
        <ITSupportInsights />
        <div className="shape2 shape absolute bottom-[150px] right-[150px] top-bottom-right-animation" >
          {/* Use a public asset (available at /assets) */}
          <Image src="/assets/shape3.svg" alt="shape" width={40} height={40}/>
        </div>
      </section>
      <section className="faq-section relative">
        <FAQs data={FAQsData} />
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

      <ScrollToTop />
    </>
  );
}
