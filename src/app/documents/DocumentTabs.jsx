"use client";

import { useState } from "react";

export default function DocumentTabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <>
      {/* Tabs */}
      <div
        className="flex flex-wrap gap-2 mb-8 animate-fade-up"
        style={{ animationDelay: "0.15s" }}
      >
        {tabs.map((doc) => (
          <button
            key={doc.id}
            onClick={() => setActiveTab(doc.id)}
            className={`flex items-center gap-2 px-6 py-4 rounded-xl text-sm font-medium transition-all duration-200 ${
              activeTab === doc.id
                ? "bg-primary-600 text-white shadow-lg shadow-primary-600/20"
                : "bg-dark-800/50 text-dark-400 hover:text-white hover:bg-dark-800"
            }`}
          >
            <span className="text-xl">{doc.icon}</span>
            <span>{doc.title}</span>
          </button>
        ))}
      </div>

      {/* Active Document Content — inactive panels stay in the DOM (hidden) so crawlers see every sample */}
      {tabs.map((t) => (
        <div
          key={t.id}
          hidden={t.id !== activeTab}
          className="animate-fade-up space-y-8"
        >
          {t.panel}
        </div>
      ))}
    </>
  );
}
