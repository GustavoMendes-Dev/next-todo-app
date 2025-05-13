import React from "react";
import cn from "classnames";
import { Task } from "@/types/task";
import { formatDate } from "@/helpers/format-date";

interface TaskCardProps {
  task: Task;
  onToggle: (taskId: string) => void;
  onRemove: (taskId: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onToggle, onRemove }) => {
  return (
    <div
      className={cn(
        "py-3 px-5 border rounded-xl dark:border-gray-800 dark:bg-white/5 dark:hover:bg-white/5",
        {
          "bg-gray-50 border-gray-200": task.is_complete,
          "bg-white border-gray-200 shadow-sm dark:hover:bg-gray-800":
            !task.is_complete,
        }
      )}
    >
      <div className="flex flex-row gap-2 items-center justify-between">
        <div
          onClick={() => onToggle(task.id)}
          className="flex flex-row items-center justify-start w-full cursor-pointer"
        >
          <input
            type="checkbox"
            checked={task.is_complete}
            onChange={() => onToggle(task.id)}
            onClick={(e) => e.stopPropagation()}
            className="sr-only"
          />
          <div
            className={cn(
              "flex flex-row items-center justify-center w-full h-5 mr-3 border  rounded-md box max-w-5 dark:border-gray-700",
              {
                "border-gray-300": !task.is_complete,
                "border-indigo-500 bg-indigo-500": task.is_complete,
              }
            )}
          >
            <span
              className={cn(
                "flex justify-center items-center text-center w-10 h-10",
                {
                  "opacity-100 ": task.is_complete,
                  "opacity-0": !task.is_complete,
                }
              )}
            >
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
            className={cn("text-base break-words", {
              "line-through text-gray-400 dark:text-white/70": task.is_complete,
              "text-gray-900 dark:text-white": !task.is_complete,
            })}
          >
            {task.title}
          </span>
        </div>
        <div className="flex flex-col-reverse items-start justify-end w-full gap-3 xl:flex-row xl:items-center xl:gap-5">
          <div className="flex items-center justify-between w-full gap-5 xl:w-auto xl:justify-normal">
            <div className="flex items-center gap-3 w-50">
              <span
                className={cn(
                  "select-none flex items-center gap-1 text-sm cursor-pointer",
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
                {formatDate(task.created_at)}
              </span>
            </div>

            <button
              onClick={() => onRemove(task.id)}
              className="flex h-10 w-full max-w-10 items-center justify-center rounded-lg border border-gray-200
             text-gray-500 transition-colors hover:bg-gray-100 hover:text-red-700
              dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 
              dark:hover:text-red-500 cursor-pointer"
            >
              <svg
                className="fill-current"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.54118 3.7915C6.54118 2.54886 7.54854 1.5415 8.79118 1.5415H11.2078C12.4505 1.5415 13.4578 2.54886 13.4578 3.7915V4.0415H15.6249H16.6658C17.08 4.0415 17.4158 4.37729 17.4158 4.7915C17.4158 5.20572 17.08 5.5415 16.6658 5.5415H16.3749V8.24638V13.2464V16.2082C16.3749 17.4508 15.3676 18.4582 14.1249 18.4582H5.87492C4.63228 18.4582 3.62492 17.4508 3.62492 16.2082V13.2464V8.24638V5.5415H3.33325C2.91904 5.5415 2.58325 5.20572 2.58325 4.7915C2.58325 4.37729 2.91904 4.0415 3.33325 4.0415H4.37492H6.54118V3.7915ZM14.8749 13.2464V8.24638V5.5415H13.4578H12.7078H7.29118H6.54118H5.12492V8.24638V13.2464V16.2082C5.12492 16.6224 5.46071 16.9582 5.87492 16.9582H14.1249C14.5391 16.9582 14.8749 16.6224 14.8749 16.2082V13.2464ZM8.04118 4.0415H11.9578V3.7915C11.9578 3.37729 11.6221 3.0415 11.2078 3.0415H8.79118C8.37696 3.0415 8.04118 3.37729 8.04118 3.7915V4.0415ZM8.33325 7.99984C8.74747 7.99984 9.08325 8.33562 9.08325 8.74984V13.7498C9.08325 14.1641 8.74747 14.4998 8.33325 14.4998C7.91904 14.4998 7.58325 14.1641 7.58325 13.7498V8.74984C7.58325 8.33562 7.91904 7.99984 8.33325 7.99984ZM12.4166 8.74984C12.4166 8.33562 12.0808 7.99984 11.6666 7.99984C11.2524 7.99984 10.9166 8.33562 10.9166 8.74984V13.7498C10.9166 14.1641 11.2524 14.4998 11.6666 14.4998C12.0808 14.4998 12.4166 14.1641 12.4166 13.7498V8.74984Z"
                  fill=""
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
