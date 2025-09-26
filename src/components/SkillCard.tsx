type SkillCardProps = {
  name: string;
  icon: string;
};

export function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <li className="flex flex-col items-center gap-2 p-4 rounded-2xl inset-shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] backdrop-blur-md hover:scale-105 transition">
      <img src={icon} alt={name} className="w-12 h-12" />
      <span>{name}</span>
    </li>
  );
}
