"use client";

import { useStream } from "@/context/StreamContext";

export default function StreamBadge() {
  const { stream } = useStream();

  if (!stream) return null;

  return (
    <div className="px-4 py-2 rounded-full glass border border-primary-500/30 text-sm font-bold text-primary-400 uppercase tracking-widest">
      Stream: {stream}
    </div>
  );
}
