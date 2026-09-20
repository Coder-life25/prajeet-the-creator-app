"use client";

import { useState } from "react";

export default function VideoGrid({ items }) {
  const [playingId, setPlayingId] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, i) => (
        <div
          key={item.id}
          className="group animate-fade-up"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          <div className="rounded-2xl overflow-hidden border border-dark-800/50 bg-dark-800/30 card-hover">
            {/* Thumbnail / Player */}
            <div className="relative aspect-video bg-dark-800 flex items-center justify-center overflow-hidden">
              {playingId === item.id ? (
                <iframe
                  src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1`}
                  title={item.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  {item.youtubeId ? (
                    <div
                      className="w-full h-full cursor-pointer relative group"
                      onClick={() => setPlayingId(item.id)}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Play overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-dark-800 to-dark-700 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center mx-auto mb-2">
                          <svg className="w-5 h-5 text-red-500 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <span className="text-xs text-dark-400">Video coming soon</span>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Content */}
            {item.meta}
          </div>
        </div>
      ))}
    </div>
  );
}
