import { useState } from "react";
import { frontendProjects, backendProjects } from "../data/projects";

const Projects = () => {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend">(
    "frontend"
  );

  const projects =
    activeTab === "frontend" ? frontendProjects : backendProjects;

  return (
    <section className="flex flex-col items-center gap-6">
      <h2 id="projects-title">My Projects</h2>

      <nav
        aria-label="Project categories"
        className="grid grid-cols-2 divide-x divide-(--color-text-rgba) border-b-1 border-(--color-text-rgba) w-full"
      >
        <button
          aria-controls="projects-list"
          aria-selected={activeTab === "frontend"}
          onClick={() => setActiveTab("frontend")}
          className={`px-4 py-2 rounded-tl-lg text-text transition hover:bg-[rgba(0,0,0,0.04)] hover:cursor-pointer ${
            activeTab === "frontend"
              ? "bg-[rgba(0,0,0,0.06)] hover:bg-[rgba(0,0,0,0.08)]"
              : "bg-transparent"
          }`}
        >
          Frontend
        </button>

        <button
          aria-controls="projects-list"
          aria-selected={activeTab === "backend"}
          onClick={() => setActiveTab("backend")}
          className={`px-4 py-2 rounded-tr-lg text-text transition hover:bg-[rgba(0,0,0,0.04)] hover:cursor-pointer ${
            activeTab === "backend"
              ? "bg-[rgba(0,0,0,0.06)] hover:bg-[rgba(0,0,0,0.08)]"
              : "bg-transparent"
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
            className="flex flex-col items-center gap-4 p-4 rounded-4xl shadow-md inset-shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] backdrop-blur-md hover:shadow-lg hover:scale-101 transition"
          >
            <h3 className="underline text-orange-500">{project.name}</h3>
            <p className="leading-5">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              <strong>View on GitHub</strong>
            </a>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Projects;
