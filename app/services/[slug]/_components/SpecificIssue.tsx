"use client";

interface SpecificIssueProps {
  title: string;
  problemDescription?: string;
  solution?: string;
}

const SpecificIssue = ({
  title,
  problemDescription,
  solution,
}: SpecificIssueProps) => {
  return (
    <div className="border-t border-gray-100 pt-6 first:border-t-0 first:pt-0">
      <h4 className="text-lg font-medium mb-4 text-gray-800">{title}</h4>
      {problemDescription && (
        <div className="flex items-start mb-5">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0"
            aria-hidden="true"
            data-id=""
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" x2="12" y1="8" y2="12"></line>
            <line x1="12" x2="12.01" y1="16" y2="16"></line>
          </svg>
          <div>
            <p className="font-medium text-gray-800 mb-1">
              Problem Description:
            </p>
            <p className="text-gray-700">{problemDescription}</p>
          </div>
        </div>
      )}

      <div className="flex items-start">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-[#4CD964] mt-1 mr-3 flex-shrink-0"
          aria-hidden="true"
          data-id="element-207"
        >
          <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
          <path d="m9 11 3 3L22 4"></path>
        </svg>
        <div>
          <p className="font-medium text-gray-800 mb-1">Our Solution:</p>
          <p className="text-gray-700">{solution}</p>
        </div>
      </div>
    </div>
  );
};

export default SpecificIssue;
