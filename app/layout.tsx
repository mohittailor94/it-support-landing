import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";

import "./globals.css";

import { NextIntlClientProvider } from "next-intl";
import Script from "next/script";
// import { usePathname } from "next/navigation";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  const paramsData = await params;

  const lang = paramsData ? "es" : paramsData.locale ?? "en";

  return (
    <html lang={lang ?? "en"}>
      <head>
        <meta
          name="google-site-verification"
          content="qtFAe8aaDuGoFo6mrruPpnZXdrtPG3XDXjDXYtywIP0"
        />

        <Script
          id="tawkto"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/68d0dc2979251e1928fac1ce/1j5nto18h';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `,
          }}
        />
      </head>
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
