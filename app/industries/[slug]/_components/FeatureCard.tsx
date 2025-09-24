"use client";

import Typography from "@/components/ui/Typography";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex items-start p-6 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="mr-4 mt-1">{icon}</div>
      <div>
        <Typography
          variant="h3"
          className="mb-2 text-gray-800 group-hover:text-[#61CE70] transition-colors duration-300"
        >
          {title}
        </Typography>
        <Typography variant="p" className="text-gray-600">
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default FeatureCard;
