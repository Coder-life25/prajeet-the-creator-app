import StreamBadge from "./StreamBadge";
import StreamSelector from "./StreamSelector";
import ModelSetsGrid from "./ModelSetsGrid";

export const metadata = {
  title: "COMPEX Practice Dashboard — 10 Free Model Sets",
  description:
    "Choose your stream (PCM or PCB) and practice 10 free COMPEX model sets with 120 questions and a 3-hour timer each, plus subject-wise practice.",
  alternates: { canonical: "/compex-practice/dashboard" },
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-dark-950 pt-28 pb-20 relative overflow-hidden grid-bg">
      <div className="blob w-96 h-96 bg-primary-600 top-20 -left-48 opacity-[0.08]" />
      <div className="blob w-80 h-80 bg-accent-500 bottom-20 -right-40 opacity-[0.08]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-2">
              Welcome 👋
            </h1>
            <p className="text-dark-400">
              Welcome to your COMPEX practice dashboard
            </p>
          </div>
          <StreamBadge />
        </div>

        {/* SEO / informational intro — real, unique paragraph for search crawlers */}
        <div className="mb-12 p-5 sm:p-6 rounded-2xl border border-dark-800/60 bg-dark-900/40 animate-fade-up">
          <h2 className="text-lg font-bold text-white mb-2">Free COMPEX Exam Practice Sets</h2>
          <p className="text-sm text-dark-300 leading-relaxed">
            The COMPEX Scholarship exam is a highly competitive Computer-Based Test (CBT). To help
            Nepalese students prepare, we have created 10 free model practice sets. These sets cover
            Physics, Chemistry, Mathematics, Biology, and English exactly like the real exam. Each set
            contains 120 questions and a 3-hour timer. Whether you are applying for Engineering (PCM) or
            Pharmacy/Nursing (PCB), practicing these sets in sequence will help you manage your time and
            score higher. you can separately practice the each subject present in the compex scholarship exam like physics, chemistry, math, english and biology. 
          </p>
        </div>

        <div className="mb-12 p-6 glass rounded-2xl border border-dark-800 flex flex-col sm:flex-row items-center justify-between gap-6 animate-fade-up animation-delay-100">
          <div>
            <h2 className="text-xl font-bold mb-1">Select Your Stream</h2>
            <p className="text-sm text-dark-400">
              Choose your target stream. You can switch this at any time.
            </p>
          </div>
          <StreamSelector />
        </div>

        <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-display)]">
          Model Sets
        </h2>

        <ModelSetsGrid />
      </div>
    </div>
  );
}
