"use client";

export default function Home() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-center">OneDayGoals</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="今日の目標を入力"
          className="flex-[4] p-2 rounded-md  border border-gray-300"
        />
        <button className="flex-[1] bg-blue-500 text-white rounded-md px-4">
          追加
        </button>
      </div>
    </div>
  );
}
