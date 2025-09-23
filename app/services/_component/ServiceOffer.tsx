import Typography from "@/components/ui/Typography";
import FeatureCard from "../[slug]/_components/FeatureCard";

interface ServiceProvider {
  imageAlt: string;
  imageTitle?: string;
  imageSrc: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  description?: string;
}

interface HeroService {
  title: string;
  desc: string;
}

interface ServiceOfferProps {
  serviceProvider: ServiceProvider;
  heroServices?: HeroService[];
}

export default function ServiceOffer({
  serviceProvider,
  heroServices,
}: ServiceOfferProps) {
  return (
    <section
      className="flex md:flex-row flex-col h-auto py-8 px-5 align-center bg-white shadow-md rounded-lg mb-6 justify-center"
      style={{ alignItems: "center" }}
    >
      <div className="w-full px-4 text-center">
        <Typography variant="h3" className="font-bold text-gray-900 mb-4">
          {serviceProvider.title}{" "}
          <span className="text-[#61CE70]">{serviceProvider.highlight}</span>
        </Typography>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          {serviceProvider.subtitle}
        </p>
        <div className="items-center w-full flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              alt={serviceProvider.imageAlt}
              title={serviceProvider.title}
              loading="lazy"
              width="1230"
              height="500"
              decoding="async"
              data-nimg="1"
              src={serviceProvider.imageSrc}
              style={{ color: "transparent", width: 1230, height: 500 }}
            />
          </div>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed mt-6">
          {serviceProvider.description}
        </p>

        {Boolean(heroServices?.length) && (
          <div>
            <div className="flex justify-center mt-6">
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl">
                {heroServices?.map((service, index) => (
                  <div
                    key={`hero-services-${service.title}`}
                    className="rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group border border-green-500/50 hover:border-green-500"
                  >
                    <span className="cursor-pointer">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#61CE70] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 text-sm">{service.desc}</p>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
