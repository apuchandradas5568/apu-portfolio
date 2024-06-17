import React from "react";
import {

  FaBriefcase,

} from "react-icons/fa";

const WorkDetailsPage = () => {
  return (
    <div className="shadow bg-white p-6 rounded-lg md:m-12 m-2 ">
      <div className="">
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FaBriefcase className="text-blue-600" /> Work Experience
          </h2>
          <ul className="list-none list-inside mt-6 space-y-6">
            <li>
              <strong>Frontend Developer Intern</strong> (Oct 2021 - Feb 2022) at A2 Series, Dhaka, Bangladesh.
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Designed UI using HTML, CSS, and JavaScript.</li>
                <li>Integrated React.js components for dynamic user interactions.</li>
                <li>Implemented responsive design principles for mobile compatibility.</li>
              </ul>
            </li>
            <li>
              <strong>Backend Developer Intern</strong> (May 2024 - Aug 2024) at Sarsachic, Delhi.
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Developed RESTful APIs using Node.js and Express.js for an ecommerce project.</li>
                <li>Utilized MongoDB with Mongoose for data modeling and management.</li>
                <li>Implemented user authentication and authorization using JWT tokens and Firebase.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailsPage;
