"use client";

import { useEffect, useState } from "react";
import { NextIntlClientProvider } from "next-intl";

export default function LocaleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const lang = localStorage.getItem("lang") || "en";
    setLocale(lang);

    import(`../messages/${lang}.json`).then((mod) => {
      setMessages(mod.default);
    });
  }, []);

  if (!messages) return null; // or loader/spinner

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
