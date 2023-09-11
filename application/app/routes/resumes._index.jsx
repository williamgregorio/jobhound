import ResumeList from "../components/ResumeList";
import { useLoaderData } from "@remix-run/react";
import { getData } from "../data/data";

export async function loader() {
  const resumes = await getData();
  console.log(resumes);
  return { resumes };
}

export default function Resumes() {
  const {resumes} = useLoaderData();
  console.log(resumes);

  return (
    <>
      <ResumeList resumes={resumes} />
    </>
  );
}
