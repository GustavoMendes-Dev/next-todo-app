"use client";

import React, { createContext, useState, ReactNode, useEffect } from "react";
import { Task } from "../../types/task";
import { useLocalStorage } from "@/hooks/use-local-storage";

export interface TaskContextProps {
  tasks: Task[];
  removeTask: (taskId: string) => void;
  toggleTask: (taskId: string) => void;
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

  const toSavedTasks = JSON.stringify(tasks);
  const [savedTasks, saveTasks] = useLocalStorage("tasks-list", toSavedTasks);

  useEffect(() => {
    const tasksParse = JSON.parse(savedTasks as string);
    setTasks(tasksParse);
  }, [savedTasks]);

  const removeTask = (taskId: string) => {
    const newTasksList = tasks.filter((task: Task) => task.id !== taskId);
    const tasksStringFy = JSON.stringify(newTasksList);
    saveTasks(tasksStringFy);
  };

  const toggleTask = (taskId: string) => {
    const newTasksList = tasks.map((task: Task) =>
      task.id === taskId ? { ...task, is_complete: !task.is_complete } : task
    );
    const tasksStringFy = JSON.stringify(newTasksList);
    saveTasks(tasksStringFy);
  };

  const addTask = (newTask: Task) => {
    const tasksStringFy = JSON.stringify([...tasks, newTask]);
    saveTasks(tasksStringFy);
  };

  return (
    <TaskContext.Provider value={{ tasks, removeTask, toggleTask, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};
