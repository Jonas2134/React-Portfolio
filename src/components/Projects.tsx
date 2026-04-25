import { useTranslation } from "react-i18next";
import { projects } from "../data/projects";

export type GithubLink = {
  label: string;
  url: string;
};

export type Project = {
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
}: Project) => {
  const { t } = useTranslation();

  return (
    <article
      className="flex flex-col items-center gap-4 px-4 py-8 rounded shadow-md inset-shadow-card backdrop-blur-md hover:shadow-lg hover:scale-101 transition"
    >
      <img
        src={screenShot}
        className="w-full h-48 object-cover border border-(--color-text-rgba) rounded"
        alt={t("projects.screenshotAlt", { name })}
        loading="lazy"
      />
      <h3 className="underline text-orange-500">{name}</h3>
      <ul className="flex flex-wrap justify-center gap-2" aria-label={t("projects.techStackLabel", { name })}>
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
        <p className="text-sm italic text-gray-500 dark:text-gray-400">
          {t("projects.comingSoon")}
        </p>
      ) : (
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 w-full">
          {githubLinks?.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label} – ${name}`}
              className="basis-[calc(50%-0.5rem)] text-center text-blue-600 dark:text-blue-400 transition hover:underline"
            >
              <strong>{link.label}</strong>
            </a>
          ))}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="basis-[calc(50%-0.5rem)] text-center text-blue-600 dark:text-blue-400 transition hover:underline"
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

      <div
        id="projects-list"
        aria-labelledby="projects-title"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-0"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            descriptionKey={project.descriptionKey}
            techStack={project.techStack}
            screenShot={project.screenShot}
            githubLinks={project.githubLinks}
            liveLink={project.liveLink}
            comingSoon={project.comingSoon}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
