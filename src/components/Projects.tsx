import { useState } from "react";
import { frontendProjects, backendProjects } from "../data/projects";

type ProjectCardProps = {
  id: number;
  name: string;
  description: string;
  screen_shot: string;
  github_link: string;
  live_link: string;
};

const ProjectCard = ({
  id,
  name,
  description,
  screen_shot,
  github_link,
  live_link,
}: ProjectCardProps) => {
  return (
    <>
      <article
        key={id}
        className="flex flex-col items-center justify-center gap-4 px-4 py-8 rounded shadow-md inset-shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] backdrop-blur-md hover:shadow-lg hover:scale-101 transition"
      >
        <img
          src={screen_shot}
          className="border border-(--color-text-rgba) rounded"
          alt="Projekt Screen Shot"
        />
        <h3 className="underline text-orange-500">{name}</h3>
        <p className="leading-5">{description}</p>
        <nav className="flex justify-around w-full mt-2">
          <a
            href={github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 transition hover:underline"
          >
            <strong>View on GitHub</strong>
          </a>
          <a
            href={live_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 transition hover:underline"
          >
            <strong>View Live!</strong>
          </a>
        </nav>
      </article>
    </>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend">( "frontend" );
  const projects = activeTab === "frontend" ? frontendProjects : backendProjects;
  const headline = "<My Projects />";

  return (
    <section className="flex flex-col items-center gap-6">
      <h2 id="projects-title">{headline}</h2>

      <nav
        aria-label="Project categories"
        className="grid grid-cols-2 divide-x divide-(--color-text-rgba) border-b-1 border-(--color-text-rgba) w-full"
      >
        <button
          aria-controls="projects-list"
          aria-selected={activeTab === "frontend"}
          onClick={() => setActiveTab("frontend")}
          className={`px-4 py-2 rounded-tl text-text transition hover:bg-[rgba(0,0,0,0.04)] hover:cursor-pointer ${
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
          className={`px-4 py-2 rounded-tr text-text transition hover:bg-[rgba(0,0,0,0.04)] hover:cursor-pointer ${
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
          <ProjectCard
          key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
            screen_shot={project.screen_shot}
            github_link={project.github_link}
            live_link={project.live_link}
          />
        ))}
      </section>
    </section>
  );
};

export default Projects;
