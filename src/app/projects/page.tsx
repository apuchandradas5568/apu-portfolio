"use client";
import React, { useState } from "react";
import Link from "next/link";
import { allProjects as project } from "@/data";

interface Project {
  name: string;
  description: string;
  category: string;
  technologies: string;
  previewLink: string;
}

const ProjectPage: React.FC = () => {
  const allProjects: Project[] = [...project];

  const [projects, setProjects] = useState<Project[]>(allProjects);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filterProjects = (category: string) => {
    const filteredProjects =
      category === "All"
        ? allProjects
        : allProjects.filter((project) => project.category === category);
    setProjects(filteredProjects);
    setActiveCategory(category);
  };

  return (
    <div className="p-6 bg-white md:m-12 m-2 rounded-lg shadow">
      <ul className="flex justify-center border-b pb-2 space-x-4 mb-8">
        <li>
          <button
            className={`hover:text-blue-500 ${
              activeCategory === "All" ? "text-blue-500" : ""
            }`}
            onClick={() => filterProjects("All")}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={`hover:text-blue-500 ${
              activeCategory === "Frontend" ? "text-blue-500" : ""
            }`}
            onClick={() => filterProjects("Frontend")}
          >
            Frontend
          </button>
        </li>
        <li>
          <button
            className={`hover:text-blue-500 ${
              activeCategory === "Backend" ? "text-blue-500" : ""
            }`}
            onClick={() => filterProjects("Backend")}
          >
            Backend
          </button>
        </li>
        <li>
          <button
            className={`hover:text-blue-500 ${
              activeCategory === "Full Stack" ? "text-blue-500" : ""
            }`}
            onClick={() => filterProjects("Full Stack")}
          >
            Full Stack
          </button>
        </li>
      </ul>
      <div className={`grid text-sm grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${projects.length === 0 && 'grid-cols-1 md:grid-cols-1 lg:grid-cols-1'} `}>
       {projects.length > 0 ?  projects.map((project, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-gray-600 text-sm my-2">{project.description}</p>
            <div className="flex  items-center gap-2 mb-2">
              <span className=" font-semibold">Category:</span>
              <span>{project.category}</span>
            </div>
            <div className="flex gap-2 mb-2">
              <span className="font-semibold">Tech:</span>
              <span>{project.technologies}</span>
            </div>

            {project.previewLink && (
              <a
                href={project.previewLink}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
            )}
          </div>
        )) : (
          <div className="w-full">
            <p className="text-center w-full mx-auto"> No projects to show</p>
            </div>
        ) }
      </div>
    </div>
  );
};

export default ProjectPage;
