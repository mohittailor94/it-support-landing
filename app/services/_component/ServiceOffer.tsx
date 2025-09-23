import Typography from "@/components/ui/Typography";
import FeatureCard from "../[slug]/_components/FeatureCard";

interface ServiceProvider {
  imageAlt: string;
  imageTitle?: string;
  imageSrc: string;
  title: string;
  highlight?: string;
  description: string;
}

interface HeroService {
  title: string;
  desc: string;
}

interface ServiceOfferProps {
  serviceProvider: ServiceProvider;
  heroServices?: HeroService[];
}

export default function ServiceOffer({ serviceProvider, heroServices }: ServiceOfferProps) {
  return (
    <section
      className="flex md:flex-row flex-col h-auto  align-center bg-white rounded-lg mb-6 py-16 bg-gray-50 sm:px-6 xl:px-40 md:px-10 py-10 px-4"
      style={{ alignItems: "center" }}
    >
      <div className="w-full px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              alt={serviceProvider.imageAlt}
              title={serviceProvider.title}
              loading="lazy"
              width="600"
              height="400"
              decoding="async"
              data-nimg="1"
              className="object-cover w-full h-[400px] rounded-4xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              src={serviceProvider.imageSrc}
              style={{ color: "transparent" }}
            />
          </div>

          <div>
            <Typography variant="h3" className="font-bold text-gray-900 mb-4">
              {serviceProvider.title}{" "}
              <span className="text-[#61CE70]">
                {serviceProvider.highlight}
              </span>
            </Typography>
            <h3 className="text-3xl font-bold text-gray-900 mb-6"></h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {serviceProvider.description}
            </p>
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
      </div>
    </section>
  );
}
