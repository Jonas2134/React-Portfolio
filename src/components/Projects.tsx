import { useState } from "react";
import { useTranslation } from "react-i18next";
import { frontendProjects, backendProjects } from "../data/projects";

type ProjectCardProps = {
  id: number;
  name: string;
  descriptionKey: string;
  screenShot: string;
  githubLink: string;
  liveLink: string;
};

const ProjectCard = ({
  id,
  name,
  descriptionKey,
  screenShot,
  githubLink,
  liveLink,
}: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
      <article
        key={id}
        className="flex flex-col items-center justify-center gap-4 px-4 py-8 rounded shadow-md inset-shadow-card backdrop-blur-md hover:shadow-lg hover:scale-101 transition"
      >
        <img
          src={screenShot}
          className="border border-(--color-text-rgba) rounded"
          alt={t("projects.screenshotAlt", { name })}
          loading="lazy"
        />
        <h3 className="underline text-orange-500">{name}</h3>
        <p className="leading-5">{t(descriptionKey)}</p>
        <nav className="flex justify-around w-full mt-2">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 transition hover:underline"
          >
            <strong>{t("projects.viewGithub")}</strong>
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 transition hover:underline"
          >
            <strong>{t("projects.viewLive")}</strong>
          </a>
        </nav>
      </article>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"frontend" | "backend">( "frontend" );
  const projects = activeTab === "frontend" ? frontendProjects : backendProjects;

  return (
    <section id="projects" className="flex flex-col items-center gap-6">
      <h2 id="projects-title">{t("projects.headline")}</h2>

      <nav
        aria-label={t("projects.categoryLabel")}
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
          {t("projects.frontend")}
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
          {t("projects.backend")}
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
            descriptionKey={project.descriptionKey}
            screenShot={project.screenShot}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </section>
    </section>
  );
};

export default Projects;
