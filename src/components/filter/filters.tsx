import { FilterType } from "@/context/tasks/task.context";
import cn from "classnames";
import React from "react";

interface FilterDto {
  title: string;
  qty: number;
  query: FilterType;
}

interface FiltersProps {
  filters: FilterDto[];
  filterSelected?: string;
  onFilterSelected: (query: FilterType) => void;
}

const Filters: React.FC<FiltersProps> = ({
  filters,
  filterSelected,
  onFilterSelected,
}: FiltersProps) => {
  return (
    <div className="flex flex-wrap items-center gap-x-1 gap-y-2 rounded-lg bg-gray-100 p-1.5 dark:bg-gray-900">
      {filters?.map((row, index: number) => {
        const isSelected = filterSelected === row.query;
        return (
          <button
            key={index}
            onClick={() => onFilterSelected(row.query)}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md group hover:text-gray-900 dark:hover:text-white transition-all cursor-pointer",
              {
                "text-gray-500 dark:text-gray-400": !isSelected,
                "text-gray-900 dark:text-white bg-white dark:bg-gray-800":
                  isSelected,
              }
            )}
          >
            {row.title}
            <span
              className={cn(
                "inline-flex rounded-full px-2 py-0.5 text-xs font-semibold leading-normal ",
                {
                  "dark:bg-indigo-500 bg-indigo-500 text-white dark:text-white":
                    isSelected,
                  "bg-white dark:bg-white/[0.03] ": !isSelected,
                }
              )}
            >
              {row.qty}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default Filters;
