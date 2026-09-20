import { updates } from "@/data/updates";
import UpdateCard from "./UpdateCard";
import UpdatesFeed from "./UpdatesFeed";

const allTags = [
  "All",
  ...Array.from(new Set(updates.flatMap((u) => u.tags))),
];

export default function UpdatesPage() {
  const sortedUpdates = [...updates].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  });

  return (
    <div className="min-h-screen bg-dark-950 pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 animate-fade-up">
          <span className="inline-block text-sm font-semibold text-accent-500 tracking-wider uppercase mb-3">
            Updates & Alerts
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-display)] mb-4">
            Latest <span className="gradient-text">Updates</span>
          </h1>
          <p className="text-dark-400 text-lg">
            Stay informed with embassy emails, result announcements, deadline
            reminders, and important scholarship notices.
          </p>
        </div>

        <UpdatesFeed
          tags={allTags}
          items={sortedUpdates.map((u) => ({
            id: u.id,
            tags: u.tags,
            card: <UpdateCard key={u.id} update={u} />,
          }))}
        />
      </div>
    </div>
  );
}
