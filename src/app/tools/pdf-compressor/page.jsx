import Link from "next/link";
import PrivacyBanner from "@/components/tools/PrivacyBanner";
import PdfCompressorTool from "./PdfCompressorTool";

export const metadata = {
  title: "PDF Compressor for Scholarship Portals",
  description:
    "Free PDF Compressor that reduces your document file size entirely in your browser to meet ICCR and COMPEX portal limits, with no upload to any external server.",
  alternates: { canonical: "/tools/pdf-compressor" },
};

export default function PdfCompressorPage() {
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
          PDF Compressor
        </h1>
        <p className="text-dark-300">
          Reduce the file size of your PDF documents (best-effort local
          compression).
        </p>
      </div>

      <PrivacyBanner />

      <div className="bg-dark-900 border border-dark-800 rounded-2xl p-6 mb-8 text-dark-300 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-3">
          About Our PDF Compressor Tool
        </h2>
        <p className="mb-4">
          When applying for the ICCR or COMPEX scholarship, the online portal
          has very strict file size limits. Most documents, like mark sheets and
          citizenship certificates, must be compressed to under 1 MB or 2 MB to
          be accepted by the portal. If your PDF file is too large, the website
          will give you an error and reject your application.
        </p>
        <p>
          Our free PDF Compressor helps Nepalese and Indian students reduce the
          file size of their documents instantly. Because this tool runs
          entirely in your browser, your sensitive documents are never uploaded
          to any external server, ensuring 100% privacy and security. Simply
          upload your large PDF, let the tool compress it, and download a
          perfectly sized file ready for your scholarship application.
        </p>
      </div>

      <PdfCompressorTool />
    </div>
  );
}
