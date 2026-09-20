import StartPracticeLink from "./StartPracticeLink";

export const metadata = {
  title: "COMPEX Exam Practice — Free Mock Tests (PCM & PCB)",
  description:
    "Free full-length COMPEX Scholarship mock tests: 10 model sets, 120 questions, 3-hour timer, subject-wise results for PCM and PCB streams.",
  alternates: { canonical: "/compex-practice" },
};

export default function CompexLandingPage() {
  return (
    <div className="min-h-screen bg-dark-950 pt-28 pb-20 relative overflow-hidden animated-gradient grid-bg">
      {/* Decorative blobs */}
      <div className="blob w-96 h-96 bg-purple-600 top-20 -left-48 opacity-[0.12]" />
      <div className="blob w-80 h-80 bg-emerald-500 bottom-20 -right-40 opacity-[0.12]" />
      <div className="blob w-64 h-64 bg-rose-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light text-sm text-primary-300 mb-8 mx-auto animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          COMPEX Exam Practice
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-display)] leading-tight mb-6 animate-fade-up animation-delay-100">
          Practice COMPEX Exam Sets <br />
          <span className="gradient-text-vibrant">Like the Real Exam</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg text-dark-300 max-w-2xl mx-auto mb-12 animate-fade-up animation-delay-200">
          120 Questions | 3-Hour Timer | Instant Results | Subject Breakdown
        </p>

        {/* ── SEO Text Block for Google AdSense ──────────────────────────────── */}
        <div
          className="p-8 rounded-2xl glass-light border border-dark-800 max-w-4xl mx-auto mb-16 text-left animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Start Your COMPEX Exam Preparation
          </h2>
          <p className="mb-4 text-dark-300 leading-relaxed">
            Welcome to the COMPEX Scholarship Exam Practice Portal. The COMPEX
            exam is the gateway to a fully funded undergraduate scholarship from
            the Embassy of India. To help you succeed, we offer full-length mock
            tests that perfectly simulate the actual Computer-Based Test (CBT)
            environment.
          </p>
          <p className="text-dark-300 leading-relaxed">
            Before you begin, please select your target stream. The{" "}
            <span className="text-primary-300 font-semibold">PCM Stream</span>{" "}
            (Physics, Chemistry, Mathematics, English) is for students applying
            for Engineering (B.Tech/BE). The{" "}
            <span className="text-emerald-300 font-semibold">PCB Stream</span>{" "}
            (Physics, Chemistry, Biology, English) is for students applying for
            Pharmacy, Agriculture, Food Technology, and Nursing. Choose your
            stream below to access 10 complete model sets, each containing 120
            questions and a strict 3-hour timer.
          </p>
        </div>

        {/* Stream Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16 text-left animate-fade-up animation-delay-300">
          {/* PCM Card */}
          <div className="p-8 rounded-2xl glass-light border border-primary-500/20 hover:border-primary-500/50 transition-all glow card-hover relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center text-2xl">
                  ⚙️
                </div>
                <div>
                  <h3 className="text-2xl font-bold">PCM Stream</h3>
                  <p className="text-sm text-primary-300">
                    For B.Tech / BE Students
                  </p>
                </div>
              </div>
              <ul className="space-y-3 mb-6 text-dark-300">
                <li className="flex items-center gap-2">
                  <span>✓</span> Physics (30Q)
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> Chemistry (30Q)
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> Mathematics (30Q)
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> English (30Q)
                </li>
              </ul>
            </div>
          </div>

          {/* PCB Card */}
          <div className="p-8 rounded-2xl glass-light border border-emerald-500/20 hover:border-emerald-500/50 transition-all glow-amber card-hover relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-2xl">
                  🌱
                </div>
                <div>
                  <h3 className="text-2xl font-bold">PCB Stream</h3>
                  <p className="text-sm text-emerald-300">
                    For Pharmacy / Agriculture / Nursing / Food Technology
                  </p>
                </div>
              </div>
              <ul className="space-y-3 mb-6 text-dark-300">
                <li className="flex items-center gap-2">
                  <span>✓</span> Physics (30Q)
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> Chemistry (30Q)
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> Biology (30Q)
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> English (30Q)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up animation-delay-400">
          <StartPracticeLink />
        </div>

        {/* Features Pills */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-up animation-delay-500">
          <div className="px-5 py-2.5 rounded-full glass-light text-sm font-medium border border-dark-800">
            ⏱ 3-Hour Full Exam Timer
          </div>
          <div className="px-5 py-2.5 rounded-full glass-light text-sm font-medium border border-dark-800">
            📊 Subject-wise Results
          </div>
          <div className="px-5 py-2.5 rounded-full glass-light text-sm font-medium border border-dark-800">
            🔄 10 Model Sets
          </div>
        </div>
      </div>
    </div>
  );
}
