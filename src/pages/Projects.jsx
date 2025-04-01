import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
// Note: We don't need to import the Todo component anymore, since we'll navigate to it

const projects = [
  {
    title: "To-Do List App",
    description:
      "A simple task manager built with React, featuring local storage support.",
    tech: ["React", "CSS", "JavaScript"],
    path: "/todo", // Path matching the route in App.jsx
    hasComponent: true,
  },
  {
    title: "Flight Management System",
    description:
      "A C++ program for flight scheduling, ticket bookings, and passenger management.",
    tech: ["C++", "OOP", "File Handling"],
    link: "#",
    hasComponent: false,
  },
  {
    title: "Transport Management System",
    description:
      "A Laravel-based system for managing transport logistics with real-time tracking.",
    tech: ["Laravel", "PHP", "JavaScript", "MySQL"],
    link: "#",
    hasComponent: false,
  },
  {
    title: "Plagiarism & Paraphrase Detection",
    description:
      "A Python-based system that detects plagiarism by comparing text data stored in a database.",
    tech: ["Python", "Flask", "SQL", "Database Management"],
    link: "#",
    hasComponent: false,
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website built using React, Tailwind, and React Router.",
    tech: ["React", "Tailwind CSS", "JavaScript", "React Router"],
    link: "#",
    hasComponent: false,
  },
];

function Projects() {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-16 text-center">
      <h2 className="text-4xl font-bold text-teal-400 mb-8">My Projects</h2>
      <p className="text-lg max-w-2xl mx-auto mb-12">
        Here are some of my key projects, covering frontend, backend, and database-driven applications.
      </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105"
          >
            <h3 className="text-2xl font-semibold text-teal-300 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-teal-600 px-3 py-1 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.hasComponent ? (
              <Link
                to={project.path}
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 flex items-center gap-2"
              >
                View Project <FaExternalLinkAlt />
              </Link>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 flex items-center gap-2"
              >
                View Project <FaExternalLinkAlt />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;