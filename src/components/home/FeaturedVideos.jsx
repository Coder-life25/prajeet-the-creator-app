import { featuredVideos } from "@/data/videos";
import VideoGrid from "./VideoGrid";

export default function FeaturedVideos() {
  // Title/description are rendered here (server) and passed to the client
  // grid as an element so the text is in the HTML while the player toggle
  // stays interactive.
  const items = featuredVideos.map((video) => ({
    id: video.id,
    youtubeId: video.youtubeId,
    title: video.title,
    meta: (
      <div className="p-4">
        <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary-300 transition-colors mb-1">
          {video.title}
        </h3>
        <p className="text-xs text-dark-400 line-clamp-2">
          {video.description}
        </p>
      </div>
    ),
  }));

  return (
    <section className="relative py-24 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-red-400 tracking-wider uppercase mb-2 animate-fade-up">
            Featured Videos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-4 animate-fade-up animation-delay-100">
            Learn from Our{" "}
            <span className="gradient-text">YouTube Channel</span>
          </h2>
          <p className="text-dark-400 max-w-xl mx-auto animate-fade-in animation-delay-200">
            Watch detailed video guides on scholarship applications, document preparation, and embassy processes.
          </p>
        </div>

        {/* Videos Grid */}
        <VideoGrid items={items} />

        {/* CTA */}
        <div className="text-center mt-10 animate-fade-up">
          <a
            href="https://youtube.com/@prajeetthecreator"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-red-600/20"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            View All Videos on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
