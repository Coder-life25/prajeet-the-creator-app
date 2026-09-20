import Link from "next/link";
import PrivacyBanner from "@/components/tools/PrivacyBanner";
import PdfToJpgTool from "./PdfToJpgTool";

export const metadata = {
  title: "PDF to JPG Converter (Free)",
  description:
    "Extract high-quality JPG images from your PDF documents instantly in your browser, keeping your sensitive files 100% private and secure on your own device.",
  alternates: { canonical: "/tools/pdf-to-jpg" },
};

export default function PdfToJpg() {
  return (
    <div className="max-w-5xl mx-auto font-sans">
      {/* Back link */}
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

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-3">
          PDF to JPG
        </h1>
        <p className="text-dark-300">
          Convert every page of your PDF into high-quality JPG images. Runs
          entirely in your browser.
        </p>
      </div>

      <PrivacyBanner />
      <div className="bg-dark-900 border border-dark-800 rounded-2xl p-6 mb-8 text-dark-300 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-3">
          About Our PDF to JPG Converter
        </h2>
        <p className="mb-4">
          Sometimes, scholarship application portals only accept image files
          (JPG/JPEG) for certain uploads, such as your passport-size photograph
          or signature, but you might only have them saved as a PDF.
        </p>
        <p>
          Our free PDF to JPG converter allows you to quickly extract
          high-quality images from your PDF documents. This is especially
          helpful when a portal asks for a scanned document but strictly
          requires an image format instead of a PDF. The conversion happens
          instantly in your browser, keeping your sensitive files 100% private
          and secure on your own device.
        </p>
      </div>

      <PdfToJpgTool />
    </div>
  );
}
