import Head from "next/head";

import FAQs from "@/components/FAQ/FAQs";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import ITSupportInsights from "@/components/ITSupportInsights";
import OurCommitment from "@/components/OurCommitment";
import OurCoreServices from "@/components/OurCoreServices";
import OurGlobalPresence from "@/components/OurGlobalPresence";
import ScrollToTop from "@/components/ScrollToTop";
import WelcomeComponent from "@/components/WelcomeComponent";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-white text-gray-900 font-[family-name:var(--font-geist-sans)]">
        <WelcomeComponent />
        <OurCoreServices />
        <IndustriesWeServe />
        <OurGlobalPresence />
        <WhyChoose />
        <OurCommitment />
        <ITSupportInsights />
        <FAQs />

        <ScrollToTop />
      </div>
    </>
  );
}
