"use client";

import React, { createContext, useState, ReactNode } from "react";
import { Task } from "../../types/task";

export interface TaskContextProps {
  tasks: Task[];
  removeTask: (taskId: number) => void;
  toggleTask: (taskId: number) => void;
  addTask: (newTask: Task) => void;
}

export interface TaskProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext<TaskContextProps | undefined>(
  undefined
);

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const removeTask = (taskId: number) => {
    const newTasks = tasks.filter((task: Task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const toggleTask = (taskId: number) => {
    setTasks((prev: Task[]) =>
      prev.map((task: Task) =>
        task.id === taskId ? { ...task, is_complete: !task.is_complete } : task
      )
    );
  };

  const addTask = (newTask: Task) => {
    setTasks((prevTodos) => [...prevTodos, newTask]);
  };

  return (
    <TaskContext.Provider value={{ tasks, removeTask, toggleTask, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};
