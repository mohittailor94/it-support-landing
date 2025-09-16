import dynamic from "next/dynamic";

import WelcomeComponent from "@/components/WelcomeComponent";
import OurCoreServices from "@/components/OurCoreServices";

const FAQs = dynamic(() => import("@/components/FAQ/FAQs"), {
  ssr: false,
  loading: () => <p>Loading…</p>,
});
const IndustriesWeServe = dynamic(
  () => import("@/components/IndustriesWeServe"),
  {
    ssr: false,
    loading: () => <p>Loading…</p>,
  }
);
const ITSupportInsights = dynamic(
  () => import("@/components/ITSupportInsights"),
  {
    ssr: false,
    loading: () => <p>Loading…</p>,
  }
);
const OurCommitment = dynamic(() => import("@/components/OurCommitment"), {
  ssr: false,
  loading: () => <p>Loading…</p>,
});
const OurGlobalPresence = dynamic(
  () => import("@/components/OurGlobalPresence"),
  {
    ssr: false,
    loading: () => <p>Loading…</p>,
  }
);
const WhyChoose = dynamic(() => import("@/components/WhyChoose"), {
  ssr: false,
  loading: () => <p>Loading…</p>,
});
const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"), {
  ssr: false,
  loading: () => <p>Loading…</p>,
});

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
