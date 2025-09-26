import { useState } from "react";
import { frontendProjects, backendProjects } from "../data/projects";

const Projects = () => {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend">(
    "frontend"
  );

  const projects =
    activeTab === "frontend" ? frontendProjects : backendProjects;

  return (
    <section className="flex flex-col items-center gap-4">
      <h2 id="projects-title">My Projects</h2>

      <nav
        aria-label="Project categories"
        className="flex justify-center gap-10"
      >
        <button
          aria-controls="projects-list"
          aria-selected={activeTab === "frontend"}
          onClick={() => setActiveTab("frontend")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "frontend"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Frontend
        </button>

        <button
          aria-controls="projects-list"
          aria-selected={activeTab === "backend"}
          onClick={() => setActiveTab("backend")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "backend"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Backend
        </button>
      </nav>

      <section
        id="projects-list"
        aria-labelledby="projects-title"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <article
            key={project.id}
            className="p-4 rounded-xl shadow-md inset-shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] backdrop-blur-md hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
            <p className="text-sm mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              View on GitHub
            </a>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Projects;
