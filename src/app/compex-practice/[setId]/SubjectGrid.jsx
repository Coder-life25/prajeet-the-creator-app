"use client";

import Link from "next/link";
import { useStream } from "@/context/StreamContext";

export default function SubjectGrid({ setId }) {
  const { stream, loading } = useStream();

  if (loading) {
    return (
      <div className="w-8 h-8 rounded-full border-2 border-primary-500 border-t-transparent animate-spin" />
    );
  }

  if (!stream) {
    return (
      <div className="p-8 glass rounded-2xl border border-yellow-500/30 text-center">
        <h3 className="text-xl font-bold text-yellow-400 mb-2">Select Your Stream First</h3>
        <p className="text-dark-300 mb-6">Choose PCM or PCB on the dashboard to unlock subject-wise practice for this set.</p>
        <Link href="/compex-practice/dashboard" className="text-primary-400 hover:underline font-medium">Go to Dashboard →</Link>
      </div>
    );
  }

  const subjects = [
    { id: "physics", name: "Physics", icon: "⚡", color: "blue" },
    { id: "chemistry", name: "Chemistry", icon: "🧪", color: "purple" },
    { id: "english", name: "English", icon: "📚", color: "amber" },
    ...(stream === "pcm"
      ? [{ id: "math", name: "Mathematics", icon: "📐", color: "green" }]
      : [{ id: "biology", name: "Biology", icon: "🧬", color: "emerald" }]
    )
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {subjects.map((sub, i) => (
        <div
          key={sub.id}
          className="animate-fade-up"
          style={{ animationDelay: `${0.1 + (i * 0.05)}s` }}
        >
          <Link
            href={`/compex-practice/${setId}/${sub.id}`}
            className="block p-6 glass-light rounded-2xl border border-dark-800 hover:border-white/20 transition-all card-hover group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{sub.icon}</span>
                <h3 className="text-lg font-bold">{sub.name}</h3>
              </div>
              <span className="text-dark-500 group-hover:text-primary-400 transition-colors">→</span>
            </div>
            <div className="flex items-center justify-between text-xs text-dark-400">
              <span className="px-2.5 py-1 rounded bg-dark-900">30 Questions</span>
              <span className="px-2.5 py-1 rounded bg-dark-900 text-amber-400/80">1 min / Q</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
