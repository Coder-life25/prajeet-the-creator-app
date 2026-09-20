import { careerBatoInfo } from "@/data/careerBato";
import ApplyModalProvider from "./ApplyModalProvider";
import ApplyButton from "./ApplyButton";

export default function CareerBatoPage() {
  return (
    <ApplyModalProvider>
      <div className="min-h-screen bg-dark-950 pt-28 pb-20 relative overflow-hidden animated-gradient grid-bg">
        {/* Decorative blobs */}
        <div className="blob w-96 h-96 bg-blue-600 top-20 -left-48 opacity-[0.10]" />
        <div className="blob w-80 h-80 bg-violet-600 bottom-40 -right-40 opacity-[0.10]" />
        <div className="blob w-64 h-64 bg-emerald-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]" />
        <div className="blob w-56 h-56 bg-amber-500 bottom-10 left-1/4 opacity-[0.07]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ── HERO ──────────────────────────────────────────── */}
          <div className="text-center mb-20 animate-fade-up">
            <span className="inline-block text-sm font-semibold text-primary-400 tracking-wider uppercase mb-4 px-4 py-1.5 rounded-full border border-primary-500/25 bg-primary-500/8">
              Career Bato Educational Consultancy Pvt. Ltd.
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] mb-6 leading-tight flex flex-col items-center">
              <span>Your Dream College in India</span>
              <span className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-4 text-2xl sm:text-3xl lg:text-4xl gradient-text">
                <span className="animate-fade-in-left" style={{ animationDelay: "0.3s" }}>
                  Guided
                </span>
                
                <div className="flex items-center text-primary-500">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path
                      className="animate-draw-stroke"
                      style={{ animationDelay: "0.7s" }}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                
                <span className="animate-fade-in-left" style={{ animationDelay: "1.1s" }}>
                  Matched
                </span>
                
                <div className="flex items-center text-primary-500">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path
                      className="animate-draw-stroke"
                      style={{ animationDelay: "1.5s" }}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                
                <span className="animate-fade-in-left" style={{ animationDelay: "1.9s" }}>
                  Sorted
                </span>
              </span>
            </h1>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              {careerBatoInfo.intro}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ApplyButton className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold text-sm transition-all duration-200 hover:scale-105 shadow-lg shadow-primary-500/25">
                Apply for Free Guidance 🚀
              </ApplyButton>
              <a
                href="https://wa.me/917061297457"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-dark-700 hover:border-dark-500 text-dark-200 hover:text-white font-semibold text-sm transition-all duration-200 hover:bg-white/5"
              >
                <svg
                  className="w-4 h-4 text-emerald-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* ── STATS ─────────────────────────────────────────── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24 animate-fade-up">
            {careerBatoInfo.stats.map((stat, i) => (
              <div
                key={i}
                className="glass-light rounded-2xl p-6 text-center card-hover animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1 font-[family-name:var(--font-display)]">
                  {stat.value}
                </div>
                <div className="text-sm text-dark-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* ── WHY CHOOSE CAREER BATO ─────────────────────────── */}
          <div className="mb-24 animate-fade-up">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-primary-400 tracking-wider uppercase mb-3">
                Why Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)]">
                Why Choose <span className="gradient-text">Career Bato</span>?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {careerBatoInfo.whyUs.map((item, i) => (
                <div
                  key={i}
                  className="glass-light border border-dark-800/50 rounded-2xl p-7 card-hover animate-fade-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center text-2xl mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-dark-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── SERVICES LIST ─────────────────────────────────── */}
          <div className="mb-24 animate-fade-up">
            <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary-600/10 to-accent-500/10 border border-primary-500/20">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-6 text-center">
                What We Help You With
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {careerBatoInfo.services.map((service, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-dark-200 animate-fade-up"
                    style={{ animationDelay: `${i * 0.07}s` }}
                  >
                    <svg
                      className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── HOW IT WORKS ──────────────────────────────────── */}
          <div className="mb-24 animate-fade-up">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent-400 tracking-wider uppercase mb-3">
                The Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)]">
                How It <span className="gradient-text">Works</span>
              </h2>
            </div>

            <div className="relative">
              {/* Connector line (desktop) */}
              <div className="hidden lg:block absolute top-10 left-[calc(12.5%+1.25rem)] right-[calc(12.5%+1.25rem)] h-px bg-gradient-to-r from-transparent via-primary-700/50 to-transparent" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {careerBatoInfo.process.map((step, i) => (
                  <div
                    key={i}
                    className="relative flex flex-col items-center text-center animate-fade-up"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center text-2xl font-bold mb-5 shadow-lg shadow-primary-500/20 border border-primary-500/30 flex-shrink-0">
                      {i + 1}
                    </div>
                    <h3 className="text-base font-bold mb-2">{step.title}</h3>
                    <p className="text-dark-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── APPLY FORM CTA ────────────────────────────────────── */}
          <section id="apply" className="scroll-mt-28 mb-10">
            <div className="text-center max-w-2xl mx-auto glass border border-dark-800/60 rounded-2xl p-8 md:p-12 animate-fade-up">
              <span className="inline-block text-sm font-semibold text-primary-400 tracking-wider uppercase mb-3">
                Apply Now
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)]">
                Start Your <span className="gradient-text">College Journey</span>
              </h2>
              <p className="text-dark-400 mt-3 mb-8 text-sm">
                Fill in the form and our counsellor will reach out within 24–48
                hours. It&apos;s completely free — always.
              </p>
              <ApplyButton className="px-8 py-4 rounded-xl font-bold text-sm transition-all duration-200 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white shadow-lg shadow-primary-500/20 hover:scale-[1.02]">
                Open Application Form 🚀
              </ApplyButton>
            </div>
          </section>
        </div>
      </div>
    </ApplyModalProvider>
  );
}
