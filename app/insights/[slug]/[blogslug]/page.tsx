import { useLocale } from "next-intl";

interface InsightDetailProps {
  params: { slug: string };
}

export default function InsightInnerDetail({ params }: InsightDetailProps) {
  const decodedString = decodeURIComponent(params.slug);
  const locale = useLocale();

  return (
    <>
      <section
        className="flex md:flex-row flex-col h-auto py-5 px-4 align-center bg-gradient-to-r from-slate-200 via-sky-100 to-indigo-300 shadow-md rounded-lg mb-6"
        style={{ alignItems: "center" }}
      >
        Insight Inner Detail Page
      </section>
    </>
  );
}
