import ResultsClient from "./ResultsClient";

export async function generateMetadata({ params }) {
  const { id } = await params;
  return {
    title: "Exam Results",
    robots: { index: false, follow: false },
    alternates: { canonical: `/compex-practice/results/${id}` },
  };
}

export default async function Page({ params }) {
  const { id } = await params;
  return <ResultsClient attemptId={id} />;
}
