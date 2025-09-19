import { useLocale } from "next-intl";


export default function InsightDetail() {
  // const decodedString = decodeURIComponent(params.slug);
  const locale = useLocale();

  let service = {};

  // if (locale === "es") {
  //   service = serviceDetailDataEs.find((s) => s.slug === decodedString) || {};
  // } else {
  //   service = servicesDetailData.find((s) => s.slug === decodedString) || {};
  // }

  if (!service) {
    return <div className="p-8">Insight not found</div>;
  }

  return (
    <>
      <section
        className="flex md:flex-row flex-col h-auto py-5 px-4 align-center bg-gradient-to-r from-slate-200 via-sky-100 to-indigo-300 shadow-md rounded-lg mb-6"
        style={{ alignItems: "center" }}
      >
        Insight Detail Page
      </section>
    </>
  );
}