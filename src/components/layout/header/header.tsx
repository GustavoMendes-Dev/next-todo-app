"use client";

import React from "react";
import ThemeToggleButton from "../theme-toogle-button/theme-toogle-button";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-99999 flex w-full border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 lg:border-b">
      <div className="w-2/4 mx-auto ">
        <div className="flex grow w-full flex-col items-center justify-between lg:flex-row lg:px-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">
            Sua Lista de Tarefas
          </h2>
          <div className="items-center justify-between gap-4 px-5 py-4 shadow-theme-md lg:flex lg:justify-end lg:px-0 lg:shadow-none hidden">
            <ThemeToggleButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
