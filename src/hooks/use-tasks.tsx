"use client";

import { useContext } from "react";
import { TaskContext, TaskContextProps } from "../context/tasks/task.context";

export const useTask = (): TaskContextProps => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask deve ser usado dentro de um TaskProvider");
  }
  return context;
};
