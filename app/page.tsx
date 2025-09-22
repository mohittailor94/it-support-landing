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
      <section className="our-service-section">
        <div className="shape2">
          {/* Use a public asset (available at /assets) */}
          {/* <Image src="/assets/shape1.svg" alt="shape" width={24} height={24} priority/> */}
        </div>
        <OurCoreServices />
      </section>
      <section className="industries-section">
        <IndustriesWeServe />
      </section>
      <section className="global-presence-section">
        <OurGlobalPresence />
      </section>
      <section className="why-choose-section">
        <WhyChoose />
      </section>
      <section className="our-commitment-section">
        <OurCommitment />
      </section>
      <section className="it-support-insights-section">
        <ITSupportInsights />
      </section>
      <section className="faq-section">
        <FAQs data={FAQsData} />
      </section>

      <ScrollToTop />
    </>
  );
}
