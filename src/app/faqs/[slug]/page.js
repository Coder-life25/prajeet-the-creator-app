import Link from "next/link";
import { scholarships } from "@/data/scholarships";
import { faqsData } from "@/data/faqs";
import FAQAccordion from "./FAQAccordion";

export function generateStaticParams() {
  return scholarships.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const scholarship = scholarships.find((s) => s.slug === resolvedParams.slug);
  if (!scholarship) return { title: "Not Found" };
  return {
    title: `${scholarship.title} FAQs — Eligibility, Deadline & Application Questions Answered`,
    description: `Common questions about the ${scholarship.title}: eligibility, required documents, deadlines, and the application process — answered directly.`,
    alternates: { canonical: `/faqs/${resolvedParams.slug}` },
  };
}

export default async function FAQPage({ params }) {
  const resolvedParams = await params;
  const scholarship = scholarships.find((s) => s.slug === resolvedParams.slug);
  const faqs = faqsData[resolvedParams.slug];

  if (!scholarship || !faqs) {
    return (
      <div className="min-h-screen pt-28 flex items-center justify-center">
        <h1 className="text-2xl font-bold">FAQs not found</h1>
      </div>
    );
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-dark-950 pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="animate-fade-up flex items-center gap-2 text-sm text-dark-500 mb-8">
          <Link href="/" className="hover:text-dark-300 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-dark-300">FAQs</span>
          <span>/</span>
          <span className="text-dark-300">{scholarship.shortName}</span>
        </div>

        {/* Header */}
        <div className="animate-fade-up mb-12">
          <span className="inline-block text-sm font-semibold text-primary-400 tracking-wider uppercase mb-3">
            Frequently Asked Questions
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-4">
            {scholarship.title} <span className="gradient-text">FAQs</span>
          </h1>
          <p className="text-dark-400 text-lg">
            Find answers to common questions about the {scholarship.shortName}{" "}
            application process, eligibility, and benefits.
          </p>
        </div>

        {/* FAQs List */}
        <FAQAccordion faqs={faqs} />
      </div>
    </div>
  );
}
