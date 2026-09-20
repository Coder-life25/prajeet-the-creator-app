"use client";

import Link from "next/link";
import { useStream } from "@/context/StreamContext";

export default function StartPracticeLink() {
  const { stream } = useStream();

  return (
    <Link
      href="/compex-practice/dashboard"
      className="px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 rounded-2xl text-base font-semibold transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-indigo-500/20 w-full sm:w-auto text-center"
    >
      {stream ? "Go to Dashboard →" : "Start Practicing Free →"}
    </Link>
  );
}
