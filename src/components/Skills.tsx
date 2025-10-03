import { skills } from "../data/skills"
import { SkillCard } from "./SkillCard";

const Skills = () => {
  return (
    <section className="flex flex-col items-center gap-4">
      <h2 className="text-orange-500">My Skills</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </ul>
    </section>
  );
}

export default Skills;
