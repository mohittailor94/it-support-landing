"use client";

import Typography from "@/components/ui/Typography";
import { ReactNode } from "react";

interface IssueCategoryProps {
  title: string;
  description: string;
  children?: ReactNode;
}

const IssueCategory = ({
  title,
  description,
  children,
}: IssueCategoryProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 max-w-3xl w-full">
      <div className="p-6">
        <Typography variant="h3" className="font-semibold mb-3 text-gray-800">
          {title}
        </Typography>
        <Typography variant="p" className="text-gray-600 mb-6">
          {description}
        </Typography>
        <div className="space-y-8">{children}</div>
      </div>
    </div>
  );
};

export default IssueCategory;
