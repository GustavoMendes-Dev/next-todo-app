"use client";

import React, { useState } from "react";
import CardList from "../card-list/card-list";
import { useTask } from "@/hooks/use-tasks";
import { v4 as uuidv4 } from "uuid";
import Filters from "../filter/filters";

const Tasks: React.FC = () => {
  const [title, setTitle] = useState<string | null>(null);

  const { addTask, filters, addFilterTask, filterTaskSelected } = useTask();

  const handleAddTask = () => {
    if (!title) return;
    const id = uuidv4();

    const newTask = {
      id: id,
      title: title,
      is_complete: false,
      created_at: new Date(),
    };
    addTask(newTask);
    setTitle(null);
  };

  return (
    <section className="w-2/4 mx-auto px-4">
      <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] mt-10">
        <div className="flex flex-col items-center px-4 py-5 xl:px-6 xl:py-6">
          <div className="flex flex-col w-full gap-5 sm:justify-between xl:flex-row xl:items-center">
            <Filters
              filterSelected={filterTaskSelected}
              filters={filters}
              onFilterSelected={addFilterTask}
            />
            <div className="flex flex-row gap-4">
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title ?? ""}
                placeholder="Descreva a tarefa..."
                className="dark:bg-dark-900 h-11 appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 
                py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 
                focus:border-indigo-300 focus:outline-hidden focus:ring-1 focus:ring-indigo-500/10
                 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30
                  dark:focus:border-indigo-800"
              />

              <button
                onClick={handleAddTask}
                disabled={!title}
                className="inline-flex items-center gap-2 cursor-pointer  rounded-lg bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white shadow-xs hover:bg-indigo-600"
              >
                Adicionar tarefa
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
                    d="M9.2502 4.99951C9.2502 4.5853 9.58599 4.24951 10.0002 4.24951C10.4144 4.24951 10.7502 4.5853 10.7502 4.99951V9.24971H15.0006C15.4148 9.24971 15.7506 9.5855 15.7506 9.99971C15.7506 10.4139 15.4148 10.7497 15.0006 10.7497H10.7502V15.0001C10.7502 15.4143 10.4144 15.7501 10.0002 15.7501C9.58599 15.7501 9.2502 15.4143 9.2502 15.0001V10.7497H5C4.58579 10.7497 4.25 10.4139 4.25 9.99971C4.25 9.5855 4.58579 9.24971 5 9.24971H9.2502V4.99951Z"
                    fill=""
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <CardList />
      </div>
    </section>
  );
};

export default Tasks;
