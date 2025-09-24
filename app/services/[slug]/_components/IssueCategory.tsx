"use client";

import Typography from "@/components/ui/Typography";
import { ReactNode } from "react";

interface IssueCategoryProps {
  title: string;
  description?: string;
  children?: ReactNode;
  bottomDesc?: string;
}

const IssueCategory = ({
  title,
  description,
  children,
  bottomDesc,
}: IssueCategoryProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 max-w-3xl w-full">
      <div className="p-6">
        {title && (
          <Typography
            variant="h3"
            className="font-semibold mb-3 text-gray-800"
            htmlString={title || ""}
          />
        )}

        {description && (
          <Typography
            variant="p"
            className="text-gray-600 mb-6"
            htmlString={description}
          />
        )}

        <div className="space-y-8">{children}</div>
        <Typography variant="p" className="text-gray-600 mt-4">
          {bottomDesc}
        </Typography>
      </div>
    </div>
  );
};

export default IssueCategory;
