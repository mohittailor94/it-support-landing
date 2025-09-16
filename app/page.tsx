import dynamic from "next/dynamic";

import WelcomeComponent from "@/components/WelcomeComponent";
import OurCoreServices from "@/components/OurCoreServices";

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
  return (
    <>
      <WelcomeComponent />
      <OurCoreServices />
      <IndustriesWeServe />
      <OurGlobalPresence />
      <WhyChoose />
      <OurCommitment />
      <ITSupportInsights />
      <FAQs />

      <ScrollToTop />
    </>
  );
}
