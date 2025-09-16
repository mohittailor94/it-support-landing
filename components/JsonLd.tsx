import Script from "next/script";

interface JsonLdProps {
  data: object[];
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <>
      {data.map((item, i) => (
        <Script
          key={i}
          id={`json-ld-${i}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
