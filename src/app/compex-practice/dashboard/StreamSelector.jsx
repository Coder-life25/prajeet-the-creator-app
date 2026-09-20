"use client";

import { useStream } from "@/context/StreamContext";

export default function StreamSelector() {
  const { stream, setStream } = useStream();

  return (
    <div className="flex gap-3 w-full sm:w-auto">
      <button
        onClick={() => setStream("pcm")}
        className={`flex-1 sm:flex-none px-6 py-3 rounded-xl font-bold transition-all duration-200 ${
          stream === "pcm"
            ? "bg-primary-500 text-white shadow-lg shadow-primary-500/20"
            : "bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white"
        }`}
      >
        PCM
      </button>
      <button
        onClick={() => setStream("pcb")}
        className={`flex-1 sm:flex-none px-6 py-3 rounded-xl font-bold transition-all duration-200 ${
          stream === "pcb"
            ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
            : "bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white"
        }`}
      >
        PCB
      </button>
    </div>
  );
}
