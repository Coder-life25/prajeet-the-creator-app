import ExamClient from "./ExamClient";

export async function generateMetadata({ params }) {
  const { setId } = await params;
  return {
    title: "Full Exam",
    robots: { index: false, follow: false },
    alternates: { canonical: `/compex-practice/${setId}/exam` },
  };
}

export default async function Page({ params }) {
  const { setId } = await params;
  return <ExamClient setId={setId} />;
}
