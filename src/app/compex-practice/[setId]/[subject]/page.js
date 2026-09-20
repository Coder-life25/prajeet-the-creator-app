import SubjectPracticeClient from "./SubjectPracticeClient";

export async function generateMetadata({ params }) {
  const { setId, subject } = await params;
  return {
    title: "Subject Practice",
    robots: { index: false, follow: false },
    alternates: { canonical: `/compex-practice/${setId}/${subject}` },
  };
}

export default async function Page({ params }) {
  const { setId, subject } = await params;
  return <SubjectPracticeClient setId={setId} subject={subject} />;
}
