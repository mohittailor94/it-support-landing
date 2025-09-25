"use client";

interface SpecificIssueListProps {
  title: string;
  options: { title: string; desc: string }[];
  problemDescription?: string;
  solution?: string;
}

const SpecificIssueList = ({
  title,
  options,
}: SpecificIssueListProps) => {
  return (
    <div className="border-t border-gray-100 pt-6 first:border-t-0 first:pt-0">
      <h4 className="text-lg font-medium mb-4 text-gray-800">{title}</h4>

      {options &&
        options.map((option, index) => (
          <div className="flex items-start mb-2" key={`specific-issue-list-${option.title}-${index}`}>
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
              <p className="font-bold text-gray-800 mb-1">{option.title}</p>
              <p className="text-gray-700">{option.desc}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SpecificIssueList;
