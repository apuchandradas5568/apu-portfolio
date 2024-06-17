import Image from "next/image";
import React from "react";

interface WorkCardProps {
  title: string;
  description: string;
  link: string;
  tech: string;
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  description,
  link,
  tech,
}) => {
  return (
    <div className=" mx-auto  md:px-12 ">
      <div className="flex border items-center m-2 bg-white justify-center gap-8 p-6 rounded-lg ">
        <div className="space-y-2">
          <h1 className="text-2xl font-medium ">{title}</h1>
          <p className="tracking-wide text-sm ">{description}</p>
          <p className="text-sm tracking-wide font-medium ">
            {" "}
            Technologies: {tech}
          </p>
          <br />

          {link && (
            <a
              href={link}
              target="_blank"
              className="text-blue-500 font-semibold "
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
