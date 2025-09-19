import { useLocale } from "next-intl";

export default function CookiesPage() {
  // const decodedString = decodeURIComponent(params.slug);
  const locale = useLocale();

  return (
    <>
      <section
        className="flex md:flex-row flex-col h-auto py-5 px-4 align-center bg-gradient-to-r from-slate-200 via-sky-100 to-indigo-300 shadow-md rounded-lg mb-6"
        style={{ alignItems: "center" }}
      >
        This is the cookies page
      </section>
    </>
  );
}