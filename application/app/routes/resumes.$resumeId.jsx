import { useLoaderData } from "@remix-run/react";
import { getData } from "../data/data";
import { Link } from "@remix-run/react";
import exportToPDF from '../components/exportPDF';


export async function loader({ params }) {
  const resumes = await getData();
  if (!params.resumeId) {
    throw new Error("Resume ID is missing (LOADER problem)");
  }
  const resumeId = String(params.resumeId);
  const selectedResume = resumes.find(
    (resume) => resume.resume_id === resumeId
  );

  if (!selectedResume) {
    throw new Error(`Resume with ID ${resumeId} not found (LOADER problem)`);
  }
  return { selectedResume };
}

export default function ResumeDetails() {
  const resume = useLoaderData();
  console.log(resume.selectedResume);
  if (!resume.selectedResume) {
    // Handle the case when 'selectedResume' is not available yet
    return <div>Loading...</div>;
  }
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/resumes">Back to resumes</Link>
          </li>
          <button onClick={exportToPDF}>Export to PDF</button>
          <li>
            <Link to="/export-resume">Edit</Link>
          </li>
        </ul>
      </nav>
      <div className="resume-container">
        <div className="resume-header">
          <div className="header-body">
            <h3>
              {
                resume.selectedResume.resume_information.personal_information
                  .first_name
              }
              {" "}
              {
                resume.selectedResume.resume_information.personal_information
                  .last_name
              }
            </h3>
          </div>
          <div className="full-row"></div>
          <p>{resume.selectedResume.resume_information.brief_summary}</p>
        </div>

        <div className="resume-experience">
          <div className="title-headings">
            <h3>Experience</h3>
            <div className="row"></div>
          </div>

          <div className="experience-header"></div>
          <ul></ul>
        </div>
        <div className="title-headings">
          <h3>Skills</h3>
          <div className="row"></div>
        </div>
        <div className="resume-skills">
          <div className="resume-technical-skills">
            <h4>Technical:</h4>
            <ul></ul>
          </div>

          <div className="resume-soft-skills">
            <h4>Soft</h4>
            <ul></ul>
          </div>
        </div>
        <div className="title-headings">
          <h3>Education</h3>
          <div className="row"></div>
        </div>

        <div className="title-headings">
          <h3>Certifications</h3>
          <div className="row"></div>
        </div>
      </div>
    </>
  );
}
