"use client";

import React from "react";
import ThemeToggleButton from "../theme-toogle-button/theme-toogle-button";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-[99999] w-full border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="max-w-5xl lg:w-2/4 mx-auto px-4 py-3 flex gap-3 flex-row items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">
          Sua Lista de Tarefas
        </h2>

        <div className="flex justify-end">
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
