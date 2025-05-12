import React from "react";

interface ChangelogItem {
  date: string;
  title: string;
  description: string;
  type?: "feature" | "improvement" | "bugfix";
}

const updates: ChangelogItem[] = [
  {
    date: "2025-05-11",
    title: "Marcar/desmarcar tarefa",
    description:
      "Ao clicar em uma tarefa, o status `is_complete` alterna corretamente entre verdadeiro e falso.",
    type: "feature",
  },
  {
    date: "2025-05-11",
    title: "Estilo condicional para tarefa concluída",
    description:
      "Removido o `shadow` e adicionado `bg-gray-50` quando a tarefa está marcada como concluída.",
    type: "improvement",
  },
  {
    date: "2025-05-11",
    title: "Texto não selecionável",
    description:
      "Adicionado `select-none` para evitar seleção acidental de texto ao clicar nas tarefas.",
    type: "improvement",
  },
];

const typeStyles = {
  feature: "bg-green-100 text-green-700",
  improvement: "bg-blue-100 text-blue-700",
  bugfix: "bg-red-100 text-red-700",
};

const Changelog: React.FC = () => {
  return (
    <section className="w-2/4 mx-auto px-4">
      <div className="p-6 border border-gray-200 rounded-lg dark:border-gray-800">
        <h2 className="text-xl font-semibold mb-4">📘 Changelog</h2>
        <ul className="space-y-4">
          {updates.map((item, index) => (
            <li key={index} className="border-l-4 border-gray-300 pl-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-500">{item.date}</span>
                {item.type && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      typeStyles[item.type]
                    }`}
                  >
                    {item.type}
                  </span>
                )}
              </div>
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Changelog;
