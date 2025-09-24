import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";

import "./globals.css";

import { NextIntlClientProvider } from "next-intl";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <NextIntlClientProvider>
          <div className="items-center justify-items-center min-h-screen">
            <Header />
            <main className="mt-16 md:mt-20 px-4 sm:px-20 xl:px-40 w-full">
              <div className="min-h-screen flex flex-col text-gray-900 font-[family-name:var(--font-geist-sans)]">
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
