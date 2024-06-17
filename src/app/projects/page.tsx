'use client'
import React, { useState } from "react";
import Link from "next/link";

interface Project {
  name: string;
  description: string;
  category: string;
  technologies: string;
  previewLink: string;
}

const ProjectPage: React.FC = () => {
  const allProjects: Project[] = [
    {
      name: "E-commerce Website",
      description: "A full-stack e-commerce platform.",
      category: "Full Stack",
      technologies: "React.js, Node.js, MongoDB",
      previewLink: "https://example.com",
    },
    {
      name: "Blog Application",
      description: "A backend-focused blog platform.",
      category: "Backend",
      technologies: "Node.js, Express.js, MongoDB",
      previewLink: "https://example.com",
    },
    {
      name: "Portfolio Website",
      description: "A frontend-focused personal portfolio.",
      category: "Frontend",
      technologies: "React.js, Tailwind CSS",
      previewLink: "https://example.com",
    },
    // Add more projects as needed
  ];

  const [projects, setProjects] = useState<Project[]>(allProjects);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filterProjects = (category: string) => {
    const filteredProjects = category === "All" ? allProjects : allProjects.filter((project) => project.category === category);
    setProjects(filteredProjects);
    setActiveCategory(category);
  };

  return (
    <div className="p-6 bg-white md:m-12 m-2 rounded-lg shadow">
      <ul className="flex justify-center space-x-4 mb-8">
        <li>
          <button
            className={`hover:text-blue-500 ${activeCategory === "Frontend" ? "text-blue-500" : ""}`}
            onClick={() => filterProjects("Frontend")}
          >
            Frontend
          </button>
        </li>
        <li>
          <button
            className={`hover:text-blue-500 ${activeCategory === "Backend" ? "text-blue-500" : ""}`}
            onClick={() => filterProjects("Backend")}
          >
            Backend
          </button>
        </li>
        <li>
          <button
            className={`hover:text-blue-500 ${activeCategory === "Full Stack" ? "text-blue-500" : ""}`}
            onClick={() => filterProjects("Full Stack")}
          >
            Full Stack
          </button>
        </li>
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-gray-600 mb-2">{project.description}</p>
            <div className="flex  items-center gap-2 mb-2">
              <span className=" font-semibold">Category:</span>
              <span>{project.category}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Tech:</span>
              <span>{project.technologies}</span>
            </div>
            <a
              href={project.previewLink}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Preview
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
