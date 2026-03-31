import { useTranslation } from "react-i18next";
import { skills } from "../data/skills"

type SkillCardProps = {
  name: string;
  icon: string;
};

const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <li className="flex flex-col items-center gap-2 p-4 rounded shadow-md inset-shadow-card backdrop-blur-md hover:shadow-lg hover:scale-105 transition">
      <img src={icon} alt={name} className="w-12 h-12" />
      <span>{name}</span>
    </li>
  );
}

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="flex flex-col items-center gap-4 px-2 sm:px-0">
      <h2 className="text-orange-500">{t("skills.headline")}</h2>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-6 w-full">
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </ul>
    </section>
  );
}

export default Skills;
