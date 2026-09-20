"use client";

import { useApplyModal } from "./ApplyModalProvider";

export default function ApplyButton({ className, children }) {
  const { open } = useApplyModal();
  return (
    <button onClick={open} className={className}>
      {children}
    </button>
  );
}
