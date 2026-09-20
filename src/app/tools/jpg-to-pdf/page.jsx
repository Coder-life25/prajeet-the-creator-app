import Link from "next/link";
import PrivacyBanner from "@/components/tools/PrivacyBanner";
import JpgToPdfTool from "./JpgToPdfTool";

export const metadata = {
  title: "JPG to PDF Converter (Free)",
  description:
    "Convert and combine scanned JPG mark sheets and certificates into one PDF for COMPEX or ICCR portals, right in your browser with no server upload.",
  alternates: { canonical: "/tools/jpg-to-pdf" },
};

export default function JpgToPdf() {
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
          JPG to PDF
        </h1>
        <p className="text-dark-300">
          Convert your image files into PDF format instantly.
        </p>
      </div>

      <PrivacyBanner />
      <div className="bg-dark-900 border border-dark-800 rounded-2xl p-6 mb-8 text-dark-300 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-3">
          About Our JPG to PDF Converter
        </h2>
        <p className="mb-4">
          When uploading academic certificates or citizenship documents for
          scholarships like COMPEX or ICCR, the portal usually requires a single
          PDF file rather than separate image files.
        </p>
        <p>
          If you have scanned your Class 10 or Class 12 mark sheets as JPG
          images, our free JPG to PDF tool lets you easily convert and combine
          them into one professional PDF document. This ensures your application
          meets the exact format requirements of the university portal and
          prevents rejection due to wrong file formats. All conversion happens
          directly in your browser, ensuring your private documents are never
          uploaded to a server.
        </p>
      </div>

      <JpgToPdfTool />
    </div>
  );
}
