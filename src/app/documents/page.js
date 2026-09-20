import { documentCategories } from "@/data/documents";
import DocumentPanel from "./DocumentPanel";
import DocumentTabs from "./DocumentTabs";

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-dark-950 pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 animate-fade-up">
          <span className="inline-block text-sm font-semibold text-emerald-400 tracking-wider uppercase mb-3">
            Document Guidance
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-display)] mb-4">
            Required <span className="gradient-text">Formats</span>
          </h1>
          <p className="text-dark-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            Reference samples for English proficiency letters, translation
            formats, and physical fitness certificates for your scholarship
            application.
          </p>
        </div>

        {/* SEO / informational intro — real, unique paragraph for search crawlers */}
        <div
          className="mb-12 p-5 sm:p-6 rounded-2xl border border-dark-800/60 bg-dark-900/40 animate-fade-up"
          style={{ animationDelay: "0.05s" }}
        >
          <h2 className="text-lg font-bold text-white mb-2">
            Document Guidance for Scholarships
          </h2>
          <p className="text-sm text-dark-300 leading-relaxed">
            Getting your documents ready is the most important part of the ICCR,
            COMPEX and various scholarship application. Many students get
            rejected because their documents are in the wrong format. On this
            page, we provide real reference samples for English proficiency
            letters, English translation formats for Nepali citizenship
            certificates, and physical fitness certificates. Click on the
            samples below to see exactly how your documents should look before
            you upload them to the different scholarship portal.
          </p>
        </div>

        <DocumentTabs
          tabs={documentCategories.map((c) => ({
            id: c.id,
            title: c.title,
            icon: c.icon,
            panel: <DocumentPanel key={c.id} category={c} />,
          }))}
        />
      </div>
    </div>
  );
}
