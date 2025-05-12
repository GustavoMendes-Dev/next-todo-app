import React from "react";
import cn from "classnames";
import { Task } from "@/app/types/task";

interface TaskCardProps {
  task: Task;
  onToggle: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onToggle }) => {
  return (
    <div
      onClick={() => onToggle(task.id)}
      className={cn(
        "p-5 border cursor-pointer rounded-xl dark:border-gray-800 dark:bg-white/5",
        {
          "bg-gray-50 border-gray-200": task.is_complete,
          "bg-white border-gray-200 shadow-sm hover:bg-gray-50":
            !task.is_complete,
        }
      )}
    >
      <div className="flex flex-col gap-2 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-center justify-start w-full ">
          <input
            type="checkbox"
            checked={task.is_complete}
            onChange={() => onToggle(task.id)}
            onClick={(e) => e.stopPropagation()}
            className="sr-only"
          />
          <div
            className={cn(
              "flex items-center justify-center w-full h-5 mr-3 border  rounded-md box max-w-5 dark:border-gray-700",
              {
                "border-gray-300": !task.is_complete,
                "border-indigo-500 bg-indigo-500": task.is_complete,
              }
            )}
          >
            <span className={task.is_complete ? "opacity-100" : "opacity-0"}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6668 3.5L5.25016 9.91667L2.3335 7"
                  stroke="white"
                  strokeWidth="1.94437"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </div>
          <span
            className={cn("text-base select-none", {
              " line-through text-gray-400": task.is_complete,
              "text-gray-800": !task.is_complete,
            })}
          >
            {task.title}
          </span>
        </div>
        <div className="flex flex-col-reverse items-start justify-end w-full gap-3 xl:flex-row xl:items-center xl:gap-5">
          <div className="flex items-center justify-between w-full gap-5 xl:w-auto xl:justify-normal">
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "select-none flex items-center gap-1 text-sm cursor-pointer ",
                  {
                    "text-gray-800 dark:text-gray-400": !task.is_complete,
                    "text-gray-400 dark:text-gray-400": task.is_complete,
                  }
                )}
              >
                <svg
                  className="fill-current"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.33329 1.0835C5.74751 1.0835 6.08329 1.41928 6.08329 1.8335V2.25016L9.91663 2.25016V1.8335C9.91663 1.41928 10.2524 1.0835 10.6666 1.0835C11.0808 1.0835 11.4166 1.41928 11.4166 1.8335V2.25016L12.3333 2.25016C13.2998 2.25016 14.0833 3.03366 14.0833 4.00016V6.00016L14.0833 12.6668C14.0833 13.6333 13.2998 14.4168 12.3333 14.4168L3.66663 14.4168C2.70013 14.4168 1.91663 13.6333 1.91663 12.6668L1.91663 6.00016L1.91663 4.00016C1.91663 3.03366 2.70013 2.25016 3.66663 2.25016L4.58329 2.25016V1.8335C4.58329 1.41928 4.91908 1.0835 5.33329 1.0835ZM5.33329 3.75016L3.66663 3.75016C3.52855 3.75016 3.41663 3.86209 3.41663 4.00016V5.25016L12.5833 5.25016V4.00016C12.5833 3.86209 12.4714 3.75016 12.3333 3.75016L10.6666 3.75016L5.33329 3.75016ZM12.5833 6.75016L3.41663 6.75016L3.41663 12.6668C3.41663 12.8049 3.52855 12.9168 3.66663 12.9168L12.3333 12.9168C12.4714 12.9168 12.5833 12.8049 12.5833 12.6668L12.5833 6.75016Z"
                    fill=""
                  ></path>
                </svg>
                09 de jan
              </span>
            </div>

            <span className="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
