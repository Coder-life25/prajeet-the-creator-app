"use client";

import { useStream } from "@/context/StreamContext";

export default function StreamLabel() {
  const { stream } = useStream();

  return (
    <p className="text-dark-400 mb-12">Stream: <span className="uppercase text-white font-bold">{stream || "not selected"}</span></p>
  );
}
