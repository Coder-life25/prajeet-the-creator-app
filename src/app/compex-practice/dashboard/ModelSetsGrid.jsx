"use client";

import Link from "next/link";
import { useStream } from "@/context/StreamContext";
import { getSet } from "@/data/compex";

export default function ModelSetsGrid() {
  const { stream, attempts, loading } = useStream();

  // While localStorage is still being read (SSR + first paint) render the full
  // grid with no attempts so crawlers see real content instead of the warning.
  if (!loading && !stream) {
    return (
      <div className="p-12 glass rounded-2xl border border-yellow-500/30 text-center">
        <div className="text-4xl mb-4">⚠️</div>
        <h3 className="text-xl font-bold text-yellow-400 mb-2">
          Please Select a Stream
        </h3>
        <p className="text-dark-300">
          You need to select either PCM or PCB above to start practicing.
        </p>
      </div>
    );
  }

  const visibleAttempts = loading ? [] : attempts;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 10 }).map((_, i) => {
        const setNumber = i + 1;
        const setId = `set${setNumber.toString().padStart(2, "0")}`;
        const isAvailable = !!getSet(setId);

        const streamAttempts = visibleAttempts.filter(
          (attempt) =>
            attempt.setId === setId && attempt.stream === stream,
        );
        const bestAttempt = streamAttempts.reduce((best, attempt) => {
          if (!best) return attempt;
          const bestPct = best.totalQuestions
            ? best.score / best.totalQuestions
            : 0;
          const attemptPct = attempt.totalQuestions
            ? attempt.score / attempt.totalQuestions
            : 0;
          return attemptPct > bestPct ? attempt : best;
        }, null);
        const bestPercent = bestAttempt?.totalQuestions
          ? Math.round(
              (bestAttempt.score / bestAttempt.totalQuestions) * 100,
            )
          : null;

        return (
          <div
            key={setId}
            className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col ${
              isAvailable
                ? "glass border-dark-800 hover:border-primary-500/50 glow card-hover"
                : "bg-dark-900/50 border-dark-800/50 opacity-70"
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">Model Set {setNumber}</h3>
              <span
                className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                  bestAttempt
                    ? "bg-green-500/15 text-green-300"
                    : isAvailable
                      ? "bg-dark-800 text-dark-300"
                      : "bg-dark-900 text-dark-500"
                }`}
              >
                {bestAttempt
                  ? "Completed"
                  : isAvailable
                    ? "Not Started"
                    : "Coming Soon"}
              </span>
            </div>

            <div className="text-sm text-dark-400 mb-6 flex-grow">
              120 Questions • 3 Hours
              {bestAttempt && (
                <div className="mt-3 text-green-300 font-semibold">
                  Best score: {bestAttempt.score}/
                  {bestAttempt.totalQuestions} ({bestPercent}%)
                </div>
              )}
            </div>

            {isAvailable ? (
              <Link
                href={`/compex-practice/${setId}`}
                className="w-full py-3 bg-dark-800 hover:bg-primary-600 text-white rounded-xl font-semibold transition-colors text-center block"
              >
                Practice Now
              </Link>
            ) : (
              <button
                disabled
                className="w-full py-3 bg-dark-900 text-dark-500 rounded-xl font-semibold cursor-not-allowed"
              >
                Locked
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
