"use client";

import { useState } from "react";

export default function UpdatesFeed({ tags, items }) {
  const [selectedTag, setSelectedTag] = useState("All");

  const visible =
    selectedTag === "All"
      ? items
      : items.filter((it) => it.tags.includes(selectedTag));

  return (
    <>
      {/* Tag Filter */}
      <div className="flex flex-wrap gap-2 mb-8 animate-fade-up animation-delay-100">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              selectedTag === tag
                ? "bg-primary-600 text-white"
                : "bg-dark-800/50 text-dark-400 hover:text-white hover:bg-dark-800"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Updates List */}
      <div className="space-y-4">
        {visible.map((item, i) => (
          <div
            key={item.id}
            className="animate-fade-up"
            style={{ animationDelay: `${0.1 + Math.min(i, 12) * 0.05}s` }}
          >
            {item.card}
          </div>
        ))}
      </div>

      {visible.length === 0 && (
        <div className="text-center py-20">
          <div className="text-4xl mb-4">🔍</div>
          <p className="text-dark-400">No updates found for this filter.</p>
        </div>
      )}
    </>
  );
}
