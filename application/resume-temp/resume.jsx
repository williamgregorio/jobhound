<div className="resume-container">
      <div className="resume-header">
        <div className="header-body">
          <h3>{resume.resume_information.personal_information.first_name} {resume.resume_information.personal_information.last_name}</h3>
          

        </div>
        <div className="full-row"></div>
        <p>{resume.selectedResume.resume_information.brief_summary}</p>
      </div>

      <div className="resume-experience">
        <div className="title-headings">
        <h3>Experience</h3>
        <div className="row"></div>
      </div>
        {resume.selectedResume.resume_information.work_experience.map(experience => {
          return (
            <>
            <div className="experience-header">
              <h5>{experience.job_title} at <a href={experience.company_url} target="_blank">{experience.company_name}</a></h5>
              <p>{experience.employment_start_period} - {experience.employment_end_period}</p>
            </div>
            <ul>
              {experience.roles.map(role => {
                return (
                  <li>{role}</li>
                )
              })}
            </ul>
            </>
          )
        })}
      </div>
      <div className="title-headings">
        <h3>Skills</h3>
        <div className="row"></div>
      </div>
      <div className="resume-skills">
        <div className="resume-technical-skills">
          <h4>Technical:</h4>
          <ul>
          {resume.selectedResume.resume_information.skills.technical.map(tech => {
            return (
              <li>{tech}</li>
            )
          })}
          </ul>
        </div>

        <div className="resume-soft-skills">
          <h4>Soft</h4>
          <ul>
            {resume.selectedResume.resume_information.skills.soft.map(softy => {
              return (
                <li>{softy}</li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="title-headings">
        <h3>Education</h3>
        <div className="row"></div>
      </div>
        {resume.selectedResume.resume_information.education.institution}
      <div className="title-headings">
        <h3>Certifications</h3>
        <div className="row"></div>
      </div>
      {resume.selectedResume.resume_information.certifications}
      </div>