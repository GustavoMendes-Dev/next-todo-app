"use client";

import React from "react";
import { Task } from "@/types/task";
import TaskCard from "../card-task/card-task";
import { useTask } from "@/hooks/use-tasks";

const CardList: React.FC = () => {
  const { tasks, removeTask, toggleTask } = useTask();

  return (
    <div className="flex flex-col gap-3 p-4 border-t border-gray-200 mt-7 dark:border-gray-800 sm:mt-0 xl:p-6">
      {tasks?.length >= 1 ? (
        tasks.map((task: Task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onRemove={removeTask}
          />
        ))
      ) : (
        <p className="text-sm dark:text-white text-gray-900">
          Nenhuma tarefa cadastrada.
        </p>
      )}
    </div>
  );
};

export default CardList;
