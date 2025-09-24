// DetailPageHighlightsSection

import React from "react";

// import SpecificIssueList from "./_components/SpecificIssueList";
import Typography from "./ui/Typography";
import ServiceCard from "@/app/services/[slug]/_components/ServiceCard";
import IssueCategory from "@/app/services/[slug]/_components/IssueCategory";
import SpecificIssue from "@/app/services/[slug]/_components/SpecificIssue";
import SpecificIssueList from "@/app/services/[slug]/_components/SpecificIssueList";

interface DetailPageHighlightsSectionProps {
  serviceHighlights: {
    title?: string;
    services?: {
      icon: React.ReactNode | string;
      title: string;
      description: string;
    }[];
  };
  serviceHighlightsItems?: string;
  issuecategory: {
    title?: string;
    subTitle?: string;
    issueCategories?: {
      title: string;
      description: string;
      bottomDesc?: string;
      issues?: {
        title: string;
        problemDescription?: string;
        solution?: string;
        type?: string;
        options?: { title: string; desc: string }[];
      }[];
    }[];
    bottomDesc?: string;
  };
  issuecategory2?: {
    title?: string;
    subTitle?: string;
    issueCategories?: {
      title?: string;
      description?: string;
      bottomDesc?: string;
      issues?: {
        title?: string;
        problemDescription?: string;
        solution?: string;
        type?: string;
        options?: { title: string; desc: string }[];
      }[];
    }[];
    bottomDesc?: string;
  };
  issuecategory3?: any;
  issuecategory4?: any;
}

const DetailPageHighlightsSection: React.FC<
  DetailPageHighlightsSectionProps
> = ({
  serviceHighlights,
  serviceHighlightsItems,
  issuecategory,
  issuecategory2,
  issuecategory3,
  issuecategory4,
}) => (
  <section className="px-16 sm:px-6 bg-[#f4f7fa]">
    <div className="w-full px-4">
      <Typography
        variant="h2"
        className="font-bold mb-8 text-center text-gray-800"
      >
        {serviceHighlights.title}
      </Typography>
      {serviceHighlightsItems === "even" ? (
        <div className="flex justify-center w-full">
          <div className="grid md:grid-cols-2 gap-6 mb-4 max-w-6xl">
            {(serviceHighlights?.services ?? []).map((serv, servIndex) => (
              <ServiceCard
                key={`service-service-highlights-service-${servIndex}-${serviceHighlights.title}`}
                icon={
                  typeof serv.icon === "string" ? (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="inline mr-2 text-gray-500"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"></path>
                    </svg>
                  ) : (
                    serv.icon || <></>
                  )
                }
                title={serv.title}
                description={serv.description}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6 mb-4">
          {(serviceHighlights?.services ?? []).map((serv, servIndex) => (
            <ServiceCard
              key={`service-service-highlights-service-${servIndex}-${serviceHighlights.title}`}
              icon={
                typeof serv.icon === "string" ? (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="inline mr-2 text-gray-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"></path>
                  </svg>
                ) : (
                  serv.icon || <></>
                )
              }
              title={serv.title}
              description={serv.description}
            />
          ))}
        </div>
      )}
    </div>

    <div className="py-8 w-full px-4">
      <Typography
        variant="h2"
        className="font-bold mb-8 text-center text-gray-800"
      >
        {issuecategory.title}
      </Typography>
      {issuecategory.subTitle && (
        <Typography
          variant="p"
          className="text-gray-600 mb-8 text-center max-w-5xl mx-auto"
          htmlString={issuecategory.subTitle}
        />
      )}

      {(issuecategory?.issueCategories ?? []).map((cat) => (
        <div
          className="space-y-12 mt-12 flex justify-center"
          key={`service-issue-category-${cat.title}`}
        >
          <IssueCategory
            title={cat.title}
            description={cat.description}
            bottomDesc={cat.bottomDesc}
          >
            {cat?.issues?.map((catIssue) =>
              catIssue.type === "list" ? (
                <SpecificIssueList
                  key={`service-issue-category-categories-${cat.title}-${catIssue.title}`}
                  title={catIssue.title}
                  options={catIssue.options || []}
                />
              ) : (
                <SpecificIssue
                  key={`service-issue-category-categories-${cat.title}-${catIssue.title}`}
                  title={catIssue.title}
                  problemDescription={catIssue.problemDescription}
                  solution={catIssue.solution}
                />
              )
            )}
          </IssueCategory>
        </div>
      ))}
      {issuecategory.bottomDesc && (
        <Typography
          variant="p"
          className="text-gray-600 mb-8 text-center max-w-5xl mx-auto"
        >
          {issuecategory.bottomDesc}
        </Typography>
      )}
    </div>

    {issuecategory2 && (
      <div className="py-8 w-full px-4">
        <Typography
          variant="h2"
          className="font-bold mb-8 text-center text-gray-800"
        >
          {issuecategory2.title}
        </Typography>
        {issuecategory2.subTitle && (
          <Typography
            variant="p"
            className="text-gray-600 mb-8 text-center max-w-5xl mx-auto"
            htmlString={issuecategory2.subTitle}
          />
        )}

        {(issuecategory2?.issueCategories || []).map((cat) => (
          <div
            className="space-y-12 mt-12 flex justify-center"
            key={`service-issue-category-${cat.title}`}
          >
            <IssueCategory
              title={cat?.title || ""}
              description={cat.description}
              bottomDesc={cat.bottomDesc}
            >
              {(cat?.issues || []).map((catIssue) =>
                catIssue.type === "list" ? (
                  <SpecificIssueList
                    key={`service-issue-category-categories-${cat.title}-${catIssue.title}`}
                    title={catIssue.title || ""}
                    options={catIssue.options || []}
                  />
                ) : (
                  <SpecificIssue
                    key={`service-issue-category-categories-${cat.title}-${catIssue.title}`}
                    title={catIssue.title || ""}
                    problemDescription={catIssue.problemDescription}
                    solution={catIssue.solution}
                  />
                )
              )}
            </IssueCategory>
          </div>
        ))}
        <Typography
          variant="p"
          className="text-gray-600 mb-8 text-center max-w-5xl mx-auto"
        >
          {issuecategory.bottomDesc}
        </Typography>
      </div>
    )}

    {issuecategory3 && (
      <div className="py-8 w-full px-4">
        <Typography
          variant="h2"
          className="font-bold mb-8 text-center text-gray-800"
        >
          {issuecategory3?.title}
        </Typography>
        {issuecategory3?.subTitle && (
          <Typography
            variant="p"
            className="text-gray-600 mb-8 text-center max-w-5xl mx-auto"
            htmlString={issuecategory3?.subTitle || ""}
          />
        )}

        {issuecategory3?.issueCategories.map((cat: any) => (
          <div
            className="space-y-12 mt-12 flex justify-center"
            key={`service-issue-category-${cat.title}`}
          >
            <IssueCategory
              title={cat.title}
              description={cat.description}
              bottomDesc={cat.bottomDesc}
            >
              {cat?.issues?.map((catIssue: any) =>
                catIssue.type === "list" ? (
                  <SpecificIssueList
                    key={`service-issue-category-categories-${cat.title}-${catIssue.title}`}
                    title={catIssue.title}
                    options={catIssue.options || []}
                  />
                ) : (
                  <SpecificIssue
                    key={`service-issue-category-categories-${cat.title}-${catIssue.title}`}
                    title={catIssue.title}
                    problemDescription={catIssue.problemDescription}
                    solution={catIssue.solution}
                  />
                )
              )}
            </IssueCategory>
          </div>
        ))}
        {issuecategory3?.bottomDesc && (
          <Typography
            variant="p"
            className="text-gray-600 mb-8 text-center max-w-5xl mx-auto"
          >
            {issuecategory3?.bottomDesc}
          </Typography>
        )}
      </div>
    )}

    {issuecategory4 && (
      <div className="py-8 w-full px-4">
        <Typography
          variant="h2"
          className="font-bold mb-8 text-center text-gray-800"
        >
          {issuecategory4?.title}
        </Typography>
        {issuecategory4?.subTitle && (
          <Typography
            variant="p"
            className="text-gray-600 mb-8 text-center max-w-5xl mx-auto"
            htmlString={issuecategory4?.subTitle || ""}
          />
        )}

        {issuecategory4?.issueCategories.map((cat: any) => (
          <div
            className="space-y-12 mt-12 flex justify-center"
            key={`service-issue-category-${cat.title}`}
          >
            <IssueCategory
              title={cat.title}
              description={cat.description}
              bottomDesc={cat.bottomDesc}
            >
              {cat?.issues?.map((catIssue: any) =>
                catIssue.type === "list" ? (
                  <SpecificIssueList
                    key={`service-issue-category-categories-${cat.title}-${catIssue.title}`}
                    title={catIssue.title}
                    options={catIssue.options || []}
                  />
                ) : (
                  <SpecificIssue
                    key={`service-issue-category-categories-${cat.title}-${catIssue.title}`}
                    title={catIssue.title}
                    problemDescription={catIssue.problemDescription}
                    solution={catIssue.solution}
                  />
                )
              )}
            </IssueCategory>
          </div>
        ))}
        {issuecategory4?.bottomDesc && (
          <Typography
            variant="p"
            className="text-gray-600 mb-8 text-center max-w-5xl mx-auto"
          >
            {issuecategory4?.bottomDesc}
          </Typography>
        )}
      </div>
    )}
  </section>
);

export default DetailPageHighlightsSection;
