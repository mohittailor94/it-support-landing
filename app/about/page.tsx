import dynamic from "next/dynamic";
import OurExpertise from "./_components/OurExperties";
import OurAchievements from "./_components/OurAchievements";
import WhyChooseUS from "./_components/WhyChooseUs";
import AboutFAQs from "./_components/AboutFAQs";
import WhoWeAre from "./_components/WhoWeAre";
import OurHistory from "./_components/OurHistory";
import OurMission from "./_components/OurMission";
import OurVision from "./_components/OurVision";

const OurCoreValues = dynamic(
  () => import("@/app/about/_components/OurCoreValues"),
  {
    loading: () => <p>Loading…</p>,
  }
);

export default function About() {
  return (
    <>
      <WhoWeAre/>
      <OurHistory/>
      <OurMission/>
      <OurVision/>
      <OurCoreValues/>
      <OurExpertise/>
      <OurAchievements/>
      <WhyChooseUS/>
      <AboutFAQs/>
    </>
  );
}

