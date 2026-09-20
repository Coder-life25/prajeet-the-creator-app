import Link from "next/link";
import { allSets, getSet } from "@/data/compex";
import StreamLabel from "./StreamLabel";
import SubjectGrid from "./SubjectGrid";

export function generateStaticParams() {
  return allSets.map((s) => ({ setId: s.id }));
}

export async function generateMetadata({ params }) {
  const { setId } = await params;
  const modelSet = getSet(setId);

  if (!modelSet) {
    return { title: "Model Set Not Found" };
  }

  return {
    title: `${modelSet.title} — COMPEX Practice`,
    description: `Practice ${modelSet.title} of the COMPEX scholarship exam: full 120-question, 3-hour simulation or subject-wise practice (30 questions, 1 minute each).`,
    alternates: { canonical: `/compex-practice/${setId}` },
  };
}

export default async function ModelSetPage({ params }) {
  const { setId } = await params;
  const modelSet = getSet(setId);

  if (!modelSet) {
    return (
      <div className="min-h-screen bg-dark-950 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-3xl font-bold mb-4">Model Set Not Found</h1>
        <p className="text-dark-400 mb-8">This model set is either unavailable or coming soon.</p>
        <Link href="/compex-practice/dashboard" className="text-primary-400 hover:underline">
          ← Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-950 pt-28 pb-20 relative overflow-hidden grid-bg">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <Link href="/compex-practice/dashboard" className="inline-block mb-8 text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors">
          ← Back to Dashboard
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-2">
          {modelSet.title}
        </h1>
        <StreamLabel />

        <div className="mb-12 animate-fade-up">
          <div className="p-8 glass rounded-3xl border border-primary-500/30 glow relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <span className="text-9xl">⏱</span>
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <span>🎓</span> Full Exam Simulation
              </h2>
              <p className="text-dark-300 mb-6">
                Take the complete model set just like the real COMPEX exam. You will have 3 hours to answer 120 questions across all 4 subjects.
              </p>

              <ul className="space-y-2 mb-8 text-sm text-dark-300">
                <li className="flex items-center gap-2"><span>✓</span> 120 Questions total</li>
                <li className="flex items-center gap-2"><span>✓</span> 3 Hour continuous timer</li>
                <li className="flex items-center gap-2"><span>✓</span> Question flagging & easy navigation</li>
                <li className="flex items-center gap-2"><span>✓</span> Detailed performance breakdown at the end</li>
              </ul>

              <Link
                href={`/compex-practice/${setId}/exam`}
                className="inline-flex px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white rounded-xl font-bold transition-all hover:scale-105 shadow-xl shadow-indigo-500/20"
              >
                Start Full Exam
              </Link>
            </div>
          </div>
        </div>

        <div className="animate-fade-up animation-delay-100">
          <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-display)] flex items-center gap-2">
            <span>🎯</span> Practice by Subject
          </h2>
          <p className="text-dark-400 mb-6">
            Focus on one subject at a time. Each subject has 30 questions with a strict 1-minute timer per question.
          </p>

          <SubjectGrid setId={setId} />
        </div>

      </div>
    </div>
  );
}
