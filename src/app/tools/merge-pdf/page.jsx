import Link from "next/link";
import PrivacyBanner from "@/components/tools/PrivacyBanner";
import MergePdfTool from "./MergePdfTool";

export const metadata = {
  title: "Merge PDF Online (Free & Private)",
  description:
    "Free tool to combine multiple PDF files into one document without losing quality, processed securely in your browser and never uploaded to a server.",
  alternates: { canonical: "/tools/merge-pdf" },
};

export default function MergePdf() {
  return (
    <div className="max-w-5xl mx-auto font-sans">
      <div className="mb-6">
        <Link
          href="/tools"
          className="text-primary-400 hover:text-primary-300 text-sm flex items-center gap-1 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Tools
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-3">
          Merge PDF
        </h1>
        <p className="text-dark-300">
          Combine multiple PDF files into a single document.
        </p>
      </div>

      <PrivacyBanner />

      <div className="bg-dark-900 border border-dark-800 rounded-2xl p-6 mb-8 text-dark-300 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-3">
          About Our Merge PDF Tool
        </h2>
        <p className="mb-4">
          Many university application portals, including the ICCR A2A portal,
          require you to combine multiple documents into a single PDF file. For
          example, you may need to merge the front and back of your passport or
          citizenship certificate into one file, or combine multiple pages of
          your mark sheets together.
        </p>
        <p>
          Our free Merge PDF tool allows you to easily combine multiple PDF
          files or images into one single document without losing quality. Your
          files are processed securely in your browser and are never uploaded to
          a server, ensuring your personal scholarship documents remain
          completely private.
        </p>
      </div>

      <MergePdfTool />
    </div>
  );
}
