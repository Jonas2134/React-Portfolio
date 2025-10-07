import { skills } from "../data/skills"

type SkillCardProps = {
  name: string;
  icon: string;
};

const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <li className="flex flex-col items-center gap-2 p-4 rounded-2xl shadow-md inset-shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] backdrop-blur-md hover:shadow-lg hover:scale-105 transition">
      <img src={icon} alt={name} className="w-12 h-12" />
      <span>{name}</span>
    </li>
  );
}

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
