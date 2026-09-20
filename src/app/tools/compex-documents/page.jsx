import Link from "next/link";
import PrivacyBanner from "@/components/tools/PrivacyBanner";
import CompexDocumentsTool from "./CompexDocumentsTool";

export const metadata = {
  title: "COMPEX Document Prep Tool",
  description:
    "Upload your scanned files and automatically resize and convert them to the exact specifications required by the COMPEX portal, processed locally on your device.",
  alternates: { canonical: "/tools/compex-documents" },
};

export default function CompexDocuments() {
  return (
    <div className="max-w-6xl mx-auto font-sans">
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
          COMPEX Document Tools
        </h1>
        <p className="text-dark-300">
          Prepare all your documents for the COMPEX scholarship application in
          one place.
        </p>
      </div>

      <PrivacyBanner />

      <div className="bg-dark-900 border border-dark-800 rounded-2xl p-6 mb-8 text-dark-300 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-3">
          About Our COMPEX Document Prep Tool
        </h2>
        <p className="mb-4">
          Preparing documents for the COMPEX Scholarship can be confusing
          because the Embassy of India has very strict file size rules for each
          document. Your passport photo must be exactly 100-200 KB, your
          signature 80-150 KB, and your certificates must be in the correct
          format.
        </p>
        <p className="mb-4">
          Our COMPEX Document Preparation Tool is designed to make this easy.
          Upload your original scanned files, and the tool will automatically
          resize and convert them to the exact specifications required by the
          COMPEX portal.
        </p>
        <p>
          Everything is processed locally on your device, meaning your personal
          data never leaves your computer. Get your 5 required documents
          perfectly formatted and downloaded in one click.
        </p>
      </div>

      <CompexDocumentsTool />
    </div>
  );
}
