import Image from "next/image";

export default function DocumentPanel({ category }) {
  return (
    <>
      {/* Title Card */}
      <div
        className={`p-5 sm:p-6 rounded-2xl bg-gradient-to-br ${category.color} border border-white/10 shadow-lg`}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{category.icon}</span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            {category.title} Samples
          </h2>
        </div>
      </div>

      {/* Samples */}
      <div className="grid grid-cols-1 gap-10">
        {category.samples.map((sample, i) => (
          <div key={i} className="group space-y-4">
            <div className="flex items-center justify-between border-l-4 border-emerald-500 pl-4">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {sample.title}
              </h3>
            </div>

            <div className="relative aspect-[3/4] sm:aspect-[4/5] md:aspect-auto md:min-h-[850px] w-full overflow-hidden rounded-2xl border border-dark-700 bg-dark-900 group-hover:border-primary-500/30 transition-all duration-500 shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center text-dark-800 pointer-events-none z-0">
                <div className="text-center">
                  <span className="text-6xl block mb-4 opacity-5">
                    📄
                  </span>
                  <p className="text-xs font-medium uppercase tracking-widest opacity-10">
                    Sample Preview
                  </p>
                </div>
              </div>
              <Image
                src={sample.image}
                alt={sample.title}
                fill
                className="object-contain relative z-10"
                loading="lazy"
                unoptimized
              />
            </div>

            <div className="p-4 rounded-xl bg-dark-800/30 border border-dark-700/40 backdrop-blur-sm">
              <p className="text-sm sm:text-base text-dark-200 leading-relaxed font-medium">
                {sample.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
