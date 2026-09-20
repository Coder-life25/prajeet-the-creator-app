import Link from "next/link";
import PrivacyBanner from "@/components/tools/PrivacyBanner";
import ImageResizerTool from "./ImageResizerTool";

export const metadata = {
  title: "Free Image Resizer (KB & Pixel Size)",
  description:
    "Free Image Resizer that compresses your COMPEX or ICCR passport photo and signature to the required KB size, 100% in your browser with no server upload.",
  alternates: { canonical: "/tools/image-resizer" },
};

export default function ImageResizerPage() {
  return (
    <div className="max-w-6xl mx-auto font-sans">
      <div className="mb-6">
        <Link href="/tools" className="text-primary-400 hover:text-primary-300 text-sm flex items-center gap-1 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Tools
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-3">Image Resizer</h1>
        <p className="text-dark-300">Resize and compress your images entirely in your browser.</p>
      </div>

      {/* SEO / informational intro — sits above the tool, gives crawlers real content to index */}
      <div className="mb-8 p-5 sm:p-6 rounded-2xl border border-dark-800/60 bg-dark-900/40">
        <h2 className="text-lg font-bold text-white mb-2">About Our Image Resizer Tool</h2>
        <p className="text-sm text-dark-300 leading-relaxed">
          When applying for the COMPEX or ICCR scholarship, the Embassy of India has strict rules for
          photo sizes. Your passport photo must be exactly 100&nbsp;KB to 200&nbsp;KB, and your signature
          must be 80&nbsp;KB to 150&nbsp;KB. If the file is too large, the portal will reject your
          application. Our free Image Resizer tool helps students compress their photos
          instantly. 100% of the processing happens in your browser, so your private documents are never
          uploaded to a server. Simply upload your image, enter the required width and height in pixels,
          and download your perfectly sized photo.
        </p>
      </div>

      <PrivacyBanner />

      <ImageResizerTool />
    </div>
  );
}
