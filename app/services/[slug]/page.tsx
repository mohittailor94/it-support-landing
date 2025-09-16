import FAQCard from "@/components/FAQ/FAQCard";
import { servicesDetailData } from "@/utils/constant/serviceDetailData";

interface Props {
  params: { slug: string };
}

export default function ServiceDetail({ params }: Props) {
  const service = servicesDetailData.find((s) => s.slug === params.slug);

  if (!service) {
    return <div className="p-8">Service not found</div>;
  }

  return (
    <section className="h-auto py-5 px-4 bg-gradient-to-b from-[#f8fafc] to-white">
      <div
        className="flex flex-col h-full justify-center mb-5 w-full"
        style={{ opacity: 1, transform: "none" }}
      >
        <h1
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center leading-tight"
          style={{ opacity: 1, transform: "none" }}
        >
          Welcome to{" "}
          <span className="text-[#61CE70] hover:text-[#4CAF50] transition-colors duration-300">
            {service.title}
          </span>{" "}
          Service
        </h1>
        <p
          className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
          style={{ opacity: 1, transform: "none" }}
        >
          {service.description}
        </p>
        <div className="max-w-6xl mx-auto mt-1">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2"
            style={{ opacity: 1 }}
          >
            {service.features.map((feature, idx) => (
              <div
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
                key={`service-features-${feature}-idx-${idx}`}
                style={{ opacity: 1, transform: "none" }}
              >
                <p className="text-gray-700 text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mb-5 w-full">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
          alt="Service illustration 1"
          className="rounded-lg shadow-md w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80"
          alt="Service illustration 2"
          className="rounded-lg shadow-md w-full object-cover"
        />
      </div>

      <section className="p-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto" style={{ opacity: 1 }}>
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            style={{ opacity: 1, transform: "none" }}
          >
            Frequently Asked Questions (FAQs)
          </h2>
          <div style={{ opacity: 1, transform: "none" }}>
            <section className="bg-white rounded-lg shadow-md p-8 my-5">
              <h3 className="mx-auto mb-2 text-blue-700">
                Frequently Asked Questions
              </h3>

              <div className="mx-auto py-2">
                {service.faqs.map((faq, index) => (
                  <FAQCard
                    label={faq.question}
                    desc={faq.answer}
                    key={`FAQData-${faq.question}-${index}`}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </section>
  );
}
