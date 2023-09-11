import { Link } from "@remix-run/react";

export default function ResumeList({ resumes }) {
    return (
      <>
		<div className="tita-header"></div>
        <div className="resume-cards">
          {resumes.map((resume) => {
            return (
              <Link
                to={`${resume.resume_id}`}
                className="resume-card"
                key={resume.resume_id}
              >
                <h2>{resume.resume_name}</h2>
                <span>Appliying for:</span>
                <br></br>
                <span>Date created:</span>
              </Link>
            );
          })}
        </div>
      </>
    );
  }
  
