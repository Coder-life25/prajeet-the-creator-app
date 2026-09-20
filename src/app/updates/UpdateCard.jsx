const typeConfig = {
  announcement: { color: "bg-blue-500/20 text-blue-300", icon: "📢", label: "Announcement" },
  embassy: { color: "bg-purple-500/20 text-purple-300", icon: "🏛️", label: "Embassy" },
  result: { color: "bg-green-500/20 text-green-300", icon: "📊", label: "Result" },
  deadline: { color: "bg-red-500/20 text-red-300", icon: "⏰", label: "Deadline" },
  message: { color: "bg-zinc-500/20 text-zinc-300", icon: "💬", label: "Message" },
};

export default function UpdateCard({ update }) {
  const config = typeConfig[update.type] || typeConfig.message;

  return (
    <article
      id={update.slug}
      className="p-6 rounded-2xl border border-dark-800/50 bg-dark-800/20 hover:bg-dark-800/30 transition-all scroll-mt-28"
    >
      {/* Type & Tags */}
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        {update.type !== "message" && (
          <span className={`tag ${config.color} text-xs`}>
            {config.icon} {config.label}
          </span>
        )}
        {update.tags.map((tag) => (
          <span
            key={tag}
            className="tag bg-dark-700/50 text-dark-300 text-xs"
          >
            {tag}
          </span>
        ))}
        {update.isPinned && (
          <span className="tag bg-accent-500/20 text-accent-300 text-xs">
            📌 Pinned
          </span>
        )}
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold mb-3">{update.title}</h2>

      {/* Content */}
      <p className="text-dark-300 text-base leading-relaxed mb-4 whitespace-pre-line">
        {update.content}
      </p>

      {/* Links */}
      {update.links && update.links.filter(l => l.url && l.url !== "#").length > 0 && (
        <div className="flex flex-wrap gap-3 mb-6">
          {update.links
            .filter((link) => link.url && link.url !== "#")
            .map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-dark-800 border border-dark-700 hover:border-primary-500/50 hover:bg-dark-700/50 rounded-xl text-xs font-medium transition-all group/link"
            >
              {link.type === "pdf" ? (
                <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              )}
              <span>{link.label}</span>
              <svg className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          ))}
        </div>
      )}

      {/* Meta */}
      <div className="flex items-center gap-4 text-xs text-dark-500">
        <span className="flex items-center gap-1">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {new Date(update.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <span>•</span>
        <span>Source: {update.source}</span>
      </div>
    </article>
  );
}
