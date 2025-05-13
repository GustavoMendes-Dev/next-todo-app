"use client";

import React, { createContext, useState, ReactNode, useEffect } from "react";
import { Task } from "../../types/task";
import { useLocalStorage } from "@/hooks/use-local-storage";

export interface TaskContextProps {
  tasks: Task[];
  removeTask: (taskId: string) => void;
  toggleTask: (taskId: string) => void;
  addTask: (newTask: Task) => void;
  filters: Filter[];
  addFilterTask: (query: FilterType) => void;
  filterTaskSelected: FilterType;
}

export type FilterType = "all" | "to-do" | "completed";

interface Filter {
  title: string;
  qty: number;
  query: FilterType;
}

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext<TaskContextProps | undefined>(
  undefined
);

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filterTaskSelected, setFilterTaskSelected] =
    useState<FilterType>("all");

  const [storedTasks, setStoredTasks] = useLocalStorage("tasks-list", "[]");

  const [filters, setFilters] = useState<Filter[]>([]);

  useEffect(() => {
    const parsedTasks: Task[] = JSON.parse(storedTasks as string);
    setAllTasks(parsedTasks);
  }, [storedTasks]);

  useEffect(() => {
    const filtered = allTasks.filter((task) => {
      if (filterTaskSelected === "to-do") return !task.is_complete;
      if (filterTaskSelected === "completed") return task.is_complete;
      return true;
    });
    setTasks(filtered);
  }, [filterTaskSelected, allTasks]);

  // Atualizar contagem dos filtros
  useEffect(() => {
    const total = allTasks.length;
    const toDo = allTasks.filter((task) => !task.is_complete).length;
    const completed = allTasks.filter((task) => task.is_complete).length;

    setFilters([
      { title: "Todos", qty: total, query: "all" },
      { title: "A Fazer", qty: toDo, query: "to-do" },
      { title: "Concluída", qty: completed, query: "completed" },
    ]);
  }, [allTasks]);

  const saveTasks = (newTasks: Task[]) => {
    setAllTasks(newTasks);
    setStoredTasks(JSON.stringify(newTasks));
  };

  const addTask = (newTask: Task) => {
    const updated = [...allTasks, newTask];
    saveTasks(updated);
  };

  const toggleTask = (taskId: string) => {
    const updated = allTasks.map((task) =>
      task.id === taskId ? { ...task, is_complete: !task.is_complete } : task
    );
    saveTasks(updated);
  };

  const removeTask = (taskId: string) => {
    const updated = allTasks.filter((task) => task.id !== taskId);
    saveTasks(updated);
  };

  const addFilterTask = (query: FilterType) => {
    setFilterTaskSelected(query);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        removeTask,
        toggleTask,
        addTask,
        filters,
        addFilterTask,
        filterTaskSelected,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
