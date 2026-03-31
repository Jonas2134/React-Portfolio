import { useTranslation } from "react-i18next";
import { projects } from "../data/projects";

type GithubLink = {
  label: string;
  url: string;
};

type ProjectCardProps = {
  name: string;
  descriptionKey: string;
  techStack: string[];
  screenShot: string;
  githubLinks?: GithubLink[];
  liveLink?: string;
  comingSoon?: boolean;
};

const ProjectCard = ({
  name,
  descriptionKey,
  techStack,
  screenShot,
  githubLinks,
  liveLink,
  comingSoon,
}: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <article
      className="flex flex-col items-center justify-center gap-4 px-4 py-8 rounded shadow-md inset-shadow-card backdrop-blur-md hover:shadow-lg hover:scale-101 transition"
    >
      <img
        src={screenShot}
        className="w-full h-48 object-cover border border-(--color-text-rgba) rounded"
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
      {comingSoon ? (
        <p className="mt-2 text-sm italic text-gray-500 dark:text-gray-400">
          {t("projects.comingSoon")}
        </p>
      ) : (
        <nav className="flex justify-around w-full mt-2">
          {githubLinks?.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label} – ${name}`}
              className="text-blue-600 dark:text-blue-400 transition hover:underline"
            >
              <strong>{link.label}</strong>
            </a>
          ))}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 transition hover:underline"
            >
              <strong>{t("projects.viewLive")}</strong>
            </a>
          )}
        </nav>
      )}
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
            key={project.name}
            name={project.name}
            descriptionKey={project.descriptionKey}
            techStack={project.techStack}
            screenShot={project.screenShot}
            githubLinks={"githubLinks" in project ? project.githubLinks : undefined}
            liveLink={"liveLink" in project ? project.liveLink : undefined}
            comingSoon={"comingSoon" in project ? project.comingSoon : undefined}
          />
        ))}
      </section>
    </section>
  );
};

export default Projects;
