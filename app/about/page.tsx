import dynamic from "next/dynamic";
import OurExpertise from "./_components/OurExperties";
import OurAchievements from "./_components/OurAchievements";
import WhyChooseUS from "./_components/WhyChooseUs";
import AboutFAQs from "./_components/AboutFAQs";

const OurCoreValues = dynamic(
  () => import("@/app/about/_components/OurCoreValues"),
  {
    loading: () => <p>Loading…</p>,
  }
);

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-[family-name:var(--font-geist-sans)]">
      <OurCoreValues/>
      <OurExpertise/>
      <OurAchievements/>
      <WhyChooseUS/>
      <AboutFAQs/>
    </div>
  );
}

