"use client";

import React, { useEffect, useState } from "react";
import CardTask from "../card-task/card-task";
import { Task } from "@/app/types/task";

interface CardListProps {
  tasks: Task[];
}

const CardList: React.FC<CardListProps> = ({ tasks }: CardListProps) => {
  const [tasksList, setTasksList] = useState<Task[]>([]);

  useEffect(() => {
    setTasksList(tasks);
  }, [tasks]);

  const toggleTask = (taskId: number) => {
    setTasksList((prev: Task[]) =>
      prev.map((task: Task) =>
        task.id === taskId ? { ...task, is_complete: !task.is_complete } : task
      )
    );
  };

  const removeTask = (taskId: number) => {
    const tasks = tasksList.filter((task: Task) => task.id !== taskId);
    setTasksList(tasks);
  };

  return (
    <div className="flex flex-col gap-3 p-4 border-t border-gray-200 mt-7 dark:border-gray-800 sm:mt-0 xl:p-6">
      {tasksList?.length >= 1 ? (
        tasksList.map((task: Task) => (
          <CardTask
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
