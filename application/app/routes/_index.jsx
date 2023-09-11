import { Link, Outlet } from "@remix-run/react";
import React from "react";
import { useEffect, useRef } from "react";
export const meta = () => {
  return [
    { title: "Resume" },
    { name: "description", content: "Resume sample" },
  ];
};
export default function Index() {
  return (
    <>
      <main>
        <section className="landing-container">
          <div className="landing-cta">
            <h1>Land that interview faster</h1>
            <p>
              Hunt jobs more efficiently by creating unique resumes for each job
              post, go and try the demo and get that job!
            </p>
            <div className="call-to-action-demo">
              <Link to="/create" id="cta-demo-btn">
                Create Resume
              </Link>
            </div>
          </div>
          <div className="landing-container-img">
            <div className="landing-img"></div>
          </div>
        </section>
      </main>
      <article className="about-container">
        <div className="about-container-img">
          <div className="about-img"></div>
        </div>
        <div className="about-container-text">
          <h2>See why smart people get hired</h2>
          <p>
            The idea is simple, observe the job application you are viewing, create a resume for the job you are viewing, export and send 
          </p>
          <div className="call-to-action-demo">
              <Link to="/create" id="cta-demo-btn">
                Create Resume
              </Link>
            </div>
        </div>
      </article>
    </>
  );
}
