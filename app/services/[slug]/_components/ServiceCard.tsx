"use cliet";

import Typography from "@/components/ui/Typography";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
      <div className="mb-4">{icon}</div>
      <Typography
        variant="h3"
        className="font-semibold mb-2 text-gray-800 group-hover:text-[#61CE70] transition-colors duration-300"
      >
        {title}
      </Typography>
      <Typography className="text-gray-600" variant="p">
        {description}
      </Typography>
    </div>
  );
};

export default ServiceCard;
