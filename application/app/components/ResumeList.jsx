import { Link } from "@remix-run/react";

export default function ResumeList({ resumes }) {
  return (
    <>
      <div className="header"></div>
      <table>
        <thead>
          <tr>
            <th>Resume ID</th>
            <th>Resume Name</th>
            <th>Company Name</th>
          </tr>
        </thead>
        <tbody>
          {resumes.map((resume) => {
            return (
              <tr>
                <td>{resume.resume_id}</td>
                <td>{resume.resume_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

