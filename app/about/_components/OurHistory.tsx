import Typography from '@/components/ui/Typography';
import { useTranslations } from 'next-intl';
import React from 'react'

export default function OurHistory() {
    const t = useTranslations("About");
 return (
     <section
       className="flex md:flex-row flex-col h-auto py-8 px-5 align-center bg-white shadow-md rounded-lg mb-6"
       style={{ alignItems: "center" }}
     >
       <div className="w-full px-4">
         <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
           <div className="rounded-2xl overflow-hidden shadow-2xl">
             <img
               alt="Our History"
               title="Our History"
               loading="lazy"
               width="600"
               height="400"
               decoding="async"
               data-nimg="1"
               className="object-cover w-full h-[400px] rounded-4xl"
               sizes="(max-width: 768px) 100vw, 50vw"
               src={
                  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
                }
               style={{ color: "transparent" }}
             />
           </div>
           <div>
             <Typography variant="h3" className="font-bold text-gray-900 mb-4">
              {t("OurHistory.title")}{" "}
               <span className="text-[#61CE70]">
                 {t("OurHistory.highlight")}
               </span>
             </Typography>
             <h3 className="text-3xl font-bold text-gray-900 mb-6"></h3>
             <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {t.rich("OurHistory.description1", {
                b: (chunks) => (
                  <strong className="">{chunks}</strong>
                ),
              })}
             </p>
             <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {t.rich("OurHistory.description2", {
                b: (chunks) => (
                  <strong className="">{chunks}</strong>
                ),
              })}
             </p>
           </div>
         </div>
       </div>
     </section>
   );
}
