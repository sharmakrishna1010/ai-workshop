import React, { type ReactNode } from "react";

interface WorkshopDetail {
  id: number;
  icon: ReactNode;
  primaryText: string;
  secondaryText: string;
}

interface WorkshopDetailCardProps {
  workshopDetails: WorkshopDetail[];
}

export const WorkshopDetailCard: React.FC<WorkshopDetailCardProps> = ({
  workshopDetails,
}) => {
  return (
    <>
      {workshopDetails.map((detail) => (
        <div
          key={detail.id}
          className="flex gap-4 bg-white border border-gray-100 shadow-sm hover:bg-amber-50 transition-colors p-3 items-center rounded-2xl w-full cursor-default"
        >
          <div className="bg-amber-100 rounded-2xl min-w-12 h-12 flex items-center justify-center">
            {detail.icon}
          </div>
          <div className="flex flex-col">
            <div className=" text-gray-900 text-sm leading-tight">
              {detail.primaryText}
            </div>
            <div className="text-gray-500 text-xs font-semibold tracking-wider mt-1">
              {detail.secondaryText}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
