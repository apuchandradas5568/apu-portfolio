import React from "react";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaBriefcase,
  FaProjectDiagram,
  FaCode,
} from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="shadow bg-white p-6 rounded-lg md:m-12 m-2 ">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FaCode className="text-blue-600" /> Skills
          </h2>
          <ul className="list-none list-inside mt-2 space-y-2">
            <li>
              <strong className="tracking-wide">Frontend:</strong> HTML, CSS,
              JavaScript, React.js, Redux, Tailwind, Next.js, TypeScript
            </li>
            <li>
              <strong className="tracking-wide">Backend:</strong> Node.js,
              Express.js, MongoDB, Mongoose, Prisma ORM
            </li>
            <li>
              <strong className="tracking-wide">Others:</strong> GitHub,
              Photoshop, Illustrator, Figma, Docker, Kubernetes, Firebase,
              Shadcn, Material-UI
            </li>
            <li>
              <strong className="tracking-wide">Languages:</strong> English,
              Bengali (Native), Hindi, Chinese - HSK2
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FaGraduationCap className="text-blue-600" /> Education
          </h2>
          <p className=" mt-2">
            I am currently pursuing a Bachelor of Business Administration (BBA)
            in my 5th semester at Gujarat University, India, with the ICCR
            Scholarship.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-600" /> Location
          </h2>
          <p className=" mt-2">
            <strong>Permanent Address:</strong>
            <br />
            Durga Charan Dakter Bari, Shibpur, Ratanput-8300, Bhola Sadar,
            Bhola, Barisal, Bangladesh.
            <br />
            <br />
            <strong className="">Present Address:</strong>
            <br /> 1, Rajhpath Society, Paldi-380007, Ahmedabad, Gujarat, India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
