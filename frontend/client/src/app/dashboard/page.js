"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken";
import Link from "next/link";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [resumes, setResumes] = useState([]);
  const router = useRouter();
  let token; // Declare token outside the useEffect

  const preprocessResumes = (resumes) => {
    return resumes.map((resume) => ({
      ...resume,
      education: JSON.parse(resume.education.replace(/\\"/g, '"')),
      experience: JSON.parse(resume.experience.replace(/\\"/g, '"')),
      skills: JSON.parse(resume.skills.replace(/\\"/g, '"')),
    }));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      token = localStorage.getItem("token");

      if (token) {
        const decodedToken = jwt.decode(token);
        const userId = decodedToken.user_id;

        console.log("User ID:", userId);

        fetchUserData(userId, token);
        fetchResumes(userId);
      } else {
        router.push("/login");
      }
    }
  }, [router]);

  const fetchUserData = (userId, token) => {
    fetch(`http://localhost:9000/api/v1/users/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch user data");
        }
      })
      .then((data) => {
        console.log(data);
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        // Handle network or other errors
      });
  };

  const fetchResumes = (userId, token) => {
    fetch(`http://localhost:9000/api/v1/users/${userId}/resumes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log(response)
          return response.json();
        } else {
          throw new Error("Failed to fetch resumes");
        }
      })
      .then((data) => {
        console.log(data);
        setResumes(data); 
      })
      .catch((error) => {
        console.error("Error fetching resumes:", error);
      });
  };


  return (
    <div className="px-8 sm:px-6 lg:px-8 max-w-screen-xl items-center justify-between mx-auto p-4">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900"></h1>
          <p className="mt-2 text-sm text-gray-700">View your resumes</p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none"></div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                  >
                    Resume name
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                  >
                    Created At

                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                {resumes.map((resume,index) => {
                  return (
                    <>
                    <tr key={index}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                    <Link href={`http://localhost:9000/api/v1/users/1/resumes/${resume.resume_id}`}>{resume.title}</Link>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{resume.created_at}</td>
                  </tr>
                  </>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
