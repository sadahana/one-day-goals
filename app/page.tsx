"use client";

import { useState } from "react";

type Goal = {
  id: number;
  text: string;
  done: boolean;
};

export default function Home() {
  const [input, setInput] = useState("");
  const [goals, setGoals] = useState<Goal[]>([]);

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newGoal = {
      id: new Date().getTime(),
      text: input,
      done: false,
    };
    setGoals([...goals, newGoal]);
    setInput("");
  };

  const toggleGoalDone = (id: number): void => {
    const newGoals = goals.map((goal) =>
      goal.id === id ? { ...goal, done: !goal.done } : goal
    );
    setGoals(newGoals);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-center">OneDayGoals</h2>

      <form onSubmit={handleAdd} className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="目標を入力"
          className="flex-[4] p-2 rounded-md  border border-gray-300"
        />
        <button className="flex-[1] bg-blue-500 text-white rounded-md px-4">
          追加
        </button>
      </form>

      <ul className="space-y-2">
        {goals.map((goal) => {
          return (
            <li key={goal.id} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={goal.done}
                onChange={() => toggleGoalDone(goal.id)}
                className="w-5 h-5"
              />
              <span
                className={`text-lg ${
                  goal.done ? "line-through text-gray-400" : ""
                }`}
              >
                {goal.text}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
