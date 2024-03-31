import { cn } from "@/utils/cn";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn( "w-full", className )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  listOne,
  listTwo,
  header,
}: {
  className?: string;
  title?: string | React.ReactNode;
  listOne?: string | React.ReactNode;
  listTwo?: string | React.ReactNode;
  listThree?: string | React.ReactNode;
  listFour?: string | React.ReactNode;
  listFive?: string | React.ReactNode;
  header?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-full h-full bg-[#1B1A1E] border border-[#ffffff23] p-6 rounded-2xl z-10",
        className
      )}
    >
      <h4 className="flex items-center justify-center w-[80px] h-[50px] font-semibold border border-[#ffffff36] rounded-full text-[25px] mb-5">
        {header}
      </h4>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="text-[22px] font-bold text-white dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <ul className="font-sans font-normal text-white text-xs dark:text-neutral-300 flex flex-col gap-3 mt-4">
          <li className="text-[16px] text-white dark:text-neutral-300">
            {listOne}
          </li>
          <li className="text-[16px] text-white dark:text-neutral-300">
            {listTwo}
          </li>
        </ul>
      </div>
    </div>
  );
};
