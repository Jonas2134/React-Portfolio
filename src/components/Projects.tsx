import { useTranslation } from "react-i18next";
import { projects } from "../data/projects";

type ProjectCardProps = {
  id: number;
  name: string;
  descriptionKey: string;
  techStack: string[];
  screenShot: string;
  githubLink: string;
  liveLink: string;
};

const ProjectCard = ({
  id,
  name,
  descriptionKey,
  techStack,
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
      <ul className="flex flex-wrap justify-center gap-2" aria-label={`Tech stack for ${name}`}>
        {techStack.map((tech) => (
          <li
            key={tech}
            className="px-2 py-0.5 text-xs font-medium rounded-full bg-[rgba(0,0,0,0.06)] dark:bg-[rgba(255,255,255,0.1)]"
          >
            {tech}
          </li>
        ))}
      </ul>
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

  return (
    <section id="projects" className="flex flex-col items-center gap-6">
      <h2 id="projects-title">{t("projects.headline")}</h2>

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
            techStack={project.techStack}
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
