import React, { useState } from "react";
import { postData } from "../data/data";
import { Outlet } from "@remix-run/react";
export default function CreateResume() {
  const [resumeData, setResumeData] = useState({
    resume_name: "",
    company_details: {
      company_name: "",
      website_url: "",
      description: "",
      contact_information: {
        email: "",
        phone: "",
        address: "",
      },
      social_media: {
        facebook: "",
        twitter: "",
        linkedin: "",
      },
      industry: "",
      founding_date: null,
      founders: [],
      headquarters: "",
      key_personnel: {
        ceo: "",
        cto: "",
      },
      products_services: [],
    },
    resume_information: {
      personal_information: {
        first_name: "",
        last_name: "",
      },
      contact_information: {
        email: "",
        phone: "",
      },
      social_media: {
        linkedin: "",
        twitter: "",
        github: "",
      },
      portfolio_url: "",
      brief_summary: "",
      work_experience: [],
      education: {
        degree: "",
        institution: "",
        major: "",
        graduation_year: "",
      },
      skills: {
        technical: [],
        soft: [],
      },
      certifications: [],
    },
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
  
    if (name === "resume_name") {
      // Update the resume name directly in the resumeData state
      setResumeData((prevData) => ({
        ...prevData,
        resume_name: value,
      }));
    } else {
      // Split the name by dot to handle nested properties
      const propertyPath = name.split(".");
      const nestedPropertyName = propertyPath[propertyPath.length - 1];
  
      // Update the nested property value in the resumeData state
      setResumeData((prevData) => ({
        ...prevData,
        [propertyPath[0]]: {
          ...prevData[propertyPath[0]],
          [nestedPropertyName]: value,
        },
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await postData(resumeData);
    // Redirect to the desired page after submitting the form
    // Replace "/resumes" with the appropriate route path
    window.location.href = "/resumes";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <input
  type="text"
  name="resume_name"
  value={resumeData.resume_name}
  onChange={handleInputChange}
  placeholder="Resume Name"
/>

<input
  type="text"
  name="company_details.company_name"
  value={resumeData.company_details.company_name}
  onChange={handleInputChange}
  placeholder="Company Name"
/>

<input
  type="text"
  name="company_details.website_url"
  value={resumeData.company_details.website_url}
  onChange={handleInputChange}
  placeholder="Website URL"
/>

<textarea
  name="company_details.description"
  value={resumeData.company_details.description}
  onChange={handleInputChange}
  placeholder="Description"
></textarea>

<input
  type="text"
  name="company_details.contact_information.email"
  value={resumeData.company_details.contact_information.email}
  onChange={handleInputChange}
  placeholder="Contact Email"
/>

<input
  type="text"
  name="company_details.contact_information.phone"
  value={resumeData.company_details.contact_information.phone}
  onChange={handleInputChange}
  placeholder="Contact Phone"
/>

<input
  type="text"
  name="company_details.contact_information.address"
  value={resumeData.company_details.contact_information.address}
  onChange={handleInputChange}
  placeholder="Contact Address"
/>

<input
  type="text"
  name="company_details.social_media.facebook"
  value={resumeData.company_details.social_media.facebook}
  onChange={handleInputChange}
  placeholder="Facebook URL"
/>

<input
  type="text"
  name="company_details.social_media.twitter"
  value={resumeData.company_details.social_media.twitter}
  onChange={handleInputChange}
  placeholder="Twitter URL"
/>

<input
  type="text"
  name="company_details.social_media.linkedin"
  value={resumeData.company_details.social_media.linkedin}
  onChange={handleInputChange}
  placeholder="LinkedIn URL"
/>

<input
  type="text"
  name="company_details.industry"
  value={resumeData.company_details.industry}
  onChange={handleInputChange}
  placeholder="Industry"
/>

<input
  type="text"
  name="company_details.founding_date"
  value={resumeData.company_details.founding_date}
  onChange={handleInputChange}
  placeholder="Founding Date"
/>

<input
  type="text"
  name="company_details.founders"
  value={resumeData.company_details.founders}
  onChange={handleInputChange}
  placeholder="Founders"
/>

<input
  type="text"
  name="company_details.headquarters"
  value={resumeData.company_details.headquarters}
  onChange={handleInputChange}
  placeholder="Headquarters"
/>

<input
  type="text"
  name="company_details.key_personnel.ceo"
  value={resumeData.company_details.key_personnel.ceo}
  onChange={handleInputChange}
  placeholder="CEO"
/>

<input
  type="text"
  name="company_details.key_personnel.cto"
  value={resumeData.company_details.key_personnel.cto}
  onChange={handleInputChange}
  placeholder="CTO"
/>

<input
  type="text"
  name="company_details.products_services"
  value={resumeData.company_details.products_services}
  onChange={handleInputChange}
  placeholder="Products/Services"
/>
<input
  type="text"
  name="resume_information.personal_information.first_name"
  value={resumeData.resume_information.personal_information.first_name}
  onChange={handleInputChange}
  placeholder="First Name"
/>

<input
  type="text"
  name="resume_information.personal_information.last_name"
  value={resumeData.resume_information.personal_information.last_name}
  onChange={handleInputChange}
  placeholder="Last Name"
/>

<input
  type="text"
  name="resume_information.contact_information.email"
  value={resumeData.resume_information.contact_information.email}
  onChange={handleInputChange}
  placeholder="Contact Email"
/>

<input
  type="text"
  name="resume_information.contact_information.phone"
  value={resumeData.resume_information.contact_information.phone}
  onChange={handleInputChange}
  placeholder="Contact Phone"
/>

<input
  type="text"
  name="resume_information.social_media.linkedin"
  value={resumeData.resume_information.social_media.linkedin}
  onChange={handleInputChange}
  placeholder="LinkedIn URL"
/>

<input
  type="text"
  name="resume_information.social_media.twitter"
  value={resumeData.resume_information.social_media.twitter}
  onChange={handleInputChange}
  placeholder="Twitter URL"
/>

<input
  type="text"
  name="resume_information.social_media.github"
  value={resumeData.resume_information.social_media.github}
  onChange={handleInputChange}
  placeholder="GitHub URL"
/>

<input
  type="text"
  name="resume_information.portfolio_url"
  value={resumeData.resume_information.portfolio_url}
  onChange={handleInputChange}
  placeholder="Portfolio URL"
/>

<textarea
  name="resume_information.brief_summary"
  value={resumeData.resume_information.brief_summary}
  onChange={handleInputChange}
  placeholder="Brief Summary"
></textarea>

<input
  type="text"
  name="resume_information.education.degree"
  value={resumeData.resume_information.education.degree}
  onChange={handleInputChange}
  placeholder="Degree"
/>

<input
  type="text"
  name="resume_information.education.institution"
  value={resumeData.resume_information.education.institution}
  onChange={handleInputChange}
  placeholder="Institution"
/>

<input
  type="text"
  name="resume_information.education.major"
  value={resumeData.resume_information.education.major}
  onChange={handleInputChange}
  placeholder="Major"
/>

<input
  type="text"
  name="resume_information.education.graduation_year"
  value={resumeData.resume_information.education.graduation_year}
  onChange={handleInputChange}
  placeholder="Graduation Year"
/>

{/* Work Experience */}
{resumeData.resume_information.work_experience.map((experience, index) => (
  <div key={index}>
    <input
      type="text"
      name={`resume_information.work_experience.${index}.company_name`}
      value={experience.company_name}
      onChange={handleInputChange}
      placeholder="Company Name"
    />

    <input
      type="text"
      name={`resume_information.work_experience.${index}.company_url`}
      value={experience.company_url}
      onChange={handleInputChange}
      placeholder="Company URL"
    />

    <input
      type="text"
      name={`resume_information.work_experience.${index}.job_title`}
      value={experience.job_title}
      onChange={handleInputChange}
      placeholder="Job Title"
    />

    <input
      type="text"
      name={`resume_information.work_experience.${index}.employment_start_period`}
      value={experience.employment_start_period}
      onChange={handleInputChange}
      placeholder="Employment Start Period"
    />

    <input
      type="text"
      name={`resume_information.work_experience.${index}.employment_end_period`}
      value={experience.employment_end_period}
      onChange={handleInputChange}
      placeholder="Employment End Period"
    />

    <textarea
      name={`resume_information.work_experience.${index}.roles`}
      value={experience.roles}
      onChange={handleInputChange}
      placeholder="Roles"
    ></textarea>
  </div>
))}

{/* Technical Skills */}
{resumeData.resume_information.skills.technical.map((skill, index) => (
  <input
    type="text"
    name={`resume_information.skills.technical.${index}`}
    value={skill}
    onChange={handleInputChange}
    placeholder="Technical Skill"
    key={index}
  />
))}

{/* Soft Skills */}
{resumeData.resume_information.skills.soft.map((skill, index) => (
  <input
    type="text"
    name={`resume_information.skills.soft.${index}`}
    value={skill}
    onChange={handleInputChange}
    placeholder="Soft Skill"
    key={index}
  />
))}

{/* Certifications */}
{resumeData.resume_information.certifications.map((certification, index) => (
  <input
    type="text"
    name={`resume_information.certifications.${index}`}
    value={certification}
    onChange={handleInputChange}
    placeholder="Certification"
    key={index}
  />
))}
        <button type="submit">Submit</button>
      </form>
      <Outlet />
    </>
  );
}
